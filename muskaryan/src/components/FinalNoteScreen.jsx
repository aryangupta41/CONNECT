import React from 'react';

const FinalNoteScreen = ({ onDone }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 p-6 text-center">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold text-purple-600 mb-6">One last thing 💌</h1>
        <p className="text-gray-700 whitespace-pre-line">
          {`This is my first app, and I am so happy that it is for you ❤️

ye abhi complete nahi hai, but I promise I will finish it.
We both will use it together.

abhi ke liye itna hi…
chhota sa gift tumhare liye 🎁`}
        </p>
        <button
          onClick={onDone}
          className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-xl font-semibold"
        >
          Open App 💕
        </button>
      </div>
    </div>
  );
};

export default FinalNoteScreen;
