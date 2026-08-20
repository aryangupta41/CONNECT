import React from 'react';
import { Image, StickyNote, Plus, X } from 'lucide-react';

const HomeScreen = ({ spotlights, currentUser, partner, albums, notes, onAddSpotlight, onDeleteSpotlight, setScreen }) => {
  return (
    <div className="space-y-4">
      {/* Spotlights */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-700">Active Spotlights ✨</h3>
          <button onClick={onAddSpotlight} className="text-sm text-purple-600 font-semibold">+ Add</button>
        </div>

        {spotlights.filter(s => Date.now() < s.expiresAt).length === 0 ? (
          <button
            onClick={onAddSpotlight}
            className="w-full bg-white rounded-3xl p-6 shadow-sm border-2 border-dashed border-pink-200 hover:border-pink-300 transition"
          >
            <Plus className="w-6 h-6 mx-auto mb-2 text-pink-300" />
            <p className="text-sm text-gray-500">Share a moment 💭</p>
          </button>
        ) : (
          spotlights.filter(s => Date.now() < s.expiresAt).map(spotlight => (
            <div key={spotlight.id} className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-4 shadow-sm">
              <div className="flex items-start justify-between mb-2">
                <p className="text-xs text-gray-500">
                  by {spotlight.creator === currentUser ? 'You' : partner.name}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">
                    {Math.round((spotlight.expiresAt - Date.now()) / 3600000)}h
                  </span>
                  <button onClick={() => onDeleteSpotlight(spotlight.id)} className="text-red-500 hover:text-red-700">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-gray-700 mb-2">{spotlight.content}</p>
              {spotlight.imageUrl && (
                <img src={spotlight.imageUrl} alt="spotlight" className="w-full rounded-xl mt-2" />
              )}
            </div>
          ))
        )}
      </div>

      {/* Navigation Grid */}
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => setScreen('memories')}
          className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition"
        >
          <Image className="w-8 h-8 mb-2 text-blue-500 mx-auto" />
          <p className="text-sm font-semibold text-gray-700">Memories 💞</p>
          <p className="text-xs text-gray-400">{albums.length} albums</p>
        </button>
        <button
          onClick={() => setScreen('notes')}
          className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition"
        >
          <StickyNote className="w-8 h-8 mb-2 text-yellow-500 mx-auto" />
          <p className="text-sm font-semibold text-gray-700">Notes 📝</p>
          <p className="text-xs text-gray-400">{notes.length} notes</p>
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
