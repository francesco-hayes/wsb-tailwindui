(()=>{"use strict";var e,t={515:()=>{const e=window.wp.blocks;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},t.apply(this,arguments)}const l=window.wp.element,a=window.wp.i18n,r=window.wp.blockEditor,o=JSON.parse('{"u2":"wsb-tailwindui/testimonials"}');(0,e.registerBlockType)(o.u2,{edit:function({attributes:e,setAttributes:o}){const n=(0,r.useBlockProps)(),{testimonial_one:c,testimonial_two:s,backgroundColor:i,textColor:m}=e,g=(e,{keys:t,content:l})=>{const a="left"===e?c:s,r=t.split(".");let n=a;for(let e=0;e<r.length-1;e++)n=n[r[e]];n[r[r.length-1]]=l,o("left"===e?{testimonial_one:{...c,...a}}:{testimonial_two:{...s,...a}})};return(0,l.createElement)("div",{className:"relative isolate overflow-hidden"},(0,l.createElement)(r.InspectorControls,null,(0,l.createElement)(r.PanelColorSettings,{title:(0,a.__)("Color settings"),initialOpen:!1,colorSettings:[{value:i,onChange:e=>o({backgroundColor:e}),label:(0,a.__)("Background color")},{value:m,onChange:e=>o({textColor:e}),label:(0,a.__)("Text color")}]})),(0,l.createElement)("section",{className:"bg-white py-24 sm:py-32",style:{backgroundColor:i}},(0,l.createElement)("div",{className:"mx-auto max-w-7xl px-6 lg:px-8"},(0,l.createElement)("div",{className:"mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8 xl:gap-20"},(0,l.createElement)("div",{className:"flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20"},(0,l.createElement)("figure",{className:"flex flex-auto flex-col justify-between"},(0,l.createElement)("blockquote",{className:"text-lg leading-8 text-gray-900"},(0,l.createElement)(r.RichText,t({},n,{tagName:"p",value:c.text,onChange:e=>g("left",{keys:"text",content:e}),placeholder:(0,a.__)("Write the testimonial here..."),style:{color:m}}))),(0,l.createElement)("figcaption",{className:"mt-10 flex items-center gap-x-6"},(0,l.createElement)(r.MediaUpload,{onSelect:e=>{g("left",{keys:"author.image.url",content:e.url}),g("left",{keys:"author.image.alt",content:e.alt})},allowedTypes:["image"],value:c.author?.image?.url,render:({open:e})=>(0,l.createElement)("img",{onClick:e,className:"h-14 w-14 rounded-full bg-gray-50 cursor-pointer",src:c.author?.image?.url,alt:""})}),(0,l.createElement)("div",{className:"text-base"},(0,l.createElement)(r.RichText,{tagName:"div",className:"font-semibold text-gray-900",value:c.author?.name,onChange:e=>g("left",{keys:"author.name",content:e}),placeholder:(0,a.__)("Author name"),style:{color:m}}),(0,l.createElement)(r.RichText,{tagName:"div",className:"mt-1 text-gray-500",value:c.author?.title,onChange:e=>g("left",{keys:"author.title",content:e}),placeholder:(0,a.__)("Author title"),style:{color:m}}))))),(0,l.createElement)("div",{className:"flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20"},(0,l.createElement)("figure",{className:"flex flex-auto flex-col justify-between"},(0,l.createElement)("blockquote",{className:"text-lg leading-8 text-gray-900"},(0,l.createElement)(r.RichText,t({},n,{tagName:"p",value:s.text,onChange:e=>g("right",{keys:"text",content:e}),placeholder:(0,a.__)("Write the testimonial here..."),style:{color:m}}))),(0,l.createElement)("figcaption",{className:"mt-10 flex items-center gap-x-6"},(0,l.createElement)(r.MediaUpload,{onSelect:e=>{g("right",{keys:"author.image.url",content:e.url}),g("right",{keys:"author.image.alt",content:e.alt})},allowedTypes:["image"],value:s.author?.image?.url,render:({open:e})=>(0,l.createElement)("img",{onClick:e,className:"h-14 w-14 rounded-full bg-gray-50 cursor-pointer",src:s.author?.image?.url,alt:""})}),(0,l.createElement)("div",{className:"text-base"},(0,l.createElement)(r.RichText,{tagName:"div",className:"font-semibold text-gray-900",value:s.author?.name,onChange:e=>g("right",{keys:"author.name",content:e}),placeholder:(0,a.__)("Author name"),style:{color:m}}),(0,l.createElement)(r.RichText,{tagName:"div",className:"mt-1 text-gray-500",value:s.author?.title,onChange:e=>g("right",{keys:"author.title",content:e}),placeholder:(0,a.__)("Author title"),style:{color:m}})))))))))},save:function({attributes:e}){const a=r.useBlockProps.save(),{testimonial_one:o,testimonial_two:n,backgroundColor:c,textColor:s}=e;return(0,l.createElement)("div",{className:"relative isolate overflow-hidden"},(0,l.createElement)("section",{className:"bg-white py-24 sm:py-32",style:{backgroundColor:c}},(0,l.createElement)("div",{className:"mx-auto max-w-7xl px-6 lg:px-8"},(0,l.createElement)("div",{className:"mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8 xl:gap-20"},(0,l.createElement)("div",{className:"flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20"},(0,l.createElement)("figure",{className:"flex flex-auto flex-col justify-between"},(0,l.createElement)("blockquote",{className:"text-lg leading-8 text-gray-900"},(0,l.createElement)(r.RichText.Content,t({},a,{tagName:"p",value:o.text,style:{color:s}}))),(0,l.createElement)("figcaption",{className:"mt-10 flex items-center gap-x-6"},(0,l.createElement)("img",{className:"h-14 w-14 rounded-full bg-gray-50",src:o.author?.image?.url,alt:o.author?.image?.alt}),(0,l.createElement)("div",{className:"text-base"},(0,l.createElement)(r.RichText.Content,{tagName:"div",className:"font-semibold text-gray-900",value:o.author?.name,style:{color:s}}),(0,l.createElement)(r.RichText.Content,{tagName:"div",className:"mt-1 text-gray-500",value:o.author?.title,style:{color:s}}))))),(0,l.createElement)("div",{className:"flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20"},(0,l.createElement)("figure",{className:"flex flex-auto flex-col justify-between"},(0,l.createElement)("blockquote",{className:"text-lg leading-8 text-gray-900"},(0,l.createElement)(r.RichText.Content,t({},a,{tagName:"p",value:n.text,style:{color:s}}))),(0,l.createElement)("figcaption",{className:"mt-10 flex items-center gap-x-6"},(0,l.createElement)("img",{className:"h-14 w-14 rounded-full bg-gray-50",src:n.author?.image?.url,alt:n.author?.image?.alt}),(0,l.createElement)("div",{className:"text-base"},(0,l.createElement)(r.RichText.Content,{tagName:"div",className:"font-semibold text-gray-900",value:n.author?.name,style:{color:s}}),(0,l.createElement)(r.RichText.Content,{tagName:"div",className:"mt-1 text-gray-500",value:n.author?.title,style:{color:s}})))))))))}})}},l={};function a(e){var r=l[e];if(void 0!==r)return r.exports;var o=l[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,l,r,o)=>{if(!l){var n=1/0;for(m=0;m<e.length;m++){for(var[l,r,o]=e[m],c=!0,s=0;s<l.length;s++)(!1&o||n>=o)&&Object.keys(a.O).every((e=>a.O[e](l[s])))?l.splice(s--,1):(c=!1,o<n&&(n=o));if(c){e.splice(m--,1);var i=r();void 0!==i&&(t=i)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[l,r,o]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={480:0,691:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var r,o,[n,c,s]=l,i=0;if(n.some((t=>0!==e[t]))){for(r in c)a.o(c,r)&&(a.m[r]=c[r]);if(s)var m=s(a)}for(t&&t(l);i<n.length;i++)o=n[i],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(m)},l=globalThis.webpackChunkwsb_tailwindui=globalThis.webpackChunkwsb_tailwindui||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var r=a.O(void 0,[691],(()=>a(515)));r=a.O(r)})();