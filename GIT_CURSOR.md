# Cursor IDE와 Git 연동 가이드

## 1. Cursor IDE 설치
1. [Cursor 공식 웹사이트](https://cursor.sh) 접속
2. 운영체제에 맞는 버전 다운로드
3. 설치 프로그램 실행
4. 설치 완료 후 Cursor 실행

## 2. Cursor 기본 설정
1. GitHub 계정 연동
   - Cursor 실행
   - 설정 메뉴 열기 (Ctrl+,)
   - GitHub 계정 로그인

2. 테마 및 폰트 설정
   - 설정 메뉴에서 "Appearance" 선택
   - 원하는 테마와 폰트 설정

3. 확장 프로그램 설치
   - 확장 프로그램 메뉴 열기 (Ctrl+Shift+X)
   - 필요한 확장 프로그램 검색 및 설치

## 3. Git과 Cursor 연동

### 1. Git 저장소 초기화
1. Cursor에서 새 폴더 열기
2. 터미널 열기 (Ctrl+` )
3. Git 초기화:
   ```bash
   git init
   ```

### 2. 소스 제어 기능 사용
1. Cursor 좌측 사이드바에서 소스 제어 아이콘 클릭
2. 변경사항 확인 및 스테이징
3. 커밋 메시지 입력 및 커밋
4. 원격 저장소 연동 및 푸시

### 3. Git 명령어 팔레트 사용
1. Ctrl+Shift+P 입력
2. Git 관련 명령어 검색 및 실행:
   - Git: Clone
   - Git: Pull
   - Git: Push
   - Git: Commit
   - Git: Checkout

## 4. Cursor Git 기능 활용

### 1. 변경사항 추적
- 소스 제어 뷰에서 변경된 파일 확인
- 변경사항 비교 (Diff) 뷰어 사용
- 변경사항 스테이징 및 언스테이징

### 2. 브랜치 관리
- 브랜치 생성 및 전환
- 브랜치 병합
- 충돌 해결

### 3. 히스토리 확인
- 커밋 히스토리 시각화
- 특정 커밋으로 이동

## 5. 문제 해결

### 1. Cursor GitHub 연동 문제
- GitHub 계정 로그아웃 후 재로그인
- Cursor 재시작

### 2. Git 명령어 실행 오류
- Git 설치 경로 확인
- Cursor 재시작
- Git Bash에서 명령어 실행

### 3. 일반적인 문제
- Git 자격 증명 관리자 확인
- 네트워크 연결 확인
- 저장소 권한 확인

## 6. Cursor Git 단축키

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

## 7. 참고 자료
- [Cursor 공식 문서](https://cursor.sh/docs)
- [Git 기본 가이드](GIT_BASIC.md)
- [GitHub 공식 문서](https://docs.github.com) 