홍익대학교 미술대학 시각디자인과의 웹사이트 프로젝트입니다.

===
이력
- 11월 29일 : API 테스트 완료
- 12월 01일 : AWS 배포 튜토리얼 성공
- 12월 05일 : AZURE 배포 성공, 웹팩 연동 해야함
- 12월 14일 : AWS EC2 / RDS 이용 배포성공


===
현재
- AWS EC2 = (서버내부 POSTGRES를 활용하여 작업)
psql -h localhost -p 5432 xxxxx -d xxxx

- (명령어 참고https://browndwarf.tistory.com/51)
\list(or \l) : 전체 Database Instance 목록
\dt : 접속한 DB Instance의 Table 목록
\ds : Sequence 목록
\df : Function 목록
\dv : View 목록
\du : User 목록

===

SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'postings_post';
ALTER TABLE `테이블명` ADD `새컬럼명` 자료형 AFTER `앞컬럼명`;
ALTER TABLE postings_post ADD COLUMN more_text text;

===

source venv/bin/activate
source priv/.env
pip install -r requirements.txt 
cd backend

===
만약 postings 앱에서 변경사항 적용이 필요할 시

python manage.py makemigrations postings
python manage.py migrate postings

===
develop 브랜치를 현재 계속 사용

git remote update
git branch
git branch -r
git branch -a 
git checkout -t origin/develop

git log —graph —decorate —oneline


