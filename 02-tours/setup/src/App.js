import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [LoadingState, setLoadingState] = useState(true);
  const [ToursData, setToursData] = useState([]);

  const fetchTours = () => {
    setLoadingState(true); // for redundancy

    try {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setToursData(data);
          setLoadingState(false);
        });
    } catch (err) {
      console.log(err);
      setLoadingState(false);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (LoadingState) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours tours={ToursData} />
    </main>
  )
}

export default App
