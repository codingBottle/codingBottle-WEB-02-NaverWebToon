import React from "react";

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
      <hr />
      <div>
        <ul>
          {Array.from({ length: 5 }, (_, index) => (
            <li key={index} style={{ display: "flex" }}>
              <a href="../../public/webtoon.jpg">
                <div style={{ width: "60px" }}>
                  <img
                    src="/webtoon.jpg"
                    alt="day webtoon"
                    style={{ width: "60px", height: "80px" }}
                  />
                </div>
              </a>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "none",
                  width: "100px",
                }}
              >
                <strong>{index + 1}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  rowGap: "2px",
                }}
              >
                <a
                  href="/"
                  style={{
                    textAlign: "center",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <svg
                    width="17"
                    height="13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="16"
                      height="12"
                      rx="1.5"
                      stroke="#FF4747"
                    ></rect>
                    <path
                      d="M3.449 6.899c0 1.518.957 2.53 2.401 2.53 1.454 0 2.42-1.012 2.42-2.53V3.403H7.12V6.89c0 .837-.497 1.389-1.251 1.389-.764 0-1.27-.561-1.27-1.399V3.403h-1.15v3.496Zm6.174 2.4h1.15V7.314h.929c1.435 0 2.383-.773 2.383-1.96 0-1.177-.939-1.95-2.365-1.95H9.623V9.3Zm2.19-4.884c.634 0 1.057.377 1.057.938 0 .57-.423.948-1.058.948h-1.04V4.415h1.04Z"
                      fill="#FF4747"
                    ></path>
                  </svg>
                  <span style={{ fontSize: "14px" }}>정글쥬스</span>
                </a>
                <div style={{ fontSize: "14px" }}>LICO / 비가</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
