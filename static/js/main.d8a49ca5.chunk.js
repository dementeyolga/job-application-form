(this["webpackJsonpjob-form"]=this["webpackJsonpjob-form"]||[]).push([[0],[,,,,,,,function(e,n,a){e.exports={inputContainer:"Input_inputContainer__2YXMP",rightBlock:"Input_rightBlock__17xQw",label:"Input_label__1NExA",input:"Input_input__3PZwy",inputError:"Input_inputError__AXZAw",checkboxAndInput:"Input_checkboxAndInput__3QgCG"}},function(e,n,a){e.exports={loadPhoto:"MainData_loadPhoto__2upfV",mainDataContainer:"MainData_mainDataContainer__2A-HY",mainData:"MainData_mainData__17k_6",photoContainer:"MainData_photoContainer__28_eu",fileInput:"MainData_fileInput__TjAOv",image:"MainData_image__2kS2z",imageInputDescription:"MainData_imageInputDescription__2SvF6"}},function(e,n,a){e.exports={container:"Checkbox_container__1Gmv1",description:"Checkbox_description__17stk",containerWithoutLabel:"Checkbox_containerWithoutLabel__2DRFe",checkbox:"Checkbox_checkbox__3ytrV",label:"Checkbox_label__3o-kp"}},function(e,n,a){e.exports={label:"TextArea_label__1f9jx",container:"TextArea_container__1w7Z2",textAreaWrapper:"TextArea_textAreaWrapper__DvlvD",input:"TextArea_input__391-M",inputError:"TextArea_inputError__3A8F4",lengthStatus:"TextArea_lengthStatus__8RAGe"}},,function(e,n,a){e.exports={buttonsContainer:"ContactDetails_buttonsContainer__2eHa0",button:"ContactDetails_button__1f7C4",phoneAndButtons:"ContactDetails_phoneAndButtons__2uQbb"}},,function(e,n,a){e.exports={selectContainer:"Select_selectContainer__15FdT",select:"Select_select__1C-Bc",label:"Select_label__9-owp"}},function(e,n,a){e.exports={inputAndSelect:"WorkExperience_inputAndSelect__3aJx6",buttonsContainer:"WorkExperience_buttonsContainer__27c7C",button:"WorkExperience_button__2T3oq"}},function(e,n,a){e.exports={languageSkills:"LanguageSkills_languageSkills__1W_yz",button:"LanguageSkills_button__2DBQJ",buttonsContainer:"LanguageSkills_buttonsContainer__1ZS7Y"}},function(e,n,a){e.exports={buttonsContainer:"Education_buttonsContainer__1DL6m",button:"Education_button__14x9u"}},function(e,n,a){e.exports={buttonsContainer:"CoursesAndTrainings_buttonsContainer__2t81g",button:"CoursesAndTrainings_button__2DzVe"}},,,function(e,n,a){e.exports={headerContainer:"Header_headerContainer__iFxQE",header:"Header_header__3CkPJ"}},function(e,n,a){e.exports={container:"Scale_container__1iJ7D",circle:"Scale_circle__1K4n7"}},,function(e,n,a){e.exports={inputAndCheckbox:"PersonalData_inputAndCheckbox__YafG5"}},function(e,n,a){e.exports={container:"ComputerSkills_container__15wP4"}},,,,,,,function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(3),c=a(1),i=a.n(c),o=a(23),l=a.n(o),r=a(6),s=a(5),u=a(20),d=a(7),b=i.a.createContext({}),h=a(0),j=function(e){var n=e.label,a=e.placeholder,i=e.name,o=e.value,l=e.handleChange,r=e.maxLen,s=e.isInputClickable,u=Object(c.useContext)(b),j=u.fields,g=u.changeFields,m=Object(c.useState)(!1),f=Object(t.a)(m,2),O=f[0],p=f[1];return Object(h.jsxs)("div",{className:d.inputContainer,children:[Object(h.jsx)("div",{className:d.label,children:n}),Object(h.jsx)("div",{className:d.rightBlock,children:Object(h.jsx)("input",{disabled:s,name:i,value:o,className:"".concat(O?d.input:d.inputError),placeholder:a,maxLength:r,onChange:function(e){for(var n=0;n<=j.length;n++)j[n]===e.target.name?function(){console.log(j[n]),p(!1);var a=e.target.name;g(j.filter((function(e){return e!==a})))}():p(!0);console.log(j),l(e.target.name,e.target.value)}})})]})},g=a(14),m=function(e){var n=e.options,a=e.handleChange,t=e.label,c=e.name,i=e.value;return Object(h.jsxs)("div",{className:g.selectContainer,children:[Object(h.jsx)("div",{className:g.label,children:t}),Object(h.jsx)("div",{className:g.rightBlock}),Object(h.jsx)("select",{className:g.select,onChange:function(e){a(e.target.name,e.target.value)},name:c,value:i,children:n.map((function(e,n){return Object(h.jsx)("option",{children:e},n)}))})]})},f=a(21),O=function(e){return Object(h.jsx)("div",{className:f.headerContainer,children:Object(h.jsx)("div",{className:f.header,children:e.header})})},p=a(8),x=a(9),v=function(e){var n=e.description,a=e.handleChange,i=e.name,o=e.value,l=Object(c.useState)(0),r=Object(t.a)(l,2),s=r[0],u=r[1];return Object(c.useEffect)((function(){console.log(s),a(i,s)}),[i,s]),Object(h.jsxs)("div",{className:x.containerWithoutLabel,children:[Object(h.jsx)("input",{name:i,value:o,checked:s,type:"checkbox",className:x.checkbox}),Object(h.jsx)("label",{onClick:function(e){u(0===s?1:0)},name:i,value:o,checked:s,htmlFor:"checkbox",children:n})]})},C=function(e){var n=e.description,a=e.label,i=e.handleChange,o=e.name,l=e.value,r=Object(c.useState)(0),s=Object(t.a)(r,2),u=s[0],d=s[1];return Object(c.useEffect)((function(){console.log("qwe"),console.log(u),i(o,u)}),[i,o,u]),Object(h.jsxs)("div",{className:x.container,children:[Object(h.jsx)("div",{className:x.label,children:a}),Object(h.jsx)("input",{name:o,value:l,checked:u,type:"checkbox",className:x.checkbox}),Object(h.jsx)("label",{onClick:function(e){console.log("1!!!!!!!!!!!!!!!!!!!!!!!!!"),d(0===u?1:0)},name:o,value:l,htmlFor:"checkbox",children:n})]})},_=a.p+"static/media/blank-profile-picture.c3f94521.png",k=function(e){var n=e.handleChange,a=e.data,o=Object(c.useState)(_),l=Object(t.a)(o,2),r=l[0],s=l[1],u=i.a.useRef(null);return Object(h.jsxs)("div",{className:p.mainDataContainer,children:[Object(h.jsx)(O,{header:"\u041e\u0421\u041d\u041e\u0412\u041d\u042b\u0415 \u0414\u0410\u041d\u041d\u042b\u0415"}),Object(h.jsxs)("div",{className:p.mainData,children:[Object(h.jsx)(j,{label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f:",placeholder:"\u0418\u0432\u0430\u043d\u043e\u0432",name:"surname",handleChange:n,value:a.surname,maxLen:64}),Object(h.jsx)(j,{label:"\u0418\u043c\u044f:",placeholder:"\u0418\u0432\u0430\u043d",name:"name",handleChange:n,value:a.name,maxLen:64}),Object(h.jsx)(j,{label:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e:",placeholder:"\u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",name:"patronymic",handleChange:n,value:a.patronymic,maxLen:64}),Object(h.jsx)(j,{label:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c:",placeholder:"\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440",name:"workPosition",handleChange:n,value:a.workPosition,maxLen:64}),Object(h.jsx)(j,{label:"\u041e\u0436\u0438\u0434\u0430\u0435\u043c\u0430\u044f \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430:",placeholder:"\u043e\u0442 100 000 \u0440\u0443\u0431",name:"expectedSalary",handleChange:n,value:a.expectedSalary,maxLen:16}),Object(h.jsx)(m,{label:"\u0413\u0440\u0430\u0444\u0438\u043a \u0440\u0430\u0431\u043e\u0442\u044b:",options:["\u041f\u043e\u043b\u043d\u044b\u0439 \u0434\u0435\u043d\u044c","\u0421\u043c\u0435\u043d\u043d\u044b\u0439 \u0433\u0440\u0430\u0444\u0438\u043a","\u0413\u0438\u0431\u043a\u0438\u0439 \u0433\u0440\u0430\u0444\u0438\u043a","\u0423\u0434\u0430\u043b\u0451\u043d\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430","\u0412\u0430\u0445\u0442\u043e\u0432\u044b\u0439 \u043c\u0435\u0442\u043e\u0434"],name:"workingSchedule",handleChange:n,value:a.workingSchedule,maxLen:32}),Object(h.jsx)(m,{label:"\u0417\u0430\u043d\u044f\u0442\u043e\u0441\u0442\u044c:",options:["\u041f\u043e\u043b\u043d\u0430\u044f","\u0427\u0430\u0441\u0442\u0438\u0447\u043d\u0430\u044f","\u041f\u0440\u043e\u0435\u043a\u0442\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430","\u0421\u0442\u0430\u0436\u0438\u0440\u043e\u0432\u043a\u0430","\u0412\u043e\u043b\u043e\u043d\u0442\u0451\u0440\u0441\u0442\u0432\u043e"],name:"busyness",handleChange:n,value:a.busyness}),Object(h.jsx)(C,{label:"\u041f\u0435\u0440\u0435\u0435\u0437\u0434:",description:"\u0433\u043e\u0442\u043e\u0432(\u0430) \u043a \u043f\u0435\u0440\u0435\u0435\u0437\u0434\u0443",name:"readinessOfRelocation",value:a.readinessOfRelocation,handleChange:n}),Object(h.jsx)(C,{label:"\u041a\u043e\u043c\u0430\u043d\u0434\u0438\u0440\u043e\u0432\u043a\u0438:",description:"\u0433\u043e\u0442\u043e\u0432(\u0430)",name:"readinessOfBusinessTrips",value:a.readinessOfBusinessTrips,handleChange:n})]}),Object(h.jsxs)("div",{className:p.photoContainer,children:[Object(h.jsx)("input",{ref:u,type:"file",onChange:function(e){e.target.files&&e.target.files[0]&&s(URL.createObjectURL(e.target.files[0])),console.log(URL.createObjectURL(e.target.files[0]))},className:p.fileInput}),Object(h.jsx)("img",{className:p.image,src:r}),Object(h.jsx)("button",{className:p.loadPhoto,onClick:function(e){u.current.click()},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"}),Object(h.jsx)("div",{className:p.imageInputDescription,children:"\u0424\u043e\u0442\u043e \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 jpg, png, \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 30MB"})]})]})},N=a(2),E=a(12),S=function(e){var n=e.handleChange,a=e.data,i=Object(c.useState)([{phoneNumber:"+375",email:"",socialProfile:""}]),o=Object(t.a)(i,2),l=o[0],r=o[1];Object(c.useEffect)((function(){n("contactDetails",l)}),[l]);var s=function(){l.push({phoneNumber:"+375",email:"",socialProfile:""}),console.log(l),r(Object(N.a)(l))};return Object(h.jsxs)("div",{className:"contact-details-container",children:[Object(h.jsx)(O,{header:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(h.jsxs)("div",{className:"contact-details",children:[l&&l.length?null===l||void 0===l?void 0:l.map((function(e,n){return Object(h.jsx)("div",{className:E.container,children:Object(h.jsxs)("div",{className:E.phoneAndButtons,children:["  ",Object(h.jsx)(j,{label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:",placeholder:"+375 (44) 123-45-67",name:"phoneNumber-".concat(n),value:a.contactDetails[n].phoneNumber,handleChange:function(e,t){!function(e,n,t){var c=t.substr(0,t.indexOf("-"));console.log(l),0===n.length&&(a.contactDetails[e].phoneNumber="+375"+n,l[e][c]="+375"+n);var i=n.replace(/\D/g,"").match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);n=i[2]?"+"+i[1]+(i[3]?" ("+i[2]+") ":i[2])+i[3]+(i[4]?"-"+i[4]:"")+(i[5]?"-"+i[5]:""):i[1],console.log(e),n.length<=4?(a.contactDetails[e].phoneNumber="+375",l[e][c]="+375"):(a.contactDetails[e].phoneNumber=n,l[e][c]=n),r(Object(N.a)(l))}(n,t,e)},maxLen:19}),Object(h.jsxs)("div",{className:E.buttonsContainer,children:[l.length>1?Object(h.jsx)("button",{className:E.button,onClick:function(){return function(e){l.length<=1||(console.log(l[e]),l.splice(e,1),r(Object(N.a)(l)))}(n)},children:"-"}):"",n===l.length-1?Object(h.jsx)("button",{className:E.button,onClick:s,children:"+"}):""]})]})},n)})):"",Object(h.jsx)(j,{label:"Email:",placeholder:"your_email@gmail.com",name:"email",value:a.email,handleChange:n,maxLen:512}),Object(h.jsx)(j,{label:"\u0421\u043e\u0446. \u043f\u0440\u043e\u0444\u0438\u043b\u044c:",placeholder:"https://vk.com/id0000000",name:"socialProfile",value:a.socialProfile,handleChange:n,maxLen:2048})]})]})},y=a(24),A=function(e){var n=e.handleChange,a=e.data,i=Object(c.useState)([{placeOfResidence:"",dateOfBirth:"",driverLicence:"",sex:""}]),o=Object(t.a)(i,2),l=o[0],r=o[1];Object(c.useEffect)((function(){n("coursesAndTrainings",l)}),[l]);return Object(h.jsxs)("div",{className:"personal-data-container",children:[Object(h.jsx)(O,{header:"\u041b\u0418\u0427\u041d\u042b\u0415 \u0421\u0412\u0415\u0414\u0415\u041d\u0418\u042f"}),Object(h.jsxs)("div",{className:"personal-data",children:[Object(h.jsx)(j,{label:"\u041c\u0435\u0441\u0442\u043e \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f:",placeholder:"\u0433. \u041c\u0438\u043d\u0441\u043a",name:"placeOfResidence",handleChange:n,value:a.placeOfResidence,maxLen:95}),Object(h.jsx)(j,{label:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f:",placeholder:"\u0434\u0434.\u043c\u043c.\u0433\u0433\u0433\u0433",name:"dateOfBirth",handleChange:function(e){!function(e,n,t){var c=t.substr(0,t.indexOf("-")),i=n.replace(/\D/g,"").match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);n=i[2]?i[1]+"."+i[2]+(i[3]?"."+i[3]:""):i[1],a.dateOfBirth[0].phoneNumber=n,l[e][c]=n,r(Object(N.a)(l))}(e,a)},value:a.dateOfBirth,maxLen:10}),Object(h.jsx)("div",{className:y.inputAndCheckbox}),Object(h.jsx)(j,{label:"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435:",placeholder:"\u0411",name:"driverLicence",handleChange:n,value:a.driverLicence,maxLen:15}),Object(h.jsx)(m,{label:"\u041f\u043e\u043b:",options:["\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e","\u041c\u0443\u0436\u0441\u043a\u043e\u0439","\u0416\u0435\u043d\u0441\u043a\u0438\u0439"],name:"sex",value:a.sex,handleChange:n})]})]})},L=a(10),I=function(e){var n=e.maxLen,a=e.label,i=e.placeholder,o=e.name,l=e.value,r=e.handleChange,s=Object(c.useContext)(b),u=s.fields,d=s.changeFields,j=Object(c.useState)(!1),g=Object(t.a)(j,2),m=g[0],f=g[1];return Object(h.jsxs)("label",{className:L.container,children:[Object(h.jsx)("div",{className:L.label,children:a}),Object(h.jsxs)("div",{className:L.textAreaWrapper,children:[Object(h.jsx)("textarea",{name:o,value:l,className:"".concat(m?L.input:L.inputError),placeholder:i,maxLength:n,onChange:function(e){for(var n=0;n<=u.length;n++)u[n]===e.target.name?function(){console.log(u[n]),f(!1);var a=e.target.name;d(u.filter((function(e){return e!==a})))}():f(!0);console.log(u),r(e.target.name,e.target.value)}}),Object(h.jsxs)("div",{className:L.lengthStatus,children:[(null===l||void 0===l?void 0:l.length)||0,"/",n]})]})]})},D=a(15),W=function(e){var n=e.handleChange,a=e.data,i=Object(c.useState)([{beginningOfWork:"",endOfWork:"",organization:"",position:"",responsibilitiesAndAchievements:""}]),o=Object(t.a)(i,2),l=o[0],r=o[1];Object(c.useEffect)((function(){n("workExperience",l)}),[l]);var s=function(){l.push({beginningOfWork:"",endOfWork:"",organization:"",position:"",responsibilitiesAndAchievements:""}),console.log(l),r(Object(N.a)(l))},u=function(e,n,a){var t=a.substr(0,a.indexOf("-"));console.log(l),l[e][t]=n,r(Object(N.a)(l))},d=Object(c.useState)(!1),b=Object(t.a)(d,2),g=(b[0],b[1],Object(c.useState)(!0)),m=Object(t.a)(g,2),f=m[0],p=m[1];return Object(h.jsxs)("div",{className:"work-experience-container",children:[Object(h.jsx)(O,{header:"\u041e\u041f\u042b\u0422 \u0420\u0410\u0411\u041e\u0422\u042b"}),l&&l.length?null===l||void 0===l?void 0:l.map((function(e,n){return Object(h.jsxs)("div",{children:[" ",Object(h.jsx)(j,{label:"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b:",name:"beginningOfWork-".concat(n),handleChange:function(e,a){return u(n,a,e)},value:a.beginningOfWork,placeholder:"\u0433\u0433\u0433\u0433",maxLen:4}),Object(h.jsxs)("div",{className:D.inputAndSelect,children:[Object(h.jsx)(j,{isInputClickable:f,label:"\u041e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u044b:",name:"endOfWork-".concat(n),value:a.endOfWork,handleChange:function(e,a){u(n,a,e)},placeholder:"\u043c\u043c.\u0433\u0433\u0433\u0433",maxLen:7}),Object(h.jsx)(v,{description:"\u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f",name:"endOfWorkStatus-".concat(n),handleChange:function(e,a){u(n,a,e),p(!f),console.log(f)},value:a})]}),Object(h.jsx)(j,{label:"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f:",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438",name:"organization-".concat(n),value:a.organization,handleChange:function(e,a){return u(n,a,e)},maxLen:64}),Object(h.jsx)(j,{label:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c:",name:"position-".concat(n),placeholder:"\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440",value:a.workExperience.position,handleChange:function(e,a){return u(n,a,e)},maxLen:64}),Object(h.jsx)(I,{name:"responsibilitiesAndAchievements-".concat(n),label:"\u041e\u0431\u044f\u0437\u0430\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f:",value:a.responsibilitiesAndAchievements,placeholder:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 10 \u043e\u0431\u044f\u0437\u0430\u043d\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u043c\u0438\u043d\u0438\u043c\u0443\u043c 1-2 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f, \u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u043c\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u043c\u0438, \u0438 \u0446\u0438\u0444\u0440\u0430\u043c\u0438",maxLen:1024,handleChange:function(e,a){return u(n,a,e)}}),Object(h.jsxs)("div",{className:D.buttonsContainer,children:[l.length>1?Object(h.jsx)("button",{className:D.button,onClick:function(){return function(e){l.length<=1||(console.log(l[e]),l.splice(e,1),r(Object(N.a)(l)))}(n)},children:"-"}):"",n===l.length-1?Object(h.jsx)("button",{className:D.button,onClick:s,children:"+"}):""]})]},n)})):""]})},w=a(17),B=function(e){var n=e.handleChange,a=e.data,i=Object(c.useState)([{educationalInstitution:"",degree:"",speciality:"",qualification:"",yearOfEndingEducationalInstitution:""}]),o=Object(t.a)(i,2),l=o[0],r=o[1];Object(c.useEffect)((function(){n("education",l)}),[l]);var s=function(){l.push({educationalInstitution:"",degree:"",speciality:"",qualification:"",yearOfEndingEducationalInstitution:""}),console.log(l),r(Object(N.a)(l))},u=function(e,n,a){var t=a.substr(0,a.indexOf("-"));console.log(l),l[e][t]=n,r(Object(N.a)(l))},d=["\u0414\u043e\u043a\u0442\u043e\u0440 \u043d\u0430\u0443\u043a","\u041a\u0430\u043d\u0434\u0438\u0434\u0430\u0442 \u043d\u0430\u0443\u043a","\u0412\u044b\u0441\u0448\u0435\u0435","\u041d\u0435\u043e\u043a\u043e\u043d\u0447\u0435\u043d\u043d\u043e\u0435 \u0432\u044b\u0441\u0448\u0435\u0435","\u0421\u0440\u0435\u0434\u043d\u0435\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435","\u0421\u0440\u0435\u0434\u043d\u0435\u0435"];return Object(h.jsxs)("div",{className:"education-data-container",children:[Object(h.jsx)(O,{header:"\u041e\u0411\u0420\u0410\u0417\u041e\u0412\u0410\u041d\u0418\u0415"}),l&&l.length?null===l||void 0===l?void 0:l.map((function(e,n){return Object(h.jsxs)("div",{children:["  ",Object(h.jsxs)("div",{className:"education-data",children:[Object(h.jsx)(m,{label:"\u0423\u0440\u043e\u0432\u0435\u043d\u044c:",options:d,name:"degree-".concat(n),value:a.degree,handleChange:function(e,a){return u(n,a,e)}}),Object(h.jsx)(j,{label:"\u0423\u0447\u0435\u0431\u043d\u043e\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0435:",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0443\u0447\u0435\u0431\u043d\u043e\u0433\u043e \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u044f",name:"educationalInstitution-".concat(n),maxLen:128,value:a.educationalInstitution,handleChange:function(e,a){return u(n,a,e)}}),Object(h.jsx)(j,{label:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c:",placeholder:"\u042d\u043a\u043e\u043d\u043e\u043c\u0438\u043a\u0430",name:"speciality-".concat(n),value:a.speciality,maxLen:128,handleChange:function(e,a){return u(n,a,e)}}),Object(h.jsx)(j,{label:"\u041a\u0432\u0430\u043b\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f:",placeholder:"\u0411\u0430\u043a\u0430\u043b\u0430\u0432\u0440 / \u041c\u0430\u0433\u0438\u0441\u0442\u0440 / \u042d\u043a\u043e\u043d\u043e\u043c\u0438\u0441\u0442",name:"qualification-".concat(n),maxLen:64,value:a.qualification,handleChange:function(e,a){return u(n,a,e)}}),Object(h.jsx)(j,{label:"\u0413\u043e\u0434 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f:",placeholder:"\u0433\u0433\u0433\u0433",name:"yearOfEndingEducationalInstitution-".concat(n),value:a.yearOfEndingEducationalInstitution,maxLen:4,handleChange:function(e,a){return u(n,a,e)}}),Object(h.jsxs)("div",{className:w.buttonsContainer,children:["    ",l.length>1?Object(h.jsx)("button",{className:w.button,onClick:function(){return function(e){l.length<=1||(console.log(l[e]),l.splice(e,1),r(Object(N.a)(l)))}(n)},children:"-"}):"",n===l.length-1?Object(h.jsx)("button",{className:w.button,onClick:s,children:"+"}):""]})]})]},n)})):""]})},P=a(18),R=function(e){var n=e.handleChange,a=e.data,i=Object(c.useState)([{courseName:"",courseEducationalInstitution:"",courseDuration:"",yearOfCourseEnding:""}]),o=Object(t.a)(i,2),l=o[0],r=o[1];Object(c.useEffect)((function(){n("coursesAndTrainings",l)}),[l]);var s=function(){l.push({courseName:"",courseEducationalInstitution:"",courseDuration:"",yearOfCourseEnding:""}),console.log(l),r(Object(N.a)(l))},u=function(e,n,a){var t=a.substr(0,a.indexOf("-"));console.log(l),l[e][t]=n,r(Object(N.a)(l))};return Object(h.jsxs)("div",{className:"courses-and-trainings-container",children:[Object(h.jsx)(O,{header:"\u041a\u0423\u0420\u0421\u042b \u0418 \u0422\u0420\u0415\u041d\u0418\u041d\u0413\u0418"}),l&&l.length?null===l||void 0===l?void 0:l.map((function(e,n){return Object(h.jsxs)("div",{children:[Object(h.jsx)(j,{label:"\u041d\u0430\u0437\u0432\u0430\u0433\u043d\u0438\u0435 \u043a\u0443\u0440\u0441\u0430:",placeholder:"\u041a\u0430\u0434\u0440\u043e\u0432\u044b\u0439 \u0443\u0447\u0451\u0442 1C: \u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u043e\u043c 3.1",name:"courseName-".concat(n),handleChange:function(e,a){return u(n,a,e)},value:a.courseName,maxLen:128}),Object(h.jsx)(j,{label:"\u0423\u0447\u0435\u0431\u043d\u043e\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0435:",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0443\u0447\u0435\u0431\u043d\u043e\u0433\u043e \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u044f",name:"courseEducationalInstitution-".concat(n),handleChange:function(e,a){return u(n,a,e)},value:a.courseEducationalInstitution,maxLen:64}),Object(h.jsx)(j,{label:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c:",placeholder:"2 \u043c\u0435\u0441\u044f\u0446\u0430",name:"courseDuration-".concat(n),handleChange:function(e,a){return u(n,a,e)},value:a.duration,maxLen:32}),Object(h.jsx)(j,{label:"\u0413\u043e\u0434 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f:",placeholder:"\u0433\u0433\u0433\u0433",name:"yearOfCourseEnding-".concat(n),handleChange:function(e,a){return u(n,a,e)},value:a.yearOfEnding,maxLen:4}),Object(h.jsxs)("div",{className:P.buttonsContainer,children:[" ",l.length>1?Object(h.jsx)("button",{className:P.button,onClick:function(){return function(e){l.length<=1||(console.log(l[e]),l.splice(e,1),r(Object(N.a)(l)))}(n)},children:"-"}):"",n===l.length-1?Object(h.jsx)("button",{className:P.button,onClick:s,children:"+"}):""]})]},n)})):""]})},T=a(22),M=function(e){var n=e.marked,a=e.circleId;return Object(h.jsx)("span",{"data-star-id":a,className:T.circle,role:"button",children:n?"\u25cf":"\u25cb"})},F=function(e){var n,a=e.value,c=e.handleChange,o=e.name,l=function(e){c(o,e.target.getAttribute("data-star-id"))},r=i.a.useState(parseInt(a)||5),u=Object(t.a)(r,2),d=u[0],b=u[1],j=i.a.useState(0),g=Object(t.a)(j,2),m=g[0],f=g[1],O=function(e){var n=0;e&&e.target&&e.target.getAttribute("data-star-id")&&(n=e.target.getAttribute("data-star-id")),f(n)};return Object(h.jsx)("div",(n={className:T.container,onMouseOut:function(){return O(null)},onClick:l},Object(s.a)(n,"onClick",(function(e){l(e),b(e.target.getAttribute("data-star-id")||d)})),Object(s.a)(n,"onMouseOver",O),Object(s.a)(n,"children",Array.from({length:10},(function(e,n){return Object(h.jsx)(M,{circleId:n+1,marked:m?m>=n+1:d>=n+1},"star_".concat(n+1))}))),n))},z=(a(34),a(16)),Q=function(e){var n=e.handleChange,a=e.data,i=Object(c.useState)([{languageName:"",rating:5}]),o=Object(t.a)(i,2),l=o[0],r=o[1];Object(c.useEffect)((function(){n("languages",l)}),[l]);var s=function(){l.push({languageName:"",rating:5}),console.log(l),r(Object(N.a)(l))};return Object(h.jsxs)("div",{className:"language-skills-container",children:[Object(h.jsx)(O,{header:"\u0412\u041b\u0410\u0414\u0415\u041d\u0418\u0415 \u042f\u0417\u042b\u041a\u0410\u041c\u0418"}),l&&l.length?null===l||void 0===l?void 0:l.map((function(e,n){return Object(h.jsxs)("div",{className:z.languageSkills,children:[Object(h.jsx)(j,{label:"\u042f\u0437\u044b\u043a:",placeholder:"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439",name:"language-".concat(n),handleChange:function(e,a){return function(e,n){l[e].languageName=n,r(Object(N.a)(l))}(n,a)},value:a.language,maxLen:16}),Object(h.jsx)(F,{name:"languageSkillRating-".concat(n),handleChange:function(e,a){return function(e,n){l[e].rating=n,r(Object(N.a)(l))}(n,a)}}),Object(h.jsxs)("div",{className:z.buttonsContainer,children:[l.length>1?Object(h.jsx)("button",{className:z.button,onClick:function(){return function(e){l.length<=1||(console.log(l[e]),l.splice(e,1),r(Object(N.a)(l)))}(n)},children:"-"}):"",n===l.length-1?Object(h.jsx)("button",{className:z.button,onClick:s,children:"+"}):""]})]},n)})):""]})},q=a(25),J=function(e){var n=e.handleChange,a=e.data;Object(c.useEffect)((function(){console.log(a)}),[a]);var i=Object(c.useState)([{programsAndSkills:"",programmingSkillsRating:5}]),o=Object(t.a)(i,2),l=o[0],r=o[1];Object(c.useEffect)((function(){n("computerSkills",l)}),[l]);return Object(h.jsxs)("div",{className:"computer-skills-container",children:[Object(h.jsx)(O,{header:"\u0412\u041b\u0410\u0414\u0415\u041d\u0418\u0415 \u041a\u041e\u041c\u041f\u042c\u042e\u0422\u0415\u0420\u041e\u041c"}),Object(h.jsxs)("div",{className:q.container,children:[Object(h.jsx)(I,{name:"programsAndSkills",value:a.programsAndSkills,label:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0438 \u043d\u0430\u0432\u044b\u043a\u0438:",placeholder:"Microsoft Word, Excel, Figma",maxLen:2048,handleChange:n}),Object(h.jsx)(F,{name:"programmingSkillsRating",handleChange:function(e,n){return function(e){l[0].programmingSkillsRating=e,r(Object(N.a)(l))}(n)}})]})]})},G=function(e){var n=e.handleChange,a=e.data;return Object(h.jsxs)("div",{className:"computer-skills-container",children:[Object(h.jsx)(O,{header:"\u0414\u041e\u041f\u041e\u041b\u041d\u0418\u0422\u0415\u041b\u042c\u041d\u042b\u0415 \u0421\u0412\u0415\u0414\u0415\u041d\u0418\u042f"}),Object(h.jsxs)("div",{className:"computer-skills",children:[Object(h.jsx)(I,{label:"\u0412\u0430\u0448\u0438 \u0443\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f:",placeholder:"\u0423\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0432 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f",name:"hobbies",value:a.hobbies,handleChange:n,maxLen:2048}),Object(h.jsx)(I,{label:"\u041b\u0438\u0447\u043d\u044b\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430:",placeholder:'\u0421\u0442\u0440\u0435\u0441\u0441\u043e\u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0441\u0442\u044c: "\u0417\u0430\u043a\u043b\u044e\u0447\u0438\u043b \u0434\u043e\u0433\u043e\u0432\u043e\u0440 \u0441 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u043a\u0430\u0437\u0430\u043b \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u043c \u0442\u0440\u0451\u043c \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430\u043c"',name:"personalQualities",value:a.personalQualities,handleChange:n,maxLen:2048}),Object(h.jsx)(I,{label:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f:",placeholder:"\u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f, \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0437\u043d\u0430\u043d\u0438\u044f, \u043d\u0430\u0432\u044b\u043a\u0438 \u0438 \u0434\u0440\u0443\u0433\u0430\u044f \u0437\u043d\u0430\u0447\u0438\u043c\u043e\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u043f\u0440\u0435\u0442\u0435\u043d\u0434\u0443\u0435\u043c\u043e\u0439 \u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u0438",name:"additionalInformation",value:a.additionalInformation,handleChange:n,maxLen:2048})]})]})},H=(a(32),["dateOfBirth","driverLicence","email","expectedSalary","name","patronymic","personalQualities","placeOfResidence","workPosition","socialProfile","surname","email","phoneNumber","socialProfile","courseDuration","courseEducationalInstitution","courseName","yearOfCourseEnding","educationalInstitution","qualification","speciality","yearOfEndingEducationalInstitution","languageName","beginningOfWork","endOfWork","organization","position"]),U={name:"\u0418\u043c\u044f",surname:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",patronymic:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",position:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",expectedSalary:"\u041e\u0436\u0438\u0434\u0430\u0435\u043c\u0430\u044f \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430",busyness:"\u0417\u0430\u043d\u044f\u0442\u043e\u0441\u0442\u044c",workingSchedule:"\u0413\u0440\u0430\u0444\u0438\u043a \u0440\u0430\u0431\u043e\u0442\u044b",programsAndSkills:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0438 \u043d\u0430\u0432\u044b\u043a\u0438",programmingSkillsRating:"",phoneNumber:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",email:"Email",socialProfile:"\u0421\u043e\u0446. \u043f\u0440\u043e\u0444\u0438\u043b\u044c",placeOfResidence:"\u041c\u0435\u0441\u0442\u043e \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f",dateOfBirth:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",sex:"\u041f\u043e\u043b",courseDuration:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043a\u0443\u0440\u0441\u0430",courseEducationalInstitution:"\u0423\u0447\u0435\u0431\u043d\u043e\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0435",courseName:"\u041d\u0430\u0437\u0432\u0430\u0433\u043d\u0438\u0435 \u043a\u0443\u0440\u0441\u0430",yearOfCourseEnding:"\u0413\u043e\u0434 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u043a\u0443\u0440\u0441\u0430",beginningOfWork:"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b",endOfWork:"\u041e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u044b",organization:"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f",responsibilitiesAndAchievements:"\u041e\u0431\u044f\u0437\u0430\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f",educationalInstitution:"\u0423\u0447\u0435\u0431\u043d\u043e\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0435",degree:"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f",qualification:"\u041a\u0432\u0430\u043b\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",speciality:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c",yearOfEndingEducationalInstitution:"\u0413\u043e\u0434 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0443\u0447\u0435\u0431\u043d\u043e\u0433\u043e \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u044f",languageName:"\u042f\u0437\u044b\u043a",hobbies:"\u0412\u0430\u0448\u0438 \u0443\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f",personalQualities:"\u041b\u0438\u0447\u043d\u044b\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430",additionalInformation:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"};function Y(e,n){for(var a=0;a<=Object.keys(e).length;a++)for(var t in e){var c=e[t];if(t===n[a]){if(console.log(t),"object"==typeof c)return!1;if(""===c||"undefined"===typeof c)return alert("\u041d\u0435\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043f\u043e\u043b\u0435: ".concat(U[t]," ")),console.log(U[t]),!1}}}function Z(e){return!!Y(e,["name","surname","patronymic","workPosition","expectedSalary"])}function V(e){return!!Y(e,["dateOfBirth","driverLicence","placeOfResidence"])}function X(e){for(var n=0;n<=Object.keys(e.workExperience[0]).length;n++){var a=e.workExperience[n];console.log(a);return!!Y(a,["beginningOfWork","endOfWork","organization","position","responsibilitiesAndAchievements"])}}function K(e){for(var n=0;n<=Object.keys(e.education[0]).length;n++){var a=e.education[n];console.log(a);return!!Y(a,["educationalInstitution","degree","speciality","qualification","yearOfEndingEducationalInstitution"])}}function $(e){for(var n=0;n<=Object.keys(e.coursesAndTrainings[0]).length;n++){var a=e.coursesAndTrainings[n];console.log(a);return!!Y(a,["courseName","courseEducationalInstitution","courseDuration","yearOfCourseEnding"])}}function ee(e){for(var n=0;n<=Object.keys(e.languages[0]).length;n++){var a=e.languages[n];console.log(a);return!!Y(a,["languageName","rating"])}}function ne(e){return!!Y(e,["programsAndSkills","programmingSkillsRating"])}function ae(e){return!!Y(e,["hobbies","personalQualities","additionalInformation"])}var te=function(){var e={name:"",surname:"",patronymic:"",workPosition:"",expectedSalary:"",busyness:"\u0427\u0430\u0441\u0442\u0438\u0447\u043d\u0430\u044f",workingSchedule:"\u0413\u0438\u0431\u043a\u0438\u0439 \u0433\u0440\u0430\u0444\u0438\u043a",readinessOfRelocation:"",readinessOfBusinessTrip:"",contactDetails:[{phoneNumber:"",email:"",socialProfile:""}],placeOfResidence:"",dateOfBirth:"",driverLicence:"",sex:"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e",coursesAndTrainings:[{courseDuration:"",courseEducationalInstitution:"",courseName:"",yearOfCourseEnding:""}],workExperience:[{beginningOfWork:"",endOfWork:"",organization:"",position:"",responsibilitiesAndAchievements:""}],education:[{educationalInstitution:"",degree:"",qualification:"",speciality:"",yearOfEndingEducationalInstitution:""}],languages:[{languageName:"",rating:"5"}],hobbies:"",personalQualities:"",additionalInformation:""},n=new FormData,a=null,i=Object(c.useState)(e),o=Object(t.a)(i,2),l=o[0],d=o[1],j=Object(c.useCallback)((function(e,n){d((function(a){return Object(u.a)(Object(u.a)({},a),{},Object(s.a)({},e,n))}))}),[]);for(var g in Object(c.useEffect)((function(){a=l,console.log(a)}),[l]),l)"object"===typeof l[g]?n.append(g,JSON.stringify(l[g])):n.append(g,l[g]);console.log(n),Object(c.useContext)(b);var m=function(){n.append("personalImage");console.log(n);var e,a,t=Object(r.a)(n.values());try{for(t.s();!(e=t.n()).done;){var c=e.value;console.log(c)}}catch(i){t.e(i)}finally{t.f()}a=n,fetch("".concat("https://cv.renault-belarus.by/server/test".replace(/^\//g,"")),{method:"POST",body:a}).then((function(e){return e})).catch(),function(e){for(var n=[Z,V,X,K,$,ee,ne,ae],a=0;a<n.length;a++)if(!n[a](e))return}(l)};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(k,{initialData:e,handleChange:j,data:l}),Object(h.jsx)(S,{handleChange:j,data:l}),Object(h.jsx)(A,{handleChange:j,data:l}),Object(h.jsx)(W,{handleChange:j,data:l}),Object(h.jsx)(B,{handleChange:j,data:l}),Object(h.jsx)(R,{handleChange:j,data:l}),Object(h.jsx)(Q,{handleChange:j,data:l}),Object(h.jsx)(J,{handleChange:j,data:l}),Object(h.jsx)(G,{handleChange:j,data:l}),Object(h.jsx)("button",{className:"submitButton",onClick:function(e){m()}})]})};function ce(){var e=Object(c.useState)(H),n=Object(t.a)(e,2),a=n[0],o=n[1];return Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(b.Provider,{value:{fields:a,changeFields:o},children:Object(h.jsx)(te,{})})})}l.a.render(Object(h.jsx)(ce,{}),document.getElementById("root"))}],[[33,1,2]]]);
//# sourceMappingURL=main.d8a49ca5.chunk.js.map