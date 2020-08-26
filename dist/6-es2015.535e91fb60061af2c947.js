(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+P1L":function(e,t,n){"use strict";n.r(t);var r=n("3Pt+"),s=n("RS3s"),o=n("vTDv"),a=n("tyNb"),i=n("fXoL");let l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Lb({type:e,selectors:[["ngx-users"]],decls:1,vars:0,template:function(e,t){1&e&&i.Sb(0,"router-outlet")},directives:[a.h],encapsulation:2}),e})();var u=n("HDdC"),h=n("XNiG"),m=n("1G5W"),c=n("2NI8"),g=n("Cgdg"),d=n("McNs"),b=n("dwCd"),p=n("aceb"),f=n("6edl"),C=function(e){return e.VIEW="View",e.EDIT="Edit",e.ADD="Add",e.EDIT_SELF="EditSelf",e}({});let w=(()=>{class e{constructor(e,t,n,r,s,o,a){this.usersService=e,this.router=t,this.route=n,this.tokenService=r,this.userStore=s,this.toasterService=o,this.fb=a,this.unsubscribe$=new h.a}get firstName(){return this.userForm.get("firstName")}get lastName(){return this.userForm.get("lastName")}get login(){return this.userForm.get("login")}get email(){return this.userForm.get("email")}get age(){return this.userForm.get("age")}get street(){return this.userForm.get("address").get("street")}get city(){return this.userForm.get("address").get("city")}get zipCode(){return this.userForm.get("address").get("zipCode")}setViewMode(e){this.mode=e}ngOnInit(){this.initUserForm(),this.loadUserData()}initUserForm(){this.userForm=this.fb.group({id:this.fb.control(""),role:this.fb.control(""),firstName:this.fb.control("",[r.x.minLength(3),r.x.maxLength(20)]),lastName:this.fb.control("",[r.x.minLength(3),r.x.maxLength(20)]),login:this.fb.control("",[r.x.required,r.x.minLength(6),r.x.maxLength(20)]),age:this.fb.control("",[r.x.required,r.x.min(1),r.x.max(120),r.x.pattern(g.b)]),email:this.fb.control("",[r.x.required,r.x.pattern(g.a)]),address:this.fb.group({street:this.fb.control(""),city:this.fb.control(""),zipCode:this.fb.control("")})})}get canEdit(){return this.mode!==C.VIEW}loadUserData(){const e=parseInt(this.route.snapshot.paramMap.get("id"),10);if(this.route.snapshot.queryParamMap.get("profile"))this.setViewMode(C.EDIT_SELF),this.loadUser();else if(e){const t=this.userStore.getUser().id;this.setViewMode(t===e?C.EDIT_SELF:C.EDIT),this.loadUser(e)}else this.setViewMode(C.ADD)}loadUser(e){(this.mode===C.EDIT_SELF?this.usersService.getCurrentUser():this.usersService.get(e)).pipe(Object(m.a)(this.unsubscribe$)).subscribe(e=>{this.userForm.setValue({id:e.id,role:e.role?e.role:"",firstName:e.firstName?e.firstName:"",lastName:e.lastName?e.lastName:"",login:e.login?e.login:"",age:e.age?e.age:"",email:e.email,address:{street:e.address&&e.address.street?e.address.street:"",city:e.address&&e.address.city?e.address.city:"",zipCode:e.address&&e.address.zipCode?e.address.zipCode:""}})})}convertToUser(e){return e}save(){const e=this.convertToUser(this.userForm.value);let t=new u.a;this.mode===C.EDIT_SELF?this.usersService.updateCurrent(e).subscribe(e=>{this.tokenService.set(new d.f(e,"email",new Date)),this.handleSuccessResponse()},e=>{this.handleWrongResponse()}):t=e.id?this.usersService.update(e):this.usersService.create(e),t.pipe(Object(m.a)(this.unsubscribe$)).subscribe(()=>{this.handleSuccessResponse()},e=>{this.handleWrongResponse()})}handleSuccessResponse(){this.toasterService.success("",`Item ${this.mode===C.ADD?"created":"updated"}!`),this.back()}handleWrongResponse(){this.toasterService.danger("","This email has already taken!")}back(){this.router.navigate(["/pages"])}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}}return e.\u0275fac=function(t){return new(t||e)(i.Rb(c.a),i.Rb(a.c),i.Rb(a.a),i.Rb(d.j),i.Rb(b.a),i.Rb(p.fb),i.Rb(r.c))},e.\u0275cmp=i.Lb({type:e,selectors:[["ngx-user"]],decls:47,vars:21,consts:[[1,"container",3,"formGroup"],[1,"form-group"],["for","firstName"],["nbInput","","id","firstName","formControlName","firstName","placeholder","Last Name",1,"form-control",3,"status"],["label","First Name","minLength","3","maxLength","20",3,"showMinLength","showMaxLength"],["for","lastName"],["nbInput","","id","lastName","formControlName","lastName","placeholder","Last Name",1,"form-control",3,"status"],["label","Last Name","minLength","3","maxLength","20",3,"showMinLength","showMaxLength"],["for","inputLogin"],["nbInput","","id","inputLogin","formControlName","login","placeholder","Login",1,"form-control",3,"status"],["label","Login","minLength","6","maxLength","20",3,"showMinLength","showMaxLength","showRequired"],["for","inputAge"],["nbInput","","id","inputAge","formControlName","age","placeholder","Age",1,"form-control",3,"status"],["label","Age","min","1","max","120",3,"showMin","showMax","showRequired","showPattern"],["for","inputEmail"],["nbInput","","id","inputEmail","formControlName","email","placeholder","Email",1,"form-control",3,"status"],["label","Email","min","1","max","120",3,"showPattern","showRequired"],["formGroupName","address",1,"form-group"],["for","inputStreet"],["nbInput","","id","inputStreet","placeholder","Street","formControlName","street",1,"form-control"],["for","inputCity"],["nbInput","","id","inputCity","placeholder","City","formControlName","city",1,"form-control"],["for","inputZipCode"],["nbInput","","id","inputZipCode","placeholder","Zip Code","formControlName","zipCode",1,"form-control"],["nbButton","","status","primary","hero","",3,"disabled","click"],["nbButton","","status","info","hero","",3,"click"]],template:function(e,t){1&e&&(i.Xb(0,"nb-card"),i.Xb(1,"nb-card-header"),i.Dc(2),i.Wb(),i.Xb(3,"nb-card-body"),i.Xb(4,"div",0),i.Xb(5,"div",1),i.Xb(6,"label",2),i.Dc(7,"First Name"),i.Wb(),i.Sb(8,"input",3),i.Sb(9,"ngx-validation-message",4),i.Wb(),i.Xb(10,"div",1),i.Xb(11,"label",5),i.Dc(12,"Last Name"),i.Wb(),i.Sb(13,"input",6),i.Sb(14,"ngx-validation-message",7),i.Wb(),i.Xb(15,"div",1),i.Xb(16,"label",8),i.Dc(17,"Login"),i.Wb(),i.Sb(18,"input",9),i.Sb(19,"ngx-validation-message",10),i.Wb(),i.Xb(20,"div",1),i.Xb(21,"label",11),i.Dc(22,"Age"),i.Wb(),i.Sb(23,"input",12),i.Sb(24,"ngx-validation-message",13),i.Wb(),i.Xb(25,"div",1),i.Xb(26,"label",14),i.Dc(27,"Email"),i.Wb(),i.Sb(28,"input",15),i.Sb(29,"ngx-validation-message",16),i.Wb(),i.Xb(30,"div",17),i.Xb(31,"label",18),i.Dc(32,"Street"),i.Wb(),i.Sb(33,"input",19),i.Wb(),i.Xb(34,"div",17),i.Xb(35,"label",20),i.Dc(36,"City"),i.Wb(),i.Sb(37,"input",21),i.Wb(),i.Xb(38,"div",17),i.Xb(39,"label",22),i.Dc(40,"Zip Code"),i.Wb(),i.Sb(41,"input",23),i.Wb(),i.Wb(),i.Wb(),i.Xb(42,"nb-card-footer"),i.Xb(43,"button",24),i.fc("click",(function(){return t.save()})),i.Dc(44,"Submit"),i.Wb(),i.Xb(45,"button",25),i.fc("click",(function(){return t.back()})),i.Dc(46,"Back"),i.Wb(),i.Wb(),i.Wb()),2&e&&(i.Eb(2),i.Fc("",t.mode," user"),i.Eb(2),i.nc("formGroup",t.userForm),i.Eb(4),i.nc("status",null!=t.firstName&&t.firstName.hasError("minLength")||null!=t.firstName&&t.firstName.hasError("maxLength")?"danger":"primary"),i.Eb(1),i.nc("showMinLength",null==t.firstName?null:t.firstName.hasError("minLength"))("showMaxLength",null==t.firstName?null:t.firstName.hasError("maxLength")),i.Eb(4),i.nc("status",null!=t.lastName&&t.lastName.hasError("minLength")||null!=t.lastName&&t.lastName.hasError("maxLength")?"danger":"primary"),i.Eb(1),i.nc("showMinLength",null==t.lastName?null:t.lastName.hasError("minLength"))("showMaxLength",null==t.lastName?null:t.lastName.hasError("maxLength")),i.Eb(4),i.nc("status",(null!=t.login&&null!=t.login.errors&&t.login.errors.required||null!=t.login&&t.login.hasError("minLength")||null!=t.login&&t.login.hasError("maxLength"))&&t.login.touched?"danger":"primary"),i.Eb(1),i.nc("showMinLength",(null==t.login?null:t.login.hasError("minLength"))&&t.login.touched)("showMaxLength",(null==t.login?null:t.login.hasError("maxLength"))&&t.login.touched)("showRequired",(null==t.login?null:null==t.login.errors?null:t.login.errors.required)&&t.login.touched),i.Eb(4),i.nc("status",(null!=t.age&&null!=t.age.errors&&t.age.errors.required||null!=t.age&&null!=t.age.errors&&t.age.errors.min||null!=t.age&&null!=t.age.errors&&t.age.errors.max||null!=t.age&&t.age.hasError("pattern"))&&t.age.touched?"danger":"primary"),i.Eb(1),i.nc("showMin",(null==t.age?null:null==t.age.errors?null:t.age.errors.min)&&t.age.touched)("showMax",(null==t.age?null:null==t.age.errors?null:t.age.errors.max)&&t.age.touched)("showRequired",(null==t.age?null:null==t.age.errors?null:t.age.errors.required)&&t.age.touched)("showPattern",null==t.age?null:t.age.hasError("pattern")),i.Eb(4),i.nc("status",(null!=t.email&&null!=t.email.errors&&t.email.errors.required||null!=t.email&&t.email.hasError("pattern"))&&t.email.touched?"danger":"primary"),i.Eb(1),i.nc("showPattern",(null==t.email?null:t.email.hasError("pattern"))&&t.email.touched)("showRequired",(null==t.email?null:null==t.email.errors?null:t.email.errors.required)&&t.email.touched),i.Eb(14),i.nc("disabled",!t.userForm.valid))},directives:[p.n,p.p,p.m,r.p,r.g,p.B,r.b,r.o,r.f,f.a,r.h,p.o,p.k],styles:[".nb-theme-default   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.25rem}.nb-theme-default   [_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-around}.nb-theme-default   [_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:20rem}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   -shadowcsshost   button[_ngcontent-%COMP%]{margin:0 .75rem 0 0}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   -shadowcsshost   button[_ngcontent-%COMP%]{margin:0 0 0 .75rem}.nb-theme-dark   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.25rem}.nb-theme-dark   [_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-around}.nb-theme-dark   [_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:20rem}[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   -shadowcsshost   button[_ngcontent-%COMP%]{margin:0 .75rem 0 0}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   -shadowcsshost   button[_ngcontent-%COMP%]{margin:0 0 0 .75rem}.nb-theme-cosmic   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-around}.nb-theme-cosmic   [_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:20rem}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   -shadowcsshost   button[_ngcontent-%COMP%]{margin:0 .75rem 0 0}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   -shadowcsshost   button[_ngcontent-%COMP%]{margin:0 0 0 .75rem}.nb-theme-corporate   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.25rem}.nb-theme-corporate   [_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-around}.nb-theme-corporate   [_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:20rem}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   -shadowcsshost   button[_ngcontent-%COMP%]{margin:0 .75rem 0 0}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   -shadowcsshost   button[_ngcontent-%COMP%]{margin:0 0 0 .75rem}"]}),e})();var M=n("pfsP");const L=[{path:"",component:l,children:[{path:"edit/:id",canActivate:[M.a],component:w},{path:"current",component:w},{path:"add",canActivate:[M.a],component:w}]}];let x=(()=>{class e{}return e.\u0275mod=i.Pb({type:e}),e.\u0275inj=i.Ob({factory:function(t){return new(t||e)},imports:[[a.g.forChild(L)],a.g]}),e})();var N=n("gcnP"),E=n("h+2I");n.d(t,"UsersModule",(function(){return O}));const P=[p.h,p.l,p.q,p.C,p.bb,p.hb,p.R,p.V,p.L,p.A,p.Z,p.w,p.C];let O=(()=>{class e{}return e.\u0275mod=i.Pb({type:e}),e.\u0275inj=i.Ob({factory:function(t){return new(t||e)},providers:[],imports:[[o.a,N.AuthModule,s.c,x,E.a,r.u,...P]]}),e})()}}]);