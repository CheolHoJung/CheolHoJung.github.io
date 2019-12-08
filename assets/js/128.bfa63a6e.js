(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{345:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("h3",{attrs:{id:"로또-3단계-피드백-반영"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#로또-3단계-피드백-반영","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://github.com/next-step/java-lotto/pull/142#pullrequestreview-218864406",target:"_blank",rel:"noopener noreferrer"}},[t._v("로또 3단계 피드백 반영"),s("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("통계를 구하는 부분에서 toMap 메소드를 사용해봤다. map을 생성하고 조건에 따라 값을 설정하는 코드는 대게 길게 늘어지기 마련인데, toMap을 사용하니까 많이 간소화됐다. EnumMap이랑 EnumSet이 무엇인지도 알게 되었다.")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("나는 보통 final은 public으로 선언하고 외부에서 직접 접근했다. 피드백에서는 값을 래핑하는 객체의 멤버변수가 final로 선언되었더라도, 캡슐화를 지키는 것이 좋다고 한다. 어쨋든 객체지향을 추구하는 입장이니 캡슐화를 지키지 않을 이유는 없을 듯.")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("콜렉션을 감싸는 일급 콜렉션은 콜렉션을 제외하고는 멤버변수가 없어야 한다. 이 원칙을 따르다 보면 자연스레 클래스가 분리된다.")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("4단계는 웹 UI 적용인데, 자동차 경주에서 했던 것과는 달리 기존 코드를 거의 수정하지 않고 구현할 수 있었다.")]),t._v(" "),s("h3",{attrs:{id:"백준-dp-2n-타일링-2n-타일링2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#백준-dp-2n-타일링-2n-타일링2","aria-hidden":"true"}},[t._v("#")]),t._v(" 백준 DP: "),s("a",{attrs:{href:"https://github.com/CheolHoJung/algorithm-practice/commit/7498c01938d1619af85bd2497705ebc134d4c83e",target:"_blank",rel:"noopener noreferrer"}},[t._v("2"),s("em",[t._v("n 타일링, 2")]),t._v("n 타일링2"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("백준 dp관련 문제를 2개 풀었다. 2n 타일링은 그림을 그리면서 점화식을 구하다보니 피보나치가 보였고, 2n 타일링2도 점화식을 찾기가 힘들어서 그림을 그려보면서 찾았다. 아직 dp는 그림을 그려보지 않고는 도저히 점화식을 못찾겠다.")]),t._v(" "),s("h3",{attrs:{id:"함수형-프로그래밍과-javascript-es6-지연평가-테스트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#함수형-프로그래밍과-javascript-es6-지연평가-테스트","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.inflearn.com/course/functional-es6/",target:"_blank",rel:"noopener noreferrer"}},[t._v("함수형 프로그래밍과 Javascript ES6+"),s("OutboundLink")],1),t._v(": 지연평가 테스트")]),t._v(" "),s("p",[t._v("22일날 공부했던 Lazy Evaluation와 Eager Evaluation의 성능 차이에 대한 목차를 수강했다.")]),t._v(" "),t._m(5),t._m(6),t._v(" "),s("p",[t._v("로또 3단계 피드백을 반영하면서 객체지향 생활체조에 등장하는 원칙들을 지키다보면 SOLID 원칙에 일치하는 코드를 작성하게 되는 것인가가 궁금해졌다. 뭐 당연히 아니겠지만, 자료가 있을라나.. 한번 찾아봐야지.")]),t._v(" "),s("p",[t._v("dp 문제를 풀면서 그림을 그릴 때 SmoothDraw라는 프로그램을 사용했는데, 쓸만한 것 같다.")]),t._v(" "),t._m(7),t._v(" "),t._m(8)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"오늘-한일"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#오늘-한일","aria-hidden":"true"}},[this._v("#")]),this._v(" 오늘 한일")])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("Collectors.toMap(keyMapper, valueMapper, mergeFunction, mapFactory)")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("캡슐화")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("일급 콜렉션")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"로또-4단계-구현-선진행"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#로또-4단계-구현-선진행","aria-hidden":"true"}},[this._v("#")]),this._v(" 로또 4단계 구현 선진행")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 지연평가 효율성은 얼마나 있을까? -> 사실 그렇게 크게 차이나지 않음")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeEnd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 약 480ms ~ 520ms")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'range'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 약 350ms ~ 370ms")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'L.range'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"오늘-느낀점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#오늘-느낀점","aria-hidden":"true"}},[this._v("#")]),this._v(" 오늘 느낀점")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"내일-할일"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#내일-할일","aria-hidden":"true"}},[this._v("#")]),this._v(" 내일 할일")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("백준 DP 관련 문제풀이")]),this._v(" "),a("li",[this._v("로또 3단계 merge (아마도?) & 로또 4단계 피드백 요청")]),this._v(" "),a("li",[this._v("인프런: 함수형 프로그래밍과 JavaScript ES6+")]),this._v(" "),a("li",[this._v("1/4/7/14 앱 구상")])])}],!1,null,null,null);e.options.__file="TIL-190326.md";a.default=e.exports}}]);