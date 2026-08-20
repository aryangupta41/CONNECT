import React from 'react';
import { Heart, Plus, X } from 'lucide-react';
import AvatarWithMood from './AvatarWithMood';

const NotesScreen = ({
  users, notes, importantDates,
  onDeleteNote, onAddNote, onAddDate,
  onOpenMood, getCountdown,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Notes & Details 💌</h2>

      {/* Mood avatars */}
      <div className="bg-white rounded-3xl p-6 shadow-md">
        <div className="flex items-center justify-around mb-6">
          <div className="text-center">
            <AvatarWithMood users={users} userKey="partnerB" size="lg" />
            <p className="text-sm text-gray-600 mt-3 font-semibold">Muskan</p>
          </div>
          <Heart className="w-8 h-8 text-pink-500" fill="currentColor" />
          <div className="text-center">
            <AvatarWithMood users={users} userKey="partnerA" size="lg" />
            <p className="text-sm text-gray-600 mt-3 font-semibold">Aryan</p>
          </div>
        </div>
        <button onClick={onOpenMood} className="w-full text-sm text-purple-600 font-semibold">
          Change Your Mood Color
        </button>
      </div>

      {/* Important Dates */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-6 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-700">Important Dates 💗</h3>
          <button onClick={onAddDate} className="text-purple-600 text-sm font-semibold">+ Add</button>
        </div>
        {importantDates.map(date => (
          <div key={date.id} className="flex items-center justify-between mb-3 p-3 bg-white rounded-2xl shadow-sm">
            <div>
              <p className="font-semibold text-gray-700">{date.title} ❤️</p>
              <div className="flex gap-2 mt-1">
                <p className="text-xs text-gray-500">Aryan</p>
                <p className="text-xs text-gray-400">&</p>
                <p className="text-xs text-gray-500">Muskan</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-purple-600">{getCountdown(date.date)}</p>
              <p className="text-xs text-gray-500">{new Date(date.date).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Notes */}
      <h3 className="font-semibold text-gray-700 mt-6">Shared Notes 📝</h3>
      {notes.map(note => (
        <div key={note.id} className="bg-white rounded-3xl p-4 shadow-md relative">
          <button
            onClick={() => onDeleteNote(note.id)}
            className="absolute top-3 right-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full p-1 transition"
          >
            <X className="w-4 h-4" />
          </button>
          {note.imageUrl && (
            <img src={note.imageUrl} alt="note" className="w-full rounded-2xl mb-3 object-cover" />
          )}
          <p className="text-gray-700 pr-8">{note.text}</p>
          <p className="text-xs text-gray-400 mt-2">{new Date(note.createdAt).toLocaleString()}</p>
        </div>
      ))}

      <button
        onClick={onAddNote}
        className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-3xl p-4 shadow-md hover:shadow-lg transition"
      >
        <Plus className="w-5 h-5 inline mr-2" />
        Add Note 💭
      </button>
    </div>
  );
};

export default NotesScreen;
