import{x as i}from"./iframe-DlJEpWNk.js";import"./ai-attachment-BDUTEvoK.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,n="forge-ai-attachment",m={title:"AI Components/Primitives/Attachment",render:e=>{const o=a("forge-ai-attachment-remove");return i`
      <forge-ai-attachment
        .filename=${e.filename}
        .size=${e.size}
        .mimeType=${e.mimeType}
        .thumbnail=${e.thumbnail}
        ?removable=${e.removable}
        @forge-ai-attachment-remove=${o}>
      </forge-ai-attachment>
    `},component:n,argTypes:{filename:{control:"text",description:"The name of the file"},size:{control:"number",description:"The size of the file in bytes"},mimeType:{control:"select",options:["application/pdf","image/png","image/jpeg","video/mp4","audio/mp3","application/msword","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/zip","text/plain"],description:"The MIME type of the file"},thumbnail:{control:"text",description:"Optional thumbnail data URL for image files"},removable:{control:"boolean",description:"Whether the attachment can be removed"}},args:{filename:"document.pdf",size:1048576,mimeType:"application/pdf",thumbnail:"",removable:!0}},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const r=["Demo"],l=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,__namedExportsOrder:r,default:m},Symbol.toStringTag,{value:"Module"}));export{l as A,t as D};
