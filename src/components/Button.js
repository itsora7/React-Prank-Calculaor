import React from 'react'

export const Button = ({lable, cls, handleOnClick}) => {
    // const cls = "btn-ac";
    // const lable = "AC"
  return (
    <div className={"btn" + cls} onClick={()=>handleOnClick(lable)}>{lable}</div>

  )
}
