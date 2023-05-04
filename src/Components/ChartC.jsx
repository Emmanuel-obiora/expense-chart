import React from 'react'

const Chart = () => {
  return (
    <div className='chart'>
      <div className="chart-top">
        <h1>Spending - Last 7 days</h1>
      </div>
      <div className="chart-mid">
        mon
        tue
        wed
        thu
        fri
        sat
        sun
      </div>
      <div className="chart-but">
        <article className="chart-but_left">
          <p>Total this month</p>
          <h2>$478.33</h2>
        </article>
        <article className="chart-but_right">
          <h3>+2.4%</h3>
          <p>from last month</p>
        </article>
      </div>
    </div>
  )
}

export default Chart