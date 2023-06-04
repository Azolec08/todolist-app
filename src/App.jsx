import { useState, useEffect, useRef } from 'react'
import Edit from './components/edit'
import './style/App.scss'

function App() {

  const [error, setError] = useState("Good")

  const [state, setState] = useState({

    input:"",
    todolist:[]

  })
  
  const [inputEdit, setInputEdit] = useState("")

  const [edit, setEdit] = useState(false)

  const [update, setUpdate] = useState("")

  const {todolist, input} = state

  const handleAdd = () =>{
    const todo = todolist
    todo.push(input)

    setState({...state, todolist: todo})
    setState({...state, input:"" })


    
  }

  const handleDelete = (index) =>{
    const todo = todolist
    todo.splice(index,1)

    setState({...state,todolist:todo})
    setState({...state, edit: false})

  }

  function handleEdit(index){
    setEdit(true)
    setUpdate(index)

  }

  const handleCancel = () =>{
    setEdit(false)
    setInputEdit("")

  }


  const handleUpdate = (index) =>{
    const todo = todolist
    todo[index] = inputEdit
    
    setState({...state, todolist: todo})
    setEdit(false)
    setInputEdit("")


  }

  const handleOnChangeEdit = (e) =>{
    setInputEdit(e.target.value)
  }

  const inputRef = useRef()

  const alertRef = useRef()


  useEffect(() =>{

    inputRef.current.focus()

    if(input.length < 1 ){

      setError("")  
      
    }else if(input.length < 44){

      setError("Good")  
      alertRef.current.style = "color:blue"
      
    }else if(input.length > 45){
      setError("Bad")  
      alertRef.current.style = "color:red"  
      const  handleAdd = () =>{
        const list = todolist
        list.push("error")
        
        setState((prev) =>({...prev, todolist : list}))
        setState({...state, input: ""})
        alert("Input 45  letters only")
        
      }
      handleAdd()
    }else {
      null
    }

  },[input])

  function clearInputEdit(){
    setInputEdit(false)
  }



  return ( 
    <>
    <div className="app-container">
      <div className="app-border">
        <div className="add-border">
          <div className="add-container">
            <input ref={inputRef} type="text" name="input"  value={input} placeholder='Input your plan' onChange={(e) => setState({...state,input: e.target.value})}/>
            <button onClick={handleAdd}>Add Task</button>
          </div>
          <span ref={alertRef} >{error}</span>
        </div>
        {todolist.length ?
          todolist.map(( todo , index ) =>{
            return(
            <div key={index} className="todolist-container">
              <div className="text-container">
                <div className="text-border">
                  {todo}
                </div>
              </div>
              <div className={"delete-container"}>
                <button onClick={() => handleDelete(index)}>Delete</button>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <input type="checkbox" />
              </div>
            </div>
            ) 
        }):<h3 style={{color:"#fff", padding:"10px 0 0 0"}}>No Task Found!</h3>
          }
        </div>
        
        {edit ?
          <div className="update-container">
            <Edit
            inputEdit={inputEdit}
            handleCancel={handleCancel}
            handleUpdate={handleUpdate}
            update={update}
            setState={setState}
            state={state}
            handleOnChangeEdit={handleOnChangeEdit}
            setEdit={setEdit}
            setInputEdit={setInputEdit}
            />
          </div>:null
        }
      </div>
    
    </>
  )
}

export default App
