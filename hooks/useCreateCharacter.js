import { useState } from "react"
import axios from 'axios';

export const useCreateCharacter = () => {
  const [races, setRaces] = useState([]);
  const [subraces, setSubraces] = useState([]);
  const [classes, setClasess] = useState([]);
  const [skills, setSkills] = useState([]);
  
  const getSubraces = (raceId) => {
    axios.get(`/api/getSubraces/${raceId}`).then(function (response) {
      setSubraces(response.data);
    });
  }
  


  return{
    races,
    subraces,
    getSubraces,
    classes,
    skills,
  }
}