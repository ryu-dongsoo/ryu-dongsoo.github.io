# Git 기본 설치 및 설정 가이드

## 1. Git 설치

### Windows에서 Git 설치
1. [Git 다운로드 페이지](https://git-scm.com/download/win) 접속
2. "Click here to download" 클릭하여 설치 파일 다운로드
3. 다운로드한 설치 파일 실행
4. 설치 과정에서 기본 설정 유지 (Next 클릭)
5. 설치 완료 후 Git Bash 실행하여 설치 확인
   ```bash
   git --version
   ```

### Linux에서 Git 설치
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install git

# CentOS/RHEL
sudo yum install git

# Fedora
sudo dnf install git
```

### macOS에서 Git 설치
```bash
# Homebrew 사용
brew install git

# 또는 Xcode Command Line Tools 설치
xcode-select --install
```

## 2. Git 기본 설정

### 사용자 정보 설정
```bash
# 사용자 이름 설정
git config --global user.name "사용자 이름"

# 이메일 주소 설정
git config --global user.email "이메일 주소"

# 기본 편집기 설정 (VS Code)
git config --global core.editor "code --wait"

# 설정 확인
git config --list
```

### Git 기본 설정 파일
```bash
# 전역 설정 파일 위치
~/.gitconfig

# 로컬 설정 파일 위치
.git/config
```

## 3. GitHub 계정 설정

### 1. GitHub 계정 생성
1. [GitHub 웹사이트](https://github.com) 접속
2. "Sign up" 버튼 클릭
3. 필요한 정보 입력:
   - 사용자 이름
   - 이메일 주소
   - 비밀번호
4. 이메일 인증 완료

### 2. SSH 키 생성 및 등록
```bash
# SSH 키 생성
ssh-keygen -t rsa -b 4096 -C "이메일주소"

# 공개키 확인
cat ~/.ssh/id_rsa.pub

# GitHub에 공개키 등록
# 1. GitHub 설정 > SSH and GPG keys
# 2. New SSH key 클릭
# 3. 공개키 복사하여 등록
```

## 4. Git 주요 명령어

### 기본 명령어
```bash
# 저장소 초기화
git init

# 상태 확인
git status

# 변경사항 스테이징
git add <파일명>
git add .  # 모든 파일

# 변경사항 커밋
git commit -m "커밋 메시지"

# 원격 저장소 연결
git remote add origin <저장소URL>

# 변경사항 푸시
git push origin <브랜치명>
```

### 브랜치 관련
```bash
# 브랜치 생성
git branch <브랜치명>

# 브랜치 전환
git checkout <브랜치명>

# 브랜치 생성 및 전환
git checkout -b <브랜치명>

# 브랜치 삭제
git branch -d <브랜치명>
```

### 변경사항 관리
```bash
# 변경사항 확인
git diff

# 변경사항 취소
git checkout -- <파일명>

# 스테이징 취소
git reset HEAD <파일명>

# 커밋 취소
git reset --soft HEAD^
```

### 원격 저장소
```bash
# 원격 저장소 목록
git remote -v

# 원격 저장소 추가
git remote add <이름> <URL>

# 원격 저장소에서 가져오기
git fetch <원격저장소>

# 원격 저장소와 병합
git merge <원격저장소>/<브랜치>
```

### 히스토리 관리
```bash
# 커밋 히스토리 확인
git log

# 간단한 히스토리 확인
git log --oneline

# 특정 파일의 히스토리
git log -- <파일명>
```

### 태그 관리
```bash
# 태그 생성
git tag <태그명>

# 태그 푸시
git push origin <태그명>

# 모든 태그 푸시
git push origin --tags
```

## 5. 문제 해결

### 1. Git 인증 문제
- GitHub Personal Access Token 생성
- Git 자격 증명 관리자에서 토큰 등록

### 2. 저장소 푸시 실패
- 인터넷 연결 확인
- GitHub 저장소 권한 확인
- 로컬 변경사항 커밋 확인

### 3. 일반적인 문제
- Git 자격 증명 관리자 확인
- 네트워크 연결 확인
- 저장소 권한 확인

## 6. 참고 자료
- [Git 공식 문서](https://git-scm.com/doc)
- [GitHub 공식 문서](https://docs.github.com)
- [Git 명령어 치트시트](https://education.github.com/git-cheat-sheet-education.pdf) 