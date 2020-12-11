홍익대학교 미술대학 시각디자인과의 웹사이트 프로젝트입니다.

API Test 방법

1. 가상환경 설치 (python -m venv venv)
2. 가상환경 실행 (source venv/bin/activate)
3. pip 업데이트 (python -m pip install --upgrade pip)
4. 개발환경 세팅 (pip install -r requirements/dev.txt)
5. .env 파일 실행 (source .env)
6. 마이그레이션 (python manage.py migrate)
7. 서버 실행 (python manage.py runserver)

백엔드
- 11월 29일 : API 테스트 완료
- 12월 01일 : AWS 배포 튜토리얼 성공
- 12월 05일 : AZURE 배포 성공, 웹팩 연동 해야함
