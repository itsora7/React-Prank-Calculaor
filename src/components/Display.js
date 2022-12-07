import React from 'react'

export const Display = ({str}) => {
  return (
    <div className="display prank">{str || "0.00"}</div>

  )
}
