import React from 'react';
import Tour from './Tour';

const Tours = ({toursData}) => {

  // console.log(toursData)
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
        <Tour toursData={toursData}/>
    </section>

  );
};

export default Tours;
