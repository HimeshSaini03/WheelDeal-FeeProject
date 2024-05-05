"use strict";var ImportType;exports.init=exports.ImportType=void 0,exports.parse=parse,exports.ImportType=ImportType,function(A){A[A.Static=1]="Static",A[A.Dynamic=2]="Dynamic",A[A.ImportMeta=3]="ImportMeta",A[A.StaticSourcePhase=4]="StaticSourcePhase",A[A.DynamicSourcePhase=5]="DynamicSourcePhase"}(ImportType||(exports.ImportType=ImportType={}));const A=1===new Uint8Array(new Uint16Array([1]).buffer)[0];function parse(E,g="@"){if(!C)return init.then((()=>parse(E)));const I=E.length+1,w=(C.__heap_base.value||C.__heap_base)+4*I-C.memory.buffer.byteLength;w>0&&C.memory.grow(Math.ceil(w/65536));const K=C.sa(I-1);if((A?B:Q)(E,new Uint16Array(C.memory.buffer,K,I)),!C.parse())throw Object.assign(new Error(`Parse error ${g}:${E.slice(0,C.e()).split("\n").length}:${C.e()-E.lastIndexOf("\n",C.e()-1)}`),{idx:C.e()});const o=[],D=[];for(;C.ri();){const A=C.is(),Q=C.ie(),B=C.it(),g=C.ai(),I=C.id(),w=C.ss(),K=C.se();let D;C.ip()&&(D=k(E.slice(-1===I?A-1:A,-1===I?Q+1:Q))),o.push({n:D,t:B,s:A,e:Q,ss:w,se:K,d:I,a:g})}for(;C.re();){const A=C.es(),Q=C.ee(),B=C.els(),g=C.ele(),I=E.slice(A,Q),w=I[0],K=B<0?void 0:E.slice(B,g),o=K?K[0]:"";D.push({s:A,e:Q,ls:B,le:g,n:'"'===w||"'"===w?k(I):I,ln:'"'===o||"'"===o?k(K):K})}function k(A){try{return(0,eval)(A)}catch(A){}}return[o,D,!!C.f(),!!C.ms()]}function Q(A,Q){const B=A.length;let C=0;for(;C<B;){const B=A.charCodeAt(C);Q[C++]=(255&B)<<8|B>>>8}}function B(A,Q){const B=A.length;let C=0;for(;C<B;)Q[C]=A.charCodeAt(C++)}let C;const init=WebAssembly.compile((E="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","undefined"!=typeof Buffer?Buffer.from(E,"base64"):Uint8Array.from(atob(E),(A=>A.charCodeAt(0))))).then(WebAssembly.instantiate).then((({exports:A})=>{C=A}));var E;exports.init=init;