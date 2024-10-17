import React from 'react'
import square from '../assets/orange-square.svg'
const Hero = () => {
  return (
    <section>
      <div className="container">
        <div> {/* leftdiv */}
          <div className='flex'>
            <img src={square} alt="orange square" />
            <p>Vestium is the new mode of dressing</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero