// 액션 생성 함수
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

// 액션 함수
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleStatusTodo = (payload) => {
  return { type: TOGGLE_STATUS_TODO, payload };
};

// 초기화
const initialState = {
  todos: [{}],
};

const todolist = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case DELETE_TODO:
      return { ...state, todos: [...action.payload] };
    case TOGGLE_STATUS_TODO:
      return { ...state, todos: [...action.payload] };
    default:
      return state;
  }
};

export default todolist;
