import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    const result = await fetch(url);
    const resultData = await result.json();

    setData(resultData);
    setIsLoading(false);
  };

  const removeTour = (id) => {
    const newTours = data.filter((tour) => tour.id !== id)
    setData(newTours);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (data.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchData()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours toursData={data} removeTour={removeTour} />
    </main>
  );
}

export default App
