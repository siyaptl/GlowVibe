import React from 'react'

function Pageupper(props) {
  return (
    <div className='ml-24 mt-16 mb-24'>
      <div className='h-[16.25px] leading-tight text-[15px] tracking-wider text-slate-500 font-[Cinzel]'>{props.infoupper}</div>
      <div className='h-[41px] text-[3.5875rem] font-[Cinzel] tracking-wider leading-[1em] mt-5'>{props.infolower}</div>
    </div>
  )
}

export default Pageupper
