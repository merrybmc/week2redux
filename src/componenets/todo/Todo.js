import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Todo({ todo, onDeleteHandler, onEditHandler }) {
  const navigate = useNavigate();
  return (
    <StList>
      <StWrap>
        <div>
          <div>id : {todo.id}</div>
          <h2>title : {todo.title}</h2>
          <div>body : {todo.body}</div>
        </div>
        <div>
          <StBtn onClick={() => onDeleteHandler(todo.id)}>삭제하기</StBtn>
          <StBtn onClick={() => onEditHandler(todo.id)}>{todo.isDone ? "취소" : "완료"}</StBtn>
          <StBtn
            onClick={() => {
              navigate("/" + todo.id);
            }}
          >
            상세보기
          </StBtn>
        </div>
      </StWrap>
    </StList>
  );
}

const StList = styled.div`
  padding: 0 20px;
`;

const StWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  border-radius: 5px;
  width: 300px;
  padding: 10px;
`;

const StBtn = styled.button`
  border: 1px solid black;
  height: 30px;
  margin-right: 3px;
  width: 70px;
  border-radius: 8px;
`;
