// import { useEffect, useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// const SelectedDate = (props) => {
  
//   const [isDisplayed, setIsDisplayed] = useState(false);
//   // const [ selectedDateInput, setSelectedDateInput ] = useState({});
//   const [ selectedDate, setSelectedDate ] = useState(new Date());

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsDisplayed(!isDisplayed);
//   }
//   const handleClick = (date) => {
//     setSelectedDate(date)
//   }

//   // useEffect( () => {
//   //   const sortedInput = props.inputs.reduce( (inputByDate, input) => {
//   //     inputByDate[input['date']] = (inputByDate[input['date']] || []).concat(input)
//   //     console.log(inputByDate);
//   //     return inputByDate;
//   //   }, {});
//   //   console.log(sortedInput);
//   //   setSelectedDateInput(sortedInput);
//   // }, [props.inputs]);
//   // console.log(props.inputs);
//   const copyOfInput = [...props.inputs];
//   // console.log(copyOfInput);
//   // console.log(props.inputs.date);
//   const selectedDateInput = copyOfInput.filter( (copyInput) => {
//     console.log(copyInput.date);
//     return copyInput.date;
//   } );
//   // console.log(selectedDateInput);

//   return (
//     <div className='result__container'>
//       <button onClick={handleSubmit}>
//         Show my agenda
//       </button>
//       {
//         isDisplayed
//         ? <Calendar onChange={handleClick} value={selectedDate} />
//         : null
//       }
//       {console.log(selectedDate)}
//       {
//         selectedDate === props.inputs.date
//         ?
//           props.inputs.map( (userInput) => {
//             return(
//             <li key={userInput.id}>
//               <p>{userInput.name} --- {userInput.date} --- {userInput.event} --- {userInput.detail}</p>
//             </li>
//             )
//         } )
//         : null
//       }
//     </div>
//       // ? props.inputs.map( (userInput) => {
//       //   return (
//       //     <li key={userInput.id}>
//       //     <p>{userInput.name} --- {userInput.date} --- {userInput.event} --- {userInput.detail}</p>
//       //   </li>
//       //   )
//       // })
//   )
// }

// export default SelectedDate;