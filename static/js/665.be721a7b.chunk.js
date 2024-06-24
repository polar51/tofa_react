"use strict";(self.webpackChunktofa_react=self.webpackChunktofa_react||[]).push([[665],{5952:(e,l,c)=>{c.d(l,{gl:()=>s.gl,je:()=>s.je,r7:()=>s.r7});c(2233);var s=c(4381)},3665:(e,l,c)=>{c.r(l),c.d(l,{default:()=>x});var s=c(5043),t=c(5262),i=c(4858),a=c(1902),d=c(5952),r=c(579);const o=e=>{let{faultCode:l,idx:c,...s}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("tr",{...s,children:[(0,r.jsxs)("td",{style:{flex:1},children:[(0,r.jsx)("label",{htmlFor:"faultCd",className:"sr-only",children:"rowCheck"}),(0,r.jsx)("input",{type:"checkbox",defaultChecked:!0,value:l.faultCd})]}),(0,r.jsx)("td",{style:{flex:1},children:l.faultCd}),(0,r.jsx)("td",{style:{flex:1},children:l.carNo}),(0,r.jsx)("td",{style:{flex:1},children:l.faultNo}),(0,r.jsx)("td",{style:{flex:3},children:l.faultName||"N/A"}),(0,r.jsx)("td",{style:{flex:2},children:l.device})]})})},n=e=>{let{rowVirtualizer:l,parentRef:c,data:s}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"data_sc",style:{border:"1px solid #eee"},children:[(0,r.jsxs)("dt",{style:{lineHeight:"66px",fontSize:"20px",fontWeight:"700",borderBottom:"1px solid #eee",padding:"0 19px"},children:["\uace0\uc7a5\ucf54\ub4dc",(0,r.jsx)("a",{href:"/",id:"filterBtn",className:"bt_filter",children:"\ud544\ud130"})]}),(0,r.jsx)("div",{className:"t_area",children:(0,r.jsxs)("table",{className:"tb_data",children:[(0,r.jsx)("caption",{children:"\uac80\uc0c9 \uacb0\uacfc"}),(0,r.jsxs)("colgroup",{children:[(0,r.jsx)("col",{width:"10%"}),(0,r.jsx)("col",{width:"10%"}),(0,r.jsx)("col",{width:"10%"}),(0,r.jsx)("col",{width:"10%"}),(0,r.jsx)("col",{width:"25%"}),(0,r.jsx)("col",{width:"20%"})]}),(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsxs)("th",{scope:"col",children:[(0,r.jsx)("label",{htmlFor:"name",className:"sr-only",children:"allCheck"}),(0,r.jsx)("input",{type:"checkbox",id:"name"})]}),(0,r.jsx)("th",{scope:"col",children:"MFDS"}),(0,r.jsx)("th",{scope:"col",children:"\uace0\uc7a5\ucf54\ub4dc"}),(0,r.jsx)("th",{scope:"col",children:"\ud638\ucc28"}),(0,r.jsx)("th",{scope:"col",children:"\uace0\uc7a5\uba85"}),(0,r.jsx)("th",{scope:"col",children:"\uc7a5\uce58\uba85"})]})})]})}),(0,r.jsx)("div",{ref:c,className:"c_area fault_code",style:{top:"110px",overflow:"auto"},children:(0,r.jsxs)("table",{className:"tb_data",id:"ft_table",children:[(0,r.jsx)("caption",{children:"\uac80\uc0c9 \uacb0\uacfc"}),(0,r.jsxs)("colgroup",{children:[(0,r.jsx)("col",{width:"10%"}),(0,r.jsx)("col",{width:"10%"}),(0,r.jsx)("col",{width:"10%"}),(0,r.jsx)("col",{width:"10%"}),(0,r.jsx)("col",{width:"25%"}),(0,r.jsx)("col",{width:"20%"})]}),(0,r.jsx)("tbody",{id:"faultCode",style:{position:"relative",height:"".concat(l.getTotalSize(),"px")},children:l.getVirtualItems().map((e=>{const l=s.pages.flat()[e.index];return(0,r.jsx)(o,{faultCode:l,ref:e.measureRef,idx:e.key,style:{position:"absolute",top:0,left:0,width:"100%",transform:"translateY(".concat(e.start,"px)"),display:"flex"}},e.index)}))})]})})]})})},h=e=>{let{id:l,idx:c,...s}=e;const{fleetId:t}=l,{register:a}=(0,i.xW)();return(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",className:"trainNo_".concat(c),value:"".concat(t,"10"),id:"trainNo_".concat(t),...a("fleet_id"),...s}),(0,r.jsx)("label",{htmlFor:"trainNo_".concat(t),children:t})]},t)},x=e=>{let{children:l}=e;const{control:c,getValues:o,setValue:x,register:_}=(0,i.xW)(),j=(0,i.FH)({control:c}),{data:b,fetchNextPage:p,hasNextPage:u,isFetchingNextPage:g}=(0,d.gl)(),{data:m}=(0,d.r7)({protocol_type:j.protocol_type}),f=(0,s.useRef)(),v=(0,t.Te)({count:b?b.pages.flat().length:0,getScrollElement:()=>f.current,estimateSize:()=>50,overscan:30});(0,s.useEffect)((()=>{const[e]=[...v.getVirtualItems()].reverse();e&&e.index>=b.pages.flat().length-1&&u&&!g&&p()}),[b,u,g,p,v]),(0,s.useEffect)((()=>{const e=[];m.forEach((l=>{let{fleetId:c}=l;e.push("".concat(c,"10"))})),x("fleet_id",e)}),[m,x]),(0,s.useEffect)((()=>{const e=[];b.pages.flat().forEach((l=>{let{faultCd:c}=l;e.push(c.toString())})),x("faultCd",e)}),[b,x]);const N=(0,s.useCallback)((e=>{const l=[],c=e.toUpperCase(),s=a.Q[c];o(e).length!==s.length&&l.push(...s),x(e,l)}),[o,x]),y=(0,s.useCallback)((()=>{const e=[],l=a.Q.CAR_NO;o("carNo").length!==l.length&&e.push(...l),x("carNo",e)}),[o,x]),k=(0,s.useCallback)((()=>{const e=[],l=[...m];o("fleet_id").length!==l.length&&l.forEach((l=>{let{fleetId:c}=l;e.push("".concat(c,"10"))})),x("fleet_id",e)}),[m,o,x]),C=(0,s.useCallback)((e=>{const l=e.toUpperCase(),c=[...a.Q[l]];return o(e).length===c.length}),[o]),F=(0,s.useCallback)((()=>{const e=[...a.Q.CAR_NO];return o("carNo").length===e.length}),[o]),S=(0,s.useCallback)((()=>{const e=[...m];return o("fleet_id").length===e.length}),[m,o]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"iq_search_option",children:[l,(0,r.jsxs)("div",{className:"period lang",children:["\uae30\uac04",(0,r.jsx)("input",{type:"text",id:"daterange",name:"daterange",className:"period"}),(0,r.jsx)("div",{className:"cb_all",style:{display:"inline-block"},children:(0,r.jsxs)("select",{id:"step",style:{marginLeft:"10%",minWidth:"50px",border:"1px solid #b1b2b5",fontSize:"14px"},..._("protocol_type"),children:[(0,r.jsx)("option",{value:"Step1_48",children:"1\ub2e8\uacc4(48\uce78)"}),(0,r.jsx)("option",{value:"Step1_40",children:"1\ub2e8\uacc4(40\uce78)"}),(0,r.jsx)("option",{value:"Step2_48",children:"2\ub2e8\uacc4(48\uce78)"})]})})]},"faultsPeriod"),(0,r.jsx)("a",{href:"/",className:"bt_reset",children:"\uac80\uc0c9"}),(0,r.jsxs)("div",{className:"options f_cl",children:[(0,r.jsxs)("dl",{children:[(0,r.jsxs)("dt",{children:["\ud3b8\uc131",(0,r.jsxs)("div",{className:"cb_all",children:[(0,r.jsx)("input",{type:"checkbox",id:"cb_so_g01_all",name:"fleet_id",onChange:k,checked:S()}),(0,r.jsx)("label",{className:"cLabel",htmlFor:"cb_so_g01_all",children:"ALL"})]})]}),(0,r.jsxs)("dt",{style:{height:"50px"},children:[(0,r.jsxs)("div",{className:"cb_all",style:{left:"50px"},children:[(0,r.jsx)("input",{type:"checkbox",name:"TC1",id:"TC1",defaultChecked:!0}),(0,r.jsx)("label",{htmlFor:"TC1",children:"TC1"})]}),(0,r.jsxs)("div",{className:"cb_all",style:{right:"50px"},children:[(0,r.jsx)("input",{type:"checkbox",name:"TC2",id:"TC2"}),(0,r.jsx)("label",{htmlFor:"TC2",children:"TC2"})]})]}),(0,r.jsx)("dd",{children:(0,r.jsx)("ul",{id:"fleet_id",children:m.map(((e,l)=>(0,r.jsx)(h,{id:e,idx:l},"re".concat(e.fleetId))))})})]}),(0,r.jsxs)("dl",{children:[(0,r.jsxs)("dt",{children:["\ud638\ucc28",(0,r.jsxs)("div",{className:"cb_all",children:[(0,r.jsx)("input",{type:"checkbox",id:"cb_so_g02_all",name:"carNo",onChange:y,checked:F()}),(0,r.jsx)("label",{className:"cLabel",htmlFor:"cb_so_g02_all",children:"ALL"})]})]}),(0,r.jsx)("dd",{children:(0,r.jsxs)("ul",{id:"car_id",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("carNo"),value:"01",id:"carNo_01"}),(0,r.jsx)("label",{htmlFor:"carNo_01",children:"01"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("carNo"),value:"02",id:"carNo_02"}),(0,r.jsx)("label",{htmlFor:"carNo_02",children:"02"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("carNo"),value:"03",id:"carNo_03"}),(0,r.jsx)("label",{htmlFor:"carNo_03",children:"03"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("carNo"),value:"04",id:"carNo_04"}),(0,r.jsx)("label",{htmlFor:"carNo_04",children:"04"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("carNo"),value:"05",id:"carNo_05"}),(0,r.jsx)("label",{htmlFor:"carNo_05",children:"05"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("carNo"),value:"06",id:"carNo_06"}),(0,r.jsx)("label",{htmlFor:"carNo_06",children:"06"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("carNo"),value:"07",id:"carNo_07"}),(0,r.jsx)("label",{htmlFor:"carNo_07",children:"07"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("carNo"),value:"08",id:"carNo_08"}),(0,r.jsx)("label",{htmlFor:"carNo_08",children:"08"})]})]})})]}),(0,r.jsxs)("dl",{children:[(0,r.jsxs)("dt",{className:"lang",children:["\uace0\uc7a5\ub4f1\uae09",(0,r.jsxs)("div",{className:"cb_all",children:[(0,r.jsx)("input",{type:"checkbox",id:"cb_so_g03_all",name:"grade",onChange:()=>N("grade"),checked:C("grade")}),(0,r.jsx)("label",{className:"cLabel",htmlFor:"cb_so_g03_all",children:"ALL"})]})]},"faultsFaultsGrade"),(0,r.jsx)("dd",{children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("grade"),id:"cb_so_g02_01",value:"A"}),(0,r.jsx)("label",{htmlFor:"cb_so_g02_01",children:"A"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("grade"),id:"cb_so_g02_02",value:"B"}),(0,r.jsx)("label",{htmlFor:"cb_so_g02_02",children:"B"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("grade"),id:"cb_so_g02_03",value:"C"}),(0,r.jsx)("label",{htmlFor:"cb_so_g02_03",children:"C"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("grade"),id:"cb_so_g02_04",value:"D"}),(0,r.jsx)("label",{htmlFor:"cb_so_g02_04",children:"D"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("grade"),id:"cb_so_g02_05",value:"W"}),(0,r.jsx)("label",{htmlFor:"cb_so_g02_05",children:"W"})]})]})})]}),(0,r.jsxs)("dl",{children:[(0,r.jsxs)("dt",{className:"lang",children:["\uc7a5\uce58",(0,r.jsxs)("div",{className:"cb_all",children:[(0,r.jsx)("input",{type:"checkbox",id:"cb_so_g04_all",onChange:()=>N("device"),checked:C("device")}),(0,r.jsx)("label",{className:"cLabel",htmlFor:"cb_so_g04_all",children:"ALL"})]})]},"faultsDevice"),(0,r.jsx)("dd",{children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("device"),id:"cb_so_g03_01",value:"ATC"}),(0,r.jsx)("label",{htmlFor:"cb_so_g03_01",children:"ATC"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("device"),id:"cb_so_g03_02",value:"BECU"}),(0,r.jsx)("label",{htmlFor:"cb_so_g03_02",children:"BECU"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("device"),id:"cb_so_g03_03",value:"BMS"}),(0,r.jsx)("label",{htmlFor:"cb_so_g03_03",children:"BMS"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("device"),id:"cb_so_g03_04",value:"CMSB"}),(0,r.jsx)("label",{htmlFor:"cb_so_g03_04",children:"CMSB"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("device"),id:"cb_so_g03_05",value:"DCU"}),(0,r.jsx)("label",{htmlFor:"cb_so_g03_05",children:"DCU"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("device"),id:"cb_so_g03_06",value:"FDU"}),(0,r.jsx)("label",{htmlFor:"cb_so_g03_06",children:"FDU"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("device"),id:"cb_so_g03_07",value:"HVAC"}),(0,r.jsx)("label",{htmlFor:"cb_so_g03_07",children:"HVAC"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("device"),id:"cb_so_g03_08",value:"PSD"}),(0,r.jsx)("label",{htmlFor:"cb_so_g03_08",children:"PSD"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("device"),id:"cb_so_g03_09",value:"RADIO"}),(0,r.jsx)("label",{htmlFor:"cb_so_g03_09",children:"RADIO"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("device"),id:"cb_so_g03_10",value:"RTD"}),(0,r.jsx)("label",{htmlFor:"cb_so_g03_10",children:"RTD"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("device"),id:"cb_so_g03_11",value:"SIV"}),(0,r.jsx)("label",{htmlFor:"cb_so_g03_11",children:"SIV"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("device"),id:"cb_so_g03_12",value:"TCMS"}),(0,r.jsx)("label",{htmlFor:"cb_so_g03_12",children:"TCMS"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox",..._("device"),id:"cb_so_g03_13",value:"VVVF"}),(0,r.jsx)("label",{htmlFor:"cb_so_g03_13",children:"VVVF"})]})]})})]})]}),(0,r.jsx)(n,{rowVirtualizer:v,parentRef:f,data:b})]})})}}}]);
//# sourceMappingURL=665.be721a7b.chunk.js.map