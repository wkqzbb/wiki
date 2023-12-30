"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[1436],{1133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var o=n(5893),d=n(1151);const i={title:"\u9650\u754c\u4e0a\u4e0b\u6587"},c=void 0,r={id:"object-oriented/ddd/basic/bounded-context",title:"\u9650\u754c\u4e0a\u4e0b\u6587",description:"\u5728 DDD \u9886\u57df\u5efa\u6a21\u548c\u7cfb\u7edf\u8bbe\u8ba1\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6709\u5f88\u591a\u7684\u53c2\u4e0e\u8005\uff0c\u5305\u62ec\u9886\u57df\u4e13\u5bb6\u3001\u4ea7\u54c1\u7ecf\u7406\u3001\u9879\u76ee\u7ecf\u7406\u3001\u67b6\u6784\u5e08\u3001\u5f00\u53d1\u7ecf\u7406\u548c\u6d4b\u8bd5\u7ecf\u7406\u7b49\u3002\u5bf9\u540c\u6837\u7684\u9886\u57df\u77e5\u8bc6\uff0c\u4e0d\u540c\u7684\u53c2\u4e0e\u89d2\u8272\u53ef\u80fd\u4f1a\u6709\u4e0d\u540c\u7684\u7406\u89e3\uff0c\u4ea4\u6d41\u8d77\u6765\u5c31\u4f1a\u6709\u969c\u788d\uff0c\u56e0\u6b64\uff0c\u5728 DDD \u4e2d\u5c31\u51fa\u73b0\u4e86\u201c\u901a\u7528\u8bed\u8a00\u201d\u548c\u201c\u9650\u754c\u4e0a\u4e0b\u6587\u201d\u4e24\u4e2a\u6982\u5ff5\u3002",source:"@site/docs/object-oriented/ddd/basic/bounded-context.mdx",sourceDirName:"object-oriented/ddd/basic",slug:"/object-oriented/ddd/basic/bounded-context",permalink:"/wiki/docs/object-oriented/ddd/basic/bounded-context",draft:!1,unlisted:!1,editUrl:"https://github.com/wkqzbb/wiki/tree/develop?search=1/docs/object-oriented/ddd/basic/bounded-context.mdx",tags:[],version:"current",frontMatter:{title:"\u9650\u754c\u4e0a\u4e0b\u6587"},sidebar:"objectOriented",previous:{title:"\u9886\u57df\u3001\u5b50\u57df\u3001\u6838\u5fc3\u57df\u3001\u901a\u7528\u57df\u548c\u652f\u6491\u57df",permalink:"/wiki/docs/object-oriented/ddd/basic/domain"},next:{title:"\u5b9e\u4f53\u548c\u503c\u5bf9\u8c61",permalink:"/wiki/docs/object-oriented/ddd/basic/entity-and-value-object"}},s={},a=[];function u(e){const t={h2:"h2",p:"p",strong:"strong",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"\u5728 DDD \u9886\u57df\u5efa\u6a21\u548c\u7cfb\u7edf\u8bbe\u8ba1\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6709\u5f88\u591a\u7684\u53c2\u4e0e\u8005\uff0c\u5305\u62ec\u9886\u57df\u4e13\u5bb6\u3001\u4ea7\u54c1\u7ecf\u7406\u3001\u9879\u76ee\u7ecf\u7406\u3001\u67b6\u6784\u5e08\u3001\u5f00\u53d1\u7ecf\u7406\u548c\u6d4b\u8bd5\u7ecf\u7406\u7b49\u3002\u5bf9\u540c\u6837\u7684\u9886\u57df\u77e5\u8bc6\uff0c\u4e0d\u540c\u7684\u53c2\u4e0e\u89d2\u8272\u53ef\u80fd\u4f1a\u6709\u4e0d\u540c\u7684\u7406\u89e3\uff0c\u4ea4\u6d41\u8d77\u6765\u5c31\u4f1a\u6709\u969c\u788d\uff0c\u56e0\u6b64\uff0c\u5728 DDD \u4e2d\u5c31\u51fa\u73b0\u4e86\u201c\u901a\u7528\u8bed\u8a00\u201d\u548c\u201c\u9650\u754c\u4e0a\u4e0b\u6587\u201d\u4e24\u4e2a\u6982\u5ff5\u3002"}),"\n",(0,o.jsxs)(t.p,{children:["\u8fd9\u4e24\u8005\u76f8\u8f85\u76f8\u6210\uff0c",(0,o.jsx)(t.strong,{children:"\u901a\u7528\u8bed\u8a00\u5b9a\u4e49\u4e0a\u4e0b\u6587\u542b\u4e49\uff0c\u9650\u754c\u4e0a\u4e0b\u6587\u5b9a\u4e49\u4e0a\u4e0b\u6587\u8fb9\u754c"}),"\uff0c\u4ee5\u786e\u4fdd\u6bcf\u4e2a\u4e0a\u4e0b\u6587\u542b\u4e49\u5728\u5b83\u7279\u5b9a\u7684\u8fb9\u754c\u5185\u90fd\u6709\u552f\u4e00\u7684\u542b\u4e49\uff0c\u9886\u57df\u6a21\u578b\u5b58\u5728\u4e8e\u8fd9\u4e2a\u8fb9\u754c\u5185\u3002"]}),"\n",(0,o.jsx)(t.h2,{id:""})]})}function b(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>c});var o=n(7294);const d={},i=o.createContext(d);function c(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);