(()=>{"use strict";var e,t={336:()=>{const e=window.wp.blocks;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},t.apply(this,arguments)}const l=window.wp.element,a=window.wp.i18n,o=window.wp.blockEditor,n=window.wp.components,r=["image"],i=JSON.parse('{"u2":"wsb-tailwindui/hero-cta"}');(0,e.registerBlockType)(i.u2,{edit:function({attributes:e,setAttributes:i}){const s=(0,o.useBlockProps)(),{title:c,paragraph:u,imageURL:m,imageALT:g,buttons:d,backgroundColor:p,titleTextColor:b,paragraphTextColor:h,buttonTextColor:v,buttonColor:x,backgroundColorOpacity:f}=e,w=(e,t,l)=>{const a=[...d];a[e][t]=l,i({buttons:a})};return(0,l.createElement)("div",{className:"relative isolate overflow-hidden"},(0,l.createElement)(o.InspectorControls,{key:"setting"},(0,l.createElement)("div",{id:"tw-settings"},(0,l.createElement)(n.PanelBody,{title:(0,a.__)("Settings","basic-block"),initialOpen:!0},(0,l.createElement)(n.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)("legend",{className:"blocks-base-control__label"},(0,a.__)("Background image")),(0,l.createElement)(o.MediaUploadCheck,null,(0,l.createElement)(o.MediaUpload,{onSelect:e=>function(e){i({imageURL:e.url,imageID:e.id,imageALT:e.alt})}(e),allowedTypes:r,value:e.imageID,render:({open:e})=>(0,l.createElement)(n.Button,{onClick:e},"Change Image")})))),(0,l.createElement)(n.PanelRow,null,(0,l.createElement)(o.PanelColorSettings,{title:(0,a.__)("Color settings"),initialOpen:!1,colorSettings:[{value:p,onChange:e=>i({backgroundColor:e}),label:(0,a.__)("Background gradient color")},{value:x,onChange:e=>i({buttonColor:e}),label:(0,a.__)("Button color")},{value:v,onChange:e=>i({buttonTextColor:e}),label:(0,a.__)("Button text color")},{value:b,onChange:e=>i({titleTextColor:e}),label:(0,a.__)("Title text color")},{value:h,onChange:e=>i({paragraphTextColor:e}),label:(0,a.__)("Paragraph text color")}]})),(0,l.createElement)(n.PanelRow,null,(0,l.createElement)(n.TextControl,{value:f,onChange:e=>i({backgroundColorOpacity:e}),placeholder:"Background Opacity Value"})),d.map(((e,t)=>(0,l.createElement)(n.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)("legend",{className:"blocks-base-control__label"},(0,a.__)(`Button ${t+1}`,"gutenpride")),(0,l.createElement)("div",{key:t},(0,l.createElement)(n.TextControl,{value:e.text,onChange:e=>w(t,"text",e),placeholder:"Button Text"}),(0,l.createElement)(o.URLInputButton,{onChange:e=>w(t,"url",e),url:e.url,allowedTypes:["page"]}),(0,l.createElement)(n.Button,{className:"my-2",isDestructive:!0,onClick:()=>(e=>{const t=[...d];t.splice(e,1),i({buttons:t})})(t)},"Remove URL")))))),(0,l.createElement)(n.PanelRow,null,(0,l.createElement)(n.Button,{onClick:()=>{const e=[...d,{url:"",text:""}];i({buttons:e})}},"Add URL"))))),(0,l.createElement)("div",{className:"absolute inset-x-0 inset-y-0 z-10 transform-gpu overflow-hidden pointer-events-none bg-black opacity-30","aria-hidden":"true",style:{backgroundColor:p,opacity:f}}),(0,l.createElement)("img",{src:m,alt:g,className:"absolute inset-0 -z-10 h-full w-full object-cover"}),(0,l.createElement)("div",{className:"relative z-20 mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"},(0,l.createElement)("div",{className:"text-center"},(0,l.createElement)(o.RichText,{tagName:"h1",className:"text-4xl font-bold tracking-tight text-white sm:text-6xl",value:c,onChange:e=>i({title:e}),placeholder:(0,a.__)("Write the title here..."),style:{color:b}}),(0,l.createElement)(o.RichText,t({},s,{tagName:"p",className:"mt-6 text-lg leading-8 text-gray-300",value:u,onChange:e=>i({paragraph:e}),placeholder:(0,a.__)("Write the paragraph here..."),style:{color:h}})),(0,l.createElement)("div",{className:"button-group mt-10 flex items-center justify-center gap-x-6"},d.map(((e,t)=>(0,l.createElement)("a",{key:t,href:e.url,className:0==t?"rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400":"text-sm font-semibold leading-6 text-white ml-2",style:{backgroundColor:0==t?x:"transparent",color:0==t?v:"white"}},e.text)))))))},save:function({attributes:e}){const a=o.useBlockProps.save(),{title:n,paragraph:r,imageURL:i,imageALT:s,buttons:c,backgroundColor:u,titleTextColor:m,paragraphTextColor:g,buttonTextColor:d,buttonColor:p,backgroundColorOpacity:b}=e;return(0,l.createElement)("div",{className:"relative isolate overflow-hidden"},(0,l.createElement)("div",{className:"absolute inset-x-0 inset-y-0 z-10 transform-gpu overflow-hidden pointer-events-none bg-black opacity-30","aria-hidden":"true",style:{backgroundColor:u,opacity:b}}),(0,l.createElement)("img",{src:i,alt:s,className:"absolute inset-0 -z-10 h-full w-full object-cover"}),(0,l.createElement)("div",{className:"relative z-20 mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"},(0,l.createElement)("div",{className:"text-center"},(0,l.createElement)(o.RichText.Content,{tagName:"h1",className:"text-4xl font-bold tracking-tight text-white sm:text-6xl",value:n,style:{color:m}}),(0,l.createElement)(o.RichText.Content,t({},a,{tagName:"p",className:"mt-6 text-lg leading-8 text-gray-300",value:r,style:{color:g}})),(0,l.createElement)("div",{className:"mt-10 flex items-center justify-center gap-x-6"},c.map(((e,t)=>(0,l.createElement)("a",{key:t,href:e.url,className:0==t?"rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400":"text-sm font-semibold leading-6 text-white",style:{backgroundColor:0==t?p:"transparent",color:0==t?d:"white"}},e.text)))))))}})}},l={};function a(e){var o=l[e];if(void 0!==o)return o.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=(t,l,o,n)=>{if(!l){var r=1/0;for(u=0;u<e.length;u++){for(var[l,o,n]=e[u],i=!0,s=0;s<l.length;s++)(!1&n||r>=n)&&Object.keys(a.O).every((e=>a.O[e](l[s])))?l.splice(s--,1):(i=!1,n<r&&(r=n));if(i){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[l,o,n]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={825:0,114:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var o,n,[r,i,s]=l,c=0;if(r.some((t=>0!==e[t]))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(s)var u=s(a)}for(t&&t(l);c<r.length;c++)n=r[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},l=globalThis.webpackChunkwsb_tailwindui=globalThis.webpackChunkwsb_tailwindui||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var o=a.O(void 0,[114],(()=>a(336)));o=a.O(o)})();