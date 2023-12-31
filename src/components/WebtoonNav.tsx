import styled from 'styled-components';

const WebtoonNav = () => {
  return (
    <TotalWidth>
      <Header1>
        <LogoNLink>
          <div>
            {/* NAVER */}
            <svg
              width="60"
              height="13"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
            >
              <defs>
                <path id="text_naver_svg__a" d="M0 0h10.875v11.436H0z"></path>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <path
                  d="m17.154 0-4.485 11.436h3.812l.541-1.514h4.299l.54 1.514h3.813L21.19 0h-4.036zm2.018 3.603 1.277 3.572h-2.556l1.279-3.572zM37.895 0v11.436h9.025V8.633h-5.382V7.09h5.214V4.345h-5.214V2.803h5.27V0zm-4.989 0-2.691 7.52L27.525 0h-3.813l4.485 11.436h4.036L36.717 0zM7.792 0v6.12L3.532 0H0v11.436h3.7v-6.12l4.26 6.12h3.531V0z"
                  fill="#1E1E1E"
                ></path>
                <g transform="translate(48.714)">
                  <mask id="text_naver_svg__b" fill="#fff">
                    <use xlinkHref="#text_naver_svg__a" />
                    <path
                      id="text_naver_svg__a"
                      d="M0 0h10.875v11.436H0z"
                    ></path>
                  </mask>
                  <path
                    d="M5.494 5.325H3.532v-2.41h1.962a1.205 1.205 0 0 1 0 2.41zm2.49 2.187.347-.145c1.328-.556 2.005-1.76 2.005-3.287 0-1.445-.527-2.513-1.566-3.177C7.804.287 6.55 0 4.828 0H0v11.436h3.588V8.24h1.29l2.186 3.195h3.811L7.984 7.512z"
                    fill="#1E1E1E"
                    mask="url(#text_naver_svg__b)"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div>
            {/* 웹툰 */}
            <svg
              width="42"
              height="25"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M19.44 23.632v-7.008h-3.096v1.2H7.152V16.48H3.984v7.152H19.44zM11.28 6.664c0-1.944-2.112-3.312-4.776-3.312-2.712 0-4.776 1.368-4.776 3.312 0 1.944 2.064 3.288 4.776 3.288 2.664 0 4.776-1.344 4.776-3.288zm-1.656 8.424h2.688v.672h2.904V2.896h-2.904V13.12H9.624v1.968zm9.816.696V2.512h-3v13.272h3zm-11.808-.168V12.76a64.207 64.207 0 0 0 3.816-.432l-.216-2.256c-2.712.432-6.144.456-9.6.456h-.84c.072.816.192 1.656.288 2.496C2.16 13 3.36 13 4.632 12.928v2.688h3zm8.712 5.592H7.152v-1.032h9.192v1.032zM8.352 6.688c0 .6-.792 1.08-1.848 1.08-1.104 0-1.896-.48-1.896-1.08 0-.6.792-1.08 1.896-1.08 1.056 0 1.848.48 1.848 1.08zm29.832 2.856v-2.4H27.336V6.04H38.52V3.568H24.192v9.408h14.496v-2.4H27.336V9.544h10.848zm-4.992 10.104v-2.976h7.848v-2.544H21.72v2.544H30v2.976h3.192zm5.424 3.744V20.92H27.312v-3.216h-3.144v5.688h14.448z"
                fill="#020202"
              ></path>
            </svg>
          </div>
          <span>|</span>
          <div>
            {/* 웹소설 */}
            <svg
              width="47"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M14.311 17.062v-5.328h-1.566v1.386H5.149v-1.368H3.601v5.31h10.71zM8.551 4.714c0-1.674-1.566-2.628-3.528-2.628-1.998 0-3.564.954-3.564 2.628 0 1.638 1.584 2.574 3.564 2.574 1.944 0 3.528-.936 3.528-2.574zm2.88 6.336V1.798h-1.53v7.524H7.255v1.152h2.646v.576h1.53zm2.88.054V1.528h-1.548v9.576h1.548zm-8.658-.054V9.178c1.242-.09 2.502-.198 3.582-.36l-.162-1.206c-1.26.18-2.88.288-4.176.342-1.566.09-3.042.108-4.302.108l.234 1.314c.828 0 2.052-.036 3.294-.09v1.764h1.53zm7.092 4.734H5.149v-1.386h7.596v1.386zM7.039 4.714c0 .792-.9 1.296-2.016 1.296-1.152 0-2.034-.504-2.034-1.296 0-.81.828-1.368 2.034-1.368 1.188 0 2.016.558 2.016 1.368zm23.058 4.464c-2.394-.468-5.778-2.772-5.778-5.4v-1.08h-1.638v1.08c0 2.646-3.168 4.896-5.742 5.346l.81 1.296c2.556-.666 5.112-2.628 5.742-4.428.738 1.782 3.276 3.744 5.742 4.446l.864-1.26zm.504 6.084v-1.296h-6.336V10.06h-1.602v3.906h-6.264v1.296h14.202zm12.672-9.378V9.61h1.602V1.528h-1.602V4.57h-3.06v1.314h3.06zM41.095 7.99c-1.728-.558-3.744-2.142-3.744-4.662V2.104h-1.62V3.4c0 2.484-1.764 4.248-3.888 5.094l.954 1.188c1.746-.774 3.294-2.178 3.78-3.798.72 1.584 2.196 2.772 3.618 3.33l.9-1.224zm4.338 9.162v-1.314h-9.18v-1.476h8.622v-3.906H34.561v1.278h8.712v1.44h-8.604v3.978h10.764z"
                fill="#BBB"
              ></path>
            </svg>
          </div>
          <span>|</span>
          <div>
            {/* 시리즈 */}
            <svg
              width="47"
              height="19"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M13.843 17.26V1.528h-1.584V17.26h1.584zm-3.456-4.968c-2.178-1.26-3.942-3.816-3.942-6.768v-2.61H4.789v2.682c0 2.898-1.674 5.634-4.032 7.128l.99 1.17c1.782-1.17 3.33-3.168 3.888-5.094.576 1.836 2.394 3.708 3.798 4.68l.954-1.188zm16.02-.576c-1.908.36-4.95.486-7.146.486h-.468V8.638h5.886V2.95h-7.542v1.296h5.958V7.36h-5.886v6.192h1.962c3.186-.036 5.76-.252 7.398-.522l-.162-1.314zm1.368-10.188V17.26h1.602V1.528h-1.602zm17.892 8.658c-2.358-.414-5.76-2.61-5.76-5.166v-.414h4.968V3.328h-11.61v1.278h4.968v.414c0 2.592-3.276 4.734-5.742 5.13l.792 1.278c2.448-.612 5.094-2.358 5.778-4.248.81 1.854 3.366 3.636 5.778 4.284l.828-1.278zm.504 4.95V13.84H31.969v1.296h14.202z"
                fill="#BBB"
              ></path>
            </svg>
          </div>
        </LogoNLink>

        <SearchNMenu>
          <Search>
            <div>
              <input
                type="text"
                placeholder="제목/작가로 검색할 수 있습니다."
              />
              <button>
                {/* 돋보기 */}
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <g
                    clip-path="url(#icon_search_svg__a)"
                    stroke="#666"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M7.65 14.3a6.65 6.65 0 1 0 0-13.3 6.65 6.65 0 0 0 0 13.3ZM12.456 12.456l4.314 4.314"></path>
                  </g>
                  <defs>
                    <clipPath id="icon_search_svg__a">
                      <path fill="#fff" d="M0 0h18v18H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </Search>
          <button>
            <span>로그인</span>
          </button>
          <div>
            {/* bento menu icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="25"
              height="25"
              fill="#757575"
            >
              <rect x="2" y="2" width="10" height="10" />
              <rect x="16" y="2" width="10" height="10" />
              <rect x="30" y="2" width="10" height="10" />

              <rect x="2" y="16" width="10" height="10" />
              <rect x="16 " y="16" width="10" height="10" />
              <rect x="30 " y="16" width="10" height="10" />

              <rect x="2" y="30" width="10" height="10" />
              <rect x="16" y="30" width="10" height="10" />
              <rect x="30" y="30" width="10" height="10" />
            </svg>
          </div>
        </SearchNMenu>
      </Header1>

      <NavNCreator>
        <Nav>
          <ul>
            <li>홈</li>
            <li>웹툰</li>
            <li>베스트도전</li>
            <li>도전만화</li>
            <li>마이페이지</li>
          </ul>
        </Nav>
        <Creator>
          <button>
            <i>
              {/* creater's */}
              <svg
                width="85"
                height="13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M9.662 2.361C8.744 1.443 7.47.865 5.633.865 2.54.865.04 3.415.04 6.56c0 3.128 2.414 5.678 5.593 5.678 1.751 0 3.06-.493 4.03-1.547L8.25 9.127c-.595.629-1.53.986-2.465.986-2.006 0-3.485-1.598-3.485-3.553 0-1.972 1.48-3.57 3.35-3.57 1.087 0 1.954.425 2.6.986l1.411-1.615ZM11.342 12h2.126V7.988h1.564L17.259 12h2.465L17.19 7.665c1.428-.527 2.295-1.632 2.295-3.128 0-2.074-1.7-3.434-4.267-3.434h-3.876V12Zm4.047-9.027c1.122 0 1.853.629 1.853 1.564 0 .952-.731 1.581-1.853 1.581h-1.921V2.973h1.92ZM21.769 12h7.055V9.994h-4.93V7.512h4.25V5.506h-4.25V3.092h4.93V1.103h-7.056V12Zm16.868 0H41L36.614 1.103h-2.482L29.746 12h2.227l.952-2.448h4.777L38.637 12Zm-1.666-4.335H33.64l1.666-4.318 1.666 4.318ZM48.84 3.092V1.103h-8.602v1.989h3.23V12h2.125V3.092h3.247ZM54.924.865c-3.11 0-5.627 2.55-5.627 5.695 0 3.128 2.516 5.678 5.627 5.678 3.111 0 5.644-2.55 5.644-5.678S58.035.865 54.924.865Zm0 9.248c-1.853 0-3.366-1.598-3.366-3.553 0-1.972 1.513-3.57 3.366-3.57 1.87 0 3.383 1.598 3.383 3.57 0 1.972-1.513 3.553-3.383 3.553Zm7.7 1.887h2.126V7.988h1.564L68.54 12h2.465l-2.533-4.335c1.428-.527 2.295-1.632 2.295-3.128 0-2.074-1.7-3.434-4.267-3.434h-3.876V12Zm4.047-9.027c1.122 0 1.853.629 1.853 1.564 0 .952-.731 1.581-1.853 1.581H64.75V2.973h1.92Zm8.3-2.669h-2.005l-.46 3.723h1.514l.952-3.723Zm9.048 2.397C83.288 1.647 81.877.865 80.092.865c-2.33 0-3.978 1.309-3.978 3.162 0 3.791 5.729 2.839 5.729 4.947 0 .782-.663 1.258-1.853 1.258-1.14 0-2.091-.459-2.771-1.36l-1.513 1.411c.714 1.071 2.023 1.955 4.25 1.955 2.499 0 4.165-1.411 4.165-3.383 0-3.825-5.73-2.958-5.73-4.896 0-.646.596-1.088 1.616-1.088 1.122 0 2.074.595 2.55 1.275l1.462-1.445Z"
                  fill="#fff"
                ></path>
                <path
                  d="m9.662 2.361.377.329.308-.352-.331-.33-.354.353Zm0 8.33.369.338.308-.335-.305-.338-.372.335Zm-1.41-1.564.37-.335-.362-.402-.372.393.363.344Zm0-5.151-.328.378.376.326.328-.375-.377-.329Zm1.764-1.969C8.994.986 7.587.365 5.633.365v1c1.719 0 2.862.535 3.676 1.35l.707-.708ZM5.633.365C2.255.365-.46 3.148-.46 6.56h1c0-2.878 2.284-5.195 5.093-5.195v-1ZM-.46 6.56c0 3.391 2.626 6.178 6.093 6.178v-1C2.743 11.738.54 9.425.54 6.56h-1Zm6.093 6.178c1.854 0 3.311-.527 4.398-1.709l-.737-.676c-.851.926-2.012 1.385-3.66 1.385v1Zm4.4-2.382-1.41-1.564-.743.67 1.411 1.564.743-.67ZM7.889 8.783c-.486.514-1.281.83-2.102.83v1c1.05 0 2.125-.398 2.829-1.142l-.727-.688Zm-2.102.83c-1.712 0-2.985-1.357-2.985-3.053h-1c0 2.214 1.686 4.053 3.985 4.053v-1ZM2.801 6.56c0-1.728 1.287-3.07 2.85-3.07v-1c-2.178 0-3.85 1.854-3.85 4.07h1Zm2.85-3.07c.947 0 1.701.368 2.273.864l.655-.756C7.86 2.972 6.88 2.49 5.65 2.49v1Zm2.977.815 1.411-1.615-.753-.658-1.411 1.615.753.658ZM11.343 12h-.5v.5h.5V12Zm2.125 0v.5h.5V12h-.5Zm0-4.012v-.5h-.5v.5h.5Zm1.564 0 .437-.243-.143-.257h-.294v.5ZM17.259 12l-.438.243.143.257h.295V12Zm2.465 0v.5h.87l-.439-.752-.431.252ZM17.19 7.665l-.173-.47-.56.207.301.515.432-.252Zm-5.848-6.562v-.5h-.5v.5h.5Zm2.125 5.015h-.5v.5h.5v-.5Zm0-3.145v-.5h-.5v.5h.5ZM11.343 12.5h2.125v-1h-2.125v1Zm2.625-.5V7.988h-1V12h1Zm-.5-3.512h1.564v-1h-1.564v1Zm1.127-.257 2.226 4.012.875-.486-2.227-4.012-.874.486Zm2.664 4.269h2.465v-1h-2.465v1Zm2.896-.752-2.533-4.335-.863.504 2.533 4.335.863-.504Zm-2.791-3.614c1.598-.59 2.622-1.865 2.622-3.597h-1c0 1.26-.711 2.195-1.968 2.659l.346.938Zm2.622-3.597c0-1.186-.492-2.19-1.358-2.885-.856-.687-2.042-1.049-3.41-1.049v1c1.2 0 2.148.318 2.784.829.626.503.984 1.217.984 2.105h1ZM15.219.603h-3.876v1h3.876v-1Zm-4.376.5V12h1V1.103h-1Zm4.546 2.37c.47 0 .81.132 1.023.313.206.174.33.424.33.751h1a1.94 1.94 0 0 0-.683-1.514c-.432-.367-1.019-.55-1.67-.55v1Zm1.353 1.064c0 .339-.126.592-.331.768-.213.182-.552.313-1.022.313v1c.651 0 1.239-.183 1.672-.554.44-.376.68-.914.68-1.527h-1Zm-1.353 1.081h-1.921v1h1.92v-1Zm-1.421.5V2.973h-1v3.145h1Zm-.5-2.645h1.92v-1h-1.92v1Zm8.3 8.527h-.5v.5h.5V12Zm7.055 0v.5h.5V12h-.5Zm0-2.006h.5v-.5h-.5v.5Zm-4.93 0h-.5v.5h.5v-.5Zm0-2.482v-.5h-.5v.5h.5Zm4.25 0v.5h.5v-.5h-.5Zm0-2.006h.5v-.5h-.5v.5Zm-4.25 0h-.5v.5h.5v-.5Zm0-2.414v-.5h-.5v.5h.5Zm4.93 0v.5h.5v-.5h-.5Zm0-1.989h.5v-.5h-.5v.5Zm-7.055 0v-.5h-.5v.5h.5Zm0 11.397h7.055v-1h-7.055v1Zm7.555-.5V9.994h-1V12h1Zm-.5-2.506h-4.93v1h4.93v-1Zm-4.43.5V7.512h-1v2.482h1Zm-.5-1.982h4.25v-1h-4.25v1Zm4.75-.5V5.506h-1v2.006h1Zm-.5-2.506h-4.25v1h4.25v-1Zm-3.75.5V3.092h-1v2.414h1Zm-.5-1.914h4.93v-1h-4.93v1Zm5.43-.5V1.103h-1v1.989h1Zm-.5-2.489h-7.055v1h7.055v-1Zm-7.555.5V12h1V1.103h-1ZM38.639 12l-.468.178.123.322h.344V12ZM41 12v.5h.74l-.276-.687L41 12ZM36.614 1.103l.464-.187-.126-.313h-.338v.5Zm-2.482 0v-.5h-.338l-.126.313.464.187ZM29.746 12l-.464-.187-.276.687h.74V12Zm2.227 0v.5h.342l.124-.319-.466-.181Zm.952-2.448v-.5h-.342l-.124.319.466.181Zm4.777 0 .467-.178-.123-.322h-.344v.5Zm-.73-1.887v.5h.728l-.262-.68-.467.18Zm-3.333 0-.466-.18-.263.68h.73v-.5Zm1.666-4.318.467-.18-.467-1.209-.466 1.209.466.18Zm3.332 9.153H41v-1h-2.363v1Zm2.827-.687L37.078.916l-.928.374 4.386 10.897.928-.374ZM36.614.603h-2.482v1h2.482v-1Zm-2.946.313-4.386 10.897.928.374L34.596 1.29l-.928-.374ZM29.746 12.5h2.227v-1h-2.227v1Zm2.693-.319.952-2.448-.932-.362-.952 2.448.932.362Zm.486-2.129h4.777v-1h-4.777v1Zm4.31-.322.935 2.448.934-.356-.935-2.448-.934.356Zm-.264-2.565H33.64v1h3.332v-1Zm-2.865.68 1.666-4.318-.933-.36-1.666 4.318.933.36Zm.733-4.318 1.666 4.318.933-.36-1.666-4.318-.933.36Zm14-.435v.5h.5v-.5h-.5Zm0-1.989h.5v-.5h-.5v.5Zm-8.602 0v-.5h-.5v.5h.5Zm0 1.989h-.5v.5h.5v-.5Zm3.23 0h.5v-.5h-.5v.5Zm0 8.908h-.5v.5h.5V12Zm2.125 0v.5h.5V12h-.5Zm0-8.908v-.5h-.5v.5h.5Zm3.747 0V1.103h-1v1.989h1Zm-.5-2.489h-8.602v1h8.602v-1Zm-9.102.5v1.989h1V1.103h-1Zm.5 2.489h3.23v-1h-3.23v1Zm2.73-.5V12h1V3.092h-1Zm.5 9.408h2.125v-1h-2.125v1Zm2.625-.5V3.092h-1V12h1Zm-.5-8.408h3.247v-1h-3.247v1ZM54.924.365c-3.393 0-6.127 2.78-6.127 6.195h1c0-2.875 2.298-5.195 5.127-5.195v-1ZM48.797 6.56c0 3.4 2.735 6.178 6.127 6.178v-1c-2.83 0-5.127-2.321-5.127-5.178h-1Zm6.127 6.178c3.39 0 6.144-2.777 6.144-6.178h-1c0 2.855-2.312 5.178-5.144 5.178v1Zm6.144-6.178c0-3.4-2.752-6.195-6.144-6.195v1c2.83 0 5.144 2.338 5.144 5.195h1Zm-6.144 3.053c-1.551 0-2.866-1.348-2.866-3.053h-1c0 2.205 1.712 4.053 3.866 4.053v-1ZM52.058 6.56c0-1.723 1.316-3.07 2.866-3.07v-1c-2.155 0-3.866 1.85-3.866 4.07h1Zm2.866-3.07c1.569 0 2.883 1.348 2.883 3.07h1c0-2.222-1.711-4.07-3.883-4.07v1Zm2.883 3.07c0 1.718-1.31 3.053-2.883 3.053v1c2.169 0 3.883-1.827 3.883-4.053h-1ZM62.625 12h-.5v.5h.5V12Zm2.125 0v.5h.5V12h-.5Zm0-4.012v-.5h-.5v.5h.5Zm1.564 0 .437-.243-.143-.257h-.294v.5ZM68.54 12l-.437.243.143.257h.294V12Zm2.465 0v.5h.871l-.44-.752-.431.252Zm-2.533-4.335-.173-.47-.56.207.301.515.432-.252Zm-5.848-6.562v-.5h-.5v.5h.5Zm2.125 5.015h-.5v.5h.5v-.5Zm0-3.145v-.5h-.5v.5h.5ZM62.625 12.5h2.125v-1h-2.125v1Zm2.625-.5V7.988h-1V12h1Zm-.5-3.512h1.564v-1H64.75v1Zm1.127-.257 2.227 4.012.874-.486-2.227-4.012-.874.486ZM68.54 12.5h2.465v-1H68.54v1Zm2.897-.752-2.533-4.335-.864.504 2.533 4.335.864-.504Zm-2.792-3.614c1.599-.59 2.622-1.865 2.622-3.597h-1c0 1.26-.71 2.195-1.968 2.659l.346.938Zm2.622-3.597c0-1.186-.492-2.19-1.358-2.885C69.055.965 67.868.603 66.5.603v1c1.2 0 2.148.318 2.784.829.626.503.984 1.217.984 2.105h1ZM66.5.603h-3.876v1H66.5v-1Zm-4.376.5V12h1V1.103h-1Zm4.546 2.37c.47 0 .81.132 1.024.313.206.174.329.424.329.751h1a1.94 1.94 0 0 0-.682-1.514c-.433-.367-1.02-.55-1.671-.55v1Zm1.353 1.064c0 .339-.125.592-.33.768-.214.182-.553.313-1.023.313v1c.651 0 1.239-.183 1.672-.554.44-.376.68-.914.68-1.527h-1ZM66.67 5.618H64.75v1h1.92v-1Zm-1.421.5V2.973h-1v3.145h1Zm-.5-2.645h1.92v-1h-1.92v1ZM74.972.304l.484.124.16-.624h-.644v.5Zm-2.006 0v-.5h-.442l-.055.439.497.061Zm-.46 3.723-.496-.061-.069.561h.566v-.5Zm1.514 0v.5h.388l.096-.376-.484-.124Zm.952-4.223h-2.006v1h2.006v-1ZM72.47.243l-.46 3.723.993.122.459-3.723-.993-.122Zm.037 4.284h1.513v-1h-1.513v1Zm1.997-.376.952-3.723-.969-.248-.952 3.723.97.248ZM84.02 2.7l.351.356.299-.296-.24-.345-.41.285Zm-6.8 6.171.399-.301-.335-.443-.405.378.34.366Zm-1.513 1.411-.341-.366-.311.29.236.353.416-.277Zm6.85-6.137-.409.287.34.485.421-.416-.351-.356Zm1.874-1.73C83.594 1.212 82.02.365 80.092.365v1c1.64 0 2.89.717 3.516 1.62l.822-.569ZM80.092.365c-2.492 0-4.478 1.432-4.478 3.662h1c0-1.476 1.311-2.662 3.478-2.662v-1Zm-4.478 3.662c0 1.097.423 1.882 1.063 2.45.615.546 1.412.874 2.136 1.127.767.267 1.412.44 1.912.689.487.241.618.448.618.681h1c0-.821-.586-1.286-1.173-1.577-.575-.285-1.362-.505-2.027-.737-.708-.247-1.344-.524-1.802-.931-.435-.386-.727-.903-.727-1.702h-1Zm5.729 4.947a.572.572 0 0 1-.264.51c-.2.139-.55.248-1.09.248v1c.652 0 1.228-.129 1.657-.424a1.57 1.57 0 0 0 .697-1.334h-1Zm-1.353.758c-.988 0-1.79-.39-2.372-1.161l-.798.602c.777 1.03 1.88 1.559 3.17 1.559v-1Zm-3.112-1.226-1.513 1.411.682.732 1.513-1.411-.682-.732ZM75.29 10.56c.814 1.222 2.286 2.178 4.666 2.178v-1c-2.075 0-3.221-.812-3.834-1.732l-.832.554Zm4.666 2.178c1.34 0 2.501-.379 3.337-1.066a3.575 3.575 0 0 0 1.328-2.817h-1c0 .834-.348 1.539-.963 2.045-.622.511-1.544.838-2.702.838v1Zm4.665-3.883c0-1.103-.422-1.899-1.06-2.477-.615-.557-1.411-.894-2.139-1.15-.773-.272-1.414-.44-1.923-.677-.508-.237-.607-.423-.607-.592h-1c0 .8.616 1.233 1.183 1.498.565.264 1.356.482 2.015.714.705.248 1.34.532 1.8.948.436.396.73.927.73 1.736h1Zm-5.73-4.896c0-.148.06-.271.21-.375.167-.115.46-.213.906-.213v-1c-.575 0-1.089.123-1.475.39-.402.28-.64.7-.64 1.198h1Zm1.116-.588c.95 0 1.753.509 2.14 1.062l.82-.574c-.566-.807-1.668-1.488-2.96-1.488v1Zm2.901 1.13 1.462-1.444-.703-.712-1.462 1.445.703.712Z"
                  fill="#000"
                  fill-opacity="0.05"
                ></path>
              </svg>
            </i>
            <i>
              {/* n로고 */}
              <svg
                width="12"
                height="12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="6" cy="6" r="6" fill="#FF4747"></circle>
                <path
                  d="M6.91 8.55h1.447V3.31H7.008v3.033L5.087 3.311H3.64v5.24h1.349V5.567l1.92 2.984Z"
                  fill="#fff"
                ></path>
              </svg>
            </i>
          </button>
        </Creator>
      </NavNCreator>
    </TotalWidth>
  );
};

export default WebtoonNav;

const TotalWidth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Header1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;

  margin-top: 1rem;
`;

const LogoNLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  div :hover {
    cursor: pointer;
  }

  > span {
    color: #bbb;
  }
`;

const SearchNMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  button {
    display: inline-block;
    width: 3.5;
    height: 1.5;
    font-size: 12px;

    background-color: white;
    border: 1px solid #bbb;
  }
`;

const Search = styled.div`
  div {
    padding: 0.2rem;
    border: 1px solid #bbb;
  }
  div:focus-within {
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
    border: 2px solid black;
    border-radius: 3px;
  }

  input {
    width: 15rem;
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
  }
  input:focus {
    outline: none;
  }

  button {
    all: unset;
  }
`;

const NavNCreator = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 80%;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3.4375rem;
      padding: 0 1.125rem;
      font-weight: bolder;

      &:nth-child(1) {
        background-color: #00dc64;
        font-weight: bolder;
        color: white;
      }
    }
  }
`;

const Creator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  button {
    display: inline-block;
    width: 3.5;
    height: 1.5;
    font-size: 0.75rem;
    padding: 0.6875rem 2.0625rem;

    background-color: #00dc64;
    border: none;
    border-radius: 0.25rem;
  }
`;
