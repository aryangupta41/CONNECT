import React from 'react';
import { Image, X } from 'lucide-react';

const MemoriesScreen = ({ albums, setAlbums, saveData, selectedAlbum, setSelectedAlbum }) => {
  if (selectedAlbum) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => setSelectedAlbum(null)} className="text-gray-600 hover:text-gray-800">
            <X className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800">{selectedAlbum.title}</h2>
            <p className="text-xs text-gray-400">
              {new Date(selectedAlbum.createdAt).toLocaleDateString()} · {selectedAlbum.images.length} photos
            </p>
          </div>
        </div>

        {selectedAlbum.images.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-md">
            <Image className="w-16 h-16 mx-auto mb-4 text-pink-300" />
            <p className="text-gray-500">No photos yet 🤍</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {selectedAlbum.images.map((photo, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-square bg-gray-200">
                  <img
                    src={photo.url}
                    alt={`Photo ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {photo.caption && (
                  <div className="p-2">
                    <p className="text-xs text-gray-600 text-center">{photo.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Memories 💞</h2>
        <button
          onClick={() => {
            const title = prompt('Album name:');
            const coverPhoto = prompt('Cover photo URL:');
            if (title && coverPhoto) {
              const newAlbum = { id: Date.now(), title, createdAt: Date.now(), coverPhoto, images: [] };
              const updated = [...albums, newAlbum];
              setAlbums(updated);
              saveData('albums', updated);
            }
          }}
          className="text-sm text-purple-600 font-semibold"
        >
          + New Album
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {albums.map(album => (
          <button
            key={album.id}
            onClick={() => setSelectedAlbum(album)}
            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition text-left"
          >
            <div className="aspect-video w-full bg-gradient-to-br from-pink-100 to-purple-100">
              <img src={album.coverPhoto} alt={album.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-800 text-sm mb-1">{album.title}</h3>
              <p className="text-xs text-gray-400">{new Date(album.createdAt).toLocaleDateString()}</p>
              <p className="text-xs text-gray-500 mt-1">{album.images.length} photos 📷</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MemoriesScreen;
