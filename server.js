/**
 * Martlet Trivia Simple - Lightweight Node.js Server
 * Host enters questions, players answer, real-time updates
 */

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Game state
const gameState = {
  questions: [],
  currentQuestionIndex: -1,
  isGameActive: false,
  teams: {},
  answers: {},
  scores: {}
};

// Timer state
let timerInterval = null;
let timeRemaining = 60;
let timerPaused = false;

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/player', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'player.html'));
});

app.get('/api/game-state', (req, res) => {
  res.json(gameState);
});

// Socket.io Events
io.on('connection', (socket) => {
  console.log(`[${new Date().toLocaleTimeString()}] Client connected: ${socket.id}`);

  // Host events
  socket.on('host:add-questions', (data) => {
    gameState.questions = data.questions;
    gameState.scores = {};
    data.questions.forEach((q, idx) => {
      gameState.scores[idx] = {};
    });
    io.emit('host:questions-updated', gameState.questions);
    console.log(`[Host] Added ${data.questions.length} questions`);
  });

  socket.on('host:start-game', () => {
    gameState.isGameActive = true;
    gameState.currentQuestionIndex = 0;
    gameState.teams = {};
    gameState.answers = {};
    io.emit('game:started', {
      currentQuestion: gameState.currentQuestionIndex,
      question: gameState.questions[0]
    });
    console.log('[Host] Game started');
  });

  socket.on('host:next-question', () => {
    clearGameTimer();
    if (gameState.currentQuestionIndex < gameState.questions.length - 1) {
      gameState.currentQuestionIndex++;
      gameState.answers = {};
      const q = gameState.questions[gameState.currentQuestionIndex];
      io.emit('game:next-question', {
        currentQuestion: gameState.currentQuestionIndex,
        question: q
      });
      console.log(`[Host] Question ${gameState.currentQuestionIndex + 1}`);
    } else {
      gameState.isGameActive = false;
      io.emit('game:ended', { scores: calculateFinalScores() });
      console.log('[Host] Game ended');
    }
  });

  socket.on('host:reveal-answer', (data) => {
    clearGameTimer();
    const currentQ = gameState.questions[gameState.currentQuestionIndex];
    const scores = {};

    // Calculate scores for this question
    Object.entries(gameState.answers).forEach(([teamId, answerIndex]) => {
      if (answerIndex === currentQ.correctIndex) {
        if (!gameState.scores[gameState.currentQuestionIndex]) {
          gameState.scores[gameState.currentQuestionIndex] = {};
        }
        gameState.scores[gameState.currentQuestionIndex][teamId] = 100;
        scores[teamId] = 100;
      }
    });

    io.emit('game:answer-revealed', {
      correctIndex: currentQ.correctIndex,
      correctAnswer: currentQ.options[currentQ.correctIndex],
      scores,
      leaderboard: calculateLeaderboard()
    });
    console.log('[Host] Answer revealed');
  });

  socket.on('host:end-game', () => {
    clearGameTimer();
    gameState.isGameActive = false;
    io.emit('game:ended', { scores: calculateFinalScores() });
    console.log('[Host] Game ended');
  });

  socket.on('host:reset-game', () => {
    gameState.isGameActive = false;
    gameState.currentQuestionIndex = 0;
    gameState.teams = {};
    gameState.answers = {};
    gameState.scores = {};
    gameState.questions.forEach((q, idx) => {
      gameState.scores[idx] = {};
    });
    clearGameTimer();
    console.log('[Host] Game reset for new group');
  });

  socket.on('host:start-timer', () => {
    if (timerInterval) return; // Timer already running
    
    timeRemaining = 60;
    timerPaused = false;
    
    timerInterval = setInterval(() => {
      if (!timerPaused) {
        timeRemaining--;
        
        // Broadcast to all players
        io.emit('game:timer-tick', { timeRemaining });
        
        if (timeRemaining <= 0) {
          clearGameTimer();
        }
      }
    }, 1000);
    
    console.log('[Host] Timer started');
  });

  socket.on('host:pause-resume-timer', () => {
    timerPaused = !timerPaused;
    console.log(`[Host] Timer ${timerPaused ? 'paused' : 'resumed'}`);
  });

  // Player events
  socket.on('player:join', (data) => {
    const { teamName, playerId } = data;
    gameState.teams[playerId] = teamName;
    io.emit('player:team-joined', {
      teamName,
      playerId,
      teams: Object.values(gameState.teams)
    });
    console.log(`[Player] Team joined: ${teamName}`);
  });

  socket.on('player:answer', (data) => {
    const { playerId, teamName, answerIndex } = data;
    gameState.answers[teamName] = answerIndex;
    io.emit('host:answer-received', {
      teamName,
      answerIndex,
      answersCount: Object.keys(gameState.answers).length,
      totalTeams: Object.keys(gameState.teams).length
    });
    console.log(`[Player] ${teamName} answered: ${answerIndex}`);
  });

  socket.on('disconnect', () => {
    console.log(`[${new Date().toLocaleTimeString()}] Client disconnected: ${socket.id}`);
  });
});

// Helper functions
function clearGameTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  timeRemaining = 60;
  timerPaused = false;
}

function calculateLeaderboard() {
  const leaderboard = {};
  Object.keys(gameState.teams).forEach(playerId => {
    const teamName = gameState.teams[playerId];
    leaderboard[teamName] = 0;
  });

  Object.entries(gameState.scores).forEach(([questionIdx, teamScores]) => {
    Object.entries(teamScores).forEach(([teamName, points]) => {
      if (!leaderboard[teamName]) leaderboard[teamName] = 0;
      leaderboard[teamName] += points;
    });
  });

  return Object.entries(leaderboard)
    .sort((a, b) => b[1] - a[1])
    .map(([teamName, score]) => ({ teamName, score }));
}

function calculateFinalScores() {
  return calculateLeaderboard();
}

// Start server
// Deployed 2026-07-11
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║   🍺 Martlet Trivia Master 🍺         ║
║   Server running on port ${PORT}           ║
╠════════════════════════════════════════╣
║   Host:   http://localhost:${PORT}       ║
║   Player: http://localhost:${PORT}/player ║
╚════════════════════════════════════════╝
  `);
});
