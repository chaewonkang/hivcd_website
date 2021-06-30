import React from 'react';

import './ReservationContainer.css';

function ReservationContainer() {
  return (
    <>
      <div className='reservation_container'>
        <div className='reservation_index'>
          <div className='index_title'>목록</div>
          <div className='space_list'>
            <div className='space_list_wrapper'>
              <div>헥사</div>
              <div>CG실 창고, 모듈실</div>
              <div>실크스크린실</div>
              <div>캐비넷실</div>
              <div>세미나실</div>
              <div>UT실</div>
              <div>아이맥실</div>
              <div>CG실</div>
              <div>암실</div>
              <div>크로마키스튜디오</div>
              <div>모형제작실</div>
              <div>뉴미디어랩</div>
              <div>프린트실</div>
              <div>일반강의실</div>
              <div></div>
            </div>
          </div>
          <div className='info_category'>
            <div className='info_category_wrapper'>
              <div>설명</div>
              <div>예약방법</div>
              <div>연락처</div>
              <div>운영시간</div>
              <div>주의사항</div>
              <div>이용방법</div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div>예약 바로가기</div>
              <div>인스타그램</div>
              <div>페이스북</div>
            </div>
          </div>
        </div>
        <div className='reservation_info'>
          <div>홍문관 7층 R711</div>
          <div>
            <p>
              헥사(Hongik Equipment eXchange Application)는 영상 및 사진 촬영에
              필요한 장비들을 대여해주는 장소이다. 운영 시간은 페이스북 Hexa
              Jikimi 계정에서 확인할 수 있다.(goo.gl/PzGp3K) 매 학기 초 진행되는
              장비 사용법 세미나에 한 번 이상 참석해야 이용 자격이 주어진다.
              세미나는 기초 장비 세미나와 고급 장비 세미나로 나누어지며, 고급
              장비 세미나는 2학년 이상부터 참석할 수 있다. 점수제로 운영되며,
              100점에서 시작한다. 작동 이상이나 관리 미흡 등으로 장비에 문제가
              생길 경우 점수가 감점되어 이용에 제한이 생긴다. 점수 회복은
              장비대여실에서 공지하는 학과 내 활동 기여를 통해 가능하다.
            </p>
          </div>
        </div>
        <div className='reservation_board'></div>
      </div>
    </>
  );
}

export default ReservationContainer;
