webpackJsonp([5,9],{1010:function(t,e,n){"use strict";var i=n(0),r=n(99);n.d(e,"a",function(){return c});var o=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.route=t}return t.prototype.ngOnInit=function(){this.id=parseInt(this.route.snapshot.params.id,10)},t=o([n.i(i.Component)({template:'\n    <h3 highlight>Crisis Detail</h3>\n    <div>Crisis id: {{id}}</div>\n    <br>\n    <a routerLink="../list">Crisis List</a>\n  '}),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.d&&r.d)&&e||Object])],t);var e}()},1011:function(t,e,n){"use strict";var i=n(0),r=n(44),o=n(171);n.d(e,"a",function(){return f});var a=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(t){this.store=t}return t.prototype.ngOnInit=function(){this.crises$=this.store.let(o.r)},t=a([n.i(i.Component)({template:"\n    <h3 highlight>Crisis List</h3>\n    <div *ngFor='let crisis of crises$ | async'>\n      <a routerLink=\"{{'../' + crisis.id}}\">{{crisis.id}} - {{crisis.name}}</a>\n    </div>\n  "}),c("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.b&&r.b)&&e||Object])],t);var e}()},1033:function(t,e,n){"use strict";var i=n(0),r=n(44),o=n(271),a=n(2),c=(n.n(a),n(274)),f=(n.n(c),n(498)),s=(n.n(f),n(172)),u=(n.n(s),n(496)),p=(n.n(u),n(497)),d=(n.n(p),n(21)),l=(n.n(d),n(275)),h=(n.n(l),n(993)),y=(n.n(h),n(273)),b=(n.n(y),n(272)),v=n(508);n.d(e,"a",function(){return O});var m=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},g=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},O=function(){function t(t,e,n){var i=this;this.store=t,this.dataService=e,this.action$=n,this.load$=this.action$.ofType(v.a.LOAD).startWith(new v.b).switchMap(function(){return i.dataService.getCrises().mergeMap(function(t){return a.Observable.from(t)}).map(function(t){return new v.c(t)}).catch(function(){return a.Observable.of(new v.d)})}),this.update$=this.action$.ofType(v.a.UPDATE_CRISIS,v.a.ADD_CRISIS).withLatestFrom(this.store.select("crises")).switchMap(function(t){var e=(t[0],t[1]);return a.Observable.from(e.ids).filter(function(t){return e.entities[t].dirty}).switchMap(function(t){return i.dataService.addOrUpdateCrisis(e.entities[t])}).map(function(t){return new v.e(t)})})}return m([n.i(o.a)(),g("design:type",Object)],t.prototype,"load$",void 0),m([n.i(o.a)(),g("design:type",Object)],t.prototype,"update$",void 0),t=m([n.i(i.Injectable)(),g("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.b&&r.b)&&e||Object,"function"==typeof(c="undefined"!=typeof b.a&&b.a)&&c||Object,"function"==typeof(f="undefined"!=typeof o.b&&o.b)&&f||Object])],t);var e,c,f}()},1039:function(t,e,n){"use strict";var i=n(99),r=n(1011),o=n(1010);n.d(e,"a",function(){return c});var a=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:r.a},{path:":id",component:o.a}],c=i.c.forChild(a)},988:function(t,e,n){"use strict";var i=n(0),r=n(271),o=n(173),a=n(1011),c=n(1010),f=n(1039),s=n(1033),u=n(272);n.d(e,"CrisisModule",function(){return l});var p=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(){}return t=p([n.i(i.NgModule)({imports:[o.a,f.a,r.c.run(s.a)],declarations:[c.a,a.a],providers:[u.a]}),d("design:paramtypes",[])],t)}()},993:function(t,e,n){"use strict";var i=n(2),r=n(174);i.Observable.prototype.withLatestFrom=r.withLatestFrom}});
//# sourceMappingURL=5.a4957e03814aa93cf8b7.bundle.map