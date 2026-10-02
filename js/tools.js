// 통합 사이트에 표시할 도구 목록.
// 새 도구를 추가하려면 이 배열에 항목을 하나 추가하면 됩니다.
//   id    : URL 해시(#id)로 쓰이는 고유 식별자
//   name  : 탭에 표시되는 이름
//   group : 탭 그룹 (같은 그룹끼리 묶여 표시됨)
//   url   : 임베드할 페이지 주소
//   desc  : 툴팁/설명
//   allow : (선택) iframe allow 속성에 추가할 권한 배열
export const BASE = 'https://samcho93.github.io';

export const TOOLS = [
  { id: 'circuit',  name: 'CircuitSim', group: '시뮬레이터', url: `${BASE}/samCircuitSim/`, desc: '회로 시뮬레이터' },
  { id: 'mega',     name: 'MegaSim',    group: '시뮬레이터', url: `${BASE}/samMegaSim/`,    desc: 'ATmega 마이크로컨트롤러 시뮬레이터' },

  { id: 'espflash', name: 'ESPFlash',   group: '펌웨어',     url: `${BASE}/ESPFlash/`,      desc: 'ESP32/ESP8266 웹 플래셔 (Web Serial)' },
  { id: 'stmflash', name: 'STMFlash',   group: '펌웨어',     url: `${BASE}/STMFlash/`,      desc: 'STM32 웹 플래셔 (Web Serial)' },

  { id: '3dviewer', name: '3D Viewer',  group: '뷰어',       url: `${BASE}/web3DViewer/`,   desc: '3D 모델 뷰어' },
  { id: 'gerber',   name: 'Gerber',     group: '뷰어',       url: `${BASE}/webGerber/`,     desc: 'PCB Gerber 뷰어' },
  { id: 'urdf',     name: 'URDF',       group: '뷰어',       url: `${BASE}/webURDF/`,       desc: 'ROS URDF 로봇 모델 뷰어' },

  { id: 'drawio',   name: 'DrawIO',     group: '편집기',     url: `${BASE}/webDrawIO/`,     desc: '다이어그램 편집기 (draw.io)' },
];

// 모든 iframe에 기본으로 부여하는 권한 (Web Serial/USB 플래셔, 전체화면, 클립보드 등)
export const DEFAULT_ALLOW = [
  'serial', 'usb', 'bluetooth', 'hid', 'fullscreen',
  'clipboard-read', 'clipboard-write', 'xr-spatial-tracking', 'gamepad',
];
