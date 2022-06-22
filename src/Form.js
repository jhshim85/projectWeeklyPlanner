import { useState } from "react";
import firebase from "./firebase";
import { getDatabase, ref, push } from 'firebase/database';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Form = () => {
  // setting useState for user inputs: name, date, event, detail
  const [ user, setUser ] = useState([{}]);
  const [ date, setDate ] = useState(new Date());
  const [ eventCategory, setEventCategory ] = useState('');
  const [ eventDetail, setEventDetail ] = useState([{}]);
  
  const handleInputChange = (e) => {
    if (e.target.id === 'userName') {
      setUser(e.target.value);
    } else if (e.target.id === 'userEvent') {
      setEventCategory(e.target.value);
    } else if (e.target.id === 'userEventDetail') {
      setEventDetail(e.target.value);
    }
  };

  const handleClick = (date) => {
    setDate(date)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user !== '' && date !== '' && eventCategory !== '' && eventDetail !== '') {
      const database = getDatabase(firebase);
      const dbRef = ref(database);

      // setting data object structure
      const userInput = {
        name: user,
        date: date.toString(),
        event: eventCategory,
        detail: eventDetail,
      };

      // push the value of new user input into firebase database
      push(dbRef, userInput);
      // clear the user input
      setUser('');
      setEventCategory('');
      setEventDetail('');
    }
  };

  return (
    // display user input form and calendar
    <section className="form__container">
      <form className="form__userInput" action="submit" onSubmit={handleSubmit}>
        <label htmlFor="userName">Please enter your name</label>
        <input type="text" className="userName" id="userName" value={user} onChange={handleInputChange} />

        <Calendar onChange={handleClick} value={date} />

        <label htmlFor="userEvent">Please select an event:</label>
        <select name="userEvent" id="userEvent" className="userEvent" value={eventCategory} onChange={handleInputChange}>
          <option value="" default disabled>select an event</option>
          <option value="personal errand">Personal Errand</option>
          <option value="grocery shopping">Grocery Shopping</option>
          <option value="house chores">House Chores</option>
          <option value="extra things">Extra Things To Do</option>
          <option value="social event">Social Event</option>
          <option value="thoughts of the day">Thoughts Of The Day</option>
          <option value="daily journal">Daily Journal</option>
        </select>

        <label htmlFor="userEventDetail">Plesae write details of the event</label>
        <input type="text" className="userEventDetail" id="userEventDetail" value={eventDetail} onChange={handleInputChange} />

        <button>submit</button>
      </form>

    </section>
  )
  
}

export default Form;