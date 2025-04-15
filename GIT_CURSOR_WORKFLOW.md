# Cursor IDE에서 Git 작업 흐름 예제

## 1. 저장소 복제 (Clone)

### 1.1. Cursor에서 저장소 복제
1. Cursor 실행
2. `Ctrl+Shift+P` 입력
3. "Git: Clone" 선택
4. 저장소 URL 입력:
   ```
   https://github.com/사용자이름/저장소이름.git
   ```
5. 로컬 저장소 경로 선택
6. "Clone" 클릭

### 1.2. 복제된 저장소 열기
1. Cursor에서 "Open Folder" 선택
2. 복제된 저장소 디렉토리 선택
3. "Open" 클릭

## 2. Cursor에서 Git 작업

### 2.1. 새 브랜치 생성
1. 좌측 사이드바에서 "Source Control" 아이콘 클릭
2. 하단의 브랜치 선택기에서 "Create New Branch" 클릭
3. 브랜치 이름 입력: `feature/new-document`
4. "Create Branch" 클릭

### 2.2. 파일 수정 및 추가
1. 새 파일 생성:
   - `Ctrl+N`로 새 파일 생성
   - 내용 작성
   - `Ctrl+S`로 저장 (예: `new-document.md`)

2. 기존 파일 수정:
   - 파일 더블클릭으로 열기
   - 내용 수정
   - `Ctrl+S`로 저장

### 2.3. 변경사항 확인
1. 좌측 사이드바의 "Source Control" 아이콘 클릭
2. 변경된 파일 목록 확인
3. 파일 클릭하여 변경 내용 확인

### 2.4. 변경사항 스테이징 및 커밋
1. 변경된 파일 옆의 "+" 아이콘 클릭하여 스테이징
   - 또는 "Stage All Changes" 클릭

2. 커밋 메시지 입력:
   ```
   새 문서 추가 및 기존 문서 수정
   ```

3. "Commit" 버튼 클릭

## 3. 원격 저장소에 푸시

### 3.1. 브랜치 푸시
1. 좌측 사이드바의 "Source Control" 아이콘 클릭
2. "..." 메뉴 클릭
3. "Push" 선택
4. "Push to" 다이얼로그에서 "origin" 선택
5. "Push" 클릭

### 3.2. Pull Request 생성
1. GitHub 웹사이트에서 "Pull Request" 버튼 클릭
2. base 브랜치: `main`
3. compare 브랜치: `feature/new-document`
4. PR 제목 및 설명 작성
5. "Create Pull Request" 클릭

## 4. 리뷰 후 수정

### 4.1. 피드백 반영
1. 리뷰어의 피드백 확인
2. Cursor에서 파일 수정
3. 변경사항 스테이징 및 커밋
4. "Push"로 변경사항 푸시

### 4.2. PR 승인 및 병합
1. GitHub 웹사이트에서 PR 승인
2. "Merge Pull Request" 클릭
3. 병합 완료 후 브랜치 삭제

## 5. Cursor Git 단축키

### 기본 단축키
- `Ctrl+Shift+G`: 소스 제어 뷰 열기
- `Ctrl+Enter`: 커밋
- `Ctrl+Shift+P`: 명령어 팔레트 열기

### Git 명령어
- `Git: Clone`
- `Git: Pull`
- `Git: Push`
- `Git: Commit`
- `Git: Checkout`

## 6. 문제 해결

### 6.1. 충돌 해결
1. 충돌 발생 시 Cursor에서 충돌 표시 확인
2. 충돌 부분 수정
3. "Accept Current Change" 또는 "Accept Incoming Change" 선택
4. 변경사항 커밋 및 푸시

### 6.2. 커밋 수정
1. `Ctrl+Shift+P` 입력
2. "Git: Commit (Amend)" 선택
3. 커밋 메시지 수정
4. "Commit" 클릭

### 6.3. 변경사항 되돌리기
1. 변경된 파일 선택
2. "..." 메뉴 클릭
3. "Discard Changes" 선택

## 7. 참고 자료
- [Cursor Git 문서](https://cursor.sh/docs)
- [Git 기본 가이드](GIT_BASIC.md)
- [Git 작업 흐름 가이드](GIT_WORKFLOW.md) 