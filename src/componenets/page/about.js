import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function About() {
  const navigate = useNavigate();
  let { id } = useParams();

  let todolist = useSelector((state) => {
    return state.todolist.todos;
  });

  return (
    <StAbout>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <p>id = {todolist[id].id}</p>
      <p>title = {todolist[id].title}</p>
      <p>body = {todolist[id].body}</p>
    </StAbout>
  );
}

const StAbout = styled.div`
  border: 1px solid black;
  display: flex;
  width: 700px;
  height: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 250px;
`;
