# NestJS introduction

## next.config.js

Next.js의 사용자 지정 고급 구성의 경우 프로젝트 디렉터리의 루트( 옆 )에 next.config.js또는 파일을 만들 수 있습니다.

next.config.js JSON 파일이 아닌 일반 Node.js 모듈입니다. Next.js 서버 및 빌드 단계에서 사용되며 브라우저 빌드에는 포함되지 않습니다.

next.config.js 사용 예시

```javascript
module.exports = {
/* config options here */
};
```
### next.config.js = Rewrites

다시 쓰기를 사용하면 들어오는 요청 경로를 다른 대상 경로에 매핑할 수 있습니다.

다시 쓰기는 URL 프록시 역할을 하고 대상 경로를 마스킹하여 사용자가 사이트에서 자신의 위치를 ​​변경하지 않은 것처럼 보이게 합니다. 반대로 리디렉션 은 새 페이지로 다시 라우팅되고 URL 변경 사항을 표시합니다.
```javascript
module.exports = {
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/',
      },
    ]
  },
}
```
rewrites를 사용하여 API_KEY를 숨기는데 사용할 수 있습니다.

```javascript
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};
```
/api/movies url로 접속을 destination경로로 마스킹하여 이동할 수 있습니다.

### next.config.js = redirects
리디렉션을 사용하면 들어오는 요청 경로를 다른 대상 경로로 리디렉션할 수 있습니다.

리디렉션을 사용하려면 다음 redirects키를 사용할 수 있습니다.
```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
```
redirectssource, destination및 permanent속성 이 있는 개체를 포함하는 배열이 반환될 것으로 예상하는 비동기 함수입니다 .

- source: 들어오는 요청 경로 패턴입니다.
- destination: 라우팅하려는 경로입니다.
- permanent: true또는 false- true클라이언트/검색 엔진에 리디렉션을 영원히 캐시하도록 지시하는 308 상태 코드를 사용하는 경우 false일시적이고 캐시되지 않는 307 상태 코드를 사용하는 경우.


## getServerSideProps
페이지에서 (Server-Side Rendering) 라는 함수를 내보내면 getServerSidePropsNext.js는 에서 반환된 데이터를 사용하여 각 요청에서 이 페이지를 미리 렌더링합니다

```javascript
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
```
getServerSideProps서버 측에서만 실행되며 브라우저에서는 실행되지 않습니다. 페이지에서 를 사용하는 경우 getServerSideProps:

- 이 페이지를 직접 요청하면 getServerSideProps요청 시 실행되며 이 페이지는 반환된 소품으로 미리 렌더링됩니다.
- next/link또는 를 통해 클라이언트 측 페이지 전환에서 이 페이지를 요청하면 next/routerNext.js는 서버에 API 요청을 보냅니다.
```
getServerSideProps페이지를 렌더링하는 데 사용할 JSON을 반환합니다. 
이 모든 작업은 Next.js에 의해 자동으로 처리되므로 정의한 한 추가 작업을 수행할 필요가 없습니다 getServerSideProps.
```

