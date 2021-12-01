import React, { useState } from 'react';

function shortenInfo(text) {
  let shortText = `${text.slice(0, 200)}...`;

  return shortText;
}


function createTour(dataArr) {

  let tourCard = dataArr.map(({ id, name, info, image, price }) => {

    // const [shortInfo, setShortInfo] = useState({infoText: shortenInfo(info), btnText: 'read more'});
    // const [fullInfo, setFullInfo] = useState({infoText: info, btnText: 'show less'})
    // const [isShort, setIsShort] = useState(true);

    // const updateInfo = () => {
    //   setStateInfo()
    // }

    return (
      <article key={id} className="single-tour">
        <img src={image} alt={name}></img>
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>
            {info}
            <button>read more</button>
          </p>
          <button className="delete-btn">not interested</button>
        </footer>
      </article>
    )
  })

  return tourCard;
}

const Tour = ({ toursData }) => {

  let tour = createTour(toursData);

  return (
    <div>
      {tour}
    </div>
  )
};

export default Tour;
