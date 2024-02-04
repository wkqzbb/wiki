"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[128],{9942:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>t,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>r,toc:()=>h});var s=e(5893),l=e(1151);const c={title:"\u591a\u4e2a\u4e0a\u4e0b\u6587\u4e4b\u95f4\u5982\u4f55\u534f\u4f5c"},d=void 0,r={id:"object-oriented/ddd/strategic-design/7",title:"\u591a\u4e2a\u4e0a\u4e0b\u6587\u4e4b\u95f4\u5982\u4f55\u534f\u4f5c",description:"\u4e0a\u4e0b\u6587\u6620\u5c04(Context Mapping)",source:"@site/docs/object-oriented/ddd/strategic-design/7.mdx",sourceDirName:"object-oriented/ddd/strategic-design",slug:"/object-oriented/ddd/strategic-design/7",permalink:"/wiki/en/docs/object-oriented/ddd/strategic-design/7",draft:!1,unlisted:!1,editUrl:"https://github.com/wkqzbb/wiki/tree/develop?search=1/docs/object-oriented/ddd/strategic-design/7.mdx",tags:[],version:"current",frontMatter:{title:"\u591a\u4e2a\u4e0a\u4e0b\u6587\u4e4b\u95f4\u5982\u4f55\u534f\u4f5c"},sidebar:"objectOriented",previous:{title:"\u9650\u754c\u4e0a\u4e0b\u6587",permalink:"/wiki/en/docs/object-oriented/ddd/strategic-design/6"},next:{title:"\u5efa\u7acb\u5206\u5c42\u67b6\u6784",permalink:"/wiki/en/docs/object-oriented/ddd/strategic-design/8"}},t={},h=[{value:"\u4e0a\u4e0b\u6587\u6620\u5c04(Context Mapping)",id:"\u4e0a\u4e0b\u6587\u6620\u5c04context-mapping",level:2},{value:"\u4e0a\u4e0b\u6587\u6620\u5c04\u6a21\u5f0f",id:"\u4e0a\u4e0b\u6587\u6620\u5c04\u6a21\u5f0f",level:2},{value:"\u5f00\u653e\u4e3b\u673a\u670d\u52a1",id:"\u5f00\u653e\u4e3b\u673a\u670d\u52a1",level:3},{value:"\u987a\u4ece\u8005",id:"\u987a\u4ece\u8005",level:3},{value:"\u5927\u6ce5\u7403",id:"\u5927\u6ce5\u7403",level:3},{value:"\u9632\u8150\u5c42",id:"\u9632\u8150\u5c42",level:3},{value:"\u5171\u4eab\u5185\u6838",id:"\u5171\u4eab\u5185\u6838",level:3},{value:"\u5408\u4f19\u4eba",id:"\u5408\u4f19\u4eba",level:3},{value:"\u5ba2\u6237/\u4f9b\u5e94\u5546",id:"\u5ba2\u6237\u4f9b\u5e94\u5546",level:3},{value:"\u5206\u9053\u626c\u9573",id:"\u5206\u9053\u626c\u9573",level:3},{value:"\u516c\u5f00\u8bed\u8a00",id:"\u516c\u5f00\u8bed\u8a00",level:3},{value:"SmartRM\u4e0a\u4e0b\u6587\u6620\u5c04",id:"smartrm\u4e0a\u4e0b\u6587\u6620\u5c04",level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}];function j(n){const i={admonition:"admonition",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"\u4e0a\u4e0b\u6587\u6620\u5c04context-mapping",children:"\u4e0a\u4e0b\u6587\u6620\u5c04(Context Mapping)"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u4e0a\u4e0b\u6587\u6620\u5c04\u662f\u6307\u9650\u754c\u4e0a\u4e0b\u6587\u4e4b\u95f4\u7684\u6a21\u578b\u6620\u5c04\u5173\u7cfb"}),"\n",(0,s.jsx)(i.li,{children:"\u63cf\u8ff0\u56e2\u961f\u4e4b\u95f4\u7684\u534f\u4f5c\u5173\u7cfb\u4ee5\u53ca\u4e0a\u4e0b\u6587\u4e4b\u95f4\u7684\u96c6\u6210\u5173\u7cfb"}),"\n",(0,s.jsx)(i.li,{children:"\u51b3\u5b9a\u4e0a\u4e0b\u6587\u4e4b\u95f4\u5982\u4f55\u96c6\u6210\u4ee5\u53ca\u5982\u4f55\u8bbe\u7f6e\u9632\u8150\u5c42"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://wkq-img.oss-cn-chengdu.aliyuncs.com/img/image-20240118220530077.png",alt:"image-20240118220530077"})}),"\n",(0,s.jsx)(i.p,{children:"\u6240\u8c13\u7684\u4f9d\u8d56\u4e0d\u4ec5\u4ec5\u6307\u8c03\u7528\u5173\u7cfb\uff0c\u8c03\u7528\u5173\u7cfb\u53ea\u662f\u5176\u4e2d\u7684\u4e00\u4e2a\u65b9\u9762\uff0c\u66f4\u91cd\u8981\u7684\u662f\u6a21\u578b\u4e0e\u6a21\u578b\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\u3002"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://wkq-img.oss-cn-chengdu.aliyuncs.com/img/image-20240118221448306.png",alt:"image-20240118221448306"})}),"\n",(0,s.jsx)(i.p,{children:"\u4e0d\u540c\u9650\u754c\u4e0a\u4e0b\u6587\u5404\u81ea\u5305\u542b\u4e86\u4e00\u4e9b\u5173\u952e\u6982\u5ff5\uff0c\u5176\u4e2d\u6709\u4e00\u4e9b\u91cd\u53e0\u7684\u6982\u5ff5\uff0c\u6bd4\u5982\u4ea4\u6613\u4e0a\u4e0b\u6587\u548c\u652f\u4ed8\u4e0a\u4e0b\u6587\u90fd\u5305\u542b\u4e86\u652f\u4ed8\u4e8c\u7ef4\u7801\u8fd9\u4e2a\u6982\u5ff5\uff0c\u4ea4\u6613\u4e0a\u4e0b\u6587\u548c\u8bbe\u5907\u4e0a\u4e0b\u6587\u90fd\u5305\u542b\u4e86\u5546\u54c1\u6982\u5ff5\uff0c\u8fd9\u79cd\u73b0\u8c61\u662f\u6b63\u5e38\u7684\uff0c\u8fd9\u5c31\u662f\u9650\u754c\u4e0a\u4e0b\u6587\u7684\u610f\u4e49\u6240\u5728\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u4f46\u662f\u5728\u7cfb\u7edf\u5b9e\u73b0\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u5904\u7406\u4e00\u4e2a\u95ee\u9898\uff0c\u5f53\u96c6\u6210\u4e24\u4e2a\u6982\u5ff5\u91cd\u53e0\u7684\u9650\u754c\u4e0a\u4e0b\u6587\u7684\u65f6\u5019\uff0c\u600e\u6837\u5904\u7406\u8fd9\u79cd\u91cd\u53e0\uff0c\u662f\u5c06\u5176\u4e2d\u4e00\u4e2a\u8f6c\u6362\u6210\u53e6\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\uff0c\u8fd8\u662f\u4e00\u4e2a\u5411\u53e6\u4e00\u4e2a\u770b\u9f50\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u8fd9\u5c31\u662f\u6a21\u578b\u4e0e\u6a21\u578b\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\uff0c\u8fd9\u548c\u56e2\u961f\u4e4b\u95f4\u7684\u534f\u4f5c\u5173\u7cfb\uff0c\u4ee5\u53ca\u4e0a\u4e0b\u6587\u4e4b\u95f4\u7684\u96c6\u6210\u5173\u7cfb\u662f\u7b49\u4ef7\u7684\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u5f53\u4f60\u8981\u96c6\u6210\u53e6\u4e00\u4e2a\u4e0a\u4e0b\u6587\u7684\u65f6\u5019\uff0c\u5c31\u610f\u5473\u7740\u8981\u770b\u5230\u5b83\u66b4\u9732\u51fa\u6765\u7684\u4e00\u4e9b\u6982\u5ff5\uff0c\u6bd4\u5982\u8bf4\u8981\u96c6\u6210\u4e00\u4e2a\u5546\u54c1\u4e2d\u53f0\uff0c\u5c31\u8981\u4e86\u89e3\u5b83\u4f20\u9012\u8fc7\u6765\u7684\u4e00\u4e9b\u5546\u54c1\u5b57\u6bb5\u662f\u4ec0\u4e48\u610f\u601d\uff0c\u5982\u679c\u5185\u90e8\u4e5f\u6709\u5546\u54c1\u8fd9\u4e2a\u7c7b\uff0c\u5c31\u9700\u8981\u628a\u5b83\u63d0\u4f9b\u7684\u5546\u54c1\u5bf9\u8c61\u8f6c\u6362\u6210\u5185\u90e8\u53ef\u4ee5\u7528\u7684\u5546\u54c1\u5bf9\u8c61\uff0c\u8fd9\u5c31\u662f\u4e00\u79cd\u6bd4\u8f83\u5e38\u89c1\u7684\u6620\u5c04\u5173\u7cfb \uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u79f0\u5546\u54c1\u4e2d\u53f0\u4e0a\u4e0b\u6587\u662f\u4e0a\u6e38"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://wkq-img.oss-cn-chengdu.aliyuncs.com/img/image-20240118221521643.png",alt:"image-20240118221521643"})}),"\n",(0,s.jsx)(i.h2,{id:"\u4e0a\u4e0b\u6587\u6620\u5c04\u6a21\u5f0f",children:"\u4e0a\u4e0b\u6587\u6620\u5c04\u6a21\u5f0f"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://wkq-img.oss-cn-chengdu.aliyuncs.com/img/image-20240118230217003.png",alt:"image-20240118230217003"})}),"\n",(0,s.jsx)(i.h3,{id:"\u5f00\u653e\u4e3b\u673a\u670d\u52a1",children:"\u5f00\u653e\u4e3b\u673a\u670d\u52a1"}),"\n",(0,s.jsx)(i.p,{children:"\u73b0\u5728\u5f00\u53d1\u7cfb\u7edf\uff0c\u5f88\u591a\u65f6\u5019\u4f1a\u501f\u52a9\u4e00\u4e9b\u7b2c\u4e09\u65b9\u670d\u52a1\uff0c\u5305\u62ec\u4e91\u5382\u5546\u7684\u670d\u52a1\uff0c\u6216\u8005\u5185\u90e8\u4e2d\u53f0\uff0c\u6216\u8005\u67b6\u6784\u90e8\u95e8\u63d0\u4f9b\u7684\u6210\u719f\u7ec4\u4ef6\uff0c\u8fd9\u79cd\u670d\u52a1\u548c\u7ec4\u4ef6\u5f88\u591a\u65f6\u5019\u4ee5\u516c\u5171 API \u7684\u65b9\u5f0f\u66b4\u9732\u51fa\u6765\uff0c\u8fd9\u79cd\u4ee5\u516c\u5171API \u7684\u65b9\u5f0f\u63d0\u4f9b\u7684\u670d\u52a1\u5c31\u53eb\u505a\u5f00\u653e\u4e3b\u673a\u670d\u52a1\u3002"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.strong,{children:"\u670d\u52a1\u63d0\u4f9b\u65b9\u6587\u6240\u6709\u6d88\u8d39\u65b9\u63d0\u4f9b\u4e00\u5957\u516c\u5171\u7684 API"})}),"\n",(0,s.jsx)(i.li,{children:"\u9488\u5bf9\u901a\u7528\u7684\u529f\u80fd\u548c\u6a21\u578b"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://wkq-img.oss-cn-chengdu.aliyuncs.com/img/image-20240118222405325.png",alt:"image-20240118222405325"})}),"\n",(0,s.jsx)(i.p,{children:"\u670d\u52a1\u63d0\u4f9b\u65b9\u4e3a\u6240\u6709\u7684\u670d\u52a1\u6d88\u8d39\u65b9\u90fd\u63d0\u4f9b\u4e00\u5957\u7edf\u4e00\u7684 API\uff0c\u4e0d\u641e\u7279\u6b8a\u5316\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u6bd4\u5982\u652f\u4ed8\u4e0a\u4e0b\u6587\u5c31\u96c6\u6210\u4e86 \u5fae\u4fe1\u652f\u4ed8\u4e0a\u4e0b\u6587\uff0c\u5fae\u4fe1\u652f\u4ed8\u63d0\u4f9b\u670d\u52a1\u7684\u65b9\u5f0f\u5c31\u662f\u5f00\u653e\u4e3b\u673a\u670d\u52a1\u3002"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://wkq-img.oss-cn-chengdu.aliyuncs.com/img/image-20240118222247131.png",alt:"image-20240118222247131"})}),"\n",(0,s.jsx)(i.p,{children:"\u53ef\u4ee5\u7528\u7b80\u5199\u7684 U \u548c D \u6765\u8868\u793a\u8fd9\u79cd\u4e0a\u4e0b\u6e38\u7684\u5173\u7cfb\u3002"}),"\n",(0,s.jsxs)(i.p,{children:["\u5728\u5f00\u653e\u4e3b\u673a\u670d\u52a1\u6a21\u5f0f\u4e2d\uff0c\u8fd8\u9690\u85cf\u4e86\u4e00\u79cd\u6a21\u5f0f\uff0c\u56e0\u4e3a\u5f00\u653e\u4e3b\u673a\u670d\u52a1\u7684 API \u5f88\u96be\u4e3a\u4e0b\u6e38\u7684\u67d0\u4e2a\u4e0a\u4e0b\u6587\u8fdb\u884c\u5b9a\u5236\uff0c\u6240\u4ee5\u4e0b\u6e38\u7684\u4e0a\u4e0b\u6587\u5c31\u53ea\u80fd\u9075\u4ece\u5b83\u63d0\u4f9b\u7684\u6a21\u5f0f\uff0c\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u5c31\u79f0\u547c\u4e0b\u6e38\u4e3a ",(0,s.jsx)(i.strong,{children:"\u987a\u5b58\u8005"})]}),"\n",(0,s.jsx)(i.h3,{id:"\u987a\u4ece\u8005",children:"\u987a\u4ece\u8005"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u6ca1\u6709\u6a21\u578b\u5230\u6a21\u578b\u7684\u8f6c\u6362"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u4e00\u4e2a\u4e0a\u4e0b\u6587\u76f4\u63a5\u5f15\u7528\u53e6\u4e00\u4e2a\u4e0a\u4e0b\u6587\u7684\u90e8\u5206\u6a21\u578b"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u987a\u4ece\u8005\u6a21\u5f0f\u9690\u85cf\u7740\u4e00\u4e2a\u98ce\u9669\uff0c\u5f53\u4f60\u987a\u4ece\u4e00\u4e2a\u4e0a\u4e0b\u6587\u7684\u65f6\u5019\uff0c\u5176\u5b9e\u5c31\u662f\u5141\u8bb8\u4e86\u5b83\u5bf9\u4f60\u7684\u4fb5\u5165\uff0c\u5982\u679c\u6211\u4eec\u9664\u4e86\u5bf9\u63a5\u5fae\u4fe1\u652f\u4ed8\uff0c\u8fd8\u9700\u8981\u5bf9\u63a5\u652f\u4ed8\u5b9d\u7b49\u652f\u4ed8\u5e73\u53f0\uff0c\u5c31\u610f\u5473\u7740\u9700\u8981\u5f15\u5165\u591a\u4e2a\u4e0a\u4e0b\u6587\uff0c\u8fd9\u4e2a\u65f6\u5019\u5982\u679c\u4e0d\u91c7\u7528\u7279\u6b8a\u65b9\u6cd5\uff0c\u4e0a\u4e0b\u6587\u5c31\u4f1a\u53d8\u5f97\u6bd4\u8f83\u6df7\u4e71\u4e14\u96be\u4ee5\u7ef4\u62a4\u3002"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://wkq-img.oss-cn-chengdu.aliyuncs.com/img/image-20240118222943809.png",alt:"image-20240118222943809"})}),"\n",(0,s.jsx)(i.h3,{id:"\u5927\u6ce5\u7403",children:"\u5927\u6ce5\u7403"}),"\n",(0,s.jsx)(i.p,{children:"\u5728 DDD \u4e2d\uff0c\u8fd9\u79cd\u6bd4\u8f83\u6df7\u4e71\u7684\u6a21\u578b\u5c31\u53eb\u505a\u5927\u6ce5\u7403\u3002"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u7531\u6df7\u6742\u7684\u6a21\u578b\u6784\u6210\u7684\u7cdf\u7cd5\u7cfb\u7edf\uff0c\u6a21\u578b\u4e0d\u7a33\u5b9a\u4e14\u96be\u4ee5\u7ef4\u62a4\u3002\u8fd9\u662f\u4e00\u79cd\u53cd\u6a21\u5f0f\uff0c\u6211\u4eec\u8981\u907f\u514d\u53d1\u751f\u3002"}),"\n",(0,s.jsx)(i.li,{children:"\u4e0e\u5927\u6ce5\u7403\u5408\u4f5c\u7684\u4e0a\u4e0b\u6587\u8981\u786e\u4fdd\u81ea\u8eab\u4e0d\u88ab\u6c61\u67d3\uff0c\u8bbe\u7f6e\u9632\u8150\u5c42\u3002\u6bd4\u5982\u96c6\u6210\u65e7\u7cfb\u7edf\uff0c\u6bd4\u5982\u5bf9\u65e7\u7cfb\u7edf\u8fdb\u884c\u91cd\u6784\u7684\u65f6\u5019\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["\u4e3a\u4e86\u907f\u514d\u5927\u6ce5\u7403\u51fa\u73b0\uff0c\u5c31\u9700\u8981\u5229\u7528\u5230\u53e6\u5916\u4e00\u79cd\u5f88\u5e38\u89c1\u7684\u6a21\u5f0f ",(0,s.jsx)(i.strong,{children:"\u9632\u8150\u5c42"})]}),"\n",(0,s.jsx)(i.h3,{id:"\u9632\u8150\u5c42",children:"\u9632\u8150\u5c42"}),"\n",(0,s.jsx)(i.p,{children:"\u6240\u8c13\u9632\u8150\u5c42\uff0c\u4f5c\u7528\u5c31\u662f"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.strong,{children:"\u628a\u4e0a\u6e38\u4e0a\u4e0b\u6587\u7684\u6a21\u578b\u8f6c\u6362\u6210\u81ea\u5df1\u4e0a\u4e0b\u6587\u7684\u6a21\u578b"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.strong,{children:"\u662f\u7531\u4e0b\u6e38\u4e0a\u4e0b\u6587\u5b9e\u73b0\u7684\u8bbf\u95ee\u5916\u90e8\u6a21\u578b\u7684\u4e00\u4e2a\u4ee3\u7406\u5c42"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://wkq-img.oss-cn-chengdu.aliyuncs.com/img/image-20240118223343036.png",alt:"image-20240118223343036"})}),"\n",(0,s.jsx)(i.h3,{id:"\u5171\u4eab\u5185\u6838",children:"\u5171\u4eab\u5185\u6838"}),"\n",(0,s.jsx)(i.p,{children:"\u5728\u4f20\u7edf\u7684 Java \u5e94\u7528\u67b6\u6784\u91cc\uff0c\u6709\u4e00\u79cd\u6bd4\u8f83\u5e38\u89c1\u7684\u505a\u6cd5\uff0c\u5c31\u662f\u628a\u4e00\u4e9b\u6bd4\u8f83\u91cd\u8981\u7684\uff0c\u6bd4\u8f83\u5185\u6838\u7684\u7c7b\u653e\u8fdb\u4e00\u4e2a \u6bd4\u5982\u53eb core \u7684 Jar \u5305\u91cc\uff0c\u6bd4\u5982\u6570\u636e\u8bbf\u95ee\u5c42\uff0c\u6240\u6709\u7684\u670d\u52a1\u90fd\u4f1a\u5f15\u7528\u8fd9\u4e2a\u5305\uff0c\u6216\u8005\u53bb\u4fee\u6539\u8fd9\u4e2a\u5305\uff0c\u8fd9\u79cd\u6a21\u5f0f\u5728 DDD \u4e2d\u53eb\u505a\u5171\u4eab\u5185\u6838\u6a21\u5f0f\u3002"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u4e24\u4e2a\u4e0a\u4e0b\u6587\u5171\u4eab\u90e8\u5206\u6a21\u578b"}),"\n",(0,s.jsx)(i.li,{children:"\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u4ee3\u7801\u3001jar \u5305\u3001.so\u3001\u6570\u636e\u5e93\u8868\u7b49\u7b49"}),"\n",(0,s.jsx)(i.li,{children:"\u614e\u7528\uff0c\u4ec5\u5f53\u56e2\u961f\u7d27\u5bc6\u5408\u4f5c\u4e14\u5171\u4eab\u90e8\u5206\u7a33\u5b9a\uff1b\u4e00\u65e6\u6d89\u53ca\u5171\u4eab\u90e8\u5206\u7684\u53d8\u66f4\uff0c\u5c31\u4f1a\u6709\u6bd4\u8f83\u5927\u7684\u98ce\u9669\u3002"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\u5408\u4f19\u4eba",children:"\u5408\u4f19\u4eba"}),"\n",(0,s.jsx)(i.p,{children:"\u8fd9\u79cd\u5408\u4f5c\u5f88\u7d27\u5bc6\u7684\u56e2\u961f\uff0c\u4ed6\u4eec\u4e4b\u95f4\u7684\u5173\u7cfb\u79f0\u4e3a\u5408\u4f19\u4eba\uff0c\u4e5f\u662f\u4e00\u79cd\u4e0a\u4e0b\u6587\u6620\u5c04\u7684\u6a21\u5f0f\u3002"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u6280\u672f\u65e0\u5173\uff0c\u662f\u4e00\u79cd\u56e2\u961f\u534f\u4f5c\u5173\u7cfb"}),"\n",(0,s.jsx)(i.li,{children:"\u4e24\u4e2a\u56e2\u961f\u4e4b\u95f4\u53ef\u4ee5\u968f\u65f6\u4e92\u901a\u6709\u65e0\uff0c\u534f\u540c\u53d8\u66f4"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\u5ba2\u6237\u4f9b\u5e94\u5546",children:"\u5ba2\u6237/\u4f9b\u5e94\u5546"}),"\n",(0,s.jsx)(i.p,{children:"\u8fd9\u662f\u4e00\u79cd\u4e0b\u6e38\u6bd4\u8f83\u8212\u670d\u7684\u6a21\u5f0f\u3002"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u4e0b\u6e38\u4e0a\u4e0b\u6587\u53ef\u4ee5\u5411\u4e0a\u6e38\u4e0a\u4e0b\u6587\u63d0\u9700\u6c42"}),"\n",(0,s.jsx)(i.li,{children:"\u4e00\u822c\u7528\u4e8e\u6838\u5fc3\u57df\u4e0e\u975e\u6838\u5fc3\u4e4b\u95f4\u7684\u534f\u4f5c"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://wkq-img.oss-cn-chengdu.aliyuncs.com/img/image-20240118224428316.png",alt:"image-20240118224428316"})}),"\n",(0,s.jsx)(i.p,{children:"\u6bd4\u5982 \u4ea4\u6613\u4e0a\u4e0b\u6587\u548c\u8fd0\u8425\u4e0a\u4e0b\u6587\u90fd\u662f\u6838\u5fc3\u57df\uff0c\u8bbe\u5907\u4e0a\u4e0b\u6587\u662f\u975e\u6838\u5fc3\u57df\uff0c\u8bbe\u5907\u4e0a\u4e0b\u6587\u53ef\u80fd\u4f1a\u4ea4\u7ed9\u5916\u5305\u56e2\u961f\u53bb\u5b9e\u73b0\uff0c\u4ea4\u6613\u4e0a\u4e0b\u6587\u548c\u8fd0\u8425\u4e0a\u4e0b\u6587\u90fd\u4f9d\u8d56\u5b83\uff0c\u5b83\u4eec\u90fd\u4f1a\u5411\u8bbe\u5907\u4e0a\u4e0b\u6587\u63d0\u9700\u6c42\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d\uff0c\u5ba2\u6237/\u4f9b\u5e94\u5546\u6a21\u5f0f\u662f\u4e00\u79cd\u5f88\u5e38\u89c1\u7684\u6a21\u5f0f\uff0c\u5b83\u548c \u987a\u4ece\u8005\u6a21\u5f0f\u662f\u4e00\u79cd\u53cd\u4e49\u8bcd\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u5728\u987a\u4ece\u8005\u6a21\u5f0f\u4e2d\uff0c\u4e0b\u6e38\u4e0a\u4e0b\u6587\u662f\u5f31\u52bf\u7684\u4e00\u65b9\uff0c\u53ea\u80fd\u987a\u4ece\u4e0a\u6e38\uff0c\u5728\u5ba2\u6237/\u4f9b\u5e94\u5546\u6a21\u5f0f\u4e2d\uff0c\u4e0b\u6e38\u662f\u5f3a\u52bf\u7684\u4e00\u65b9\u3002"}),"\n",(0,s.jsxs)(i.admonition,{type:"tip",children:[(0,s.jsx)(i.p,{children:"\u4e2d\u53f0\u662f\u76f8\u5bf9\u4f4e\u59ff\u6001\u7684\u4e00\u65b9\uff0c\u56e0\u4e3a\u4e2d\u53f0\u7684\u4ef7\u503c\u5728\u4e8e\u6574\u5408\u5404\u4e2a\u4e1a\u52a1\u76f8\u5bf9\u6210\u719f\u548c\u901a\u7528\u7684\u90e8\u5206\uff0c\u5e76\u4e14\u6c89\u6dc0\u5bf9\u4e1a\u52a1\u6709\u4ef7\u503c\u7684\u901a\u7528\u7ec4\u4ef6\uff0c\u4e2d\u53f0\u7684\u4ef7\u503c\u4e00\u5b9a\u8981\u4f53\u73b0\u5728\u4e1a\u52a1\u4e0a\uff0c\u8fd9\u91cc\u7684\u4e1a\u52a1\u5c31\u662f\u6307\u4e0b\u6e38\u7684\u4e0a\u4e0b\u6587\uff0c\u4f46\u662f\u4e2d\u53f0\u4e5f\u6709\u4e2d\u53f0\u7684\u96be\u5904\uff0c\u5f53\u4e2d\u53f0\u8981\u987a\u4ece\u591a\u4e2a\u4e0a\u4e0b\u6587\u7684\u65f6\u5019\uff0c\u81ea\u5df1\u7684\u4e0a\u4e0b\u6587\u5c31\u5bb9\u6613\u53d8\u6210\u5927\u6ce5\u7403\u3002"}),(0,s.jsx)(i.p,{children:"\u5982\u679c\u8981\u7ed9\u591a\u4e2a\u4e0a\u4e0b\u6587\u5f53\u4f9b\u5e94\u5546\uff0c\u4e5f\u662f\u4e00\u6837\uff0c\u6a21\u578b\u5f88\u96be\u7a33\u5b9a\u4e0b\u6765\u3002"})]}),"\n",(0,s.jsx)(i.p,{children:"\u4e2d\u53f0\u7684\u8bbe\u8ba1\u662f\u5f88\u9700\u8981\u667a\u6167\u548c\u6280\u5de7\u7684\uff0c\u5426\u5219\u5f88\u5bb9\u6613\u53d8\u6210\u5927\u6ce5\u7403\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u5982\u679c\u4e2d\u53f0\u56e2\u961f\u4e0d\u7ed9\u529b\uff0c\u603b\u662f\u8981\u8ba9\u4e0b\u6e38\u5f53\u987a\u4ece\u8005\uff0c\u90a3\u4e48\u4e2d\u53f0\u6700\u540e\u5f88\u53ef\u80fd\u4f1a\u53d8\u5f97\u5f62\u540c\u865a\u8bbe\uff0c\u4e0b\u6e38\u7684\u4e0a\u4e0b\u6587\u5728\u88ab\u903c\u65e0\u5948\u7684\u60c5\u51b5\u4e0b\u53ef\u80fd\u4f1a\u91c7\u7528 \u5206\u9053\u626c\u9573 \u6a21\u5f0f"}),"\n",(0,s.jsx)(i.h3,{id:"\u5206\u9053\u626c\u9573",children:"\u5206\u9053\u626c\u9573"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u4e24\u4e2a\u4e0a\u4e0b\u6587\u65e0\u534f\u4f5c\uff0c\u5404\u81ea\u72ec\u7acb\u3002"}),"\n",(0,s.jsx)(i.li,{children:"\u5f53\u4e24\u4e2a\u4e0a\u4e0b\u6587\u4e4b\u95f4\u7684\u96c6\u6210\u6210\u672c\u8fc7\u9ad8\u7684\u60c5\u51b5\u4e0b\u5c31\u4f1a\u51fa\u73b0\u8fd9\u6837\u7684\u60c5\u51b5\u3002"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://wkq-img.oss-cn-chengdu.aliyuncs.com/img/image-20240118225333894.png",alt:"image-20240118225333894"})}),"\n",(0,s.jsx)(i.p,{children:"\u5982\u679c\u65e7\u7cfb\u7edf\u662f\u4e00\u4e2a\u5927\u6ce5\u7403\uff0c\u96c6\u6210\u53ef\u80fd\u4f1a\u975e\u5e38\u56f0\u96be\uff0c\u8fd9\u65f6\u5019\u65b0\u7cfb\u7edf\u5c31\u53ef\u80fd\u4f1a\u653e\u5f03\u96c6\u6210\uff0c\u91cd\u65b0\u5f00\u59cb\uff0c\u6700\u540e\u6d41\u91cf\u9010\u6b65\u5207\u6362\u5230\u65b0\u7cfb\u7edf\u3002"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://wkq-img.oss-cn-chengdu.aliyuncs.com/img/image-20240118225437019.png",alt:"image-20240118225437019"})}),"\n",(0,s.jsx)(i.h3,{id:"\u516c\u5f00\u8bed\u8a00",children:"\u516c\u5f00\u8bed\u8a00"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u6807\u51c6\u5316\u548c\u534f\u8bae\u5316\u7684\u6a21\u578b"}),"\n",(0,s.jsx)(i.li,{children:"\u6240\u6709\u7684\u4e0a\u4e0b\u6587\u90fd\u53ef\u4ee5\u4e0e\u516c\u5f00\u8bed\u8a00\u4e2d\u7684\u6a21\u578b\u8fdb\u884c\u53cc\u5411\u8f6c\u6362"}),"\n",(0,s.jsx)(i.li,{children:"\u5bf9\u63a5\u4e86\u516c\u5f00\u8bed\u8a00\u7684\u4e0a\u4e0b\u6587\u4e4b\u95f4\u53ef\u4ee5\u5b9e\u73b0\u7ec4\u4ef6\u5316\u5bf9\u63a5"}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"tip",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u84dd\u7259\u534f\u8bae\u3001tcp/ip"}),"\n",(0,s.jsx)(i.li,{children:"Java \u751f\u6001\u7684 jdbc\u3001jvm \u6807\u51c6\u7b49"}),"\n",(0,s.jsx)(i.li,{children:"SQL"}),"\n"]})}),"\n",(0,s.jsx)(i.h2,{id:"smartrm\u4e0a\u4e0b\u6587\u6620\u5c04",children:"SmartRM\u4e0a\u4e0b\u6587\u6620\u5c04"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://wkq-img.oss-cn-chengdu.aliyuncs.com/img/image-20240118225829639.png",alt:"image-20240118225829639"})}),"\n",(0,s.jsx)(i.p,{children:"\u8fd9\u91cc\u5bf9\u63a5\u7684\u4e2d\u53f0\u90fd\u662f\u5b58\u5728\u4e8e\u5ba2\u6237\u7684\u5185\u90e8\uff0c\u800c\u4e14\u4e0d\u540c\u5ba2\u6237\u7684\u60c5\u51b5\u53ef\u80fd\u4f1a\u6709\u6240\u533a\u522b\uff0c\u751a\u81f3\u6709\u7684\u5ba2\u6237\u5185\u90e8\u7684\u7cfb\u7edf\u975e\u5e38\u8001\u65e7\uff0c\u5df2\u7ecf\u662f\u5927\u6ce5\u7403\u4e86\uff0c\u6bd4\u5982\u5f88\u591a ERP \u7cfb\u7edf\u3002\u6240\u4ee5\u5f88\u96be\u8981\u6c42\u5ba2\u6237\u4e3a\u6211\u4eec\u5b9a\u5236\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u4f5c\u4e3a\u987a\u4ece\u8005\uff0c\u6211\u4eec\u5c31\u9700\u8981\u5728\u81ea\u5df1\u8fd9\u4e00\u5c42\u8bbe\u7f6e\u9632\u8150\u5c42\uff0c\u4fdd\u8bc1\u81ea\u5df1\u6a21\u578b\u7684\u7eaf\u7cb9\uff0c\u4e0d\u53d7\u6c61\u67d3\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"\u5c0f\u7ed3",children:"\u5c0f\u7ed3"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u4e0a\u4e0b\u6587\u3001\u56e2\u961f\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u91cd\u53e0\u6a21\u578b\u7684\u6620\u5c04\u5173\u7cfb\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u4e0a\u4e0b\u6587\u6620\u5c04\u6a21\u5f0f\uff089\u79cd\u6a21\u5f0f\uff09\u3001"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u200b\t\t \u5176\u4e2d\uff0c\u5f00\u653e\u4e3b\u673a\u670d\u52a1\u662f\u4e0a\u6e38\u7528\u7684\u6a21\u5f0f\uff1b\u9632\u8150\u5c42\u662f\u4e0b\u6e38\u7528\u7684\u6a21\u5f0f\uff1b\u987a\u4ece\u8005\u548c\u5ba2\u6237/\u4f9b\u5e94\u5546\u6a21\u5f0f\u662f\u4e24\u79cd\u76f8\u53cd\u7684\u6a21\u5f0f\uff0c\u5728\u8fd9\u4e24\u79cd\u6a21\u5f0f\u79cd\uff0c\u4e0b\u6e38\u5206\u522b\u626e\u6f14\u5f31\u52bf\u548c\u5f3a\u52bf\u7684\u89d2\u8272\uff1b\u5171\u4eab\u5185\u6838\u8981\u614e\u7528\uff0c\u9664\u975e\u56e2\u961f\u662f\u4e00\u79cd\u5408\u4f5c\u7684\u6a21\u5f0f\uff0c\u79f0\u4e4b\u4e3a\u5408\u4f19\u4eba\uff1b\u5927\u6ce5\u7403\u662f\u4e00\u79cd\u53cd\u6a21\u5f0f\uff0c\u4e0d\u5f97\u5df2\u7684\u60c5\u51b5\u4e0b\u5206\u9053\u626c\u9573\u4e5f\u662f\u53ef\u4ee5\u91c7\u7528\u7684\u6a21\u5f0f\uff1b\u6807\u51c6\u548c\u534f\u8bae\u4e2d\u7684\u6a21\u578b\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a\u516c\u5f00\u8bed\u8a00\uff0c\u5bf9\u63a5\u4e86\u516c\u5f00\u8bed\u8a00\uff0c\u5c31\u53ef\u4ee5\u628a\u4e0a\u4e0b\u6587\u7ec4\u4ef6\u5316\u3002"})]})}function x(n={}){const{wrapper:i}={...(0,l.a)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(j,{...n})}):j(n)}},1151:(n,i,e)=>{e.d(i,{Z:()=>r,a:()=>d});var s=e(7294);const l={},c=s.createContext(l);function d(n){const i=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function r(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),s.createElement(c.Provider,{value:i},n.children)}}}]);