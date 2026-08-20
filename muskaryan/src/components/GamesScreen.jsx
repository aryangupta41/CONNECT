import React from 'react';
import { X } from 'lucide-react';

const GamesScreen = ({ onOpenGame }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Games</h2>
      <button
        onClick={() => onOpenGame('tictactoe')}
        className="w-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
      >
        <div className="text-4xl mb-2">⭕❌</div>
        <p className="font-semibold text-gray-700">Tic Tac Toe</p>
        <p className="text-xs text-gray-400 mt-1">Classic game for two</p>
      </button>
    </div>
  );
};

export const TicTacToeModal = ({ board, turn, winner, onPlay, onReset, onClose }) => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-4 flex items-center justify-between">
        <p className="font-semibold">Tic Tac Toe</p>
        <button onClick={onClose}><X className="w-6 h-6" /></button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        {winner ? (
          <div className="text-center mb-8">
            <p className="text-3xl font-bold text-gray-800 mb-2">
              {winner === 'Draw' ? "It's a Draw!" : `${winner} Wins!`}
            </p>
            <button
              onClick={onReset}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-xl"
            >
              Play Again
            </button>
          </div>
        ) : (
          <p className="text-xl font-semibold text-gray-700 mb-6">Current Turn: {turn}</p>
        )}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {board.map((cell, index) => (
            <button
              key={index}
              onClick={() => onPlay(index)}
              className="w-20 h-20 bg-white border-4 border-gray-300 rounded-xl text-4xl font-bold hover:bg-gray-50 transition"
            >
              {cell}
            </button>
          ))}
        </div>
        <button onClick={onReset} className="text-sm text-gray-500 underline">Reset Game</button>
      </div>
    </div>
  );
};

export default GamesScreen;
