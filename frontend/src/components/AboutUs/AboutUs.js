import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="aboutus_wrapper">
        <div className="aboutus_container">
          <div id="history" className="aboutus_item">
            <div className="aboutus_item_tag">
              <span>연혁</span>
            </div>
            <div className="aboutus_content">
              <table id="history_table" className="aboutus_contact">
                <tr>
                  <td>1946</td>
                  <td>홍문대학관 설립</td>
                </tr>
                <tr>
                  <td>1949</td>
                  <td>홍익대학 설립인가, 미술과 개설</td>
                </tr>
                <tr>
                  <td>1954</td>
                  <td>미술학부 개설: 건축미술과, 회화과, 조각과</td>
                </tr>
                <tr>
                  <td>1958</td>
                  <td>공예과 신설</td>
                </tr>
                <tr>
                  <td>1963</td>
                  <td>공예과 세부 전공 ＞ 도안 전공</td>
                </tr>
                <tr>
                  <td>1965</td>
                  <td>
                    미술학부와 공예학부 분리 개설, 공예학부: 공예과, 도안과
                  </td>
                </tr>
                <tr>
                  <td>1966</td>
                  <td>공예학부 재편성: 공예과, 도안과, 도안과(2부)</td>
                </tr>
                <tr>
                  <td>1967</td>
                  <td>공예학부 재편성: 공예과, 공업도안과, 도안과(2부)</td>
                </tr>
                <tr>
                  <td>1968</td>
                  <td>학과 재편성: 공예과, 공업도안과 → 응용미술과</td>
                </tr>
                <tr>
                  <td style={{ borderBottom: "none" }}>1972</td>
                  <td>홍익대학교가 종합대학교로 승격, 미술대학 편성, </td>
                </tr>
                <tr>
                  <td></td>
                  <td>미술대학 ＞ 공예학부 ＞ 공업도안과</td>
                </tr>
                <tr>
                  <td style={{ borderBottom: "none" }}>1976</td>
                  <td>실험대학 실시,</td>
                </tr>
                <tr>
                  <td style={{ borderBottom: "none" }}></td>
                  <td>미술대학 ＞ 공업도안과 ＞ 산업도안과</td>
                </tr>
                <tr>
                  <td></td>
                  <td>＞ 공업디자인전공, 산업디자인전공</td>
                </tr>
                <tr>
                  <td style={{ borderBottom: "none" }}>1982</td>
                  <td>학과 재편성: 산업도안과, 도안과</td>
                </tr>
                <tr style={{ borderBottom: "none" }}>
                  <td style={{ borderBottom: "none" }}></td>
                  <td>
                    → 산업도안과 (산업도안전공, 산업디자인전공, 공간디자인전공)
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>(산업도안전공, 산업디자인전공, 공간디자인전공)</td>
                </tr>
                <tr>
                  <td>1987</td>
                  <td>산업도안과가 산업디자인과로 학과 명칭 변경</td>
                </tr>
                <tr>
                  <td>1988</td>
                  <td>산업디자인과가 시각디자인과와 공업디자인과로 분리</td>
                </tr>
                <tr>
                  <td>2006</td>
                  <td>디자인학부 편성: 시각디자인전공, 산업디자인전공</td>
                </tr>
              </table>
            </div>
          </div>
          <div id="faculty" className="aboutus_item">
            <div className="aboutus_item_tag">
              <span>교수진 </span>
            </div>
            <div className="aboutus_content">
              <table id="faculty_table" className="aboutus_contact">
                <tr>
                  <td>그림, 올리버</td>
                  <td>부교수</td>
                  <td>디지털미디어디자인</td>
                </tr>
                <tr>
                  <td>김예니</td>
                  <td>조교수</td>
                  <td>일러스트레이션</td>
                </tr>
                <tr>
                  <td>김현석</td>
                  <td>교수</td>
                  <td>디지털미디어디자인</td>
                </tr>
                <tr>
                  <td>로, 크리스</td>
                  <td>조교수</td>
                  <td>타이포그라피/그래픽디자인</td>
                </tr>
                <tr>
                  <td>리, 마빈</td>
                  <td>조교수</td>
                  <td>그래픽디자인</td>
                </tr>
                <tr>
                  <td>민본</td>
                  <td>조교수</td>
                  <td>타이포그라피/타입디자인</td>
                </tr>
                <tr>
                  <td>박현주</td>
                  <td>산학일체 교수</td>
                  <td>브랜딩디자인</td>
                </tr>
                <tr>
                  <td>백승우</td>
                  <td>조교수</td>
                  <td>사진</td>
                </tr>
                <tr>
                  <td>베켓, 스티븐</td>
                  <td>조교수</td>
                  <td>디자인이론</td>
                </tr>
                <tr>
                  <td>석재원</td>
                  <td>조교수</td>
                  <td>타이포그라피/그래픽디자인</td>
                </tr>
                <tr>
                  <td>심대기</td>
                  <td>겸임교수</td>
                  <td>그래픽디자인</td>
                </tr>
                <tr>
                  <td>아나케, 코풀스</td>
                  <td>조교수</td>
                  <td>시각디자인</td>
                </tr>
                <tr>
                  <td>안병학</td>
                  <td>조교수</td>
                  <td>타이포그라피</td>
                </tr>
                <tr>
                  <td>윤재영</td>
                  <td>조교수</td>
                  <td>UX, UI디자인</td>
                </tr>
                <tr>
                  <td>이연준</td>
                  <td>조교수</td>
                  <td>브랜딩디자인</td>
                </tr>
                <tr>
                  <td>장동련</td>
                  <td>교수</td>
                  <td>브랜딩디자인</td>
                </tr>
                <tr>
                  <td>전재운</td>
                  <td>조교수</td>
                  <td>그래픽디자인</td>
                </tr>
                <tr>
                  <td>정다희</td>
                  <td>조교수</td>
                  <td>일러스트레이션/애니메이션</td>
                </tr>
                <tr>
                  <td>허민재</td>
                  <td>조교수</td>
                  <td>그래픽디자인</td>
                </tr>
              </table>
            </div>
          </div>
          <div id="map" className="aboutus_item">
            <div className="aboutus_item_tag">
              <span>시설 </span>
            </div>
            <div className="aboutus_content">
              <table id="facility_table" className="aboutus_contact">
                <tr>
                  <td>홍문관</td>
                  <td>R712</td>
                  <td>학과사무실</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R711-1</td>
                  <td>장비대여실 HEXA</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R711-2</td>
                  <td>학생회실</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R713</td>
                  <td>프린팅실</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R714</td>
                  <td>컴퓨터실1</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R715</td>
                  <td>컴퓨터실2 / 모듈대여실</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R719</td>
                  <td>3학년 실기실</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R720</td>
                  <td>4학년 실기실</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R716</td>
                  <td>강의실</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R717</td>
                  <td>강의실</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R718</td>
                  <td>강의실</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R721</td>
                  <td>강의실</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R722</td>
                  <td>강의실</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R723</td>
                  <td>강의실</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R724</td>
                  <td>강의실</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R725</td>
                  <td>강의실</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R726</td>
                  <td>강의실</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R727</td>
                  <td>강의실</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R624</td>
                  <td>실크스크린실</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R625</td>
                  <td>세미나실</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R626-1</td>
                  <td>사용자 테스트실</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R626-2</td>
                  <td>사물함실</td>
                </tr>
                <tr>
                  <td>홍문관</td>
                  <td>R927</td>
                  <td>컴퓨터실3</td>
                </tr>
                <tr>
                  <td>문헌관</td>
                  <td>MH-B105</td>
                  <td>암실</td>
                </tr>
                <tr>
                  <td>문헌관</td>
                  <td>MH-B108</td>
                  <td>특수영상촬영실</td>
                </tr>
              </table>
            </div>
          </div>
          <div id="link" className="aboutus_item">
            <div className="aboutus_item_tag">
              <span>소모임</span>
            </div>
            <div className="aboutus_content">
              <table id="club_table" className="aboutus_contact">
                <tr>
                  <td>그린비</td>
                  <td>
                    <a
                      href="https://www.instagram.com/greenbee.hivcd/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @greenbee.hivcd
                    </a>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>드로마픽</td>
                  <td>
                    <a
                      href="https://www.instagram.com/dromapic/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @dromapic
                    </a>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>아이레이</td>
                  <td>
                    <a
                      href="https://www.instagram.com/iray_hivcd/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @iray_hivcd
                    </a>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>애드레날린</td>
                  <td>
                    <a
                      href="https://www.instagram.com/ad_re_nalin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @ad_re_nalin
                    </a>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>프로토</td>
                  <td>
                    <a
                      href="https://www.instagram.com/hivcdproto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @hivcdproto
                    </a>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>하이픈</td>
                  <td>
                    <a
                      href="https://www.instagram.com/hyphen_hivcd/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @hyphen_hivcd
                    </a>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>한글꼴연구회</td>
                  <td>
                    <a
                      href="https://www.instagram.com/hangeulggol_hivcd/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @hangeulggol_hivcd
                    </a>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>힙스</td>
                  <td>
                    <a
                      href="https://ilovehips.kr/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ilovehips.kr
                    </a>
                  </td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
          <div id="contact" className="aboutus_item">
            <div className="aboutus_item_tag">
              <span>연락처</span>
            </div>
            <div className="aboutus_content">
              <table id="contact_table" className="aboutus_contact">
                <tr>
                  <td style={{ borderBottom: "none" }}>주소</td>
                  <td>
                    04066 서울특별시 마포구 와우산로 94<br></br>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    홍익대학교 홍문관 R712 미술대학 시각디자인과 학과사무실
                  </td>
                </tr>
                <tr>
                  <td>전화</td>
                  <td>02-370-8888</td>
                </tr>
                <tr>
                  <td>팩스</td>
                  <td>02-3145-5792</td>
                </tr>
                <tr>
                  <td style={{ borderBottom: "none" }}>업무시간</td>
                  <td>월-금 9:00 - 17:30 / 점심시간 12:00-1:00</td>
                </tr>
                <tr>
                  <td></td>
                  <td>동절기 월-금 9:00 - 17:00 / 점심시간 12:00-1:00</td>
                </tr>
                <tr>
                  <td style={{ borderBottom: "none" }}>웹사이트</td>
                  <td>
                    홍익대학교
                    <a
                      href="http://hongik.ac.kr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      hongik.ac.kr
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style={{ borderBottom: "none" }}></td>
                  <td>
                    홍익대학교 미술대학
                    <a
                      href="http://cfa.hongik.ac.kr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      cfa.hongik.ac.kr
                    </a>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    홍익대학교 시각디자인과{" "}
                    <a
                      href="http://sidi.hongik.ac.kr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      sidi.hongik.ac.kr
                    </a>
                  </td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
          <div id="colophon" className="aboutus_item">
            <div className="aboutus_item_tag">
              <span>웹사이트</span>
            </div>
            <div className="aboutus_content">
              <table id="credit_table" className="aboutus_contact">
                <tr>
                  <td style={{ borderBottom: "none" }}>2021. 3. 2</td>
                  <td>시험판 배포</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={{ borderBottom: "none" }}></td>
                  <td>디자인. 설계. 개발</td>
                  <td>
                    YinYang{" "}
                    <a
                      href="https://www.instagram.com/yinyang.fig"
                      alt="instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @yinyang.fig
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style={{ borderBottom: "none" }}></td>
                  <td>서버 API 개발. 배포</td>
                  <td>
                    김서규{" "}
                    <a
                      href="https://www.github.com/SeogyuGim"
                      alt="instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/seogyugim
                    </a>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>운영 도움</td>
                  <td>심윤서, 나혜린, 임종윤</td>
                </tr>
                <tr>
                  <td style={{ borderBottom: "none" }}>2021. 4. 12</td>
                  <td>1.0 배포</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={{ borderBottom: "none" }}></td>
                  <td>디자인. 설계. 개발</td>
                  <td>
                    YinYang{" "}
                    <a
                      href="https://www.instagram.com/yinyang.fig"
                      alt="instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @yinyang.fig
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style={{ borderBottom: "none" }}></td>
                  <td>서버 API 개발. 배포</td>
                  <td>
                    김서규{" "}
                    <a
                      href="https://www.github.com/SeogyuGim"
                      alt="instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/seogyugim
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style={{ borderBottom: "none" }}></td>
                  <td>뉴스레터</td>
                  <td>김재연, 윤충근, 이소림, 이민지, 제지아</td>
                </tr>
                <tr>
                  <td></td>
                  <td>운영 도움</td>
                  <td>심윤서, 나혜린, 임종윤, 김재연</td>
                </tr>
                <tr>
                  <td>2021. 6.</td>
                  <td>2.0 배포 예정</td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
