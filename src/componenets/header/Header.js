import styled from "styled-components";

export default function Header() {
  return (
    <StHeader>
      <p>My Todo List</p>
      <p>React</p>
    </StHeader>
  );
}

const StHeader = styled.div`
  border: 1px solid #dddddd;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 24px;
  margin-top: 20px;
`;
