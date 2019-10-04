import React, { useEffect, useState } from 'react';
import './home.css';
import NavBar from './Components/navbar/NavBar';

export default function Home() {

  const [doggyData, setDoggyData] = useState(null);
  const captionArray = ["Look at this cute doggo!", "Check out this cute doggy!", "Barky boi!", "I need one of these", "so fuzzy!"];
  const [captionText, setCaptionText] = useState('');

  const handleDogChange = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDoggyData(data.message));

    let i = Math.floor(Math.random() * captionArray.length)
    setCaptionText(captionArray[i]);
  }

  useEffect(() => { // Call the handleDogChange to fetch API data on componentDidMount
    handleDogChange();
  }, []);

  return (
    <div className="Home">
      {/* Just wanted to show that I understand the importance of Modularization! */}
      <NavBar />
      <div className="content">
        <h1>The Great Pooch-Viewer!</h1>
        <div className="image-controls">

          <div className="image-container">
            <img src={doggyData} alt="Cute pooch!" />
          </div>

          <span>{captionText}</span>

          <div className="button" onClick={handleDogChange}>
            Change dog!
          </div>

        </div>
      </div>


    </div>
  )
}

