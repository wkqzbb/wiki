"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[4733],{6422:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var c=i(5893),d=i(1151);const s={title:"\u5b9e\u4f53\u548c\u503c\u5bf9\u8c61"},t=void 0,l={id:"object-oriented/ddd/basic/entity-and-value-object",title:"\u5b9e\u4f53\u548c\u503c\u5bf9\u8c61",description:"\u5b9e\u4f53\u548c\u503c\u5bf9\u8c61\u662f\u9886\u57df\u6a21\u578b\u4e2d\u7684\u9886\u57df\u5bf9\u8c61\u3002",source:"@site/docs/object-oriented/ddd/basic/entity-and-value-object.mdx",sourceDirName:"object-oriented/ddd/basic",slug:"/object-oriented/ddd/basic/entity-and-value-object",permalink:"/wiki/en/docs/object-oriented/ddd/basic/entity-and-value-object",draft:!1,unlisted:!1,editUrl:"https://github.com/wkqzbb/wiki/tree/develop?search=1/docs/object-oriented/ddd/basic/entity-and-value-object.mdx",tags:[],version:"current",frontMatter:{title:"\u5b9e\u4f53\u548c\u503c\u5bf9\u8c61"},sidebar:"objectOriented",previous:{title:"\u9650\u754c\u4e0a\u4e0b\u6587",permalink:"/wiki/en/docs/object-oriented/ddd/basic/bounded-context"},next:{title:"\u805a\u5408\u548c\u805a\u5408\u6839",permalink:"/wiki/en/docs/object-oriented/ddd/basic/aggregate"}},r={},o=[{value:"\u5b9e\u4f53",id:"\u5b9e\u4f53",level:2},{value:"1. \u5b9e\u4f53\u7684\u4e1a\u52a1\u5f62\u6001",id:"1-\u5b9e\u4f53\u7684\u4e1a\u52a1\u5f62\u6001",level:3},{value:"2. \u5b9e\u4f53\u7684\u4ee3\u7801\u5f62\u6001",id:"2-\u5b9e\u4f53\u7684\u4ee3\u7801\u5f62\u6001",level:3},{value:"3. \u5b9e\u4f53\u7684\u8fd0\u884c\u5f62\u6001",id:"3-\u5b9e\u4f53\u7684\u8fd0\u884c\u5f62\u6001",level:3},{value:"4. \u5b9e\u4f53\u7684\u6570\u636e\u5e93\u5f62\u6001",id:"4-\u5b9e\u4f53\u7684\u6570\u636e\u5e93\u5f62\u6001",level:3},{value:"\u503c\u5bf9\u8c61",id:"\u503c\u5bf9\u8c61",level:2},{value:"1. \u503c\u5bf9\u8c61\u7684\u4e1a\u52a1\u5f62\u6001",id:"1-\u503c\u5bf9\u8c61\u7684\u4e1a\u52a1\u5f62\u6001",level:3},{value:"2. \u503c\u5bf9\u8c61\u7684\u4ee3\u7801\u5f62\u6001",id:"2-\u503c\u5bf9\u8c61\u7684\u4ee3\u7801\u5f62\u6001",level:3},{value:"3. \u503c\u5bf9\u8c61\u7684\u8fd0\u884c\u5f62\u6001",id:"3-\u503c\u5bf9\u8c61\u7684\u8fd0\u884c\u5f62\u6001",level:3},{value:"4. \u503c\u5bf9\u8c61\u7684\u6570\u636e\u5e93\u5f62\u6001",id:"4-\u503c\u5bf9\u8c61\u7684\u6570\u636e\u5e93\u5f62\u6001",level:3}];function a(e){const n={blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,d.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"\u5b9e\u4f53\u548c\u503c\u5bf9\u8c61\u662f\u9886\u57df\u6a21\u578b\u4e2d\u7684\u9886\u57df\u5bf9\u8c61\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u5b9e\u4f53",children:"\u5b9e\u4f53"}),"\n",(0,c.jsx)(n.p,{children:"\u5728 DDD \u4e2d\u6709\u8fd9\u6837\u4e00\u7c7b\u5bf9\u8c61\uff0c\u4ed6\u4eec\u62e5\u6709\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u4e14\u6807\u8bc6\u7b26\u5728\u5386\u7ecf\u5404\u79cd\u72b6\u6001\u53d8\u66f4\u540e\u4ecd\u80fd\u4fdd\u6301\u4e00\u81f4\u3002\u5bf9\u8fd9\u4e9b\u5bf9\u8c61\u800c\u8a00\uff0c\u91cd\u8981\u7684\u4e0d\u662f\u5176\u5c5e\u6027\uff0c\u800c\u662f\u5176\u5ef6\u7eed\u6027\u548c\u6807\u8bc6\uff0c\u5bf9\u8c61\u7684\u5ef6\u7eed\u6027\u548c\u6807\u8bc6\u4f1a\u8de8\u8d8a\u751a\u81f3\u8d85\u51fa\u8f6f\u4ef6\u7684\u751f\u547d\u5468\u671f\uff0c\u6211\u4eec\u628a\u8fd9\u6837\u7684\u5bf9\u8c61\u79f0\u4e3a\u5b9e\u4f53\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"1-\u5b9e\u4f53\u7684\u4e1a\u52a1\u5f62\u6001",children:"1. \u5b9e\u4f53\u7684\u4e1a\u52a1\u5f62\u6001"}),"\n",(0,c.jsx)(n.p,{children:"\u5728 DDD \u4e0d\u540c\u7684\u8bbe\u8ba1\u8fc7\u7a0b\u4e2d\uff0c\u5b9e\u4f53\u7684\u5f62\u6001\u662f\u4e0d\u540c\u7684\u3002\u5728\u6218\u7565\u8bbe\u8ba1\u65f6\uff0c\u5b9e\u4f53\u662f\u9886\u57df\u6a21\u578b\u7684\u4e00\u4e2a\u91cd\u8981\u5bf9\u8c61\u3002\u9886\u57df\u6a21\u578b\u4e2d\u7684\u5b9e\u4f53\u662f\u591a\u4e2a\u5c5e\u6027\u3001\u64cd\u4f5c\u6216\u884c\u4e3a\u7684\u8f7d\u4f53\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u4e8b\u4ef6\u98ce\u66b4\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u547d\u4ee4\u3001\u64cd\u4f5c\u6216\u8005\u4e8b\u4ef6\uff0c\u627e\u51fa\u4ea7\u751f\u8fd9\u4e9b\u884c\u4e3a\u7684\u4e1a\u52a1\u5b9e\u4f53\u5bf9\u8c61\uff0c\u8fdb\u800c\u6309\u7167\u4e00\u5b9a\u7684\u4e1a\u52a1\u89c4\u5219\u5c06\u4f9d\u5b58\u5ea6\u9ad8\u548c\u4e1a\u52a1\u5173\u8054\u7d27\u5bc6\u7684\u591a\u4e2a\u5b9e\u4f53\u5bf9\u8c61\u548c\u503c\u5bf9\u8c61\u8fdb\u884c\u805a\u7c7b\uff0c\u5f62\u6210\u805a\u5408\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u5b9e\u4f53\u548c\u503c\u5bf9\u8c61\u662f\u7ec4\u6210\u9886\u57df\u6a21\u578b\u7684\u57fa\u7840\u5355\u5143"})}),"\n",(0,c.jsx)(n.h3,{id:"2-\u5b9e\u4f53\u7684\u4ee3\u7801\u5f62\u6001",children:"2. \u5b9e\u4f53\u7684\u4ee3\u7801\u5f62\u6001"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u4ee3\u7801\u6a21\u578b\u4e2d\uff0c\u5b9e\u4f53\u7684\u8868\u73b0\u5f62\u5f0f\u662f\u5b9e\u4f53\u7c7b\uff0c\u8fd9\u4e2a\u7c7b\u5305\u542b\u4e86\u5b9e\u4f53\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u901a\u8fc7\u8fd9\u4e9b\u65b9\u6cd5\u5b9e\u73b0\u5b9e\u4f53\u81ea\u8eab\u7684\u4e1a\u52a1\u903b\u8f91\u3002\u5728 DDD \u91cc\uff0c\u8fd9\u4e9b \u5b9e\u4f53\u7c7b\u901a\u5e38\u91c7\u7528\u5145\u8840\u6a21\u578b\uff0c\u4e0e\u8fd9\u4e2a\u5b9e\u4f53\u76f8\u5173\u7684\u6240\u6709\u4e1a\u52a1\u903b\u8f91\u90fd\u5728\u5b9e\u4f53\u7c7b\u7684\u65b9\u6cd5\u4e2d\u5b9e\u73b0\uff0c\u8de8\u591a\u4e2a\u5b9e\u4f53\u7684\u9886\u57df\u903b\u8f91\r\n\u5219\u5728\u9886\u57df\u670d\u52a1\u4e2d\u5b9e\u73b0\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"3-\u5b9e\u4f53\u7684\u8fd0\u884c\u5f62\u6001",children:"3. \u5b9e\u4f53\u7684\u8fd0\u884c\u5f62\u6001"}),"\n",(0,c.jsx)(n.p,{children:"\u5b9e\u4f53\u4ee5 DO(\u9886\u57df\u5bf9\u8c61)\u7684\u5f62\u5f0f\u5b58\u5728\uff0c\u6bcf\u4e2a\u5b9e\u4f53\u5bf9\u8c61\u90fd\u6709\u552f\u4e00\u7684 ID\u3002\u6211\u4eec\u53ef\u4ee5\u5bf9\u4e00\u4e2a\u5b9e\u4f53\u5bf9\u8c61\u8fdb\u884c\u591a\u6b21\u4fee\u6539\uff0c\u4fee\u6539\u540e\u7684\u6570\u636e\u548c\u539f\u6765\u7684\u6570\u636e\u53ef\u80fd\u4f1a\u4e0d\u5927\u76f8\u540c\u3002\u4f46\u662f\uff0c\u7531\u4e8e\u5b83\u4eec\u62e5\u6709\u76f8\u540c\u7684 ID\uff0c\u5b83\u4eec\u4f9d\u7136\u662f\u4e00\u4e2a\u5b9e\u4f53\u3002\u6bd4\u5982\u5546\u54c1\u662f\u5546\u54c1\u4e0a\u4e0b\u6587\u7684\u4e00\u4e2a\u5b9e\u4f53\uff0c\u901a\u8fc7\u552f\u4e00\u7684\u5546\u54c1 ID \u6765\u6807\u8bc6\uff0c\u4e0d\u7ba1\u8fd9\u4e2a\u5546\u54c1\u7684\u6570\u636e\u5982\u4f55\u53d8\u5316\uff0c\u5546\u54c1\u7684 ID \u4e00\u76f4\u4fdd\u6301\u4e0d\u53d8\uff0c\u5b83\u59cb\u7ec8\u662f\u540c\u4e00\u4e2a\u5546\u54c1\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"4-\u5b9e\u4f53\u7684\u6570\u636e\u5e93\u5f62\u6001",children:"4. \u5b9e\u4f53\u7684\u6570\u636e\u5e93\u5f62\u6001"}),"\n",(0,c.jsx)(n.p,{children:"\u4e0e\u4f20\u7edf\u6570\u636e\u6a21\u578b\u8bbe\u8ba1\u4f18\u5148\u4e0d\u540c\uff0cDDD \u662f\u5148\u6784\u5efa\u9886\u57df\u6a21\u578b\uff0c\u9488\u5bf9\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u6784\u5efa\u5b9e\u4f53\u5bf9\u8c61\u548c\u884c\u4e3a\uff0c\u518d\u5c06\u5b9e\u4f53\u6620\u5c04\u5230\u6570\u636e\u6301\u4e45\u5316\u5bf9\u8c61\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u9886\u57df\u6a21\u578b\u6620\u5c04\u5230\u6570\u636e\u6a21\u578b\u65f6\uff0c\u4e00\u4e2a\u5b9e\u4f53\u53ef\u80fd\u5bf9\u5e94 0 \u4e2a\u30011 \u4e2a\u6216\u8005\u591a\u4e2a\u6570\u636e\u5e93\u6301\u4e45\u5316\u5bf9\u8c61\u3002\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u5b9e\u4f53\u4e0e\u6301\u4e45\u5316\u5bf9\u8c61\u662f\u4e00\u5bf9\u4e00\uff0c\u5728\u67d0\u4e9b\u573a\u666f\u4e2d\uff0c\u6709\u4e9b\u5b9e\u4f53\u77e5\u8bc6\u6682\u9a7b\u5185\u5b58\u7684\u4e00\u4e2a\u8fd0\u884c\u6001\u5b9e\u4f53\uff0c\u5b83\u4e0d\u9700\u8981\u6301\u4e45\u5316\u3002\u6bd4\u5982\uff0c\u57fa\u4e8e\u591a\u4e2a\u4ef7\u683c\r\n\u914d\u7f6e\u6570\u636e\u8ba1\u7b97\u540e\u751f\u6210\u7684\u6298\u6263\u5b9e\u4f53\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u800c\u5728\u6709\u4e9b\u590d\u6742\u573a\u666f\u4e0b\uff0c\u5b9e\u4f53\u4e0e\u6301\u4e45\u5316\u5bf9\u8c61\u5219\u53ef\u80fd\u662f\u4e00\u5bf9\u591a\u6216\u8005\u591a\u5bf9\u4e00\u7684\u5173\u7cfb\u3002\u6bd4\u5982\uff0c\u7528\u6237 user \u4e0e \u89d2\u8272  role \u4e24\u4e2a\u6301\u4e45\u5316\u5bf9\u8c61\u53ef\u751f\u6210\u6743\u9650\u5b9e\u4f53\uff0c\u4e00\u4e2a\u5b9e\u4f53\u5bf9\u5e94\u4e24\u4e2a\u6301\u4e45\u5316\u5bf9\u8c61\uff0c\u8fd9\u662f\u4e00\u5bf9\u591a\u7684\u573a\u666f\uff0c\u518d\u6bd4\u5982\uff0c\u6709\u4e9b\u573a\u666f\u4e3a\u4e86\u907f\u514d\u6570\u636e\u5e93\u7684\u8054\u67e5\u3001\u63d0\u5347\u7cfb\u7edf\u6027\u80fd\uff0c\u4f1a\u5c06\u5ba2\u6237\r\n\u4fe1\u606f customer \u548c\u8d26\u6237\u4fe1\u606f account \u4e24\u7c7b\u6570\u636e\u4fdd\u5b58\u5230\u540c\u4e00\u5f20\u6570\u636e\u5e93\u8868\u4e2d\uff0c\u5ba2\u6237\u548c\u8d26\u6237\u4e24\u4e2a\u5b9e\u4f53\u53ef\u6839\u636e\u9700\u8981\u4ece\u4e00\u4e2a\u6301\u4e45\u5316\u5bf9\u8c61\u4e2d\u751f\u6210\uff0c\u8fd9\u5c31\u662f\u591a\u5bf9\u4e00\u7684\u573a\u666f\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u503c\u5bf9\u8c61",children:"\u503c\u5bf9\u8c61"}),"\n",(0,c.jsx)(n.p,{children:"\u503c\u5bf9\u8c61\u76f8\u5bf9\u5b9e\u4f53\u6765\u8bf4\uff0c\u4f1a\u66f4\u52a0\u62bd\u8c61\u4e00\u4e9b\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5728 \u300a\u5b9e\u73b0\u9886\u57df\u9a71\u52a8\u8bbe\u8ba1\u300b \u4e2d\u5bf9\u503c\u5bf9\u8c61\u7684\u5b9a\u4e49\u662f\uff1a\u901a\u8fc7\u5bf9\u8c61\u5c5e\u6027\u503c\u6765\u8bc6\u522b\u7684\u5bf9\u8c61\uff0c\u5b83\u5c06\u591a\u4e2a\u76f8\u5173\u6570\u636e\u7ec4\u5408\u4e3a\u4e00\u4e2a\u6982\u5ff5\u6574\u4f53\u3002\u5728 DDD \u4e2d\u7528\u6765\u63cf\u8ff0\u9886\u57df\u7684\u7279\u5b9a\u65b9\u9762\uff0c\u5e76\u4e14\u662f\u4e00\u4e2a\u6ca1\u6709\u6807\u8bc6\u7b26\u7684\u5bf9\u8c61\uff0c\u53eb\u505a\u503c\u5bf9\u8c61\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4e5f\u5c31\u662f\u8bf4\uff0c\u503c\u5bf9\u8c61\u63cf\u8ff0\u4e86\u9886\u57df\u4e2d\u7684\u4e00\u4ef6\u4e1c\u897f\uff0c\u8fd9\u4e2a\u4e1c\u897f\u662f\u4e0d\u53ef\u53d8\u7684\uff0c\u5b83\u5c06\u4e0d\u540c\u7684\u76f8\u5173\u5c5e\u6027\u7ec4\u5408\u6210\u4e86\u4e00\u4e2a\u6982\u5ff5\u6574\u4f53\u3002\u5f53\u5ea6\u91cf\u548c\u63cf\u8ff0\u6539\u53d8\u65f6\uff0c\u53ef\u4ee5\u7528\u53e6\u4e00\u4e2a\u503c\u5bf9\u8c61\u4e88\u4ee5\u66ff\u6362\u3002\u5b83\u53ef\u4ee5\u4e0e\u5176\u5b83\u503c\u5bf9\u8c61\u8fdb\u884c\u76f8\u7b49\u6027\u6bd4\u8f83\uff0c\u4e14\u4e0d\u4f1a\u5bf9\u534f\u4f5c\u5bf9\u8c61\u9020\u6210\u526f\u4f5c\u7528\u3002"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u7b80\u5355\u6765\u8bf4\uff0c\u503c\u5bf9\u8c61\u672c\u8d28\u4e0a\u5c31\u662f\u4e00\u4e2a\u96c6\u5408"}),"\u3002\u91cc\u9762\u6709\u82e5\u5e72\u4e2a\u7528\u6237\u63cf\u8ff0\u76ee\u7684\u3001\u5177\u6709\u6574\u4f53\u6982\u5ff5\u548c\u4e0d\u53ef\u4fee\u6539\u7684\u5c5e\u6027\u3002\u5728\u9886\u57df\u5efa\u6a21\u7684\u8fc7\u7a0b\u4e2d\uff0c\u503c\u5bf9\u8c61\u53ef\u4ee5\u4fdd\u8bc1\u5f52\u7c7b\u7684\u6e05\u6670\u548c\u6982\u5ff5\u7684\u5b8c\u6574\u6027\uff0c\u907f\u514d\u5c5e\u6027\u96f6\u788e\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://wkq-img.oss-cn-chengdu.aliyuncs.com/img/image-20231227235235811.png",alt:"image-20231227235235811"})}),"\n",(0,c.jsx)(n.p,{children:"\u4eba\u5458\u5b9e\u4f53\u539f\u672c\u5305\u542b\uff1a\u59d3\u540d\u3001\u5e74\u9f84\u3001\u6027\u522b\u4ee5\u53ca\u4eba\u5458\u6240\u5728\u7684\u7701\u3001\u5e02\u3001\u53bf\u548c\u8857\u9053\u7b49\u5c5e\u6027\u3002\u8fd9\u6837\u663e\u793a\u5730\u5740\u76f8\u5173\u7684\u5c5e\u6027\u5c31\u5f88\u96f6\u788e\u4e86\uff0c\u73b0\u5728\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06 \u7701\u3001\u5e02\u3001\u53bf\u548c\u8857\u9053\u7b49\u5c5e\u6027\uff0c\u62ff\u51fa\u6765\u6784\u6210\u4e00\u4e2a \u5730\u5740\u5c5e\u6027\u96c6\u5408\uff0c\u8fd9\u4e2a\u96c6\u5408\u5c31\u662f\u503c\u5bf9\u8c61\u4e86\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"1-\u503c\u5bf9\u8c61\u7684\u4e1a\u52a1\u5f62\u6001",children:"1. \u503c\u5bf9\u8c61\u7684\u4e1a\u52a1\u5f62\u6001"}),"\n",(0,c.jsx)(n.p,{children:"\u503c\u5bf9\u8c61\u662f DDD \u9886\u57df\u6a21\u578b\u7684\u4e00\u4e2a\u57fa\u7840\u5bf9\u8c61\uff0c\u5b83\u8ddf\u5b9e\u4f53\u4e00\u6837\u90fd\u662f\u6765\u6e90\u4e8e\u4e8b\u4ef6\u98ce\u66b4\u6240\u6784\u5efa\u7684\u9886\u57df\u6a21\u578b\uff0c\u90fd\u5305\u542b\u4e86\u82e5\u5e72\u5c5e\u6027\uff0c\u5b83\u4e0e\u5b9e\u4f53\u4e00\u8d77\u6784\u6210\u805a\u5408\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5b9e\u4f53\u662f\u770b\u5f97\u5230\u3001\u6478\u5f97\u7740\u7684\u5b9e\u5b9e\u5728\u5728\u7684\u4e1a\u52a1\u5bf9\u8c61\uff0c\u5b9e\u4f53\u5177\u6709\u4e1a\u52a1\u5c5e\u6027\u3001\u4e1a\u52a1\u884c\u4e3a\u548c\u4e1a\u52a1\u903b\u8f91\u3002\u800c\u503c\u5bf9\u8c61\u53ea\u662f\u82e5\u5e72\u5c5e\u6027\u7684\u96c6\u5408\uff0c\u53ea\u6709\u6570\u636e\u521d\u59cb\u5316\u64cd\u4f5c\u548c\u6709\u9650\u7684\u4e0d\u6d89\u53ca\u4fee\u6539\u6570\u636e\u7684\u884c\u4e3a\uff0c\u57fa\u672c\u4e0d\u5305\u542b\u4e1a\u52a1\u903b\u8f91\u3002\u503c\u5bf9\u8c61\u7684\u5c5e\u6027\u867d\u7136\u5728\u7269\u7406\u4e0a\u72ec\u7acb\u51fa\u6765\u4e86\uff0c\u4f46\u5728\u903b\u8f91\u4e0a\u5b83\u4ecd\u7136\u662f\u5b9e\u4f53\u5c5e\u6027\u7684\u4e00\u90e8\u5206\uff0c\u7528\u4e8e\u63cf\u8ff0\u5b9e\u4f53\u7684\u7279\u5f81\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u503c\u5bf9\u8c61\u4e2d\u4e5f\u6709\u90e8\u5206\u5171\u4eab\u7684\u6807\u51c6\u7c7b\u578b\u7684\u503c\u5bf9\u8c61\uff0c\u5b83\u4eec\u6709\u81ea\u5df1\u7684\u9650\u754c\u4e0a\u4e0b\u6587\uff0c\u6709\u81ea\u5df1\u7684\u6301\u4e45\u5316\u5bf9\u8c61\uff0c\u53ef\u4ee5\u5efa\u7acb\u5171\u4eab\u7684\u6570\u636e\u7c7b\u5fae\u670d\u52a1\uff0c\u6bd4\u5982\u6570\u636e\u5b57\u5178\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"2-\u503c\u5bf9\u8c61\u7684\u4ee3\u7801\u5f62\u6001",children:"2. \u503c\u5bf9\u8c61\u7684\u4ee3\u7801\u5f62\u6001"}),"\n",(0,c.jsx)(n.p,{children:"\u503c\u5bf9\u8c61\u5728\u4ee3\u7801\u4e2d\u6709\u4e24\u79cd\u5f62\u6001\u3002\u5982\u679c\u503c\u5bf9\u8c61\u662f\u5355\u4e00\u5c5e\u6027\uff0c\u5219\u76f4\u63a5\u5b9a\u4e49\u4e3a\u5b9e\u4f53\u7c7b\u7684\u5c5e\u6027\uff1b\u5982\u679c\u503c\u5bf9\u8c61\u662f\u5c5e\u6027\u96c6\u5408\uff0c\u5219\u628a\u5b83\u8bbe\u8ba1\u4e3a Class \u7c7b\uff0cClass \u5c06\u5177\u6709\u6574\u4f53\u6982\u5ff5\u7684\u591a\u4e2a\u5c5e\u6027\u5f52\u96c6\u5230\u5c5e\u6027\u96c6\u5408\uff0c\u8fd9\u6837\u7684\u503c\u5bf9\u8c61\u6ca1\u6709 ID\uff0c\u4f1a\u88ab\u5b9e\u4f53\u6574\u4f53\u5f15\u7528\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://wkq-img.oss-cn-chengdu.aliyuncs.com/img/c597d53a1a1aeca274d355e8ac79cc1b.jpg",alt:"img"})}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c person \u8fd9\u4e2a\u5b9e\u4f53\u6709\u82e5\u5e72\u4e2a\u5355\u4e00\u5c5e\u6027\u7684\u503c\u5bf9\u8c61\uff0c\u6bd4\u5982 Id\u3001name \u7b49\u5c5e\u6027\uff1b\u540c\u65f6\u5b83\u4e5f\u5305\u542b\u591a\u4e2a\u5c5e\u6027\u7684\u503c\u5bf9\u8c61\uff0c\u6bd4\u5982\u5730\u5740 address\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"3-\u503c\u5bf9\u8c61\u7684\u8fd0\u884c\u5f62\u6001",children:"3. \u503c\u5bf9\u8c61\u7684\u8fd0\u884c\u5f62\u6001"}),"\n",(0,c.jsx)(n.p,{children:"\u5b9e\u4f53\u5b9e\u4f8b\u5316\u540e\u7684 DO \u5bf9\u8c61\u7684\u4e1a\u52a1\u5c5e\u6027\u548c\u4e1a\u52a1\u884c\u4e3a\u975e\u5e38\u4e30\u5bcc\uff0c\u4f46\u503c\u5bf9\u8c61\u5b9e\u4f8b\u5316\u7684\u5bf9\u8c61\u9664\u4e86\u5bf9\u8c61\u6570\u636e\u521d\u59cb\u5316\u548c\u6574\u4f53\u66ff\u6362\u7684\u884c\u4e3a\u5916\uff0c\u5176\u5b83\u4e1a\u52a1\u884c\u4e3a\u5c31\u5f88\u5c11\u4e86\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u503c\u5bf9\u8c61\u5d4c\u5165\u5230\u5b9e\u4f53\u7684\u8bdd\uff0c\u6709\u4e24\u79cd\u4e0d\u540c\u7684\u6570\u636e\u683c\u5f0f\uff0c\u4e5f\u53ef\u4ee5\u8bf4\u662f\u4e24\u79cd\u65b9\u5f0f\uff0c\u5206\u522b\u662f\u5c5e\u6027\u5d4c\u5165\u7684\u65b9\u5f0f\u548c\u5e8f\u5217\u5316\u5927\u5bf9\u8c61\u7684\u65b9\u5f0f\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u5f15\u7528\u5355\u4e00\u5c5e\u6027\u7684\u503c\u5bf9\u8c61\u6216\u53ea\u6709\u4e00\u6761\u8bb0\u5f55\u7684\u591a\u5c5e\u6027\u503c\u5bf9\u8c61\u7684\u5b9e\u4f53\uff0c\u53ef\u4ee5\u91c7\u7528\u5c5e\u6027\u5d4c\u5165\u7684\u65b9\u5f0f\u5d4c\u5165\u3002\u5f15\u7528\u4e00\u6761\u6216\u591a\u6761\u8bb0\u5f55\u7684\u591a\u5c5e\u6027\u503c\u5bf9\u8c61\u7684\u5b9e\u4f53\uff0c\u53ef\u4ee5\u91c7\u7528\u5e8f\u5217\u5316\u5927\u5bf9\u8c61\u7684\u65b9\u5f0f\u5d4c\u5165\u3002\u6bd4\u5982\uff0c\u4eba\u5458\u5b9e\u4f53\u53ef\u4ee5\u6709\u591a\u4e2a\u901a\u8baf\u5730\u5740\uff0c\u591a\u4e2a\u5730\u5740\u5e8f\u5217\u5316\u4e4b\u540e\u5c31\u53ef\u4ee5\u5d4c\u5165\u4eba\u5458\u7684\u5730\u5740\u5c5e\u6027\u3002",(0,c.jsx)(n.strong,{children:"\u503c\u5bf9\u8c61\u521b\u5efa\u540e\u5c31\u4e0d\u5141\u8bb8\u4fee\u6539\u4e86\uff0c\u53ea\u80fd\u7528\u53e6\u5916\u4e00\u4e2a\u503c\u5bf9\u8c61\u6765\u6574\u4f53\u66ff\u6362\u3002"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"\u6848\u4f8b\u4e00\uff1a\u4ee5\u5c5e\u6027\u5d4c\u5165\u7684\u65b9\u5f0f\u5f62\u6210\u7684\u4eba\u5458\u5b9e\u4f53\u5bf9\u8c61\uff0c\u5730\u5740\u503c\u5bf9\u8c61\u76f4\u63a5\u4ee5\u5c5e\u6027\u503c\u5d4c\u5165\u4eba\u5458\u5b9e\u4f53\u4e2d\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://wkq-img.oss-cn-chengdu.aliyuncs.com/img/323c8aca1271cc043558dfd1f95f57fa.jpg",alt:"img"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"\u6848\u4f8b\u4e8c\uff1a\u4ee5\u5e8f\u5217\u5316\u5927\u5bf9\u8c61\u7684\u65b9\u5f0f\u5f62\u6210\u4eba\u5458\u5b9e\u4f53\u5bf9\u8c61\uff0c\u5730\u5740\u503c\u5bf9\u8c61\u88ab\u5e8f\u5217\u5316\u6210\u5927\u5bf9\u8c61 JSON \u4e32\u540e\uff0c\u5d4c\u5165\u5230\u4eba\u5458\u5b9e\u4f53\u4e2d\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://wkq-img.oss-cn-chengdu.aliyuncs.com/img/96253ac8bd1d93a2786b59d7b9c2c423.jpg",alt:"img"})}),"\n",(0,c.jsx)(n.h3,{id:"4-\u503c\u5bf9\u8c61\u7684\u6570\u636e\u5e93\u5f62\u6001",children:"4. \u503c\u5bf9\u8c61\u7684\u6570\u636e\u5e93\u5f62\u6001"}),"\n",(0,c.jsx)(n.p,{children:"DDD \u5f15\u5165\u503c\u5bf9\u8c61\u662f\u5e0c\u671b\u5b9e\u73b0\u4ece\u201c\u6570\u636e\u5efa\u6a21\u4e3a\u4e2d\u5fc3\u201d\u5411\u201c\u9886\u57df\u5efa\u6a21\u4e3a\u4e2d\u5fc3\u201d\u8f6c\u53d8\uff0c\u51cf\u5c11\u6570\u636e\u5e93\u8868\u7684\u6570\u91cf\u548c\u8868\u4e0e\u8868\u4e4b\u95f4\u590d\u6742\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u5c3d\u53ef\u80fd\u5730\u7b80\u5316\u6570\u636e\u5e93\u8bbe\u8ba1\uff0c\u63d0\u5347\u6570\u636e\u5e93\u6027\u80fd\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4f20\u7edf\u7684\u6570\u636e\u5efa\u6a21\u5927\u591a\u662f\u6839\u636e\u6570\u636e\u5e93\u8303\u5f0f\u8bbe\u8ba1\u7684\uff0c\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u8868\u5bf9\u5e94\u4e00\u4e2a\u5b9e\u4f53\uff0c\u6bcf\u4e00\u4e2a\u5b9e\u4f53\u7684\u5c5e\u6027\u503c\u7528\u5355\u72ec\u7684\u4e00\u5217\u6765\u5b58\u50a8\uff0c\u4e00\u4e2a\u5b9e\u4f53\u4e3b\u8868\u4f1a\u5bf9\u5e94 N \u4e2a\u5b9e\u4f53\u4ece\u8868\u3002\u800c\u503c\u5bf9\u8c61\u5728\u6570\u636e\u5e93\u6301\u4e45\u5316\u65b9\u9762\u7b80\u5316\u4e86\u8bbe\u8ba1\uff0c\u4ed6\u7684\u6570\u636e\u5e93\u8bbe\u8ba1\u5927\u591a\u91c7\u7528\u975e\u6570\u636e\u5e93\u8303\u5f0f\uff0c\u503c\u5bf9\u8c61\u7684\u5c5e\u6027\u503c\u548c\u5b9e\u4f53\u5bf9\u8c61\u7684\u5c5e\u6027\u503c\u4fdd\u5b58\u5728\u540c\u4e00\u4e2a\u6570\u636e\u5e93\u5b9e\u4f53\u8868\u4e2d\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u8fd8\u662f\u57fa\u4e8e\u4e0a\u8ff0\u4eba\u5458\u548c\u5730\u5740\u90a3\u4e2a\u573a\u666f\uff0c\u5b9e\u4f53\u548c\u6570\u636e\u6a21\u578b\u8bbe\u8ba1\u901a\u5e38\u6709\u4e24\u79cd\u89e3\u51b3\u65b9\u6848"}),"\n",(0,c.jsx)(n.p,{children:"\uff1a\u7b2c\u4e00\u662f\u628a\u5730\u5740\u503c\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027\u90fd\u653e\u5230\u4eba\u5458\u5b9e\u4f53\u8868\u4e2d\uff0c\u521b\u5efa\u4eba\u5458\u5b9e\u4f53\u8868\uff0c\u521b\u5efa\u4eba\u5458\u6570\u636e\u8868\uff1b\u7b2c\u4e8c\u662f\u521b\u5efa\u4eba\u5458\u548c\u5730\u5740\u4e24\u4e2a\u5b9e\u4f53\uff0c\u540c\u65f6\u521b\u5efa\u4eba\u5458\u548c\u5730\u5740\u4e24\u5f20\u8868\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>t});var c=i(7294);const d={},s=c.createContext(d);function t(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);