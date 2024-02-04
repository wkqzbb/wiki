"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[5403],{7024:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>s,toc:()=>o});var d=i(5893),t=i(1151);const c={title:"\u6218\u672f\u8bbe\u8ba1\u5206\u6790\u548c\u4ea4\u6613\u57df\u4f9d\u8d56\u51c6\u5907\u5de5\u4f5c"},l=void 0,s={id:"object-oriented/ddd/tactical-design/1",title:"\u6218\u672f\u8bbe\u8ba1\u5206\u6790\u548c\u4ea4\u6613\u57df\u4f9d\u8d56\u51c6\u5907\u5de5\u4f5c",description:"* \u4ea4\u6613\u57df\u540d\u4e1a\u52a1\u6d41\u7a0b\u719f\u6089",source:"@site/docs/object-oriented/ddd/tactical-design/1.mdx",sourceDirName:"object-oriented/ddd/tactical-design",slug:"/object-oriented/ddd/tactical-design/1",permalink:"/wiki/en/docs/object-oriented/ddd/tactical-design/1",draft:!1,unlisted:!1,editUrl:"https://github.com/wkqzbb/wiki/tree/develop?search=1/docs/object-oriented/ddd/tactical-design/1.mdx",tags:[],version:"current",frontMatter:{title:"\u6218\u672f\u8bbe\u8ba1\u5206\u6790\u548c\u4ea4\u6613\u57df\u4f9d\u8d56\u51c6\u5907\u5de5\u4f5c"},sidebar:"objectOriented",previous:{title:"\u6218\u672f\u8bbe\u8ba1",permalink:"/wiki/en/docs/object-oriented/ddd/tactical-design/"}},r={},o=[{value:"\u4e1a\u52a1\u6d41\u7a0b\u6f14\u793a",id:"\u4e1a\u52a1\u6d41\u7a0b\u6f14\u793a",level:2},{value:"\u9488\u5bf9\u4ea4\u6613\u57df\u8fdb\u884c\u6218\u672f\u8bbe\u8ba1\u5206\u6790",id:"\u9488\u5bf9\u4ea4\u6613\u57df\u8fdb\u884c\u6218\u672f\u8bbe\u8ba1\u5206\u6790",level:2},{value:"\u6218\u672f\u8bbe\u8ba1\u5206\u6790\u2014\u5bf9\u8c61\u95f4\u5173\u7cfb",id:"\u6218\u672f\u8bbe\u8ba1\u5206\u6790\u5bf9\u8c61\u95f4\u5173\u7cfb",level:3},{value:"\u552e\u5356\u673a\u626b\u7801\u652f\u4ed8\u8d2d\u7269",id:"\u552e\u5356\u673a\u626b\u7801\u652f\u4ed8\u8d2d\u7269",level:3},{value:"\u67dc\u95e8\u673a\u514d\u5bc6\u652f\u4ed8\u8d2d\u7269",id:"\u67dc\u95e8\u673a\u514d\u5bc6\u652f\u4ed8\u8d2d\u7269",level:3}];function h(n){const e={h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,t.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u4ea4\u6613\u57df\u540d\u4e1a\u52a1\u6d41\u7a0b\u719f\u6089"}),"\n",(0,d.jsx)(e.li,{children:"\u9488\u5bf9\u4ea4\u6613\u57df\u8fdb\u884c\u6218\u672f\u8bbe\u8ba1\u5206\u6790"}),"\n",(0,d.jsx)(e.li,{children:"\u6838\u5fc3\u57df\u4e0a\u4e0b\u6587\u7684\u4f9d\u8d56\u51c6\u5907\u5de5\u4f5c"}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"\u4e1a\u52a1\u6d41\u7a0b\u6f14\u793a",children:"\u4e1a\u52a1\u6d41\u7a0b\u6f14\u793a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u89c6\u9891\u4e00\uff1a \u8d27\u9053\u552e\u5356\u673a\u8d2d\u7269\u6d41\u7a0b\u6f14\u793a"}),"\n",(0,d.jsx)(e.li,{children:"\u89c6\u9891\u4e8c\uff1a \u65e0\u4eba\u8d27\u67dc\u673a\uff08\u67dc\u95e8\u673a\uff09\u8d2d\u7269\u6d41\u7a0b\u6f14\u793a"}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"\u9488\u5bf9\u4ea4\u6613\u57df\u8fdb\u884c\u6218\u672f\u8bbe\u8ba1\u5206\u6790",children:"\u9488\u5bf9\u4ea4\u6613\u57df\u8fdb\u884c\u6218\u672f\u8bbe\u8ba1\u5206\u6790"}),"\n",(0,d.jsx)(e.p,{children:"\u5728\u6218\u672f\u5206\u6790\u65f6\uff0c\u6211\u4eec\u5df2\u7ecf\u628a\u7cfb\u7edf\u4e2d\u7684\u9650\u754c\u4e0a\u4e0b\u6587\u5206\u6790\u51fa\u6765\u4e86\uff0c\u6211\u4eec\u9700\u8981\u5148\u628a\u9650\u754c\u4e0a\u4e0b\u6587\u753b\u51fa\u6765\uff0c\u5305\u62ec\u4ea4\u6613\u4e0a\u4e0b\u6587\u3001\u652f\u4ed8\u4e0a\u4e0b\u6587\u3001\u5546\u54c1\u4e0a\u4e0b\u6587\u3001\u8bbe\u5907\u4e0a\u4e0b\u6587\u4ee5\u53ca\u5916\u90e8\u7684\u5fae\u4fe1\u652f\u4ed8\u4e0a\u4e0b\u6587\u548c\u5546\u54c1\u4e2d\u53f0\u4e0a\u4e0b\u6587\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u5728\u5206\u6790\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u9996\u5148\u8fd8\u662f\u4ece\u89d2\u8272\u51fa\u53d1\uff0c\u4f46\u662f\u5f53\u6211\u4eec\u4ece\u89d2\u8272\u51fa\u53d1\uff0c\u5f15\u51fa\u4e86\u7cfb\u7edf\u4e2d\u7684\u4e00\u4e9b\u5173\u952e\u5bf9\u8c61\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u9700\u8981\u8003\u8651\u8fd9\u4e9b\u5bf9\u8c61\u5b83\u7684\u72b6\u6001\u53d8\u66f4\u3001\u6784\u9020\u662f\u5426\u9700\u8981\u7cfb\u7edf\u4e2d\u5176\u5b83\u7684\u5bf9\u8c61\u6765\u63d0\u4f9b\u6570\u636e\uff0c\u7136\u540e\u5c31\u8981\u601d\u8003\u8fd9\u4e2a\u5bf9\u8c61\u5b83\u7684\u72b6\u6001\u53d1\u751f\u53d8\u5316\u662f\u5426\u4f1a\u5bfc\u81f4\u7cfb\u7edf\u4e2d\u5176\u5b83\u7684\u5bf9\u8c61\u72b6\u6001\u53d1\u751f\u53d8\u5316\uff0c\u7136\u540e\u5728\u5b83\u4eec\u4e4b\u95f4\u5efa\u7acb\u5173\u8054\u3002\u5bf9\u8c61\u7684\u72b6\u6001\u53d8\u66f4\u5bfc\u81f4\u53e6\u5916\u4e00\u4e2a\u5bf9\u8c61\u7684\u72b6\u6001\u53d1\u751f\u53d8\u66f4\uff0c\u53ef\u4ee5\u662f\u901a\u8fc7\u53d1\u9001\u547d\u4ee4\u7684\u65b9\u5f0f\uff0c\u4e5f\u53ef\u4ee5\u662f\u901a\u8fc7\u4e8b\u4ef6\u901a\u77e5\u7684\u65b9\u5f0f\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u5f39\u51fa\u5546\u54c1\u5c31\u662f\u4e00\u4e2a\u547d\u4ee4\u901a\u77e5\u7684\u65b9\u5f0f\uff0c\u51fa\u8d27\u5931\u8d25\u5c31\u662f\u4e8b\u4ef6\u901a\u77e5\u3002\u4e8b\u4ef6\u901a\u77e5\u7684\u5177\u4f53\u65b9\u5f0f\u53ef\u4ee5\u662f\u901a\u8fc7 API \u8c03\u7528\u6765\u901a\u77e5\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e8b\u4ef6\u53d1\u5e03\u548c\u8ba2\u9605\u7684\u65b9\u5f0f\u6765\u901a\u77e5\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u6bd4\u5982\u5fae\u4fe1\u652f\u4ed8\u4e0a\u4e0b\u6587\u901a\u77e5\u652f\u4ed8\u4e0a\u4e0b\u6587\u901a\u77e5\u652f\u4ed8\u7684\u72b6\u6001\uff0c\u5c31\u662f\u8c03\u7528\u652f\u4ed8\u4e0a\u4e0b\u6587\u63d0\u4f9b\u7684\u56de\u8c03\u63a5\u53e3\uff0c\u800c\u7cfb\u7edf\u5185\u90e8\u7684\u8ba2\u5355\u3001\u652f\u4ed8\u6216\u8005\u5176\u5b83\u5bf9\u8c61\u4e4b\u95f4\uff0c\u5982\u679c\u662f\u5f02\u6b65\u901a\u77e5\uff0c\u5c31\u4f1a\u901a\u8fc7\u4e8b\u4ef6\u53d1\u5e03/\u8ba2\u9605\u7684\u65b9\u5f0f\u6765\u5b8c\u6210\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u628a\u5404\u4e2a\u4e0a\u4e0b\u6587\u9700\u8981\u63d0\u4f9b\u7684\u670d\u52a1\u63a5\u53e3\u7ed9\u5b9a\u4e49\u4e0b\u6765\u4e86\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u6bd4\u5982\u5f53\u4e00\u4e2a \u5bf9\u8c61\u9700\u8981\u4e3a\u5176\u5b83\u5bf9\u8c61\u63d0\u4f9b\u6570\u636e\u7684\u65f6\u5019\uff0c\u5c31\u9700\u8981\u4e00\u4e2a\u67e5\u8be2\u63a5\u53e3\uff1b\u5f53\u4e00\u4e2a\u5bf9\u8c61\u901a\u8fc7\u547d\u4ee4\u65b9\u5f0f\u53bb\u5f71\u54cd\u53e6\u5916\u4e00\u4e2a\u5bf9\u8c61\u7684\u72b6\u6001\u65f6 \uff0c\u5c31\u610f\u5473\u7740\u8fd9\u91cc\u7684\u8fb9\u754c\u5c31\u5b58\u5728\u7740\u4e00\u4e2a\u547d\u4ee4\u63a5\u53e3\uff1b"}),"\n",(0,d.jsx)(e.p,{children:"\u5982\u679c\u662f\u901a\u8fc7\u4e8b\u4ef6\u901a\u77e5\u7684\u65b9\u5f0f\u6765\u5f71\u54cd\u53e6\u5916\u4e00\u4e2a\u5bf9\u8c61\u7684\u72b6\u6001\u53d8\u66f4\uff0c\u5c31\u5b58\u5728\u7740\u4e8b\u4ef6\u7684\u53d1\u5e03/\u8ba2\u9605\uff0c\u901a\u8fc7\u6218\u672f\u8bbe\u8ba1\u7684\u8fd9\u79cd\u5206\u6790\uff0c\u4e3a\u540e\u9762\u5373\u5c06\u8fdb\u884c\u7684\u7f16\u7801\u5de5\u4f5c\u5c31\u6253\u4e0b\u4e86\u826f\u597d\u7684\u57fa\u7840\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"\u6218\u672f\u8bbe\u8ba1\u5206\u6790\u5bf9\u8c61\u95f4\u5173\u7cfb",children:"\u6218\u672f\u8bbe\u8ba1\u5206\u6790\u2014\u5bf9\u8c61\u95f4\u5173\u7cfb"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\u4e00\u4e2a\u5bf9\u8c61\u4e3a\u53e6\u4e00\u4e2a\u5bf9\u8c61\u7684\u72b6\u6001\u53d8\u66f4\u63d0\u4f9b\u6570\u636e\uff1b\u6240\u8c13\u5bf9\u8c61\u7684\u72b6\u6001\u53d8\u66f4\u53ef\u4ee5\u662f\u4e00\u4e2a\u5bf9\u8c61\u7684\u521b\u5efa\uff1b\u53ef\u4ee5\u662f\u4e00\u4e2a\u5df2\u5b58\u5728\u7684\u5bf9\u8c61\u5b83\u7684\u72b6\u6001\u53d1\u751f\u4e86\u53d8\u5316\u3002","\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u552e\u5356\u673a\u5546\u54c1\u5bf9\u8c61 \u7c7b\u662f\u7528\u6237\u5728\u9009\u62e9\u5546\u54c1\u4e4b\u524d\u5728\u552e\u5356\u673a\u4e0a\u770b\u5230\u7684\u5546\u54c1\u5217\u8868\uff0c\u9996\u5148\u5b83\u9700\u8981\u7684\u662f\u552e\u5356\u673a\u91cc\u9762\u7684\u5546\u54c1\u5e93\u5b58\uff0c\u6240\u4ee5\u5c31\u9700\u8981\u552e\u5356\u673a\u5546\u54c1\u5e93\u5b58\u5bf9\u8c61\u4e3a\u5b83\u63d0\u4f9b\u6570\u636e\uff1b\u6b64\u5916\uff0c\u6211\u4eec\u62ff\u5230\u4e86\u552e\u5356\u673a\u7684\u5546\u54c1\u5e93\u5b58\uff0c\u8981\u5c55\u793a\u5546\u54c1\u7684\u8bdd\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u901a\u8fc7\u5b83\u7684\u5546\u54c1 id \u53bb\u83b7\u53d6\u5546\u54c1\u7684\u4fe1\u606f\uff1b\u5546\u54c1\u4fe1\u606f\u548c\u552e\u5356\u673a\u5546\u54c1\u5e93\u5b58\u5c31\u9700\u8981\u6709\u5173\u8054\uff0c\u5546\u54c1\u4fe1\u606f\u548c\u552e\u5356\u673a\u5546\u54c1\u5e93\u5b58\u4e3a\u552e\u5356\u673a\u5546\u54c1\u5217\u8868\u5bf9\u8c61\u63d0\u4f9b\u6570\u636e"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\u4e00\u4e2a\u5bf9\u8c61\u7684\u72b6\u6001\u53d8\u66f4\u5bfc\u81f4\u53e6\u4e00\u4e2a\u5bf9\u8c61\u7684\u72b6\u6001\u53d8\u66f4","\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u5f53\u8ba2\u5355\u521b\u5efa\u51fa\u6765\u7684\u65f6\u5019\uff0c\u652f\u4ed8\u4e0a\u4e0b\u6587\u7684\u652f\u4ed8\u5bf9\u8c61\u9700\u8981\u611f\u77e5\u5230\u8ba2\u5355\u72b6\u6001\u7684\u53d8\u5316\uff0c\u4ece\u800c\u5f00\u59cb\u652f\u4ed8\u6d41\u7a0b\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u8ba2\u5355\u72b6\u6001\u7684\u53d8\u5316\u4f1a\u5f71\u54cd\u5230\u652f\u4ed8\u72b6\u6001\u7684\u53d8\u5316\uff0c\u8ba2\u5355\u5230\u652f\u4ed8\u5bf9\u8c61\u5c31\u4f1a\u6709\u4e00\u4e2a\u5173\u8054\uff1b\u6b64\u5916\uff0c\u5f53\u652f\u4ed8\u5bf9\u8c61\u7684\u72b6\u6001\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u6bd4\u5982\u652f\u4ed8\u5b8c\u6210/\u5931\u8d25\uff0c\u8fd9\u4e2a\u72b6\u6001\u4e5f\u4f1a\u901a\u77e5\u5230\u8ba2\u5355\uff0c\u5f15\u8d77\u8ba2\u5355\u5bf9\u8c61\u7684\u72b6\u6001\u53d8\u5316\uff0c\u6240\u4ee5\u4e5f\u4f1a\u6709\u4ece\u652f\u4ed8\u5bf9\u8c61\u5230\u8ba2\u5355\u5bf9\u8c61\u7684\u5173\u8054\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u5728\u6218\u672f\u8bbe\u8ba1\u7684\u8fc7\u7a0b\u79cd\uff0c\u5c31\u662f\u8981\u5145\u5206\u6316\u6398\u5bf9\u8c61\u4e0e\u5bf9\u8c61\u4e4b\u95f4\u7684\u4e24\u79cd\u5173\u8054\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u6211\u4eec\u901a\u8fc7\u5bf9\u8c61\u4e0e\u5bf9\u8c61\u4e4b\u95f4\u7684\u7bad\u5934\u8868\u793a\u8fd9\u4e24\u79cd\u5173\u8054\uff0c\u8fd9\u662f\u76f8\u5bf9\u4e8e\u6218\u7565\u8bbe\u8ba1\u9636\u6bb5\u7684\u9886\u57df\u6545\u4e8b\u9648\u8ff0\u6cd5\u8fdb\u884c\u5206\u6790\u7684\u601d\u8def\u4e0a\u7684\u4e3b\u8981\u8c03\u6574\uff0c\u6211\u4eec\u7684\u91cd\u70b9\u4e0d\u518d\u662f\u56f4\u7ed5\u7740\u7528\u6237\u548c\u9886\u57df\u4e2d\u7684\u5176\u5b83\u89d2\u8272\u4ee5\u53ca\u4ece\u8fd9\u4e9b\u89d2\u8272\u51fa\u53d1\u7684\u6d3b\u52a8\u6765\u8fdb\u884c\u5206\u6790\u4e86\uff0c\u800c\u8f6c\u53d8\u5230\u6316\u6398\u9886\u57df\u4e2d\u7684\u5bf9\u8c61\u548c\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u8054\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"\u552e\u5356\u673a\u626b\u7801\u652f\u4ed8\u8d2d\u7269",children:"\u552e\u5356\u673a\u626b\u7801\u652f\u4ed8\u8d2d\u7269"}),"\n",(0,d.jsx)(e.p,{children:"\u9488\u5bf9\u552e\u5356\u673a\u626b\u7801\u652f\u4ed8\u8d2d\u7269\u8fd9\u4e2a\u7528\u6237\u6545\u4e8b\uff0c\u9996\u5148\uff0c\u7528\u6237\u8fd8\u662f\u9700\u8981\u5728\u552e\u5356\u673a\u4e0a\u9009\u62e9\u4ed6\u8981\u4e70\u7684\u5546\u54c1\uff0c\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u9700\u8981\u8fdb\u884c\u7ec6\u5316\uff0c\u56e0\u4e3a\u7528\u6237\u5728\u9009\u62e9\u5546\u54c1\u4e4b\u524d\uff0c\u8981\u67e5\u770b\u552e\u5356\u673a\u4e0a\u7684\u5546\u54c1\u5217\u8868\uff0c\u552e\u5356\u673a\u5546\u54c1\u5217\u8868\u7684\u6570\u636e\u7684\u521b\u5efa\u9700\u8981\u552e\u5356\u673a\u5546\u54c1\u5e93\u5b58\uff08\u8bbe\u5907\u4e0a\u4e0b\u6587\uff09\u548c \u5546\u54c1\u4fe1\u606f\uff08\u5546\u54c1\u4e0a\u4e0b\u6587\uff09\uff0c\u5546\u54c1\u4e0a\u4e0b\u6587\u7684\u5546\u54c1\u4fe1\u606f\u662f\u7531\u5ba2\u6237\u90a3\u4e00\u4fa7\u7684\u5546\u54c1\u4e2d\u53f0\u4e2d\u5f97\u5230\u7684\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u63a5\u4e0b\u6765\u5c31\u9700\u8981\u5230\u8d27\u9053\u552e\u5356\u673a\u4e0a\u9009\u62e9\u5546\u54c1\uff0c\u9009\u62e9\u5546\u54c1\u4e4b\u540e\uff0c\u8d27\u9053\u552e\u5356\u673a\u7684\u72b6\u6001\u5c31\u4f1a\u53d1\u751f\u53d8\u66f4\u3002\u56e0\u4e3a\u8fd9\u4e2a\u65f6\u5019\u9700\u8981\u8fdb\u5165\u4ea4\u6613\u72b6\u6001\uff0c\u6765\u5904\u7406\u5f53\u524d\u7684\u4ea4\u6613\uff0c\u5728\u5f53\u524d\u4ea4\u6613\u53d6\u6d88\u6216\u8005\u5b8c\u6210\u4e4b\u524d\uff0c\u5b83\u662f\u4e0d\u53ef\u4ee5\u5904\u7406\u5176\u5b83\u4ea4\u6613\u7684\u3002\u5426\u5219\u4f1a\u6709\u95ee\u9898\u3002\u6b64\u65f6\u8d27\u9053\u552e\u5356\u673a\u4f1a\u8fdb\u5165\u4e00\u4e2a\u9501\u5b9a\u7684\u72b6\u6001\uff0c\u6211\u4eec\u79f0\u5b83\u4e3a\u4ea4\u6613\u72b6\u6001\u3002\u8d27\u9053\u552e\u5356\u673a\u8fdb\u5165\u4ea4\u6613\u72b6\u6001\uff0c\u4f1a\u5bfc\u81f4\u9886\u57df\u4e2d\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61 \u2014 \u8ba2\u5355\uff0c\u6240\u4ee5\u8d27\u9053\u552e\u5356\u673a\u4f1a\u5173\u8054\u5230\u8ba2\u5355\uff0c\u8ba2\u5355\u5bf9\u8c61\u7684\u521b\u5efa\u8fd8\u9700\u8981\u7528\u6237\u6240\u9009\u62e9\u7684\u5546\u54c1\u7684\u5546\u54c1\u4fe1\u606f\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u8ba2\u5355\u7684\u521b\u5efa\u53c8\u4f1a\u5bfc\u81f4\u5176\u5b83\u7684\u5bf9\u8c61\u7684\u72b6\u6001\u53d1\u751f\u53d8\u66f4\uff0c\u8ba2\u5355\u751f\u6210\u4e4b\u540e\uff0c\u63a5\u4e0b\u6765\u5c31\u9700\u8981\u652f\u4ed8\u4e86\uff0c\u8ba2\u5355\u72b6\u6001\u7684\u53d8\u66f4\u9700\u8981\u4f20\u5bfc\u5230\u652f\u4ed8\u4e0a\u4e0b\u6587\uff0c\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u652f\u4ed8\u5bf9\u8c61\uff0c\u652f\u4ed8\u5bf9\u8c61\u5305\u542b\u4e86\u652f\u4ed8\u5e73\u53f0\uff08\u652f\u4ed8\u5b9d\u3001\u5fae\u4fe1\uff09\u3001\u8ba2\u5355\u4fe1\u606f\uff08\u8ba2\u5355\u7684id\u3001\u603b\u4ef7\u7b49\uff09\u3001\u652f\u4ed8\u4e8c\u7ef4\u7801\uff08\u9700\u8981\u652f\u4ed8\u5e73\u53f0\u63d0\u4f9b\u9884\u652f\u4ed8\u4ea4\u6613\u94fe\u63a5\uff0c\u6839\u636e\u9884\u652f\u4ed8\u4ea4\u6613\u94fe\u63a5\u751f\u6210\u4ea4\u6613\u4e8c\u7ef4\u7801\uff09\u7b49\u5173\u952e\u4fe1\u606f\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u63a5\u4e0b\u6765\u7528\u6237\u5c31\u8981\u53bb\u626b\u63cf\u652f\u4ed8\u4e8c\u7ef4\u7801\uff0c\u5f53\u4ed8\u6b3e\u5b8c\u6210\u4e4b\u540e\uff0c\u5fae\u4fe1\u652f\u4ed8\u4e0a\u4e0b\u6587\u4f1a\u628a\u652f\u4ed8\u5b8c\u6210\u8fd9\u4e2a\u4e8b\u4ef6\u901a\u77e5\u5230\u652f\u4ed8\u4e0a\u4e0b\u6587\u7684\u652f\u4ed8\u5bf9\u8c61\u3002\u652f\u4ed8\u5bf9\u8c61\u7684\u72b6\u6001\u4e5f\u4f1a\u53d1\u751f\u53d8\u66f4\uff0c\u652f\u4ed8\u72b6\u6001\u7684\u53d8\u66f4\u5c31\u4f1a\u5bfc\u81f4\u8ba2\u5355\u72b6\u6001\u7684\u518d\u6b21\u53d8\u66f4\uff0c\u8ba2\u5355\u4f1a\u8fdb\u5165\u652f\u4ed8\u5b8c\u6210\u72b6\u6001\u3002\u6240\u4ee5\uff0c\u652f\u4ed8\u5bf9\u8c61\u4f1a\u6709\u4e2a\u7bad\u5934\u8fde\u63a5\u5230\u8ba2\u5355\uff0c\u8868\u793a\u652f\u4ed8\u5bf9\u8c61\u7684\u72b6\u6001\u7684\u53d8\u5316\u4e5f\u4f1a\u5bfc\u81f4\u8ba2\u5355\u72b6\u6001\u7684\u53d8\u5316\uff0c\u8ba2\u5355\u5728\u652f\u4ed8\u5b8c\u6210\u4e4b\u540e\u5c31\u4f1a\u89e6\u53d1\u8d27\u9053\u552e\u5356\u673a\u5f39\u51fa\u5546\u54c1\uff0c\u8ba2\u5355\u7684\u72b6\u6001\u53d8\u5316\uff0c\u4e5f\u4f1a\u5bfc\u81f4\u8bbe\u5907\u4e0a\u4e0b\u6587\u7684\u8d27\u9053\u552e\u5356\u673a\u7684\u72b6\u6001\u53d1\u751f\u53d8\u5316\uff0c\u540c\u65f6\u4e5f\u4f1a\u5bfc\u81f4\u4ea4\u6613\u4e0a\u4e0b\u6587\u7684\u8d27\u9053\u552e\u5356\u673a\u7684\u72b6\u6001\u53d1\u751f\u53d8\u5316\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u8bbe\u5907\u4e0a\u4e0b\u6587\u7684\u8d27\u9053\u552e\u5356\u673a\u6709\u53ef\u80fd\u4f1a\u51fa\u8d27\u5931\u8d25\uff0c\u4e5f\u6709\u53ef\u80fd\u4f1a\u6210\u529f\uff0c\u5f53\u51fa\u8d27\u5931\u8d25\u7684\u65f6\u5019\uff0c\u51fa\u8d27\u5931\u8d25\u7684\u4e8b\u4ef6\u4e00\u5b9a\u8981\u901a\u77e5\u5230\u4ea4\u6613\u4e0a\u4e0b\u6587\u7684\u8ba2\u5355\uff0c\u8ba2\u5355\u7684\u72b6\u6001\u4f1a\u518d\u4e00\u6b21\u53d1\u751f\u53d8\u5316\uff0c\u8ba2\u5355\u7684\u72b6\u6001\u4f1a\u8fdb\u5165\u5230\u53d6\u6d88\u7684\u72b6\u6001\uff0c\u8ba2\u5355\u53d6\u6d88\u72b6\u6001\u4e5f\u9700\u8981\u901a\u77e5\u5230\u652f\u4ed8\u5bf9\u8c61\u7684\u518d\u4e00\u6b21\u53d8\u66f4\uff0c\u4ece\u800c\u89e6\u53d1\u9000\u6b3e\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u9664\u6b64\u4e4b\u5916\uff0c\u8fd8\u9700\u8981\u4e00\u4e2a\u8d85\u65f6\u63a7\u5236\u673a\u5236\uff0c\u5f53\u7528\u6237\u8fdf\u8fdf\u4e0d\u8fdb\u884c\u4ed8\u6b3e\u7684\u65f6\u5019\uff0c\u6211\u4eec\u9700\u8981\u81ea\u52a8\u53d6\u6d88\u8ba2\u5355\u3002"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.img,{src:"https://wkq-img.oss-cn-chengdu.aliyuncs.com/img/%E5%94%AE%E5%8D%96%E6%9C%BA%E6%89%AB%E7%A0%81%E6%94%AF%E4%BB%98%E8%B4%AD%E7%89%A9_%E6%88%98%E6%9C%AF%E8%AE%BE%E8%AE%A1_2024-01-19.png",alt:"\u552e\u5356\u673a\u626b\u7801\u652f\u4ed8\u8d2d\u7269_\u6218\u672f\u8bbe\u8ba1_2024-01-19"})}),"\n",(0,d.jsx)(e.h3,{id:"\u67dc\u95e8\u673a\u514d\u5bc6\u652f\u4ed8\u8d2d\u7269",children:"\u67dc\u95e8\u673a\u514d\u5bc6\u652f\u4ed8\u8d2d\u7269"}),"\n",(0,d.jsx)(e.p,{children:"\u7528\u6237\u9996\u5148\u626b\u7801\u4e8c\u7ef4\u7801\u8bf7\u6c42\u5f00\u95e8\uff0c\u626b\u7801\u8fd9\u4e2a\u52a8\u4f5c\u5176\u5b9e\u662f\u8bf7\u6c42\u6253\u5f00\u4e86\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\uff0c\u4e5f\u5c31\u662f\u4ea4\u6613\u5c0f\u7a0b\u5e8f\uff0c\u5c0f\u7a0b\u5e8f\u4f1a\u53bb\u8bbf\u95ee\u4ea4\u6613\u4e0a\u4e0b\u6587\u7684\u63a5\u53e3\uff0c\u5982\u679c\u7528\u6237\u662f\u7b2c\u4e00\u6b21\u626b\u7801\u7684\u8bdd\uff0c\u8bf7\u6c42\u91cc\u9762\u5e76\u6ca1\u6709\u643a\u5e26\u6211\u4eec\u9700\u8981\u7684\u8eab\u4efd\u8ba4\u8bc1\u4fe1\u606f\uff0c\u6240\u4ee5\u4ea4\u6613\u4e0a\u4e0b\u6587\u4f1a\u8fd4\u56de\u9519\u8bef\u7801\uff1b\u5c0f\u7a0b\u5e8f\u62ff\u5230\u9519\u8bef\u7801\u4e4b\u540e\u5c31\u77e5\u9053\u9700\u8981\u5148\u53bb\u6ce8\u518c\u548c\u767b\u5f55\uff0c\u4e5f\u5c31\u662f\u8bbf\u95ee\u7528\u6237\u4e0a\u4e0b\u6587\u76f8\u5173\u7684\u63a5\u53e3\uff1b\u5982\u679c\u8fd9\u4e2a\u7528\u6237\u4e4b\u524d\u6ca1\u6709\u7b7e\u7f72\u8fc7\u5fae\u4fe1\u652f\u4ed8\u514d\u5bc6\u6263\u6b3e\u7684\u652f\u4ed8\u534f\u8bae\uff0c\u7528\u6237\u4e0a\u4e0b\u6587\u5c31\u4f1a\u901a\u8fc7\u54cd\u5e94\u544a\u77e5\u5c0f\u7a0b\u5e8f\u5b83\u4f1a\u53bb\u8c03\u7528\u5fae\u4fe1\u76f8\u5173\u7684\u63a5\u53e3\u7b7e\u7f72\u652f\u4ed8\u534f\u8bae\uff0c\u534f\u8bae\u7684\u7b7e\u7f72\u8fc7\u7a0b\u662f\u53d1\u751f\u5728\u5fae\u4fe1\u652f\u4ed8\u4e0a\u4e0b\u6587\uff0c\u7b7e\u7f72\u5b8c\u6210\u4e4b\u540e\u5fae\u4fe1\u652f\u4ed8\u4e0a\u4e0b\u6587\u5c31\u4f1a\u628a\u76f8\u5173\u7684\u7ed3\u679c\u901a\u77e5\u5230\u7528\u6237\u4e0a\u4e0b\u6587\uff0c\u4f1a\u5f15\u8d77\u7528\u6237\u8d26\u53f7\u72b6\u6001\u7684\u53d8\u66f4\u3002\u7b7e\u7f72\u5b8c\u6210\u4e4b\u540e\u5c0f\u7a0b\u5e8f\u4f1a\u518d\u6b21\u89e6\u53d1\u767b\u5f55\u7684\u52a8\u4f5c\uff0c\u8fd9\u4e2a\u65f6\u5019\u7528\u6237\u4e0a\u4e0b\u6587\u5c31\u4f1a\u628a\u767b\u5f55\u51ed\u8bc1\u8fd4\u56de\u7ed9\u5c0f\u7a0b\u5e8f\uff1b"}),"\n",(0,d.jsx)(e.p,{children:"\u767b\u5f55\u5b8c\u6210\u4e4b\u540e\uff0c\u5c0f\u7a0b\u5e8f\u4f1a\u518d\u6b21\u53d1\u8d77\u6253\u5f00\u67dc\u95e8\u7684\u8bf7\u6c42\uff0c\u8fd9\u4e2a\u65f6\u5019\u4ea4\u6613\u4e0a\u4e0b\u6587\u8ba4\u8bc1\u4e86\u7528\u6237\u7684\u8eab\u4efd\u4e4b\u540e\u5c31\u4f1a\u53d1\u9001\u547d\u4ee4\u5230\u8bbe\u5907\u4e0a\u4e0b\u6587\uff0c\u4ece\u800c\u8ba9\u8bbe\u5907\u4e0a\u4e0b\u6587\u4e2d\u7684\u8d27\u67dc\u673a\uff0c\u6253\u5f00\u67dc\u95e8\uff1b\u8fd9\u4e2a\u65f6\u5019\u7528\u6237\u5c31\u4f1a\u53d6\u8d70\u5546\u54c1\uff0c\u5173\u95ed\u5e76\u4e14\u9501\u5b9a\u67dc\u95e8\uff0c\u67dc\u95e8\u9501\u5b9a\u4e4b\u540e\uff0c\u8bbe\u5907\u4e0a\u4e0b\u6587\u7684\u8d27\u67dc\u673a\u7684\u72b6\u6001\u5c31\u4f1a\u53d1\u751f\u53d8\u5316\uff0c\u8fd9\u4e2a\u53d8\u5316\u4f1a\u5f15\u8d77\u4ea4\u6613\u4e0a\u4e0b\u6587\u8d27\u67dc\u673a\u7684\u72b6\u6001\u53d8\u5316\uff0c\u4f1a\u7ed3\u675f\u8fd9\u6b21\u7684\u4ea4\u6613\uff0c\u91cd\u65b0\u8fdb\u5165\u5f85\u547d\u72b6\u6001\uff0c\u540c\u65f6\u4e5f\u4f1a\u89e6\u53d1\u7cfb\u7edf\u751f\u6210\u4e00\u4e2a\u8ba2\u5355\u5bf9\u8c61\uff0c\u8ba2\u5355\u5bf9\u8c61\u7684\u751f\u6210\u4e5f\u4f1a\u5bfc\u81f4\u652f\u4ed8\u4e0a\u4e0b\u6587\u652f\u4ed8\u5bf9\u8c61\u7684\u751f\u6210\uff0c\u540c\u65f6\u4f1a\u5411\u5fae\u4fe1\u652f\u4ed8\u4e0a\u4e0b\u6587\u8bf7\u6c42\u6263\u6b3e\uff0c\u6263\u6b3e\u5b8c\u6210\u4e4b\u540e\u4e5f\u4f1a\u901a\u77e5\u5230\u652f\u4ed8\u4e0a\u4e0b\u6587\uff0c\u5bfc\u81f4\u652f\u4ed8\u4e0a\u4e0b\u6587\u4e2d\u7684\u652f\u4ed8\u5bf9\u8c61\u72b6\u6001\u53d1\u751f\u53d8\u5316\uff1b\u540c\u65f6\u4e5f\u4f1a\u5bfc\u81f4\u4ea4\u6613\u4e0a\u4e0b\u6587\u7684\u8ba2\u5355\u8fdb\u5165\u7ed3\u675f\u72b6\u6001\u3002"})]})}function a(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>s,a:()=>l});var d=i(7294);const t={},c=d.createContext(t);function l(n){const e=d.useContext(c);return d.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),d.createElement(c.Provider,{value:e},n.children)}}}]);