import React, { useState } from 'react'
import AbilityItem from './AbilityItem'

export default function Abitilies() {
  const [points, setPoints] = useState(27);

  const calculatePoints = (number, type) => {
    (type) ? setPoints(points + number) : setPoints(points - number);
  }
  
  return (
    <>
      <div>
        <div className=''>
          <h3>Características</h3>
          <h4>Puntos: { points }</h4>
        </div>
      </div>

      <AbilityItem
        title="Fuerza"
        name="fue"
        points={points}
        callback={calculatePoints}
        />
      
      <AbilityItem
        title="Destreza"
        points={points}
        callback={calculatePoints}/>
      
      <AbilityItem
        title="Constitución"
        points={points}
        callback={calculatePoints}/>

      <AbilityItem
        title="Inteligencia" 
        points={points}
        callback={calculatePoints}/>

      <AbilityItem
        title="Sabiduría"
        points={points}
        callback={calculatePoints}/>

      <AbilityItem
        title="Carisma"
        points={points}
        callback={calculatePoints}/>
    
    </>
  )
}


