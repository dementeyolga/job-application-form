(this["webpackJsonpjob-form"]=this["webpackJsonpjob-form"]||[]).push([[0],[,,,,,,,function(e,n,t){e.exports={inputContainer:"Input_inputContainer__2YXMP",rightBlock:"Input_rightBlock__17xQw",label:"Input_label__1NExA"}},function(e,n,t){e.exports={mainDataContainer:"MainData_mainDataContainer__2A-HY",mainData:"MainData_mainData__17k_6",photoContainer:"MainData_photoContainer__28_eu",image:"MainData_image__2kS2z",loadPhoto:"MainData_loadPhoto__2upfV",fileInput:"MainData_fileInput__TjAOv",imageInputDescription:"MainData_imageInputDescription__2SvF6"}},function(e,n,t){e.exports={container:"Checkbox_container__1Gmv1",checkbox:"Checkbox_checkbox__3ytrV",description:"Checkbox_description__17stk",containerWithoutLabel:"Checkbox_containerWithoutLabel__2DRFe"}},function(e,n,t){e.exports={container:"TextArea_container__1w7Z2",label:"TextArea_label__1f9jx",textAreaWrapper:"TextArea_textAreaWrapper__DvlvD",inputError:"TextArea_inputError__3A8F4",lengthStatus:"TextArea_lengthStatus__8RAGe"}},,,function(e,n,t){e.exports={selectContainer:"Select_selectContainer__15FdT",label:"Select_label__9-owp",select:"Select_select__1C-Bc"}},function(e,n,t){e.exports={inputAndSelect:"WorkExperience_inputAndSelect__3aJx6",buttonsContainer:"WorkExperience_buttonsContainer__27c7C",button:"WorkExperience_button__2T3oq"}},function(e,n,t){e.exports={languageSkills:"LanguageSkills_languageSkills__1W_yz",buttonsContainer:"LanguageSkills_buttonsContainer__1ZS7Y",button:"LanguageSkills_button__2DBQJ"}},function(e,n,t){e.exports={buttonsContainer:"Education_buttonsContainer__1DL6m",button:"Education_button__14x9u"}},function(e,n,t){e.exports={buttonsContainer:"CoursesAndTrainings_buttonsContainer__2t81g",button:"CoursesAndTrainings_button__2DzVe"}},,,function(e,n,t){e.exports={headerContainer:"Header_headerContainer__iFxQE",header:"Header_header__3CkPJ"}},function(e,n,t){e.exports={phoneAndButtons:"ContactDetails_phoneAndButtons__2uQbb",buttonsContainer:"ContactDetails_buttonsContainer__2eHa0",button:"ContactDetails_button__1f7C4","contact-details":"ContactDetails_contact-details__3By8p"}},function(e,n,t){e.exports={container:"Scale_container__1iJ7D",circle:"Scale_circle__1K4n7"}},,function(e,n,t){e.exports={inputAndCheckbox:"PersonalData_inputAndCheckbox__YafG5"}},function(e,n,t){e.exports={container:"ComputerSkills_container__15wP4"}},,,,,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(3),i=t(1),c=t.n(i),o=t(23),l=t.n(o),s=t(6),r=t(5),u=t(19),d=t(7),h=c.a.createContext({}),b=t(0),j=function(e){var n=e.label,t=e.placeholder,c=e.name,o=e.value,l=e.handleChange,s=e.maxLen,r=e.isInputClickable,u=Object(i.useContext)(h),j=u.fields,g=u.changeFields,O=Object(i.useState)(!1),p=Object(a.a)(O,2),f=p[0],x=p[1];return Object(b.jsxs)("div",{className:d.inputContainer,children:[Object(b.jsx)("div",{className:d.label,children:n}),Object(b.jsx)("div",{className:d.rightBlock,children:Object(b.jsx)("input",{disabled:r,name:c,value:o,className:"".concat(f?d.input:d.inputError),placeholder:t,maxLength:s,onChange:function(e){for(var n=0;n<=j.length;n++)j[n]===e.target.name?function(){console.log(j[n]),x(!1);var t=e.target.name;g(j.filter((function(e){return e!==t})))}():x(!0);console.log(j),l(e.target.name,e.target.value)}})})]})},g=t(13),O=function(e){var n=e.options,t=e.handleChange,a=e.label,i=e.name,c=e.value;return Object(b.jsxs)("div",{className:g.selectContainer,children:[Object(b.jsx)("div",{className:g.label,children:a}),Object(b.jsx)("div",{className:g.rightBlock}),Object(b.jsx)("select",{className:g.select,onChange:function(e){t(e.target.name,e.target.value)},name:i,value:c,children:n.map((function(e,n){return Object(b.jsx)("option",{children:e},n)}))})]})},p=t(20),f=function(e){return Object(b.jsx)("div",{className:p.headerContainer,children:Object(b.jsx)("div",{className:p.header,children:e.header})})},x=t(8),m=t(9),v=function(e){var n=e.description,t=e.handleChange,c=e.name,o=e.value,l=Object(i.useState)(0),s=Object(a.a)(l,2),r=s[0],u=s[1];return Object(i.useEffect)((function(){console.log(r),t(c,r)}),[c,r]),Object(b.jsxs)("div",{className:m.containerWithoutLabel,children:[Object(b.jsx)("input",{name:c,value:o,checked:r,type:"checkbox",className:m.checkbox}),Object(b.jsx)("label",{onClick:function(e){u(0===r?1:0)},name:c,value:o,checked:r,htmlFor:"checkbox",children:n})]})},k=function(e){var n=e.description,t=e.label,c=e.handleChange,o=e.name,l=e.value,s=Object(i.useState)(0),r=Object(a.a)(s,2),u=r[0],d=r[1];return Object(i.useEffect)((function(){console.log("qwe"),console.log(u),c(o,u)}),[c,o,u]),Object(b.jsxs)("div",{className:m.container,children:[Object(b.jsx)("div",{className:m.label,children:t}),Object(b.jsx)("input",{name:o,value:l,checked:u,type:"checkbox",className:m.checkbox}),Object(b.jsx)("label",{onClick:function(e){console.log("1!!!!!!!!!!!!!!!!!!!!!!!!!"),d(0===u?1:0)},name:o,value:l,htmlFor:"checkbox",children:n})]})},C=t.p+"static/media/blank-profile-picture.c3f94521.png",_=function(e){var n=e.handleChange,t=e.data,o=Object(i.useState)(C),l=Object(a.a)(o,2),s=l[0],r=l[1],u=c.a.useRef(null);return Object(b.jsxs)("div",{className:x.mainDataContainer,children:[Object(b.jsx)(f,{header:"\u041e\u0421\u041d\u041e\u0412\u041d\u042b\u0415 \u0414\u0410\u041d\u041d\u042b\u0415"}),Object(b.jsxs)("div",{className:x.mainData,children:[Object(b.jsx)(j,{label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f:",placeholder:"\u0418\u0432\u0430\u043d\u043e\u0432",name:"surname",handleChange:n,value:t.surname,maxLen:64}),Object(b.jsx)(j,{label:"\u0418\u043c\u044f:",placeholder:"\u0418\u0432\u0430\u043d",name:"name",handleChange:n,value:t.name,maxLen:64}),Object(b.jsx)(j,{label:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e:",placeholder:"\u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",name:"patronymic",handleChange:n,value:t.patronymic,maxLen:64}),Object(b.jsx)(j,{label:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c:",placeholder:"\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440",name:"workPosition",handleChange:n,value:t.workPosition,maxLen:64}),Object(b.jsx)(j,{label:"\u041e\u0436\u0438\u0434\u0430\u0435\u043c\u0430\u044f \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430:",placeholder:"\u043e\u0442 100 000 \u0440\u0443\u0431",name:"expectedSalary",handleChange:n,value:t.expectedSalary,maxLen:16}),Object(b.jsx)(O,{label:"\u0413\u0440\u0430\u0444\u0438\u043a \u0440\u0430\u0431\u043e\u0442\u044b:",options:["\u041f\u043e\u043b\u043d\u044b\u0439 \u0434\u0435\u043d\u044c","\u0421\u043c\u0435\u043d\u043d\u044b\u0439 \u0433\u0440\u0430\u0444\u0438\u043a","\u0413\u0438\u0431\u043a\u0438\u0439 \u0433\u0440\u0430\u0444\u0438\u043a","\u0423\u0434\u0430\u043b\u0451\u043d\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430","\u0412\u0430\u0445\u0442\u043e\u0432\u044b\u0439 \u043c\u0435\u0442\u043e\u0434"],name:"workingSchedule",handleChange:n,value:t.workingSchedule,maxLen:32}),Object(b.jsx)(O,{label:"\u0417\u0430\u043d\u044f\u0442\u043e\u0441\u0442\u044c:",options:["\u041f\u043e\u043b\u043d\u0430\u044f","\u0427\u0430\u0441\u0442\u0438\u0447\u043d\u0430\u044f","\u041f\u0440\u043e\u0435\u043a\u0442\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430","\u0421\u0442\u0430\u0436\u0438\u0440\u043e\u0432\u043a\u0430","\u0412\u043e\u043b\u043e\u043d\u0442\u0451\u0440\u0441\u0442\u0432\u043e"],name:"busyness",handleChange:n,value:t.busyness}),Object(b.jsx)(k,{label:"\u041f\u0435\u0440\u0435\u0435\u0437\u0434:",description:"\u0433\u043e\u0442\u043e\u0432(\u0430) ",name:"readinessOfRelocation",value:t.readinessOfRelocation,handleChange:n}),Object(b.jsx)(k,{label:"\u041a\u043e\u043c\u0430\u043d\u0434\u0438\u0440\u043e\u0432\u043a\u0438:",description:"\u0433\u043e\u0442\u043e\u0432(\u0430)",name:"readinessOfBusinessTrips",value:t.readinessOfBusinessTrips,handleChange:n})]}),Object(b.jsxs)("div",{className:x.photoContainer,children:[Object(b.jsx)("input",{ref:u,type:"file",onChange:function(e){e.target.files&&e.target.files[0]&&r(URL.createObjectURL(e.target.files[0])),console.log(URL.createObjectURL(e.target.files[0]))},className:x.fileInput}),Object(b.jsx)("img",{className:x.image,src:s}),Object(b.jsx)("button",{className:x.loadPhoto,onClick:function(e){u.current.click()},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"}),Object(b.jsx)("div",{className:x.imageInputDescription,children:"\u0424\u043e\u0442\u043e \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 jpg, png, \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 30MB"})]})]})},w=t(2),N=t(21),y=function(e){var n=e.handleChange,t=e.data,c=Object(i.useState)([{phoneNumber:"+375",email:"",socialProfile:""}]),o=Object(a.a)(c,2),l=o[0],s=o[1];Object(i.useEffect)((function(){n("contactDetails",l)}),[l]);return Object(b.jsxs)("div",{className:"contact-details-container",children:[Object(b.jsx)(f,{header:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(b.jsxs)("div",{className:"contact-details",children:[l&&l.length?null===l||void 0===l?void 0:l.map((function(e,n){return Object(b.jsx)("div",{className:N.container,children:Object(b.jsxs)("div",{className:N.phoneAndButtons,children:["  ",Object(b.jsx)(j,{label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:",placeholder:"+375 (44) 123-45-67",name:"phoneNumber-".concat(n),value:t.contactDetails[n].phoneNumber,handleChange:function(e,a){!function(e,n,a){var i=a.substr(0,a.indexOf("-"));console.log(l),0===n.length&&(t.contactDetails[e].phoneNumber="+375"+n,l[e][i]="+375"+n);var c=n.replace(/\D/g,"").match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);n=c[2]?"+"+c[1]+(c[3]?" ("+c[2]+") ":c[2])+c[3]+(c[4]?"-"+c[4]:"")+(c[5]?"-"+c[5]:""):c[1],console.log(e),n.length<=4?(t.contactDetails[e].phoneNumber="+375",l[e][i]="+375"):(t.contactDetails[e].phoneNumber=n,l[e][i]=n),s(Object(w.a)(l))}(n,a,e)},maxLen:19})]})},n)})):"",Object(b.jsx)(j,{label:"Email:",placeholder:"your_email@gmail.com",name:"email",value:t.email,handleChange:n,maxLen:512}),Object(b.jsx)(j,{label:"\u0421\u043e\u0446. \u043f\u0440\u043e\u0444\u0438\u043b\u044c:",placeholder:"https://vk.com/id0000000",name:"socialProfile",value:t.socialProfile,handleChange:n,maxLen:2048})]})]})},S=t(24),E=function(e){var n=e.handleChange,t=e.data,c=Object(i.useState)([{placeOfResidence:"",dateOfBirth:"",driverLicence:"",sex:""}]),o=Object(a.a)(c,2),l=o[0],s=o[1];Object(i.useEffect)((function(){n("coursesAndTrainings",l)}),[l]);return Object(b.jsxs)("div",{className:"personal-data-container",children:[Object(b.jsx)(f,{header:"\u041b\u0418\u0427\u041d\u042b\u0415 \u0421\u0412\u0415\u0414\u0415\u041d\u0418\u042f"}),Object(b.jsxs)("div",{className:"personal-data",children:[Object(b.jsx)(j,{label:"\u041c\u0435\u0441\u0442\u043e \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f:",placeholder:"\u0433. \u041c\u0438\u043d\u0441\u043a",name:"placeOfResidence",handleChange:n,value:t.placeOfResidence,maxLen:95}),Object(b.jsx)(j,{label:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f:",placeholder:"\u0434\u0434.\u043c\u043c.\u0433\u0433\u0433\u0433",name:"dateOfBirth",handleChange:function(e){!function(e,n,a){var i=a.substr(0,a.indexOf("-")),c=n.replace(/\D/g,"").match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);n=c[2]?c[1]+"."+c[2]+(c[3]?"."+c[3]:""):c[1],t.dateOfBirth[0].phoneNumber=n,l[e][i]=n,s(Object(w.a)(l))}(e,t)},value:t.dateOfBirth,maxLen:10}),Object(b.jsx)("div",{className:S.inputAndCheckbox}),Object(b.jsx)(j,{label:"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435:",placeholder:"\u0411",name:"driverLicence",handleChange:n,value:t.driverLicence,maxLen:15}),Object(b.jsx)(O,{label:"\u041f\u043e\u043b:",options:["\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e","\u041c\u0443\u0436\u0441\u043a\u043e\u0439","\u0416\u0435\u043d\u0441\u043a\u0438\u0439"],name:"sex",value:t.sex,handleChange:n})]})]})},L=t(10),A=function(e){var n=e.maxLen,t=e.label,c=e.placeholder,o=e.name,l=e.value,s=e.handleChange,r=Object(i.useContext)(h),u=r.fields,d=r.changeFields,j=Object(i.useState)(!1),g=Object(a.a)(j,2),O=g[0],p=g[1];return Object(b.jsxs)("label",{className:L.container,children:[Object(b.jsx)("div",{className:L.label,children:t}),Object(b.jsxs)("div",{className:L.textAreaWrapper,children:[Object(b.jsx)("textarea",{name:o,value:l,className:"".concat(O?L.input:L.inputError),placeholder:c,maxLength:n,onChange:function(e){for(var n=0;n<=u.length;n++)u[n]===e.target.name?function(){console.log(u[n]),p(!1);var t=e.target.name;d(u.filter((function(e){return e!==t})))}():p(!0);console.log(u),s(e.target.name,e.target.value)}}),Object(b.jsxs)("div",{className:L.lengthStatus,children:[(null===l||void 0===l?void 0:l.length)||0,"/",n]})]})]})},D=t(14),I=function(e){var n=e.handleChange,t=e.data,c=Object(i.useState)([{beginningOfWork:"",endOfWork:"",organization:"",position:"",responsibilitiesAndAchievements:""}]),o=Object(a.a)(c,2),l=o[0],s=o[1];Object(i.useEffect)((function(){n("workExperience",l)}),[l]);var r=function(){l.push({beginningOfWork:"",endOfWork:"",organization:"",position:"",responsibilitiesAndAchievements:""}),console.log(l),s(Object(w.a)(l))},u=function(e,n,t){var a=t.substr(0,t.indexOf("-"));console.log(l),l[e][a]=n,s(Object(w.a)(l))},d=Object(i.useState)(!1),h=Object(a.a)(d,2),g=(h[0],h[1],Object(i.useState)(!0)),O=Object(a.a)(g,2),p=O[0],x=O[1];return Object(b.jsxs)("div",{className:"work-experience-container",children:[Object(b.jsx)(f,{header:"\u041e\u041f\u042b\u0422 \u0420\u0410\u0411\u041e\u0422\u042b"}),l&&l.length?null===l||void 0===l?void 0:l.map((function(e,n){return Object(b.jsxs)("div",{children:[" ",Object(b.jsx)(j,{label:"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b:",name:"beginningOfWork-".concat(n),handleChange:function(e,t){return u(n,t,e)},value:t.beginningOfWork,placeholder:"\u0433\u0433\u0433\u0433",maxLen:4}),Object(b.jsxs)("div",{className:D.inputAndSelect,children:[Object(b.jsx)(j,{isInputClickable:p,label:"\u041e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u044b:",name:"endOfWork-".concat(n),value:t.endOfWork,handleChange:function(e,t){u(n,t,e)},placeholder:"\u043c\u043c.\u0433\u0433\u0433\u0433",maxLen:7}),Object(b.jsx)(v,{description:"\u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f",name:"endOfWorkStatus-".concat(n),handleChange:function(e,t){u(n,t,e),x(!p),console.log(p)},value:t})]}),Object(b.jsx)(j,{label:"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f:",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438",name:"organization-".concat(n),value:t.organization,handleChange:function(e,t){return u(n,t,e)},maxLen:64}),Object(b.jsx)(j,{label:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c:",name:"position-".concat(n),placeholder:"\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440",value:t.workExperience.position,handleChange:function(e,t){return u(n,t,e)},maxLen:64}),Object(b.jsx)(A,{name:"responsibilitiesAndAchievements-".concat(n),label:"\u041e\u0431\u044f\u0437\u0430\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f:",value:t.responsibilitiesAndAchievements,placeholder:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 10 \u043e\u0431\u044f\u0437\u0430\u043d\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u043c\u0438\u043d\u0438\u043c\u0443\u043c 1-2 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f, \u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u043c\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u043c\u0438, \u0438 \u0446\u0438\u0444\u0440\u0430\u043c\u0438",maxLen:1024,handleChange:function(e,t){return u(n,t,e)}}),Object(b.jsxs)("div",{className:D.buttonsContainer,children:[l.length>1?Object(b.jsx)("button",{className:D.button,onClick:function(){return function(e){l.length<=1||(console.log(l[e]),l.splice(e,1),s(Object(w.a)(l)))}(n)},children:Object(b.jsxs)("svg",{width:"16px",height:"16px",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsx)("rect",{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}),Object(b.jsx)("path",{d:"M10 24L38 24",stroke:"black","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})]})}):"",n===l.length-1?Object(b.jsx)("button",{className:D.button,onClick:r,children:Object(b.jsxs)("svg",{width:"18px",height:"18px",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsx)("rect",{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}),Object(b.jsx)("path",{d:"M24.0607 10L24.024 38",stroke:"black","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}),Object(b.jsx)("path",{d:"M10 24L38 24",stroke:"black","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})]})}):""]})]},n)})):""]})},B=t(16),W=function(e){var n=e.handleChange,t=e.data,c=Object(i.useState)([{educationalInstitution:"",degree:"",speciality:"",qualification:"",yearOfEndingEducationalInstitution:""}]),o=Object(a.a)(c,2),l=o[0],s=o[1];Object(i.useEffect)((function(){n("education",l)}),[l]);var r=function(){l.push({educationalInstitution:"",degree:"",speciality:"",qualification:"",yearOfEndingEducationalInstitution:""}),console.log(l),s(Object(w.a)(l))},u=function(e,n,t){var a=t.substr(0,t.indexOf("-"));console.log(l),l[e][a]=n,s(Object(w.a)(l))},d=["\u0414\u043e\u043a\u0442\u043e\u0440 \u043d\u0430\u0443\u043a","\u041a\u0430\u043d\u0434\u0438\u0434\u0430\u0442 \u043d\u0430\u0443\u043a","\u0412\u044b\u0441\u0448\u0435\u0435","\u041d\u0435\u043e\u043a\u043e\u043d\u0447\u0435\u043d\u043d\u043e\u0435 \u0432\u044b\u0441\u0448\u0435\u0435","\u0421\u0440\u0435\u0434\u043d\u0435\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435","\u0421\u0440\u0435\u0434\u043d\u0435\u0435"];return Object(b.jsxs)("div",{className:"education-data-container",children:[Object(b.jsx)(f,{header:"\u041e\u0411\u0420\u0410\u0417\u041e\u0412\u0410\u041d\u0418\u0415"}),l&&l.length?null===l||void 0===l?void 0:l.map((function(e,n){return Object(b.jsxs)("div",{children:["  ",Object(b.jsxs)("div",{className:"education-data",children:[Object(b.jsx)(O,{label:"\u0423\u0440\u043e\u0432\u0435\u043d\u044c:",options:d,name:"degree-".concat(n),value:t.degree,handleChange:function(e,t){return u(n,t,e)}}),Object(b.jsx)(j,{label:"\u0423\u0447\u0435\u0431\u043d\u043e\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0435:",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0443\u0447\u0435\u0431\u043d\u043e\u0433\u043e \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u044f",name:"educationalInstitution-".concat(n),maxLen:128,value:t.educationalInstitution,handleChange:function(e,t){return u(n,t,e)}}),Object(b.jsx)(j,{label:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c:",placeholder:"\u042d\u043a\u043e\u043d\u043e\u043c\u0438\u043a\u0430",name:"speciality-".concat(n),value:t.speciality,maxLen:128,handleChange:function(e,t){return u(n,t,e)}}),Object(b.jsx)(j,{label:"\u041a\u0432\u0430\u043b\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f:",placeholder:"\u0411\u0430\u043a\u0430\u043b\u0430\u0432\u0440 / \u041c\u0430\u0433\u0438\u0441\u0442\u0440 / \u042d\u043a\u043e\u043d\u043e\u043c\u0438\u0441\u0442",name:"qualification-".concat(n),maxLen:64,value:t.qualification,handleChange:function(e,t){return u(n,t,e)}}),Object(b.jsx)(j,{label:"\u0413\u043e\u0434 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f:",placeholder:"\u0433\u0433\u0433\u0433",name:"yearOfEndingEducationalInstitution-".concat(n),value:t.yearOfEndingEducationalInstitution,maxLen:4,handleChange:function(e,t){return u(n,t,e)}}),Object(b.jsxs)("div",{className:B.buttonsContainer,children:["    ",l.length>1?Object(b.jsx)("button",{className:B.button,onClick:function(){return function(e){l.length<=1||(console.log(l[e]),l.splice(e,1),s(Object(w.a)(l)))}(n)},children:Object(b.jsxs)("svg",{width:"16px",height:"16px",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsx)("rect",{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}),Object(b.jsx)("path",{d:"M10 24L38 24",stroke:"black","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})]})}):"",n===l.length-1?Object(b.jsx)("button",{className:B.button,onClick:r,children:Object(b.jsxs)("svg",{width:"18px",height:"18px",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsx)("rect",{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}),Object(b.jsx)("path",{d:"M24.0607 10L24.024 38",stroke:"black","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}),Object(b.jsx)("path",{d:"M10 24L38 24",stroke:"black","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})]})}):""]})]})]},n)})):""]})},M=t(17),R=function(e){var n=e.handleChange,t=e.data,c=Object(i.useState)([{courseName:"",courseEducationalInstitution:"",courseDuration:"",yearOfCourseEnding:""}]),o=Object(a.a)(c,2),l=o[0],s=o[1];Object(i.useEffect)((function(){n("coursesAndTrainings",l)}),[l]);var r=function(){l.push({courseName:"",courseEducationalInstitution:"",courseDuration:"",yearOfCourseEnding:""}),console.log(l),s(Object(w.a)(l))},u=function(e,n,t){var a=t.substr(0,t.indexOf("-"));console.log(l),l[e][a]=n,s(Object(w.a)(l))};return Object(b.jsxs)("div",{className:"courses-and-trainings-container",children:[Object(b.jsx)(f,{header:"\u041a\u0423\u0420\u0421\u042b \u0418 \u0422\u0420\u0415\u041d\u0418\u041d\u0413\u0418"}),l&&l.length?null===l||void 0===l?void 0:l.map((function(e,n){return Object(b.jsxs)("div",{children:[Object(b.jsx)(j,{label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0443\u0440\u0441\u0430:",placeholder:"\u041a\u0430\u0434\u0440\u043e\u0432\u044b\u0439 \u0443\u0447\u0451\u0442 1C: \u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u043e\u043c 3.1",name:"courseName-".concat(n),handleChange:function(e,t){return u(n,t,e)},value:t.courseName,maxLen:128}),Object(b.jsx)(j,{label:"\u0423\u0447\u0435\u0431\u043d\u043e\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0435:",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0443\u0447\u0435\u0431\u043d\u043e\u0433\u043e \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u044f",name:"courseEducationalInstitution-".concat(n),handleChange:function(e,t){return u(n,t,e)},value:t.courseEducationalInstitution,maxLen:64}),Object(b.jsx)(j,{label:"\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c:",placeholder:"2 \u043c\u0435\u0441\u044f\u0446\u0430",name:"courseDuration-".concat(n),handleChange:function(e,t){return u(n,t,e)},value:t.duration,maxLen:32}),Object(b.jsx)(j,{label:"\u0413\u043e\u0434 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f:",placeholder:"\u0433\u0433\u0433\u0433",name:"yearOfCourseEnding-".concat(n),handleChange:function(e,t){return u(n,t,e)},value:t.yearOfEnding,maxLen:4}),Object(b.jsxs)("div",{className:M.buttonsContainer,children:[" ",l.length>1?Object(b.jsx)("button",{className:M.button,onClick:function(){return function(e){l.length<=1||(console.log(l[e]),l.splice(e,1),s(Object(w.a)(l)))}(n)},children:Object(b.jsxs)("svg",{width:"16px",height:"16px",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsx)("rect",{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}),Object(b.jsx)("path",{d:"M10 24L38 24",stroke:"black","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})]})}):"",n===l.length-1?Object(b.jsx)("button",{className:M.button,onClick:r,children:Object(b.jsxs)("svg",{width:"18px",height:"18px",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsx)("rect",{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}),Object(b.jsx)("path",{d:"M24.0607 10L24.024 38",stroke:"black","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}),Object(b.jsx)("path",{d:"M10 24L38 24",stroke:"black","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})]})}):""]})]},n)})):""]})},P=t(22),T=function(e){var n=e.marked,t=e.circleId;return Object(b.jsx)("span",{"data-star-id":t,className:P.circle,role:"button",children:n?"\u25cf":"\u25cb"})},F=function(e){var n,t=e.value,i=e.handleChange,o=e.name,l=function(e){i(o,e.target.getAttribute("data-star-id"))},s=c.a.useState(parseInt(t)||5),u=Object(a.a)(s,2),d=u[0],h=u[1],j=c.a.useState(0),g=Object(a.a)(j,2),O=g[0],p=g[1],f=function(e){var n=0;e&&e.target&&e.target.getAttribute("data-star-id")&&(n=e.target.getAttribute("data-star-id")),p(n)};return Object(b.jsx)("div",(n={className:P.container,onMouseOut:function(){return f(null)},onClick:l},Object(r.a)(n,"onClick",(function(e){l(e),h(e.target.getAttribute("data-star-id")||d)})),Object(r.a)(n,"onMouseOver",f),Object(r.a)(n,"children",Array.from({length:10},(function(e,n){return Object(b.jsx)(T,{circleId:n+1,marked:O?O>=n+1:d>=n+1},"star_".concat(n+1))}))),n))},z=(t(34),t(15)),q=function(e){var n=e.handleChange,t=e.data,c=Object(i.useState)([{languageName:"",rating:5}]),o=Object(a.a)(c,2),l=o[0],s=o[1];Object(i.useEffect)((function(){n("languages",l)}),[l]);var r=function(){l.push({languageName:"",rating:5}),console.log(l),s(Object(w.a)(l))};return Object(b.jsxs)("div",{className:"language-skills-container",children:[Object(b.jsx)(f,{header:"\u0412\u041b\u0410\u0414\u0415\u041d\u0418\u0415 \u042f\u0417\u042b\u041a\u0410\u041c\u0418"}),l&&l.length?null===l||void 0===l?void 0:l.map((function(e,n){return Object(b.jsxs)("div",{className:z.languageSkills,children:[Object(b.jsx)(j,{label:"\u042f\u0437\u044b\u043a:",placeholder:"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439 (B2)",name:"language-".concat(n),handleChange:function(e,t){return function(e,n){l[e].languageName=n,s(Object(w.a)(l))}(n,t)},value:t.language,maxLen:16}),Object(b.jsx)(F,{name:"languageSkillRating-".concat(n),handleChange:function(e,t){return function(e,n){l[e].rating=n,s(Object(w.a)(l))}(n,t)}}),Object(b.jsxs)("div",{className:z.buttonsContainer,children:[l.length>1?Object(b.jsx)("button",{className:z.button,onClick:function(){return function(e){l.length<=1||(console.log(l[e]),l.splice(e,1),s(Object(w.a)(l)))}(n)},children:Object(b.jsxs)("svg",{width:"16px",height:"16px",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsx)("rect",{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}),Object(b.jsx)("path",{d:"M10 24L38 24",stroke:"black","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})]})}):"",n===l.length-1?Object(b.jsx)("button",{className:z.button,onClick:r,children:Object(b.jsxs)("svg",{width:"18px",height:"18px",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsx)("rect",{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}),Object(b.jsx)("path",{d:"M24.0607 10L24.024 38",stroke:"black","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}),Object(b.jsx)("path",{d:"M10 24L38 24",stroke:"black","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})]})}):""]})]},n)})):""]})},Q=t(25),J=function(e){var n=e.handleChange,t=e.data;Object(i.useEffect)((function(){console.log(t)}),[t]);var c=Object(i.useState)([{programsAndSkills:"",programmingSkillsRating:5}]),o=Object(a.a)(c,2),l=o[0],s=o[1];Object(i.useEffect)((function(){n("computerSkills",l)}),[l]);return Object(b.jsxs)("div",{className:"computer-skills-container",children:[Object(b.jsx)(f,{header:"\u0412\u041b\u0410\u0414\u0415\u041d\u0418\u0415 \u041a\u041e\u041c\u041f\u042c\u042e\u0422\u0415\u0420\u041e\u041c"}),Object(b.jsxs)("div",{className:Q.container,children:[Object(b.jsx)(A,{name:"programsAndSkills",value:t.programsAndSkills,label:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0438 \u043d\u0430\u0432\u044b\u043a\u0438:",placeholder:"Microsoft Word, Excel, Figma",maxLen:2048,handleChange:n}),Object(b.jsx)(F,{name:"programmingSkillsRating",handleChange:function(e,n){return function(e){l[0].programmingSkillsRating=e,s(Object(w.a)(l))}(n)}})]})]})},H=function(e){var n=e.handleChange,t=e.data;return Object(b.jsxs)("div",{className:"computer-skills-container",children:[Object(b.jsx)(f,{header:"\u0414\u041e\u041f\u041e\u041b\u041d\u0418\u0422\u0415\u041b\u042c\u041d\u042b\u0415 \u0421\u0412\u0415\u0414\u0415\u041d\u0418\u042f"}),Object(b.jsxs)("div",{className:"computer-skills",children:[Object(b.jsx)(A,{label:"\u0412\u0430\u0448\u0438 \u0443\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f:",placeholder:"\u0423\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0432 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f",name:"hobbies",value:t.hobbies,handleChange:n,maxLen:2048}),Object(b.jsx)(A,{label:"\u041b\u0438\u0447\u043d\u044b\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430:",placeholder:'\u0421\u0442\u0440\u0435\u0441\u0441\u043e\u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0441\u0442\u044c: "\u0417\u0430\u043a\u043b\u044e\u0447\u0438\u043b \u0434\u043e\u0433\u043e\u0432\u043e\u0440 \u0441 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u043a\u0430\u0437\u0430\u043b \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u043c \u0442\u0440\u0451\u043c \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430\u043c"',name:"personalQualities",value:t.personalQualities,handleChange:n,maxLen:2048}),Object(b.jsx)(A,{label:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f:",placeholder:"\u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f, \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0437\u043d\u0430\u043d\u0438\u044f, \u043d\u0430\u0432\u044b\u043a\u0438 \u0438 \u0434\u0440\u0443\u0433\u0430\u044f \u0437\u043d\u0430\u0447\u0438\u043c\u043e\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u043f\u0440\u0435\u0442\u0435\u043d\u0434\u0443\u0435\u043c\u043e\u0439 \u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u0438",name:"additionalInformation",value:t.additionalInformation,handleChange:n,maxLen:2048})]})]})},U=(t(32),["dateOfBirth","driverLicence","email","expectedSalary","name","patronymic","personalQualities","placeOfResidence","workPosition","socialProfile","surname","email","phoneNumber","socialProfile","courseDuration","courseEducationalInstitution","courseName","yearOfCourseEnding","educationalInstitution","qualification","speciality","yearOfEndingEducationalInstitution","languageName","beginningOfWork","endOfWork","organization","position"]),Y={name:"\u0418\u043c\u044f",surname:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",patronymic:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",position:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",expectedSalary:"\u041e\u0436\u0438\u0434\u0430\u0435\u043c\u0430\u044f \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430",busyness:"\u0417\u0430\u043d\u044f\u0442\u043e\u0441\u0442\u044c",workingSchedule:"\u0413\u0440\u0430\u0444\u0438\u043a \u0440\u0430\u0431\u043e\u0442\u044b",programsAndSkills:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0438 \u043d\u0430\u0432\u044b\u043a\u0438",programmingSkillsRating:"",phoneNumber:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",email:"Email",socialProfile:"\u0421\u043e\u0446. \u043f\u0440\u043e\u0444\u0438\u043b\u044c",placeOfResidence:"\u041c\u0435\u0441\u0442\u043e \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f",dateOfBirth:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",sex:"\u041f\u043e\u043b",courseDuration:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043a\u0443\u0440\u0441\u0430",courseEducationalInstitution:"\u0423\u0447\u0435\u0431\u043d\u043e\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0435",courseName:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0443\u0440\u0441\u0430",yearOfCourseEnding:"\u0413\u043e\u0434 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u043a\u0443\u0440\u0441\u0430",beginningOfWork:"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b",endOfWork:"\u041e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u044b",organization:"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f",responsibilitiesAndAchievements:"\u041e\u0431\u044f\u0437\u0430\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f",educationalInstitution:"\u0423\u0447\u0435\u0431\u043d\u043e\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0435",degree:"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f",qualification:"\u041a\u0432\u0430\u043b\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",speciality:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c",yearOfEndingEducationalInstitution:"\u0413\u043e\u0434 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0443\u0447\u0435\u0431\u043d\u043e\u0433\u043e \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u044f",languageName:"\u042f\u0437\u044b\u043a",hobbies:"\u0412\u0430\u0448\u0438 \u0443\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f",personalQualities:"\u041b\u0438\u0447\u043d\u044b\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430",additionalInformation:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"};function G(e,n){for(var t=0;t<=Object.keys(e).length;t++)for(var a in e){var i=e[a];if(a===n[t]){if(console.log(a),"object"==typeof i)return!1;if(""===i||"undefined"===typeof i)return alert("\u041d\u0435\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043f\u043e\u043b\u0435: ".concat(Y[a]," ")),console.log(Y[a]),!1}}}function V(e){return!!G(e,["name","surname","patronymic","workPosition","expectedSalary"])}function Z(e){return!!G(e,["dateOfBirth","driverLicence","placeOfResidence"])}function K(e){for(var n=0;n<=Object.keys(e.workExperience[0]).length;n++){var t=e.workExperience[n];console.log(t);return!!G(t,["beginningOfWork","endOfWork","organization","position","responsibilitiesAndAchievements"])}}function X(e){for(var n=0;n<=Object.keys(e.education[0]).length;n++){var t=e.education[n];console.log(t);return!!G(t,["educationalInstitution","degree","speciality","qualification","yearOfEndingEducationalInstitution"])}}function $(e){for(var n=0;n<=Object.keys(e.coursesAndTrainings[0]).length;n++){var t=e.coursesAndTrainings[n];console.log(t);return!!G(t,["courseName","courseEducationalInstitution","courseDuration","yearOfCourseEnding"])}}function ee(e){for(var n=0;n<=Object.keys(e.languages[0]).length;n++){var t=e.languages[n];console.log(t);return!!G(t,["languageName","rating"])}}function ne(e){return!!G(e,["programsAndSkills","programmingSkillsRating"])}function te(e){return!!G(e,["hobbies","personalQualities","additionalInformation"])}var ae=function(){var e={name:"",surname:"",patronymic:"",workPosition:"",expectedSalary:"",busyness:"\u0427\u0430\u0441\u0442\u0438\u0447\u043d\u0430\u044f",workingSchedule:"\u0413\u0438\u0431\u043a\u0438\u0439 \u0433\u0440\u0430\u0444\u0438\u043a",readinessOfRelocation:"",readinessOfBusinessTrip:"",contactDetails:[{phoneNumber:"",email:"",socialProfile:""}],placeOfResidence:"",dateOfBirth:"",driverLicence:"",sex:"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e",coursesAndTrainings:[{courseDuration:"",courseEducationalInstitution:"",courseName:"",yearOfCourseEnding:""}],workExperience:[{beginningOfWork:"",endOfWork:"",organization:"",position:"",responsibilitiesAndAchievements:""}],education:[{educationalInstitution:"",degree:"",qualification:"",speciality:"",yearOfEndingEducationalInstitution:""}],languages:[{languageName:"",rating:"5"}],hobbies:"",personalQualities:"",additionalInformation:""},n=new FormData,t=null,c=Object(i.useState)(e),o=Object(a.a)(c,2),l=o[0],d=o[1],j=Object(i.useCallback)((function(e,n){d((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(r.a)({},e,n))}))}),[]);for(var g in Object(i.useEffect)((function(){t=l,console.log(t)}),[l]),l)"object"===typeof l[g]?n.append(g,JSON.stringify(l[g])):n.append(g,l[g]);console.log(n),Object(i.useContext)(h);var O=function(){n.append("personalImage");console.log(n);var e,t,a=Object(s.a)(n.values());try{for(a.s();!(e=a.n()).done;){var i=e.value;console.log(i)}}catch(c){a.e(c)}finally{a.f()}t=n,fetch("".concat("https://cv.renault-belarus.by/server/test".replace(/^\//g,"")),{method:"POST",body:t}).then((function(e){return e})).catch(),function(e){for(var n=[V,Z,K,X,$,ee,ne,te],t=0;t<n.length;t++)if(!n[t](e))return}(l)};return Object(b.jsxs)("div",{className:"App",children:[" ",Object(b.jsx)(_,{initialData:e,handleChange:j,data:l})," ",Object(b.jsx)(y,{handleChange:j,data:l})," ",Object(b.jsx)(E,{handleChange:j,data:l})," ",Object(b.jsx)(I,{handleChange:j,data:l})," ",Object(b.jsx)(W,{handleChange:j,data:l})," ",Object(b.jsx)(R,{handleChange:j,data:l})," ",Object(b.jsx)(q,{handleChange:j,data:l})," ",Object(b.jsx)(J,{handleChange:j,data:l})," ",Object(b.jsx)(H,{handleChange:j,data:l})," ",Object(b.jsx)("button",{className:"submitButton",onClick:function(e){O()},children:" \u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c "})," "]})};function ie(){var e=Object(i.useState)(U),n=Object(a.a)(e,2),t=n[0],o=n[1];return Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(h.Provider,{value:{fields:t,changeFields:o},children:Object(b.jsx)(ae,{})})})}l.a.render(Object(b.jsx)(ie,{}),document.getElementById("root"))}],[[33,1,2]]]);
//# sourceMappingURL=main.cc8c7a37.chunk.js.map