import React from 'react';
import { MOOD_COLORS } from '../data/constants';

const AvatarWithMood = ({ users, userKey, size = 'md' }) => {
  const user = users[userKey];
  const sizes = { sm: 'w-16 h-16', md: 'w-24 h-24', lg: 'w-32 h-32' };
  const borderSizes = { sm: '4px', md: '6px', lg: '8px' };
  const avatarUrl = user.avatarUrl || 'https://via.placeholder.com/150?text=Avatar';

  return (
    <div className="relative inline-block">
      <div
        className={`${sizes[size]} rounded-full p-1`}
        style={{
          border: `${borderSizes[size]} solid ${MOOD_COLORS[user.mood]}`,
          boxShadow: `0 0 20px ${MOOD_COLORS[user.mood]}40`,
        }}
      >
        <img
          src={avatarUrl}
          alt={user.name}
          className={`${sizes[size]} rounded-full object-cover bg-gray-100`}
          crossOrigin="anonymous"
        />
      </div>
    </div>
  );
};

export default AvatarWithMood;
