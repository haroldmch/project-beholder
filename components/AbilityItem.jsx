import { useState, useEffect } from 'react'
import { calculateModifier } from '../helpers/calculateModifier';

export default function AbilityItem({ title, name, points, callback }) {

  const [score, setScore] = useState(8),
        [modifier, setModifier] = useState(-1);

  const changeAbility  = (type) => {
      if(type && score < 15 && points > 0){
        setScore(score + 1);
        callback(((score >= 13)? 2 : 1), false);
      } else if(!type && score > 8 && points >= 0){
        setScore(score - 1);
        callback(((score > 13)? 2 : 1), true);
      }
  } 

  useEffect(() => {
    setModifier(calculateModifier(score));
  }, [ score ])
  
  return (
    <>
      <div>
        <p>{ title }</p>
        <div>
          <button type="button" onClick={() => {changeAbility(false)}}> &lt; </button>
          <input type="number" name={ name } defaultValue={ score } disabled={true}/>
          <button type="button" onClick={() => {changeAbility(true)}}> &gt; </button>
          <span>{ modifier }</span>
        </div>
      </div>
    </>
  )
}
