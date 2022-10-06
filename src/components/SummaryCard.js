import moment from 'moment'
import '../css/SummaryCard.css'
import React from 'react'

const SummaryCard = ({day}) => {
  return (
    <li className="summary-items">
          <div>
              <p>{day.day} </p>
              <p className="">{Math.round(day.high)}&deg;C</p>
             <p>{day.text} </p>
            <p className="">{day.date}</p>
        </div>
    </li>
  )
}

export default SummaryCard