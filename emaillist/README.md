## React Pracractices - Integration(개발 환경 통합)

## Configuration
1. Application(Project) Structure
   <pre>
   /app
    |--- /backend
    |       |--- /logging
    |       |       |--- index.js
    |       |--- /routes
    |       |       |--- [index.js]
    |       |       |--- authorized.js
    |       |       |--- error.js
    |       |--- /controllers
    |       |--- /models
    |       |--- /views
    |       |       |--- /error
    |       |               |--- [404.ejs]
    |       |               |--- [500.ejs]
    |       |--- /public
    |       |--- [index.js]
    |       |--- [app.config.env]    
    |--- /frontend
    |       |--- /config
    |       |       |--- babel.config.json
    |       |       |--- [webpack.config.json]
    |       |--- /public
    |       |       |--- favicon.ico
    |       |       |--- index.html
    |       |--- /src
    |       |--- /assets
    |--- /node_modules
    |--- package.json
    |--- package-lock.json
   </pre>
2. nodemon
3. webpack dev server
4. package.json
5. concurrently
6. node application

### emaillist
    - 개발 통합 설정(with Node Backend)
    - backend: Fully APIs(Node Exporess기반)
    - Frontend: React(SPA)
    - AJAX: fetch 기반

### cors란?
1. origin(출처)
   url에서 protocol + host + port를 합친 것
   ```
   > location-origin
   < 'http://localhost:9999'
   ```

2. 같은 origin VS 다른 origin
3. Same Origin Policy
   브라우저가 동일 출처 정책(SOP)를 지켜서 다른 출처의 리소스 접근을 금지
   - 외부 리소스를 못 가져오는 단점
   - XSS 등과 같은 보안 취약점을 사전에 방지할 수 있다.

4. CORS(CrOSS OR)
```
Access to fetch at 'httpL//localhost:8888/api"
```

1. simple request
<pre>
   JS             browser              server
   --------------->
      fetch()

</pre>
2. preflight request
<pre>
   JS             browser              server
   --------------->      -------------->
      fetch()                 OPTIONS /api
                        <--------------
                        Access-Control-Allow-origin:*
                        
                        --------------->
                        GET/api
                        <---------------
                        200 ok
                        Access-Control-Allow-origin:*
                        ===================
                        "{.............}'

</pre>