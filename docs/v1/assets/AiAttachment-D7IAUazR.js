import{j as e,M as r,T as o,C as a}from"./blocks-B_JHdttX.js";import{useMDXComponents as s}from"./index-BUlXZrGn.js";import{C as l}from"./CustomArgTypes-BMhAed0J.js";import{A as c,D as d}from"./AiAttachment.stories-BIuCt1vO.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BAxVbwLB.js";import"./utils-D3jxQn3U.js";import"./ai-attachment-CIi5xMDN.js";import"./custom-element-UsVr97OX.js";import"./property-DkpCXdf_.js";import"./class-map-B51DPJ2K.js";import"./base-C1e8NJ0Y.js";import"./ai-spinner-b6_tr5nf.js";import"./tooltip-BStxRYAC.js";import"./overlay-8Vp-JEDj.js";import"./when-CI7b_ccM.js";function t(n){const i={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(o,{}),`
`,e.jsx(i.p,{children:"The AI Attachment component displays file attachment information in AI chat interfaces. It shows file metadata including name, size, and type-specific icons, with support for image thumbnails and optional removal functionality."}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(i.h2,{id:"features",children:"Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"File Type Icons"}),": Displays contextual icons based on MIME type (PDF, images, documents, videos, etc.)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"File Size Formatting"}),": Automatically formats file sizes in human-readable format (B, KB, MB, GB)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Image Thumbnails"}),": Supports thumbnail previews for image files"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Removable"}),": Optional remove button for interactive attachment management"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Accessible"}),": Full ARIA implementation with proper labels and keyboard support"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Responsive"}),": Adapts to container width with text truncation for long filenames"]}),`
`]}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Uses ",e.jsx(i.code,{children:'role="group"'})," with descriptive ",e.jsx(i.code,{children:"aria-label"})," for the attachment container"]}),`
`,e.jsxs(i.li,{children:["Remove button includes ",e.jsx(i.code,{children:"aria-label"})," with the filename for context"]}),`
`,e.jsxs(i.li,{children:["Icons are marked with ",e.jsx(i.code,{children:'aria-hidden="true"'})," to prevent redundant announcements"]}),`
`,e.jsxs(i.li,{children:["Thumbnail images have empty ",e.jsx(i.code,{children:"alt"})," text as they're decorative"]}),`
`,e.jsx(i.li,{children:"Full keyboard support with visible focus indicators"}),`
`,e.jsx(i.li,{children:"Hover states provide visual feedback for interactive elements"}),`
`]}),`
`,e.jsx(i.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{})]})}function D(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{D as default};
