# 라즈베리파이 5 설정 가이드

## 1. 필수 하드웨어 구성품

### 필수 구성품 (우선순위 순)
1. **라즈베리파이 5 본체**
   - 모델: Raspberry Pi 5 Model B
   - 가격: 약 80,000원
   - 중요도: ⭐⭐⭐⭐⭐
   - 참고: 4GB 또는 8GB RAM 버전 선택 가능

2. **전원 공급 장치**
   - 모델: Raspberry Pi 5 공식 전원 어댑터
   - 가격: 약 25,000원
   - 중요도: ⭐⭐⭐⭐⭐
   - 참고: 27W USB-C 전원 공급 장치

3. **마이크로 SD 카드**
   - 모델: SanDisk Extreme Pro 32GB
   - 가격: 약 15,000원
   - 중요도: ⭐⭐⭐⭐⭐
   - 참고: 최소 16GB, Class 10 이상 권장

4. **방열판 및 쿨링 시스템**
   - 모델: Raspberry Pi 5 공식 방열판 키트
   - 가격: 약 10,000원
   - 중요도: ⭐⭐⭐⭐⭐
   - 참고: 성능 최적화에 필수

5. **케이스**
   - 모델: Raspberry Pi 5 공식 케이스
   - 가격: 약 15,000원
   - 중요도: ⭐⭐⭐⭐
   - 참고: 방열판과 호환되는 모델 선택

### 주변 장치 (우선순위 순)
1. **HDMI 케이블**
   - 모델: HDMI 2.1 케이블
   - 가격: 약 10,000원
   - 중요도: ⭐⭐⭐⭐⭐
   - 참고: 4K 지원 모델 권장

2. **키보드 & 마우스**
   - 모델: 로지텍 MK270 무선 콤보
   - 가격: 약 35,000원
   - 중요도: ⭐⭐⭐⭐⭐
   - 참고: USB 수신기 포함 모델

3. **모니터**
   - 모델: 24인치 FHD 모니터
   - 가격: 약 150,000원
   - 중요도: ⭐⭐⭐⭐⭐
   - 참고: HDMI 입력 지원 모델

4. **카메라 모듈**
   - 모델: Raspberry Pi Camera Module 3
   - 가격: 약 45,000원
   - 중요도: ⭐⭐⭐⭐
   - 참고: 300mm 케이블 포함

5. **GPIO 확장 키트**
   - 모델: SunFounder Raspberry Pi GPIO 확장 키트
   - 가격: 약 30,000원
   - 중요도: ⭐⭐⭐⭐
   - 참고: 40핀 GPIO 확장 보드 포함

## 2. 초기 설정 방법

### 1. 운영체제 설치
1. **Raspberry Pi Imager 다운로드**
   - [공식 웹사이트](https://www.raspberrypi.com/software/)에서 다운로드
   - Windows/Mac/Linux 지원

2. **SD 카드에 OS 설치**
   - SD 카드 삽입
   - Raspberry Pi Imager 실행
   - OS 선택 (Raspberry Pi OS 64-bit 권장)
   - SD 카드 선택
   - Write 클릭

3. **초기 설정**
   - 호스트명 설정
   - 사용자 계정 생성
   - Wi-Fi 설정
   - 지역 및 시간대 설정

### 2. 시스템 업데이트
```bash
sudo apt update
sudo apt upgrade -y
sudo apt dist-upgrade -y
sudo reboot
```

### 3. 필수 패키지 설치
```bash
sudo apt install -y git python3-pip python3-dev
sudo apt install -y libatlas-base-dev libopenjp2-7
sudo apt install -y libtiff5 libjpeg62-turbo
```

## 3. 카메라 설정

### 1. 카메라 활성화
```bash
# 카메라 인터페이스 활성화
sudo raspi-config
# Interface Options > Camera > Yes
```

### 2. 카메라 라이브러리 설치
```bash
# picamera2 설치
sudo apt install -y python3-picamera2

# 추가 유틸리티 설치
sudo apt install -y python3-picamera2-apps
```

### 3. 카메라 테스트 (Bookworm 이후)
```bash
# 카메라 연결 테스트
rpicamera-hello

# 정지 이미지 캡처
rpicamera-still -o test.jpg

# 비디오 녹화
rpicamera-vid -t 10000 -o test.h264

# 카메라 미리보기
rpicamera-preview
```

### 4. 고급 카메라 설정
```bash
# 고해상도 이미지 캡처
rpicamera-still -o test.jpg --width 4056 --height 3040

# HDR 이미지 캡처
rpicamera-still -o test.jpg --hdr

# 저조도 설정
rpicamera-still -o test.jpg --gain 4 --exposure long

# 연속 촬영
rpicamera-still -o test%03d.jpg --timelapse 1000 --framerate 1
```

### 5. Python으로 카메라 제어
```python
from picamera2 import Picamera2
import time

# 카메라 초기화
picam2 = Picamera2()

# 카메라 설정
config = picam2.create_still_configuration()
picam2.configure(config)

# 이미지 캡처
picam2.start()
time.sleep(2)  # 카메라 센서가 빛에 적응할 시간
picam2.capture_file("test.jpg")
picam2.stop()
```

## 4. GPIO 설정

### 1. GPIO 라이브러리 설치
```bash
sudo apt install -y python3-gpiozero
sudo apt install -y python3-rpi.gpio
```

### 2. GPIO 테스트
```python
from gpiozero import LED
from time import sleep

led = LED(17)

while True:
    led.on()
    sleep(1)
    led.off()
    sleep(1)
```

## 5. 성능 최적화

### 1. 오버클럭 설정
```bash
sudo nano /boot/config.txt
# 다음 라인 추가
over_voltage=2
arm_freq=2400
```

### 2. 스왑 메모리 설정
```bash
sudo nano /etc/dphys-swapfile
# CONF_SWAPSIZE=2048
sudo systemctl restart dphys-swapfile
```

### 3. 부팅 시간 최적화
```bash
sudo systemctl disable bluetooth
sudo systemctl disable avahi-daemon
```

## 6. 네트워크 설정

### 1. 고정 IP 설정
```bash
sudo nano /etc/dhcpcd.conf
# 다음 내용 추가
interface eth0
static ip_address=192.168.1.100/24
static routers=192.168.1.1
static domain_name_servers=8.8.8.8
```

### 2. SSH 활성화
```bash
sudo systemctl enable ssh
sudo systemctl start ssh
```

## 7. 문제 해결

### 1. 일반적인 문제
- **부팅 실패**
  - SD 카드 포맷 확인
  - 전원 공급 확인
  - HDMI 케이블 연결 확인

- **과열 문제**
  - 쿨링 시스템 확인
  - 방열판 설치 확인
  - 케이스 통풍 확인

### 2. 카메라 문제
- **카메라 인식 실패**
  - 카메라 케이블 연결 확인
  - 카메라 활성화 확인
  - 카메라 모듈 호환성 확인

### 3. GPIO 문제
- **GPIO 동작 불량**
  - 핀 연결 확인
  - 전압 레벨 확인
  - 접지 확인

## 8. 참고 자료
- [라즈베리파이 공식 문서](https://www.raspberrypi.com/documentation/)
- [Raspberry Pi OS 다운로드](https://www.raspberrypi.com/software/operating-systems/)
- [GPIO Zero 문서](https://gpiozero.readthedocs.io/)
- [Picamera2 문서](https://datasheets.raspberrypi.com/camera/picamera2-manual.pdf) 