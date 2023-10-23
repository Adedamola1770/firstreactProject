import React from 'react'
import human from './assets/illustration-hero.svg'
import music from './assets/icon-music.svg'

const Dynamics = () => {
  return (
    <div className=' body-1 col-lg-5 container border text-center mt-3 mb-5'>
        <div className='div-1 mt-5'>
        <img src={human} alt="" className='w-100 rounded-top'/>
        <div className='mt-5'>
        <h2>Order Summary</h2>
        </div>
        <div>
            <p>You can now listen to millions of songs,<br/> audiobooks, and podcasts on any device<br/> you like!</p>
        </div>
        <div className=' text-center div-2 d-flex justify-content-center gap-5 border bg-secondary align-items-center'>
            <div className>
            <img src={music} alt="" />
            </div>
            <div className='mt-4'>
            <h4>Annual Plan</h4>
            <p>$59.99/Year</p>
            </div>
            <div className>
                <a href="">Change</a>
            </div>
        </div>
        <button className='button w-100 border-0 mt-5 py-3 shadow'>Proceed To Payment</button>
        <p className='py-3 para text-primary'>Cancel Order</p>
        </div>
    </div>
  )
}

export default Dynamics