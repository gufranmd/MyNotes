import React, { useContext, useEffect, useState } from 'react'
import NoteContext from './NoteContext';
import { BiBorderAll } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';

const Writenotes = () => {
  // let newContents=JSON.parse(localStorage.getItem("mydata")||[]);
    const{slider,setSlider,contents,setcontents,thoughts,setThoughts,initalState,isEdit,setEdit,isDark}=useContext(NoteContext);
    // const initalState={
    //     title:'',
    //     desc:''
    // }
    // const [thoughts,setThoughts]=useState(initalState);
    const handleChange=(e,field)=>{
        setThoughts((prev)=>(
            {
                ...prev,
                [field]:e.target.value
            }
        ))

    }
    const handleData=()=>{
      if(!isEdit){
      const {title, desc}=thoughts;
     let newContents=[...contents,{id:Date.now(),title,desc}];
      setcontents(newContents);
      localStorage.setItem("mydata",JSON.stringify(newContents));
      setThoughts(initalState); 
      setSlider(false);
      toast.success("Note is created!");
      }else{
        const {id,title, desc}=thoughts;
        const tempContent=contents.filter((content)=>content.id!==id);
        let newContents=[...tempContent,{id:id,title,desc}];
         setcontents(newContents);
         localStorage.setItem("mydata",JSON.stringify(newContents));
         setThoughts(initalState); 
         setEdit(false);
         setSlider(false);
         toast.success("Note is created!");

      } 
    }
    const HandleReset=()=>{
      const commit=window.confirm("All Data will be lost");
      if(commit){
        setThoughts(initalState);
      }
    }
   useEffect(()=>{
    const btn=document.querySelector(".shutter-btn");
    if(!slider){
      btn.style.left="90vw";
    }else{
      btn.style.left="0";
    }
   },[slider])


  return (
 
    <div className={isDark?'custom-write custom-dark position-relative':'custom-write position-relative'}>
      <ToastContainer position='top-center' className="toast"/>
    <div className='p-5 custom-write-flex justify-content-between'>
        <div className="">
  <input type="text" className={isDark?"form-control input custom-dark-input":"form-control input "}  id="exampleFormControlInput1" value={thoughts.title} onChange={(e)=>handleChange(e,"title")} placeholder="Title"/>
</div>
<div>
    <button className='btn btn-outline-primary my-3 'onClick={handleData}>{isEdit?"Update":"Save"}</button>
    <button className='btn btn-outline-warning ms-2' onClick={HandleReset}>Reset</button>
</div>
</div>
<div class="mb-3">

  <textarea className={isDark?"form-control ms-5 custom-text-area custom-dark-input":"form-control ms-5 custom-text-area"} id="exampleFormControlTextarea1" value={thoughts.desc} onChange={(e)=>handleChange(e,"desc")}  rows="3" placeholder='write here...'></textarea>
</div>
<BiBorderAll className='shutter-btn'onClick={()=>setSlider(!slider)} />
</div>
  )
}

export default Writenotes