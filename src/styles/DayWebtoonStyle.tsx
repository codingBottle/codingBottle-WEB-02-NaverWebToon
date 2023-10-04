import styled from "styled-components";

export const DayWebtoonmainStyle = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
`;
export const DayWebtoonStyle = styled.div`
  ul {
    display: flex;
    justify-content: left;
    list-style-type: none;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    li {
      width: 20%;
      height: 259px;
      margin-right: 10px;
      img {
        width: 100%;
        height: 12.9375rem;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
      }
    }
  }
`;
export const LeftStyle = styled.div`
  text-align: left;
  margin: 0px;
  i {
    margin-right: 5px;
  }
`;
