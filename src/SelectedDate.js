import { useState } from 'react';
// calling Calendar and its style from installed module
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SelectedDate = () => {

  console.log('selected date re-rendered');

  const [ date, setDate ] = useState(new Date());

  const clickHandler = (date) => {
    console.log(date);
    setDate(date)
  }

  return (
    <div className='result-calendar'>
      <Calendar onChange={clickHandler} value={date} />
      <p>{date.toString()}</p>
    </div>
  )
}

export default SelectedDate;