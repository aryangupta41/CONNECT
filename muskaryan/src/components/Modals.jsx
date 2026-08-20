import React from 'react';
import { MOOD_COLORS, MOOD_DATA } from '../data/constants';

export const MoodDialog = ({ onSelectMood, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-3xl p-6 w-full max-w-md">
      <h3 className="text-xl font-bold mb-2">Choose Your Mood</h3>
      <p className="text-sm text-gray-500 mb-4">Let them know how you're feeling right now</p>
      <div className="space-y-3 mb-4">
        {Object.entries(MOOD_DATA).map(([moodKey, mood]) => (
          <button
            key={moodKey}
            onClick={() => onSelectMood(moodKey)}
            className="w-full flex items-center gap-4 p-4 rounded-xl border-2 hover:scale-105 transition text-left"
            style={{ borderColor: MOOD_COLORS[moodKey] }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
              style={{ backgroundColor: MOOD_COLORS[moodKey] + '20' }}
            >
              {mood.emoji}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{mood.label}</p>
              <p className="text-xs text-gray-500">{mood.meaning}</p>
            </div>
          </button>
        ))}
      </div>
      <button onClick={onClose} className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold">
        Cancel
      </button>
    </div>
  </div>
);

export const SpotlightDialog = ({ onPost, onClose }) => {
  const textareaRef = React.useRef(null);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-6 w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Create Spotlight</h3>
        <textarea
          ref={textareaRef}
          placeholder="Share what's on your mind..."
          className="w-full border-2 border-gray-200 rounded-xl p-3 mb-4 focus:border-purple-400 focus:outline-none"
          rows="4"
        />
        <div className="flex gap-2">
          <button
            onClick={() => {
              const content = textareaRef.current?.value;
              if (content) onPost(content);
            }}
            className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-xl"
          >
            Post
          </button>
          <button onClick={onClose} className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export const NoteDialog = ({ onSave, onClose }) => {
  const textareaRef = React.useRef(null);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-6 w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Add Note</h3>
        <textarea
          ref={textareaRef}
          placeholder="Write your note..."
          className="w-full border-2 border-gray-200 rounded-xl p-3 mb-4 focus:border-purple-400 focus:outline-none"
          rows="4"
        />
        <div className="flex gap-2">
          <button
            onClick={() => {
              const text = textareaRef.current?.value;
              if (text) onSave(text);
            }}
            className="flex-1 bg-purple-500 text-white py-3 rounded-xl font-semibold"
          >
            Save Note
          </button>
          <button onClick={onClose} className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
