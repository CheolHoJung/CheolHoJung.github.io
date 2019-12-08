(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{337:function(t,e,s){"use strict";s.r(e);var i=s(1),r=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("p",[t._v("컨트롤러 메소드 파라미터, 서비스 메소드 파라미터, 컨트롤러 응답에 엔티티를 그대로 사용할 때의 문제점을 살펴보면서 DTO를 사용해야 하는 이유를 강조할 것이다. 마지막으로 DTO를 사용하는 방법에 대해서 알아본다.")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("비즈니스 로직과 같은 커맨드성 로직은 컨트롤러에서 식별자만 넘기고 서비스가 영속성 컨텍스트에서 엔티티를 조회하여 영속화된 엔티티를 이용해야 한다.")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("API 응답 스펙에 맞추어 별도의 DTO를 반환한다. 컬렉션 자체를 반환하면 응답값에 count와 같은 별도의 속성을 추가할 수 없다. 껍데기만 DTO로 응답하는 게 아니라, 내부의 모든 속성에도 엔티티가 포함되면 안된다.")]),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("엔티티를 조회해서 DTO로 변환하는 방법과 생성자를 호출해 DTO로 직접 조회하는 방법이 있다. 두 방식 모두 장단점이 있지만 편리한 성능 최적화를 위해 DTO로 변환하는 방법을 추천한다.")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),s("p",[t._v("패치 조인이나, 배치 사이즈 옵션같이 코드를 거의 수정하지 않고 옵션만 약간 변경하는 방식으로 다양한 최적화를 시도해볼 수 있다. 대규모 트래픽으로 발생하는 문제가 아닌 이상 대부분의 문제를 해결할 수 있다.")]),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("성능을 최적화하거나 그 방식을 변경해야 할 때 많은 코드를 수정해야 한다. DTO로 직접 조회하면 필요한 컬럼만 projection할 수 있어서 통신량이 줄어드는 이점이 있긴 하다. 하지만, 그 정도로 데이터가 많다면 캐싱과 같은 전략을 활용해야하지 않을까.")]),t._v(" "),s("blockquote",[s("p",[t._v("해당 포스팅은 "),s("a",{attrs:{href:"https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8-JPA-API%EA%B0%9C%EB%B0%9C-%EC%84%B1%EB%8A%A5%EC%B5%9C%EC%A0%81%ED%99%94/dashboard",target:"_blank",rel:"noopener noreferrer"}},[t._v("실전! 스프링 부트와 JPA 활용2 - API 개발과 성능 최적화"),s("OutboundLink")],1),t._v(" 강의 내용을 토대로 작성하였습니다.")])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"컨트롤러-메소드-파라미터로-엔티티를-그대로-사용"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#컨트롤러-메소드-파라미터로-엔티티를-그대로-사용","aria-hidden":"true"}},[this._v("#")]),this._v(" 컨트롤러 메소드 파라미터로 엔티티를 그대로 사용")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("@NotEmpty와 같은 "),e("strong",[this._v("validation 코드와 모델링을 위한 코드가 뒤섞이면서 엔티티 클래스가 복잡해진다")]),this._v(". 도메인 모델 패턴을 사용하여 엔티티 클래스에 비즈니스 로직이 작성된 경우라면 더 복잡해진다.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("엔티티에 프레젠테이션을 위한 로직이 생기는 상황을 피해야한다.")]),this._v(" 엔티티는 모델링 코드와 연관관계를 위한 코드를 제외하고 의존성이 없도록 최대한 순수한 상태를 유지해야 한다. 요구사항이 단순한 경우에는 엔티티를 그대로 사용해도 상관없다. 하지만, 화면 종속적인 기능으로 인해 엔티티가 복잡해지는 경우 DTO를 고려해야 한다.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("가장 큰 문제는 "),e("strong",[this._v("API 스펙과 엔티티 사이에 의존성이 생긴다")]),this._v("는 것이다. 엔티티를 변경함에 따라 발생하는 사이드 이펙트의 추적이 불가능하다. 엔티티 클래스의 속성명을 수정하면 이를 모르는 기능이나 다른 팀에서 개발하는 기능이 정상적으로 동작하지 않는다. 엔티티를 변경하면 API 스펙을 변경해야 한다.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"서비스-메소드-파라미터로-엔티티를-그대로-사용"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#서비스-메소드-파라미터로-엔티티를-그대로-사용","aria-hidden":"true"}},[this._v("#")]),this._v(" 서비스 메소드 파라미터로 엔티티를 그대로 사용")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("서비스 객체의 입장에서 인자로 넘어온 엔티티가 영속화 상태라는 것을 보장할 수 없다.")]),this._v(" 예를 들어 서비스 메소드에서 파라미터로 엔티티 객체를 받아 "),e("code",[this._v("entity.cancel()")]),this._v("와 같은 메소드를 호출한다고 해보자. "),e("code",[this._v("cancel() 메소드")]),this._v("는 엔티티의 status 속성을 변경한다 엔티티 객체가 영속성 상태라면 서비스 트랜잭션이 commit 되는 시점에 JPA가 flush하면서 DB에 update 쿼리를 날린다. 그러나, 인자로 넘어온 엔티티가 비영속 혹은 준영속 상태라면 update 쿼리를 날리지 않는다.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"컨트롤러-응답에-엔티티를-그대로-사용"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#컨트롤러-응답에-엔티티를-그대로-사용","aria-hidden":"true"}},[this._v("#")]),this._v(" 컨트롤러 응답에 엔티티를 그대로 사용")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("파라미터로 사용할 때와 마찬가지로, "),e("strong",[this._v("응답 스펙을 맞추기 위해 엔티티에 프레젠테이션을 위한 로직을 추가해야 한다")]),this._v(". 실무에서는 하나의 엔티티에 대한 조회용 API가 다수 존재한다. 각 API의 목적이 다를 수도 있고, 어떤 API에서는 민감한 정보를 마스킹하거나 아예 body에 포함하면 안될 수도 있다. "),e("strong",[this._v("API 스펙과 엔티티 사이에 의존성이 생긴다")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"엔티티를-사용할-때의-장단점"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#엔티티를-사용할-때의-장단점","aria-hidden":"true"}},[this._v("#")]),this._v(" 엔티티를 사용할 때의 장단점")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("유일한 장점은 패키지 내부가 깨끗해지며 별도의 DTO 클래스를 만들고 변환하는 귀찮은 작업이 필요없다는 점이다. 유일한 장점에 비해, 단점은 파고들수록 많아진다. "),e("strong",[this._v("단점이 곧 DTO를 사용해야 하는 이유")]),this._v("다.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("엔티티에 프레젠테이션을 위한 로직이 추가되면서 엔티티가 복잡해진다.")]),this._v(" "),e("li",[this._v("엔티티가 인자로 넘어올 때 영속화 상태라는 것을 보장할 수 없다.")]),this._v(" "),e("li",[this._v("API 스펙과 엔티티 사이에 의존성이 생긴다.")]),this._v(" "),e("li",[this._v("엔티티를 변경함에 따라 발생하는 사이드 이펙트의 추적이 불가능하다.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"dto-사용법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dto-사용법","aria-hidden":"true"}},[this._v("#")]),this._v(" DTO 사용법")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"업데이트"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#업데이트","aria-hidden":"true"}},[this._v("#")]),this._v(" 업데이트")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("컨트롤러의 인자로 DTO를 받는다.")]),t._v(" "),s("li",[t._v("트랜잭션이 있는 서비스 계층에 식별자와 변경할 데이터를 전달하자. DTO를 그대로 넘기거나 getName처럼 일일히 가져와서 넘겨도 상관없다.")]),t._v(" "),s("li",[t._v("트랜잭션이 있는 서비스 계층에서 영속 상태의 엔티티를 조회하고 엔티티를 직접 변경하자. (병합금지)\n"),s("ol",[s("li",[t._v("명시적으로 merge를 호출하는 것을 방지하기 위함")]),t._v(" "),s("li",[t._v("엔티티의 상태를 업데이트하기 위해 merge를 사용하면 null로 설정된 필드는 null로 업데이트하는 문제가 발생한다.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"컬렉션-응답"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#컬렉션-응답","aria-hidden":"true"}},[this._v("#")]),this._v(" 컬렉션 응답")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"쿼리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#쿼리","aria-hidden":"true"}},[this._v("#")]),this._v(" 쿼리")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("엔티티 조회 방식으로 우선 접근\n"),s("ol",[s("li",[t._v("패치 조인으로 쿼리 수를 최적화한다.")]),t._v(" "),s("li",[t._v("컬렉션 최적화를 적용한다. 페이징이 필요한 경우 배치 사이즈 옵션으로 최적화하고, 페이징이 필요없는 경우 패치 조인을 사용한다.")])])]),t._v(" "),s("li",[t._v("엔티티 조회 방식으로 해결이 불가능한 경우 DTO를 직접 조회한다.")]),t._v(" "),s("li",[t._v("최후의 방법은 JPA가 제공하는 네이티브 SQL을 사용하거나 JDBC Template을 직접 사용해서 SQL을 호출하는 것이다.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"엔티티-조회-후-dto-변환-vs-dto-직접-조회"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#엔티티-조회-후-dto-변환-vs-dto-직접-조회","aria-hidden":"true"}},[this._v("#")]),this._v(" 엔티티 조회 후 DTO 변환 VS DTO 직접 조회")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("엔티티 조회")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("DTO 조회")])])}],!1,null,null,null);r.options.__file="jpa-entity-vs-dto.md";e.default=r.exports}}]);