import { useState, useEffect } from "react";
import DayContainer from "./DayContainer";

const ListContainer = (props) => {
  
  const [ sortByDay, setSortByDay] = useState({});

  // create a new data set sorted by day
  useEffect( () => {
    const listByDay = props.inputs.reduce( (eventByDay, event) => {
      eventByDay[event['event']] = (eventByDay[event['event']] || []).concat(event)
      return eventByDay
    }, {});
    setSortByDay(listByDay);
  },[props.inputs])

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