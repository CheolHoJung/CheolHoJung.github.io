(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{332:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("위 네가지 위치에 존재하는 리소스들은 “/**”에 매핑이 돼서 제공된다. 예를 들어 “/hello.html”라는 요청이 들어오면, /static/hello.html 라는 파일을 찾아 응답한다.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),a("p",[t._v("이번 실습은 간단하다. /resources/static 폴더에 hello.html 파일을 생성해보자. 앱을 실행하면 localhost:8080/hello.html에 요청을 보낼 경우, /resources/static/hello.html 리소스가 응답된다.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("lazy-load",{attrs:{tag:"img",data:{src:"/images/posts/2018/12/first-request.PNG",alt:"Piece of a Google search page result with the link and a highlight with red borders indicating the URL"}}}),t._v(" "),a("p",[t._v("브라우저에서 리소스에 최초로 요청을 보내는 경우, 응답의 Last-Modified 헤더값을 기억하고 있다가 다음 요청 헤더 중 If-Modified-Since 헤더에 포함하여 전송한다.")]),t._v(" "),a("lazy-load",{attrs:{tag:"img",data:{src:"/images/posts/2018/12/second-request-with-caching.PNG",alt:"Piece of a Google search page result with the link and a highlight with red borders indicating the URL"}}}),t._v(" "),a("p",[t._v("서버에서는 If-Modified-Since 헤더값과 리소스의 변경 시점이 같다면 304 상태코드를 응답하면서 다시 리소스를 응답하지 않는다.")]),t._v(" "),a("lazy-load",{attrs:{tag:"img",data:{src:"/images/posts/2018/12/third-request-after-updating-resource.PNG",alt:"Piece of a Google search page result with the link and a highlight with red borders indicating the URL"}}}),t._v(" "),a("p",[t._v("만약, If-Modified-Since 헤더값과 리소스의 변경 시점이 다르다면 변경된 리소스와 200 상태코드를 응답하게 되면서 브라우저는 다시 응답의 Last-Modified 헤더값을 다음 요청의 If-Modified-Since 헤더값에 포함하여 전송한다.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),a("blockquote",[a("p",[t._v("해당 포스팅은 "),a("a",{attrs:{href:"https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8/",target:"_blank",rel:"noopener noreferrer"}},[t._v("스프링 부트 개념과 활용"),a("OutboundLink")],1),t._v(" 강의 내용을 토대로 작성하였습니다.")])])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"정적-리소스-지원"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#정적-리소스-지원","aria-hidden":"true"}},[this._v("#")]),this._v(" 정적 리소스 지원")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("정적 리소스는 웹 브라우저나 클라이언트에서 요청이 왔을 때, "),s("strong",[this._v("이미 생성된 정적 리소스를 응답하는 경우")]),this._v("에 주로 사용된다. 컨트롤러에서 작업을 처리하고 뷰를 만들어내는게 아닌, "),s("u",[this._v("이미 만들어져 있는 리소스를 제공할 수 있다")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"정적-리소스-맵핑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#정적-리소스-맵핑","aria-hidden":"true"}},[this._v("#")]),this._v(' 정적 리소스 맵핑 "/**"')])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("classpath:/static")]),this._v(" "),s("li",[this._v("classpath:/public")]),this._v(" "),s("li",[this._v("classpath:/resources/")]),this._v(" "),s("li",[this._v("classpath:/META-INF/resources")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"실습"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#실습","aria-hidden":"true"}},[this._v("#")]),this._v(" 실습")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Title"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\nHello Static Resources\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"resourcehttprequesthandler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resourcehttprequesthandler","aria-hidden":"true"}},[this._v("#")]),this._v(" ResourceHttpRequestHandler")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("정적 리소스를 처리하는 작업은 "),s("strong",[this._v("ResourceHttpRequestHandler가 처리")]),this._v("한다. ResourceHttpRequestHandler는 Last-Modified라는 "),s("strong",[this._v("응답의 헤더 정보를 보고 304 상태코드를 응답하기도 한다")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"커스터마이징"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#커스터마이징","aria-hidden":"true"}},[this._v("#")]),this._v(" 커스터마이징")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("정적리소스의 URL 패턴은 전부 루트 경로인 '/' 부터 시작하지만, "),s("strong",[this._v("spring.mvc.static-path-pattern 프로퍼티를 이용하여 매핑 설정을 변경할 수 있다")]),this._v(". spring.mvc.static-locations 프로퍼티를 이용하면 리소스를 찾을 위치를 변경할 수 있다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("하지만, spring.mvc.static-locations는 "),s("strong",[this._v("기본 설정된 네가지 path를 사용하지 않게 되므로 권장하지 않는다")]),this._v(". 커스터마이징에 "),s("strong",[this._v("권장되는 방법은 WebMvcConfigurer의 addRersourceHandlers를 사용하는 것")]),this._v("이다.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebConfig")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebMvcConfigurer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addResourceHandlers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ResourceHandlerRegistry registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addResourceHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/m/**"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addResourceLocations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"classpath:/m/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCachePeriod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("위의 코드는 /m/으로 시작하는 요청이 들어오면 /m/이라는 디렉토리의 리소스를 반환한다. "),s("strong",[this._v("WebMvcConfigurer의 addResourceHandlers")]),this._v("를 이용하여 커스터마이징하면, "),s("u",[this._v("스프링부트가 제공하는 기본 리소스핸들러는 유지하면서 새로운 리소스핸들러를 추가할 수 있다")]),this._v(". ResourceHandlerRegistry의 addResourceLocations() 메소드에 전달되는 resourceLocations는 반드시 /로 끝나야한다는 점을 주의해야 한다.")])}],!1,null,null,null);n.options.__file="web-mvc-static-resources.md";s.default=n.exports}}]);