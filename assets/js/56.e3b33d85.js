(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{273:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"프로그래머스-라면공장"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#프로그래머스-라면공장","aria-hidden":"true"}},[t._v("#")]),t._v(" 프로그래머스 "),a("a",{attrs:{href:"https://programmers.co.kr/learn/courses/30/lessons/42629?language=java",target:"_blank",rel:"noopener noreferrer"}},[t._v("라면공장"),a("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),a("p",[t._v("문제에 대한 설명이 길어서 조금 복잡해 보인다. 이런 유형의 문제는 문제를 계속 읽어보고 예시에 설명된 과정을 그려보면 좋은 것 같다. 공급 가능일자가 되면 반드시 supplies[i]에 있는 밀가루만큼 공급받아야 한다는 의미가 아니라 이후에 언제든 해당 밀가루만큼 공급받을 수 있다는 의미로 이해해야 한다.")]),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("오늘(0일 차) 부터 밀가루를 사용하기 시작한다. 위의 예시를 살펴보자.")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("4일 차, 24일 차에 각각 한 번씩 공급을 받는다.")]),t._v(" "),a("p",[t._v("이제 효율성을 통과시킬 방법을 찾아보자. 공급일자를 찾는 부분은 제외시킬 수 없다. 그렇다면 O(k)를 줄여야 한다는 이야기가 된다. k가 100,000 이하이며, dates의 길이(n)가 20,000 이하이기 때문에 복잡도가 O(kn) 이면 안되고 O(nlogk) 정도가 되어야 하는 것 같다.")]),t._v(" "),t._m(6),a("p",[t._v("위의 코드는 (day < k) 조건으로 인해, 공급이 필요한 날짜 만큼만 진행된다.")]),t._v(" "),a("lazy-load",{attrs:{tag:"img",data:{src:"/images/posts/2019/3/ramen-factory.png",alt:"라면공장"}}}),t._v(" "),t._m(7)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("라면 공장에서는 하루에 밀가루를 1톤씩 사용합니다. 원래 밀가루를 공급받던 공장의 고장으로 앞으로 k일 이후에야 밀가루를 공급받을 수 있기 때문에 해외 공장에서 밀가루를 수입해야 합니다.")]),this._v(" "),s("p",[this._v("해외 공장에서는 향후 밀가루를 공급할 수 있는 날짜와 수량을 알려주었고, 라면 공장에서는 운송비를 줄이기 위해 최소한의 횟수로 밀가루를 공급받고 싶습니다.")]),this._v(" "),s("p",[this._v("현재 공장에 남아있는 밀가루 수량 stock, 밀가루 공급 일정(dates)과 해당 시점에 공급 가능한 밀가루 수량(supplies), 원래 공장으로부터 공급받을 수 있는 시점 k가 주어질 때, 밀가루가 떨어지지 않고 공장을 운영하기 위해서 최소한 몇 번 해외 공장으로부터 밀가루를 공급받아야 하는지를 return 하도록 solution 함수를 완성하세요.")]),this._v(" "),s("p",[this._v("dates[i]에는 i번째 공급 가능일이 들어있으며, supplies[i]에는 dates[i] 날짜에 공급 가능한 밀가루 수량이 들어 있습니다.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" stock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" dates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" supplies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" answer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Queue"),a("span",{pre:!0,attrs:{class:"token generics function"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" supplyQueue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PriorityQueue")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Comparator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverseOrder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" lastAddedDateIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lastAddedDateIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" dates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" dates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                supplyQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("supplies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                lastAddedDateIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stock "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            stock "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" supplyQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("poll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            answer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        stock"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" answer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("우선 효율성을 고려하지 않고 풀어봤다. 이 코드는 문제에 나온 과정을 그대로 코드로 옮긴 것이다. 오늘(0일) 부터 k - 1 일까지 남은 밀가루를 줄여나간다. dates에는 해외 공장으로부터 수입 가능한 날짜가 들어있으므로, 해당 날짜가 된다면 해당 날짜에 수입 가능한 수량을 큐에 넣는다. "),s("strong",[this._v("최소한의 횟수로 밀가루를 공급")]),this._v("받기 위해서는 "),s("strong",[this._v("가장 큰 수량부터 공급받아야 하기 때문에, 큐의 요소는 내림차순으로 정렬된다.")]),this._v(" "),s("u",[this._v("이 코드는 정확성 테스트는 통과하지만, 효율성 테스트는 모두 실패한다.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"입출력-예"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#입출력-예","aria-hidden":"true"}},[this._v("#")]),this._v(" 입출력 예")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("stock")]),t._v(" "),a("th",[t._v("dates")]),t._v(" "),a("th",[t._v("supplies")]),t._v(" "),a("th",[t._v("k")]),t._v(" "),a("th",[t._v("result")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("[4,10,15]")]),t._v(" "),a("td",[t._v("[20,5,10]")]),t._v(" "),a("td",[t._v("30")]),t._v(" "),a("td",[t._v("2")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("0일 차\n"),a("ul",[a("li",[t._v("작업 시작: stock = 3")])])]),t._v(" "),a("li",[t._v("1일 차\n"),a("ul",[a("li",[t._v("작업 시작: stock = 2")])])]),t._v(" "),a("li",[t._v("2일 차\n"),a("ul",[a("li",[t._v("작업 시작: stock = 1")])])]),t._v(" "),a("li",[t._v("3일 차\n"),a("ul",[a("li",[t._v("작업 시작: stock = 0")])])]),t._v(" "),a("li",[t._v("4일 차\n"),a("ul",[a("li",[t._v("공급 일정 검사\n"),a("ul",[a("li",[t._v("dates[0] = 4, supplies[0] = 20")]),t._v(" "),a("li",[t._v("공급 큐: [20]")])])]),t._v(" "),a("li",[t._v("작업 시작 전\n"),a("ul",[a("li",[a("strong",[t._v("남은 밀가루가 0이므로 공급")])]),t._v(" "),a("li",[t._v("공급 큐: [ ], stock = 20")])])]),t._v(" "),a("li",[t._v("작업 시작: stock = 19")])])]),t._v(" "),a("li",[t._v("10일 차\n"),a("ul",[a("li",[t._v("공급 일정 검사\n"),a("ul",[a("li",[t._v("dates[1]  = 10, supplies[1] = 5")]),t._v(" "),a("li",[t._v("공급 큐: [5]")])])]),t._v(" "),a("li",[t._v("작업 시작: stock = 13")])])]),t._v(" "),a("li",[t._v("15일 차\n"),a("ul",[a("li",[t._v("공급 일정 검사\n"),a("ul",[a("li",[t._v("dates[2]  = 15, supplies[2] = 10")]),t._v(" "),a("li",[t._v("공급 큐: [10, 5]")])])]),t._v(" "),a("li",[t._v("작업 시작: stock = 8")])])]),t._v(" "),a("li",[t._v("24일 차\n"),a("ul",[a("li",[t._v("작업 시작 전\n"),a("ul",[a("li",[a("strong",[t._v("남은 밀가루가 0이므로 공급")])]),t._v(" "),a("li",[t._v("공급 큐: [5], stock = 10")])])]),t._v(" "),a("li",[t._v("작업 시작: stock = 9")])])]),t._v(" "),a("li",[t._v("29일 차 (k - 1)\n"),a("ul",[a("li",[t._v("작업 시작: stock = 4")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" stock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" dates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" supplies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" answer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Queue"),a("span",{pre:!0,attrs:{class:"token generics function"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" supplyQueue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PriorityQueue")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Comparator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverseOrder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" lastAddedDateIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" dateCanRunFactory "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dateCanRunFactory "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lastAddedDateIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" dates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" dates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lastAddedDateIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" dateCanRunFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            supplyQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("supplies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lastAddedDateIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            lastAddedDateIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        dateCanRunFactory "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" supplyQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("poll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        answer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" answer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("29일차까지 필요한 밀가루 수는 29개이다. 앞서 살펴본 것과 같이 3일 차에 밀가루를 모두 사용하여, 4일 차 오전에는 밀가루를 공급받아야 한다. 4일 차 오전에 20개를 공급받고 작업을 시작하여 19개의 밀가루가 남는다면, 23일 차까지 문제없이 공장을 돌릴 수 있게 된다. 다시 23일 차가 되면 밀가루를 모두 사용하게 되고, 24일 차 오전에 10개를 공급받는다. 마찬가지로 24일 작업을 시작하고 9개의 밀가루가 남는다면, "),s("strong",[this._v("33일 차 까지 문제없이 공장을 돌릴 수 있게 되므로 day(34)가 k(30)보다 커지면서 종료")]),this._v("된다.")])}],!1,null,null,null);e.options.__file="Programmers-RamenFactory.md";s.default=e.exports}}]);