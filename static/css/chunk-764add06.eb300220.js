(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-764add06"],{"34e6":function(e,t,a){},aef9:function(e,t,a){"use strict";a.r(t);var n=(a("7f7f"),a("75fc")),i=(a("ac6a"),a("96cf"),a("3b8d")),r=a("c810"),o=(a("da8d"),{name:"thirdThree",data:function(){return{identity:"GRADUATE_STUDENT",valNum:0,importModal:!1,totalLimit:0,reserveCount:0,verifiedCount:0,radio:1,namingRule:1,imgFormat:1,input:"",outImgNum:0,labelPosition:"right",outputModalImg:!1,outputModalHuJiImg:!1,mzdata:[],imgSrc:"",ImgDialog:!1,LBname:"",outputModal:!1,isJS:!0,checkID:"",isInformation:!0,loading:!1,noticeSpec:"",noticeType:1,agreeContent:"确定",noticeTitle:"提示",noitceContent:"",noticeModal:!1,pageSize:40,pageNum:1,totalNum:0,tableData:[],formInline:{otherParam:"",name:"",keyId:"",ksh:"",hierarchy:"",campus:null,grade:"",LastexecutionTime:[],startTime:"",endTime:"",cascade:[],college:"",major:"",className:""},selectArrList:[],nowSelectArr:[],isDeleteList:!1,newYXB:[],schoolList:[],pickerOptions0:{disabledDate:function(e){return e.getTime()>Date.now()||e.getTime()<16094304e5}},outputModalZip:!1,ColumnList:[{column:"学号",key:"keyId",needKeyValue:!1,caseKey:"keyId"},{column:"姓名",key:"name",needKeyValue:!1,caseKey:"name"},{column:"性别",key:"sex",needKeyValue:!1,actionUrl:"/api/blade-workbench/dict/dictionary?code=sex",caseKey:"sex"},{column:"层次",key:"hierarchy",needKeyValue:!1,actionUrl:"/api/blade-workbench/dict/dictionary?code=hierarchy",caseKey:"hierarchy"},{column:"年级",key:"grade",needKeyValue:!1,caseKey:"grade"},{column:"校区",key:"campus",needKeyValue:!1,caseKey:"campus"},{column:"院系",key:"college",needKeyValue:!1,caseKey:"college"},{column:"专业",key:"major",needKeyValue:!1,caseKey:"major"},{column:"班级",key:"className",needKeyValue:!1,caseKey:"className"},{column:"照片",key:"imgUrl",needKeyValue:!1,isImgUrl:!0,caseKey:"imgUrl"},{column:"上传时间",key:"uploadTime",needKeyValue:!1,caseKey:"uploadTime"},{column:"手机号",key:"tel",needKeyValue:!1,caseKey:"tel"},{column:"备用号码",key:"backupNumber",needKeyValue:!1,caseKey:"backupNumber"}],imgSource:2}},created:function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.roleStuList(),this.getImgSource();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),methods:{screenPhoto:function(){"noPhoto"==this.formInline.otherParam?this.formInline.otherParam="":this.formInline.otherParam="noPhoto",this.roleStuList()},getImgSource:function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(){var t,a,n,i,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={identity:this.identity},e.next=4,this.$store.dispatch("getConfig",t);case 4:a=e.sent,n=a.data,i=n.status,r=n.msg,o=n.result,1e3!=i?this.$message({type:"error",message:r}):this.imgSource=o.picUploadType,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),checkboxSelect:function(e,t){return!!e.imgUrl},handleChange:function(e){e.length>0?this.formInline.college=e[0]:e.length>1?this.formInline.major=e[1]:e.length>2&&(this.formInline.className=e[2])},deleteItem:function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!=t||""!==this.checkID){e.next=2;break}return e.abrupt("return",this.$message.error("请选择数据"));case 2:this.agreeNotice=function(){a.noticeModal=!1,1==t?a.deleteImg(a.checkID):2==t?a.deleteAllImg():a.deleteImg(t.studentId)},this.noitceContent="确定删除吗？",this.noticeSpec=1==this.imgSource?"删除照片后需用户重新上传，":"删除照片后需重新上传，",this.noticeModal=!0;case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),deleteAllImg:function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(){var t,a,n,i,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={identity:this.identity},e.next=4,this.$store.dispatch("deleteAllImg",t);case 4:a=e.sent,n=a.data,i=n.status,r=n.msg,n.result,1e3!=i?this.$message({type:"error",message:r}):(this.$message.success("删除成功"),this.roleStuList()),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),deleteImg:function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(t){var a,n,i,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={ids:t,identity:this.identity},e.next=4,this.$store.dispatch("deleteImg",a);case 4:n=e.sent,i=n.data,r=i.status,o=i.msg,i.result,1e3!=r?this.$message({type:"error",message:o}):(this.$message.success("删除成功"),this.roleStuList()),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),getCollegeMajorTree:function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(){var t,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("getCollegeMajorTree",{tenantId:this.$store.state.user.tenantId,campusId:this.formInline.campus});case 2:1e3===(t=e.sent).data.status?(a=t.data.result.college,(i=a.map((function(e){return 0!==e.major.length?{value:e.collegeId,label:e.collegeName,children:e.major}:{value:e.collegeId,label:e.collegeName}}))).forEach((function(e){e.children&&(e.children=e.children.map((function(e){return 0!==e.class.length?{value:e.majorId,label:e.majorName,children:e.class}:{value:e.majorId,label:e.majorName}})),e.children.forEach((function(e){e.children&&(e.children=e.children.map((function(e){return{value:e.classId,label:e.className}})))})))})),this.newYXB=Object(n.a)(i)):this.$message.error(t.data.msg);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),getYjdrNum:function(){var e=this;Object(r.f)("/api/blade-faceCertification/api/faceBio/verifyRecord/registrationListByDate").then((function(t){var a=t.data;1e3===a.status?(e.valNum=0,a.result.forEach((function(t){e.valNum+=t.count}))):e.$message.error(a.msg)}))},addMember:function(){this.importModal=!0},closeImport:function(){this.importModal=!1},checkDate:function(){},viewImage:function(e){this.imgSrc=e+"?"+(new Date).getTime(),this.ImgDialog=!0},daoChuShuJu:function(){this.LBname="核验记录",this.outputModal=!0},outputData:function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.LBname="核验记录",this.outputModalZip=!0;case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),closeOutPut:function(){this.outputModal=!1},closeOutPutZip:function(){this.outputModalZip=!1},daoruSuccess:function(){this.resetForm("formInline")},searchInput:function(){this.pageNum=1,this.roleStuList()},resetInput:function(){this.hignSearchRes="",this.pageNum=1,this.formInline={name:"",keyId:"",ksh:"",hierarchy:"",otherParam:"",campus:null,grade:"",LastexecutionTime:[],startTime:"",endTime:"",cascade:[],college:"",major:"",className:""},this.roleStuList()},handleSelectChange:function(e){this.selectArrList=[];for(var t=0;t<=e.length-1;t++)this.selectArrList.push(e[t].studentId);this.checkID=this.selectArrList.join(",")},handleSelectAll:function(e){this.checkClassList=[];for(var t=0;t<=e.length-1;t++)this.checkClassList.push(e[t].studentId);this.checkID=this.checkClassList.join(",")},agreeNotice:function(){},closeNotice:function(){this.noticeModal=!1},handleSizeChange:function(e){this.pageNum=1,this.pageSize=e,this.roleStuList()},handleCurrentChange:function(e){this.pageNum=e,this.roleStuList()},roleStuList:function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(){var t,a,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=4,this.$store.dispatch("userList",{identity:this.identity,otherParam:this.formInline.otherParam,name:this.formInline.name.trim(),keyId:this.formInline.keyId.trim(),ksh:this.formInline.ksh.trim(),campus:this.formInline.campus,hierarchy:this.formInline.hierarchy,grade:this.formInline.grade,startTime:this.formInline.LastexecutionTime?this.formInline.LastexecutionTime[0]:"",endTime:this.formInline.LastexecutionTime?this.formInline.LastexecutionTime[1]:"",cascade:this.formInline.cascade,college:this.formInline.college,major:this.formInline.major,className:this.formInline.className,pageIndex:this.pageNum,pageSize:this.pageSize});case 4:t=e.sent,a=t.data,n=a.status,a.msg,i=a.result,this.loading=!1,1e3===n?0!==i.data.length?(this.tableData=i.data,this.totalNum=i.count,this.reserveCount=i.numberImg,this.verifiedCount=i.number,this.totalLimit=i.total):1!==this.pageNum?(this.pageNum-=1,this.roleStuList()):(this.tableData=[],this.totalNum=0):(this.tableData=[],this.totalNum=0);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}}),s=(a("ebef"),a("2877")),l={name:"YXindex",data:function(){return{labelName:"GRADUATE_STUDENT",OSfailoverId:""}},components:{GRADUATE_STUDENT:Object(s.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"GRADUATE_STUDENT"},[a("div",{staticClass:"third"},[a("div",{staticClass:"third-rea"},[a("div",{staticClass:"third-btn"},[a("div",{staticClass:"btn-left"},[e._v("检索条件")]),a("div",{staticClass:"btn-right"},[a("el-button",{staticClass:"btn-two",attrs:{type:"primary"},on:{click:e.searchInput}},[e._v("查询")]),a("el-button",{staticClass:"btn-two",attrs:{type:"default"},on:{click:e.resetInput}},[e._v("重置")])],1)]),a("div",{staticClass:"third-search"},[a("el-form",{attrs:{inline:!0,model:e.formInline,"label-width":"76px"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchInput(t)}}},[a("div",{staticClass:"search-row"},[a("div",{staticClass:"row-item"},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{staticClass:"item-input",attrs:{maxlength:30,placeholder:"请输入"},model:{value:e.formInline.name,callback:function(t){e.$set(e.formInline,"name","string"==typeof t?t.trim():t)},expression:"formInline.name"}})],1)],1),a("div",{staticClass:"row-item"},[a("el-form-item",{attrs:{label:"学号",prop:"keyId"}},[a("el-input",{staticClass:"item-input",attrs:{maxlength:30,placeholder:"请输入"},model:{value:e.formInline.keyId,callback:function(t){e.$set(e.formInline,"keyId","string"==typeof t?t.trim():t)},expression:"formInline.keyId"}})],1)],1),a("div",{staticClass:"row-item"},[a("el-form-item",{attrs:{label:"层次",prop:"hierarchy"}},[a("el-input",{staticClass:"item-input",attrs:{maxlength:30,placeholder:"请输入"},model:{value:e.formInline.hierarchy,callback:function(t){e.$set(e.formInline,"hierarchy","string"==typeof t?t.trim():t)},expression:"formInline.hierarchy"}})],1)],1),a("div",{staticClass:"row-item"},[a("el-form-item",{attrs:{label:"年级",prop:"grade"}},[a("el-input",{staticClass:"item-input",attrs:{maxlength:30,placeholder:"请输入"},model:{value:e.formInline.grade,callback:function(t){e.$set(e.formInline,"grade","string"==typeof t?t.trim():t)},expression:"formInline.grade"}})],1)],1)]),a("div",{staticClass:"search-row"},[a("div",{staticClass:"row-item"},[a("el-form-item",{attrs:{label:"院系",prop:"college"}},[a("el-input",{staticClass:"item-input",attrs:{maxlength:30,placeholder:"请输入"},model:{value:e.formInline.college,callback:function(t){e.$set(e.formInline,"college","string"==typeof t?t.trim():t)},expression:"formInline.college"}})],1)],1),a("div",{staticClass:"row-item"},[a("el-form-item",{attrs:{label:"专业",prop:"major"}},[a("el-input",{staticClass:"item-input",attrs:{maxlength:30,placeholder:"请输入"},model:{value:e.formInline.major,callback:function(t){e.$set(e.formInline,"major","string"==typeof t?t.trim():t)},expression:"formInline.major"}})],1)],1),a("div",{staticClass:"row-item"},[a("el-form-item",{attrs:{label:"班级",prop:"className"}},[a("el-input",{staticClass:"item-input",attrs:{maxlength:30,placeholder:"请输入"},model:{value:e.formInline.className,callback:function(t){e.$set(e.formInline,"className","string"==typeof t?t.trim():t)},expression:"formInline.className"}})],1)],1),a("div",{staticClass:"row-item"},[a("el-form-item",{attrs:{label:"是否有照片",prop:"otherParam"}},[a("key-value-select",{attrs:{className:"item-input",isNeedAll:!0,placeholder:"请选择",methods:"post",isNeedCash:!1,dict:[{label:"是",value:"hasPhoto"},{label:"否",value:"noPhoto"}]},model:{value:e.formInline.otherParam,callback:function(t){e.$set(e.formInline,"otherParam",t)},expression:"formInline.otherParam"}})],1)],1)]),a("div",{staticClass:"search-row"},[a("div",{staticClass:"row-item"},[a("el-form-item",{attrs:{label:"上传时间",prop:"time"}},[a("el-date-picker",{staticClass:"list-input Isdaterange",staticStyle:{width:"216px","padding-left":"15px","padding-right":"0"},attrs:{type:"datetimerange","unlink-panels":"","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"timestamp","picker-options":e.pickerOptions0},on:{change:e.checkDate},model:{value:e.formInline.LastexecutionTime,callback:function(t){e.$set(e.formInline,"LastexecutionTime",t)},expression:"formInline.LastexecutionTime"}})],1)],1)])])],1)]),a("div",{staticClass:"third-one"},[a("div",{staticClass:"third-do-btn"},[a("div",{staticClass:"do-btn-left",staticStyle:{width:"600px"}},[a("el-button",{staticClass:"do-btn-four",attrs:{type:"default",icon:"el-icon-download"},on:{click:e.addMember}},[e._v("导入照片")]),a("el-button",{staticClass:"do-btn-two",attrs:{type:"default",icon:"el-icon-upload2"},on:{click:e.outputData}},[e._v("导出照片")]),a("el-button",{staticClass:"do-btn-two",attrs:{type:"default",icon:"el-icon-upload2"},on:{click:e.daoChuShuJu}},[e._v("导出没有照片的用户")]),a("el-button",{staticClass:"do-btn-two",attrs:{type:"default",icon:"el-icon-delete"},on:{click:function(t){return e.deleteItem(1)}}},[e._v("删除照片")]),a("el-button",{staticClass:"do-btn-two",attrs:{type:"default",icon:"el-icon-delete"},on:{click:function(t){return e.deleteItem(2)}}},[e._v("删除所有用户的照片")])],1),e.isInformation?a("div",{staticClass:"do-btn-rightA",staticStyle:{width:"calc(100% - 600px)","text-align":"right",color:"#76838f"}},[a("p",[e._v("\n            总计："),a("span",[e._v(e._s(e.totalLimit))]),e._v(" ，有照片："),a("span",[e._v(e._s(e.reserveCount)+"\n            ")]),e._v("\n            ，无照片:\n            "),a("span",{staticClass:"error",on:{click:e.screenPhoto}},[e._v(e._s(e.verifiedCount)+"\n            ")])])]):e._e()]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"studentId",staticClass:"third-tableThree messageHistory-threeLine",attrs:{"max-height":e.getMaxHeight(268),data:e.tableData,"row-key":"studentId",border:"",stripe:""},on:{"selection-change":e.handleSelectChange,"select-all":e.handleSelectAll}},[a("el-table-column",{attrs:{type:"selection",width:"55",selectable:e.checkboxSelect}}),e._l(e.ColumnList,(function(t,n){return[t.needKeyValue?a("el-table-column",{key:n,attrs:{"min-width":"100px",prop:t.key,label:t.column,"show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(e){return[a("key-value-span",{attrs:{dict:t.dict,value:e.row[t.key],dictUrl:t.actionUrl}})]}}],null,!0)}):t.isImgUrl?a("el-table-column",{key:n,attrs:{"min-width":"100px",prop:t.key,label:t.column,"show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.imgUrl?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.viewImage(t.row.imgUrl)}}},[e._v("\n                查看\n              ")]):a("span",[e._v("暂无")])]}}],null,!0)}):a("el-table-column",{key:n,attrs:{"min-width":"100px",prop:t.key,label:t.column,"show-overflow-tooltip":!0}})]})),a("el-table-column",{attrs:{"min-width":"100px",prop:"address",label:"操作",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.imgUrl?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.deleteItem(t.row)}}},[e._v("删除照片")]):e._e()]}}])})],2),a("div",{staticClass:"third-page"},[a("el-pagination",{attrs:{"current-page":e.pageNum,background:"","page-sizes":[10,20,30,40],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalNum},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),a("notice-modal",{attrs:{noticeModalVisible:e.noticeModal,noticeTitle:e.noticeTitle,noticeSpec:e.noticeSpec,noticeType:e.noticeType,btnAgree:e.agreeContent,noticeContent:e.noitceContent},on:{noticeModalClose:e.closeNotice,noticeModalAgree:e.agreeNotice}}),a("pull-Out-New",{attrs:{outputModal:e.outputModal,isJS:e.isJS,isGX:!1,LBName:"毕业生",identity:e.identity,requestModel:e.formInline,checkID:e.checkID,biaotouURL:"/api/blade-platform/userImg/excel/ExportField",daochuURL:"/api/blade-platform/userImg/excel/export",lunxun:"/api/blade-platform/userImg/excel/exportStatus",ExportCountURL:"/api/blade-platform/userImg/excel/exportCount"},on:{closeNewTask:e.closeOutPut}}),a("pull-Out-Zip",{attrs:{outputModal:e.outputModalZip,identity:e.identity,LBName:"毕业生照片",formInline:e.formInline,checkID:e.checkID,daochuURL:"/api/blade-platform/userImg/exportImg",lunxun:"/api/blade-platform/userImg/excel/exportPhoto",ExportCountURL:"/api/blade-platform/userImg/exportImgCount"},on:{closeNewTask:e.closeOutPutZip}}),a("pushInfoNewZip",{attrs:{importModal:e.importModal,identity:e.identity,IngURL:"/api/blade-platform/userImg/importImg/polling",upFailURL:"/api/blade-platform/userImg/downloadErrorExcel",DaoruURL:"/api/blade-platform/userImg/importImg",modalTitle:"上传照片"},on:{closeNewTask:e.closeImport,daoruSuccess:function(){e.roleStuList()}}}),a("preview-modal",{attrs:{previewModal:e.ImgDialog,previewImageUrl:e.imgSrc},on:{previewClose:function(){e.ImgDialog=!1}}})],1)])}),[],!1,null,null,null).exports},created:function(){},methods:{goBackHome:function(){this.labelName="GRADUATE_STUDENT"}}},c=Object(s.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"third"},[a(e.labelName,{ref:e.labelName,tag:"component",attrs:{ID:e.OSfailoverId},on:{backHome:e.goBackHome}})],1)}),[],!1,null,null,null);t.default=c.exports},ebef:function(e,t,a){"use strict";var n=a("34e6");a.n(n).a}}]);
//# sourceMappingURL=chunk-764add06.eb300220.js.map