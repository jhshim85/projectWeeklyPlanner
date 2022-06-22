// import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
// import { useEffect, useState } from 'react';
// import firebase from './firebase';
import Header from './Header';
import Form from './Form';
// import Calendar from 'react-calendar';
// import SelectedDate from './SelectedDate';
import './App.css';

function App() {

  // const [ user, setUser ] = useState([{}]);
  // const [ date, setDate ] = useState('');
  // const [ category, setCategory ] = useState('');
  // const [ description, setDescription ] = useState('');

  // const handleInputChange = (e) => {
  //   setUser(e.target.value);
  // }

  // useEffect( () => {
  //   const database = getDatabase(firebase);
  //   const dbRef = ref(database);
  //   // onValue event listener that will run the code upon the changes on database value
  //   onValue(dbRef, (res) => {
  //     const data = res.val();
  //     console.log(data);

  //     const newState = [];
      
  //     for (let userName in data) {
  //       const dataObject = {
  //         key: userName,
  //         name: data[userName]['name'],
  //         date: data[userName]['date'],
  //         event: data[userName]['event'],
  //         detail: data[userName]['detail'],
  //       };
  //       newState.push(dataObject);
  //     };
  //     setUser(newState);
  //   });
  // }, [] )

  return (
    <>
      <Header />
      {/* <form action="submit">
        <label htmlFor="userName">Please put your user name</label>
        <input required type="text" id='userName' onChange={handleInputChange} value={user}/>
      </form> */}
      <Form />
    </>
  );
}

export default App;
