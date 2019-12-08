(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{362:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),a("p",[t._v("위의 코드는 sembast nosql을 테스트해본 코드다. 위젯에 적용하다가 도메인 객체로 변환하기가 귀찮아서 그냥 sqflite라는 in-momery db와 jaguar_orm을 사용하기로 했다. 근데 이것도 사용법이....")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("h3",{attrs:{id:"백준-dp-계단-오르기-제곱수의-합"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#백준-dp-계단-오르기-제곱수의-합","aria-hidden":"true"}},[t._v("#")]),t._v(" 백준 DP: "),a("a",{attrs:{href:"https://github.com/CheolHoJung/algorithm-practice/commit/6b1aa4da2a76839c418fcc8dd97c0a78f42218bf",target:"_blank",rel:"noopener noreferrer"}},[t._v("계단 오르기, 제곱수의 합"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("계단 오르기는 이전에 풀었던 문제와 비슷해서 금방 풀 수 있었다. 제곱수의 합은 약간 수학적인 지식이 필요한 문제라 조금 오래걸렸다. 통과하긴 했는데, 첫 번째 풀이가 O(N * N / 2) 복잡도로 인해 속도가 다른 사람들에 비해 안좋게 나왔다. 그래서 다른 사람의 풀이를 참고해서 해석하고 "),a("router-link",{attrs:{to:"/posts/algorithm/boj- sum-of-squares.html"}},[t._v("풀이")]),t._v("를 별도로 포스팅했다.")],1),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("쿼리를 작성할 필요도 없고, 테이블을 만들 필요도 없으니 nosql이 편하긴 한 것 같다. 근데 key-value 저장소에서 꺼내온 value를 도메인으로 변환해야 하는가가 의문이다. 데이터셋이 크다면 객체로 변환하는 비용 자체가 클 텐데.... 보통 map으로 사용하는 건가??")]),t._v(" "),t._m(10),t._v(" "),t._m(11)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"오늘-한일"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#오늘-한일","aria-hidden":"true"}},[this._v("#")]),this._v(" 오늘 한일")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"플러터-1-4-7-14-앱-메인화면"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#플러터-1-4-7-14-앱-메인화면","aria-hidden":"true"}},[this._v("#")]),this._v(" 플러터 1/4/7/14 앱: 메인화면")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'create and find'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ugly'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" record "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("record")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ugly'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" records "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" finder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Finder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Filter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("matches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^ugl'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("records"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'create and update'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// put")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ugly'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" record "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("record")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// update")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ugly'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FieldValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delete"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a.b.c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ugly'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"it인프라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#it인프라","aria-hidden":"true"}},[this._v("#")]),this._v(" IT인프라")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("물리 서버\n"),s("ul",[s("li",[this._v("서버 설치 시 중요한 정보는 크기, 소비 전력, 중량")]),this._v(" "),s("li",[this._v("서버 내부 구성\n"),s("ul",[s("li",[this._v("전원, 메모리, CPU, PCI, NIC, HDD 등 PC와 비슷")])])]),this._v(" "),s("li",[this._v("CPU, 메모리, 지역성과 캐시 등")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"리팩토링"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#리팩토링","aria-hidden":"true"}},[this._v("#")]),this._v(" 리팩토링")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("추상화 악취 1가지, 캡슐화 악취 1가지 복습\n"),a("ul",[a("li",[t._v("중복된 추상화")]),t._v(" "),a("li",[t._v("부족한 캡슐화")])])]),t._v(" "),a("li",[t._v("누설된 캡슐화\n"),a("ul",[a("li",[t._v("구현 세부 사항을 공개 인터페이스로 외부에 공개 혹은 누설할 때")]),t._v(" "),a("li",[t._v("추상화의 구현와 인터페이스 측면을 각각에서 포착하고 분리해야 한다")]),t._v(" "),a("li",[t._v("내부에서 사용하는 컬렉션의 완전 복사본, 불변객체 타입의 컬렉션의 복사본이 아닌채로 공개하는 경우")]),t._v(" "),a("li",[t._v("알고리즘의 이름을 누설하는 경우")]),t._v(" "),a("li",[t._v("인터페이스를 사용하여 구현이 노출되지 않도록 리팩토링 해야한다")])])]),t._v(" "),a("li",[t._v("누락된 캡슐화\n"),a("ul",[a("li",[t._v("계층 내부나 추상화 내부에서 캡슐화하지 않을 때")]),t._v(" "),a("li",[t._v("캡슐화 원칙을 적용하는 요소 기술은 변형 감추기")]),t._v(" "),a("li",[t._v("OCP 위반, 구현에서 타입이나 계층 변형을 독자적으로 캡슐화하지 못함")]),t._v(" "),a("li",[t._v("관심사 변경에 대한 인식이 부족하여 관심사를 뒤섞은 경우에 주로 나타난다")]),t._v(" "),a("li",[t._v("알고리즘의 경우 전략 패턴, 알고리즘과 대상이 섞인 경우 가교 패턴과 유사한 구조를 사용하여 두 관심사에서 독자적으로 변형을 캡슐화하도록 리팩토링 해야한다")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"운영체제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#운영체제","aria-hidden":"true"}},[this._v("#")]),this._v(" 운영체제")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("day2, day5, day7 복습")]),t._v(" "),a("ul",[a("li",[t._v("day2: 운영체제의 개념과 발전 목적, 운영체제의 기능, 운영체제의 발전 과정과 유형,")]),t._v(" "),a("li",[t._v("day5: 스레드의 개념과 상태 변화, 스레드의 구현")]),t._v(" "),a("li",[t._v("day7: 상호배제와 동기화")])])]),t._v(" "),a("li",[a("p",[t._v("day8 학습")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("상호배제 방법들")])]),t._v(" "),a("li",[a("p",[t._v("데커의 알고리즘")]),t._v(" "),a("ul",[a("li",[t._v("두 프로세스가 동시에 임계 영역에 들어가려고 시도하면 순서에 따라 오직 하나만 들어가도록")]),t._v(" "),a("li",[t._v("진입 순서 변수와 자신의 임계 영역 진입 여부를 나타내는 플래그를 사용")])])]),t._v(" "),a("li",[a("p",[t._v("그 외")]),t._v(" "),a("ul",[a("li",[t._v("다익스트라\n"),a("ul",[a("li",[t._v("실행 시간이 가장 짧은 프로세스에 프로세서를 할당하는 세마포 방법")])])]),t._v(" "),a("li",[t._v("크누스\n"),a("ul",[a("li",[t._v("이전 알고리즘 관계를 분석, 일치하는 패턴을 찾아 패턴의 반복을 줄여서 프로세스에 프로세서를 하당하는 방법")])])]),t._v(" "),a("li",[t._v("램포트\n"),a("ul",[a("li",[t._v("번호표를 받고 기다리는 개념을 활용하여 우선순위가 가장 높은 프로세스에 먼저 프로세서를 할당하는 방법")])])]),t._v(" "),a("li",[t._v("핸슨\n"),a("ul",[a("li",[t._v("실행 시간이 긴 프로세스에 부리한 부분을 보완하는 것, 대기시간과 실행 시간을 이용하는 모니터 방법")])])])])]),t._v(" "),a("li",[a("p",[t._v("TestAndSet 테스 명령어")]),t._v(" "),a("ul",[a("li",[t._v("메모리 영역의 값에 대해 검사와 수정을 원자적으로 수행할 수 있는 하드웨어 명령어")]),t._v(" "),a("li",[t._v("명령어를 수행하면 lock을 걸고, lock의 이전 상태를 반환")]),t._v(" "),a("li",[t._v("wating 배열을 이용하여 여러 프로세스에 적용 가능")])])]),t._v(" "),a("li",[a("p",[t._v("세마포")]),t._v(" "),a("ul",[a("li",[t._v("앞서 등장한 방법들은 진입 조건이 true가 될 때까지 반복적으로 조사하는 바쁜 대기를 하게 되어 프로세스를 낭비")]),t._v(" "),a("li",[t._v("세마포 S의 정수값을 P(S) : (wait)-, V(S): (signal)+하는 연산을 통해 임계영역을 구현하거나 스케줄링 제약 조건을 시행할 수 있음")]),t._v(" "),a("li",[t._v("P(S): S 값을 검사하여 양수이면 1을 감소")]),t._v(" "),a("li",[t._v("V(S): S를 1만큼 증가")]),t._v(" "),a("li",[t._v("세마포가 0일 때, lock 또는 사용 중, 그렇지 않을 때 양의 값은 세마포를 사용할 수 있다는 의미")]),t._v(" "),a("li",[t._v("특정 유형의 공유 자원에 접근하려는 프로세스를 관리하는데 유용")]),t._v(" "),a("li",[t._v("1, 0의 값을 사용하는 이진 세마포, count 변수를 사용하는 계수 세마포")]),t._v(" "),a("li",[t._v("프로세스 중단(일시정지), 신호를 보내 프로세스 실행, 준비 큐를 이용하여 세마포를 구현할 수 있다")]),t._v(" "),a("li",[t._v("세마포의 주요 특징\n"),a("ul",[a("li",[t._v("원자(단위)적 수행, 두 프로세스가 동시에 동일한 세마포에서 wait, signal 연산을 할 수 없도록 해야 한다")]),t._v(" "),a("li",[t._v("wait, signal 연산을 생략하면 상호배제 문제가 발생")]),t._v(" "),a("li",[t._v("wait 연산 때문에 대기하는 프로세스들이 교착 상태에 빠질 수 있음")])])])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"오늘-느낀점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#오늘-느낀점","aria-hidden":"true"}},[this._v("#")]),this._v(" 오늘 느낀점")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"내일-할일"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#내일-할일","aria-hidden":"true"}},[this._v("#")]),this._v(" 내일 할일")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("플러터 1/4/7/14 앱\n"),a("ul",[a("li",[t._v("sqflite, jaguar_orm 적용")]),t._v(" "),a("li",[t._v("과목 CRUD")])])]),t._v(" "),a("li",[t._v("IT인프라, 리팩토링, 운영체제 학습")]),t._v(" "),a("li",[t._v("백준 DP 2문제 풀이")])])}],!1,null,null,null);e.options.__file="TIL-190416.md";s.default=e.exports}}]);