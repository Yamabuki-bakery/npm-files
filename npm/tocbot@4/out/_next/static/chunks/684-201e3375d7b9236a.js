(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[684],{7942:function(e,t,r){"use strict";t.default=void 0;var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(4957),s=r(9898),c=r(639);var i={};function u(e,t,r,n){if(e&&o.isLocalURL(t)){e.prefetch(t,r,n).catch((e=>{0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[t+"%"+r+(a?"%"+a:"")]=!0}}var l=function(e){var t,r=!1!==e.prefetch,n=s.useRouter(),{href:l,as:p}=a.default.useMemo((()=>{var[t,r]=o.resolveHref(n,e.href,!0);return{href:t,as:e.as?o.resolveHref(n,e.as):r||t}}),[n,e.href,e.as]),{children:f,replace:d,shallow:h,scroll:v,locale:y}=e;"string"===typeof f&&(f=a.default.createElement("a",null,f));var m=(t=a.default.Children.only(f))&&"object"===typeof t&&t.ref,[b,g]=c.useIntersection({rootMargin:"200px"}),O=a.default.useCallback((e=>{b(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,b]);a.default.useEffect((()=>{var e=g&&r&&o.isLocalURL(l),t="undefined"!==typeof y?y:n&&n.locale,a=i[l+"%"+p+(t?"%"+t:"")];e&&!a&&u(n,l,p,{locale:t})}),[p,l,g,y,r,n]);var _={ref:O,onClick:e=>{t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,s,c,i){var{nodeName:u}=e.currentTarget;("A"!==u||!function(e){var{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),t[a?"replace":"push"](r,n,{shallow:s,locale:i,scroll:c}))}(e,n,l,p,d,h,v,y)},onMouseEnter:e=>{t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),o.isLocalURL(l)&&u(n,l,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof y?y:n&&n.locale,P=n&&n.isLocaleDomain&&o.getDomainLocale(p,M,n&&n.locales,n&&n.domainLocales);_.href=P||o.addBasePath(o.addLocale(p,M,n&&n.defaultLocale))}return a.default.cloneElement(t,_)};t.default=l},639:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var{rootRef:t,rootMargin:r,disabled:c}=e,i=c||!o,u=n.useRef(),[l,p]=n.useState(!1),[f,d]=n.useState(t?t.current:null),h=n.useCallback((e=>{u.current&&(u.current(),u.current=void 0),i||l||e&&e.tagName&&(u.current=function(e,t,r){var{id:n,observer:a,elements:o}=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((e=>{e.forEach((e=>{var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:a,elements:n}),r}(r);return o.set(e,t),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),s.delete(n))}}(e,(e=>e&&p(e)),{root:f,rootMargin:r}))}),[i,f,r,l]);return n.useEffect((()=>{if(!o&&!l){var e=a.requestIdleCallback((()=>p(!0)));return()=>a.cancelIdleCallback(e)}}),[l]),n.useEffect((()=>{t&&d(t.current)}),[t]),[h,l]};var n=r(7294),a=r(6286),o="undefined"!==typeof IntersectionObserver;var s=new Map},8e3:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},5646:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=s,t.useAmp=function(){return s(a.default.useContext(o.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(8e3);function s(){var{ampFirst:e=!1,hybrid:t=!1,hasQuery:r=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e||t&&r}},2717:function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=p,t.default=void 0;var o,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),c=(o=r(1585))&&o.__esModule?o:{default:o},i=r(8e3),u=r(5850),l=r(5646);function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce(((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t)),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce(((e,t)=>{var r=s.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return a=>{var o=!0,s=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){s=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,u=d.length;i<u;i++){var l=d[i];if(a.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?o=!1:r.add(l);else{var p=a.props[l],f=n[l]||new Set;"name"===l&&s||!f.has(p)?(f.add(p),n[l]=f):o=!1}}}return o}}()).reverse().map(((e,r)=>{var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((t=>e.props.href.startsWith(t)))){var c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,s.default.cloneElement(e,c)}return s.default.cloneElement(e,{key:o})}))}var v=function(e){var{children:t}=e,r=s.useContext(i.AmpStateContext),n=s.useContext(u.HeadManagerContext);return s.default.createElement(c.default,{reduceComponentsToState:h,headManager:n,inAmpMode:l.isInAmpMode(r)},t)};t.default=v},1585:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));class a extends n.Component{constructor(e){super(e),this.emitChange=()=>{this._hasHeadManager&&this.props.headManager.updateHead(this.props.reduceComponentsToState([...this.props.headManager.mountedInstances],this.props))},this._hasHeadManager=this.props.headManager&&this.props.headManager.mountedInstances}componentDidMount(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}componentDidUpdate(){this.emitChange()}componentWillUnmount(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}render(){return null}}t.default=a},9008:function(e,t,r){e.exports=r(2717)},1664:function(e,t,r){e.exports=r(7942)},2703:function(e,t,r){"use strict";var n=r(414);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,o,s){if(s!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);