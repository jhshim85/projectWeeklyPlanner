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

  const newArray = Object.values(sortByDay)
  const dailyEvents = newArray.flat();
  
  // sorting data in day order
  const orderDay = {'Monday': 1,'Tuesday': 2,'Wednesday': 3,'Thursday': 4,'Friday': 5,'Saturday': 6, 'Sunday': 7};
  dailyEvents.sort( (a, b) => {
    return orderDay[a.day] - orderDay[b.day];
  });

  // sorting data in event order 
  // const orderedDailyEvent = [...dailyEvents];
  // const orderEvent = {'personal errand': 1, 'grocery shopping': 2, 'house chores': 3, 'extra things': 4, 'social event': 5, 'thoughts of the day': 6, 'daily journal': 7};
  // orderedDailyEvent.sort( (a, b) => {
  //   return orderEvent[a.event] - orderEvent[b.event];
  // });

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