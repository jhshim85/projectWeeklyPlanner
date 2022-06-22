const DayContainer = (props) => {
  
  return (
    <>
      {
        props.day === 'Monday'
        ?
        <div className="event__container">
          <li>
            <h2 className={`event__title--${props.day}`}>{props.day}</h2>
            <ul>
              <li className={`event__list--${props.event}`}>{props.event}</li>
              <p className='event__detail'>{props.detail}</p>
            </ul>
          </li>
        </div>
        :
        props.day === 'Tuesday'
        ?
        <div className="event__container">
          <li>
            <h2 className={`event__title--${props.day}`}>{props.day}</h2>
            <ul>
              <li className={`event__list--${props.event}`}>{props.event}</li>
              <p className='event__detail'>{props.detail}</p>
            </ul>
          </li>
        </div>
        :
        props.day === 'Wednesday'
        ?
        <div className="event__container">
          <li>
            <h2 className={`event__title--${props.day}`}>{props.day}</h2>
            <ul>
              <li className={`event__list--${props.event}`}>{props.event}</li>
              <p className='event__detail'>{props.detail}</p>
            </ul>
          </li>
        </div>
        :
        props.day === 'Thursday'
        ?
        <div className="event__container">
          <li>
            <h2 className={`event__title--${props.day}`}>{props.day}</h2>
            <ul>
              <li className={`event__list--${props.event}`}>{props.event}</li>
              <p className='event__detail'>{props.detail}</p>
            </ul>
          </li>
        </div>
        :
        props.day === 'Tuesday'
        ?
        <div className="event__container">
          <li>
            <h2 className={`event__title--${props.day}`}>{props.day}</h2>
            <ul>
              <li className={`event__list--${props.event}`}>{props.event}</li>
              <p className='event__detail'>{props.detail}</p>
            </ul>
          </li>
        </div>
        :
        props.day === 'Friday'
        ?
        <div className="event__container">
          <li>
            <h2 className={`event__title--${props.day}`}>{props.day}</h2>
            <ul>
              <li className={`event__list--${props.event}`}>{props.event}</li>
              <p className='event__detail'>{props.detail}</p>
            </ul>
          </li>
        </div>
        :
        props.day === 'Saturday'
        ?
        <div className="event__container">
          <li>
            <h2 className={`event__title--${props.day}`}>{props.day}</h2>
            <ul>
              <li className={`event__list--${props.event}`}>{props.event}</li>
              <p className='event__detail'>{props.detail}</p>
            </ul>
          </li>
        </div>
        :
        props.day === 'Sunday'
        ?
        <div className="event__container">
          <li>
            <h2 className={`event__title--${props.day}`}>{props.day}</h2>
            <ul>
              <li className={`event__list--${props.event}`}>{props.event}</li>
              <p className='event__detail'>{props.detail}</p>
            </ul>
          </li>
        </div>
        : null
      }
    </>
  )
}

export default DayContainer;