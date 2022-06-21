import firebase from './firebase';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
// import Calendar from 'react-calendar';
import SelectedDate from './SelectedDate';

function App() {
  return (
    <>
      <Header />
      {/* <Calendar /> */}
      <SelectedDate />
    </>
  );
}

export default App;
