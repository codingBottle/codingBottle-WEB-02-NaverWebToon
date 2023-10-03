import React from "react";
import styled from "styled-components";
import { BestWebtoonmainStyle } from "../styles/BestWebtoonStyle";

export default function BestWebtoon() {
  return (
    <div style={{ width: "100%" }}>
      <BestWebtoonmainStyle>
        <div>
          <h2
            style={{
              fontSize: "20px",
              lineHeight: "21px",
              fontWeight: 600,
              letterSpacing: "-0.5px",
              color: "black",
            }}
          >
            실시간 인기웹툰
          </h2>
        </div>
        <div>
          <button
            style={{
              border: "0",
              background: "rgba(0,0,0,0)",
              outline: "none",
              cursor: "pointer",
            }}
          >
            전체
          </button>

          <button
            style={{
              border: "0",
              background: "rgba(0,0,0,0)",
              outline: "none",
              cursor: "pointer",
            }}
          >
            여성
          </button>

          <button
            style={{
              border: "0",
              background: "rgba(0,0,0,0)",
              outline: "none",
              cursor: "pointer",
            }}
          >
            남성
          </button>
        </div>
      </BestWebtoonmainStyle>
    </div>
  );
}
