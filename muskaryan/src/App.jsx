import React, { useState, useEffect, useRef } from 'react';
import { Heart, MessageCircle, Image, Gamepad2, StickyNote, Settings } from 'lucide-react';

import CakeCutScreen from './components/CakeCutScreen';
import AgeRevealScreen from './components/AgeRevealScreen';
import LetterScreen from './components/LetterScreen';
import FinalNoteScreen from './components/FinalNoteScreen';
import HomeScreen from './components/HomeScreen';
import MemoriesScreen from './components/MemoriesScreen';
import NotesScreen from './components/NotesScreen';
import GamesScreen, { TicTacToeModal } from './components/GamesScreen';
import ChatPanel from './components/ChatPanel';
import { MoodDialog, SpotlightDialog, NoteDialog } from './components/Modals';

import {
  DEFAULT_USERS,
  DEFAULT_SPOTLIGHTS,
  DEFAULT_ALBUMS,
  DEFAULT_NOTES,
  DEFAULT_DATES,
} from './data/constants';

// ─── Storage helper (works in browser without window.storage polyfill) ────────
const storage = {
  get: (key) => {
    try {
      const val = localStorage.getItem(key);
      return val ? { value: val } : null;
    } catch {
      return null;
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch {}
  },
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoveQuestion, setShowLoveQuestion] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);
  const [noButtonPos, setNoButtonPos] = useState({ top: '50%', left: '50%' });
  const [angryEmojis, setAngryEmojis] = useState([]);
  const [currentUser] = useState('partnerB');
  const [password, setPassword] = useState('');
  const [screen, setScreen] = useState('home');
  const [chatOpen, setChatOpen] = useState(false);
  const [introStep, setIntroStep] = useState(null);

  const [users, setUsers] = useState(DEFAULT_USERS);
  const [messages, setMessages] = useState([]);
  const [spotlights, setSpotlights] = useState(DEFAULT_SPOTLIGHTS);
  const [albums, setAlbums] = useState(DEFAULT_ALBUMS);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [notes, setNotes] = useState(DEFAULT_NOTES);
  const [importantDates, setImportantDates] = useState(DEFAULT_DATES);
  const [ticTacToeBoard, setTicTacToeBoard] = useState(Array(9).fill(null));
  const [ticTacToeTurn, setTicTacToeTurn] = useState('X');
  const [ticTacToeWinner, setTicTacToeWinner] = useState(null);
  const [messageInput, setMessageInput] = useState('');

  const [moodDialogOpen, setMoodDialogOpen] = useState(false);
  const [spotlightDialogOpen, setSpotlightDialogOpen] = useState(false);
  const [gameModalOpen, setGameModalOpen] = useState(null);
  const [noteDialogOpen, setNoteDialogOpen] = useState(false);

  const hasLoadedRef = useRef(false);

  // ── Load from localStorage on mount ────────────────────────────────────────
  useEffect(() => {
    if (hasLoadedRef.current) return;
    hasLoadedRef.current = true;

    const msgs = storage.get('messages');
    if (msgs) setMessages(JSON.parse(msgs.value));

    const spots = storage.get('spotlights');
    if (spots) {
      const parsed = JSON.parse(spots.value);
      if (parsed.length > 0) setSpotlights(parsed);
    }

    const albs = storage.get('albums');
    if (albs) setAlbums(JSON.parse(albs.value));

    const nts = storage.get('notes');
    if (nts) {
      const parsed = JSON.parse(nts.value);
      if (parsed.length > 0) setNotes(parsed);
    }

    const dts = storage.get('dates');
    if (dts) setImportantDates(JSON.parse(dts.value));

    const ttt = storage.get('tictactoe');
    if (ttt) {
      const parsed = JSON.parse(ttt.value);
      setTicTacToeBoard(parsed.board);
      setTicTacToeTurn(parsed.turn);
      setTicTacToeWinner(parsed.winner);
    }

    const usr = storage.get('users');
    if (usr) setUsers(JSON.parse(usr.value));
  }, []);

  const saveData = (key, data) => {
    storage.set(key, JSON.stringify(data));
  };

  // ── Auth ────────────────────────────────────────────────────────────────────
  const handleLogin = () => {
    if (password === '1201') {
      setShowLoveQuestion(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleLoveResponse = (answer) => {
    if (answer === 'yes') {
      setShowCelebration(true);
      setTimeout(() => {
        setShowCelebration(false);
        setIntroStep('cake');
      }, 2000);
    }
  };

  const handleNoClick = () => {
    const newCount = noClickCount + 1;
    setNoClickCount(newCount);
    if (newCount < 7) {
      setNoButtonPos({
        top: `${Math.random() * 70 + 10}%`,
        left: `${Math.random() * 70 + 10}%`,
      });
      if (newCount >= 4 && newCount < 7) {
        const emojis = ['😤', '😠', '😡'];
        const newAngryEmojis = Array.from({ length: 5 }, (_, i) => ({
          id: Date.now() + i,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
          top: Math.random() * 80 + 10,
          left: Math.random() * 80 + 10,
        }));
        setAngryEmojis(newAngryEmojis);
        setTimeout(() => setAngryEmojis([]), 1000);
      }
    }
  };

  // ── Chat ────────────────────────────────────────────────────────────────────
  const sendMessage = () => {
    if (!messageInput.trim()) return;
    const newMsg = { id: Date.now(), sender: currentUser, text: messageInput, timestamp: Date.now(), seen: false };
    const updated = [...messages, newMsg];
    setMessages(updated);
    saveData('messages', updated);
    setMessageInput('');
  };

  // ── Spotlights ──────────────────────────────────────────────────────────────
  const deleteSpotlight = (spotlightId) => {
    const updated = spotlights.filter(s => s.id !== spotlightId);
    setSpotlights(updated);
    saveData('spotlights', updated);
  };

  const createSpotlight = (content, imageUrl = '') => {
    const newSpotlight = {
      id: Date.now(), content, imageUrl,
      createdAt: Date.now(),
      expiresAt: Date.now() + 24 * 60 * 60 * 1000,
      creator: currentUser,
    };
    const updated = [...spotlights, newSpotlight];
    setSpotlights(updated);
    saveData('spotlights', updated);
    setSpotlightDialogOpen(false);
  };

  // ── Notes ───────────────────────────────────────────────────────────────────
  const deleteNote = (noteId) => {
    const updated = notes.filter(n => n.id !== noteId);
    setNotes(updated);
    saveData('notes', updated);
  };

  const addNote = (text, imageUrl = '') => {
    const newNote = { id: Date.now(), text, imageUrl, createdAt: Date.now() };
    const updated = [...notes, newNote];
    setNotes(updated);
    saveData('notes', updated);
    setNoteDialogOpen(false);
  };

  // ── Dates ───────────────────────────────────────────────────────────────────
  const addImportantDate = (title, date) => {
    const newDate = { id: Date.now(), title, date };
    const updated = [...importantDates, newDate];
    setImportantDates(updated);
    saveData('dates', updated);
  };

  // ── Mood ────────────────────────────────────────────────────────────────────
  const updateMood = (mood) => {
    const updated = { ...users, [currentUser]: { ...users[currentUser], mood } };
    setUsers(updated);
    saveData('users', updated);
    setMoodDialogOpen(false);
  };

  // ── Helpers ─────────────────────────────────────────────────────────────────
  const getCountdown = (targetDate) => {
    const diff = new Date(targetDate) - new Date();
    if (diff < 0) return 'Passed';
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days > 0) return `${days}d`;
    return `${Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}h`;
  };

  // ── Tic Tac Toe ─────────────────────────────────────────────────────────────
  const checkWinner = (board) => {
    const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
    }
    return board.every(cell => cell) ? 'Draw' : null;
  };

  const playTicTacToe = (index) => {
    if (ticTacToeBoard[index] || ticTacToeWinner) return;
    const newBoard = [...ticTacToeBoard];
    newBoard[index] = ticTacToeTurn;
    const winner = checkWinner(newBoard);
    const nextTurn = ticTacToeTurn === 'X' ? 'O' : 'X';
    setTicTacToeBoard(newBoard);
    setTicTacToeTurn(nextTurn);
    setTicTacToeWinner(winner);
    saveData('tictactoe', { board: newBoard, turn: nextTurn, winner });
  };

  const resetTicTacToe = () => {
    const init = { board: Array(9).fill(null), turn: 'X', winner: null };
    setTicTacToeBoard(init.board);
    setTicTacToeTurn(init.turn);
    setTicTacToeWinner(init.winner);
    saveData('tictactoe', init);
  };

  const partner = currentUser === 'partnerB' ? users.partnerA : users.partnerB;

  // ── Intro screens ───────────────────────────────────────────────────────────
  if (introStep === 'cake') return <CakeCutScreen onDone={() => setIntroStep('age')} />;
  if (introStep === 'age') return <AgeRevealScreen onDone={() => setIntroStep('letter')} />;
  if (introStep === 'letter') return <LetterScreen onDone={() => setIntroStep('final')} />;
  if (introStep === 'final') {
    return (
      <FinalNoteScreen
        onDone={() => {
          setIntroStep(null);
          setIsAuthenticated(true);
        }}
      />
    );
  }

  // ── Auth screens ─────────────────────────────────────────────────────────────
  if (!isAuthenticated) {
    if (showCelebration) {
      return (
        <div className="h-screen bg-gradient-to-br from-pink-200 via-red-200 to-purple-200 flex items-center justify-center p-4 overflow-hidden relative">
          <div className="text-center z-10">
            <div className="text-8xl mb-6 animate-bounce">❤️</div>
            <h1 className="text-5xl font-bold text-pink-600 mb-4 animate-pulse">I Love You Too!</h1>
            <div className="text-6xl space-x-2">💕 ❤️ 💖 💗 💓 💝 💘 💞</div>
          </div>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-6xl animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: '2s',
              }}
            >
              {['❤️', '💕', '💖', '✨', '🎉'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      );
    }

    if (showLoveQuestion) {
      return (
        <div className="h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center p-4 relative overflow-hidden">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center relative z-10">
            <div className="text-6xl mb-6">💕</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Muskan, do you love me?</h1>
            {noClickCount < 7 ? (
              <div className="flex gap-4 relative h-16">
                <button
                  onClick={() => handleLoveResponse('yes')}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 text-white py-4 rounded-xl font-semibold text-xl hover:shadow-lg transition hover:scale-105"
                >
                  Yes ❤️
                </button>
                <button
                  onClick={handleNoClick}
                  className={`py-4 px-8 rounded-xl font-semibold text-xl transition hover:scale-105 bg-gray-300 text-gray-700 hover:bg-gray-400 ${noClickCount > 0 ? 'fixed w-32' : 'flex-1'}`}
                  style={noClickCount > 0 ? {
                    top: noButtonPos.top,
                    left: noButtonPos.left,
                    transform: 'translate(-50%, -50%)',
                    transition: 'all 0.3s ease',
                    zIndex: 50,
                  } : {}}
                >
                  No
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleLoveResponse('yes')}
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-4 rounded-xl font-semibold text-2xl hover:shadow-lg transition hover:scale-105 animate-pulse"
              >
                Yes ❤️
              </button>
            )}
            {noClickCount > 0 && noClickCount < 4 && (
              <p className="text-sm text-gray-500 mt-4 animate-pulse">Come on, try again! 💕</p>
            )}
          </div>
          {angryEmojis.map(item => (
            <div
              key={item.id}
              className="absolute text-5xl animate-ping pointer-events-none"
              style={{ top: `${item.top}%`, left: `${item.left}%`, animationDuration: '1s' }}
            >
              {item.emoji}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 mx-auto mb-4 text-pink-500" fill="currentColor" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Muskaryan</h1>
            <p className="text-gray-500">Enter password to continue</p>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            placeholder="Password"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl mb-4 focus:border-pink-400 focus:outline-none"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition"
          >
            Unlock
          </button>
        </div>
      </div>
    );
  }

  // ── Main app ─────────────────────────────────────────────────────────────────
  return (
    <div className="h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Heart className={`w-6 h-6 ${partner.online ? 'text-pink-500 animate-pulse' : 'text-gray-300'}`} fill={partner.online ? 'currentColor' : 'none'} />
          <div>
            <p className="font-semibold text-gray-800">Aryan 💕</p>
            <p className="text-xs text-gray-500">{partner.online ? 'Online ✨' : 'Offline'}</p>
          </div>
        </div>
        <Settings className="w-5 h-5 text-gray-400 cursor-pointer" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {screen === 'home' && (
          <HomeScreen
            spotlights={spotlights}
            currentUser={currentUser}
            partner={partner}
            albums={albums}
            notes={notes}
            onAddSpotlight={() => setSpotlightDialogOpen(true)}
            onDeleteSpotlight={deleteSpotlight}
            setScreen={setScreen}
          />
        )}
        {screen === 'memories' && (
          <MemoriesScreen
            albums={albums}
            setAlbums={setAlbums}
            saveData={saveData}
            selectedAlbum={selectedAlbum}
            setSelectedAlbum={setSelectedAlbum}
          />
        )}
        {screen === 'notes' && (
          <NotesScreen
            users={users}
            notes={notes}
            importantDates={importantDates}
            onDeleteNote={deleteNote}
            onAddNote={() => setNoteDialogOpen(true)}
            onAddDate={() => {
              const title = prompt('Event name:');
              const date = prompt('Date (YYYY-MM-DD):');
              if (title && date) addImportantDate(title, date);
            }}
            onOpenMood={() => setMoodDialogOpen(true)}
            getCountdown={getCountdown}
          />
        )}
        {screen === 'games' && (
          <GamesScreen onOpenGame={setGameModalOpen} />
        )}
      </div>

      {/* Bottom Nav */}
      <div className="bg-white border-t border-gray-200 px-6 py-3 flex justify-around">
        <button onClick={() => setScreen('home')} className={screen === 'home' ? 'text-pink-500' : 'text-gray-400'}>
          <Heart className="w-6 h-6" />
        </button>
        <button onClick={() => setScreen('memories')} className={screen === 'memories' ? 'text-blue-500' : 'text-gray-400'}>
          <Image className="w-6 h-6" />
        </button>
        <button onClick={() => setScreen('games')} className={screen === 'games' ? 'text-green-500' : 'text-gray-400'}>
          <Gamepad2 className="w-6 h-6" />
        </button>
        <button onClick={() => setScreen('notes')} className={screen === 'notes' ? 'text-purple-500' : 'text-gray-400'}>
          <StickyNote className="w-6 h-6" />
        </button>
      </div>

      {/* Chat FAB */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-24 right-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Modals & Overlays */}
      {chatOpen && (
        <ChatPanel
          messages={messages}
          currentUser={currentUser}
          partner={partner}
          messageInput={messageInput}
          setMessageInput={setMessageInput}
          sendMessage={sendMessage}
          onClose={() => setChatOpen(false)}
        />
      )}
      {moodDialogOpen && <MoodDialog onSelectMood={updateMood} onClose={() => setMoodDialogOpen(false)} />}
      {spotlightDialogOpen && <SpotlightDialog onPost={createSpotlight} onClose={() => setSpotlightDialogOpen(false)} />}
      {noteDialogOpen && <NoteDialog onSave={addNote} onClose={() => setNoteDialogOpen(false)} />}
      {gameModalOpen === 'tictactoe' && (
        <TicTacToeModal
          board={ticTacToeBoard}
          turn={ticTacToeTurn}
          winner={ticTacToeWinner}
          onPlay={playTicTacToe}
          onReset={resetTicTacToe}
          onClose={() => setGameModalOpen(null)}
        />
      )}
    </div>
  );
};

export default App;
