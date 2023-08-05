import './NavTextEditor.css'
import { IconBold, IconItalic, IconUnderline, IconAlignLeft, IconAlignCenter, IconAlignRight   } from '@tabler/icons-react';
import { TaskContext } from "../taskContext/TaskContext"
import { useContext, useState} from "react"

function NavTextEditor() {

  const { boldText, italicText, underlineText, sizeText, alineTextFB, colorText } = useContext(TaskContext)
  
  const handlerInput = (e) =>{
    sizeText(e)
  }

  const handlerColor = (e) =>{
    colorText(e)
  }

  function newAlignText(e){
    alineTextFB(e)
  }

  return (
    <>
        <section className='nav-text'>
            <select className='size-font' onChange={(e)=>{handlerInput(e.target.value)}} name="languages" id="lang">
              <option value="10px">10</option>
              <option value="15px">15</option>
              <option value="20px">20</option>
              <option value="25px">25</option>
              <option value="30px">30</option>
              <option value="35px">35</option>
            </select>
            <button className='italic' onClick={italicText}><IconItalic /></button>
            <button className='bold' onClick={boldText}><IconBold /></button>
            <button className='underline' onClick={underlineText}><IconUnderline  /></button>
            <button className='left-text' onClick={()=>newAlignText("left")}><IconAlignLeft  /></button>
            <button className='center-text' onClick={()=>newAlignText("center")}><IconAlignCenter  /></button>
            <button className='right-text' onClick={()=>newAlignText("right")}><IconAlignRight  /></button>
            <hr />
            <input type="color" name="nav-text" id="text-color" className='color-text' onChange={(e) => handlerColor(e.target.value)} />
        </section>    
    </>
  )
}

export default NavTextEditor
