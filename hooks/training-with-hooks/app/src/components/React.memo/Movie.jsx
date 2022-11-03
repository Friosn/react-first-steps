import React from 'react';

const Movie = React.memo(({ title, poster }) => {
  console.log('Renderizando');
  return (
    <div>
      <h3>{title}</h3>
      <img src={poster} alt={title} />
    </div>
  );
});

export default Movie;
