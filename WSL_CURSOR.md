# WSL 설치 및 Cursor 원격 접속 가이드

## WSL (Windows Subsystem for Linux) 설치

### 1. WSL 설치 전 준비사항
- Windows 10 버전 2004 이상 또는 Windows 11
- 관리자 권한이 필요합니다

### 2. WSL 설치 방법

#### 방법 1: PowerShell을 통한 설치 (권장)
1. PowerShell을 관리자 권한으로 실행
2. 다음 명령어 실행:
```powershell
wsl --install
```
3. 컴퓨터 재시작

#### 방법 2: 수동 설치
1. Windows 기능 켜기/끄기에서 다음 항목 활성화:
   - Windows Subsystem for Linux
   - Virtual Machine Platform
2. Microsoft Store에서 "Ubuntu" 검색 및 설치
3. 설치 후 Ubuntu 실행하여 초기 설정 완료

### 3. WSL 기본 설정
1. WSL 버전 확인:
```bash
wsl --version
```

2. 기본 배포판 설정:
```bash
wsl --set-default-version 2
```

3. Ubuntu 배포판 설치:
```bash
wsl --install -d Ubuntu
```

## Cursor에서 WSL 원격 접속 설정

### 1. Cursor에서 WSL 확장 설치
1. Cursor 실행
2. 확장 프로그램 메뉴 열기 (Ctrl+Shift+X)
3. "Remote - WSL" 확장 검색 및 설치

### 2. WSL 폴더 열기
1. Cursor에서 F1 키 또는 Ctrl+Shift+P 입력
2. "WSL: New Window" 선택
3. WSL 배포판 선택 (Ubuntu)
4. 원하는 프로젝트 폴더 선택

### 3. WSL 터미널 사용
1. Cursor에서 터미널 열기 (Ctrl+`)
2. 터미널 드롭다운 메뉴에서 "WSL" 선택
3. WSL 터미널에서 명령어 실행 가능

## WSL 개발 환경 설정

### 1. 필수 패키지 설치
```bash
sudo apt update
sudo apt upgrade
sudo apt install build-essential git curl wget
```

### 2. Node.js 설치 (예시)
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

### 3. Python 설치
```bash
sudo apt install python3 python3-pip
```

## 주의사항 및 문제 해결

### 1. 일반적인 문제 해결
- WSL이 실행되지 않는 경우:
  ```bash
  wsl --shutdown
  wsl
  ```

- 디스크 공간 부족 시:
  ```bash
  wsl --shutdown
  wsl --export Ubuntu ubuntu.tar
  wsl --unregister Ubuntu
  wsl --import Ubuntu . ubuntu.tar
  ```

### 2. 성능 최적화
1. WSL 설정 파일 수정:
```bash
sudo nano /etc/wsl.conf
```

2. 다음 내용 추가:
```ini
[automount]
options = "metadata"
```

### 3. 파일 시스템 접근
- Windows 파일 시스템: `/mnt/c/`
- Linux 파일 시스템: `/home/사용자이름/`

## 유용한 WSL 명령어

```bash
# WSL 상태 확인
wsl --status

# 설치된 배포판 목록 확인
wsl --list --verbose

# 특정 배포판 종료
wsl --terminate Ubuntu

# WSL 재설정
wsl --unregister Ubuntu
wsl --install -d Ubuntu
```

## Cursor에서의 WSL 개발 팁

1. **파일 탐색기 통합**
   - Windows 탐색기에서 WSL 경로 직접 접근 가능
   - `\\wsl$\Ubuntu\home\사용자이름`

2. **Git 통합**
   - WSL 내에서 Git 명령어 사용 가능
   - Windows와 WSL 간 Git 설정 공유

3. **확장 프로그램**
   - WSL 환경에서도 Cursor 확장 프로그램 사용 가능
   - 필요한 경우 WSL 환경에 별도 설치 필요

4. **디버깅**
   - WSL 환경에서 직접 디버깅 가능
   - Cursor의 디버깅 도구 활용

## 참고 자료
- [Microsoft WSL 공식 문서](https://docs.microsoft.com/ko-kr/windows/wsl/)
- [Cursor 공식 문서](https://cursor.sh/docs)
- [WSL GitHub 저장소](https://github.com/microsoft/WSL)

## Windows와 WSL Linux 환경 비교

### 1. 파일 시스템 비교

#### Windows 파일 시스템
- 드라이브 문자 사용 (C:, D: 등)
- 경로 구분자: 백슬래시 (\)
- 대소문자 구분 없음
- 파일 권한: ACL (Access Control List) 기반
- 최대 경로 길이: 260자 (기본값)

#### WSL Linux 파일 시스템
- 계층적 디렉토리 구조 (/)
- 경로 구분자: 슬래시 (/)
- 대소문자 구분
- 파일 권한: Unix 권한 (rwx) 기반
- 최대 경로 길이: 제한 없음

### 2. 명령어 비교

#### Windows 명령어
```powershell
# 디렉토리 내용 확인
dir
# 디렉토리 이동
cd
# 파일 복사
copy
# 파일 이동
move
# 프로세스 확인
tasklist
# 프로세스 종료
taskkill
```

#### WSL Linux 명령어
```bash
# 디렉토리 내용 확인
ls
# 디렉토리 이동
cd
# 파일 복사
cp
# 파일 이동
mv
# 프로세스 확인
ps
# 프로세스 종료
kill
```

### 3. 환경 변수 비교

#### Windows 환경 변수
- 시스템 변수와 사용자 변수 구분
- GUI를 통한 설정 가능
- `%변수명%` 형식으로 사용
- 영구적 설정: 시스템 속성 > 고급 > 환경 변수

#### WSL Linux 환경 변수
- 셸별 환경 변수 설정
- 텍스트 기반 설정
- `$변수명` 형식으로 사용
- 영구적 설정: ~/.bashrc, ~/.profile 등

### 4. 네트워크 비교

#### Windows 네트워크
- GUI 기반 네트워크 설정
- Windows 방화벽 사용
- 네트워크 어댑터 관리자 사용
- IP 설정: 네트워크 및 공유 센터

#### WSL Linux 네트워크
- 명령어 기반 네트워크 설정
- iptables 사용 가능
- 네트워크 인터페이스 직접 관리
- IP 설정: /etc/network/interfaces

### 5. 개발 환경 비교

#### Windows 개발 환경
- Visual Studio, Visual Studio Code 등
- .NET Framework, .NET Core
- Windows API 사용 가능
- GUI 애플리케이션 개발 용이

#### WSL Linux 개발 환경
- GCC, Clang 등 표준 컴파일러
- Python, Ruby, Node.js 등 서버 사이드 언어
- Linux 시스템 호출 사용 가능
- 서버 애플리케이션 개발 용이

### 6. 성능 비교

#### Windows 성능 특성
- GUI 작업에 최적화
- 대용량 메모리 관리 효율적
- 멀티태스킹에 강점
- 게임 및 그래픽 작업에 적합

#### WSL Linux 성능 특성
- 명령줄 작업에 최적화
- 작은 메모리 풋프린트
- 백그라운드 프로세스 효율적
- 서버 및 개발 작업에 적합

### 7. 보안 비교

#### Windows 보안
- Windows Defender 통합
- 사용자 계정 컨트롤 (UAC)
- 그룹 정책 관리
- Active Directory 통합

#### WSL Linux 보안
- Linux 표준 보안 모델
- 사용자/그룹 기반 권한
- SELinux/AppArmor 지원
- 독립적인 사용자 관리

### 8. 상호 운용성

#### Windows에서 WSL 접근
- `\\wsl$\` 네트워크 경로 사용
- Windows 탐색기에서 직접 접근
- Windows 앱에서 Linux 파일 실행 가능
- 공유 클립보드 사용 가능

#### WSL에서 Windows 접근
- `/mnt/c/` 마운트 포인트 사용
- Windows 실행 파일 직접 실행
- Windows 환경 변수 접근 가능
- 네트워크 공유 사용 가능 