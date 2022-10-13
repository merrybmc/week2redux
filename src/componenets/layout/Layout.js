import styled from "styled-components";

export default function Layout(props) {
  return <StLayout>{props.children}</StLayout>;
}

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
