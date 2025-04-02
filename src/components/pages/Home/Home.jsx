import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className='home'>
          <div className='home__banner'>
            <h1 className='home__tittle'>Luna Hotel</h1>
            <p className='home__subtittle'>The best place to visit</p>
            <form>
              <label>Check-in:</label>
              <input
                  type="text"
                  id="checkin"
                  name="checkin"
                  placeholder="Arrival"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
              />
              <label>Check-out:</label>
              <input
                  type="text"
                  name="checkin"
                  placeholder="Departure"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
              /> 
              <button className='button' type="submit">Book Now</button>  
            </form>  
          </div>
      </div>
    </>
  )
}

export default Home



