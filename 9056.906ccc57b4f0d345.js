"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9056],{9056:(f,c,r)=>{r.r(c),r.d(c,{RegistroPageModule:()=>M});var d=r(6895),l=r(433),t=r(2078),u=r(2435),e=r(4650),p=r(6893);const m=[{path:"",component:(()=>{class n{constructor(o,i){this.authService=o,this.router=i,this.name="",this.email="",this.password=""}ngOnInit(){}registrar(){this.authService.registrar(this.name,this.email,this.password).then(o=>{this.router.navigate(["/home"])})}regresar(){this.router.navigate(["/login"])}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(p.e),e.Y36(u.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-registro"]],decls:25,vars:3,consts:[["color","primary"],[1,"ion-text-center"],[1,"ion-padding"],["src","assets/registro.svg","alt","registro",1,"icon"],["position","floating"],["type","text","name","name","id","name",3,"ngModel","ngModelChange"],["type","email","name","email","id","ema",3,"ngModel","ngModelChange"],["type","password","name","password","id","con",3,"ngModel","ngModelChange"],[1,"pt-15"],["expand","block","color","tertiary",1,"espacios",3,"click"],["expand","block","color","secondary",1,"espacios",3,"click"]],template:function(o,i){1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title")(3,"div",1),e._uU(4," registro "),e.qZA()()()(),e.TgZ(5,"ion-content",2),e._UZ(6,"img",3),e.TgZ(7,"ion-item")(8,"ion-label",4),e._uU(9," Nombre: "),e.TgZ(10,"ion-input",5),e.NdJ("ngModelChange",function(s){return i.name=s}),e.qZA()()(),e.TgZ(11,"ion-item")(12,"ion-label",4),e._uU(13," correo electr\xf3nico: "),e.TgZ(14,"ion-input",6),e.NdJ("ngModelChange",function(s){return i.email=s}),e.qZA()()(),e.TgZ(15,"ion-item")(16,"ion-label",4),e._uU(17," Contrase\xf1a: "),e.TgZ(18,"ion-input",7),e.NdJ("ngModelChange",function(s){return i.password=s}),e.qZA()()(),e.TgZ(19,"div",8)(20,"ion-button",9),e.NdJ("click",function(){return i.registrar()}),e._uU(21," Ingresar "),e.qZA(),e.TgZ(22,"div",8)(23,"ion-button",10),e.NdJ("click",function(){return i.regresar()}),e._uU(24," Ya tengo cuenta "),e.qZA()()()()),2&o&&(e.xp6(10),e.Q6J("ngModel",i.name),e.xp6(4),e.Q6J("ngModel",i.email),e.xp6(4),e.Q6J("ngModel",i.password))},dependencies:[l.JJ,l.On,t.YG,t.W2,t.Gu,t.pK,t.Ie,t.Q$,t.wd,t.sr,t.j9],styles:[".color-icon[_ngcontent-%COMP%]{fill:red}"]}),n})()}];let h=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(m),u.Bz]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,l.u5,t.Pc,h]}),n})()}}]);