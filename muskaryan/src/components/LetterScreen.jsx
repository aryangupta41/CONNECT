import React from 'react';

const LetterScreen = ({ onDone }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-red-100 p-6 text-center">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold text-pink-600 mb-6">Helloo babbyyy 💖</h1>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {`my sweet little girl is 21 noww 🥺
mera chhotu si, cutu si, pyari si bachhi 💕

You are the best thing happened to me in my life.
mai kitna thankful hu tumhare liye.
tum hamesha mujhe better banne ke liye motivate karti ho,
even jab tum khud pareshan hoti ho.

hamesha ye sochna ki mujhe kuch bura toh nahi laga…

I will always be with you. Forever ♾️`}
        </p>
        <button
          onClick={onDone}
          className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-xl font-semibold"
        >
          Continue 💞
        </button>
      </div>
    </div>
  );
};

export default LetterScreen;
