# THE LILLIPUT COLLECTION

수원 돌하우스 미니어처 공방 "더 릴리풋 컬렉션" 공식 웹사이트.
운영: 작가 김진순 | 배포: https://thelilliput.com

## 스택

- React 19 + Vite 8 + React Router 7
- Tailwind CSS v4
- Framer Motion (애니메이션)
- react-helmet-async (페이지별 메타 태그)
- Naver Maps JS SDK (오시는 길 지도)

## 시작하기

```bash
npm install
npm run dev       # 개발 서버 (http://localhost:5173)
npm run build     # 프로덕션 빌드 (dist/)
npm run preview   # 빌드 결과 로컬 미리보기
npm run lint
```

### 환경 변수

네이버 지도를 쓰려면 `.env` 파일에 클라이언트 ID가 필요하다 (`.env.example` 참고).

```
VITE_NAVER_MAP_CLIENT_ID=발급받은_클라이언트_ID
```

`.env`는 gitignore 대상이라 저장소에는 올라가지 않는다. **Cloudflare Pages 배포본에도 이 값이 별도로 필요**하므로 Cloudflare Pages 대시보드 → Settings → Variables and secrets에도 Production/Preview 양쪽에 동일하게 등록해야 한다. 네이버 지도 API는 도메인 화이트리스트 방식이라, 새 도메인(예: `*.pages.dev` 프리뷰 URL)에서 지도를 띄우려면 [네이버 클라우드 플랫폼 콘솔](https://console.ncloud.com)에서 해당 도메인을 허용 목록에 추가해야 한다.

## 배포

`main` 브랜치에 푸시하면 Cloudflare Pages가 자동으로 빌드/배포한다 (`origin main` 기준, 별도 배포 브랜치 없음). 커스텀 도메인은 `thelilliput.com`, Cloudflare 기본 도메인은 `lilliput.pages.dev`.

## 폴더 구조

```
src/
  pages/        # 라우트 단위 페이지 (Home, FirstFloor, SecondFloor, About, Visit, Guide)
  components/
    layout/     # Navbar, Footer
    gallery/    # 작품/굿즈 갤러리, 라이트박스, 2F 관람안내
    map/        # NaverMap 컴포넌트
    common/
  data/         # goods.json 등 정적 데이터
  i18n/         # 한/영/일 다국어 문자열 (strings.js) + LanguageContext
  hooks/        # useLockBodyScroll 등
  assets/       # 사진/아이콘/로고 (전부 WebP로 최적화해서 사용)
```

## 라우트

| 경로 | 설명 |
| --- | --- |
| `/` | 홈 (히어로 배너 + 1F/2F/About/Visit 소파 아이콘 내비게이션 + 예약 배너) |
| `/first-floor` | 1F 작품 상설 전시 + GOODS(에코백/문/윙체어/엽서) |
| `/second-floor` | 2F 프라이빗 전시 안내 + 전시맵 + 예약 |
| `/about` | 공방/작가 소개 |
| `/visit` | 오시는 길, 운영시간, 네이버 지도, 예약 링크 |
| `/guide` | 2F 현장 QR 전용 안내 페이지. 검색엔진 비노출(`noindex`), 사이트 내 링크도 없음 — URL을 직접 알아야만 접근 가능 |

## 알아두면 좋은 것들

- **이미지**: 새로 추가하는 사진은 항상 WebP로 변환해서 용량을 최적화한다 (Python PIL, quality 85 전후). 원본 그대로 커밋하면 수 MB짜리 사진이 그대로 배포되어 로딩이 느려진다.
- **굿즈 갤러리 정렬**: `src/assets/goods/<카테고리>/` 안에서 접미사 없는 파일명이 알파벳순으로 가장 먼저 오므로 대표(커버) 사진이 자동으로 맨 앞에 온다 (`파일명.webp` < `파일명_01.webp` < `파일명_02.webp` ...).
- **스크롤 락**: 라이트박스/모달이 열려 있을 때 배경이 스크롤되지 않도록 `useLockBodyScroll` 훅이 wheel/touch/keyboard 이벤트를 직접 막는다. 모달 내부에서 스크롤을 허용하려면 해당 컨테이너에 `data-scroll-lock-allow` 속성을 붙인다.
- **한글 경로 주의**: Windows에서 한글이 포함된 파일/폴더 경로는 유니코드 정규화(NFC/NFD) 방식이 도구마다 달라 종종 "파일을 찾을 수 없음" 오류가 난다. 문제가 생기면 상위 폴더를 나열해서 실제 반환된 경로 문자열을 그대로 사용하는 편이 안전하다.
