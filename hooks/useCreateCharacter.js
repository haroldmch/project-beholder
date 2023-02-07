import { useState } from "react"
import axios from 'axios';

export const useCreateCharacter = () => {
  const [subraces, setSubraces] = useState([]),
        [isLoadingSubraces, setIsLoadingSubraces] = useState(true),
        [classes, setClasess] = useState([]),
        [isLoadingClasses, setIsLoadingClasses] = useState(true),
        [skills, setSkills] = useState([]),
        [isLoadingSkills, setIsLoadingSkills] = useState(true);
  

  const getSubraces = (raceId) => {
    setIsLoadingSubraces(true);
    setIsLoadingClasses(true);
    axios.get(`/api/getSubraces/${raceId}`).then((res) => { 
      if(res.data.length > 0){
        setSubraces(res.data);
        setIsLoadingSubraces(false);
      } else {
        getClasess();
      }
      
    });
  }

  const getClasess = () => {
    setIsLoadingClasses(true);
    axios.get(`/api/getClasses`).then((res) => {
      setClasess(res.data);
      setIsLoadingClasses(false);
    });
  }
  
  return{
    subraces,
    getSubraces,
    isLoadingSubraces,

    classes,
    getClasess,
    isLoadingClasses,

    skills,
  }
}