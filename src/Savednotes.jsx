import React, { useContext, useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import empty from './images/not_found.svg';
import NoteContext from './NoteContext';
import { BiSolidEdit } from "react-icons/bi";

const Savednotes = React.memo(() => {


const [size,setSize]=useState(window.innerWidth);
  const {contents,setcontents,setThoughts,setEdit,isDark,slider,setSlider}=useContext(NoteContext);
 
    let newContents =JSON.parse(localStorage.getItem("mydata"))||[];
   useEffect(()=>{
    setcontents(newContents);
   },[])

    const handleDelete=(id)=>{
      const commit=window.confirm("Delete? Are you sure!");
      if(commit){
     newContents=newContents.filter((content)=>content.id!==id);
     localStorage.setItem("mydata",JSON.stringify(newContents));
     setcontents(newContents);
    }else{

    }
    }
    const handleEdit=(id)=>{
      const tempData=newContents.filter((content)=>content.id===id);
      const data=tempData[0];
      console.log(data);
      setThoughts({id,title:data.title,desc:data.desc});
      setEdit(true);
      setSlider(true);

    }
    const handleResize=()=>{
      const data=document.querySelector(".custom-width");
     
   console.log("yes I m changing")

    }

      window.addEventListener('resize', ()=>{
        setSize(window.innerWidth);
      })
     

    
   // window.addEventListener('resize', handleResize);
     useEffect(()=>{
     const data=document.querySelector(".custom-width");
     if(size>800){
      data.style.transform="translateX(0%)";
     }else{
      if(slider){
        data.style.transform="translateX(-100%)";
      }else{
        data.style.transform="translateX(0%)";
      }
     }
     },[slider,size]);
     
  //     if(!slider){
  //       data.style.transform="translateX(-100%)";
  //     }else{
      
  //       data.style.transform="translateX(0%)";
  //   }
   
  // }
    
  
  return (
    <div className={contents.length===0? isDark?'d-flex justify-content-center align-items-center p-3 custom-width border-end border-5 custom-dark ':
    'd-flex justify-content-center align-items-center p-3 custom-width border-end border-5 ':
    isDark?
    'p-3 custom-width border-end border-5 custom-dark':'p-3 custom-width border-end border-5 '} >
        {contents.length!==0?(contents.map((content)=>{
            return(
               <div className={isDark?'inside-box p-2 mb-3  rounded':'inside-box p-2 mb-3 rounded'}>
              <div className='d-flex justify-content-between align-items-center '>
              <h4>{content.title}</h4>
              <div>
               <button className={isDark?'delete-btn icon-dark-color':'delete-btn'} onClick={()=>handleDelete(content.id)} ><MdDelete/></button>
               <button className={isDark?'delete-btn icon-dark-color':'delete-btn'} onClick={()=>handleEdit(content.id)} ><BiSolidEdit/></button>
               </div>
              </div>
               <p>{content.desc.length>100?content.desc.substring(0,100)+"....":content.desc}</p>

           </div>)

        })):<div><img className='empty-image' src={empty}></img>
        <p className='text-center'>Oops! Nothing is here</p>
        </div>
    }
    
    </div>
  )
})

export default Savednotes