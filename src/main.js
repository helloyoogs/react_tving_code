/*eslint-disable*/
import React, { useState } from "react";
import "./common.css";
import "./main.css";

function main() {
  let [header_active, set_header_active] = useState([" "]);


  /* wheel,scrtoll 이벤트 main_header */
  function scroll_header() {
    if (scrollY > 0) {
      set_header_active((header_active = "active"));
    } else{
      set_header_active((header_active = " "));

    }

  }
  window.addEventListener("scroll", scroll_header);

  return (
    <div className="main">
      <header class={'header '+header_active}>
        <a href="/">
          <h1>홈</h1>
        </a>
        <a href="#">
        <span>TV프로그램</span>
        </a>
        <a href="#">
        <span>영화</span> 
        </a>
      </header>

      <div className="content_wrap1">
        <div className="banner">
          <img src="img/banner1_yagu.webp"/>
          <img src="img/banner2_camp.webp"/>
          <img src="img/banner3_mental.webp"/>
        </div>
        <div className="banner_ex">
          <div>
            <p>야구 강팀이 펼치는 양보없는 대결</p>
            <div className="banner_btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div>
            <p>자세히보기</p>
          </div>
        </div>
      </div>


      <footer>
        <p>Copyright © 주식회사 티빙 All right reserved.</p>
      </footer>
    </div>
  );
}

export default main;
