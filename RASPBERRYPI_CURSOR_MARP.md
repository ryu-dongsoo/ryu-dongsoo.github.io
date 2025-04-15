---
marp: true
theme: default
paginate: true
header: '라즈베리파이 5 원격 접속 설정 가이드'
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
# 라즈베리파이 5 원격 접속 설정 가이드

---

## 사전 요구사항

- Cursor IDE가 설치된 컴퓨터와 라즈베리파이가 **동일한 네트워크**에 연결
- 라즈베리파이의 IP 주소 확인
- 라즈베리파이에 SSH 활성화

---

## 1. SSH 원격 접속 설정

### SSH 서비스 활성화
```bash
sudo systemctl enable ssh
sudo systemctl start ssh
sudo systemctl status ssh
```

---

## 2. 고정 IP 설정

```bash
sudo nano /etc/dhcpcd.conf

# 다음 내용 추가
interface eth0
static ip_address=192.168.1.100/24
static routers=192.168.1.1
static domain_name_servers=8.8.8.8
```

---

## 3. 방화벽 설정

```bash
# UFW 설치
sudo apt install ufw

# SSH 포트 허용
sudo ufw allow 22/tcp

# 방화벽 활성화
sudo ufw enable
```

---

## 4. Cursor IDE 설정

1. [Cursor 공식 웹사이트](https://cursor.sh)에서 다운로드
2. Windows/Mac/Linux에 맞는 버전 설치
3. SSH 연결 설정:
   ```
   ssh pi@192.168.1.100
   ```

---

## 5. PowerShell CLI 접속

### 기본 SSH 접속
```powershell
ssh pi@192.168.1.100
```

### SSH 키 사용
```powershell
ssh -i C:\Users\username\.ssh\id_rsa pi@192.168.1.100
```

---

## 6. VNC 원격 접속

### VNC 서버 설치
```bash
sudo apt install realvnc-vnc-server
sudo systemctl enable vncserver-x11-serviced
sudo systemctl start vncserver-x11-serviced
```

---

## 7. 문제 해결

### SSH 연결 문제
- 연결 거부: `sudo systemctl status ssh`
- 인증 실패: `chmod 600 ~/.ssh/id_rsa`

### VNC 연결 문제
- 화면이 검은색: `sudo systemctl restart vncserver-x11-serviced`
- 연결 지연: 해상도 조정

---

## 8. 보안 설정

### SSH 보안 강화
```bash
# SSH 설정 파일 수정
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
```

---

## 9. 참고 자료

- [Raspberry Pi 공식 문서](https://www.raspberrypi.com/documentation/)
- [Cursor 원격 개발 가이드](https://cursor.sh/docs)
- [RealVNC 서버 설정 가이드](https://help.realvnc.com/hc/en-us) 