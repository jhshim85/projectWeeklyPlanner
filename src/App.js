import firebase from './firebase';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
