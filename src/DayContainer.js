const DayContainer = (props) => {
  
  return (
    <>
      {
        props.day
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