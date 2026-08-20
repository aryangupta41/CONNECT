import React from 'react';

const AgeRevealScreen = ({ onDone }) => {
  return (
    <div
      onClick={onDone}
      className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-pink-200 via-purple-200 to-red-200 overflow-hidden relative"
    >
      {[...Array(35)].map((_, i) => (
        <div
          key={i}
          className="absolute text-4xl animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        >
          {['💖', '💕', '🎉', '✨', '💫'][i % 5]}
        </div>
      ))}
      <h1 className="text-5xl font-extrabold text-pink-600 mb-6 animate-pulse">
        YOU ARE 21 !!!!! 🎉
      </h1>
      <img
        src="https://i.postimg.cc/L85W5Cz4/82e08958_a0fb_4c28_8607_442a44b5bb0b.jpg"
        alt="Age Reveal"
        className="w-64 h-64 rounded-3xl object-cover shadow-2xl mb-6"
      />
      <p className="text-xl text-gray-700 italic">
        meri chhotu si bachhi itti jyada badi ho gayi 🫂
      </p>
      <p className="mt-6 text-sm text-gray-500 animate-pulse">tap anywhere 💖</p>
    </div>
  );
};

export default AgeRevealScreen;
