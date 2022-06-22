import { useState } from 'react';
import Header from './Header';
// calling Calendar and its style from installed module
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SelectedDate = () => {

  
  const [ display, setDisplay ] = useState(false);
  const [ date, setDate ] = useState(new Date());
  
  console.log('selected date re-rendered', display, date);
  const handleClick = (date) => {
    console.log(date);
    setDate(date)
    setDisplay(!display);
  }

  return (
    <div className='result-calendar'>
      <Calendar onChange={handleClick} value={date} />
      {
        display
          ? <>
              <p>{date.toString()}</p>
              <Header />
            </>
          : null
      }
    </div>
  )
}

export default SelectedDate;