"use strict";var precacheConfig=[["/index.html","f842997d0afa318a92942c732a067bd3"],["/static/css/main.d6a11547.css","6f59c99280c982dfd565eae36ccb5d0b"],["/static/js/0.9f79613c.chunk.js","364c015fb92e2016653dc9f52512dcca"],["/static/js/1.e3e79696.chunk.js","e1986b89ef326540574e370d5cae2ce0"],["/static/js/10.d20ee715.chunk.js","83c53e73dd43fcc4632809f722ca3cb1"],["/static/js/11.7d27b026.chunk.js","32177664a9a16f59c24884645869aaa6"],["/static/js/12.067d3bee.chunk.js","629a4fe3c581bf440073f7114186eafc"],["/static/js/13.9887a393.chunk.js","7aae2f26ed00bb8e307fa0448a3466a9"],["/static/js/14.da12df2b.chunk.js","265143de2afecba5fe53baee9911230a"],["/static/js/2.16dcfa57.chunk.js","46762106e57ee263d2c269bc736822a1"],["/static/js/3.6c2b1318.chunk.js","335cb07a036346f7ff82f7ab68b440cb"],["/static/js/4.4eafdb79.chunk.js","a765000b07e654126aa384004e0a75f6"],["/static/js/5.26ce1e6e.chunk.js","1cbf97527a8a51bf2ab891c6a0ed5949"],["/static/js/6.f027efa9.chunk.js","77608cd615386c614651b63a81673e8c"],["/static/js/7.2820c36f.chunk.js","ca979d4177f61c07743b896b0f639839"],["/static/js/8.559b80f6.chunk.js","08bb005d6378bc6f11ae5e555d0239bf"],["/static/js/9.5e7aec9e.chunk.js","2fcb5e90c3bd7282ef296cc531457e02"],["/static/js/main.b4239734.js","ea3378f2bbda6647b80cf4e74fde1779"],["/static/media/G-Unit.00b8effd.ttf","00b8effdbdc4d3ccaa5077ae07fd426f"],["/static/media/batka.c6930931.jpg","c6930931f979f3f320bd024bdb7fb7c8"],["/static/media/crime.36e9d7d9.wav","36e9d7d9c6638b95c5888716866b6dcb"],["/static/media/crime.b646584f.png","b646584fbab45a3580e50048e40eefa2"],["/static/media/gangsta1.0338383a.jpg","0338383ab1f8ef25e395f27b9c4fdf06"],["/static/media/gangsta2.83b04107.jpg","83b04107577b3de2b493710c9c5c941e"],["/static/media/gangsta4.97026d89.jpg","97026d899e51efb7b2e7cbe6661222ab"],["/static/media/icons.9ea8e3d4.woff2","9ea8e3d4fceae3eb6e66716bc430122e"],["/static/media/politic.2bcb2528.jpg","2bcb2528533e292861c64e9e2aa406fc"],["/static/media/politics.2addae02.wav","2addae023027ca93e66aa2f277003e53"],["/static/media/pop.bef30e64.jpg","bef30e645ade6b4503d01c7f5cb93ea9"],["/static/media/putin.e3d76e61.jpg","e3d76e61534069fae3eacdb49cf3618a"],["/static/media/sport.4a7c1a6e.wav","4a7c1a6efda036a5ac8146dc370dd056"],["/static/media/sport2.4949bf9a.jpg","4949bf9a3a4223dfa7023e9cf08ad744"],["/static/media/sport3.0ed7b4bf.jpg","0ed7b4bf713cdddb053d07a53308e0cc"],["/static/media/sport4.71df1ca5.jpg","71df1ca585a742dda6cb5b3d88b07766"],["/static/media/trump.57bd52a4.jpg","57bd52a4278045f0c0f88b4aaa47397a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});