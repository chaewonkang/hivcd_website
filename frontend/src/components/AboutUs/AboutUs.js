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
    <div className="aboutus_wrapper">
      <div className="aboutus_container">
        <div id="history" className="aboutus_item">
          <div className="aboutus_item_tag">
            <span>역사</span>
          </div>
          <div className="aboutus_content">
            오늘날 매체의 발달로 시각디자인의 영역은 계속 넓어지고 있다. 따라서
            시각디자인 전공 교육은 관련 분야와의 폭넓은 교류를 통해 새로운
            이론을 받아들이고 이에 따른 교육 내용과 방법을 창출하여 교육에
            반영하고 있다. <br></br>
            <br></br>1학년 학부 공통 기초 과정에서는 조형 실기 및 이론을
            가르치며, 2학년에서는 깊이 있는 세부 전공분야 실기 교육, 3-4학년
            과정에는 광고디자인, 영상디자인, 편집 및 멀티미디어디자인,
            포장디자인, 일러스트레이션, 사진디자인, 시각환경디자인 등을 학생
            희망에 따라 분야 별 전공 코스트랙(course track)에 따라 교육하여
            창의적인 전문 시각디자이너로서 능력을 기르는데 힘쓰고 있다.{" "}
            <br></br>
            <br></br>특히 국제적인 디자이너를 길러내기 위해 국내외 이름난 전문가
            및 교육자 초청 디자인 워크숍을 정기적으로 열고, 해외 디자인 행사
            학생 참여, 세계의 여러 유수 디자인대학과 학생 및 교수 교류를 활발히
            하고 있다. 오늘날 매체의 발달로 시각디자인의 영역은 계속 넓어지고
            있다. 따라서 시각디자인 전공 교육은 관련 분야와의 폭넓은 교류를 통해
            새로운 이론을 받아들이고 이에 따른 교육 내용과 방법을 창출하여
            교육에 반영하고 있다. 1학년 학부 공통 기초 과정에서는 조형 실기 및
            이론을 가르치며, 2학년에서는 깊이 있는 세부 전공분야 실기 교육,
            3-4학년 과정에는 광고디자인, 영상디자인, 편집 및 멀티미디어디자인,
            포장디자인, 일러스트레이션, 사진디자인, 시각환경디자인 등을 학생
            희망에 따라 분야 별 전공 코스트랙(course track)에 따라 교육하여
            창의적인 전문 시각디자이너로서 능력을 기르는데 힘쓰고 있다.{" "}
            <br></br>
            <br></br>특히 국제적인 디자이너를 길러내기 위해 국내외 이름난 전문가
            및 교육자 초청 디자인 워크숍을 정기적으로 열고, 해외 디자인 행사
            학생 참여, 세계의 여러 유수 디자인대학과 학생 및 교수 교류를 활발히
            하고 있다.
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
                <th>전공</th>
                <th>학위</th>
                <th>학위취득학교</th>
              </tr>
              <tr>
                <td>교수</td>
                <td>이철영</td>
                <td>광고커뮤니케이션</td>
                <td>커뮤니케이션박사</td>
                <td>Univ. of Illinois, Urbana Champaign</td>
              </tr>
              <tr>
                <td>부교수</td>
                <td>Christopher J.Ro</td>
                <td>광고커뮤니케이션</td>
                <td>커뮤니케이션박사</td>
                <td>Univ. of Illinois, Urbana Champaign</td>
              </tr>
              <tr>
                <td>교수</td>
                <td>이철영</td>
                <td>광고커뮤니케이션</td>
                <td>커뮤니케이션박사</td>
                <td>홍익대학교</td>
              </tr>
              <tr>
                <td>교수</td>
                <td>이철영</td>
                <td>광고커뮤니케이션</td>
                <td>커뮤니케이션박사</td>
                <td>홍익대학교</td>
              </tr>
              <tr>
                <td>교수</td>
                <td>이철영</td>
                <td>광고커뮤니케이션</td>
                <td>커뮤니케이션박사</td>
                <td>홍익대학교</td>
              </tr>
              <tr>
                <td>교수</td>
                <td>이철영</td>
                <td>광고커뮤니케이션</td>
                <td>커뮤니케이션박사</td>
                <td>홍익대학교</td>
              </tr>
              <tr>
                <td>교수</td>
                <td>이철영</td>
                <td>광고커뮤니케이션</td>
                <td>커뮤니케이션박사</td>
                <td>홍익대학교</td>
              </tr>
              <tr>
                <td>교수</td>
                <td>이철영</td>
                <td>광고커뮤니케이션</td>
                <td>커뮤니케이션박사</td>
                <td>홍익대학교</td>
              </tr>
            </table>
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
                  월~금 오전 9:00~오후 5:30 <br></br>(동절기 오전 9:00~오후
                  5:00)
                </td>
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
            <table className="aboutus_contact_mobile">
              <tr>
                <td>위치</td>
                <td>R715</td>
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
            <table className="colophon_table">
              <tr>
                <th>
                  홍익대학교 <a>www.hongik.ac.kr</a>
                </th>
              </tr>
              <tr>
                <th>
                  홍익대학교 미술대학 <a>www.hongik.ac.kr</a>
                </th>
              </tr>
              <tr>
                <th>
                  한글꼴연구회 <a>www.hongik.ac.kr</a>
                </th>
              </tr>
              <tr>
                <th>
                  그린비 <a>www.hongik.ac.kr</a>
                </th>
              </tr>
              <tr>
                <th>
                  드로마픽 <a>www.hongik.ac.kr</a>
                </th>
              </tr>
              <tr>
                <th>
                  힙스 <a>www.hongik.ac.kr</a>
                </th>
              </tr>
              <tr>
                <th>
                  아이레이 <a>www.hongik.ac.kr</a>
                </th>
              </tr>
              <tr>
                <th>
                  애드레날린 <a>www.hongik.ac.kr</a>
                </th>
              </tr>
            </table>
          </div>
        </div>
        <div id="colophon" className="aboutus_item">
          <div className="aboutus_item_tag">
            <span>콜로폰</span>
          </div>
          <div className="aboutus_content">
            <table className="colophon_table">
              <tr>
                <th>웹사이트 디자인</th>
                <td>Yinyang yinyang.company</td>
              </tr>
              <tr>
                <th>웹사이트 개발</th>
                <td>
                  강채원 yinyang.company<br></br>김서규 yinyang.company
                </td>
              </tr>
              <tr>
                <th>웹사이트 구축 도움</th>
                <td>심윤서, 나혜린</td>
              </tr>
              <tr>
                <th>2021년 1월 00일</th>
                <td>구축 완료</td>
              </tr>
              <tr>
                <th>2021년 1월 00일</th>
                <td>v1.0 배포</td>
              </tr>
              <tr>
                <th>2021년 1월 00일</th>
                <td>v2.0 배포 - 무슨 무슨 기능 추가</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
