(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-19b82a7e"],{"3ba1":function(e,t,i){"use strict";var a=i("4792");i.n(a).a},4670:function(e,t,i){},"469f":function(e,t,i){i("6c1c"),i("1654"),e.exports=i("7d7b")},4792:function(e,t,i){},4835:function(e,t,i){"use strict";i.d(t,"e",(function(){return n})),i.d(t,"m",(function(){return o})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return u})),i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return d})),i.d(t,"i",(function(){return m})),i.d(t,"j",(function(){return p})),i.d(t,"h",(function(){return f})),i.d(t,"l",(function(){return h})),i.d(t,"n",(function(){return g})),i.d(t,"k",(function(){return v})),i.d(t,"f",(function(){return b})),i.d(t,"g",(function(){return w}));var a=i("b775"),r="/api/blade-platform",s="/api/blade-workbench",n=function(e){return Object(a.a)({url:"".concat(r,"/newsSectionConfig/getParamTypeList"),method:"get"})},o=function(e){return Object(a.a)({url:"".concat(r,"/newsSectionConfig/saveApiFieldMapping"),method:"post",data:e})},l=function(e){return Object(a.a)({url:"".concat(r,"/newsSectionConfig/getApiFieldMapping"),method:"post",data:e})},u=function(e){return Object(a.a)({url:"".concat(r,"/newsSectionConfig/page"),method:"post",data:e})},c=function(e){return Object(a.a)({url:"".concat(s,"/eduApiServe/detail"),method:"post",data:e})},d=function(e){return Object(a.a)({url:"".concat(s,"/eduApiServeData/detail"),method:"post",data:e})},m=function(e){return Object(a.a)({url:"".concat(r,"/newsSectionConfig/save"),method:"post",data:e})},p=function(e){return Object(a.a)({url:"".concat(r,"/newsSectionConfig/update"),method:"post",data:e})},f=function(e){return Object(a.a)({url:"".concat(r,"/newsSectionConfig/officialAccountList"),method:"post",data:e})},h=function(e){return Object(a.a)({url:"".concat(r,"/newsSectionConfig/removeOA"),method:"post",data:e})},g=function(e){return Object(a.a)({url:"".concat(r,"/newsSectionConfig/saveOfficialAccountList"),method:"post",data:e})},v=function(e){return Object(a.a)({url:"".concat(r,"/newsSectionConfig/remove"),method:"post",data:e})},b=function(e){return Object(a.a)({url:"".concat(r,"/baseService/roleList"),method:"get"})},w=function(e){return Object(a.a)({url:"".concat(s,"/im/mp/allMpInfo"),method:"post",data:e})}},"5d73":function(e,t,i){e.exports=i("469f")},"768b":function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var a=i("a745"),r=i.n(a);var s=i("5d73"),n=i.n(s),o=i("c8bb"),l=i.n(o);function u(e,t){return function(e){if(r()(e))return e}(e)||function(e,t){if(l()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e)){var i=[],a=!0,r=!1,s=void 0;try{for(var o,u=n()(e);!(a=(o=u.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){r=!0,s=e}finally{try{a||null==u.return||u.return()}finally{if(r)throw s}}return i}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}},"7cd8":function(e,t,i){e.exports=i.p+"img/xyqmkpz1.b897baa5.png"},"7d7b":function(e,t,i){var a=i("e4ae"),r=i("7cd6");e.exports=i("584a").getIterator=function(e){var t=r(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return a(t.call(e))}},8947:function(e,t,i){e.exports=i.p+"img/xyqmkpz.0b3b89bd.png"},a4a1:function(e,t,i){"use strict";i.r(t);var a=(i("96cf"),i("3b8d")),r=(i("7f7f"),i("768b")),s=(i("ac6a"),i("28a5"),i("4835")),n=(i("55dd"),i("2ef0"),i("da6f")),o={name:"hignModal",props:{showAgree:{type:Boolean,default:!1},defaultWidth:{type:String,default:"576px"},isLast:{type:Boolean,default:!1},isOneBtn:{type:Boolean,default:!1},newModalVisible:{type:Boolean,default:!1},agreeBtn:{type:String,default:"确定"},isDisabled:{type:Boolean,default:!1},closeonclickmodal:{type:Boolean,default:!1},isChangelastStep:{type:Boolean,default:!1}},data:function(){var e=this;return{cpNewModalVisible:this.newModalVisible,countNum:1,rules:{fileList_P:[{required:!0,message:"请输入",trigger:"blur"}],viewPermission:[{required:!0,validator:function(t,i,a){e.roleTags.length<1?a(new Error("请选择使用角色")):a()},trigger:"blur"}],url:[{required:!0,message:"请输入链接地址",trigger:"blur"},{type:"string",pattern:/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?/,message:"请输入正确格式的链接地址",trigger:"blur"}]},ruleForm:{id:"",name:"",url:"",sort:void 0,status:1,viewPermission:""},roleTags:[],roleTreeDialogVisible:!1,roleTree:[],modalTitle:"新增",rowData:{}}},methods:{validateValue:function(e,t,i){this.countNum||t||(this.countNum+=1,i&&this.$message.error(i))},Reset:function(){var e=Object(n.a)({name:"AlumniOPenRowData",type:"session"});null!=e?(this.rowData=e,this.modalTitle="编辑",this.ruleForm={id:this.rowData.id,name:this.rowData.name,url:this.rowData.url,sort:this.rowData.sort,status:this.rowData.status,viewPermission:this.rowData.viewPermission}):(this.modalTitle="新增",this.rowData={},this.ruleForm={id:"",name:"",url:"",sort:void 0,status:1,viewPermission:""},this.roleTags=[]),this.getRolelist()},getRolelist:function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(){var t,i,a,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$store.dispatch("getServiceRoleList");case 3:1e3===(t=e.sent).data.status&&(i=t.data.result,this.roleTree=i),a=[],this.roleTags=[],this.roleTree.forEach((function(e){e.children.forEach((function(e){a.push(e)}))})),this.rowData&&this.rowData.viewPermission&&this.rowData.viewPermission.split(",").forEach((function(e){var t=a.map((function(t){if(t.roleId===e)return{id:t.roleId,name:t.roleName}}));(t=t.filter((function(e){return e}))).forEach((function(e){return r.roleTags.push(e)}))})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),handleRoleClose:function(e){var t=this.roleTags;this.roleTags=t.filter((function(t){return t!==e}))},addTags:function(e){var t=this;if(this.roleTreeDialogVisible=!0,this.roleOrlabel=!0,this.roleTags.length>0){var i=this.roleTags.map((function(e){return e.id}));this.$nextTick((function(){t.$refs.roleTree.setCheckedKeys(i)}))}else this.$nextTick((function(){t.$refs.roleTree.setCheckedKeys([])}));this.$nextTick((function(){document.getElementById("dialogRoleTree").scrollTop=0}))},getCheckedKeys:function(e){var t=this.$refs[e].getCheckedNodes();if(this.roleOrlabel){var i=t.map((function(e){if(e.roleId)return{name:e.roleName,id:e.roleId}}));this.roleTags=i.filter((function(e){return e})),this.roleTreeDialogVisible=!1}},handleClose:function(e){if(this.isChangelastStep&&e)return e();this.$emit("closeNewTask")},closedModal:function(){if(this.isChangelastStep)return this.$emit("cancelEvent");this.$emit("closeNewTask")},agreeAdd:function(){var e=this;this.countNum=0,this.$nextTick((function(){e.$refs.ruleFormeOne.validate((function(t){return!!t&&(e.countNum=1,e.commit())}))}))},commit:function(){if(this.roleTags.length<1)return this.$message.error("请选择使用角色");this.ruleForm.viewPermission=this.roleTags.map((function(e){return e.id})).join(","),"新增"==this.modalTitle?this.$emit("addNewTask",this.ruleForm):this.$emit("updateClu",this.ruleForm)},lastClick:function(){this.$emit("LastStep")},closeModal:function(){this.$emit("closeNewTask")}},watch:{newModalVisible:function(){this.cpNewModalVisible=this.newModalVisible,this.$refs.ruleFormeOne.resetFields()},roleTreeDialogVisible:function(e){}}},l=(i("f489"),i("2877")),u={name:"formSeven",props:["IDlist"],components:{addAndColumn:Object(l.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"new-task-modal addAndColumn"},[i("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{visible:e.cpNewModalVisible,width:e.defaultWidth,"before-close":e.handleClose,"close-on-click-modal":e.closeonclickmodal},on:{"update:visible":function(t){e.cpNewModalVisible=t},closed:e.handleClose}},[i("div",{staticClass:"task-modal-title",attrs:{slot:"title"},slot:"title"},[i("span",{staticClass:"modal-title-span"},[e._v(e._s(e.modalTitle))])]),i("div",[i("el-form",{ref:"ruleFormeOne",staticClass:"addAndUpdate",attrs:{"show-message":!1,model:e.ruleForm,rules:e.rules,"label-width":"86px"},on:{validate:e.validateValue}},[i("div",{staticClass:"formOne-forms"},[i("div",{staticClass:"forms-one",staticStyle:{"margin-top":"27px"}},[i("div",{staticClass:"one-list my-from-label"},[i("el-form-item",{attrs:{label:"名称",prop:"name",rules:{required:!0,message:"请输入名称",trigger:"blur"}}},[i("el-input",{staticClass:"list-input",attrs:{maxlength:6,placeholder:"请输入"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name","string"==typeof t?t.trim():t)},expression:"ruleForm.name"}})],1),i("el-form-item",{attrs:{label:"链接",prop:"url"}},[i("el-input",{staticClass:"list-input",attrs:{maxlength:1e3,placeholder:"请输入完整的http(s)"},model:{value:e.ruleForm.url,callback:function(t){e.$set(e.ruleForm,"url","string"==typeof t?t.trim():t)},expression:"ruleForm.url"}})],1),i("el-form-item",{attrs:{label:"顺序",prop:"sort",rules:{required:!0,message:"请输入顺序",trigger:"blur"}}},[i("el-input-number",{staticClass:"list-input baseData-input-number",attrs:{controls:!1,min:1,max:99,"step-strictly":"",placeholder:"请输入正整数"},model:{value:e.ruleForm.sort,callback:function(t){e.$set(e.ruleForm,"sort",t)},expression:"ruleForm.sort"}})],1),i("el-form-item",{attrs:{label:"使用角色",prop:"viewPermission"}},[[e._l(e.roleTags,(function(t){return i("el-tag",{key:t.id,staticStyle:{margin:"0 4px"},attrs:{closable:""},on:{close:function(i){return e.handleRoleClose(t)}}},[e._v(e._s(t.name))])})),i("el-button",{staticStyle:{height:"24px"},attrs:{type:"default",icon:"el-icon-plus"},on:{click:function(t){return e.addTags("role")}}},[e._v("新增")])]],2)],1)])])])],1),i("div",{staticClass:"member-modal-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{staticClass:"modal-footer-two",on:{click:e.closeModal}},[e._v("取消")]),i("el-button",{staticClass:"modal-footer-two",attrs:{type:"primary"},on:{click:e.agreeAdd}},[e._v("确定")])],1)]),i("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],staticClass:"serviceListTreeMy",attrs:{title:"新增授权角色",visible:e.roleTreeDialogVisible,"close-on-click-modal":!1,width:"30%"},on:{"update:visible":function(t){e.roleTreeDialogVisible=t}}},[i("div",{staticClass:"dialogRoleChange",attrs:{id:"dialogRoleTree"}},[i("el-tree",{ref:"roleTree",attrs:{data:e.roleTree,"show-checkbox":"","default-expand-all":"","node-key":"id","highlight-current":"",props:{children:"children",label:"roleName"}}})],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.roleTreeDialogVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getCheckedKeys("roleTree")}}},[e._v("确 定")])],1)])],1)}),[],!1,null,null,null).exports},data:function(){var e=this;return{countNum:1,rules:{schoolId:[{required:!0,message:"请输入学校代码",trigger:"blur"}],schoolName:[{required:!0,message:"请输入学校名称",trigger:"blur"}],fileList_S:[{required:!0,message:"请输入",trigger:"blur"}],fileList_P:[{required:!0,message:"请输入",trigger:"blur"}],activatedIcon:[{required:!0,validator:function(t,i,a){e.ruleForm.activatedIcon?a():a(new Error("请上传选中图标"))},trigger:"blur"}],idelIcon:[{required:!0,validator:function(t,i,a){e.ruleForm.idelIcon?a():a(new Error("请上传默认图标"))},trigger:"blur"}]},ruleForm:{alumniMomentsStatus:1,activatedIcon:"",idelIcon:"",alumniMomentsMenuTitle:"校友圈",myDynamicStatus:1,displayName:"我的动态"},uploadFilter:[".jpg",".jpeg",".png"],fileList_S:[],fileList_P:[],dialogVisible:!1,dialogVisibleFields:!1,dialogImageUrl:"",hideUpload_S:!1,hideUpload_P:!1,hideUpload:!1,currentTableData:[],modalTitle:"",newModalVisible:!1,clickIndex:0,agreeNotice:{},noticeType:5,agreeContent:"知道了",noticeTitle:"提示",noitceContent:"确定启用删除吗？",noticeSpec:"删除后不可恢复，",noticeModal:!1,roleList:[],tableDataShow:[{column:"名称",key:"name",needKeyValue:!1,caseKey:"name"},{column:"链接",key:"url",needKeyValue:!1,caseKey:"url"},{column:"顺序",key:"sort",needKeyValue:!1,caseKey:"sort"},{column:"使用角色",key:"viewPermission",needKeyValue:!0,caseKey:"viewPermission"},{column:"状态",key:"status",needKeyValue:!0,caseKey:"status"}]}},watch:{"fileList.length":function(){this.fileList.length>8?this.hideUpload=!0:this.hideUpload=!1}},created:function(){this.detailQueryResConfig(),this.GetCurrentTableData(),this.getRoleList()},methods:{openUrl:function(e){window.open(e)},closeNotice:function(){this.noticeModal=!1},getlable:function(e,t){var i=this;e[t];e.viewPermission;var a=e.viewPermission.split(",");a=a.filter((function(e){return e}));var s=[];return a.length>0&&a.forEach((function(e){var t=i.roleList.filter((function(t){return e==t.viewPermission})),a=Object(r.a)(t,1)[0];a&&s.push(a.name)})),s.join("，")},getRoleList:function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(){var t,i,a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.f)();case 2:t=e.sent,i=t.data,a=i.result,i.msg,1e3==i.status&&(r=a.map((function(e){return{name:e.roleName,viewPermission:e.roleId}})),this.roleList=r);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),saveAlumniStartInfoFN:function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={config:{alumniMomentsStatus:this.ruleForm.alumniMomentsStatus,activatedIcon:-1!==this.ruleForm.activatedIcon.indexOf("img/find2.png")?"":this.ruleForm.activatedIcon,idelIcon:-1!==this.ruleForm.idelIcon.indexOf("img/find1.png")?"":this.ruleForm.idelIcon,alumniMomentsMenuTitle:this.ruleForm.alumniMomentsMenuTitle,myDynamicStatus:this.ruleForm.myDynamicStatus,displayName:this.ruleForm.displayName},titleList:this.currentTableData},e.next=5,this.$store.dispatch("saveAlumniMomentConfig",t);case 5:1e3===(i=e.sent).data.status?(this.$message.success("保存成功"),this.GetCurrentTableData()):this.$message.error(i.data.msg),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),Reset:function(){var e=this;this.$refs.ruleForm.resetFields(),this.fileList_S=[],this.fileList_P=[],this.hideUpload_S=!1,this.hideUpload_P=!1,this.$nextTick((function(){e.detailQueryResConfig(),e.GetCurrentTableData()}))},handlePictureCardPreview_S:function(e){this.dialogVisible=!0,this.dialogImageUrl=e.url},handleRemove_S:function(e,t){this.fileList_S=[],this.hideUpload_S=!1,this.ruleForm.activatedIcon=""},beforeUpload_S:function(e){this.hideUpload_S=!0;var t=e.name.substring(e.name.lastIndexOf("."));if(!this.filterFileRes(t,this.uploadFilter))return this.$message.error("图片格式错误，请根据提示上传"),!1},filterFileRes:function(e,t){var i=!1;return t.forEach((function(t){t===e&&(i=!0)})),i},handleSuccess_S:function(e){this.ruleForm.activatedIcon=e.data[0].oUrl},hadleError_S:function(e){this.$message.error("上传失败"),this.hideUpload_S=!1},handlePictureCardPreview_P:function(e){this.dialogVisible=!0,this.dialogImageUrl=e.url},handleRemove_P:function(e,t){this.fileList_P=[],this.hideUpload_P=!1,this.ruleForm.idelIcon=""},beforeUpload_P:function(e){this.hideUpload_P=!0;var t=e.size/1024/1024<2,i=e.name.substring(e.name.lastIndexOf(".")).toLowerCase();return this.filterFileRes(i,this.uploadFilter)?t?void 0:(this.$message.error("图片大小在2M以内，请重新上传！"),!1):(this.$message.error("上传文件格式错误"),!1)},handleSuccess_P:function(e){this.ruleForm.idelIcon=e.data[0].oUrl},hadleError_P:function(e){this.$message.error(e),this.hideUpload_P=!1},closePreview:function(){this.dialogVisible=!1,this.dialogImageUrl=""},detailQueryResConfig:function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("getAlumniMomentsConfig",{});case 2:1e3===(t=e.sent).data.status?t.data.result?(this.ruleForm.alumniMomentsStatus=t.data.result.alumniMomentsStatus,this.ruleForm.activatedIcon=t.data.result.activatedIcon||window.location.origin+window.location.pathname+"img/find2.png",this.ruleForm.idelIcon=t.data.result.idelIcon||window.location.origin+window.location.pathname+"img/find1.png",this.ruleForm.alumniMomentsMenuTitle=t.data.result.alumniMomentsMenuTitle,this.ruleForm.myDynamicStatus=t.data.result.myDynamicStatus,this.ruleForm.displayName=t.data.result.displayName,this.hideUpload_S=!0,this.hideUpload_P=!0,t.data.result.activatedIcon?this.fileList_S.push({url:t.data.result.activatedIcon}):this.fileList_S.push({url:window.location.origin+window.location.pathname+"img/find2.png"}),t.data.result.idelIcon?this.fileList_P.push({url:t.data.result.idelIcon}):this.fileList_P.push({url:window.location.origin+window.location.pathname+"img/find1.png"})):(this.fileList_S=[],this.fileList_P=[],this.ruleForm={alumniMomentsStatus:1,activatedIcon:"",idelIcon:"",alumniMomentsMenuTitle:"",myDynamicStatus:1,displayName:""}):(this.fileList_S=[],this.fileList_P=[],this.ruleForm={alumniMomentsStatus:1,activatedIcon:"",idelIcon:"",alumniMomentsMenuTitle:"",myDynamicStatus:1,displayName:""},this.$message.error(t.data.msg));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),GetCurrentTableData:function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("GetCurrentTableData",{});case 2:if(1e3==(t=e.sent).data.status){e.next=6;break}return this.$message.error(t.data.msg),e.abrupt("return");case 6:this.currentTableData=t.data.result;case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),commit:function(){var e=this;this.countNum=0,this.$nextTick((function(){e.$refs.ruleForm.validate((function(t){return!!t&&(e.countNum=1,e.isHaveData())}))}))},isHaveData:function(){var e=this;0==this.ruleForm.alumniMomentsStatus&&this.currentTableData.length<1?(this.agreeNotice=function(){e.noticeModal=!1},this.noitceContent="",this.noticeSpec="关闭校友圈业务后，必须在<栏目配置>中添加栏目",this.noticeModal=!0):this.saveAlumniStartInfoFN()},validateValue:function(e,t,i){this.countNum||t||(this.countNum+=1,i&&this.$message.error(i))},deleteRowConfirm:function(e,t){var i=this;this.agreeNotice=function(){i.noticeModal=!1,i.deleteRow(e.id)},this.noitceContent="确定删除吗？",this.noticeSpec="删除后不可恢复，",this.noticeModal=!0},deleteRow:function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t){var i,a,r,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,this.$store.dispatch("AlumniMomentTitleRemove",{id:t});case 4:i=e.sent,a=i.data,r=a.status,s=a.msg,a.result,1e3===r?(this.$message.success("删除成功"),this.GetCurrentTableData()):this.$message({type:"error",message:s}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1);case 15:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),updateConfirm:function(e,t){e?(this.modalTitle="编辑",this.clickIndex=t):this.modalTitle="新增",Object(n.c)({name:"AlumniOPenRowData",content:e,type:"session"}),this.newModalVisible=!0,this.$refs.addAndColumn.Reset()},closeImport:function(){this.newModalVisible=!1},addNewTask:function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t){var i,a,r,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,this.$store.dispatch("AlumniMomentTitleAdd",t);case 4:i=e.sent,a=i.data,r=a.status,s=a.msg,a.result,1e3===r?(this.$message.success("保存成功"),this.newModalVisible=!1,this.GetCurrentTableData()):this.$message({type:"error",message:s}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1);case 15:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),updateClu:function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t){var i,a,r,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$store.dispatch("AlumniMomentTitleUpdate",t);case 3:i=e.sent,a=i.data,r=a.status,s=a.msg,a.result,this.newModalVisible=!1,1e3===r?(this.$message.success("保存成功"),this.GetCurrentTableData()):this.$message({type:"error",message:s}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),updateStatus:function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,i){var a,r,s,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t,1==t.status?a.status=0:a.status=1,e.prev=2,e.next=5,this.$store.dispatch("AlumniMomentTitleUpdate",a);case 5:r=e.sent,s=r.data,n=s.status,o=s.msg,s.result,this.newModalVisible=!1,1e3===n?this.GetCurrentTableData():this.$message({type:"error",message:o}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2);case 17:case"end":return e.stop()}}),e,this,[[2,14]])})));return function(t,i){return e.apply(this,arguments)}}()}},c=(i("3ba1"),Object(l.a)(u,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"third"},[a("div",{staticClass:"third-formOne AlumniOpen"},[e._m(0),a("el-form",{ref:"ruleForm",staticStyle:{width:"60%",float:"left"},attrs:{"show-message":!1,model:e.ruleForm,rules:e.rules,"label-width":"86px"},on:{validate:e.validateValue}},[a("div",{staticClass:"formOne-forms"},[a("div",{staticClass:"forms-one",staticStyle:{"margin-top":"57px"}},[a("div",{staticClass:"forms-one"},[a("div",{staticClass:"one-title"},[a("div",{staticClass:"title-left"},[a("span",{staticClass:"left-icon"},[a("i",{staticClass:"el-icon-s-operation"})]),a("span",{staticClass:"left-content"},[e._v("业务管理")])]),a("div",{staticClass:"title-right"},[a("el-button",{staticClass:"btn-two",attrs:{type:"default"},on:{click:function(t){return e.Reset()}}},[e._v("重置")]),a("el-button",{directives:[{name:"el-disabel-repeat-click",rawName:"v-el-disabel-repeat-click"}],staticClass:"btn-two",attrs:{type:"primary"},on:{click:function(t){return e.commit()}}},[e._v("保存")])],1)]),a("div",{staticClass:"one-list"},[a("div",{staticClass:"list-one-line"},[a("el-form-item",{attrs:{label:"校友圈业务",rules:{required:!0,message:"请选择校友圈业务",trigger:"blur"}}},[a("el-radio-group",{model:{value:e.ruleForm.alumniMomentsStatus,callback:function(t){e.$set(e.ruleForm,"alumniMomentsStatus",t)},expression:"ruleForm.alumniMomentsStatus"}},[a("el-radio",{attrs:{label:1}},[e._v("启用")]),a("el-radio",{attrs:{label:0}},[e._v("关闭")])],1),a("br"),0==e.ruleForm.alumniMomentsStatus?a("span",{staticStyle:{"font-size":"12px",color:"#aeaeb4"}},[e._v("关闭校友圈业务后，请设置对应的展示栏目")]):e._e()],1),a("el-form-item",{attrs:{label:"底部菜单名称",prop:"alumniMomentsMenuTitle",rules:{required:!0,message:"请输入底部菜单名称",trigger:"blur"}}},[a("el-input",{staticClass:"list-input",attrs:{maxlength:3,placeholder:"请输入"},model:{value:e.ruleForm.alumniMomentsMenuTitle,callback:function(t){e.$set(e.ruleForm,"alumniMomentsMenuTitle","string"==typeof t?t.trim():t)},expression:"ruleForm.alumniMomentsMenuTitle"}})],1),a("el-form-item",{staticStyle:{"margin-top":"20px"},attrs:{label:"默认图标",prop:"idelIcon"}},[a("el-upload",{staticClass:"list-upload-img",class:{hide:e.hideUpload_P},attrs:{limit:1,action:"/api/blade-platform/serviceInfo/upload",data:{fileType:1},"on-preview":e.handlePictureCardPreview_P,"on-remove":e.handleRemove_P,"on-success":e.handleSuccess_P,"on-error":e.hadleError_P,"before-upload":e.beforeUpload_P,"file-list":e.fileList_P,accept:".jpg, .jpeg, .png","list-type":"picture-card"}},[a("i",{staticClass:"el-icon-plus"}),a("div",{staticClass:"list-upload-title"},[e._v("点击上传")]),a("div",{staticClass:"list-upload-tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n                      支持.png、.jpg、.jpeg格式，建议尺寸 60px*60px\n                    ")])])],1),a("el-form-item",{attrs:{label:"选中图标",prop:"activatedIcon"}},[a("el-upload",{staticClass:"list-upload-img",class:{hide:e.hideUpload_S},attrs:{limit:1,action:"/api/blade-platform/serviceInfo/upload",data:{fileType:1},"on-preview":e.handlePictureCardPreview_S,"on-remove":e.handleRemove_S,"on-success":e.handleSuccess_S,"on-error":e.hadleError_S,"before-upload":e.beforeUpload_S,"file-list":e.fileList_S,accept:".jpg, .jpeg, .png","list-type":"picture-card"}},[a("i",{staticClass:"el-icon-plus"}),a("div",{staticClass:"list-upload-title"},[e._v("点击上传")]),a("div",{staticClass:"list-upload-tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n                      支持.png、.jpg、.jpeg格式，建议尺寸 60px*60px\n                    ")])])],1),0==e.ruleForm.alumniMomentsStatus?a("el-form-item",{attrs:{prop:"alumniMomentsStatus",label:"我的动态状态",rules:{required:!0,message:"请选择我的动态状态",trigger:"blur"}}},[a("el-radio-group",{model:{value:e.ruleForm.myDynamicStatus,callback:function(t){e.$set(e.ruleForm,"myDynamicStatus",t)},expression:"ruleForm.myDynamicStatus"}},[a("el-radio",{attrs:{label:1}},[e._v("启用")]),a("el-radio",{attrs:{label:0}},[e._v("关闭")])],1),a("br"),1==e.ruleForm.myDynamicStatus?a("span",{staticStyle:{"font-size":"12px",color:"#aeaeb4"}},[e._v("<我的-我的动态>为校友圈模块的完整业务")]):e._e()],1):e._e(),1==e.ruleForm.myDynamicStatus&&0==e.ruleForm.alumniMomentsStatus?a("el-form-item",{attrs:{label:"展示名称",prop:"displayName",rules:{required:!0,message:"请输入展示名称",trigger:"blur"}}},[a("el-input",{staticClass:"list-input",attrs:{maxlength:8,placeholder:"请输入"},model:{value:e.ruleForm.displayName,callback:function(t){e.$set(e.ruleForm,"displayName","string"==typeof t?t.trim():t)},expression:"ruleForm.displayName"}})],1):e._e()],1)])])]),0==e.ruleForm.alumniMomentsStatus?a("div",{staticClass:"forms-one"},[a("div",{staticClass:"one-title"},[a("div",{staticClass:"title-left"},[a("span",{staticClass:"left-icon"},[a("i",{staticClass:"el-icon-s-operation"})]),a("span",{staticClass:"left-content"},[e._v("栏目配置"),a("span",{staticStyle:{color:"#ff4d4f"}},[e._v("(必填)")])])])]),a("div",{staticClass:"one-list",staticStyle:{"margin-left":"24px"}},[a("div",{staticClass:"add-row"},[a("el-button",{attrs:{icon:"el-icon-plus"},on:{click:function(t){return e.updateConfirm(null)}}},[e._v("新增")])],1),a("div",{staticClass:"list-four-line"},[a("el-table",{staticClass:"third-tableThree",attrs:{data:e.currentTableData,border:"",stripe:""}},[e._l(e.tableDataShow,(function(t,i){return[t.needKeyValue?a("el-table-column",{key:i,attrs:{prop:t.key,label:t.column,"show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(i){return["status"===t.key?a("span",[1==i.row[t.key]?a("span",{staticStyle:{color:"#33cc99"}},[e._v("启用")]):e._e(),0==i.row[t.key]?a("span",{staticStyle:{color:"#ff4d4f"}},[e._v("停用")]):e._e()]):e._e(),"viewPermission"===t.key?[e._v("\n                        "+e._s(e.getlable(i.row,t.key))+"\n                      ")]:e._e()]}}],null,!0)}):a("el-table-column",{key:i,attrs:{"min-width":"60px",prop:t.key,label:t.column,"show-overflow-tooltip":!0}})]})),a("el-table-column",{attrs:{"min-width":"100px",prop:"state",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return e.updateStatus(t.row,t.$index)}}},[e._v("\n                      "+e._s(1!==t.row.status?"启用":"停用")+"\n                    ")]),a("span",{staticClass:"tableThree-height-shu"},[a("span",{staticClass:"shu-item"})]),a("el-button",{attrs:{type:"text",size:"small",disabled:"ALL"===t.row.editStatus},on:{click:function(i){return e.updateConfirm(t.row,t.$index)}}},[e._v("编辑")]),a("span",{staticClass:"tableThree-height-shu"},[a("span",{staticClass:"shu-item"})]),a("el-button",{attrs:{type:"text",size:"small",disabled:"ALL"===t.row.editStatus},on:{click:function(i){return e.deleteRowConfirm(t.row,t.$index)}}},[e._v("删除")])]}}],null,!1,1208411188)})],2)],1)])]):e._e()])]),a("div",{staticClass:"phon-right"},[1==e.ruleForm.alumniMomentsStatus?a("img",{staticClass:"phon-right-img",attrs:{src:i("8947"),alt:""}}):a("img",{staticClass:"phon-right-img",attrs:{src:i("7cd8"),alt:""}})])],1),a("preview-modal",{attrs:{previewModal:e.dialogVisible,previewImageUrl:e.dialogImageUrl},on:{previewClose:e.closePreview}}),a("addAndColumn",{ref:"addAndColumn",attrs:{modalTitle:e.modalTitle,newModalVisible:e.newModalVisible},on:{closeNewTask:e.closeImport,addNewTask:e.addNewTask,updateClu:e.updateClu}}),a("notice-modal",{attrs:{noticeModalVisible:e.noticeModal,noticeTitle:e.noticeTitle,noticeSpec:e.noticeSpec,noticeType:e.noticeType,btnAgree:e.agreeContent,noticeContent:e.noitceContent},on:{noticeModalClose:e.closeNotice,noticeModalAgree:e.agreeNotice}})],1)}),[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"formOne-btn"},[i("div",{staticClass:"btn-left"},[i("span",{staticClass:"left-back-content"},[e._v("校友圈配置")])])])}],!1,null,null,null));t.default=c.exports},f489:function(e,t,i){"use strict";var a=i("4670");i.n(a).a}}]);
//# sourceMappingURL=chunk-19b82a7e.343f55b2.js.map