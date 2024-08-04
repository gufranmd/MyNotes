import React, {  useEffect, useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = ({children}) => {
  const  data=JSON.parse(localStorage.getItem("mydata"))||[];
  const  darkState=JSON.parse(localStorage.getItem("dark"))||JSON.parse("false");
  
  const [isDark,setDark]=useState();
  const [slider,setSlider]=useState(true);
    const [contents, setcontents]=useState([]);
    const [isEdit,setEdit]=useState();
    const initalState={
      id:'',
      title:'',
      desc:''
  }
  const [thoughts,setThoughts]=useState({});
    useEffect(()=>{
      setEdit(false);
      setDark(darkState);
      setThoughts(initalState);
      setcontents(data);
    },[])
  return (
    <NoteContext.Provider value={{slider,setSlider,isEdit,setEdit,initalState,thoughts,setThoughts,isDark,setDark,contents,setcontents}}>
{children}
    </NoteContext.Provider>
  )
}

export default NoteState