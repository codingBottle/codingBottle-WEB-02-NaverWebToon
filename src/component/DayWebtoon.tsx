import React from "react";
import {
  DayWebtoonStyle,
  LeftStyle,
  DayWebtoonmainStyle,
} from "../styled/DayWebtoon";
import { MiniTitleText, WeekUp, MainText } from "../styled/TextStyle";

export default function DayWebtoon() {
  return (
    <DayWebtoonmainStyle>
      <MainText>
        우헹헹님, 이 웹툰들 최신 이야기를 놓치고 계신 것 같아요!
      </MainText>
      <DayWebtoonStyle>
        <ul>
          {Array.from({ length: 5 }, (_, index) => (
            <li key={index}>
              <img src="/webtoon.jpg" alt="day webtoon" />

              <LeftStyle>
                <i>
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
                </i>
                <MiniTitleText href={`/webtoon/list?titleId=${762279 + index}`}>
                  정글쥬스 {index + 1}
                </MiniTitleText>
              </LeftStyle>
              <LeftStyle>
                <WeekUp>새 이야기 10+</WeekUp>
              </LeftStyle>
            </li>
          ))}
        </ul>
      </DayWebtoonStyle>
    </DayWebtoonmainStyle>
  );
}
