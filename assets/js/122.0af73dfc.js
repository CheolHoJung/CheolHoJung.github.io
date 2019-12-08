(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{339:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("자동차게임의 단계별 결과를 저장하기 전, 자동차 복사를 위해 clonable 구현, clone 메소드를 제공하던 구조에서 정적 팩토리 메소드로 변경했다. 이 과정에서 리뷰어님과 많은 대화를 나눴다.")]),t._v(" "),t._m(3),s("p",[t._v("자동차 name에 대한 getter를 toString으로 사용하여  RacingCar타입으로 NamedRacingCar를 생성하면 toString도 그대로 복사되는 문제가 있어서 cloneable 구현과 clone 메소드를 제공하는 구조로 변경했다.")]),t._v(" "),t._m(4),s("p",[t._v("그러나 toString이 같은 값을 가지지 않으면 로그를 출력하는 부분에서 각 라운드의 자동차들이 모두 다른 자동차처럼 보이는 것이 더 이상하다는 생각이 들었다.")]),t._v(" "),t._m(5),s("p",[t._v("정적 팩토리 메소드를 제공하는 구조로 변경하여 피드백을 기다리는 중이다.")]),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("18년 10월 쯤에 NextStep 책에서 봤던 로또게임이 교육과정 2주차 과제였다. "),s("a",{attrs:{href:"https://github.com/CheolHoJung/OOP-practice/tree/master/Lotto",target:"_blank",rel:"noopener noreferrer"}},[t._v("github repo"),s("OutboundLink")],1),t._v("에 코드를 올린 적이 있었는데 다시 개발해보니 처음 개발해보는 것 마냥 어려웠다. 최대한 TDD로 개발을 진행해야 했는데, 하나의 클래스를 개발하는 도중에 다른 클래스가 필요해지면 해당 클래스 개발로 넘어갔다가 다시 원래 클래스를 개발하면서 정신이 없었다.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("2주차까지 진행한 과제 2개의  요구사항이 비교적 간단하지만 TDD, 객체지향 생활체조 규칙을 따르려고 하다보니 많은 어려움을 겪었다. OOP의 기본 원칙을 준수하기가 이렇게 어려울 줄이야. 특히 getter를 사용하지 않고 요구사항을 만족하기가 너무 힘들었다.")]),t._v(" "),t._m(10),t._v(" "),t._m(11)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"오늘-한일"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#오늘-한일","aria-hidden":"true"}},[this._v("#")]),this._v(" 오늘 한일")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"자동차경주게임-피드백-반영"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#자동차경주게임-피드백-반영","aria-hidden":"true"}},[this._v("#")]),this._v(" 자동차경주게임 피드백 반영")])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("이펙티브 자바 4. clone을 재정의할 때는 신중하게 한다.")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    RacingCar car "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RacingCar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("car"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NamedRacingCar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("car"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPosition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" car"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// racing.model.RacingCar@c2e1f26")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// racing.model.RacingCar@c2e1f26")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[this._v("// racing.model.RacingCar@6193b845")]),this._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[this._v("// racing.model.RacingCar@2e817b38")]),this._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NamedRacingCar")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" RacingCar "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("copy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RacingCar car"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NamedRacingCar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("car"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" car"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPosition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// RacingGameBoard")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createCars")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List"),s("span",{pre:!0,attrs:{class:"token generics function"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cars"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RacingCar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("collect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Collectors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cars"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// StepResult")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" List"),s("span",{pre:!0,attrs:{class:"token generics function"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("RacingCar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("copyCars")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List"),s("span",{pre:!0,attrs:{class:"token generics function"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("RacingCar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" cars"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cars"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("car "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" NamedRacingCar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("copy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("car"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("collect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Collectors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 실행 결과")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// racing.model.RacingCar@6193b845 : ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// racing.model.RacingCar@2e817b38 : -")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// racing.model.RacingCar@c4437c4 : -")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// racing.model.RacingCar@6193b845 : ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// racing.model.RacingCar@2e817b38 : -")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// racing.model.RacingCar@c4437c4 : -")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"로또게임-1단계-구현"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#로또게임-1단계-구현","aria-hidden":"true"}},[this._v("#")]),this._v(" 로또게임 1단계 구현")])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("피드백 요청에 남긴 질문")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("strong",[t._v("보통 TDD로 개발을 진행하면서 테스트를 작성하다가 다른 클래스가 필요해질 때는 현재 작성중인 클래스 개발을 멈추고 다른 클래스를 진행하나요??")])]),t._v(" "),s("li",[t._v("구조를 잡기 어려웠던 부분\n"),s("ul",[s("li",[t._v("GameBoard에서 티켓목록 반환 -> ResultView에서 티켓목록 출력\n"),s("ul",[s("li",[s("strong",[t._v("티켓구매 메소드에서 생성된 티켓의 복사본을 반환하는게 더 나을까요?")])])])]),t._v(" "),s("li",[t._v("Gameboard의 티켓구매 메소드에서 티켓의 갯수 반환, 당첨체크 메소드에서 List<랭크> 반환 -> ResultView에서 티켓의 갯수와 List<랭크>를 이용해 통계 출력\n"),s("ul",[s("li",[s("strong",[t._v("별도의 통계 클래스를 만들어서 제공하는게 더 나을까요?")])])])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"오늘-느낀점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#오늘-느낀점","aria-hidden":"true"}},[this._v("#")]),this._v(" 오늘 느낀점")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"내일-할일"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#내일-할일","aria-hidden":"true"}},[this._v("#")]),this._v(" 내일 할일")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("우아한 테크코스 지원 결과 확인\n"),s("ul",[s("li",[t._v("이거 떨어지면 어떡하지....")]),t._v(" "),s("li",[t._v("다른 학원을 알아보거나 앞으로의 공부 계획을 세워봐야겠다")])])]),t._v(" "),s("li",[t._v("DP 관련 알고리즘 문제 한 개 풀기")]),t._v(" "),s("li",[t._v("자동차경주게임 3단계 merge가 되지 않은 경우 다시 피드백 반영하고 리뷰 요청하기")]),t._v(" "),s("li",[t._v("로또 1단계 구현 피드백 반영하고 리뷰 요청하기")])])}],!1,null,null,null);e.options.__file="TIL-190318.md";a.default=e.exports}}]);