import React from 'react';

const Review = ({ title, score }) => {
  console.log('renderizando Reviewww');

  return (
    <div>
      <p>
        {title} -- {score}
      </p>
    </div>
  );
};

export default Review;
