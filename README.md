# react-formik-exmaple

이름과 전화번호를 입력하고 입력 버튼을 클릭하면 해당 이름과 전화번호를 추가하는 앱이며<br>
formik library를 이용하여 form을, 앱 내 전역으로 state를 관리하기 위해 redux 아키텍쳐를 사용했습니다.


앱 내 설계 조건은 다음과 같습니다.

1. 해당 앱의 모든 컴포넌트에서는 state를 사용하지 않고 props만을 사용한다. 
2. dumb 컨테이너(컴포넌트)와 smart 컨테이너(컴포넌트)를 나누어서 작업한다. 
3. 이름과 전화번호를 입력하기 위해서 formik 이라는 라이브러리를 사용한다. 
4. 이름은 영문만 입력 가능하며 최대 8자를 넘지 않는다. 
5. 전화번호는 숫자만 입력 가능하며 11자여야 한다. 
6. 입력 버튼을 누르고 나면 이름과 전화번호 입력란은 빈 공란이 되어야 한다. 
7. es6의 문법을 사용한다. var 대신 const와 let을 사용하고 require 대신 import 키워드를 사용한다. 

이 앱은 [Create React App](https://github.com/facebook/create-react-app)를 이용하여 제작하였습니다.


## Available Scripts

프로젝트 폴더 내에서 사용할 수 있는 명령어입니다.
개발자 mode로 앱을 실행하는 명령어 이외에는 따로 적지 않았습니다.

### `yarn start`

개발자 mode에서 앱을 실행할 수 있습니다.<br>
브라우저 내에서 앱을 보려면 명령어 실행 후,<br>
[http://localhost:3000](http://localhost:3000)를 입력하세요.

