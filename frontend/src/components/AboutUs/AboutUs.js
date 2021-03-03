import React from "react";
import "./AboutUs.css";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

function NaverMapAPI() {
  const navermaps = window.naver.maps;
  return (
    <NaverMap
      mapDivId={"react-naver-map"}
      style={{
        width: "90%",
        height: "400px",
        overflow: "auto",
        margin: "auto",
      }}
      defaultCenter={{ lat: 37.5526276, lng: 126.9243904 }}
      defaultZoom={13}
    >
      <Marker
        key={1}
        position={new navermaps.LatLng(37.5526276, 126.9243904)}
        animation={2}
        onClick={() => {
          alert("홍익대학교 홍문관 7층!");
        }}
      />
    </NaverMap>
  );
}

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
                  <th>소속</th>
                  <th>분야</th>
                </tr>
                <tr>
                  <td>교수</td>
                  <td>김대수</td>
                  <td>홍익대학교 시각디자인과</td>
                  <td>사진</td>
                </tr>
                <tr>
                  <td>교수</td>
                  <td>김현석</td>
                  <td>홍익대학교 시각디자인과</td>
                  <td>디지털미디어디자인</td>
                </tr>
                <tr>
                  <td>교수</td>
                  <td>장동련</td>
                  <td>홍익대학교 시각디자인과</td>
                  <td>브랜딩디자인</td>
                </tr>
                <tr>
                  <td>부교수</td>
                  <td>Ro, Chris</td>
                  <td>홍익대학교 시각디자인과</td>
                  <td>타이포그래피/그래픽디자인</td>
                </tr>
                <tr>
                  <td>부교수</td>
                  <td>Griem, Oliver</td>
                  <td>홍익대학교 시각디자인과</td>
                  <td>디지털미디어디자인</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>김예니</td>
                  <td>홍익대학교 시각디자인과</td>
                  <td>일러스트레이션</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>민본</td>
                  <td>홍익대학교 시각디자인과</td>
                  <td>타이포그래피/타입디자인</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>백승우</td>
                  <td>홍익대학교 시각디자인과</td>
                  <td>사진</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>석재원</td>
                  <td>홍익대학교 시각디자인과</td>
                  <td>그래픽디자인</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>안병학</td>
                  <td>홍익대학교 시각디자인과</td>
                  <td>타이포그래피</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>윤재영</td>
                  <td>홍익대학교 시각디자인과</td>
                  <td>UX, UI디자인</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>이연준</td>
                  <td>홍익대학교 시각디자인과</td>
                  <td>브랜딩디자인</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>전재운</td>
                  <td>홍익대학교 시각디자인과</td>
                  <td>그래픽디자인</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>정다희</td>
                  <td>홍익대학교 시각디자인과</td>
                  <td>일러스트레이션/애니메이션</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>허민재</td>
                  <td>홍익대학교 시각디자인과</td>
                  <td>그래픽디자인</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>Cooppoolse, Anneke</td>
                  <td>홍익대학교 시각디자인과</td>
                  <td>시각디자인</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>Lee, Marvin Jin</td>
                  <td>홍익대학교 시각디자인과</td>
                  <td>그래픽디자인</td>
                </tr>
                <tr>
                  <td>조교수</td>
                  <td>Beckett, Stephen J.</td>
                  <td>홍익대학교 시각디자인과</td>
                  <td>디자인이론</td>
                </tr>
              </table>
              <hr></hr>
              <div className="subfaculty">
                <table className="faculty">
                  <tr>
                    <th>이름</th>
                    <th>소속</th>
                  </tr>
                  <tr>
                    <td>김승인</td>
                    <td>국제디자인전문대학원 교수</td>
                  </tr>
                  <tr>
                    <td>김현선</td>
                    <td>국제디자인전문대학원 부교수</td>
                  </tr>
                  <tr>
                    <td>성열흥</td>
                    <td>광고홍보대학원 부교수</td>
                  </tr>
                  <tr>
                    <td>이나미</td>
                    <td>산업미술대학원 부교수</td>
                  </tr>
                  <tr>
                    <td>구유리</td>
                    <td>산업미술대학원 조교수</td>
                  </tr>
                  <tr>
                    <td>김보연</td>
                    <td>국제디자인전문대학원 조교수</td>
                  </tr>
                  <tr>
                    <td>정재희</td>
                    <td>산업미술대학원 조교수</td>
                  </tr>
                  <tr>
                    <td>Hall, David</td>
                    <td>국제디자인전문대학원 조교수</td>
                  </tr>
                  <tr>
                    <td>최문경</td>
                    <td>시각디자인과 겸임교수</td>
                  </tr>
                </table>
                <table className="faculty">
                  <tr className="mobile_hide">
                    <th>이름</th>
                    <th>소속</th>
                  </tr>
                  <tr>
                    <td>이철영</td>
                    <td>광고홍보대학원 교수</td>
                  </tr>
                  <tr>
                    <td>박현주</td>
                    <td>시각디자인과 부교수(산학일체)</td>
                  </tr>
                  <tr>
                    <td>오명열</td>
                    <td>광고홍보대학원 부교수</td>
                  </tr>
                  <tr>
                    <td>최백</td>
                    <td>국제디자인전문대학원 부교수</td>
                  </tr>
                  <tr>
                    <td>김거수</td>
                    <td>산업미술대학원 조교수</td>
                  </tr>
                  <tr>
                    <td>박보람</td>
                    <td>국제디자인전문대학원 조교수</td>
                  </tr>
                  <tr>
                    <td>한정엽</td>
                    <td>영상대학원 조교수</td>
                  </tr>
                  <tr>
                    <td>심대기</td>
                    <td>시각디자인과 겸임교수</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div id="map" className="aboutus_item">
            <div className="aboutus_item_tag">
              <span>지도</span>
            </div>
            <div id="naver_map" className="aboutus_content">
              <RenderAfterNavermapsLoaded
                ncpClientId={"copdkbfrqt"}
                error={<p>Maps Load Error</p>}
                loading={<p>Maps Loading...</p>}
              >
                <NaverMapAPI />
              </RenderAfterNavermapsLoaded>
            </div>
          </div>
          <div id="contact" className="aboutus_item">
            <div className="aboutus_item_tag">
              <span>연락처</span>
            </div>
            <div className="aboutus_content">
              <table className="aboutus_contact">
                <tr>
                  <td>위치</td>
                  <td>R715</td>
                  <td>전화</td>
                  <td>02-370-8888</td>
                </tr>
                <tr>
                  <td>업무시간</td>
                  <td>
                    월 - 금 9:00 - 17:30 <br></br>(동절기 9:00 - 17:00)
                  </td>
                  <td>팩스</td>
                  <td>02-3145-5792</td>
                </tr>
                <tr>
                  <td>홈페이지</td>
                  <td>sidi.hongik.ac.kr </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>주소</td>
                  <td>
                    04066 서울특별시 마포구 와우산로 94<br></br> 홍익대학교 R712
                  </td>
                  <td></td>
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
              <span>링크</span>
            </div>
            <div className="aboutus_content">
              <table className="aboutus_contact">
                <tr>
                  <td>홍익대학교</td>
                  <td>
                    <a
                      href="https://hongik.ac.kr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      hongik.ac.kr
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>홍익대학교 미술대학</td>
                  <td>
                    <a
                      href="https://cfa.hongik.ac.kr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      cfa.hongik.ac.kr
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>홍익대학교 시각디자인과</td>
                  <td>
                    <a
                      href="https://www.hongiksidi.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      hongiksidi.com
                    </a>
                  </td>
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
              <span>콜로폰</span>
            </div>
            <div className="aboutus_content">
              <table className="aboutus_contact">
                <tr>
                  <td>웹사이트 디자인</td>
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
                  <td>웹사이트 설계 및 개발</td>
                  <td>
                    강채원{" "}
                    <a
                      href="https://www.chaewonkang.com"
                      alt="instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.chaewonkang.com
                    </a>
                    <br></br>
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
