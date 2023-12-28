"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[2171],{2991:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=t(5893),d=t(1151);const r={title:"\u805a\u5408\u548c\u805a\u5408\u6839"},o=void 0,c={id:"object-oriented/ddd/basic/aggregate",title:"\u805a\u5408\u548c\u805a\u5408\u6839",description:"\u5728\u4e8b\u4ef6\u98ce\u66b4\u4e2d\uff0c\u6211\u4eec\u4f1a\u6839\u636e\u4e00\u4e9b\u4e1a\u52a1\u64cd\u4f5c\u548c\u884c\u4e3a\u627e\u51fa\u5b9e\u4f53\uff08Entity\uff09\u548c\u503c\u5bf9\u8c61\uff08Value Object\uff09\uff0c\u8fdb\u800c\u5c06\u4e1a\u52a1\u5173\u8054\u7d27\u5bc6\u7684\u5b9e\u4f53\u548c\u503c\u5bf9\u8c61\u8fdb\u884c\u7ec4\u5408\uff0c\u6784\u6210\u805a\u5408\uff0c\u518d\u6839\u636e\u4e1a\u52a1\u8bed\u4e49\u5c06\u591a\u4e2a\u805a\u5408\u5212\u5b9a\u5230\u540c\u4e00\u4e2a\u9650\u754c\u4e0a\u4e0b\u6587\uff08Bounded Context\uff09 \u4e2d\uff0c\u5e76\u5728\u9650\u754c\u4e0a\u4e0b\u6587\u4e2d\u5b8c\u6210\u9886\u57df\u5efa\u6a21\u3002",source:"@site/docs/object-oriented/ddd/basic/aggregate.mdx",sourceDirName:"object-oriented/ddd/basic",slug:"/object-oriented/ddd/basic/aggregate",permalink:"/wiki/docs/object-oriented/ddd/basic/aggregate",draft:!1,unlisted:!1,editUrl:"https://github.com/wkqzbb/wiki/tree/develop?search=1/docs/object-oriented/ddd/basic/aggregate.mdx",tags:[],version:"current",frontMatter:{title:"\u805a\u5408\u548c\u805a\u5408\u6839"},sidebar:"objectOriented",previous:{title:"\u5b9e\u4f53\u548c\u503c\u5bf9\u8c61",permalink:"/wiki/docs/object-oriented/ddd/basic/entity-and-value-object"}},s={},a=[{value:"\u805a\u5408",id:"\u805a\u5408",level:2},{value:"\u805a\u5408\u6839",id:"\u805a\u5408\u6839",level:2},{value:"\u600e\u6837\u8bbe\u7f6e\u805a\u5408\uff1f",id:"\u600e\u6837\u8bbe\u7f6e\u805a\u5408",level:2}];function l(e){const n={admonition:"admonition",h2:"h2",p:"p",strong:"strong",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u5728\u4e8b\u4ef6\u98ce\u66b4\u4e2d\uff0c\u6211\u4eec\u4f1a\u6839\u636e\u4e00\u4e9b\u4e1a\u52a1\u64cd\u4f5c\u548c\u884c\u4e3a\u627e\u51fa\u5b9e\u4f53\uff08Entity\uff09\u548c\u503c\u5bf9\u8c61\uff08Value Object\uff09\uff0c\u8fdb\u800c\u5c06\u4e1a\u52a1\u5173\u8054\u7d27\u5bc6\u7684\u5b9e\u4f53\u548c\u503c\u5bf9\u8c61\u8fdb\u884c\u7ec4\u5408\uff0c\u6784\u6210\u805a\u5408\uff0c\u518d\u6839\u636e\u4e1a\u52a1\u8bed\u4e49\u5c06\u591a\u4e2a\u805a\u5408\u5212\u5b9a\u5230\u540c\u4e00\u4e2a\u9650\u754c\u4e0a\u4e0b\u6587\uff08Bounded Context\uff09 \u4e2d\uff0c\u5e76\u5728\u9650\u754c\u4e0a\u4e0b\u6587\u4e2d\u5b8c\u6210\u9886\u57df\u5efa\u6a21\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u805a\u5408",children:"\u805a\u5408"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 DDD \u4e2d\uff0c\u5b9e\u4f53\u548c\u503c\u5bf9\u8c61\u662f\u5f88\u57fa\u7840\u7684\u9886\u57df\u5bf9\u8c61\u3002\u5b9e\u4f53\u4e00\u822c\u5bf9\u5e94\u4e1a\u52a1\u5bf9\u8c61\uff0c\u5b83\u5177\u6709\u4e1a\u52a1\u5c5e\u6027\u548c\u4e1a\u52a1\u884c\u4e3a\uff1b\u800c\u503c\u5bf9\u8c61\u4e3b\u8981\u662f\u5c5e\u6027\u96c6\u5408\uff0c\u5bf9\u5b9e\u4f53\u7684\u72b6\u6001\u548c\u7279\u5f81\u8fdb\u884c\u63cf\u8ff0\u3002\u4f46\u5b9e\u4f53\u548c\u503c\u5bf9\u8c61\u90fd\u53ea\u662f\u4e2a\u4f53\u5316\u7684\u5bf9\u8c61\uff0c\u5b83\u4eec\u7684\u884c\u4e3a\u8868\u73b0\u51fa\u6765\u7684\u662f\u4e2a\u4f53\u7684\u80fd\u529b\u3002"}),"\n",(0,i.jsx)(n.admonition,{title:"\u4f8b\u5b50",type:"tip",children:(0,i.jsx)(n.p,{children:"\u793e\u4f1a\u662f\u7531\u4e00\u4e2a\u4e2a\u7684\u4e2a\u4f53\u7ec4\u6210\u7684\uff0c\u8c61\u5f81\u7740\u6211\u4eec\u6bcf\u4e00\u4e2a\u4eba\u3002\u968f\u7740\u793e\u4f1a\u7684\u53d1\u5c55\uff0c\u6162\u6162\u51fa\u73b0\u4e86\u793e\u56e2\u3001\u673a\u6784\u3001\u90e8\u95e8\u7b49\u7ec4\u7ec7\uff0c\u6211\u4eec\u5f00\u59cb\u4ece\u4e2a\u4eba\u6162\u6162\u5730\u53d8\u6210\u4e86\u7ec4\u7ec7\u7684\u4e00\u5458\uff0c\u5927\u5bb6\u53ef\u4ee5\u534f\u8c03\u4e00\u81f4\u7684\u5de5\u4f5c\uff0c\u671d\u7740\u4e00\u4e2a\u6700\u5927\u7684\u76ee\u6807\u524d\u8fdb\uff0c\u53d1\u6325\u66f4\u5927\u7684\u529b\u91cf\u3002"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u9886\u57df\u6a21\u578b\u5185\u7684\u5b9e\u4f53\u548c\u503c\u5bf9\u8c61\u5c31\u597d\u6bd4\u4e2a\u4f53\uff0c\u800c\u80fd\u8ba9\u5b9e\u4f53\u548c\u503c\u5bf9\u8c61\u534f\u540c\u5de5\u4f5c\u7684\u7ec4\u7ec7\u5c31\u662f\u805a\u5408\uff0c\u5b83\u7528\u6765\u786e\u4fdd\u8fd9\u4e9b\u9886\u57df\u5bf9\u8c61\u5728\u5b9e\u73b0\u5171\u540c\u7684\u4e1a\u52a1\u903b\u8f91\u65f6\uff0c\u80fd\u4fdd\u8bc1\u6570\u636e\u7684\u4e00\u81f4\u6027\u3002"})}),"\n",(0,i.jsx)(n.p,{children:"\u805a\u5408\u5c31\u662f\u7531\u4e1a\u52a1\u548c\u903b\u8f91\u7d27\u5bc6\u5173\u8054\u7684\u5b9e\u4f53\u548c\u503c\u5bf9\u8c61\u7ec4\u5408\u800c\u6210\u7684\uff0c\u805a\u5408\u662f\u6570\u636e\u4fee\u6539\u548c\u6301\u4e45\u5316\u7684\u57fa\u672c\u5355\u5143\uff0c\u6bcf\u4e00\u4e2a\u805a\u5408\u5bf9\u5e94\u4e00\u4e2a\u4ed3\u50a8\uff0c\u5b9e\u73b0\u6570\u636e\u7684\u6301\u4e45\u5316\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u805a\u5408\u6709\u4e00\u4e2a\u805a\u5408\u6839\u548c\u4e0a\u4e0b\u6587\u8fb9\u754c\uff0c\u8fd9\u4e2a\u8fb9\u754c\u6839\u636e\u4e1a\u52a1\u5355\u4e00\u804c\u8d23\u548c\u9ad8\u5185\u805a\u539f\u5219\uff0c\u5b9a\u4e49\u4e86\u805a\u5408\u5185\u90e8\u5e94\u8be5\u5305\u542b\u90a3\u4e9b\u5b9e\u4f53\u548c\u503c\u5bf9\u8c61\uff0c\u800c\u805a\u5408\u4e4b\u95f4\u7684\u8fb9\u754c\u677e\u8026\u5408\u7684\uff0c\u6309\u7167\u8fd9\u79cd\u65b9\u5f0f\u8bbe\u8ba1\u51fa\u6765\u7684\u5fae\u670d\u52a1\u5f88\u81ea\u7136\u5c31\u662f\u9ad8\u5185\u805a\u3001\u4f4e\u8026\u5408\u7684\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u805a\u5408\u5728 DDD \u5206\u5c42\u67b6\u6784\u91cc\u5c5e\u4e8e\u9886\u57df\u5c42\uff0c\u9886\u57df\u5c42\u5305\u542b\u4e86\u591a\u4e2a\u805a\u5408\uff0c\u5171\u540c\u5b9e\u73b0\u6838\u5fc3\u4e1a\u52a1\u903b\u8f91\u3002\u805a\u5408\u5185\u5b9e\u4f53\u4ee5\u5145\u8840\u6a21\u578b\u5b9e\u73b0\u4e2a\u4f53\u4e1a\u52a1\u80fd\u529b\uff0c\u4ee5\u53ca\u4e1a\u52a1\u903b\u8f91\u7684\u9ad8\u5185\u805a\u3002\u8de8\u591a\u4e2a\u5b9e\u4f53\u7684\u4e1a\u52a1\u903b\u8f91\u901a\u8fc7\u9886\u57df\u670d\u52a1\u6765\u5b9e\u73b0\uff0c\u8de8\u591a\u4e2a\u805a\u5408\u7684\u4e1a\u52a1\u903b\u8f91\u901a\u8fc7\u5e94\u7528\u670d\u52a1\u6765\u5b9e\u73b0\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6bd4\u5982\u6709\u7684\u4e1a\u52a1\u573a\u666f\u9700\u8981\u540c\u4e00\u4e2a\u805a\u5408\u7684 A \u548c B \u4e24\u4e2a\u5b9e\u4f53\u6765\u5171\u540c\u5b8c\u6210\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5c06\u8fd9\u6bb5\u4e1a\u52a1\u903b\u8f91\u7528\u9886\u57df\u670d\u52a1\u6765\u5b9e\u73b0\uff1b\u800c\u6709\u7684\u4e1a\u52a1\u903b\u8f91\u9700\u8981\u805a\u5408 C \u548c\u805a\u5408 D \u4e2d\u7684\u4e24\u4e2a\u670d\u52a1\u5171\u540c\u5b8c\u6210\uff0c\u8fd9\u65f6\u5c31\u53ef\u4ee5\u7528\u5e94\u7528\u670d\u52a1\u6765\u7ec4\u5408\u8fd9\u4e24\u4e2a\u670d\u52a1\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u805a\u5408\u6839",children:"\u805a\u5408\u6839"}),"\n",(0,i.jsx)(n.p,{children:"\u805a\u5408\u6839\u7684\u4e3b\u8981\u76ee\u7684\u5c31\u662f\u4e3a\u4e86\u907f\u514d\u7531\u4e8e\u590d\u6742\u6570\u636e\u6a21\u578b\u7f3a\u5c11\u7edf\u4e00\u7684\u4e1a\u52a1\u89c4\u5219\u63a7\u5236\uff0c\u800c\u5bfc\u81f4\u805a\u5408\u3001\u5b9e\u4f53\u4e4b\u95f4\u6570\u636e\u4e0d\u4e00\u81f4\u7684\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4f20\u7edf\u6570\u636e\u6a21\u578b\u4e2d\u7684\u6bcf\u4e00\u4e2a\u5b9e\u4f53\u90fd\u662f\u5bf9\u7b49\u7684\uff0c\u5982\u679c\u4efb\u7531\u5b9e\u4f53\u8fdb\u884c\u65e0\u63a7\u5236\u5730\u8c03\u7528\u548c\u6570\u636e\u4fee\u6539\uff0c\u5f88\u53ef\u80fd\u5c31\u4f1a\u5bfc\u81f4\u5b9e\u4f53\u4e4b\u95f4\u6570\u636e\u903b\u8f91\u7684\u4e0d\u4e00\u81f4\u3002\u800c\u5982\u679c\u91c7\u7528\u9501\u7684\u65b9\u5f0f\u5219\u4f1a\u589e\u52a0\u8f6f\u4ef6\u7684\u590d\u6742\u5ea6\uff0c\u4e5f\u4f1a\u964d\u4f4e\u7cfb\u7edf\u7684\u6027\u80fd\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u5982\u679c\u628a\u805a\u5408\u6bd4\u4f5c\u7ec4\u7ec7\uff0c\u90a3\u805a\u5408\u6839\u5c31\u662f\u8fd9\u4e2a\u7ec4\u7ec7\u7684\u8d1f\u8d23\u4eba\u3002\u805a\u5408\u6839\u4e5f\u79f0\u4e3a\u6839\u5b9e\u4f53\uff0c\u5b83\u4e0d\u4ec5\u662f\u5b9e\u4f53\uff0c\u8fd8\u662f\u805a\u5408\u7684\u7ba1\u7406\u8005\u3002"})}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\u5b83\u4f5c\u4e3a\u5b9e\u4f53\uff0c\u62e5\u6709\u5b9e\u4f53\u7684\u5c5e\u6027\u548c\u4e1a\u52a1\u884c\u4e3a\uff0c\u5b9e\u73b0\u81ea\u8eab\u7684\u4e1a\u52a1\u903b\u8f91\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u6b21\u5b83\u4f5c\u4e3a\u805a\u5408\u7684\u7ba1\u7406\u8005\uff0c\u5728\u805a\u5408\u5185\u90e8\u8d1f\u8d23\u534f\u8c03\u5b9e\u4f53\u548c\u503c\u5bf9\u8c61\u6309\u7167\u56fa\u5b9a\u7684\u4e1a\u52a1\u89c4\u5219\u534f\u540c\u5b8c\u6210\u5171\u540c\u7684\u4e1a\u52a1\u903b\u8f91\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u540e\u5728\u805a\u5408\u4e4b\u95f4\uff0c\u4ed6\u8fd8\u662f\u805a\u5408\u5bf9\u5916\u7684\u63a5\u53e3\u4eba\uff0c\u4ee5\u805a\u5408\u6839 ID \u5173\u8054\u7684\u65b9\u5f0f\u63a5\u53d7\u5916\u90e8\u4efb\u52a1\u548c\u8bf7\u6c42\uff0c\u5728\u4e0a\u4e0b\u6587\u5185\u5b9e\u73b0\u805a\u5408\u4e4b\u95f4\u7684\u4e1a\u52a1\u534f\u540c\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u805a\u5408\u4e4b\u95f4\u901a\u8fc7\u805a\u5408\u6839 ID \u5173\u8054\u5f15\u7528\uff0c\u5982\u679c\u9700\u8981\u8bbf\u95ee\u5176\u5b83\u805a\u5408\u7684\u5b9e\u4f53\uff0c\u5c31\u8981\u5148\u8bbf\u95ee\u805a\u5408\u6839\uff0c\u518d\u5bfc\u822a\u5230\u805a\u5408\u5185\u90e8\u5b9e\u4f53\uff0c\u5916\u90e8\u5bf9\u8c61\u4e0d\u80fd\u76f4\u63a5\u8bbf\u95ee\u805a\u5408\u5185\u5b9e\u4f53\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u600e\u6837\u8bbe\u7f6e\u805a\u5408",children:"\u600e\u6837\u8bbe\u7f6e\u805a\u5408\uff1f"})]})}function p(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var i=t(7294);const d={},r=i.createContext(d);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);