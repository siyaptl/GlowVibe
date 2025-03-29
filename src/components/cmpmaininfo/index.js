import React from "react";

function Maininfo(props) {
  return (
    <div>
      <div className="h-[16.25px] leading-tight text-[13px] text-slate-500 font-[Cinzel]">
        {props.infoupper}
      </div>
      <div className="h-[43px] text-[2.6875rem] font-[Cinzel] leading-[1em]">
        {props.infolower}
      </div>
    </div>
  );
}

export default Maininfo;
