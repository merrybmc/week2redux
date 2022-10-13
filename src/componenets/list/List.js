import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../../redux/modules/todolist";
import Todo from "../todo/Todo";

export default function List() {
  let todolist = useSelector((state) => {
    return state.todolist.todos;
  });

  let dispatch = useDispatch();

  const onDeleteHandler = (todoId) => {
    const newTodolist = todolist.filter((todo) => {
      console.log(todo.id);
      console.log(todoId);
      return todo.id !== todoId;
    });
    dispatch(deleteTodo(newTodolist));
  };

  const onEditHandler = (todoId) => {
    const newTodolist = todolist.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    dispatch(toggleStatusTodo(newTodolist));
  };

  return (
    <div>
      <div>
        <h1>Working</h1>
        {todolist.map((todo) => {
          if (todo.isDone === false) {
            return <Todo todo={todo} onDeleteHandler={onDeleteHandler} onEditHandler={onEditHandler} />;
          } else {
            return null;
          }
        })}
      </div>
      <div>
        <h1>Done</h1>
        {todolist.map((todo) => {
          if (todo.isDone === true) {
            return <Todo todo={todo} onDeleteHandler={onDeleteHandler} onEditHandler={onEditHandler} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
