const DayContainer = (props) => {
  console.log(props);
  return (
    <>
      {
        props.day === 'Monday'
        ?
        <div className="event__container--Monday">
          <li>
            <ul>{props.event}
              <li>{props.detail}</li>
            </ul>
          </li>
        </div>
        :
        props.day === 'Tuesday'
        ?
        <div className="event__container--Tuesday">
          <li>
            <ul>{props.event}
              <li>{props.detail}</li>
            </ul>
          </li>
        </div>
        :
        props.day === 'Wednesday'
        ?
        <div className="event__container--Wednesday">
          <li>
            <ul>{props.event}
              <li>{props.detail}</li>
            </ul>
          </li>
        </div>
        :
        props.day === 'Thursday'
        ?
        <div className="event__container--Thursday">
          <li>
            <ul>{props.event}
              <li>{props.detail}</li>
            </ul>
          </li>
        </div>
        :
        props.day === 'Tuesday'
        ?
        <div className="event__container--Tuesday">
          <li>
            <ul>{props.event}
              <li>{props.detail}</li>
            </ul>
          </li>
        </div>
        :
        props.day === 'Friday'
        ?
        <div className="event__container--Friday">
          <li>
            <ul>{props.event}
              <li>{props.detail}</li>
            </ul>
          </li>
        </div>
        :
        props.day === 'Saturday'
        ?
        <div className="event__container--Saturday">
          <li>
            <ul>{props.event}
              <li>{props.detail}</li>
            </ul>
          </li>
        </div>
        :
        props.day === 'Sunday'
        ?
        <div className="event__container--Sunday">
          <li>
            <ul>{props.event}
              <li>{props.detail}</li>
            </ul>
          </li>
        </div>
        : null
      }
    </>
  )
}

export default DayContainer;