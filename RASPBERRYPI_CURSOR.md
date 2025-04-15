# 라즈베리파이 5 원격 접속 설정 가이드

## 0. 사전 요구사항
- Cursor IDE가 설치된 컴퓨터와 라즈베리파이가 **동일한 네트워크**에 연결되어 있어야 합니다.
- 라즈베리파이의 IP 주소를 알아야 합니다.
- 라즈베리파이에 SSH가 활성화되어 있어야 합니다.

## 1. SSH 원격 접속 설정

### 1. 라즈베리파이에서 SSH 활성화
```bash
# SSH 서비스 활성화
sudo systemctl enable ssh
sudo systemctl start ssh

# SSH 상태 확인
sudo systemctl status ssh
```

### 2. 고정 IP 설정
```bash
sudo nano /etc/dhcpcd.conf

# 다음 내용 추가
interface eth0
static ip_address=192.168.1.100/24
static routers=192.168.1.1
static domain_name_servers=8.8.8.8
```

### 3. 방화벽 설정
```bash
# UFW 설치
sudo apt install ufw

# SSH 포트 허용
sudo ufw allow 22/tcp

# 방화벽 활성화
sudo ufw enable
```

## 2. Cursor IDE 설정

### 1. Cursor 설치
1. [Cursor 공식 웹사이트](https://cursor.sh)에서 다운로드
2. Windows/Mac/Linux에 맞는 버전 설치

### 2. SSH 연결 설정
1. Cursor 실행
2. `Ctrl+Shift+P` 입력
3. "Remote-SSH: Connect to Host" 선택
4. "Add New SSH Host" 선택
5. SSH 연결 정보 입력:
   ```
   ssh pi@192.168.1.100
   ```
6. SSH 설정 파일 선택 (기본: `~/.ssh/config`)

### 3. SSH 키 설정 (선택사항)
```bash
# Windows PowerShell에서:
ssh-keygen -t rsa -b 4096

# 생성된 공개키를 라즈베리파이에 복사
ssh-copy-id pi@192.168.1.100
```

## 3. PowerShell을 통한 CLI 접속

### 1. 기본 SSH 접속
```powershell
# 기본 접속
ssh pi@192.168.1.100

# 특정 포트 사용 시
ssh -p 22 pi@192.168.1.100
```

### 2. SSH 키 사용
```powershell
# SSH 키로 접속
ssh -i C:\Users\username\.ssh\id_rsa pi@192.168.1.100
```

### 3. X11 포워딩 (GUI 애플리케이션 실행)
```powershell
# X11 포워딩 활성화
ssh -X pi@192.168.1.100
```

## 4. VNC 원격 접속 설정

### 1. 라즈베리파이에서 VNC 서버 설치
```bash
# VNC 서버 설치
sudo apt install realvnc-vnc-server

# VNC 서버 활성화
sudo systemctl enable vncserver-x11-serviced
sudo systemctl start vncserver-x11-serviced
```

### 2. VNC 서버 설정
1. 라즈베리파이 메뉴 > Preferences > Raspberry Pi Configuration
2. Interfaces 탭에서 VNC 활성화
3. Resolution 설정 (권장: 1920x1080)

### 3. VNC 클라이언트 설치 (Windows)
1. [RealVNC Viewer](https://www.realvnc.com/en/connect/download/viewer/) 다운로드
2. 설치 후 실행
3. 라즈베리파이 IP 주소 입력 (예: 192.168.1.100)
4. 라즈베리파이 사용자 계정으로 로그인

## 5. 문제 해결

### 1. SSH 연결 문제
- **연결 거부**
  ```bash
  # SSH 서비스 상태 확인
  sudo systemctl status ssh
  
  # 방화벽 설정 확인
  sudo ufw status
  ```

- **인증 실패**
  ```bash
  # SSH 키 권한 확인
  chmod 600 ~/.ssh/id_rsa
  chmod 644 ~/.ssh/id_rsa.pub
  ```

### 2. VNC 연결 문제
- **화면이 검은색으로 표시**
  ```bash
  # VNC 서버 재시작
  sudo systemctl restart vncserver-x11-serviced
  ```

- **연결 지연**
  ```bash
  # 해상도 조정
  sudo raspi-config
  # Display Options > Resolution
  ```

### 3. 네트워크 문제
- **IP 주소 확인**
  ```bash
  # 현재 IP 주소 확인
  ip addr show
  ```

- **네트워크 연결 테스트**
  ```bash
  # 핑 테스트
  ping 8.8.8.8
  ```

## 6. 보안 설정

### 1. SSH 보안 강화
```bash
# SSH 설정 파일 수정
sudo nano /etc/ssh/sshd_config

# 다음 설정 변경
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
```

### 2. 방화벽 규칙 추가
```bash
# 특정 IP만 허용
sudo ufw allow from 192.168.1.0/24 to any port 22
```

### 3. 자동 업데이트 설정
```bash
# 자동 업데이트 활성화
sudo apt install unattended-upgrades
sudo dpkg-reconfigure unattended-upgrades
```

## 7. 참고 자료
- [Raspberry Pi 공식 문서](https://www.raspberrypi.com/documentation/)
- [Cursor 원격 개발 가이드](https://cursor.sh/docs)
- [RealVNC 서버 설정 가이드](https://help.realvnc.com/hc/en-us)
- [OpenSSH 공식 문서](https://www.openssh.com/manual.html) 