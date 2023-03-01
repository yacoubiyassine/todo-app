import { DELETE_TODO, EDIT_TODO, GET_TODOS, POST_TODO } from "../ActionTypes/TodoActionType";

const initialState = {
 todos:[{
  id:Math.random(),
  text:"learn Redux",
  isComplit:false,
 },
 { id:Math.random(),text:"learn React",isComplit:true},
  { id:Math.random(),text:"learn Api",isComplit:false},],
}

const todoReducer = (state = initialState, { type, payload }) => {
   switch (type) {
    case GET_TODOS:
      return {...state};
    case DELETE_TODO:
      return {...state,
        todos:state.todos.filter((el) => el.id !== payload),
      };
    case POST_TODO:
      const newTodo={
        id:Math.random(),
        text:payload,
        isComplit:false,
      }
      return {...state,todos:[...state.todos,newTodo]};
    case EDIT_TODO:
      return {...state,todos:state.todos.map((el) => el.id === payload.id ? {...el,text:payload.data} : el

      ),
    };
      default:
        return state;
   
   }
    
  }

   export default todoReducer;