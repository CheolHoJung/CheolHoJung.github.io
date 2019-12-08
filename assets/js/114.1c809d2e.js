(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{331:function(t,n,s){"use strict";s.r(n);var a=s(1),e=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("router-link",{attrs:{to:"/posts/java/mvc.html"}},[t._v("MVC")]),t._v("에 대한 설명은 많은 곳에서 찾아볼 수 있다. 스프링 웹 MVC 모듈은 이러한 MVC 패턴을 중심으로 만들어졌다. 스프링부트를 이용하면 별도의 설정없이 스프링 웹 MVC 개발을 바로 시작할 수 있다. 이는 스프링부트가 제공하는 "),s("router-link",{attrs:{to:"/posts/java/autoconfiguration.html"}},[t._v("자동설정")]),t._v(" 덕분이다.")],1),t._v(" "),s("p",[t._v("다른 분이 작성한 "),s("a",{attrs:{href:"https://minwan1.github.io/2018/05/28/2018-05-28-spring-mvc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Web MVC 구조"),s("OutboundLink")],1),t._v(" 포스팅에 스프링프레임워크 웹 MVC 동작에 대한 전체적인 구조가 있다. 요청과 응답의 전체적인 과정이 어떻게 동작하는지 궁금한 사람들이 읽어보면 좋을 것 같다.")]),t._v(" "),s("p",[t._v("앞으로 11부에 거쳐 스프링 웹 MVC를 학습하는데, 이번 포스팅에서는 스프링부트에서 어떻게 웹 MVC 개발을 바로 시작할 수 있는지에 대해 알아본다.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),s("p",[t._v("spring-boot-autoconfigure 모듈의 META-INF/spring.factories를 열어보면 org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration가 사용되는 것을 알 수 있다.")]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),s("p",[t._v("@Configuration를 지정하고 WebMvcConfigurer 인터페이스를 구현하여 기본 제공되는 MVC를 확장할 수 있다. @EnableWebMvc를 추가로 지정하면 스프링부트가 제공하는 모든 웹 MVC 기능이 사라지고, 웹 MVC와 관련된 모든 기능을 직접 구현해야한다.")]),t._v(" "),s("blockquote",[s("p",[t._v("해당 포스팅은 "),s("a",{attrs:{href:"https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8/",target:"_blank",rel:"noopener noreferrer"}},[t._v("스프링 부트 개념과 활용"),s("OutboundLink")],1),t._v(" 강의 내용을 토대로 작성하였습니다.")])])])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"스프링-웹-mvc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#스프링-웹-mvc","aria-hidden":"true"}},[this._v("#")]),this._v(" 스프링 웹 MVC")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"스프링부트-mvc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#스프링부트-mvc","aria-hidden":"true"}},[this._v("#")]),this._v(" 스프링부트 MVC")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"language-properties extra-class"},[n("pre",{pre:!0,attrs:{class:"language-properties"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# Auto Configure")]),this._v("\n....\norg.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration,\\\n....\n")])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnWebApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SERVLET"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Servlet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DispatcherServlet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" WebMvcConfigurer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnMissingBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WebMvcConfigurationSupport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AutoConfigureOrder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ordered"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HIGHEST_PRECEDENCE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AutoConfigureAfter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" DispatcherServletAutoConfiguration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tTaskExecutionAutoConfiguration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ValidationAutoConfiguration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebMvcAutoConfiguration")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnMissingBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HiddenHttpMethodFilter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prefix "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spring.mvc.hiddenmethod.filter"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enabled"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" matchIfMissing "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" OrderedHiddenHttpMethodFilter "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hiddenHttpMethodFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderedHiddenHttpMethodFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnMissingBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FormContentFilter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prefix "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spring.mvc.formcontent.filter"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enabled"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" matchIfMissing "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" OrderedFormContentFilter "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("formContentFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderedFormContentFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EnableWebMvcConfiguration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableConfigurationProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" WebMvcProperties"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ResourceProperties"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebMvcAutoConfigurationAdapter")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebMvcConfigurer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ResourceLoaderAware "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("주요 요소")]),this._v("들을 살펴보자.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("// 1:  "),n("strong",[this._v("HiddenHttpMethodFilter")]),this._v("는 스프링 3이후로 제공되는 필터이다. PUT이나 DELETE, PATCH 요청에서 _method라는 hidden form paramater로 어떤 메소드인지 값을 받아올 수 있다. 컨트롤러에 매핑해줄 수 있는 이러한 정보를 바탕으로, @GetMapping, @DeleteMapping등의 핸들러를 만들 수 있도록 도와주는 필터이다.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("// 2: HTTP POST에 Form Data를 보낼 수 있게 서블릿 스펙에 정의되어 있는데, "),n("strong",[this._v("FormContentFilter")]),this._v("는 PUT과 PATCH 요청에서도 Form Data를 사용할 수 있도록 래핑해준다.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("// 3: "),n("strong",[this._v("WebMvcProperties와 ResourceProperties")]),this._v("를 사용한다.  WebMvcProperties는 "),n("u",[this._v("spring.mvc로 시작하는 프로퍼티즈")]),this._v("를 파싱하여 바인딩한다.  ResourceProperties는 "),n("u",[this._v("spring.resource로 시작하는 프로퍼티즈")]),this._v("를 파싱하여 바인딩한다.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("blockquote",[n("p",[this._v("이외에도 컨텐츠 네고시에이션 리졸버, 포메터, 리소스핸들러 등 기본적인 웹 MVC 설정으로부터 스프링부트가 더 많은 컨벤션을 제공한다.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"스프링-mvc-확장"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#스프링-mvc-확장","aria-hidden":"true"}},[this._v("#")]),this._v(" 스프링 MVC 확장")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebMvcConfigurer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="web-mvc-intro.md";n.default=e.exports}}]);