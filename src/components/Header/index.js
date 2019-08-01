import React from 'react'

const styles={
  display:'flex',
  background:"orange",
  flexDirection:'row',
  justifyContent:'space-around'

}

export default function Header(props) {
  return (
    <div>
      <div style={styles} className="header-group">
        <h1>Clicky Game</h1>
        <h1>Click Any card to play, but only click Once!</h1>
        <h1>Current Score: {props.counter} High Score : {props.maxScore}</h1>
      </div>
      
    </div>
  )
}
