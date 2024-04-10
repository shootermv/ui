"use strict";(self.webpackChunk_freecodecamp_ui=self.webpackChunk_freecodecamp_ui||[]).push([[16],{"./src/button/button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AsADownloadLink:()=>AsADownloadLink,AsALink:()=>AsALink,Danger:()=>Danger,Default:()=>Default,Disabled:()=>Disabled,FullWidth:()=>FullWidth,Info:()=>Info,Large:()=>Large,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const story={title:"Components/Button",component:__webpack_require__("./src/button/index.ts").$,parameters:{controls:{include:["children","variant","size","disabled","block","href","download","target","onClick"]}},argTypes:{variant:{options:["primary","danger","info"]},size:{options:["small","medium","large"]},disabled:{options:[!0,!1],control:{type:"radio"}},block:{options:[!0,!1],control:{type:"radio"}},target:{options:["_self","_blank","_parent","_top"]},onClick:{action:"clicked"},href:{control:{type:"text"}},download:{control:{type:"text"}}}},Default={args:{children:"Button"}},Danger={args:{variant:"danger",children:"Button"}},Info={args:{variant:"info",children:"Button"}},Large={args:{size:"large",children:"Button"}},Small={args:{size:"small",children:"Button"}},Disabled={args:{children:"Button",disabled:!0}},FullWidth={args:{children:"Button",block:!0}},AsALink={args:{children:"I'm a link that looks like a button",href:"https://www.freecodecamp.org"}},AsADownloadLink={args:{children:"I'm a download link",href:"https://www.freecodecamp.org",download:"my_file.txt"}},__WEBPACK_DEFAULT_EXPORT__=story;Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Button"\n  }\n}',...Default.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "danger",\n    children: "Button"\n  }\n}',...Danger.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "info",\n    children: "Button"\n  }\n}',...Info.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "large",\n    children: "Button"\n  }\n}',...Large.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "small",\n    children: "Button"\n  }\n}',...Small.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Button",\n    disabled: true\n  }\n}',...Disabled.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Button",\n    block: true\n  }\n}',...FullWidth.parameters?.docs?.source}}},AsALink.parameters={...AsALink.parameters,docs:{...AsALink.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "I\'m a link that looks like a button",\n    href: "https://www.freecodecamp.org"\n  }\n}',...AsALink.parameters?.docs?.source}}},AsADownloadLink.parameters={...AsADownloadLink.parameters,docs:{...AsADownloadLink.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "I\'m a download link",\n    href: "https://www.freecodecamp.org",\n    download: "my_file.txt"\n  }\n}',...AsADownloadLink.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Danger","Info","Large","Small","Disabled","FullWidth","AsALink","AsADownloadLink"]},"./src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,Q:()=>HeadlessButton});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const defaultClassNames=["relative","inline-block","mt-[0.5px]","border-solid","border-3","active:before:w-full","active:before:h-full","active:before:absolute","active:before:inset-0","active:before:border-3","active:before:border-transparent","active:before:bg-gray-900","active:before:opacity-20","aria-disabled:cursor-not-allowed","aria-disabled:opacity-50","focus:outline-none","focus-visible:ring","focus-visible:ring-focus-outline-color","text-center","cursor-pointer","no-underline"],StylessButton=react.forwardRef(((_ref2,ref)=>{let{className,onClick,disabled,children,type="button",...rest}=_ref2;return react.createElement("button",_extends({className,onClick:event=>{disabled||onClick&&onClick(event)},"aria-disabled":disabled,ref,type},rest),children)})),Link=react.forwardRef(((_ref3,ref)=>{let{className,href,download,target,children,...rest}=_ref3;return react.createElement("a",_extends({className,download,target,ref,href},rest),children)})),HeadlessButton=react.forwardRef(((_ref4,ref)=>{let{onClick,className,children,disabled,href,download,target,...rest}=_ref4;return href&&!disabled?react.createElement(Link,_extends({className,href,download,target,ref,onClick},rest),children):react.createElement(StylessButton,_extends({className,onClick,disabled,ref},rest),children)})),Button=react.forwardRef(((_ref5,ref)=>{let{className,size="medium",disabled,variant="primary",block,...rest}=_ref5;const buttonStyle=[className,(0,react.useMemo)((()=>(_ref=>{let{size,variant,disabled,block}=_ref;const classNames=[...defaultClassNames];switch(block&&classNames.push("block","w-full"),variant){case"danger":classNames.push("border-foreground-danger","bg-background-danger","text-foreground-danger",...disabled?["active:before:hidden"]:["hover:bg-foreground-danger","hover:text-background-danger","hover:border-foreground-danger","dark:hover:bg-background-danger","dark:hover:text-foreground-danger"]);break;case"info":classNames.push("border-foreground-info","bg-background-info","text-foreground-info",...disabled?["active:before:hidden"]:["hover:bg-foreground-info","hover:text-background-info","hover:border-foreground-info","dark:hover:bg-background-info","dark:hover:text-foreground-info"]);break;default:classNames.push("border-foreground-secondary","bg-background-quaternary","text-foreground-secondary",...disabled?["active:before:hidden"]:["hover:bg-foreground-primary","hover:text-background-primary","hover:border-foreground-secondary","dark:hover:bg-background-primary","dark:hover:text-foreground-primary"])}switch(size){case"large":classNames.push("px-4 py-2.5 text-lg");break;case"small":classNames.push("px-2.5 py-1 text-sm");break;default:classNames.push("px-3 py-1.5 text-md")}return classNames.join(" ")})({size,variant,disabled,block})),[size,variant,disabled,block])].join(" ");return react.createElement(HeadlessButton,_extends({className:buttonStyle,ref,disabled},rest))}));Button.displayName="Button",HeadlessButton.displayName="HeadlessButton",StylessButton.displayName="StylessButton",Link.displayName="Link";try{HeadlessButton.displayName="Button",HeadlessButton.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"danger"'},{value:'"info"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"submit"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean | undefined"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},download:{defaultValue:null,description:"",name:"download",required:!1,type:{name:"string | undefined"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);