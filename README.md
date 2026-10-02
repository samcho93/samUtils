# samUtils

여러 웹 도구를 하나의 페이지에서 탭으로 전환하며 사용하는 통합 도구 사이트입니다.

**사이트:** https://samcho93.github.io/samUtils/

| 그룹 | 도구 | 원본 |
|---|---|---|
| 시뮬레이터 | CircuitSim | https://samcho93.github.io/samCircuitSim/ |
| 시뮬레이터 | MegaSim | https://samcho93.github.io/samMegaSim/ |
| 펌웨어 | ESPFlash | https://samcho93.github.io/ESPFlash/ |
| 펌웨어 | STMFlash | https://samcho93.github.io/STMFlash/ |
| 뷰어 | 3D Viewer | https://samcho93.github.io/web3DViewer/ |
| 뷰어 | Gerber | https://samcho93.github.io/webGerber/ |
| 뷰어 | URDF | https://samcho93.github.io/webURDF/ |
| 편집기 | DrawIO | https://samcho93.github.io/webDrawIO/ |

## 동작 방식

- 각 도구는 iframe으로 임베드됩니다. 탭을 처음 열 때 로드되고 이후에는 유지되므로 탭을 전환해도 작업 상태가 보존됩니다.
- URL 해시로 특정 도구에 바로 접근할 수 있습니다. 예: `#espflash`, `#gerber`
- 헤더 우측 버튼: ⟳ 현재 도구 새로고침, ↗ 새 창에서 열기
- 모든 도구가 `samcho93.github.io` 동일 출처이고 iframe에 `allow="serial; usb; ..."`를 부여하므로 Web Serial(ESPFlash/STMFlash) 등이 iframe 안에서도 동작합니다.

## 도구 추가

[`js/tools.js`](js/tools.js)의 `TOOLS` 배열에 항목을 하나 추가하면 탭이 자동으로 생성됩니다.

```js
{ id: 'newtool', name: 'NewTool', group: '기타', url: `${BASE}/newTool/`, desc: '설명' },
```

## 로컬 실행

ES 모듈을 사용하므로 정적 서버로 실행합니다.

```
python -m http.server 8000
```
