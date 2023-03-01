import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { delete_todo, edit_todo, post_todo } from './Redux/Action/TodoAction';

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState("");
  const [data,setData] = useState("");
  const[click,setClick] = useState(false);
  const [todoId, setTodoId] = useState("");
  console.log(todoId);
  console.log(data)
  return (
    <div className='App'>
    <input type ="text" placeholder='enter todo' onChange = {(e) => setNewTodo(e.target.value)}/>
    <button onClick={()=> dispatch(post_todo(newTodo))}>Add todo</button>
    {todos.map((el) => 
      <div key={el.id}>
      {click === true && el.id === todoId? (
          <div>
             <input
              type="text" 
              onChange={(e) => setData(e.target.value)}
             />
             <button onClick={()=>dispatch(edit_todo(todoId,data),setClick(false))}>
             Save
             </button>
           </div>
          
             ) : (
               <div>
               <h5>{el.text}</h5>
               <button onClick={() => dispatch(delete_todo(el.id))}>Delete</button>
               <button onClick={() => dispatch(setClick(true),setTodoId(el.id))}>Edit</button>
               </div>
    )}
</div>)}
    </div>
  )
}

export default App
