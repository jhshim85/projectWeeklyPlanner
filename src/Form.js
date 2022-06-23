import { useState } from "react";
import firebase from "./firebase";
import { getDatabase, ref, push, set } from 'firebase/database';

const Form = () => {
  // setting useState for user inputs: name, date, event, detail
  const [ selectedDay, setSelectedDay ] = useState('');
  const [ eventCategory, setEventCategory ] = useState('');
  const [ eventDetail, setEventDetail ] = useState('');
  
  const handleInputChange = (e) => {
    if (e.target.id === 'userDay') {
      setSelectedDay(e.target.value);
    } else if (e.target.id === 'userEvent') {
      setEventCategory(e.target.value);
    } else if (e.target.id === 'userEventDetail') {
      setEventDetail(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedDay !== '' && eventCategory !== '' && eventDetail !== '') {
      const database = getDatabase(firebase);
      const userDate = '2020-06-22';
      const dbRef = ref(database, userDate);

      // setting data object structure
      const userInput = {
        // id: selectedDay,
        event: eventCategory,
        detail: eventDetail,
      };

      // push the value of new user input into firebase database
      // push(dbRef, userInput);
      set(dbRef, userInput)
      // clear the user input
      setSelectedDay('');
      setEventCategory('');
      setEventDetail('');
    }
  };

  return (
    // display user input form and calendar
    <section className="form__container">
      <form className="form__userInput" action="submit">
        <label htmlFor="userDay" className="sr-only">Day</label>
        <select required name="userDay" id="userDay" className="userDay" value={selectedDay} onChange={handleInputChange}>
          <option value="" default disabled>Select Day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>

        <label htmlFor="userEvent" className="sr-only">Event</label>
        <select required name="userEvent" id="userEvent" className="userEvent" value={eventCategory} onChange={handleInputChange}>
          <option value="" default disabled>Select Event</option>
          <option value="personal errand">Personal Errand</option>
          <option value="grocery shopping">Grocery Shopping</option>
          <option value="house chores">House Chores</option>
          <option value="extra things">Extra Things To Do</option>
          <option value="social event">Social Event</option>
          <option value="thoughts of the day">Thoughts Of The Day</option>
          <option value="daily journal">Daily Journal</option>
        </select>

        <label htmlFor="userEventDetail"className="sr-only">Detail</label>
        <input required type="text" className="userEventDetail" id="userEventDetail" value={eventDetail} onChange={handleInputChange} placeholder='Please write the details of the selected event'/>

        <button className="userSubmit" onClick={handleSubmit}>ADD</button>
      </form>

    </section>
  )
  
}

export default Form;