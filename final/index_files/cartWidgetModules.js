var __extends=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)};angular.module("nr-ng-client",[]).run(["nrNgClient","nrNgUiRouter",function(a,b){}]);var relic;!function(a){var b=function(){function a(){this.newrelic=window.newrelic}return a.prototype.tag=function(a,b){this.newrelic&&this.newrelic.setCustomAttribute(a,b)},a.prototype.addPageAction=function(a,b){this.newrelic&&this.newrelic.addPageAction(a,b)},a.prototype.reportError=function(a,b){if(this.newrelic)try{throw"string"==typeof a?new Error(a):a}catch(a){this.newrelic.noticeError(a),"function"==typeof this.newrelic.addPageAction&&this.newrelic.addPageAction("error",{href:window.location.href,message:a.message,stack:a.stack,cause:b||""})}},a.prototype.reportFinishLoading=function(){this.newrelic&&this.newrelic.finished()},a}();a.NrNgClient=b;var c=function(a){function c(){a.apply(this,arguments),this.config={reportError:!0,reportFinish:!0}}return __extends(c,a),c.prototype.reportFinishedEnabled=function(a){this.config.reportFinish=a},c.prototype.reportErrorsEnabled=function(a){this.config.reportError=a},c.prototype.decorateExceptionHandler=function(a){var b=this;this.newrelic&&this.config.reportError&&a.decorator("$exceptionHandler",["$delegate",function(a){return function(c,d){b.reportError(c,d),a(c,d)}}])},c.prototype.$get=function(a,c){var d=this;return this.config.reportFinish&&c(function(){a.notifyWhenNoOutstandingRequests(function(){d.reportFinishLoading()})},0,!1),new b},c.prototype.$get.$inject=["$browser","$timeout"],c}(b);a.NrNgClientProvider=c,angular.module("nr-ng-client").provider("nrNgClient",c).config(["$provide","nrNgClientProvider",function(a,b){b.decorateExceptionHandler(a)}])}(relic||(relic={}));var relic;if(function(a){var b="$stateChangeStart",c="$viewContentLoaded",d=function(){function a(a,b){this.$state=a,this.addStateToTrace=b}return a.prototype.reportStateDataLoaded=function(){this.$state&&this.addStateToTrace(this.$state.current.url)},a}();a.NrNgUiRouter=d;var e=function(){function a(){this.newrelic=window.newrelic,this.config={reportStateChange:!0,threshold:300},this.routsData={start:0,inTransition:!1}}return a.prototype.stateChangedReportEnabled=function(a){this.config.reportStateChange=a},a.prototype.threshold=function(a){this.config.threshold=a},a.prototype.registerStateChangeEvents=function(a,d,e){var f=this;a.$on(b,function(a,b,c,d){d&&d.name&&(f.routsData.start=Date.now(),f.routsData.inTransition=!0)}),this.config.reportStateChange&&a.$on(c,function(){f.routsData.inTransition&&d.notifyWhenNoOutstandingRequests(function(){f.addStateToTrace(e.current.url)})})},a.prototype.addStateToTrace=function(a){this.routsData.inTransition=!1,this.newrelic&&Date.now()-this.routsData.start>=this.config.threshold&&(this.newrelic.addToTrace({name:"RENDER_STATE"+a,start:this.routsData.start,end:Date.now()}),this.newrelic.addPageAction("RENDER_STATE"+a,{duration:(Date.now()-this.routsData.start)/1e3}))},a.prototype.getStateService=function(a){var b,c="$state";try{a.has(c)&&(b=a.get(c))}catch(a){}return b},a.prototype.$get=function(a,b,c){var e=this,f=this.getStateService(c);return f&&this.registerStateChangeEvents(a,b,f),new d(f,function(a){return e.addStateToTrace(a)})},a.prototype.$get.$inject=["$rootScope","$browser","$injector"],a}();a.NrNgUiRouterProvider=e,angular.module("nr-ng-client").provider("nrNgUiRouter",e)}(relic||(relic={})),angular.version.minor<5){var hooked=angular.module;angular.module=function(){function a(a){if(angular.isString(a)){var b=c.exec(a);return b&&b[3]}}var b=hooked.apply(this,arguments),c=/^(\S+)(\s+as\s+(\w+))?$/;return b.component||(b.component=function(c,d){function e(b){function c(a){return angular.isFunction(a)||angular.isArray(a)?function(c,d){return b.invoke(a,this,{$element:c,$attrs:d})}:a}var e=d.template||d.templateUrl?d.template:"";return{controller:d.controller||function(){},controllerAs:a(d.controller)||d.controllerAs||"$ctrl",template:c(e),templateUrl:c(d.templateUrl),transclude:d.transclude,scope:d.bindings||{},bindToController:!0,restrict:d.restrict||"E"}}return e.$inject=["$injector"],b.directive(c,e)}),b}}!function(){var a;try{a=angular.module("ngRoute")}catch(a){}a&&a.config(["$routeProvider",function(a){function b(a){if(a.resolve&&!a.controller){var b={};return b.controllerAs="$resolve",b.controller=function(){var b=this,c=arguments;Object.keys(a.resolve).forEach(function(a,d){return b[a]=c[d]})},b.controller.$inject=Object.keys(a.resolve),angular.extend(b,a)}return a}var c=a.when;a.when=function(){return arguments[1]=b(arguments[1]),c.apply(this,arguments)}}])}();var PermissionsDefinition=function(){function a(a){this.permissions=a.permissions,this.isOwner=a.isOwner,this.$$ownerId=a.ownerId,this.$$roles=a.roles,this.siteToken=a.siteToken||"user-unknown"}return a}(),PermissionsDefinitionBuilder=function(){function a(){this.roles=[],this.permissions=[],this.siteToken="user-unknown"}return a.prototype.withPermissions=function(a){return this.permissions=a,this},a.prototype.withIsOwner=function(a){return this.isOwner=a,this},a.prototype.withOwnerId=function(a){return this.ownerId=a,this},a.prototype.withSiteToken=function(a){return this.siteToken=a,this},a.prototype.withRoles=function(a){return this.roles=a,this},a.prototype.build=function(){return new PermissionsDefinition({permissions:this.permissions,isOwner:this.isOwner,roles:this.roles,ownerId:this.ownerId,siteToken:this.siteToken})},a}();angular.module("wixAngularExperiments",[]),angular.module("wixAngularPermissionsConstants",[]),angular.module("wixAngularPermissions",["wixAngularPermissionsConstants"]),angular.module("wixAngularBackwardCompatibility",["wixAngularAppInternal","wixAngularExperiments"]),angular.module("wixAngularAppInternal",["nr-ng-client"]),angular.module("wixAngularInterceptor",["wixAngularAppInternal"]).config(["$httpProvider","wixAngularTopologyProvider",function(a,b){a.interceptors.push("wixAngularInterceptor"),b.getStaticsUrl()||b.setStaticsUrl(angular.element(document).find("base").attr("href"))}]),angular.module("wixAngularTranslateCompile",["pascalprecht.translate"]),angular.module("wixAngularConstants",[]),angular.module("wixAngular",["wixAngularAppInternal","wixAngularTranslateCompile","wixAngularExperiments","wixAngularInterceptor","wixAngularBackwardCompatibility","wixAngularPermissions","wixAngularConstants"]),angular.module("wixAngularConstants").constant("letterUnicode","A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ").constant("numberUnicode","0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൦-൵๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹０-９").constant("dashPunctuationUnicode","-֊־᐀᠆‐-―⸗⸚⸺⸻〜〰゠︱︲﹘﹣－");var WixRoles=function(){function a(){this.OWNER="owner",this.CONTRIBUTOR="contributor",this.LIMITED_ADMIN="limitedAdmin",this.WIX_STAFF="wixStaff",this.BACKOFFICE_MANAGER="backOfficeManager",this.BLOG_EDITOR="blogEditor",this.BLOG_WRITER="blogWriter"}return a}();angular.module("wixAngularPermissionsConstants").constant("wixRoles",new WixRoles),function(){function a(a,b,c){return{restrict:"A",replace:!0,link:function(d,e,f){function g(){var g=f.translateValues?c(f.translateValues)(d):{},h=a(f.wixTranslateCompile,g);e.html(h),b(e.contents())(d)}g(),d.$watch(function(){return f.wixTranslateCompile},g)}}}a.$inject=["$translate","$compile","$parse"],angular.module("wixAngularTranslateCompile").directive("wixTranslateCompile",a)}(),function(){function a(a){return{priority:99,link:function(b,c,d){d.$observe("relativeHref",function(b){b&&d.$set("href",a.staticsUrl+b)})}}}a.$inject=["wixAngularTopology"],angular.module("wixAngularAppInternal").directive("relativeHref",a)}(),function(){function a(a){return{priority:99,link:function(b,d,e){e.$observe("relativeSrc",function(b){b&&e.$set("src",c(b)?a.staticsUrl+b:b)})}}}function b(a){return{priority:9999,link:function(b,d,e){e.$observe("ngSrc",function(b){c(b)&&e.$set("src",a.staticsUrl+b)})}}}function c(a){return a&&["images/","bower_components","assets/images/"].some(function(b){return 0===a.indexOf(b)})}a.$inject=["wixAngularTopology"],b.$inject=["wixAngularTopology"],angular.module("wixAngularAppInternal").directive("relativeSrc",a).directive("ngSrc",b)}(),function(){function a(a,b){if("function"==typeof a)return{pre:b,post:a};var c=a.pre;return a.pre=function(){return b.apply(void 0,arguments),c.apply(void 0,arguments)},a}function b(b,c,d,e,f){var g=c[0],h=angular.copy(g);return h.compile=function(){return a(g.compile.apply(g,arguments),function(a,c,g){g[e]=function(){var a=g[d];return f.eval(b,a,g.wixPermissionContext)}})},h}function c(a,c,d,e,f){return a.invoke(b,this,{manager:c,directiveName:d,ngDirective:e,ngAttributeName:f})}b.$inject=["manager","ngDirective","directiveName","ngAttributeName","wixManagerEval"],angular.module("wixAngularExperiments").directive("wixExperimentIf",["$injector","experimentManager","ngIfDirective",function(a,b,d){return c(a,b,"wixExperimentIf",d,"ngIf")}]),angular.module("wixAngularPermissions").directive("wixPermissionIf",["$injector","permissionsManager","ngIfDirective",function(a,b,d){return c(a,b,"wixPermissionIf",d,"ngIf")}]),angular.module("wixAngularExperiments").directive("wixExperimentDisabled",["$injector","experimentManager","ngDisabledDirective",function(a,b,d){return c(a,b,"wixExperimentDisabled",d,"ngDisabled")}]),angular.module("wixAngularPermissions").directive("wixPermissionDisabled",["$injector","permissionsManager","ngDisabledDirective",function(a,b,d){return c(a,b,"wixPermissionDisabled",d,"ngDisabled")}])}(),function(){function a(a,b,c,d,e){return{restrict:"A",link:function(f,g,h){var i=d(h[c])(f),j=h[b];if(i){var k=i[a.get(e(j))];k&&g.addClass(k)}}}}function b(b,c,d,e){return b.invoke(a,this,{manager:c,directiveName:d,valuesToCheck:e})}a.$inject=["manager","directiveName","valuesToCheck","$parse","wixConstValue"],angular.module("wixAngularExperiments").directive("wixExperimentClass",["$injector","experimentManager",function(a,c){return b(a,c,"wixExperimentClass","experimentValues")}]),angular.module("wixAngularPermissions").directive("wixPermissionClass",["$injector","permissionsManager",function(a,c){return b(a,c,"wixPermissionClass","permissionValues")}])}(),function(){function a(a,b,c){function d(a){return a.match(new RegExp("^\\s*?(.+)@(.+?)\\s*$"))[2]}var e=a,f=b,g=c,h="(["+f+e+g+"_+/!#$%&'*=?^`{}|~])",i=h+"(["+f+e+g+"._+/!#$%&'*=?^`{}|~])*"+h,j="[0-9a-zA-Z]+([-.]+[0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,63}",k=new RegExp("^("+h+"|"+i+")@"+j+"$"),l=new CommonsValidator.DomainValidator;return{require:"ngModel",restrict:"A",link:function(a,b,c,e){"false"!==c.wixMailValidator&&e.$parsers.unshift(function(a){return!a||k.test(a)&&l.isValid(d(a))?(e.$setValidity("wixMailValidator",!0),a):void e.$setValidity("wixMailValidator",!1)})}}}a.$inject=["letterUnicode","numberUnicode","dashPunctuationUnicode"],angular.module("wixAngularAppInternal").directive("wixMailValidator",a)}(),function(){angular.module("wixAngularAppInternal").factory("wixConstValue",["$injector",function(a){return function(b){return a.has(b)?a.get(b):b}}])}(),function(){function a(a){var b=a.match(/^([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);return{base:b[1],query:b[2],hash:b[3]}}function b(a){return a.base+(a.query?"?"+a.query:"")+(a.hash?"#"+a.hash:"")}function c(c,d,e){var f=a(c),g=encodeURIComponent(d)+"="+encodeURIComponent(e);return f.query=f.query?f.query+"&"+g:g,b(f)}function d(c,d){var e=a(c);return e.query?(e.query=e.query.split("&").filter(function(a){return!a.match(new RegExp("^"+encodeURIComponent(d)+"(=|$)"))}).join("&"),b(e)):c}function e(c,d){return c=a(c),d=a(d),c.query=c.query&&c.query.split("&").sort().join("&"),d.query=d.query&&d.query.split("&").sort().join("&"),b(c)===b(d)}function f(a,b,d,e,f,g){function h(b){return a.reject(b)}function i(){m||k===b.userGUID||d.$emit(e.userSwitch,b.userGUID,k),k=b.userGUID,m=!1}function j(a,b){return a?(n[b]=n[b]||j(),n[b]):Math.floor(9e4*Math.random())+1e4}var k,l={},m=!0,n={};return l.request=function(a){return i(),a.url.match(/\.(?:html|svg)$/)?a.url.match(/(:|^)\/\//)||a.cache&&a.cache.get&&a.cache.get(a.url)||(a.url=f.calcPartialsUrl(f.staticsUrl)+a.url.replace(/^\//,"")):0===a.url.indexOf("/_api/")&&(a.url=f.fixOrigin(a.url),"GET"===a.method&&g.has("experimentManager")&&g.get("experimentManager").isExperimentEnabled("specs.wos.CachBustingAPI")&&(a.url=c(a.url,"cb339",j(a.cache,a.url))),f.instance&&!a.headers["X-Wix-Instance"]&&(a.headers["X-Wix-Instance"]=f.instance)),a},l.response=function(a){if(a.data){if(!1===a.data.success)return a.status=500,h(a);if(!0===a.data.success&&void 0!==a.data.payload)if(angular.isObject(a.data.payload)&&!angular.isArray(a.data.payload)){var b=a.data.payload;delete a.data.payload,delete a.data.success,delete a.data.errorCode,delete a.data.errorDescription,a.data=angular.extend(a.data,b)}else a.data=a.data.payload}return a},l.responseError=function(a){return h(a)},l}function g(a){a.decorator("$httpBackend",["$delegate",function(a){return["expect","when"].forEach(function(b){var c=a[b];a[b]=function(a,b){if("string"==typeof b){var f=b;arguments[1]={test:function(a){return e(d(a,"cb339"),f)},toString:function(){return f}}}return c.apply(this,arguments)}}),a}])}f.$inject=["$q","wixCookies","$rootScope","wixAngularEvents","wixAngularTopology","$injector"],g.$inject=["$provide"],angular.module("wixAngularAppInternal").factory("wixAngularInterceptor",f).constant("wixAngularEvents",{userSwitch:"userSwitch"});try{angular.module("ngMock").config(g)}catch(a){}try{angular.module("ngMockE2E").config(g)}catch(a){}}(),function(){function a(a,b,c){this.getStaticsUrl=a.getStaticsUrl,this.setStaticsUrl=a.setStaticsUrl;var d=b.isExperimentEnabled.bind(b);this.setExperiments=b.setExperiments.bind(b),this.isExperimentEnabled=d,this.debugEnabled=function(a){c.reportFinishedEnabled(!a),c.reportErrorsEnabled(!a)},this.$get=["wixAngularTopology","experimentManager",function(a,b){var c={};return c.experiments=b.$$getExperimentsObj(),c.isExperimentEnabled=d,c.fixOrigin=a.fixOrigin,c.staticsUrl=a.staticsUrl,c.partialsUrl=a.partialsUrl,c}],this.$get.$inject=["wixAngularTopology","experimentManager"]}a.$inject=["wixAngularTopologyProvider","experimentManagerProvider","nrNgClientProvider"],angular.module("wixAngularBackwardCompatibility").provider("wixAngular",a)}(),function(){function a(a){function b(a){var b=a?a.split("|"):[];return{guid:b[6],userName:b[0]}}function c(a){return a.split(";").map(function(a){return a.trim()}).reduce(function(a,b){var c=b.split("=");return a[c[0]]=c[1],a},{})}function d(){var d=a()||"";return d!==f&&(f=d,e=b(c(d).wixClient)),e}var e,f;return{get userGUID(){return d().guid},get userName(){return d().userName}}}a.$inject=["cookieStr"],angular.module("wixAngularAppInternal").factory("wixCookies",a).factory("cookieStr",["$document",function(a){return function(){return a[0]&&a[0].cookie||""}}])}(),function(){function a(a,b){var c,d="";this.getStaticsUrl=function(){return d},this.setStaticsUrl=function(c){d=c&&c.replace(/\/?$/,"/").replace(/^\/\//,location.protocol+"//"),a.resourceUrlWhitelist([d+"**","self"]),b.tag("staticUrl",d)},this.setInstance=function(a){c=a},this.$get=["$window","$document","$location",function(a,b,e){function f(){return/\.wixpress\.com$/.test(a.location.hostname)}function g(a){return a.replace(/^([^\/]*\/\/+)?[^\/]*/,h)}var h=b.find&&b.find("base").attr("href")?a.location.protocol+"//"+a.location.host:"",i={};return i.fixOrigin=g,i.calcPartialsUrl=function(a,b){return!b&&(e.protocol&&"https"===e.protocol()||e.port&&80!==e.port())?a:a?g(a.replace("/services/","/_partials/")):""},i.staticsUrl=d||"",i.partialsUrl=d?g(d.replace("/services/","/_partials/")):"",i.isStaging=f,i.instance=c,i}],this.$get.$inject=["$window","$document","$location"]}a.$inject=["$sceDelegateProvider","nrNgClientProvider"],angular.module("wixAngularAppInternal").provider("wixAngularTopology",a)}(),window.jsonpExperiemts={},window.loadExperimentScopeSync=function(a){var b="//www.wix.com/_api/wix-laboratory-server/laboratory/conductAllInScope?scope="+a+"&accept=jsonp&callback=setExperimentsSync";document.write('<script src="'+b+'"><\/script>'),window.setExperimentsSync=function(a,b){angular.extend(window.jsonpExperiemts,b)}};var ExperimentManager=function(){function a(a,b){this.provider=a,this.$http=b,this.petriUrlPrefix="/_api/wix-laboratory-server/laboratory/",this.getExperimentValue=a.getExperimentValue.bind(a),this.isExperimentEnabled=a.isExperimentEnabled.bind(a)}return a.$inject=["provider","$http"],a.prototype.get=function(a){return this.getExperimentValue(a)},a.prototype.contains=function(a){return this.isExperimentEnabled(a)},a.prototype.loadScope=function(a){var b=this;return this.$$queryPetri({scope:a}).then(function(a){return b.provider.setExperiments(a),a})},a.prototype.loadExperiment=function(a,b){var c=this;return this.$$queryPetri({name:a,fallback:b}).then(function(b){var d={};return d[a]=b,c.provider.setExperiments(d),b})},a.prototype.$$queryPetri=function(a){return this.$http.get(this.getPetriUrl(a),{headers:{Accept:"*/*"},params:this.getQueryParams(a),cache:!0}).then(function(a){return a.data})},a.prototype.$$getExperimentsObj=function(){return this.provider.experiments},a.prototype.getPetriUrl=function(a){return this.petriUrlPrefix+(a.scope?"conductAllInScope/":"conductExperiment/")},a.prototype.getQueryParams=function(a){return a.scope?{scope:a.scope}:{key:a.name,fallback:a.fallback}},a}(),ExperimentManagerProvider=function(){function a(){this.experiments=angular.copy(window.jsonpExperiemts)}return a.prototype.clearExperiments=function(){this.experiments={}},a.prototype.isExperimentEnabled=function(a){return"true"===this.experiments[a]||!0===this.experiments[a]},a.prototype.setExperiments=function(a){angular.extend(this.experiments,a)},a.prototype.getExperimentValue=function(a){return this.experiments[a]},a.prototype.$get=function(a){return a.instantiate(ExperimentManager,{provider:this})},a.prototype.$get.$inject=["$injector"],a}();angular.module("wixAngularExperiments").provider("experimentManager",ExperimentManagerProvider).run(["$rootScope","experimentManager",function(a,b){a.experimentManager=b}]),window.beforeEach&&window.beforeEach(function(){angular.module("experimentManagerMock").config(["experimentManagerProvider",function(a){a.clearExperiments()}])}),angular.module("experimentManagerMock",[]).config(["$provide",function(a){a.decorator("experimentManager",["$delegate","$q",function(a,b){function c(a,b){-1===b.indexOf(a)&&b.push(a)}function d(a){void 0===f(a)?c(a,i):c(a,j)}function e(a){var c=b.defer();return a.scope?c.resolve(h[a.scope]||{}):c.resolve(Object.keys(h).reduce(function(b,c){return b||h[c][a.name]},void 0)||a.fallback),c.promise}var f=a.getExperimentValue.bind(a),g=a.isExperimentEnabled.bind(a),h={},i=[],j=[];return a.getExperimentValue=function(a){return d(a),f(a)},a.isExperimentEnabled=function(a){return d(a),g(a)},a.$$queryPetri=function(a){return b.when(a).then(e)},a.setScopeExperiments=function(a,b){h[a]=b},a.verifyNoUnexpectedExperiments=function(){if(i.length)throw"unexpected experiments: "+i.join(", ")},a.verifyNoUnusedExperiments=function(){var b=Object.keys(a.$$getExperimentsObj()).filter(function(a){return-1===j.indexOf(a)});if(b.length)throw"unused experiments: "+b.join(", ")},a}])}]);var PermissionsManager=function(){function a(a,b){var c=this;this.provider=a,this.wixRoles=b,this.defaultContextKey="default-context",this.defaultContextGetter=function(){return c.defaultContextKey},this.contextGetter=this.defaultContextGetter,this.permissionsContextMap=this.provider.permissionsContextMap||{},this.permissionsContextMap[this.defaultContextKey]=this.provider.permissionsDefinition}return a.$inject=["provider","wixRoles"],a.prototype.contains=function(a,b){var c=b||this.contextGetter(),d=this.permissionsContextMap[c];return!!d&&this.hasPermission(d,a)},a.prototype.get=function(a){return this.contains(a).toString()},a.prototype.loadScope=function(a){throw new Error("This method is not implemented.")},a.prototype.assignPermissionsMap=function(a){angular.extend(this.permissionsContextMap,a)},a.prototype.setContextGetter=function(a){this.contextGetter=a},a.prototype.resetContextGetter=function(){this.contextGetter=this.defaultContextGetter},a.prototype.$$getOwnerId=function(){return this.getCurrentPermissionsDefinition().$$ownerId},a.prototype.getSiteToken=function(){return this.getCurrentPermissionsDefinition().siteToken},a.prototype.$$getRoles=function(){return this.getCurrentPermissionsDefinition().$$roles},a.prototype.$$isOwner=function(){return this.getCurrentPermissionsDefinition().isOwner},a.prototype.$$getCurrentPermissionsMap=function(){return this.permissionsContextMap},a.prototype.isWixStaff=function(a){return-1!==a.indexOf(this.wixRoles.WIX_STAFF)},a.prototype.getCurrentPermissionsDefinition=function(){return this.permissionsContextMap[this.contextGetter()]},a.prototype.hasPermission=function(a,b){var c=this.isWixStaff(a.$$roles),d=-1!==a.permissions.indexOf(b);return a.isOwner||c||d},a}(),PermissionsManagerProvider=function(){function a(){this.permissionsDefinition=new PermissionsDefinition({permissions:[],isOwner:!1,ownerId:void 0,roles:[]})}return a.prototype.setAuthorizationInfo=function(a){this.permissionsDefinition=new PermissionsDefinition(a)},a.prototype.setPermissions=function(a){this.permissionsDefinition=a},a.prototype.setPermissionsContextMap=function(a){this.permissionsContextMap=a},a.prototype.$get=function(a){return a.instantiate(PermissionsManager,{provider:this})},a.prototype.$get.$inject=["$injector"],a}();angular.module("wixAngularPermissions").provider("permissionsManager",PermissionsManagerProvider);var IsPermitted=function(){function a(a,b){this.permissionsManager=a,this.wixManagerEval=b}return a.$inject=["permissionsManager","wixManagerEval"],a.prototype.filter=function(a,b,c,d){return this.wixManagerEval.eval(this.permissionsManager,b,d)?a:c},a}();angular.module("wixAngularPermissions").filter("isPermitted",["$injector",function(a){var b=a.instantiate(IsPermitted);return b.filter.bind(b)}]);var WixManagerEval=function(){function a(a){this.wixConstValue=a}return a.$inject=["wixConstValue"],a.prototype.eval=function(a,b,c){var d=/^(\!*)([^!].*)/.exec(b),e=d[1],f=d[2],g=a.contains(this.wixConstValue(f),c);return e.length%2?!g:g},a}();angular.module("wixAngularAppInternal").service("wixManagerEval",WixManagerEval),angular.module("wixAngularAppInternal").value("angularVersion",angular.version).factory("cookieReaderFacade",["$injector","$browser","angularVersion",function(a,b,c){return c.minor>3?a.get("$$cookieReader"):function(){return b.cookies()}}]),function(){function a(a){return function(b,c,d,e){function f(){i=this,h=arguments;var f=function(){g=null,d||(j=b.apply(i,h))},k=d&&!g;return g&&a.cancel(g),g=a(f,c,e),k&&(j=b.apply(i,h)),j}var g,h,i,j;return f.cancel=function(){a.cancel(g),g=null},f}}a.$inject=["$timeout"],angular.module("wixAngularAppInternal").service("wixDebounce",a)}();var WixHeightWatcherModule;!function(a){a.HEIGHT_CHANGED_EVENT="wix-height-changed-event"}(WixHeightWatcherModule||(WixHeightWatcherModule={}));var WixHeightWatcher=function(){function a(a,b,c,d){var e=this;this.wixDebounce=a,this.$document=b,this.$rootScope=c,this.$timeout=d,this.height=0,this.checkHeight=this.wixDebounce(this.checkHeight,50,!1,!1),this.$rootScope.$watch(function(){return e.checkHeight()})}return a.$inject=["wixDebounce","$document","$rootScope","$timeout"],a.prototype.reportHeight=function(a){var b=this;this.$rootScope.$apply(function(){return b.$rootScope.$emit(WixHeightWatcherModule.HEIGHT_CHANGED_EVENT,a)})},a.prototype.checkHeight=function(){var a=this.$document,b=a[0].body,c=a[0].documentElement,d=Math.max(b.offsetHeight,c.offsetHeight);this.height!==d&&(this.height=d,this.reportHeight(d))},a.prototype.subscribe=function(a){return this.$rootScope.$on(WixHeightWatcherModule.HEIGHT_CHANGED_EVENT,function(b,c){a(c)})},a}();angular.module("wixAngularAppInternal").service("wixHeightWatcher",WixHeightWatcher);var WixTpaHeightChangedDirectiveCtrl=function(){function a(a,b,c){var d=b.subscribe(function(a){return c.Wix.setHeight(a)});a.$on("$destroy",function(){return d()})}return a.$inject=["$scope","wixHeightWatcher","$window"],a}();angular.module("wixAngularAppInternal").directive("wixTpaHeightChanged",function(){return{restrict:"A",controller:WixTpaHeightChangedDirectiveCtrl,controllerAs:"wixTpaHeightChangedDirectiveCtrl",bindToController:!0}});var WixHeightChangedCtrl=function(){function a(a,b,c){var d=c.subscribe(function(c){a.$eval(b.wixHeightChanged,{height:c})});a.$on("$destroy",function(){return d()})}return a.$inject=["$scope","$attrs","wixHeightWatcher"],a}();angular.module("wixAngularAppInternal").directive("wixHeightChanged",function(){return{controller:WixHeightChangedCtrl,controllerAs:"wixHeightChangedCtrl",bindToController:!0,restrict:"A"}}),angular.module("wixAngularAppInternal").run(["$injector","$locale","$log","$window",function(a,b,c,d){var e=a.has("preferredLanguage")&&a.get("preferredLanguage"),f=b.id.slice(0,2);if(e&&e!==f){var g="Translation language ("+e+") does not match locale ("+f+")";c.error(g),d.NREUM&&d.NREUM.noticeError(new Error(g))}}]);
//# sourceMappingURL=cartWidgetModules.js.map