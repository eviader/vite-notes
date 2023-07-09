import { createContext, useState, useEffect } from "react";
import { colorList } from '../date/dateNotes'
import { query, orderBy, collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from "../date/fireBase";
import moment from 'moment'


export const TaskContext = createContext()

export function TaskContextProvider(props){

    const [notes, setNotes] = useState([])
    const [getIdState, setGetIdState] = useState([])
    
    useEffect(() => {
        getAll()

    },[])

    async function getAll(){
      const getNotes = collection(db, "notes")
      const q = query(getNotes, orderBy('fecha', 'desc'))

      try{
        onSnapshot(q, querySnapshot => {
          const dataArray = []
          querySnapshot.forEach(doc => {
          dataArray.push({...doc.data(), id: doc.id})
          })

        const arrayFilter = dataArray.slice().sort((a, b) => {
          return a.fecha - b.fecha;
        });
        setNotes(arrayFilter)
        return false
        })
      }catch(err){
        console.error(err)
      }
    }

    
    async function deleteNotes(id){
      try{
        await deleteDoc(doc(db, "notes", id));
        console.log("Nota eliminada con exito " + id)
      }catch(err){
        console.error(err)
      }
    }

    async function saveNote (){
      let myArray = colorList;
      let rand = Math.floor(Math.random()*myArray.length);
      let rColor = myArray[rand];
      const colorRamdom = rColor.color

      const nowMoment = moment()
      
      try{
        const newData = await addDoc(collection(db, "notes"),{
          fecha: nowMoment.format('YYYY/MM/DD. H:mm:ss'),
          title: "",
          note: "",
          flag: false,
          upCloud: false,
          style:{ 
                background: colorRamdom,
                height: "200px",
                width:"300px",
                position:"none",
                left:"",
                top:""
                },
          styleText:{
                "font-size": "20px",
                "font-weight" : "normal",
                "font-style": "",
                "text-decoration":"",
                "text-align": "start",
                "color": "",
                "height": "320%"
                }
        })
        console.log("Nueva nota agregada " + newData.id)
      }catch(err){
        console.error(err)
      }
    }

   async function editNotes(id,  text){
    try{
        const updateNote = doc(db, "notes", id)
        
        if(text != "") {
          await updateDoc(updateNote,{
            note: text,
          })
        }

        console.log("Guardado exitoso")

        const obj = notes.find(elemento => {
          return elemento.id === id;
        });
        
        obj['upCloud']= true
        setNotes(notes)

      }catch(err){
        console.error(err)
      }
    }

    async function stateFlag(id, flag){
      const updateNote = doc(db, "notes", id)
      await updateDoc(updateNote,{
        flag: flag
      })
    }

    async function setColorDB(id, color){
      if(color != ""){
        const updateNote = doc(db, "notes", id)
        await updateDoc(updateNote,{
          "style.background": color
        })
        console.log("Guardado exitoso")
    }
    }

    async function maximizedFB(id){
      const newHeigth = "350px"
      const newWidth = "500px"

      try{
        const updateNote = doc(db, "notes", id)
        const obj = notes.find(elemento => {
          return elemento.id === id;
        });

        if(obj.style.height == newHeigth ){
           
          await updateDoc(updateNote,{
            "style.height": "200px",
            "style.width": "300px",
            "style.position": "",
            "style.left": "",
            "style.top": "",
            "styleText.height":"320%"
            
          })

        }else{
          await updateDoc(updateNote,{
            "style.height": newHeigth,
            "style.width": newWidth,
            "style.position": "absolute",
            "style.left": "30%",
            "style.top": "20%",
            "styleText.height":"620%"
          })
        }

      }catch(err){
        console.error(err)
      }
    }

    async function colorCard(id, color){   
      try{
        
        const obj = notes.find(elemento => {
          return elemento.id === id;
        });

        obj['style.background'] = color
        setNotes(notes)
        
        await setColorDB(id, color)

      }catch(err){
         console.error(err)
      }
  }

    //guardamos el id en un estado para reutilizarlo
    function getId(id){
      setGetIdState(id)
    }

    async function sizeText(sizePx){
      const id = getIdState
      const updateNote = doc(db, "notes", id)

      try{
        await updateDoc(updateNote,{
          "styleText.font-size": sizePx
        })
      }catch(err){
        console.error(err)
      }
    }

    //edita el texto a bold
    async function boldText(){
      const id = getIdState

      const updateNote = doc(db, "notes", id)
      const obj = notes.find(elemento => {
        return elemento.id === id;
      });

      if(obj.styleText["font-weight"] == "normal"){
        await updateDoc(updateNote,{
          "styleText.font-weight": "bold",
        })
      }else{
        await updateDoc(updateNote,{
          "styleText.font-weight": "normal",
        })
      }
    }

    async function italicText(){
      const id = getIdState

      const updateNote = doc(db, "notes", id)
      const obj = notes.find(elemento => {
        return elemento.id === id;
      });

      if(obj.styleText["font-style"] == ""){
        await updateDoc(updateNote,{
          "styleText.font-style": "italic",
        })
      }else{
        await updateDoc(updateNote,{
          "styleText.font-style": "",
        })
      }
    }

    async function underlineText(){
      const id = getIdState

      const updateNote = doc(db, "notes", id)
      const obj = notes.find(elemento => {
        return elemento.id === id;
      });

      if(obj.styleText["text-decoration"] == ""){
        await updateDoc(updateNote,{
          "styleText.text-decoration": "underline",
        })
      }else{
        await updateDoc(updateNote,{
          "styleText.text-decoration": "",
        })
      }
    }

    async function alineTextFB(style){
      const id = getIdState

      const updateNote = doc(db, "notes", id)
      const obj = notes.find(elemento => {
        return elemento.id === id;
      });

      if(obj.styleText["text-align"] != style){
        await updateDoc(updateNote,{
          "styleText.text-align": style,
        })
      }if(obj.styleText["text-align"] != style){
        await updateDoc(updateNote,{
          "styleText.text-align": style,
        })
    }else{
      await updateDoc(updateNote,{
        "styleText.text-align": "right",
      })
    }
  }

  async function colorText(color){
    const id = getIdState

    const updateNote = doc(db, "notes", id)
    const obj = notes.find(elemento => {
      return elemento.id === id;
    });

    try{
      await updateDoc(updateNote,{
        "styleText.color": color,
      })
    }catch(err){
      console.error(err)
    }
  }



    return(
        <TaskContext.Provider value={
          { notes, 
            saveNote,
            editNotes,
            colorCard,
            deleteNotes,
            stateFlag,
            maximizedFB,
            getId,
            boldText,
            italicText,
            underlineText,
            sizeText,
            alineTextFB,
            colorText
        }
        }>
            {props.children}
        </TaskContext.Provider>
        
    )
}
