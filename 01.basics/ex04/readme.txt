ex04: 애플리케이션 번들링(bundling)

1. webpack은 작게 분리된 많은 애플리케이션 모듈(js, css, image)들의 의존성을 분석해서 하나의 js파일로 묶은 도구
2. 하나의 js 파일을 번들(bundle)이라하고 묶는 작업을 번들링(bundling)이라고 한다.
3. 번들링은 단순히 모듈들을 하나의 파일로 묶는 작업만을 의미 하지 않는다. -> 빌드작업도 한다.
4. 빌드 작업
    1) linting(ESLint, 문법체크) 작업           기본작업
    2) document 작업(JDoc) 작업
    3) test(Mocha, Jest) 작업
    4) 난독화/압축(Uglyfy) 작업                 기본작업
    5) 번들링                                   기본작업
5. 자바스크립트 뿐만 아니라 다양한 에셋(image, css, font)들도 모듈로 취급 한다.
6.  $ npm i -D webpack webpack-cli
    $ npm .\node_modules\.bin\webpack --version
    $ npx webpack --version
    npx webpack ./src/index.js