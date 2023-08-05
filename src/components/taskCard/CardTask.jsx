import './CardTask.css'
import { useState, useContext, useMemo, useEffect, useRef } from 'react'
import { TaskContext } from '../taskContext/TaskContext'
import { IconCloudCheck, IconCloudUp } from '@tabler/icons-react';
import Flag from '../navTask/Flag';
import { Loading } from '../loading/Loading';
import Maximize  from "../navTask/maximizedButton/Maximize"
import DeleteNote from '../navTask/DeleteNote';
import {Toaster, toast} from "react-hot-toast"

function CardTask() {

  const [textValue, setTextValue] = useState("")
  const [selectColorCard, setSelectColorCard] = useState("")
  const [saveId, setSaveId] = useState()
  const [load, setLoad] = useState(true)
  

  const ColorControler = useRef(null) //UseRef para detener el render de la funcion al iniciar app
  const cardRef = useRef()
  const { notes, editNotes, colorCard, getId} = useContext(TaskContext) 
  
  useMemo(
    () => {
      if(ColorControler.current === null){
        ColorControler.current = ""
        return
      }
      colorCard(saveId, selectColorCard)
    },
    [selectColorCard]
  );

  useEffect(()=>{
    setTimeout(()=>{
       if (notes != null){ setLoad(false) } 
    },1000)
  },[])
  
  function handleEditNotes(id) {
    editNotes(id, textValue)
    setTextValue("")
  }

  const handlerId = (id) =>{
    getId(id)
  }
 
  return (
    <>
      {
        
        load ? <Loading /> :  notes.map((n) => (
          <div ref={cardRef} className="card" key={n.id} style={n.style} >
            <main className='container-main'>
              <section className='container-nav'>
                <div className='container-tools'>
                  <button className='save-button' onClick={() => {handleEditNotes(n.id), toast.success("Guardado exitoso")}} >{n.upCloud ?  <IconCloudCheck /> : <IconCloudUp /> }</button>
                  <input className='input-color' value={n.style.background} onChange={(e) => {setSelectColorCard(e.target.value), setSaveId(n.id)}} type="color" name="rgb-color" id="card-color" />
                  <Flag id={n.id} flagData={n.flag}/>
                </div>
                <div className='container-m-d'>
                  <Maximize id={n.id}/>
                  <DeleteNote id={n.id}/>
                  <Toaster />
                </div>
              </section>
              <section className='container-text'>
                <textarea className='input-cards' onClick={()=> handlerId(n.id)}  placeholder='Tu recordatorio aquí' style={n.styleText} onChange={(eText) => setTextValue(eText.target.value)}>{n.note}</textarea>
              </section>
              
            </main>
            
          </div>
          
          
        ))
        
      }
    </>
  )
}

export default CardTask;