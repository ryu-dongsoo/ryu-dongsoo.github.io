---
marp: true
theme: default
paginate: true
header: 'Git Workflow 가이드'
footer: '© 2024'
style: |
  section {
    font-size: 1.5em;
  }
  h1 {
    color: #2E7D32;
  }
  h2 {
    color: #1976D2;
  }
  code {
    background-color: #f5f5f5;
    padding: 0.2em 0.4em;
    border-radius: 3px;
  }
---

<!-- _class: lead -->
# Git Workflow 가이드

---

## 1. 로컬 저장소 복제 (Clone)

### 1.1. 저장소 URL 확인
- GitHub 저장소 페이지에서 "Code" 버튼 클릭
- HTTPS 또는 SSH URL 복사
  ```
  https://github.com/사용자이름/저장소이름.git
  ```

### 1.2. 로컬에 복제
```bash
# 작업할 디렉토리로 이동
cd C:\Users\사용자이름\workspace

# 저장소 복제
git clone https://github.com/사용자이름/저장소이름.git

# 복제된 디렉토리로 이동
cd 저장소이름
```

---

## 2. 로컬에서 작업

### 2.1. 새 브랜치 생성
```bash
# main 브랜치에서 최신 변경사항 받기
git checkout main
git pull origin main

# 작업용 브랜치 생성 및 이동
git checkout -b feature/new-document
```

### 2.2. 파일 수정 및 추가
```bash
# 새 파일 생성
echo "# 새 문서" > new-document.md

# 기존 파일 수정
notepad existing-file.md
```

---

## 3. 원격 저장소에 푸시

### 3.1. 원격 저장소에 브랜치 푸시
```bash
# 새 브랜치를 원격 저장소에 푸시
git push origin feature/new-document
```

### 3.2. Pull Request 생성
- GitHub 웹사이트에서 "Pull Request" 버튼 클릭
- base 브랜치: `main`
- compare 브랜치: `feature/new-document`
- PR 제목 및 설명 작성
- "Create Pull Request" 클릭

---

## 4. 리뷰 후 병합

### 4.1. 리뷰어의 피드백 반영
```bash
# 피드백 반영을 위한 추가 수정
notepad new-document.md

# 변경사항 스테이징 및 커밋
git add new-document.md
git commit -m "리뷰 피드백 반영"

# 변경사항 푸시
git push origin feature/new-document
```

### 4.2. PR 승인 및 병합
- GitHub 웹사이트에서 PR 승인
- "Merge Pull Request" 클릭
- 병합 완료 후 브랜치 삭제

---

## 5. 로컬 정리

### 5.1. main 브랜치 업데이트
```bash
# main 브랜치로 전환
git checkout main

# 최신 변경사항 받기
git pull origin main
```

### 5.2. 작업 브랜치 삭제
```bash
# 로컬 브랜치 삭제
git branch -d feature/new-document

# 원격 브랜치 삭제
git push origin --delete feature/new-document
```

---

## 6. 일반적인 문제 해결

### 6.1. 충돌 해결
```bash
# 충돌 발생 시
git pull origin main

# 충돌 해결 후
git add .
git commit -m "충돌 해결"
git push origin feature/new-document
```

### 6.2. 커밋 히스토리 수정
```bash
# 마지막 커밋 수정
git commit --amend -m "수정된 커밋 메시지"

# 여러 커밋을 하나로 합치기
git rebase -i HEAD~3
```

---

## 7. 참고 자료
- [Git 공식 문서](https://git-scm.com/doc)
- [GitHub Flow 가이드](https://guides.github.com/introduction/flow/)
- [Git 명령어 치트시트](https://education.github.com/git-cheat-sheet-education.pdf) 