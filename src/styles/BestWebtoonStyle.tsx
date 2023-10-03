import styled from "styled-components";

export const BestWebtoonmainStyle = styled.div`
  display : flex;
  justify-content: space-between; 
  width: 100%;
  background-color: white;
  div::before{
    width: 3px;
    height: 3px;
    margin-right: 5px;
    background: #666;
    border-radius: 50%;
    opacity: .5;
    content: "sdfasdfsf";
    display: flex;
    align-items: center;
    font-size: 15px;
    line-height: 21px;
    font-weight: 500;
    color: var(--color-text-addition);
  }
}
`;
