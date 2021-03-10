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
              <table className="aboutus_contact">
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
                  <td>1972</td>
                  <td>
                    홍익대학교가 종합대학교로 승격, 미술대학 편성, <br></br>
                    미술대학 ＞ 공예학부 ＞ 공업도안과
                  </td>
                </tr>
                <tr>
                  <td>1976</td>
                  <td>
                    실험대학 실시, <br></br>미술대학 ＞ 공업도안과 ＞ 산업도안과
                    <br></br>＞ 공업디자인전공, 산업디자인전공
                  </td>
                </tr>
                <tr>
                  <td>1982</td>
                  <td>
                    학과 재편성: 산업도안과, 도안과 → 산업도안과 <br></br>
                    (산업도안전공, 산업디자인전공, 공간디자인전공)
                  </td>
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
              <span>교수진</span>
            </div>
            <div className="aboutus_content">
              <table className="faculty">
                <tr>
                  <th>직위</th>
                  <th>이름</th>
                  <th>분야</th>
                </tr>
                <tr>
                  <td>교수</td>
                  <td>김현석</td>
                  <td>디지털미디어디자인</td>
                </tr>
                <tr>
                  <td>교수</td>
                  <td>장동련</td>
                  <td>브랜딩디자인</td>
                </tr>
                <tr>
                  <td>부교수</td>
                  <td>Griem, Oliver</td>
                  <td>디지털미디어디자인</td>
                </tr>
                <tr>
                  <td>부교수</td>
                  <td>Ro, Chris</td>
                  <td>타이포그래피/그래픽디자인</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>김예니</td>
                  <td>일러스트레이션</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>Lee, Marvin Jin</td>
                  <td>그래픽디자인</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>민본</td>
                  <td>타이포그래피/타입디자인</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>백승우</td>
                  <td>사진</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>Beckett, Stephen J.</td>
                  <td>디자인이론</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>석재원</td>
                  <td>타이포그래피/그래픽디자인</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>안병학</td>
                  <td>타이포그래피</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>윤재영</td>
                  <td>UX, UI디자인</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>이연준</td>
                  <td>브랜딩디자인</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>전재운</td>
                  <td>그래픽디자인</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>정다희</td>
                  <td>일러스트레이션/애니메이션</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>허민재</td>
                  <td>그래픽디자인</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>Cooppoolse, Anneke</td>
                  <td>시각디자인</td>
                </tr>
                <tr>
                  <td>산학일체 교수</td>
                  <td>박현주</td>
                  <td>브랜딩디자인</td>
                </tr>
                <tr>
                  <td>겸임교수</td>
                  <td>심대기</td>
                  <td>그래픽디자인</td>
                </tr>
              </table>
            </div>
          </div>
          <div id="map" className="aboutus_item">
            <div className="aboutus_item_tag">
              <span>시설</span>
            </div>
            <div className="aboutus_content">
              <table className="aboutus_contact">
                <tbody>
                  <tr>
                    <td>학과사무실</td>
                    <td>홍문관</td>
                    <td>R712</td>
                  </tr>
                  <tr>
                    <td>장비대여실 HEXA</td>
                    <td>홍문관</td>
                    <td>R711-1</td>
                  </tr>
                  <tr>
                    <td>학생회실</td>
                    <td>홍문관</td>
                    <td>R711-2</td>
                  </tr>
                  <tr>
                    <td>프린팅실</td>
                    <td>홍문관</td>
                    <td>R713</td>
                  </tr>
                  <tr>
                    <td>컴퓨터실1</td>
                    <td>홍문관</td>
                    <td>R714</td>
                  </tr>
                  <tr>
                    <td>컴퓨터실2 / 모듈대여실</td>
                    <td>홍문관</td>
                    <td>R715</td>
                  </tr>
                  <tr>
                    <td>3학년 실기실</td>
                    <td>홍문관</td>
                    <td>R719</td>
                  </tr>
                  <tr>
                    <td>4학년 실기실</td>
                    <td>홍문관</td>
                    <td>R720</td>
                  </tr>
                  <tr>
                    <td>강의실</td>
                    <td>홍문관</td>
                    <td>R716</td>
                  </tr>
                  <tr>
                    <td>강의실</td>
                    <td>홍문관</td>
                    <td>R717</td>
                  </tr>
                  <tr>
                    <td>강의실</td>
                    <td>홍문관</td>
                    <td>R718</td>
                  </tr>
                  <tr>
                    <td>강의실</td>
                    <td>홍문관</td>
                    <td>R721</td>
                  </tr>
                  <tr>
                    <td>강의실</td>
                    <td>홍문관</td>
                    <td>R722</td>
                  </tr>
                  <tr>
                    <td>강의실</td>
                    <td>홍문관</td>
                    <td>R723</td>
                  </tr>
                  <tr>
                    <td>강의실</td>
                    <td>홍문관</td>
                    <td>R724</td>
                  </tr>
                  <tr>
                    <td>강의실</td>
                    <td>홍문관</td>
                    <td>R725</td>
                  </tr>
                  <tr>
                    <td>강의실</td>
                    <td>홍문관</td>
                    <td>R726</td>
                  </tr>
                  <tr>
                    <td>강의실</td>
                    <td>홍문관</td>
                    <td>R727</td>
                  </tr>
                  <tr>
                    <td>실크스크린실</td>
                    <td>홍문관</td>
                    <td>R624</td>
                  </tr>
                  <tr>
                    <td>세미나실</td>
                    <td>홍문관</td>
                    <td>R625</td>
                  </tr>
                  <tr>
                    <td>사용자 테스트실</td>
                    <td>홍문관</td>
                    <td>R626-1</td>
                  </tr>
                  <tr>
                    <td>사물함실</td>
                    <td>홍문관</td>
                    <td>R626-2</td>
                  </tr>
                  <tr>
                    <td>컴퓨터실3</td>
                    <td>홍문관</td>
                    <td>R927</td>
                  </tr>
                  <tr>
                    <td>암실</td>
                    <td>문헌관</td>
                    <td>MH-B105</td>
                  </tr>
                  <tr>
                    <td>특수영상촬영실</td>
                    <td>문헌관</td>
                    <td>MH-B108</td>
                  </tr>
                </tbody>
              </table>
              <br></br>
              <table className="aboutus_contact">
                <tbody>
                  <tr>
                    <td>Department Office</td>
                    <td></td>
                    <td>R712</td>
                  </tr>
                  <tr>
                    <td>Equipment Room HEXA</td>
                    <td></td>
                    <td>R711-1</td>
                  </tr>
                  <tr>
                    <td>Student Council</td>
                    <td></td>
                    <td>R711-2</td>
                  </tr>
                  <tr>
                    <td>Print Shop</td>
                    <td></td>
                    <td>R713</td>
                  </tr>
                  <tr>
                    <td>Computer Lab 1</td>
                    <td></td>
                    <td>R714</td>
                  </tr>
                  <tr>
                    <td>Computer Lab 2 / Module Rental Room</td>
                    <td></td>
                    <td>R715</td>
                  </tr>
                  <tr>
                    <td>Junior Studio</td>
                    <td></td>
                    <td>R719</td>
                  </tr>
                  <tr>
                    <td>Senior Studio</td>
                    <td></td>
                    <td>R720</td>
                  </tr>
                  <tr>
                    <td>Studio</td>
                    <td></td>
                    <td>R716</td>
                  </tr>
                  <tr>
                    <td>Studio</td>
                    <td></td>
                    <td>R717</td>
                  </tr>
                  <tr>
                    <td>Studio</td>
                    <td></td>
                    <td>R718</td>
                  </tr>
                  <tr>
                    <td>Studio</td>
                    <td></td>
                    <td>R721</td>
                  </tr>
                  <tr>
                    <td>Studio</td>
                    <td></td>
                    <td>R722</td>
                  </tr>
                  <tr>
                    <td>Studio</td>
                    <td></td>
                    <td>R723</td>
                  </tr>
                  <tr>
                    <td>Studio</td>
                    <td></td>
                    <td>R724</td>
                  </tr>
                  <tr>
                    <td>Studio</td>
                    <td></td>
                    <td>R725</td>
                  </tr>
                  <tr>
                    <td>Studio</td>
                    <td></td>
                    <td>R726</td>
                  </tr>
                  <tr>
                    <td>Studio</td>
                    <td></td>
                    <td>R727</td>
                  </tr>
                  <tr>
                    <td>Silk Screen Shop</td>
                    <td></td>
                    <td>R624</td>
                  </tr>
                  <tr>
                    <td>Seminar Room</td>
                    <td></td>
                    <td>R625</td>
                  </tr>
                  <tr>
                    <td>Usability Testing Lab</td>
                    <td></td>
                    <td>R626-1</td>
                  </tr>
                  <tr>
                    <td>Locker Room</td>
                    <td></td>
                    <td>R626-2</td>
                  </tr>
                  <tr>
                    <td>Computer Lab 3</td>
                    <td></td>
                    <td>R927</td>
                  </tr>
                  <tr>
                    <td>Dark Room</td>
                    <td></td>
                    <td>MH-B105</td>
                  </tr>
                  <tr>
                    <td>Film Production Studio</td>
                    <td></td>
                    <td>MH-B108</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="contact" className="aboutus_item">
            <div className="aboutus_item_tag">
              <span>연락처</span>
            </div>
            <div className="aboutus_content">
              <table className="aboutus_contact">
                <tr>
                  <td>주소</td>
                  <td>
                    04066 서울특별시 마포구 와우산로 94<br></br>
                    홍익대학교 홍문관 R712 미술대학 시각디자인과 학과사무실
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>전화</td>
                  <td>02-370-8888</td>
                  <td></td>
                </tr>
                <tr>
                  <td>팩스</td>
                  <td>02-3145-5792</td>
                  <td></td>
                </tr>
                <tr>
                  <td>업무시간</td>
                  <td>
                    월 - 금 9:00 - 17:30 / 점심시간 12:00-1:00<br></br>
                    동절기 월 - 금 9:00 - 17:00 / 점심시간 12:00-1:00
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>웹사이트</td>
                  <td>
                    홍익대학교
                    <a
                      href="https://hongik.ac.kr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      hongik.ac.kr
                    </a>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    홍익대학교 미술대학
                    <a
                      href="https://hongik.ac.kr"
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
              <table className="aboutus_contact_mobile">
                <tr>
                  <td>위치</td>
                  <td>R712</td>
                </tr>
                <tr>
                  <td>전화</td>
                  <td>02-370-8888</td>
                </tr>
                <tr>
                  <td>업무시간</td>
                  <td>
                    월~금 오전 9:00~오후 5:30 <br></br>(동절기 오전 9:00~오후
                    5:00)
                  </td>
                </tr>
                <tr>
                  <td>팩스</td>
                  <td>02-3145-5792</td>
                </tr>
                <tr>
                  <td>홈페이지</td>
                  <td>https://hongiksidi.com</td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
          <div id="link" className="aboutus_item">
            <div className="aboutus_item_tag">
              <span>소모임</span>
            </div>
            <div className="aboutus_content">
              <table className="aboutus_contact">
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
                </tr>
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
                </tr>
                <tr>
                  <td>힙스</td>
                  <td>
                    <a
                      href="http://ilovehips.kr/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ilovehips.kr
                    </a>
                  </td>
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
                </tr>
              </table>
            </div>
          </div>
          <div id="colophon" className="aboutus_item">
            <div className="aboutus_item_tag">
              <span>개발</span>
            </div>
            <div className="aboutus_content">
              <table className="aboutus_contact">
                <tr>
                  <td>디자인, 설계 및 개발</td>
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
                  <td>서버 API 개발 및 배포</td>
                  <td>
                    김서규{" "}
                    <a
                      href="https://www.github.com/SeogyuGim"
                      alt="instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/SeogyuGim
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>웹사이트 구축 도움</td>
                  <td>심윤서, 나혜린</td>
                </tr>
                <tr>
                  <td>2021년 3월 2일</td>
                  <td>구축 완료, 1.0 배포</td>
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
