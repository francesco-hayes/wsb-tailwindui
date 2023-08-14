(()=>{"use strict";var e,t={232:()=>{const e=window.wp.blocks;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},t.apply(this,arguments)}const l=window.wp.element,a=window.wp.i18n,o=window.wp.blockEditor,r=window.wp.components,s=JSON.parse('{"u2":"wsb-tailwindui/stats"}');(0,e.registerBlockType)(s.u2,{edit:function({attributes:e,setAttributes:s}){const{spacing:n,backgroundColor:c,statBackgroundColor:i,statTextColor:g,titleTextColor:m}=e;return(0,l.createElement)("div",{className:"wsb-tailwindui bg-white py-24 sm:py-32",style:{backgroundColor:c}},(0,l.createElement)(o.InspectorControls,null,(0,l.createElement)(o.PanelColorSettings,{title:(0,a.__)("Color settings"),initialOpen:!1,colorSettings:[{value:c,onChange:e=>s({backgroundColor:e}),label:(0,a.__)("Background color")},{value:i,onChange:e=>s({statBackgroundColor:e}),label:(0,a.__)("Stat background color")},{value:m,onChange:e=>s({titleTextColor:e}),label:(0,a.__)("Title text color")},{value:g,onChange:e=>s({statTextColor:e}),label:(0,a.__)("Stat text color")}]}),(0,l.createElement)(r.__experimentalBoxControl,{onChange:e=>s({spacing:e})})),(0,l.createElement)("div",{className:"mx-auto max-w-7xl px-6 lg:px-8"},(0,l.createElement)("div",{className:"mx-auto max-w-2xl lg:max-w-none"},(0,l.createElement)("div",{className:"text-center"},(0,l.createElement)(o.RichText,t({},(0,o.useBlockProps)(),{tagName:"h2",className:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",value:e.title,onChange:e=>s({title:e}),style:{color:m}}))),(0,l.createElement)("dl",{className:"mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3"},(0,l.createElement)("div",{style:{backgroundColor:i},className:"flex flex-col bg-gray-400/5 p-8"},(0,l.createElement)("dt",{style:{color:g},className:"text-sm font-semibold leading-6 text-gray-600"},"Years"),(0,l.createElement)(o.RichText,t({},(0,o.useBlockProps)(),{tagName:"dd",className:"order-first text-3xl font-semibold tracking-tight text-gray-900",value:e.years,onChange:e=>s({years:e}),style:{color:g}}))),(0,l.createElement)("div",{style:{backgroundColor:i},className:"flex flex-col bg-gray-400/5 p-8"},(0,l.createElement)("dt",{style:{color:g},className:"text-sm font-semibold leading-6 text-gray-600"},"Events"),(0,l.createElement)(o.RichText,t({},(0,o.useBlockProps)(),{tagName:"dd",className:"order-first text-3xl font-semibold tracking-tight text-gray-900",value:e.events,onChange:e=>s({events:e}),style:{color:g}}))),(0,l.createElement)("div",{style:{backgroundColor:i},className:"flex flex-col bg-gray-400/5 p-8"},(0,l.createElement)("dt",{style:{color:g},className:"text-sm font-semibold leading-6 text-gray-600"},"Speakers"),(0,l.createElement)(o.RichText,t({},(0,o.useBlockProps)(),{tagName:"dd",className:"order-first text-3xl font-semibold tracking-tight text-gray-900",value:e.speakers,onChange:e=>s({speakers:e}),style:{color:g}})))))))},save:function({attributes:e}){const a=o.useBlockProps.save(),{backgroundColor:r,statBackgroundColor:s,statTextColor:n,titleTextColor:c}=e;return(0,l.createElement)("div",{style:{backgroundColor:r},className:"bg-white py-24 sm:py-32"},(0,l.createElement)("div",{className:"mx-auto max-w-7xl px-6 lg:px-8"},(0,l.createElement)("div",{className:"mx-auto max-w-2xl lg:max-w-none"},(0,l.createElement)("div",{className:"text-center"},(0,l.createElement)(o.RichText.Content,t({},a,{tagName:"h2",className:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",value:e.title,style:{color:c}}))),(0,l.createElement)("dl",{className:"mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3"},(0,l.createElement)("div",{style:{backgroundColor:s},className:"flex flex-col bg-gray-400/5 p-8"},(0,l.createElement)("dt",{style:{color:n},className:"text-sm font-semibold leading-6 text-gray-600"},"Years"),(0,l.createElement)(o.RichText.Content,t({},a,{tagName:"dd",className:"order-first text-3xl font-semibold tracking-tight text-gray-900",value:e.years,style:{color:n}}))),(0,l.createElement)("div",{style:{backgroundColor:s},className:"flex flex-col bg-gray-400/5 p-8"},(0,l.createElement)("dt",{style:{color:n},className:"text-sm font-semibold leading-6 text-gray-600"},"Events"),(0,l.createElement)(o.RichText.Content,t({},a,{tagName:"dd",className:"order-first text-3xl font-semibold tracking-tight text-gray-900",value:e.events,style:{color:n}}))),(0,l.createElement)("div",{style:{backgroundColor:s},className:"flex flex-col bg-gray-400/5 p-8"},(0,l.createElement)("dt",{style:{color:n},className:"text-sm font-semibold leading-6 text-gray-600"},"Speakers"),(0,l.createElement)(o.RichText.Content,t({},a,{tagName:"dd",className:"order-first text-3xl font-semibold tracking-tight text-gray-900",value:e.speakers,style:{color:n}})))))))}})}},l={};function a(e){var o=l[e];if(void 0!==o)return o.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,l,o,r)=>{if(!l){var s=1/0;for(g=0;g<e.length;g++){for(var[l,o,r]=e[g],n=!0,c=0;c<l.length;c++)(!1&r||s>=r)&&Object.keys(a.O).every((e=>a.O[e](l[c])))?l.splice(c--,1):(n=!1,r<s&&(s=r));if(n){e.splice(g--,1);var i=o();void 0!==i&&(t=i)}}return t}r=r||0;for(var g=e.length;g>0&&e[g-1][2]>r;g--)e[g]=e[g-1];e[g]=[l,o,r]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={552:0,662:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var o,r,[s,n,c]=l,i=0;if(s.some((t=>0!==e[t]))){for(o in n)a.o(n,o)&&(a.m[o]=n[o]);if(c)var g=c(a)}for(t&&t(l);i<s.length;i++)r=s[i],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(g)},l=globalThis.webpackChunkwsb_tailwindui=globalThis.webpackChunkwsb_tailwindui||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var o=a.O(void 0,[662],(()=>a(232)));o=a.O(o)})();