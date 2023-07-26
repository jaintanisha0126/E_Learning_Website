import React from "react"
import Title from "../../common/title/Title"
import "./Hero.css"

const Hero = () => {
  return (
    <>
  
       <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Title subtitle='WELCOME TO NEXT U' title='Online Platform That Can Change Your Life' />
            <p>There are no secrets to success. It is the result of preparation,hard work and learning from failure.</p>
             <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button> 
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
