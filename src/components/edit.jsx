import {useEffect,useRef} from 'react'
import '../style/edit.scss'

export default function edit({
  inputEdit,
  handleCancel,
  handleUpdate,
  update,
  handleOnChangeEdit,
  setEdit,
  setInputEdit}){

  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()  
      if(inputEdit.length > 35 ){
        alert("Input 35 Letters Only")
        setInputEdit("")
        setEdit(false)
        return
      }
  })
  return (
    <>
      <div className="border">
      <h2 style={{margin:"13px 0 0 0 "}}>Edit Wisely!</h2>
        <div>
          <input  type="text" name="inputEdit" value={inputEdit} ref={inputRef} onChange={handleOnChangeEdit} placeholder="Input"/>
          <button onClick={handleCancel} >Cancel</button>
          <button onClick={() => handleUpdate(update)}>Update</button>
          </div>
      </div>
    </>
  )
}
