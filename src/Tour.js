import React, { useState } from 'react';

const Tour = ({id, name, info, image, price, removeTour }) => {
  const [isShortInfo, setIsShortInfo] = useState(true);

  return (
    <div>
      <article className="single-tour">
        <img src={image} alt={name}></img>
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>
            {isShortInfo ? `${info.slice(0, 200)}...` : info}
            <button onClick={() => setIsShortInfo(!isShortInfo)}>
              {isShortInfo ? "read more" : "show less"}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeTour(id)}>not interested</button>
        </footer>
      </article>
    </div>
  )
};

export default Tour;
