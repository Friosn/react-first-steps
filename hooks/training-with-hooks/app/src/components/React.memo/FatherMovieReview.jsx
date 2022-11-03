import React, { useState } from 'react';

import Movie from './Movie';
import Review from './Review';

const FatherMovieReview = () => {
  const [score, setScore] = useState(0);

  return (
    <div className="father">
      <Movie
        title="Guardians of the Galaxy"
        poster="https://m.media-amazon.com/images/I/61-ndDQWTdL._AC_.jpg"
      />

      <label>Change score:</label>
      <br />
      <input type="number" value={score} onChange={(e) => setScore(e.target.value)} />
      <Review
        title="La disfruté mucho, genial selección musical, muy palomitera"
        score={score}
      />
    </div>
  );
};

export default FatherMovieReview;
