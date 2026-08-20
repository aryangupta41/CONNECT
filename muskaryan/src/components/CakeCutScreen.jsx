import React, { useState } from 'react';

const CakeCutScreen = ({ onDone }) => {
  const [cut, setCut] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  return (
    <>
      {celebrate && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-5xl animate-bounce"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random()}s`,
              }}
            >
              {['🎉', '🎊', '💖', '✨', '🎈'][i % 5]}
            </div>
          ))}
        </div>
      )}
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-red-200">
        {!cut ? (
          <>
            <h1 className="text-3xl font-bold mb-6">Cut the cake 🎂</h1>
            <div
              onClick={() => {
                setCut(true);
                setCelebrate(true);
              }}
              className="text-[160px] cursor-pointer select-none hover:scale-105 transition"
            >
              🎂
            </div>
            <p className="mt-4 text-gray-600">Tap the cake</p>
          </>
        ) : (
          <>
            <div className="text-7xl mb-6">🎂🫂</div>
            <h1
              onClick={onDone}
              className="text-4xl font-bold text-pink-600 cursor-pointer animate-pulse"
            >
              HAPPY BIRTHDAY MUSKANN !!
            </h1>
            <p className="mt-4 text-gray-600">Tap to continue 💖</p>
          </>
        )}
      </div>
    </>
  );
};

export default CakeCutScreen;
