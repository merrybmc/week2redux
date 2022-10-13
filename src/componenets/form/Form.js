import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/modules/todolist";
import { useState } from "react";
import styled from "styled-components";
let number = 1;

export default function Form() {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  let dispatch = useDispatch();

  const [todo, setTodo] = useState(initialState);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    dispatch(addTodo({ ...todo, id: number }));
    setTodo(initialState);
    number++;
  };

  return (
    <StForm onSubmit={onSubmitHandler}>
      <StSpan>Title : </StSpan> <StInput type="text" name="title" value={todo.title} onChange={onChangeHandler}></StInput>
      <StSpan>Body : </StSpan>
      <StInput type="text" name="body" value={todo.body} onChange={onChangeHandler}></StInput>
      <StBtn>추가하기</StBtn>
    </StForm>
  );
}
const StForm = styled.form`
  width: 100%;
  height: 80px;
  background: #cccccc;
  align-items: center;
  gap: 20px;
  border-radius: 15px;
`;

const StInput = styled.input`
  height: 30px;
  width: 200px;
  border: 3px solid black;
  border-radius: 8px;
  margin-left: 30px;
  margin-top: 20px;
  padding: 0 20px;
`;

const StSpan = styled.span`
  font-size: 20px;
  margin-left: 50px;
`;

const StBtn = styled.button`
  margin-left: 30px;
  border-radius: 15px;
  height: 40px;
`;
