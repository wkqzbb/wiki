"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[6850],{8202:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>t,contentTitle:()=>s,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var i=d(5893),c=d(1151);const r={title:"DDD\u5206\u5c42\u67b6\u6784"},s=void 0,l={id:"object-oriented/ddd/basic/ddd_layered_architecture",title:"DDD\u5206\u5c42\u67b6\u6784",description:"\u5fae\u670d\u52a1\u67b6\u6784\u6a21\u578b\u6709\u5f88\u591a\u79cd\uff0c\u6bd4\u5982\u6574\u4f53\u67b6\u6784\u3001CQRS \u548c \u516d\u8fb9\u5f62\u67b6\u6784\u7b49\u7b49\uff0c\u5176\u6838\u5fc3\u7406\u5ff5\u90fd\u662f\u4e3a\u4e86\u8bbe\u8ba1\u51fa\u201c\u9ad8\u5185\u805a\u3001\u4f4e\u8026\u5408\u201d\u7684\u67b6\u6784\uff0c\u8f7b\u677e\u5b9e\u73b0\u67b6\u6784\u6f14\u8fdb\u3002\u800c DDD \u5206\u5c42\u67b6\u6784\u6d4b\u51fa\u73b0\uff0c\u4f7f\u5f97\u67b6\u6784\u8fb9\u754c\u8d8a\u6765\u8d8a\u6e05\u6670\u3002",source:"@site/docs/object-oriented/ddd/basic/ddd_layered_architecture.mdx",sourceDirName:"object-oriented/ddd/basic",slug:"/object-oriented/ddd/basic/ddd_layered_architecture",permalink:"/wiki/en/docs/object-oriented/ddd/basic/ddd_layered_architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/wkqzbb/wiki/tree/develop?search=1/docs/object-oriented/ddd/basic/ddd_layered_architecture.mdx",tags:[],version:"current",frontMatter:{title:"DDD\u5206\u5c42\u67b6\u6784"},sidebar:"objectOriented",previous:{title:"\u805a\u5408\u548c\u805a\u5408\u6839",permalink:"/wiki/en/docs/object-oriented/ddd/basic/aggregate"},next:{title:"\u5fae\u670d\u52a1\u67b6\u6784\u6a21\u5f0f",permalink:"/wiki/en/docs/object-oriented/ddd/basic/microservice_architecture_pattern"}},t={},h=[{value:"\u4ec0\u4e48\u662f DDD \u5206\u5c42\u67b6\u6784",id:"\u4ec0\u4e48\u662f-ddd-\u5206\u5c42\u67b6\u6784",level:2},{value:"1. \u7528\u6237\u63a5\u53e3\u5c42",id:"1-\u7528\u6237\u63a5\u53e3\u5c42",level:3},{value:"2. \u5e94\u7528\u5c42",id:"2-\u5e94\u7528\u5c42",level:3},{value:"3. \u9886\u57df\u5c42",id:"3-\u9886\u57df\u5c42",level:3},{value:"4. \u57fa\u7840\u5c42",id:"4-\u57fa\u7840\u5c42",level:3},{value:"DDD \u5206\u5c42\u67b6\u6784\u6700\u91cd\u8981\u7684\u539f\u5219\u662f\u4ec0\u4e48\uff1f",id:"ddd-\u5206\u5c42\u67b6\u6784\u6700\u91cd\u8981\u7684\u539f\u5219\u662f\u4ec0\u4e48",level:2},{value:"DDD \u5206\u5c42\u67b6\u6784\u5982\u4f55\u63a8\u52a8\u67b6\u6784\u6f14\u8fdb\uff1f",id:"ddd-\u5206\u5c42\u67b6\u6784\u5982\u4f55\u63a8\u52a8\u67b6\u6784\u6f14\u8fdb",level:3},{value:"1. \u5fae\u670d\u52a1\u67b6\u6784\u7684\u6f14\u8fdb",id:"1-\u5fae\u670d\u52a1\u67b6\u6784\u7684\u6f14\u8fdb",level:3},{value:"2. \u5fae\u670d\u52a1\u5185\u670d\u52a1\u7684\u6f14\u8fdb",id:"2-\u5fae\u670d\u52a1\u5185\u670d\u52a1\u7684\u6f14\u8fdb",level:3},{value:"\u4e09\u5c42\u67b6\u6784\u5982\u4f55\u6f14\u8fdb\u5230 DDD \u5206\u5c42\u67b6\u6784\uff1f",id:"\u4e09\u5c42\u67b6\u6784\u5982\u4f55\u6f14\u8fdb\u5230-ddd-\u5206\u5c42\u67b6\u6784",level:3}];function o(e){const n={admonition:"admonition",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u5fae\u670d\u52a1\u67b6\u6784\u6a21\u578b\u6709\u5f88\u591a\u79cd\uff0c\u6bd4\u5982\u6574\u4f53\u67b6\u6784\u3001CQRS \u548c \u516d\u8fb9\u5f62\u67b6\u6784\u7b49\u7b49\uff0c\u5176\u6838\u5fc3\u7406\u5ff5\u90fd\u662f\u4e3a\u4e86\u8bbe\u8ba1\u51fa\u201c\u9ad8\u5185\u805a\u3001\u4f4e\u8026\u5408\u201d\u7684\u67b6\u6784\uff0c\u8f7b\u677e\u5b9e\u73b0\u67b6\u6784\u6f14\u8fdb\u3002\u800c DDD \u5206\u5c42\u67b6\u6784\u6d4b\u51fa\u73b0\uff0c\u4f7f\u5f97\u67b6\u6784\u8fb9\u754c\u8d8a\u6765\u8d8a\u6e05\u6670\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f-ddd-\u5206\u5c42\u67b6\u6784",children:"\u4ec0\u4e48\u662f DDD \u5206\u5c42\u67b6\u6784"}),"\n",(0,i.jsx)(n.p,{children:"\u4e0b\u9762\u8fd9\u5f20\u56fe\u5c31\u662f\u4f18\u5316\u540e\u7684\u56db\u5c42\u67b6\u6784\uff0c\u4ece\u4e0a\u5230\u4e0b\u4f9d\u6b21\u662f\uff1a\u7528\u6237\u63a5\u53e3\u5c42\u3001\u5e94\u7528\u5c42\u3001\u9886\u57df\u5c42\u3001\u57fa\u7840\u5c42\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://wkq-img.oss-cn-chengdu.aliyuncs.com/img/d02e92626dd8d6b077002ab6b977159d.png",alt:"img"})}),"\n",(0,i.jsx)(n.h3,{id:"1-\u7528\u6237\u63a5\u53e3\u5c42",children:"1. \u7528\u6237\u63a5\u53e3\u5c42"}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u6237\u63a5\u53e3\u5c42\u8d1f\u8d23\u5411\u7528\u6237\u5c55\u793a\u4fe1\u606f\u548c\u89e3\u91ca\u7528\u6237\u6307\u4ee4\u3002\u8fd9\u91cc\u7684\u7528\u6237\u53ef\u80fd\u662f\uff1a\u7528\u6237\u3001\u7a0b\u5e8f\u3001\u81ea\u52a8\u5316\u6d4b\u8bd5\u548c\u6279\u5904\u7406\u811a\u672c\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"2-\u5e94\u7528\u5c42",children:"2. \u5e94\u7528\u5c42"}),"\n",(0,i.jsx)(n.p,{children:"\u5e94\u7528\u5c42\u662f\u5f88\u8584\u7684\u4e00\u5c42\uff0c\u7406\u8bba\u4e0a\u4e0d\u5e94\u8be5\u6709\u4e1a\u52a1\u89c4\u5219\u548c\u903b\u8f91\uff0c\u4e3b\u8981\u9762\u5411\u7528\u4f8b\u548c\u6d41\u7a0b\u76f8\u5173\u7684\u64cd\u4f5c\u3002\u4f46\u5e94\u7528\u5c42\u53c8\u4f4d\u4e8e\u9886\u57df\u5c42\u4e4b\u4e0a\uff0c\u56e0\u4e3a\u9886\u57df\u5c42\u5305\u542b\u591a\u4e2a\u805a\u5408\uff0c\u6240\u4ee5\u5b83\u53ef\u4ee5\u534f\u8c03\u591a\u4e2a\u805a\u5408\u7684\u670d\u52a1\u548c\u9886\u57df\u5bf9\u8c61\u5b8c\u6210\u670d\u52a1\u7f16\u6392\u548c\u7ec4\u5408\uff0c\u534f\u4f5c\u5b8c\u6210\u4e1a\u52a1\u64cd\u4f5c\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6b64\u5916\uff0c\u5e94\u7528\u5c42\u4e5f\u662f\u5fae\u670d\u52a1\u4e4b\u95f4\u4ea4\u4e92\u7684\u901a\u9053\uff0c\u5b83\u53ef\u4ee5\u8c03\u7528\u5176\u4ed6\u5fae\u670d\u52a1\u7684\u5e94\u7528\u670d\u52a1\uff0c\u5b8c\u6210\u5fae\u670d\u52a1\u4e4b\u95f4\u7684\u670d\u52a1\u7ec4\u5408\u548c\u7f16\u6392\u3002"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"\u5728\u8bbe\u8ba1\u548c\u5f00\u53d1\u65f6\uff0c\u4e0d\u8981\u5c06\u672c\u8be5\u653e\u5728\u9886\u57df\u5c42\u7684\u4e1a\u52a1\u903b\u8f91\u653e\u5230\u5e94\u7528\u5c42\u4e2d\u5b9e\u73b0\u3002\u56e0\u4e3a\u5e9e\u5927\u7684\u5e94\u7528\u5c42\u4f1a\u4f7f\u9886\u57df\u5c42\u5931\u7126\uff0c\u65f6\u95f4\u4e00\u957f\u5fae\u670d\u52a1\u5c31\u4f1a\u6f14\u5316\u6210\u4f20\u7edf\u7684\u4e09\u5c42\u67b6\u6784\uff0c\u4e1a\u52a1\u903b\u8f91\u4f1a\u975e\u5e38\u6df7\u4e71\u3002"})}),"\n",(0,i.jsx)(n.p,{children:"\u53e6\u5916\uff0c\u5e94\u7528\u670d\u52a1\u662f\u5728\u5e94\u7528\u5c42\u7684\uff0c\u5b83\u8d1f\u8d23\u670d\u52a1\u7684\u7ec4\u5408\u3001\u7f16\u6392\u548c\u8f6c\u53d1\uff0c\u8d1f\u8d23\u5904\u7406\u4e1a\u52a1\u7528\u6237\u7684\u6267\u884c\u4ee5\u53ca\u7ed3\u679c\u7684\u62fc\u88c5\uff0c\u4ee5\u7c97\u7c92\u5ea6\u7684\u670d\u52a1\u901a\u8fc7 API  \u7f51\u5173\u5411\u524d\u7aef\u53d1\u5e03\u3002\u8fd8\u6709\uff0c\u5e94\u7528\u670d\u52a1\u53ef\u4ee5\u8fdb\u884c\u5b89\u5168\u8ba4\u8bc1\u3001\u6743\u9650\u6821\u9a8c\u3001\u4e8b\u52a1\u63a7\u5236\u3001\u53d1\u9001\u6216\u8ba2\u9605\u9886\u57df\u4e8b\u4ef6\u7b49\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"3-\u9886\u57df\u5c42",children:"3. \u9886\u57df\u5c42"}),"\n",(0,i.jsx)(n.p,{children:"\u9886\u57df\u5c42\u7684\u4f5c\u7528\u662f\u5b9e\u73b0\u6838\u5fc3\u4e1a\u52a1\u903b\u8f91\uff0c\u901a\u8fc7\u5404\u79cd\u6821\u9a8c\u624b\u6bb5\u4fdd\u8bc1\u4e1a\u52a1\u7684\u6b63\u786e\u6027\u3002\u9886\u57df\u5c42\u4e3b\u8981\u4f53\u73b0\u9886\u57df\u6a21\u578b\u7684\u4e1a\u52a1\u80fd\u529b\uff0c\u5b83\u7528\u6765\u8868\u8fbe\u4e1a\u52a1\u6982\u5ff5\u3001\u4e1a\u52a1\u72b6\u6001\u548c\u4e1a\u52a1\u89c4\u5219\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u9886\u57df\u5c42\u5305\u542b\u805a\u5408\u6839\u3001\u5b9e\u4f53\u3001\u503c\u5bf9\u8c61\u3001\u9886\u57df\u670d\u52a1\u7b49\u9886\u57df\u6a21\u578b\u4e2d\u7684\u9886\u57df\u5bf9\u8c61\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\uff0c\u9886\u57df\u6a21\u578b\u7684\u4e1a\u52a1\u903b\u8f91\u4e3b\u8981\u662f\u7531\u5b9e\u4f53\u548c\u9886\u57df\u670d\u52a1\u6765\u5b9e\u73b0\u7684\uff0c\u5176\u4e2d\u5b9e\u4f53\u4f1a\u91c7\u7528\u5145\u8840\u6a21\u578b\u6765\u5b9e\u73b0\u6240\u6709\u4e0e\u4e4b\u76f8\u5173\u7684\u4e1a\u52a1\u529f\u80fd\u3002\u5176\u6b21\uff0c\u5b9e\u4f53\u548c\u9886\u57df\u670d\u52a1\u5728\u5b9e\u73b0\u4e1a\u52a1\u903b\u8f91\u4e0a\u662f\u4e0d\u540c\u7ea7\u7684\uff0c\u5f53\u9886\u57df\u670d\u52a1\u4e2d\u7684\u67d0\u4e9b\u529f\u80fd\uff0c\u5355\u4e00\u5b9e\u4f53\uff08\u6216\u8005\u503c\u5bf9\u8c61\uff09\u4e0d\u80fd\u5b9e\u73b0\u65f6\uff0c\u5b83\u53ef\u4ee5\u7ec4\u5408\u805a\u5408\u5185\u7684\u591a\u4e2a\u5b9e\u4f53\uff08\u6216\u8005\u503c\u5bf9\u8c61\uff09\uff0c\u5b9e\u73b0\u590d\u6742\u7684\u4e1a\u52a1\u903b\u8f91\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"4-\u57fa\u7840\u5c42",children:"4. \u57fa\u7840\u5c42"}),"\n",(0,i.jsx)(n.p,{children:"\u57fa\u7840\u5c42\u662f\u8d2f\u7a7f\u6240\u6709\u5c42\u7684\uff0c\u5b83\u7684\u4f5c\u7528\u5c31\u662f\u4e3a\u5176\u5b83\u5404\u5c42\u63d0\u4f9b\u901a\u7528\u7684\u6280\u672f\u548c\u9886\u57df\u670d\u52a1\uff0c\u5305\u62ec\u7b2c\u4e09\u65b9\u5de5\u5177\u3001\u9a71\u52a8\u3001\u6d88\u606f\u4e2d\u95f4\u4ef6\u3001\u7f51\u5173\u3001\u6587\u4ef6\u3001\u7f13\u5b58\u4ee5\u53ca\u6570\u636e\u5e93\u7b49\u3002\u6bd4\u8f83\u5e38\u89c1\u7684\u8fd8\u662f\u63d0\u4f9b\u6570\u636e\u5e93\u6301\u4e45\u5316\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u57fa\u7840\u5c42\u5305\u542b\u57fa\u7840\u670d\u52a1\uff0c\u5b83\u91c7\u7528\u4f9d\u8d56\u5012\u7f6e\u8bbe\u8ba1\uff0c\u5c01\u88c5\u57fa\u7840\u8d44\u6e90\u670d\u52a1\uff0c\u5b9e\u73b0\u5e94\u7528\u5c42\u3001\u9886\u57df\u5c42\u4e0e\u57fa\u7840\u5c42\u7684\u89e3\u8026\u3002\u964d\u4f4e\u5916\u90e8\u8d44\u6e90\u53d8\u5316\u5bf9\u5e94\u7528\u7684\u5f71\u54cd\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6bd4\u5982\u8bf4\uff0c\u5728\u4f20\u7edf\u67b6\u6784\u8bbe\u8ba1\u4e2d\uff0c\u7531\u4e8e\u4e0a\u5c42\u5bf9\u6570\u636e\u5e93\u7684\u5f3a\u8026\u5408\uff0c\u5f88\u591a\u516c\u53f8\u5728\u67b6\u6784\u6f14\u8fdb\u4e2d\u6700\u62c5\u5fe7\u7684\u5c31\u662f\u66f4\u6362\u6570\u636e\u5e93\u4e86\uff0c\u56e0\u4e3a\u4e00\u65e6\u66f4\u6362\u6570\u636e\u5e93\uff0c\u5c31\u53ef\u80fd\u9700\u8981\u91cd\u5199\u5927\u90e8\u5206\u7684\u4ee3\u7801\uff0c\u8fd9\u5bf9\u5e94\u7528\u6765\u8bf4\u662f\u81f4\u547d\u7684\u3002\u90a3\u91c7\u7528\u4f9d\u8d56\u5012\u7f6e\u7684\u8bbe\u8ba1\u4ee5\u540e\uff0c\u5e94\u7528\u5c42\u5c31\u53ef\u4ee5\u901a\u8fc7\u89e3\u8026\u6765\u4fdd\u6301\u72ec\u7acb\u7684\u6838\u5fc3\u4e1a\u52a1\u903b\u8f91\u3002\u5f53\u6570\u636e\u5e93\u53d8\u66f4\u4e4b\u540e\uff0c\u6211\u4eec\u53ea\u9700\u8981\u66f4\u6362\u6570\u636e\u5e93\u57fa\u7840\u670d\u52a1\u5c31\u53ef\u4ee5\u4e86\uff0c\u8fd9\u6837\u5c31\u5c06\u8d44\u6e90\u53d8\u66f4\u5bf9\u5e94\u7528\u7684\u5f71\u54cd\u964d\u5230\u4e86\u6700\u4f4e\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"ddd-\u5206\u5c42\u67b6\u6784\u6700\u91cd\u8981\u7684\u539f\u5219\u662f\u4ec0\u4e48",children:"DDD \u5206\u5c42\u67b6\u6784\u6700\u91cd\u8981\u7684\u539f\u5219\u662f\u4ec0\u4e48\uff1f"}),"\n",(0,i.jsx)(n.p,{children:"DDD \u5206\u5c42\u67b6\u6784\u6709\u4e00\u4e2a\u91cd\u8981\u7684\u539f\u5219\uff1a\u6bcf\u5c42\u53ea\u80fd\u4e0e\u4f4d\u4e8e\u4e0b\u65b9\u7684\u5c42\u53d1\u751f\u8026\u5408\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u800c\u67b6\u6784\u6839\u636e\u8026\u5408\u7684\u7d27\u5bc6\u7a0b\u5ea6\u53c8\u53ef\u4ee5\u5206\u4e3a\u4e24\u79cd\uff1a\u4e25\u683c\u5206\u5c42\u67b6\u6784\u548c\u677e\u6563\u5206\u5c42\u67b6\u6784\u3002\u4f18\u5316\u540e\u7684 DDD \u5206\u5c42\u67b6\u6784\u6a21\u578b\u5c31\u5c5e\u4e8e\u4e25\u683c\u5206\u5c42\u67b6\u6784\uff0c\u4efb\u4f55\u5c42\u53ea\u80fd\u5bf9\u4f4d\u4e8e\u5176\u4e0b\u65b9\u7684\u5c42\u4ea7\u751f\u4f9d\u8d56\u3002\u3002\u800c\u4f20\u7edf\u7684 DDD \u5206\u5c42\u67b6\u6784\u5219\u5c5e\u4e8e\u677e\u6563\u5206\u5c42\u67b6\u6784\uff0c\u5b83\u5141\u8bb8\u67d0\u5c42\u4e0e\u5176\u4efb\u610f\u4e0b\u65b9\u7684\u5c42\u53d1\u751f\u4f9d\u8d56\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e25\u683c\u5206\u5c42\u67b6\u6784\u4e2d\uff0c\u9886\u57df\u670d\u52a1\u53ea\u80fd\u88ab\u5e94\u7528\u670d\u52a1\u8c03\u7528\uff0c\u800c\u5e94\u7528\u670d\u52a1\u53ea\u80fd\u88ab\u7528\u6237\u63a5\u53e3\u5c42\u8c03\u7528\uff0c\u670d\u52a1\u662f\u9010\u5c42\u5bf9\u5916\u5c01\u88c5\u6216\u7ec4\u5408\u7684\uff0c\u4f9d\u8d56\u5173\u7cfb\u6e05\u6670\u3002\u800c\u5728\u677e\u6563\u5206\u5c42\u67b6\u6784\u4e2d\uff0c\u9886\u57df\u670d\u52a1\u53ef\u4ee5\u540c\u65f6\u88ab\u5e94\u7528\u5c42\u6216\u7528\u6237\u63a5\u53e3\u5c42\u8c03\u7528\uff0c\u670d\u52a1\u7684\u4f9d\u8d56\u5173\u7cfb\u6bd4\u8f83\u590d\u6742\u4e14\u96be\u7ba1\u7406\uff0c\u751a\u81f3\u5bb9\u6613\u4f7f\u6838\u5fc3\u4e1a\u52a1\u903b\u8f91\u5916\u6cc4\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"ddd-\u5206\u5c42\u67b6\u6784\u5982\u4f55\u63a8\u52a8\u67b6\u6784\u6f14\u8fdb",children:"DDD \u5206\u5c42\u67b6\u6784\u5982\u4f55\u63a8\u52a8\u67b6\u6784\u6f14\u8fdb\uff1f"}),"\n",(0,i.jsx)(n.p,{children:"\u9886\u57df\u6a21\u578b\u4e0d\u662f\u4e00\u6210\u4e0d\u53d8\u7684\uff0c\u56e0\u4e3a\u4e1a\u52a1\u7684\u53d8\u5316\u4f1a\u5f71\u54cd\u9886\u57df\u6a21\u578b\uff0c\u800c\u9886\u57df\u6a21\u578b\u7684\u53d8\u5316\u5219\u4f1a\u5f71\u54cd\u5fae\u670d\u52a1\u7684\u529f\u80fd\u548c\u8fb9\u754c\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"1-\u5fae\u670d\u52a1\u67b6\u6784\u7684\u6f14\u8fdb",children:"1. \u5fae\u670d\u52a1\u67b6\u6784\u7684\u6f14\u8fdb"}),"\n",(0,i.jsx)(n.p,{children:"\u9886\u57df\u6a21\u578b\u4e2d\u5bf9\u8c61\u7684\u5c42\u6b21\u662f\u4ece\u5185\u5230\u5916\u4f9d\u6b21\u662f\uff1a\u503c\u5bf9\u8c61\u3001\u5b9e\u4f53\u3001\u805a\u5408\u548c\u9650\u754c\u4e0a\u4e0b\u6587\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5b9e\u4f53\u548c\u503c\u5bf9\u8c61\u7684\u7b80\u5355\u53d8\u66f4\uff0c\u4e00\u822c\u4e0d\u4f1a\u8ba9\u9886\u57df\u6a21\u578b\u548c\u5fae\u670d\u52a1\u53d1\u751f\u5927\u7684\u53d8\u5316\u3002\u4f46\u805a\u5408\u7684\u91cd\u7ec4\u6216\u62c6\u5206\u5374\u53ef\u4ee5\u3002\u8fd9\u662f\u56e0\u4e3a\u805a\u5408\u5185\u4e1a\u52a1\u529f\u80fd\u5185\u805a\uff0c\u80fd\u72ec\u7acb\u5b8c\u6210\u7279\u5b9a\u7684\u4e1a\u52a1\u903b\u8f91\u3002\u90a3\u805a\u5408\u7684\u91cd\u7ec4\u548c\u62c6\u5206\uff0c\u52bf\u5fc5\u5c31\u4f1a\u5f15\u8d77\u4e1a\u52a1\u6a21\u5757\u548c\u7cfb\u7edf\u529f\u80fd\u7684\u53d8\u5316\u4e86\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u91cc\u6211\u4eec\u53ef\u4ee5\u4ee5\u805a\u5408\u7684\u57fa\u7840\u5355\u4f4d\uff0c\u5b8c\u6210\u9886\u57df\u6a21\u578b\u548c\u5fae\u670d\u52a1\u67b6\u6784\u7684\u6f14\u8fdb\u3002\u805a\u5408\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\uff0c\u5728\u4e0d\u540c\u7684\u9886\u57df\u6a21\u578b\u4e4b\u95f4\u91cd\u7ec4\u6216\u8005\u62c6\u5206\uff0c\u6216\u8005\u76f4\u63a5\u5c06\u4e00\u4e2a\u805a\u5408\u72ec\u7acb\u4e3a\u5fae\u670d\u52a1\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://wkq-img.oss-cn-chengdu.aliyuncs.com/img/7f1e3891c9c11abce96020e0bf20d67c.jpg",alt:"img"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5f53\u5fae\u670d\u52a1 1 \u4e2d\u805a\u5408 a \u7684\u529f\u80fd\u7ecf\u5e38\u88ab\u9ad8\u9891\u8bbf\u95ee\uff0c\u4ee5\u81f4\u62d6\u7d2f\u6574\u4e2a\u5fae\u670d\u52a1 1 \u7684\u6027\u80fd\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u805a\u5408 a \u7684\u4ee3\u7801\uff0c\u4ece\u5fae\u670d\u52a1 1 \u4e2d\u5265\u79bb\u51fa\u6765\uff0c\u72ec\u7acb\u4e3a\u5fae\u670d\u52a1 2\u3002\u8fd9\u6837\u5fae\u670d\u52a1 2 \u5c31\u53ef\u4ee5\u8f7b\u677e\u5e94\u5bf9\u9ad8\u6027\u80fd\u573a\u666f\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5f53\u4e1a\u52a1\u53d1\u5c55\u5230\u4e00\u5b9a\u7a0b\u5ea6\u540e\uff0c\u5f53\u5fae\u670d\u52a1 3 \u7684\u9886\u57df\u6a21\u578b\u6709\u4e86\u53d8\u5316\uff0c\u805a\u5408 d \u4f1a\u66f4\u9002\u5408\u653e\u5230 \u5fae\u670d\u52a1 1 \u7684\u9886\u57df\u6a21\u578b\u4e2d\u3002\u8fd9\u65f6\u5c31\u53ef\u4ee5\u5c06\u805a\u5408 d \u7684\u4ee3\u7801\u6574\u4f53\u642c\u8fc1\u5230\u5fae\u670d\u52a1 1 \u4e2d\u3002\u5982\u679c\u4f60\u5728\u8bbe\u8ba1\u65f6\u5df2\u7ecf\u5b9a\u4e49\u597d\u4e86\u805a\u5408\u4e4b\u95f4\u7684\u4ee3\u7801\u8fb9\u754c\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4e0d\u4f1a\u592a\u590d\u6742\uff0c\u4e5f\u4e0d\u4f1a\u82b1\u592a\u591a\u65f6\u95f4\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5728\u7ecf\u5386\u6a21\u578b\u548c\u67b6\u6784\u6f14\u8fdb \u540e\uff0c\u5fae\u670d\u52a1 1 \u5df2\u7ecf\u4ece\u6700\u521d\u5305\u542b\u805a\u5408 a\u3001b\u3001c\uff0c\u6f14\u8fdb\u4e3a\u5305\u542b\u805a\u5408 b\u3001c\u3001d \u7684\u65b0\u9886\u57df\u6a21\u578b\u548c\u5fae\u670d\u52a1\u4e86\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-\u5fae\u670d\u52a1\u5185\u670d\u52a1\u7684\u6f14\u8fdb",children:"2. \u5fae\u670d\u52a1\u5185\u670d\u52a1\u7684\u6f14\u8fdb"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5fae\u670d\u52a1\u5185\u90e8\uff0c\u5b9e\u4f53\u7684\u65b9\u6cd5\u88ab\u9886\u57df\u670d\u52a1\u7ec4\u5408\u548c\u5c01\u88c5\uff0c\u9886\u57df\u670d\u52a1\u53c8\u88ab\u5e94\u7528\u670d\u52a1\u7ec4\u5408\u548c\u5c01\u88c5\u3002\u5728\u670d\u52a1\u9010\u5c42\u7ec4\u5408\u548c\u5c01\u88c5\u7684\u8fc7\u7a0b\u4e2d\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://wkq-img.oss-cn-chengdu.aliyuncs.com/img/9a602b741c222b19c7cc4780da79cf76.jpg",alt:"img"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u670d\u52a1\u8bbe\u8ba1\u65f6\uff0c\u5e76\u4e0d\u80fd\u5b8c\u6574\u9884\u6d4b\u6709\u54ea\u4e9b\u4e0b\u5c42\u670d\u52a1\u4f1a\u88ab\u591a\u5c11\u4e2a\u4e0a\u5c42\u670d\u52a1\u7ec4\u88c5\uff0c\u56e0\u6b64\u9886\u57df\u5c42\u901a\u5e38\u53ea\u63d0\u4f9b\u4e00\u4e9b\u539f\u5b50\u670d\u52a1\uff0c\u6bd4\u5982\u9886\u57df\u670d\u52a1 a\u3001b\u3001c\u3002 \u4f46\u968f\u7740\u7cfb\u7edf\u529f\u80fd\u589e\u5f3a\u548c\u5916\u90e8\u63a5\u5165\u8d8a\u6765\u8d8a\u591a\uff0c\u5e94\u7528\u670d\u52a1\u4f1a\u4e0d\u65ad\u4e30\u5bcc\u3002\u5982\u679c\u9886\u57df\u670d\u52a1 b \u548c c \u540c\u65f6\u88ab\u591a\u4e2a\u5e94\u7528\u670d\u52a1\u8c03\u7528\u4e86\uff0c\u6267\u884c\u987a\u5e8f\u4e5f\u57fa\u672c\u4e00\u81f4\u3002\u8fd9\u65f6\u5c31\u53ef\u4ee5\u8003\u8651\u5c06 b \u548c c \u5408\u5e76\uff0c\u518d\u5c06\u5e94\u7528\u670d\u52a1\u4e2d b \u3001c \u7684\u529f\u80fd\u4e0b\u6c89\u5230\u9886\u57df\u5c42\uff0c\u6f14\u8fdb\u4e3a\u65b0\u7684\u9886\u57df\u670d\u52a1 \uff08b+c\uff09 \u3002\u8fd9\u6837\u65e2\u51cf\u5c11\u4e86\u670d\u52a1\u7684\u6570\u91cf\uff0c\u4e5f\u51cf\u8f7b\u4e86\u4e0a\u5c42\u670d\u52a1\u7ec4\u5408\u548c\u7f16\u6392\u7684\u590d\u6742\u5ea6\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u5c31\u662f\u670d\u52a1\u6f14\u8fdb\u7684\u8fc7\u7a0b\uff0c\u5b83\u662f\u968f\u7740\u4f60\u7684\u7cfb\u7edf\u53d1\u5c55\u7684\uff0c\u6700\u540e\u4f60\u4f1a\u53d1\u73b0\u4f60\u7684\u9886\u57df\u6a21\u578b\u8d8a\u6765\u8d8a\u7cbe\u70bc\uff0c\u8d8a\u6765\u8d8a\u80fd\u9002\u5e94\u9700\u6c42\u7684\u5feb\u901f\u53d8\u5316\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u4e09\u5c42\u67b6\u6784\u5982\u4f55\u6f14\u8fdb\u5230-ddd-\u5206\u5c42\u67b6\u6784",children:"\u4e09\u5c42\u67b6\u6784\u5982\u4f55\u6f14\u8fdb\u5230 DDD \u5206\u5c42\u67b6\u6784\uff1f"}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\uff0c\u7531\u4e8e\u5c42\u95f4\u677e\u8026\u5408\uff0c\u6211\u4eec\u53ef\u4ee5\u4e13\u6ce8\u4e8e\u672c\u5c42\u7684\u8bbe\u8ba1\uff0c\u800c\u4e0d\u5fc5\u5173\u5fc3\u5176\u5b83\u5c42\uff0c\u4e5f\u4e0d\u5fc5\u62c5\u5fc3\u81ea\u5df1\u7684\u8bbe\u8ba1\u4f1a\u5f71\u54cd\u5176\u5b83\u5c42\u3002\u53ef\u4ee5\u8bf4\uff0cDDD \u6210\u529f\u5730\u964d\u4f4e\u4e86\u5c42\u4e0e\u5c42\u4e4b\u95f4\u7684\u4f9d\u8d56\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u6b21\uff0c\u5206\u5c42\u67b6\u6784\u4f7f\u5f97\u7a0b\u5e8f\u7ed3\u6784\u53d8\u5f97\u6e05\u6670\uff0c\u5347\u7ea7\u548c\u7ef4\u62a4\u66f4\u52a0\u5bb9\u6613\u3002\u6211\u4eec\u5728\u4fee\u6539\u67d0\u5c42\u4ee3\u7801\u65f6\uff0c\u53ea\u8981\u672c\u5c42\u7684\u63a5\u53e3\u53c2\u6570\u4e0d\u53d8\uff0c\u5176\u5b83\u5c42\u53ef\u4ee5\u4e0d\u5fc5\u4fee\u6539\u3002\u5373\u4f7f\u672c\u5c42\u7684\u63a5\u53e3\u53d1\u751f\u53d8\u5316\uff0c\u4e5f\u53ea\u5f71\u54cd\u76f8\u90bb\u7684\u4e0a\u5c42\uff0c\u4fee\u6539\u5de5\u4f5c\u91cf\u5c0f\u4e14\u9519\u8bef\u53ef\u4ee5\u63a7\u5236\uff0c\u4e0d\u4f1a\u5e26\u6765\u610f\u5916\u7684\u98ce\u9669\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4f20\u7edf\u4f01\u4e1a\u5e94\u7528\u5927\u591a\u662f\u5355\u4f53\u5e94\u7528\uff0c\u800c\u5355\u4f53\u67b6\u6784\u5219\u5927\u591a\u662f\u4e09\u5c42\u67b6\u6784\u3002\u4e09\u5c42\u67b6\u6784\u89e3\u51b3\u4e86\u7a0b\u5e8f\u5185\u4ee3\u7801\u95f4\u8c03\u7528\u590d\u6742\u3001\u4ee3\u7801\u804c\u8d23\u4e0d\u6e05\u7684\u95ee\u9898\uff0c\u4f46\u8fd9\u79cd\u5206\u5c42\u662f\u903b\u8f91\u6982\u5ff5\uff0c\u5728\u7269\u7406\u4e0a\u5b83\u662f\u4e2d\u5fc3\u5316\u7684\u96c6\u4e2d\u5f0f\u67b6\u6784\uff0c\u5e76\u4e0d\u9002\u5408\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u67b6\u6784\u3002"}),"\n",(0,i.jsx)(n.p,{children:"DDD \u5206\u5c42\u67b6\u6784\u4e2d\u7684\u8981\u7d20\u5176\u5b9e\u548c\u4e09\u5c42\u67b6\u6784\u7c7b\u4f3c\uff0c\u53ea\u662f\u5728 DDD \u5206\u5c42\u67b6\u6784\u4e2d\uff0c\u8fd9\u4e9b\u8981\u7d20\u88ab\u91cd\u65b0\u5f52\u7c7b\uff0c\u91cd\u65b0\u5212\u5206\u4e86\u5c42\uff0c\u786e\u5b9a\u4e86\u5c42\u4e0e\u5c42\u4e4b\u95f4\u7684\u4ea4\u4e92\u89c4\u5219\u548c\u6307\u8d23\u8fb9\u754c\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://wkq-img.oss-cn-chengdu.aliyuncs.com/img/1680723ca91aa57d719d5cdbc1d910a1.jpg",alt:"img"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e09\u5c42\u67b6\u6784\u5411 DDD \u5206\u5c42\u67b6\u6784\u6f14\u8fdb\uff0c\u4e3b\u8981\u53d1\u751f\u5728\u4e1a\u52a1\u903b\u8f91\u5c42\u548c\u6570\u636e\u8bbf\u95ee\u5c42\u3002"}),"\n",(0,i.jsx)(n.p,{children:"DDD \u5206\u5c42\u67b6\u6784\u5728\u7528\u6237\u63a5\u53e3\u5c42\u5f15\u5165\u4e86 DTO\uff0c\u7ed9\u524d\u7aef\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u53ef\u4f7f\u7528\u7684\u6570\u636e\u548c\u66f4\u9ad8\u7684\u5c55\u793a\u7075\u6d3b\u6027\u3002"}),"\n",(0,i.jsx)(n.p,{children:"DDD \u5206\u5c42\u67b6\u6784\u5bf9\u4e09\u5c42\u67b6\u6784\u7684\u4e1a\u52a1\u903b\u8f91\u5c42\u8fdb\u884c\u4e86\u66f4\u6e05\u6670\u7684\u5212\u5206\uff0c\u6539\u5584\u4e86\u4e09\u5c42\u67b6\u6784\u6838\u5fc3\u4e1a\u52a1\u903b\u8f91\u6df7\u4e71\uff0c\u4ee3\u7801\u6539\u52a8\u76f8\u4e92\u5f71\u54cd\u5927\u7684\u60c5\u51b5\u3002DDD \u5206\u5c42\u67b6\u6784\u5c06\u4e1a\u52a1\u903b\u8f91\u5c42\u7684\u670d\u52a1\u62c6\u5206\u5230\u4e86\u5e94\u7528\u5c42\u548c\u9886\u57df\u5c42\u3002\u5e94\u7528\u5c42\u5feb\u901f\u54cd\u5e94\u524d\u7aef\u7684\u53d8\u5316\uff0c\u9886\u57df\u5c42\u5b9e\u73b0\u9886\u57df\u6a21\u578b\u7684\u80fd\u529b\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u53e6\u5916\u4e00\u4e2a\u91cd\u8981\u7684\u53d8\u5316\u53d1\u751f\u5728\u6570\u636e\u8bbf\u95ee\u5c42\u548c\u57fa\u7840\u5c42\u4e4b\u95f4\u3002\u4e09\u5c42\u67b6\u6784\u6570\u636e\u8bbf\u95ee\u91c7\u7528 DAO \u65b9\u5f0f\uff1b"}),"\n",(0,i.jsx)(n.p,{children:"DDD \u5206\u5c42\u67b6\u6784\u7684\u6570\u636e\u5e93\u7b49\u57fa\u7840\u8d44\u6e90\u8bbf\u95ee\uff0c\u91c7\u7528\u4e86\u4ed3\u50a8\uff08Repository\uff09 \u8bbe\u8ba1\u6a21\u5f0f\uff0c\u901a\u8fc7\u4f9d\u8d56\u5bfc\u81f4\u5b9e\u73b0\u5404\u5c42\u5bf9\u57fa\u7840\u8d44\u6e90\u7684\u89e3\u8026\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4ed3\u50a8\u53c8\u5206\u4e3a\u4e24\u90e8\u5206\uff1a\u4ed3\u50a8\u63a5\u53e3\u548c\u4ed3\u50a8\u5b9e\u73b0\u3002\u4ed3\u50a8\u63a5\u53e3\u653e\u5728\u9886\u57df\u5c42\u4e2d\uff0c\u4ed3\u50a8\u5b9e\u73b0\u653e\u5728\u57fa\u7840\u5c42\u3002\u539f\u6765\u4e09\u5c42\u67b6\u6784\u901a\u7528\u7684\u7b2c\u4e09\u65b9\u5de5\u5177\u5305\uff0c\u9a71\u52a8\u3001Common\u3001Utility\u3001Config \u7b49\u901a\u7528\u7684\u516c\u5171\u7684\u8d44\u6e90\u7c7b\u7edf\u4e00\u653e\u5230\u4e86\u57fa\u7840\u5c42\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4f20\u7edf \u4e09\u5c42\u67b6\u6784\u5411 DDD \u5206\u5c42\u67b6\u6784\u6f14\u8fdb\uff0c\u4f53\u73b0\u7684\u6b63\u662f\u9886\u57df\u9a71\u52a8\u8bbe\u8ba1\u601d\u60f3\u7684\u6f14\u8fdb\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1151:(e,n,d)=>{d.d(n,{Z:()=>l,a:()=>s});var i=d(7294);const c={},r=i.createContext(c);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);