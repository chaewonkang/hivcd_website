# hivcd_website

1. 깃허브 세팅

**폴더이름**

hivcd_website

**브랜치**

master, develop

**작업규칙**

(1) 각자 보낸 pull request는 develop 브랜치에만 머지한다.

(2) 기능별로 다른 브랜치를 만들어서 개발하고 머지한 뒤 삭제한다.

(3) 항상 develop 브랜치의 최신 버전에서 작업한다.

**브랜치의 목록을 볼 때**

git branch

**브랜치를 생성할 때**

git branch "새로운 브랜치 이름"

**브랜치를 삭제할 때**

git branch -d

**병합하지 않은 브랜치를 강제 삭제할 때**

git branch -D

**브랜치를 전환(체크아웃)할 때**

git checkout "전환하려는 브랜치 이름"

**브랜치를 생성하고 전환까지 할 때**

git checkout -b "생성하고 전환할 브랜치 이름"
