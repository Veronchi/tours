import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [data, setData] = useState( [] );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await fetch(url);
      const resultData = await result.json();

      setData(resultData);
      setIsLoading(false);
    };

    fetchData();
  }, [])

  const content = isLoading ? <Loading /> : <Tours toursData={data}/>

  return (
    <main>
      {content}
    </main>
  );
}

export default App
