import React from 'react'

function Pageupper(props) {
  return (
    <div className='lg:ml-24 md:ml-5 ml-5 mt-16 lg:mb-24 md:mb-24 mb-14'>
      <div className='h-[16.25px] leading-tight text-[15px] tracking-wider text-slate-500 font-[Cinzel]'>{props.infoupper}</div>
      <div className='h-[41px] text-[3.5875rem] font-[Cinzel] tracking-wider leading-[1em] mt-5'>{props.infolower}</div>
    </div>
  )
}

export default Pageupper
