import React from 'react';

export const Stats = ({ items }) => {
  if (!items.length) {
    return <p className='stats'>
      <em>
        Start adding items to your packing list🚀
      </em>
    </p>;
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercentage = Math.floor(numPacked / numItems * 100);
  if (numPercentage === '100') {
    return;
  }
  return <footer className='stats'>

    <em>
      {numPercentage === 100 ? 'You got everything! Ready to go ✈️' : `💩 You have ${numItems} items on your list, and you already packed ${numPacked} (${numPercentage})%`}

    </em>
  </footer>;
};
