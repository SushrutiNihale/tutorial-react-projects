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

  const removeTour = (id) => {
    const updatedToursData = ToursData.filter((e) => e.id !== id);
    setToursData(updatedToursData);
  }

  if (LoadingState) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // if no tours are left
  if (ToursData.length === 0) {
    return (
      <main>
        <h2>No Tours Left</h2>
        <button
          onClick={fetchTours}
          className='btn'>
          Click to get tours
        </button>
      </main>
    )
  }
  return (
    <main>
      {/* passing removeTour as a prop
      removeTour is also passed from Tours to Tour
      this leads to prop drilling in our app*/}
      <Tours tours={ToursData} removeTour={removeTour} />
    </main>
  )
}

export default App
