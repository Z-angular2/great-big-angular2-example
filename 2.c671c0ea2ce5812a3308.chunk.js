webpackJsonp([2,9],{1017:function(t,n,e){"use strict";var o=e(35),r=(e.n(o),e(0)),a=e(45),i=e(171),d=e(507);e.d(n,"a",function(){return l});var f=this&&this.__decorate||function(t,n,e,o){var r,a=arguments.length,i=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,n,e,o);else for(var d=t.length-1;d>=0;d--)(r=t[d])&&(i=(a<3?r(i):a>3?r(n,e,i):r(n,e))||i);return a>3&&i&&Object.defineProperty(n,e,i),i},c=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},l=(e(278),function(){function t(t){this.store=t}return t.prototype.onAddNote=function(t){this.store.dispatch(new d.f({text:"",colour:t,left:200,top:300}))},t.prototype.onChangeNoteText=function(t,n){this.store.dispatch(new d.g({text:t,id:n.id}))},t.prototype.onChangeNotePosition=function(t,n){this.store.dispatch(new d.h({id:n.id,left:t.left,top:t.top}))},t.prototype.ngOnInit=function(){this.notes$=this.store.let(i.a)},t=f([e.i(r.Component)({selector:"app-notes",template:e(1063),styles:[e(1056)],changeDetection:r.ChangeDetectionStrategy.OnPush}),c("design:paramtypes",["function"==typeof(n="undefined"!=typeof a.b&&a.b)&&n||Object])],t);var n}())},1036:function(t,n,e){"use strict";var o=e(0),r=e(45),a=e(271),i=e(2),d=(e.n(i),e(274)),f=(e.n(d),e(503)),c=(e.n(f),e(172)),l=(e.n(c),e(501)),p=(e.n(l),e(502)),u=(e.n(p),e(21)),s=(e.n(u),e(275)),g=(e.n(s),e(999)),b=(e.n(g),e(273)),m=(e.n(b),e(272)),h=e(507);e.d(n,"a",function(){return F});var k=this&&this.__decorate||function(t,n,e,o){var r,a=arguments.length,i=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,n,e,o);else for(var d=t.length-1;d>=0;d--)(r=t[d])&&(i=(a<3?r(i):a>3?r(n,e,i):r(n,e))||i);return a>3&&i&&Object.defineProperty(n,e,i),i},y=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},F=function(){function t(t,n,e){var o=this;this.store=t,this.dataService=n,this.action$=e,this.load$=this.action$.ofType(h.a.LOAD).startWith(new h.b).switchMap(function(){return o.dataService.getNotes().mergeMap(function(t){return i.Observable.from(t)}).map(function(t){return new h.c(t)}).catch(function(t){return i.Observable.of(new h.d(t))})}),this.update$=this.action$.ofType(h.a.UPDATE_NOTE_TEXT,h.a.UPDATE_NOTE_POSITION,h.a.ADD_NOTE).withLatestFrom(this.store.select("notes")).switchMap(function(t){var n=(t[0],t[1]);return i.Observable.from(n.ids).filter(function(t){return n.entities[t].dirty}).switchMap(function(t){return o.dataService.addOrUpdateNote(n.entities[t])}).map(function(t){return new h.e(t)})})}return k([e.i(a.a)(),y("design:type",Object)],t.prototype,"load$",void 0),k([e.i(a.a)(),y("design:type",Object)],t.prototype,"update$",void 0),t=k([e.i(o.Injectable)(),y("design:paramtypes",["function"==typeof(n="undefined"!=typeof r.b&&r.b)&&n||Object,"function"==typeof(d="undefined"!=typeof m.a&&m.a)&&d||Object,"function"==typeof(f="undefined"!=typeof a.b&&a.b)&&f||Object])],t);var n,d,f}()},1045:function(t,n,e){"use strict";var o=e(0);e.d(n,"a",function(){return i});var r=this&&this.__decorate||function(t,n,e,o){var r,a=arguments.length,i=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,n,e,o);else for(var d=t.length-1;d>=0;d--)(r=t[d])&&(i=(a<3?r(i):a>3?r(n,e,i):r(n,e))||i);return a>3&&i&&Object.defineProperty(n,e,i),i},a=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},i=function(){function t(){this.add=new o.EventEmitter}return t.prototype.onClick=function(t){t.preventDefault(),this.add.emit(this.colour)},r([e.i(o.Input)(),a("design:type",String)],t.prototype,"colour",void 0),r([e.i(o.Output)(),a("design:type","function"==typeof(n="undefined"!=typeof o.EventEmitter&&o.EventEmitter)&&n||Object)],t.prototype,"add",void 0),t=r([e.i(o.Component)({selector:"add-button",template:e(1061),styles:[e(1054)]}),a("design:paramtypes",[])],t);var n}()},1046:function(t,n,e){"use strict";var o=e(0);e.d(n,"a",function(){return i});var r=this&&this.__decorate||function(t,n,e,o){var r,a=arguments.length,i=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,n,e,o);else for(var d=t.length-1;d>=0;d--)(r=t[d])&&(i=(a<3?r(i):a>3?r(n,e,i):r(n,e))||i);return a>3&&i&&Object.defineProperty(n,e,i),i},a=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},i=function(){function t(){this.changeNoteText=new o.EventEmitter(!1),this.changeNotePosition=new o.EventEmitter(!1)}return t.prototype.handleChangeNotePosition=function(t){t.left==this.left&&t.top==this.top||this.changeNotePosition.emit(t)},t.prototype.handleChangeNoteText=function(t){t!=this.text&&this.changeNoteText.emit(t)},r([e.i(o.Input)(),a("design:type",String)],t.prototype,"text",void 0),r([e.i(o.Input)(),a("design:type",Number)],t.prototype,"top",void 0),r([e.i(o.Input)(),a("design:type",Number)],t.prototype,"left",void 0),r([e.i(o.Input)(),a("design:type",String)],t.prototype,"colour",void 0),r([e.i(o.Input)(),a("design:type",Boolean)],t.prototype,"disabled",void 0),r([e.i(o.Output)(),a("design:type",Object)],t.prototype,"changeNoteText",void 0),r([e.i(o.Output)(),a("design:type",Object)],t.prototype,"changeNotePosition",void 0),t=r([e.i(o.Component)({selector:"app-note",template:e(1062),styles:[e(1055)]}),a("design:paramtypes",[])],t)}()},1047:function(t,n,e){"use strict";var o=e(99),r=e(1017);e.d(n,"a",function(){return i});var a=[{path:"",component:r.a}],i=o.c.forChild(a)},1054:function(t,n){t.exports=".yellowButton{\n  background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #f9efaf), color-stop(1, #f7e98d));\n  background:-moz-linear-gradient(top, #f9efaf 5%, #f7e98d 100%);\n  background:-webkit-linear-gradient(top, #f9efaf 5%, #f7e98d 100%);\n  background:-o-linear-gradient(top, #f9efaf 5%, #f7e98d 100%);\n  background:-ms-linear-gradient(top, #f9efaf 5%, #f7e98d 100%);\n  background:linear-gradient(to bottom, #f9efaf 5%, #f7e98d 100%);\n  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f9efaf', endColorstr='#f7e98d',GradientType=0);\n  background-color:#f9efaf;\n  -moz-border-radius:42px;\n  -webkit-border-radius:42px;\n  border-radius:42px;\n  display:inline-block;\n  cursor:pointer;\n  color:#d9633f;\n  font-family:Arial;\n  font-size:17px;\n  padding:16px 19px;\n  text-decoration:none;\n}\n.yellowButton:hover{\n  background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #f7e98d), color-stop(1, #f9efaf));\n  background:-moz-linear-gradient(top, #f7e98d 5%, #f9efaf 100%);\n  background:-webkit-linear-gradient(top, #f7e98d 5%, #f9efaf 100%);\n  background:-o-linear-gradient(top, #f7e98d 5%, #f9efaf 100%);\n  background:-ms-linear-gradient(top, #f7e98d 5%, #f9efaf 100%);\n  background:linear-gradient(to bottom, #f7e98d 5%, #f9efaf 100%);\n  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f7e98d', endColorstr='#f9efaf',GradientType=0);\n  background-color:#f7e98d;\n}\n.yellowButton:active{\n  position:relative;\n  top:1px;\n}\n.redButton{\n  background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #f9afaf), color-stop(1, #f78d8d));\n  background:-moz-linear-gradient(top, #f9afaf 5%, #f78d8d 100%);\n  background:-webkit-linear-gradient(top, #f9afaf 5%, #f78d8d 100%);\n  background:-o-linear-gradient(top, #f9afaf 5%, #f78d8d 100%);\n  background:-ms-linear-gradient(top, #f9afaf 5%, #f78d8d 100%);\n  background:linear-gradient(to bottom, #f9afaf 5%, #f78d8d 100%);\n  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f9afaf', endColorstr='#f78d8d',GradientType=0);\n  background-color:#f9afaf;\n  -moz-border-radius:42px;\n  -webkit-border-radius:42px;\n  border-radius:42px;\n  display:inline-block;\n  cursor:pointer;\n  color:#d9633f;\n  font-family:Arial;\n  font-size:17px;\n  padding:16px 19px;\n  text-decoration:none;\n}\n.redButton:hover{\n  background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #f78d8d), color-stop(1, #f9afaf));\n  background:-moz-linear-gradient(top, #f78d8d 5%, #f9afaf 100%);\n  background:-webkit-linear-gradient(top, #f78d8d 5%, #f9afaf 100%);\n  background:-o-linear-gradient(top, #f78d8d 5%, #f9afaf 100%);\n  background:-ms-linear-gradient(top, #f78d8d 5%, #f9afaf 100%);\n  background:linear-gradient(to bottom, #f78d8d 5%, #f9afaf 100%);\n  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f78d8d', endColorstr='#f9afaf',GradientType=0);\n  background-color:#f78d8d;\n}\n.redButton:active{\n  position:relative;\n  top:1px;\n}\n\n.greenButton{\n  background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #aff9b0), color-stop(1, #9ff78d));\n  background:-moz-linear-gradient(top, #aff9b0 5%, #9ff78d 100%);\n  background:-webkit-linear-gradient(top, #aff9b0 5%, #9ff78d 100%);\n  background:-o-linear-gradient(top, #aff9b0 5%, #9ff78d 100%);\n  background:-ms-linear-gradient(top, #aff9b0 5%, #9ff78d 100%);\n  background:linear-gradient(to bottom, #aff9b0 5%, #9ff78d 100%);\n  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#aff9b0', endColorstr='#9ff78d',GradientType=0);\n  background-color:#aff9b0;\n  -moz-border-radius:42px;\n  -webkit-border-radius:42px;\n  border-radius:42px;\n  display:inline-block;\n  cursor:pointer;\n  color:#d9633f;\n  font-family:Arial;\n  font-size:17px;\n  padding:16px 19px;\n  text-decoration:none;\n}\n.greenButton:hover{\n  background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #9ff78d), color-stop(1, #aff9b0));\n  background:-moz-linear-gradient(top, #9ff78d 5%, #aff9b0 100%);\n  background:-webkit-linear-gradient(top, #9ff78d 5%, #aff9b0 100%);\n  background:-o-linear-gradient(top, #9ff78d 5%, #aff9b0 100%);\n  background:-ms-linear-gradient(top, #9ff78d 5%, #aff9b0 100%);\n  background:linear-gradient(to bottom, #9ff78d 5%, #aff9b0 100%);\n  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#9ff78d', endColorstr='#aff9b0',GradientType=0);\n  background-color:#9ff78d;\n}\n.greenButton:active{\n  position:relative;\n  top:1px;\n}\n\n.blueButton{\n  background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #b2aff9), color-stop(1, #968df7));\n  background:-moz-linear-gradient(top, #b2aff9 5%, #968df7 100%);\n  background:-webkit-linear-gradient(top, #b2aff9 5%, #968df7 100%);\n  background:-o-linear-gradient(top, #b2aff9 5%, #968df7 100%);\n  background:-ms-linear-gradient(top, #b2aff9 5%, #968df7 100%);\n  background:linear-gradient(to bottom, #b2aff9 5%, #968df7 100%);\n  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#b2aff9', endColorstr='#968df7',GradientType=0);\n  background-color:#b2aff9;\n  -moz-border-radius:42px;\n  -webkit-border-radius:42px;\n  border-radius:42px;\n  display:inline-block;\n  cursor:pointer;\n  color:#d9633f;\n  font-family:Arial;\n  font-size:17px;\n  padding:16px 19px;\n  text-decoration:none;\n}\n.blueButton:hover{\n  background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #968df7), color-stop(1, #b2aff9));\n  background:-moz-linear-gradient(top, #968df7 5%, #b2aff9 100%);\n  background:-webkit-linear-gradient(top, #968df7 5%, #b2aff9 100%);\n  background:-o-linear-gradient(top, #968df7 5%, #b2aff9 100%);\n  background:-ms-linear-gradient(top, #968df7 5%, #b2aff9 100%);\n  background:linear-gradient(to bottom, #968df7 5%, #b2aff9 100%);\n  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#968df7', endColorstr='#b2aff9',GradientType=0);\n  background-color:#968df7;\n}\n.blueButton:active{\n  position:relative;\n  top:1px;\n}\n"},1055:function(t,n){t.exports="textarea{ \n  display:block;\n  padding:25px 25px 40px;\n  margin:0 auto 20px auto;\n  width:250px;\n  height:150px;   \n  font:20px 'Gloria Hallelujah', cursive; \n  line-height:1.5;\n  border:0;\n  border-radius:3px;\n  background:-webkit-linear-gradient(#F9EFAF, #F7E98D);\n  background:-moz-linear-gradient(#F9EFAF, #F7E98D);\n  background:-o-linear-gradient(#F9EFAF, #F7E98D);\n  background:-ms-linear-gradient(#F9EFAF, #F7E98D);\n  background:linear-gradient(#F9EFAF, #F7E98D);\n  box-shadow:0 4px 6px rgba(0,0,0,0.1);\n  overflow:hidden;\n  transition:box-shadow 0.5s ease;\n  font-smoothing:subpixel-antialiased;\n  max-width:520px;\n  max-height:250px;\n}\n\ntextarea.yellow-note{\n  background:-webkit-linear-gradient(#F9EFAF, #F7E98D);\n  background:-moz-linear-gradient(#F9EFAF, #F7E98D);\n  background:-o-linear-gradient(#F9EFAF, #F7E98D);\n  background:-ms-linear-gradient(#F9EFAF, #F7E98D);\n  background:linear-gradient(#F9EFAF, #F7E98D);  \n}\n\ntextarea.red-note{\n  background:-webkit-linear-gradient(#F9AFAF, #F78D8D);\n  background:-moz-linear-gradient(#F9AFAF, #F78D8D);\n  background:-o-linear-gradient(#F9AFAF, #F78D8D);\n  background:-ms-linear-gradient(#F9AFAF, #F78D8D);\n  background:linear-gradient(#F9AFAF, #F78D8D);  \n}\n\ntextarea.green-note{\n  background:-webkit-linear-gradient(#AFF9B0, #9FF78D);\n  background:-moz-linear-gradient(#AFF9B0, #9FF78D);\n  background:-o-linear-gradient(#AFF9B0, #9FF78D);\n  background:-ms-linear-gradient(#AFF9B0, #9FF78D);\n  background:linear-gradient(#AFF9B0, #9FF78D);  \n}\n\ntextarea.blue-note{\n  background:-webkit-linear-gradient(#B3AFF9, #968DF7);\n  background:-moz-linear-gradient(#B3AFF9, #968DF7);\n  background:-o-linear-gradient(#B3AFF9, #968DF7);\n  background:-ms-linear-gradient(#B3AFF9, #968DF7);\n  background:linear-gradient(#B3AFF9, #968DF7);  \n}\ntextarea:hover{ box-shadow:0 5px 8px rgba(0,0,0,0.15); }\ntextarea:focus{ box-shadow:0 5px 12px rgba(0,0,0,0.2); outline:none; }"},1056:function(t,n){t.exports="@import url(http://fonts.googleapis.com/css?family=Gloria+Hallelujah);\n*{ box-sizing:border-box; }\nhtml,body{\n        padding:0;\n        margin:0;\n        height:100%;\n        min-height:100%;\n      }\n\nbody{ background:url(http://subtlepatterns.com/patterns/little_pluses.png) #cacaca; }"},1061:function(t,n){t.exports="<a href='#' (click)=onClick($event) [ngClass] = \"colour + 'Button'\">+</a>"},1062:function(t,n){t.exports='<textarea \n  #noteText \n  [style.top.px] = "top"\n  [style.left.px] = "left"\n  (draggable)="handleChangeNotePosition($event)"\n  (blur)="handleChangeNoteText(noteText.value)" \n  [disabled] = "disabled"\n  [ngClass] = "colour + \'-note\'">{{text}}</textarea>\n\n    '},1063:function(t,n){t.exports='<div>\n  <add-button (add)="onAddNote($event)" colour="yellow"></add-button>\n  <add-button (add)="onAddNote($event)" colour="red"></add-button>\n  <add-button (add)="onAddNote($event)" colour="green"></add-button>\n  <add-button (add)="onAddNote($event)" colour="blue"></add-button>\n  <app-note *ngFor="let note of notes$ | async" \n  [text] = "note.text"\n  [colour] = "note.colour"\n  [left] = note.left\n  [top] = note.top\n  [disabled] = note.dirty\n  (changeNoteText) = "onChangeNoteText($event, note)"\n  (changeNotePosition) = "onChangeNotePosition($event, note)"></app-note>\n  {{notes$ | async | json}}\n</div>\n'},998:function(t,n,e){"use strict";var o=e(0),r=e(126),a=e(271),i=e(272),d=e(1036),f=e(1046),c=e(1045),l=e(1017),p=e(1047),u=e(173);e.d(n,"NotesModule",function(){return b});var s=this&&this.__decorate||function(t,n,e,o){var r,a=arguments.length,i=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,n,e,o);else for(var d=t.length-1;d>=0;d--)(r=t[d])&&(i=(a<3?r(i):a>3?r(n,e,i):r(n,e))||i);return a>3&&i&&Object.defineProperty(n,e,i),i},g=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},b=function(){function t(){}return t=s([e.i(o.NgModule)({imports:[u.a,p.a,r.c,a.c.run(d.a)],declarations:[l.a,f.a,c.a],providers:[i.a]}),g("design:paramtypes",[])],t)}()},999:function(t,n,e){"use strict";var o=e(2),r=e(174);o.Observable.prototype.withLatestFrom=r.withLatestFrom}});
//# sourceMappingURL=2.c671c0ea2ce5812a3308.bundle.map