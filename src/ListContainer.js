import { useState, useEffect } from "react";
import DayContainer from "./DayContainer";

const ListContainer = (props) => {
  
  const [ sortByDay, setSortByDay] = useState({});

  // create a new data set sorted by day
  useEffect( () => {
    const listByDay = props.inputs.reduce( (eventByDay, event) => {
      eventByDay[event['day']] = (eventByDay[event['day']] || []).concat(event)
      return eventByDay
    }, {});
    setSortByDay(listByDay);
  },[props.inputs])
  console.log(sortByDay);
  const newArray = Object.values(sortByDay)
  const dailyEvents = newArray.flat();

  return(
    <ul className="day__container">
      {
        dailyEvents.map ( (event) => {
          return(
          <DayContainer key={event.id}
                        day={event.day}
                        event={event.event}
                        detail={event.detail} />
          )
        })
      }
    </ul>
  )
};

export default ListContainer;