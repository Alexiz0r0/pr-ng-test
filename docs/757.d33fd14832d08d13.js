"use strict";(self.webpackChunkcompaneros_de_viaje_app=self.webpackChunkcompaneros_de_viaje_app||[]).push([[757],{757:(N,y,s)=>{s.r(y),s.d(y,{AuthModule:()=>M});var p=s(6895),F=s(529),l=s(6771),e=s(8256);let k=(()=>{class t{constructor(r){this.router=r}onClick(){this.router.navigateByUrl("/cdv/home")}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(l.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["auth-header"]],decls:2,vars:0,consts:[[1,"bg-white","py-3","px-3","sm:px-6","xl:px-8","shadow-1","flex","align-items-center","justify-content-center","relative","cursor-pointer",3,"click"],["src","./assets/svg/log.svg","alt","Logo",1,"h-4rem"]],template:function(r,n){1&r&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return n.onClick()}),e._UZ(1,"img",1),e.qZA())}}),t})(),A=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-layout"]],decls:3,vars:0,consts:[[1,"content"]],template:function(r,n){1&r&&(e._UZ(0,"auth-header"),e.TgZ(1,"div",0),e._UZ(2,"router-outlet"),e.qZA())},dependencies:[l.lC,k],styles:[".content[_ngcontent-%COMP%]{height:calc(100vh - 96px)}"]}),t})();var o=s(433),T=s(7579);let f=(()=>{class t{constructor(){this.credential={name:"",username:"",email:"",password:""},this.credential$=new T.x}saveCredential(r){this.credential=r,this.credential$.next(r)}get gCredential(){return this.credential}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var h=s(519),x=s(7266),Z=s(8521),g=s(5593),c=s(1740),C=s(3425);const w=function(t){return{"p-error block":t}};let U=(()=>{class t{constructor(r,n,a,d,v,b){this.fb=r,this.registerService=n,this.router=a,this.formValidator=d,this.authService=v,this.toastService=b,this.loginForm=this.fb.group({username:["",[o.kI.required]],password:["",[o.kI.required]]})}ngOnInit(){sessionStorage.removeItem("token")}isValidField(r){return this.formValidator.isValidField(this.loginForm,r)}onLogin(){if(this.loginForm.invalid)return this.loginForm.markAllAsTouched(),void this.markDirty();this.authService.login(this.loginForm.value).subscribe({next:()=>{this.loginForm.reset(),this.toastService.showToast("success","Service Message","Inicio de sesi\xf3n exitoso."),this.router.navigateByUrl("/book/home")},error:r=>{this.loginForm.reset(),this.toastService.showToast("error","Service Message","Los datos ingresados no son v\xe1lidos.")}})}markDirty(){this.loginForm.get("username")?.markAsDirty(),this.loginForm.get("password")?.markAsDirty()}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(o.qu),e.Y36(f),e.Y36(l.F0),e.Y36(h.Q),e.Y36(x.e),e.Y36(Z.k))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login-page"]],decls:32,vars:9,consts:[[1,"py-3","px-3","sm:px-6","xl:px-8","flex","flex-wrap","align-items-center","justify-content-center"],[1,"w-12","py-2"],[1,"text-center","text-900","text-3xl","font-semibold"],[1,"w-8","flex","flex-wrap","align-items-center","justify-content-center"],[1,"w-6","py-4"],[1,"h-30rem","w-full","flex","align-items-center","justify-content-end","border-round-2xl","overflow-hidden"],["src","https://cdn.pixabay.com/photo/2021/08/18/14/13/paragliding-6555664_1280.jpg","alt","Logo",1,"bg-auto","bg-no-repeat"],[1,"w-6","p-5"],[1,"w-full"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"text-800","font-medium","py-2"],["for","email1",1,"block","text-900","font-medium","py-2"],["id","email1","type","text","pInputText","","formControlName","username",1,"w-full","mb-1"],["id","username",1,"hidden",3,"ngClass"],["for","password1",1,"block","text-900","font-medium","py-2"],["id","password1","styleClass","w-full mb-1","formControlName","password",3,"toggleMask","feedback"],["id","password1",1,"hidden",3,"ngClass"],[1,"flex","align-items-center","justify-content-end","my-3"],["routerLink","/auth/reset-pass",1,"font-medium","no-underline","ml-2","text-right","cursor-pointer","text-cyan-500"],["pButton","","pRipple","","label","Ingresar","type","submit",1,"w-full"],[1,"text-center","my-3"],[1,"text-600","font-medium","line-height-3"],["routerLink","/auth/new-account",1,"font-medium","no-underline","ml-2","cursor-pointer","text-cyan-500"]],template:function(r,n){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3,"Ingresar"),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5),e._UZ(7,"img",6),e.qZA()(),e.TgZ(8,"div",7)(9,"div",8)(10,"form",9),e.NdJ("ngSubmit",function(){return n.onLogin()}),e.TgZ(11,"div",10)(12,"label",11),e._uU(13,"Username"),e.qZA(),e._UZ(14,"input",12),e.TgZ(15,"small",13),e._uU(16,"Por favor, ingresa su username."),e.qZA()(),e.TgZ(17,"div",10)(18,"label",14),e._uU(19,"Contrase\xf1a"),e.qZA(),e._UZ(20,"p-password",15),e.TgZ(21,"small",16),e._uU(22,"Por favor, ingresa su contrase\xf1a."),e.qZA()(),e.TgZ(23,"div",17)(24,"a",18),e._uU(25,"Olvide mi contrase\xf1a"),e.qZA()(),e._UZ(26,"button",19),e.qZA(),e.TgZ(27,"div",20)(28,"span",21),e._uU(29,"\xbfA\xfan no tenes una cuenta?"),e.qZA(),e.TgZ(30,"a",22),e._uU(31,"Registrarse"),e.qZA()()()()()()),2&r&&(e.xp6(10),e.Q6J("formGroup",n.loginForm),e.xp6(5),e.Q6J("ngClass",e.VKq(5,w,n.isValidField("username"))),e.xp6(5),e.Q6J("toggleMask",!0)("feedback",!0),e.xp6(1),e.Q6J("ngClass",e.VKq(7,w,n.isValidField("password"))))},dependencies:[p.mk,l.yS,g.Hq,c.o,C.ro,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u],styles:["[_nghost-%COMP%]     .p-button{color:#fff;background:#00a0b1;border:1px solid #00a0b1}[_nghost-%COMP%]     .p-button:enabled:hover{background:#007d8a;border-color:#007d8a}[_nghost-%COMP%]     .p-password input{width:100%}"]}),t})();const u=function(t){return{"p-error block":t}};let q=(()=>{class t{constructor(r,n,a,d){this.fb=r,this.registerService=n,this.router=a,this.formValidator=d,this.credential={name:"",username:"",email:"",password:""},this.registerForm=this.fb.group({name:["",[o.kI.required,o.kI.pattern(this.formValidator.firstNameAndLastNamePattern)]],username:["",[o.kI.required]],email:["",[o.kI.required,o.kI.pattern(this.formValidator.emailPattern)]],pwd:["",[o.kI.required,o.kI.minLength(8)]],pwd2:["",[o.kI.required,o.kI.minLength(8)]]},{validators:[this.formValidator.isFieldOneEqualFieldTwo("pwd","pwd2")]})}isValidField(r){return this.formValidator.isValidField(this.registerForm,r)}onRegister(){if(this.registerForm.invalid)return this.registerForm.markAllAsTouched(),void this.markDirty();const{name:r,username:n,email:a,pwd:d}=this.registerForm.value;this.credential.name=r,this.credential.email=a,this.credential.password=d,this.credential.username=n,this.registerService.saveCredential(this.credential),this.router.navigateByUrl("auth/profile-register")}markDirty(){this.registerForm.get("name")?.markAsDirty(),this.registerForm.get("username")?.markAsDirty(),this.registerForm.get("email")?.markAsDirty(),this.registerForm.get("pwd")?.markAsDirty(),this.registerForm.get("pwd2")?.markAsDirty()}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(o.qu),e.Y36(f),e.Y36(l.F0),e.Y36(h.Q))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-register-page"]],decls:48,vars:19,consts:[[1,"py-3","px-3","sm:px-6","xl:px-8","flex","flex-wrap","align-items-center","justify-content-center","relative"],[1,"w-12","py-2"],[1,"text-center","text-900","text-3xl","font-semibold"],[1,"w-8","flex","flex-wrap","align-items-center","justify-content-center"],[1,"w-6","py-4"],[1,"h-30rem","w-full","flex","align-items-center","justify-content-end","border-round-2xl","overflow-hidden"],["src","https://cdn.pixabay.com/photo/2013/01/11/01/22/landscape-74572_1280.jpg","alt","Logo",1,"bg-auto","bg-no-repeat"],[1,"w-6","p-5"],[1,"w-full"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"text-800","font-medium","py-2"],["for","fullName",1,"block","text-900","font-medium","py-2"],["id","fullName","type","text","aria-describedby","fullName","pInputText","","formControlName","name",1,"w-12"],["id","fullName",1,"hidden",3,"ngClass"],["for","username",1,"block","text-900","font-medium","py-2"],["id","username","type","text","aria-describedby","username","pInputText","","formControlName","username",1,"w-12"],["id","username",1,"hidden",3,"ngClass"],["for","email",1,"block","text-900","font-medium","py-2"],["id","email","type","text","aria-describedby","email","pInputText","","formControlName","email",1,"w-12"],["id","email",1,"hidden",3,"ngClass"],["for","pwd",1,"block","text-900","font-medium","py-2"],["id","pwd","styleClass","w-full","formControlName","pwd",3,"toggleMask","feedback"],["id","pwd",1,"hidden",3,"ngClass"],["for","pwd2",1,"block","text-900","font-medium","py-2"],["id","pwd2","styleClass","w-full","formControlName","pwd2",3,"toggleMask"],["id","pwd2",1,"hidden",3,"ngClass"],[1,"w-12","my-3"],["pButton","","pRipple","","label","Continuar","type","submit",1,"w-full"],[1,"text-center","my-3"],[1,"text-600","font-medium","line-height-3"],["routerLink","/auth/login",1,"font-medium","no-underline","ml-2","text-cyan-500","cursor-pointer"]],template:function(r,n){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3,"Registro"),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5),e._UZ(7,"img",6),e.qZA()(),e.TgZ(8,"div",7)(9,"div",8)(10,"form",9),e.NdJ("ngSubmit",function(){return n.onRegister()}),e.TgZ(11,"div",10)(12,"label",11),e._uU(13,"Nombre Completo"),e.qZA(),e._UZ(14,"input",12),e.TgZ(15,"small",13),e._uU(16,"Por favor, ingresa tu nombre y apellido completos."),e.qZA()(),e.TgZ(17,"div",10)(18,"label",14),e._uU(19,"Username"),e.qZA(),e._UZ(20,"input",15),e.TgZ(21,"small",16),e._uU(22,"Es necesario llenar este campo."),e.qZA()(),e.TgZ(23,"div",10)(24,"label",17),e._uU(25,"Email"),e.qZA(),e._UZ(26,"input",18),e.TgZ(27,"small",19),e._uU(28,"El correo electr\xf3nico ingresado no es v\xe1lido."),e.qZA()(),e.TgZ(29,"div",10)(30,"label",20),e._uU(31,"Contrase\xf1a"),e.qZA(),e._UZ(32,"p-password",21),e.TgZ(33,"small",22),e._uU(34,"La contrase\xf1a debe ser mayor de 8 caracteres."),e.qZA()(),e.TgZ(35,"div",10)(36,"label",23),e._uU(37,"Confirmar contrase\xf1a"),e.qZA(),e._UZ(38,"p-password",24),e.TgZ(39,"small",25),e._uU(40,"Las contrase\xf1as deben de ser iguales."),e.qZA()(),e.TgZ(41,"div",26),e._UZ(42,"button",27),e.qZA()(),e.TgZ(43,"div",28)(44,"span",29),e._uU(45,"\xbfYa tenes una cuenta?"),e.qZA(),e.TgZ(46,"a",30),e._uU(47,"Ingresar"),e.qZA()()()()()()),2&r&&(e.xp6(10),e.Q6J("formGroup",n.registerForm),e.xp6(5),e.Q6J("ngClass",e.VKq(9,u,n.isValidField("name"))),e.xp6(6),e.Q6J("ngClass",e.VKq(11,u,n.isValidField("username"))),e.xp6(6),e.Q6J("ngClass",e.VKq(13,u,n.isValidField("email"))),e.xp6(5),e.Q6J("toggleMask",!0)("feedback",!0),e.xp6(1),e.Q6J("ngClass",e.VKq(15,u,n.isValidField("pwd"))),e.xp6(5),e.Q6J("toggleMask",!0),e.xp6(1),e.Q6J("ngClass",e.VKq(17,u,n.isValidField("pwd2"))))},dependencies:[p.mk,l.yS,g.Hq,c.o,C.ro,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u],styles:["[_nghost-%COMP%]     .p-button{color:#fff;background:#00a0b1;border:1px solid #00a0b1}[_nghost-%COMP%]     .p-button:enabled:hover{background:#007d8a;border-color:#007d8a}[_nghost-%COMP%]     .p-password input{width:100%}"]}),t})(),P=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-reset-pass-page"]],decls:12,vars:0,consts:[[1,"py-3","px-3","sm:px-6","xl:px-8","flex","flex-wrap","align-items-center","justify-content-center","relative"],[1,"w-4","py-2"],[1,"text-center","mb-5"],[1,"text-900","text-3xl","font-medium","mb-3"],[1,"text-600","font-medium","line-height-3"],["for","email1",1,"block","text-900","font-medium","mb-2"],["id","email1","type","text","pInputText","",1,"w-full","mb-3"],["pButton","","pRipple","","label","Enviar enlace","routerLink","/cdv",1,"w-full"]],template:function(r,n){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._uU(4," \xbfOlvido su contrase\xf1a? "),e.qZA(),e.TgZ(5,"span",4),e._uU(6,"Para recuperar su contrase\xf1a, ingrese su email y le enviaremos una nueva "),e.qZA()(),e.TgZ(7,"div")(8,"label",5),e._uU(9,"Correo Email"),e.qZA(),e._UZ(10,"input",6)(11,"button",7),e.qZA()()())},dependencies:[l.rH,g.Hq,c.o],styles:[".login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}[_nghost-%COMP%]     .p-button{color:#fff;background:#00a0b1;border:1px solid #00a0b1}[_nghost-%COMP%]     .p-button:enabled:hover{background:#007d8a;border-color:#007d8a}"]}),t})();var _=s(2210),R=s(5722),S=s(3520),V=s(585);const m=function(t){return{"p-error block":t}},J=[{path:"",component:A,children:[{path:"login",component:U},{path:"new-account",component:q},{path:"profile-register",component:(()=>{class t{constructor(r,n,a,d,v,b){this.registerService=r,this.fb=n,this.formValidator=a,this.authService=d,this.router=v,this.toastService=b,this.pRegForm=this.fb.group({address:["",[o.kI.required,o.kI.minLength(8)]],birthDate:["",[o.kI.required]],phoneNumber:["",o.kI.required],gender:["",o.kI.required],country:["",o.kI.required],interest:["",o.kI.required]}),this.credential={name:"",username:"",email:"",password:""},this.genders=[{name:"HOMBRE"},{name:"MUJER"}],this.country=[{name:"Argentina"}],this.personal=[{name:"Playas"},{name:"Monta\xf1as"},{name:"Rios"},{name:"Eventos deportivos"},{name:"Eventos musicales"},{name:"turismo urbano"},{name:"Turismo nocturno"}]}ngOnInit(){this.registerService.credential$.subscribe()}get gCredential(){return this.registerService.gCredential}isValidField(r){return this.formValidator.isValidField(this.pRegForm,r)}onSubmit(){if(this.pRegForm.invalid)return this.pRegForm.markAllAsTouched(),void this.markDirty();const r={...this.gCredential,...this.pRegForm.value,role:"ROLE_USER"};this.authService.register(r).subscribe({next:()=>{this.pRegForm.reset(),this.toastService.showToast("success","Service Message","Registro exitoso."),this.router.navigateByUrl("/book/home")},error:n=>{this.toastService.showToast("error","Service Message","Los datos ingresados no son v\xe1lidos."),this.router.navigateByUrl("/auth/new-account")}})}markDirty(){this.pRegForm.get("address")?.markAsDirty(),this.pRegForm.get("birthDate")?.markAsDirty(),this.pRegForm.get("phoneNumber")?.markAsDirty(),this.pRegForm.get("gender")?.markAsDirty(),this.pRegForm.get("country")?.markAsDirty(),this.pRegForm.get("interest")?.markAsDirty()}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(f),e.Y36(o.qu),e.Y36(h.Q),e.Y36(x.e),e.Y36(l.F0),e.Y36(Z.k))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-profile-reg-page"]],decls:49,vars:22,consts:[[1,"pt-3","px-3","sm:px-6","xl:px-8","flex","flex-wrap","align-items-center","justify-content-center","relative"],[1,"w-12","py-2"],[1,"text-center","text-900","text-3xl","font-semibold"],[1,"w-8","flex","flex-wrap","align-items-center","justify-content-center"],[1,"w-6","py-4"],[1,"h-30rem","w-full","flex","align-items-center","justify-content-end","border-round-2xl","overflow-hidden"],["src","\thttps://cdn.pixabay.com/photo/2015/11/24/15/05/argentina-1060154_640.jpg","alt","Logo",1,"bg-auto","bg-no-repeat"],[1,"w-6","p-5"],[1,"p-4","w-full"],["autocomplete","off",3,"formGroup","submit"],[1,"text-800","font-medium","py-2"],["for","address",1,"block","text-900","font-medium","py-2"],["id","address","type","text","aria-describedby","address","pInputText","","formControlName","address",1,"w-12"],["id","address",1,"hidden",3,"ngClass"],["for","birthdate",1,"block","text-900","font-medium","py-2"],["id","birthdate","aria-describedby","birthdate","dateFormat","yy-mm-dd","inputId","dateformat","formControlName","birthDate","dataType","string","styleClass","w-full"],["id","birthdate",1,"hidden",3,"ngClass"],["for","phone",1,"block","text-900","font-medium","py-2"],["id","phone","mask","99-9999-9999","placeholder","99-9999-9999","formControlName","phoneNumber","styleClass","w-full"],["id","phone",1,"hidden",3,"ngClass"],["for","gender",1,"block","text-900","font-medium","py-2"],["placeholder","Select","optionLabel","name","optionValue","name","formControlName","gender","styleClass","w-full",3,"options"],["id","gender",1,"hidden",3,"ngClass"],["for","country",1,"block","text-900","font-medium","py-2"],["placeholder","Select","optionLabel","name","formControlName","country","styleClass","w-full",3,"options"],["id","country",1,"hidden",3,"ngClass"],["for","interest",1,"block","text-900","font-medium","py-2"],["defaultLabel","Select","optionLabel","name","selectedItemsLabel","{0} items selected","formControlName","interest","styleClass","w-full",3,"options"],["id","interest",1,"hidden",3,"ngClass"],[1,"text-center","my-3"],["pButton","","pRipple","","label","Finalizar","type","submit",1,"w-full"]],template:function(r,n){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3," Completa algunos datos tuyos "),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5),e._UZ(7,"img",6),e.qZA()(),e.TgZ(8,"div",7)(9,"div",8)(10,"form",9),e.NdJ("submit",function(){return n.onSubmit()}),e.TgZ(11,"div",10)(12,"label",11),e._uU(13,"Direcci\xf3n"),e.qZA(),e._UZ(14,"input",12),e.TgZ(15,"small",13),e._uU(16,"Por favor, ingresa su direcci\xf3n."),e.qZA()(),e.TgZ(17,"div",10)(18,"label",14),e._uU(19,"Fecha Nacimiento"),e.qZA(),e._UZ(20,"p-calendar",15),e.TgZ(21,"small",16),e._uU(22,"Por favor, ingresa su fecha de nacimiento."),e.qZA()(),e.TgZ(23,"div",10)(24,"label",17),e._uU(25,"Numero de tel\xe9fono"),e.qZA(),e._UZ(26,"p-inputMask",18),e.TgZ(27,"small",19),e._uU(28,"Por favor, ingresa su numero de tel\xe9fono."),e.qZA()(),e.TgZ(29,"div",10)(30,"label",20),e._uU(31,"Sexo"),e.qZA(),e._UZ(32,"p-dropdown",21),e.TgZ(33,"small",22),e._uU(34,"Este campo es obligatorio."),e.qZA()(),e.TgZ(35,"div",10)(36,"label",23),e._uU(37,"Pa\xeds"),e.qZA(),e._UZ(38,"p-dropdown",24),e.TgZ(39,"small",25),e._uU(40,"Este campo es obligatorio."),e.qZA()(),e.TgZ(41,"div",10)(42,"label",26),e._uU(43,"Intereses"),e.qZA(),e._UZ(44,"p-multiSelect",27),e.TgZ(45,"small",28),e._uU(46,"Este campo es obligatorio."),e.qZA()(),e.TgZ(47,"div",29),e._UZ(48,"button",30),e.qZA()()()()()()),2&r&&(e.xp6(10),e.Q6J("formGroup",n.pRegForm),e.xp6(5),e.Q6J("ngClass",e.VKq(10,m,n.isValidField("address"))),e.xp6(6),e.Q6J("ngClass",e.VKq(12,m,n.isValidField("birthDate"))),e.xp6(6),e.Q6J("ngClass",e.VKq(14,m,n.isValidField("phoneNumber"))),e.xp6(5),e.Q6J("options",n.genders),e.xp6(1),e.Q6J("ngClass",e.VKq(16,m,n.isValidField("gender"))),e.xp6(5),e.Q6J("options",n.country),e.xp6(1),e.Q6J("ngClass",e.VKq(18,m,n.isValidField("country"))),e.xp6(5),e.Q6J("options",n.personal),e.xp6(1),e.Q6J("ngClass",e.VKq(20,m,n.isValidField("interest"))))},dependencies:[p.mk,g.Hq,c.o,_.Lt,R.NU,S.vy,V.f,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u],styles:[".login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]     .p-button{color:#fff;background:#00a0b1;border:1px solid #00a0b1}[_nghost-%COMP%]     .p-button:enabled:hover{background:#007d8a;border-color:#007d8a}[_nghost-%COMP%]     .p-password input{width:100%}"]}),t})()},{path:"reset-pass",component:P},{path:"**",redirectTo:"login"}]}];let I=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(J),l.Bz]}),t})();var L=s(9631);let M=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,I,L.g,o.u5,F.JF,o.UX]}),t})()}}]);