"use strict";(self.webpackChunkcompaneros_de_viaje_app=self.webpackChunkcompaneros_de_viaje_app||[]).push([[592],{7266:(m,c,e)=>{e.d(c,{e:()=>o});var t=e(2340),u=e(8505),n=e(8256),r=e(529);const a=t.N.base_url;let o=(()=>{class l{constructor(i){this.http=i}get token(){return sessionStorage.getItem("token")??""}get hasToken(){return!!sessionStorage.getItem("token")}saveLocalStorage(i){sessionStorage.clear(),sessionStorage.setItem("token",i)}logout(){sessionStorage.removeItem("token")}login(i){return this.http.post(`${a}/api/auth/login`,i).pipe((0,u.b)(p=>{this.saveLocalStorage(p.token)}))}register(i){return this.http.post(`${a}/api/auth/register`,i).pipe((0,u.b)(p=>{this.saveLocalStorage(p.token)}))}}return l.\u0275fac=function(i){return new(i||l)(n.LFG(r.eN))},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},519:(m,c,e)=>{e.d(c,{Q:()=>u});var t=e(8256);let u=(()=>{class n{constructor(){this.firstNameAndLastNamePattern="([a-zA-Z]+) ([a-zA-Z]+)",this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"}isValidField(a,o){return a.controls[o].errors&&a.controls[o].touched}isFieldOneEqualFieldTwo(a,o){return l=>{const s=l.get(a)?.value,i=l.get(o)?.value;return s!==i?(l.get(o)?.setErrors({notEqual:!0}),{notEqual:!0}):(l.get(o)?.setErrors(null),null)}}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},950:(m,c,e)=>{e.d(c,{q:()=>a});var t=e(529),u=e(2340),n=e(8256);const r=u.N.base_url;let a=(()=>{class o{constructor(s){this.http=s}createGroup(s){return this.http.post(`${r}/travel-group/create`,s)}getGroups(){const s=(new t.LE).set("page","").set("size","").set("sort","id,DESC");return this.http.get(`${r}/travel-group/find-travel-group`,{params:s})}filterGroups(s,i,p,f){const h=(new t.LE).set("page","").set("size","").set("sort","id,DESC").set("destination",s).set("departureDate",i).set("returnDate",p).set("budget",f);return this.http.get(`${r}/travel-group/find-travel-group`,{params:h})}getGroupsWithoutTk(){return this.http.get(`${r}/travel-group/find-travel-group-no-login`)}getOwnerGroups(){return this.http.get(`${r}/travel-group/findByOwner`)}getDetailById(s){return this.http.get(`${r}/travel-group/${s}`)}joinOnGroup(s){const i=(new t.LE).set("groupId",`${s}`);return this.http.post(`${r}/travel-group/add-user`,null,{params:i})}leaveGroup(s){const i=(new t.LE).set("groupId",`${s}`);return this.http.put(`${r}/travel-group/leave-travel-group`,null,{params:i})}updateGroup(s,i){const p=(new t.LE).set("groupId",`${s}`);return this.http.put(`${r}/travel-group/update-travel-group`,i,{params:p})}}return o.\u0275fac=function(s){return new(s||o)(n.LFG(t.eN))},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},4722:(m,c,e)=>{e.d(c,{y:()=>u});var t=e(8256);let u=(()=>{class n{transform(a){const o=a?.indexOf("T");return void 0!==o&&-1!==o?a.substring(0,o).trim():a??""}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275pipe=t.Yjl({name:"extractDate",type:n,pure:!0}),n})()},9444:(m,c,e)=>{e.d(c,{D:()=>n});var t=e(6895),u=e(8256);let n=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=u.oAB({type:r}),r.\u0275inj=u.cJS({imports:[t.ez]}),r})()},4082:(m,c,e)=>{e.d(c,{x:()=>u});var t=e(8256);let u=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home-card"]],decls:22,vars:0,consts:[[1,"md:w-12","flex","md:align-items-center","md:justify-content-between","relative"],[1,"w-8","p-2","md:flex","md:align-items-start","md:justify-content-center"],["src","./assets/svg/venice.svg","alt","Logo",1,"bg-auto","bg-no-repeat"],[1,"md:w-6","flex","md:flex-column","md:align-items-center","md:justify-content-center"],[1,"md:w-12","md:align-items-start","md:justify-content-start"],[1,"md:w-8","md:align-items-start","md:justify-content-start"]],template:function(a,o){1&a&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"div",4)(5,"h1"),t._uU(6," Viajamos Diferentes "),t._UZ(7,"br"),t._uU(8," Recorremos En Grupos "),t.qZA()(),t.TgZ(9,"div",5)(10,"p"),t._uU(11," En Compa\xf1erosDeViaje, estamos convencidos de que viajar en grupo es una experiencia incomparable. "),t._UZ(12,"br"),t._uU(13,"No solo se trata de llegar a un destino, sino de compartir momentos \xfanicos "),t._UZ(14,"br"),t._uU(15," con personas que comparten tu pasi\xf3n por la aventura."),t._UZ(16,"br"),t._uU(17," Conoce gente nueva, crea amistades duraderas, descubre lugares incre\xedbles y sal de tu zona de confort. "),t._UZ(18,"br"),t._uU(19,"Cada viaje en grupo es una oportunidad para vivir experiencias "),t._UZ(20,"br"),t._uU(21," inolvidables que te acompa\xf1ar\xe1n para siempre. "),t.qZA()()()())},styles:["h1[_ngcontent-%COMP%]{font-size:xx-large}.button-su-li[_ngcontent-%COMP%]{padding:1.3em 3em;font-size:8px;margin:1px;text-transform:uppercase;letter-spacing:1.5px;font-weight:500;color:#fff;background-color:#00aaa7;border:none;border-radius:45px;box-shadow:0 8px 15px #0000001a;transition:all .3s ease 0s;cursor:pointer;outline:none}.button-su-li[_ngcontent-%COMP%]:hover{background-color:#00aaa7;box-shadow:0 15px 20px #00aaa7;color:#fff;transform:translateY(-7px)}"]}),n})()},6899:(m,c,e)=>{e.d(c,{w:()=>h});var t=e(8256),u=e(7266),n=e(6771),r=e(6895),a=e(5593),o=e(805),l=e(1493);function s(d,b){if(1&d){const g=t.EpF();t.TgZ(0,"p-button",21),t.NdJ("click",function(){t.CHM(g);const v=t.oxw();return t.KtG(v.displayLogout=!1)}),t.qZA(),t.TgZ(1,"p-button",22),t.NdJ("click",function(){t.CHM(g);const v=t.oxw();return t.KtG(v.onLogoutDialog())}),t.qZA()}}const i=function(d){return{hidden:d}},p=function(){return{width:"25vw"}},f=function(){return{"960px":"50vw"}};let h=(()=>{class d{constructor(g,_){this.authService=g,this.router=_,this.hasToke=!1,this.displayLogout=!1}ngOnInit(){}get showLogoutBtn(){return this.authService.hasToken}onSearch(){this.router.navigateByUrl(this.authService.hasToken?"/book/home":"/auth/login")}showLogoutDialog(){this.displayLogout=!0}onLogoutDialog(){sessionStorage.clear(),this.displayLogout=!1,this.router.navigateByUrl("/cdv/home")}}return d.\u0275fac=function(g){return new(g||d)(t.Y36(u.e),t.Y36(n.F0))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-nav-bar"]],decls:29,vars:17,consts:[["aria-label","Thirteenth navbar example",1,"navbar","navbar-expand-lg","bg-body-tertiary","rounded"],[1,"bg-white","py-3","px-2","sm:px-3","xl:px-4","shadow-1","flex","md:align-items-center","md:justify-content-between","relative"],[1,"w-3","font-bold","md:flex","md:align-items-center","md:justify-content-center"],["src","./assets/svg/log.svg","alt","Logo",1,"w-12"],["id","navbarsExample11",1,"w-6","font-bold","md:flex","md:align-items-center","md:justify-content-center"],["routerLink","/cdv/home",1,"button-nabvar"],[1,"button-nabvar",3,"click"],["routerLink","/cdv/about-us",1,"button-nabvar"],["routerLink","/cdv/contact",1,"button-nabvar"],[1,"w-3","font-bold","md:flex","md:align-items-center","md:justify-content-around"],["routerLink","/auth/login",1,"button-su-li",3,"ngClass"],["routerLink","/auth/new-account",1,"button-su-li",3,"ngClass"],["label","Logout","styleClass","p-button-sm p-button-outlined",3,"ngClass","onClick"],[3,"visible","breakpoints","draggable","resizable","visibleChange"],[1,"flex","flex-column","align-items-center","justify-content-center"],[1,"w-10","flex","align-items-center","justify-content-center","mb-3"],[1,"pi","pi-sign-out","text-cyan-300",2,"font-size","10rem"],[1,"w-10","flex","flex-column","align-items-center","justify-content-center"],[1,"text-lg","font-semibold","my-1"],[1,"text-500","my-1"],["pTemplate","footer"],["label","Cancelar","styleClass","p-button-sm p-button-outlined",3,"click"],["label","Cerrar Sesi\xf3n","styleClass","p-button-sm p-button-secondary",3,"click"]],template:function(g,_){1&g&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4)(5,"button",5),t._uU(6,"Inicio"),t.qZA(),t.TgZ(7,"button",6),t.NdJ("click",function(){return _.onSearch()}),t._uU(8,"Buscar"),t.qZA(),t.TgZ(9,"button",7),t._uU(10," Sobre Nosotros "),t.qZA(),t.TgZ(11,"button",8),t._uU(12,"Contacto"),t.qZA()(),t.TgZ(13,"div",9)(14,"button",10),t._uU(15," Inicar sesion "),t.qZA(),t.TgZ(16,"button",11),t._uU(17," Registrarse "),t.qZA(),t.TgZ(18,"p-button",12),t.NdJ("onClick",function(){return _.showLogoutDialog()}),t.qZA()()()(),t.TgZ(19,"p-dialog",13),t.NdJ("visibleChange",function(E){return _.displayLogout=E}),t.TgZ(20,"div",14)(21,"div",15),t._UZ(22,"i",16),t.qZA(),t.TgZ(23,"div",17)(24,"p",18),t._uU(25,"\xbfCerrar Sesi\xf3n?"),t.qZA(),t.TgZ(26,"p",19),t._uU(27,"Desea terminar su sesi\xf3n"),t.qZA()()(),t.YNc(28,s,2,0,"ng-template",20),t.qZA()),2&g&&(t.xp6(14),t.Q6J("ngClass",t.VKq(9,i,_.showLogoutBtn)),t.xp6(2),t.Q6J("ngClass",t.VKq(11,i,_.showLogoutBtn)),t.xp6(2),t.Q6J("ngClass",t.VKq(13,i,!_.showLogoutBtn)),t.xp6(1),t.Akn(t.DdM(15,p)),t.Q6J("visible",_.displayLogout)("breakpoints",t.DdM(16,f))("draggable",!1)("resizable",!1))},dependencies:[r.mk,a.zx,o.jx,n.rH,l.V],styles:[".button-nabvar[_ngcontent-%COMP%]{background-color:#fff;color:#000;border-radius:10em;font-size:13px;font-weight:600;padding:1em 2em;letter-spacing:1.5px;margin:4px;cursor:pointer;transition:all .3s ease-in-out;border:1px;box-shadow:0 0 #000}.button-nabvar[_ngcontent-%COMP%]:hover{transform:translateY(-4px) translate(-2px);box-shadow:2px 5px #00aaa7}.button-nabvar[_ngcontent-%COMP%]:active{transform:translateY(2px) translate(1px);box-shadow:0 0 #000}.button-su-li[_ngcontent-%COMP%]{padding:1.3em 3em;font-size:8px;margin:1px;text-transform:uppercase;letter-spacing:1.5px;font-weight:500;color:#000;background-color:#fff;border:none;border-radius:45px;box-shadow:0 8px 15px #0000001a;transition:all .3s ease 0s;cursor:pointer;outline:none}.button-su-li[_ngcontent-%COMP%]:hover{background-color:#00aaa7;box-shadow:0 15px 20px #00aaa7;color:#fff;transform:translateY(-7px)}"]}),d})()},4466:(m,c,e)=>{e.d(c,{m:()=>a});var t=e(6895),u=e(433),n=e(9631),r=e(8256);let a=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[t.ez,u.u5,n.g]}),o})()}}]);