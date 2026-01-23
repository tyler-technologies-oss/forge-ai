import{x as e}from"./iframe-C6yLHJaW.js";import"./ai-empty-state-Boj7zuTF.js";import"./ai-suggestions-DyxL6Ek8.js";const a="forge-ai-empty-state",n={title:"AI Components/Primitives/Empty State",component:a,argTypes:{showSuggestions:{control:"boolean",description:"Show or hide the suggestions"},customMessage:{control:"text",description:"Custom message text (leave empty for default)"},useCustomIcon:{control:"boolean",description:"Use custom icon instead of default books icon"},iconType:{control:{type:"select"},options:["star","robot","lightbulb","heart"],description:"Type of custom icon to show",if:{arg:"useCustomIcon",truthy:!0}}},args:{showSuggestions:!0,customMessage:"",useCustomIcon:!1,iconType:"star"},render:t=>{const s=[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"}],c=r=>{switch(r){case"star":return e`
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="graphic">
              <path
                fill="#FFD700"
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          `;case"robot":return e`
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="graphic">
              <path
                fill="#4A90E2"
                d="M12 2c-1.1 0-2 .9-2 2v1H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-2V4c0-1.1-.9-2-2-2zM9 9c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm6 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-3 4c1.7 0 3 1.3 3 3H9c0-1.7 1.3-3 3-3z" />
            </svg>
          `;case"lightbulb":return e`
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="graphic">
              <path
                fill="#FFA500"
                d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17h8v-2.3c1.8-1.2 3-3.3 3-5.7 0-3.9-3.1-7-7-7z" />
            </svg>
          `;case"heart":return e`
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="graphic">
              <path
                fill="#E91E63"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          `;default:return e``}};return e`
      <forge-ai-empty-state>
        ${t.useCustomIcon?c(t.iconType):""}
        ${t.customMessage?e`${t.customMessage}`:""}
        ${t.showSuggestions?e`
              <forge-ai-suggestions slot="actions" variant="block" .suggestions=${s}> </forge-ai-suggestions>
            `:""}
      </forge-ai-empty-state>
    `}},o={args:{customMessage:"Welcome to Forge AI!  "}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    customMessage: 'Welcome to Forge AI!  '
  }
}`,...o.parameters?.docs?.source}}};const i=["Demo"],u=Object.freeze(Object.defineProperty({__proto__:null,Demo:o,__namedExportsOrder:i,default:n},Symbol.toStringTag,{value:"Module"}));export{u as A,o as D};
