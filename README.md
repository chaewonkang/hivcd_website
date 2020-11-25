홍익대학교 미술대학 시각디자인과의 웹사이트 프로젝트입니다.

API Test 방법

1. 가상환경 설치 (python -m venv venv)
2. 가상환경 실행 (source venv/bin/activate)
3. pip 업데이트 (python -m pip install --upgrade pip)
4. 개발환경 세팅 (pip install -r requirements/dev.txt)
5. .env 파일 실행 (source .env)
6. 마이그레이션 (python manage.py migrate)
7. 서버 실행 (python manage.py runserver)

API EndPoints

게시판:

1. http://localhost:8000/api/v1/postings : 게시글 리스트(ReadOnly)
2. http://localhost:8000/api/v1/postings/create/ : 게시글 생성
3. http://localhost:8000/api/v1/postings/pk/ : 게시글 세부사항
4. http://localhost:8000/api/v1/postings/update/ : 게시글 업데이트
5. http://localhost:8000/api/v1/postings/delete/ : 게시글 삭제

Authentication

1. http://localhost:8000/api/v1/authentications : 유저 리스트
2. http://localhost:8000/api/v1/authentications/pk/ : 유저 디테일
3. http://localhost:8000/api/v1/authentications/registration/ : 회원가입
4. http://localhost:8000/api/v1/authentications/registration/email-verify/ : 회원가입 이메일 인증
5. http://localhost:8000/api/v1/authentications/login/ : 로그인
6. http://localhost:8000/api/v1/authentications/logout/ : 로그아웃
7. http://localhost:8000/api/v1/authentications/request-reset-email/ : 비밀번호 리셋 신청
8. http://localhost:8000/api/v1/authentications/password-reset-email : 비밀번호 리셋 확인
9. http://localhost:8000/api/v1/authentications/password-reset-complete : 비밀번호 리셋 완료
10. http://localhost:8000/api/v1/authentications/token-verify/ : 토큰 확인
11. http://localhost:8000/api/v1/authentications/token-refresh/ : 토큰 리프레쉬
