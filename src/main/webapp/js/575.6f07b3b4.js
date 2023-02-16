"use strict";(self["webpackChunkstudents"]=self["webpackChunkstudents"]||[]).push([[575],{6150:function(t,e,i){i.d(e,{Z:function(){return u}});var r=i(5939),l=r.Z.create({baseURL:"http://localhost:8081/api",headers:{"Content-type":"application/json"}});class s{getAll(){return l.get("/tutorials")}get(t){return l.get(`/tutorials/${t}`)}create(t){return l.post("/tutorials",t)}update(t,e){return l.put(`/tutorials/${t}`,e)}delete(t){return l["delete"](`/tutorials/${t}`)}deleteAll(){return l["delete"]("/tutorials")}findByTitle(t){return l.get(`/tutorials?title=${t}`)}}var u=new s},1575:function(t,e,i){i.r(e),i.d(e,{default:function(){return g}});var r=i(3396),l=i(9242);const s={class:"submit-form"},u={key:0},o={class:"form-group"},n=(0,r._)("label",{for:"title"},"Title",-1),a={class:"form-group"},d=(0,r._)("label",{for:"description"},"Description",-1),c={key:1},p=(0,r._)("h4",null,"You submitted successfully!",-1);function b(t,e,i,b,m,f){return(0,r.wg)(),(0,r.iD)("div",s,[m.submitted?((0,r.wg)(),(0,r.iD)("div",c,[p,(0,r._)("button",{class:"btn btn-success",onClick:e[3]||(e[3]=(...t)=>f.newTutorial&&f.newTutorial(...t))},"Add")])):((0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("div",o,[n,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",id:"title",required:"","onUpdate:modelValue":e[0]||(e[0]=t=>m.tutorial.title=t),name:"title"},null,512),[[l.nr,m.tutorial.title]])]),(0,r._)("div",a,[d,(0,r.wy)((0,r._)("input",{class:"form-control",id:"description",required:"","onUpdate:modelValue":e[1]||(e[1]=t=>m.tutorial.description=t),name:"description"},null,512),[[l.nr,m.tutorial.description]])]),(0,r._)("button",{onClick:e[2]||(e[2]=(...t)=>f.saveTutorial&&f.saveTutorial(...t)),class:"btn btn-success"},"Submit")]))])}var m=i(6150),f={name:"add-tutorial",data(){return{tutorial:{id:null,title:"",description:"",published:!1},submitted:!1}},methods:{saveTutorial(){var t={title:this.tutorial.title,description:this.tutorial.description};m.Z.create(t).then((t=>{this.tutorial.id=t.data.id,console.log(t.data),this.submitted=!0})).catch((t=>{console.log(t)}))},newTutorial(){this.submitted=!1,this.tutorial={}}}},h=i(89);const v=(0,h.Z)(f,[["render",b]]);var g=v}}]);
//# sourceMappingURL=575.6f07b3b4.js.map