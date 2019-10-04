import React, { useEffect, useState } from 'react'
import './clock.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendar } from '@fortawesome/free-solid-svg-icons'

export default function Clock() {

  const [date, setDate] = useState();
  const [formattedTime, setformattedTime] = useState();
  const [formattedDate, setFormattedDate] = useState();
  // const [show24h, setShow24h] = useState(false);

  setInterval(() => { //Counts up by 1 second and rerenders the component accordingly.
    let date = new Date();
    //Changed to toString so I could use padStart
    let hour = (date.getHours() > 12 ? date.getHours() - 12 : date.getHours()).toString().padStart(2, '0');
    let mins = (date.getMinutes()).toString().padStart(2, '0');
    setformattedTime(`${hour}:${mins}`)


    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    setFormattedDate(month + '/' + day + '/' + year);
  }, 1000)

  return (
    <div className="clock">
      <div className="clock-section">
        <FontAwesomeIcon icon={faClock} />
        <span>
          {formattedTime}
        </span>
      </div>
      <div className="clock-section">
        <FontAwesomeIcon icon={faCalendar} />
        <span>
          {formattedDate}
        </span>
      </div>
    </div>
  )
}
