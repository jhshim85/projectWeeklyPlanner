import { getDatabase, ref, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import firebase from './firebase';
import Header from './Header';
import Form from './Form';
import ListContainer from './ListContainer';
import './App.css';

function App() {
  // setting useState for input data when the page is mounted
  const [ userInputs, setUserInputs ] = useState([]);

  useEffect( () => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);
    // onValue event listener that will run the code upon the changes on database value
    onValue(dbRef, (res) => {
      // get userInput data values from database
      const data = res.val();
      // accessing each data in object format and turn them into array
      const newState = [];

      for (let dateObj in data) {
        const dataObject = {
          id: dateObj,
          day: data[dateObj]['day'],
          event: data[dateObj]['event'],
          detail: data[dateObj]['detail'],
        };
        newState.push(dataObject);
      };
      setUserInputs(newState);
    });
  }, [] );

  return (
    <>
      <div className='wrapper app__container'>
        
        <Header />

        <main>
          <Form />

          <ListContainer inputs={ userInputs } />
        </main>

      </div>
      <footer>2022 @Juno College by Jaehyun Shim</footer>
    </>
  );
}

export default App;
