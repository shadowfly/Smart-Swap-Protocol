(this.webpackJsonpsmartswap=this.webpackJsonpsmartswap||[]).push([[0],{852:function(e,n,t){"use strict";var r=t(7),o=t(2),a=t(0),i=t.n(a),c=t(3),u=t(10),l=t(77),s=t(6),f=t(18),d=t(854),m=t(100),b=t(238),p=t.n(b);function v(){var e=Object(o.a)(["\n  color: ",";\n"]);return v=function(){return e},e}function h(){var e=Object(o.a)(["\n    left: 2px;\n    top: 50px;\n  "]);return h=function(){return e},e}function g(){var e=Object(o.a)(["\n  position: absolute;\n  width: 228px;\n  right: 110px;\n  top: 4px;\n  z-index: 10;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.6rem 1rem;\n  line-height: 150%;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 8px;\n  animation: "," 0.15s linear;\n  color: ",";\n  font-style: italic;\n\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.04);\n\n  ","\n"]);return g=function(){return e},e}function O(){var e=Object(o.a)(["\n  from {\n    opacity : 0;\n  }\n\n  to {\n    opacity : 1;\n  }\n"]);return O=function(){return e},e}function j(){var e=Object(o.a)(["\n  height: 18px;\n  width: 18px;\n"]);return j=function(){return e},e}function y(){var e=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n  margin-left: 0.4rem;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"]);return y=function(){return e},e}function E(){var e=Object(o.a)(["\n  position: absolute;\n  right: 1rem;\n  top: 14px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n\n  & > * {\n    height: 14px;\n    width: 14px;\n  }\n"]);return E=function(){return e},e}function w(){var e=Object(o.a)(["\n  color: #aeaeae;\n"]);return w=function(){return e},e}function x(){var e=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-items: flex-start;\n  & > * {\n    margin-right: 6px;\n  }\n"]);return x=function(){return e},e}function k(){var e=Object(o.a)(["\n  background: rgba(243, 190, 30, 0.1);\n  position: relative;\n  padding: 1rem;\n  border: 0.5px solid #f3be1e;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr;\n  grid-row-gap: 10px;\n"]);return k=function(){return e},e}function R(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n\n  button {\n    max-width: 20rem;\n  }\n"]);return R=function(){return e},e}var C=c.d.div(R()),T=c.d.div(k()),B=c.d.div(x()),L=Object(c.d)(m.a)(w()),M=c.d.div(E()),S=c.d.button(y()),z=c.d.img(j()),A=Object(c.e)(O()),P=Object(c.d)(C)(g(),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.mercuryGray}),A,(function(e){return e.theme.textColor}),(function(e){return e.theme.mediaWidth.upToSmall(h())})),N=c.d.div(v(),(function(e){return e.theme.textColor}));n.a=function(e){var n=e.onDismiss,t=e.urlAddedTokens,o=e.currency,c=Object(a.useState)(),m=Object(r.a)(c,2),b=m[0],v=m[1],h=Object(u.n)().chainId,g=Object(l.d)(o),O=g.symbol,j=g.name,y=t.hasOwnProperty(o);return i.a.createElement(T,null,i.a.createElement(M,{onClick:function(){return n()}},i.a.createElement(L,{alt:"close icon"})),i.a.createElement(B,{style:{fontSize:"12px"}},i.a.createElement(N,null,y?"Token imported by URL ":"Token imported by user"),i.a.createElement(S,{onClick:function(){v(!b)},onMouseEnter:function(){v(!0)},onMouseLeave:function(){v(!1)}},i.a.createElement(z,{src:p.a,alt:"popup"})),b?i.a.createElement(P,null,i.a.createElement(N,null,"The Uniswap smart contracts are designed to support any ERC20 token on Ethereum. Any token can be loaded into the interface by entering its Ethereum address into the search field or passing it as a URL parameter. Be careful when interacting with imported tokens as they have not been verified.")):""),i.a.createElement(B,null,i.a.createElement(d.a,{address:o}),i.a.createElement("div",{style:{fontWeight:500}},j&&O?j+" ("+O+")":""),i.a.createElement(f.d,{style:{fontWeight:400},href:Object(s.n)(h,o,"address")},"(View on Etherscan)")),i.a.createElement(B,{style:{fontSize:"12px",fontStyle:"italic"}},i.a.createElement(N,null,"Please verify the legitimacy of this token before making any transactions.")))}},854:function(e,n,t){"use strict";t.d(n,"a",(function(){return E}));var r=t(7),o=t(108),a=t(2),i=t(0),c=t.n(i),u=t(3),l=t(6);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function f(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=c.a.createElement("g",null,c.a.createElement("polygon",{fill:"#343434",points:"127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"}),c.a.createElement("polygon",{fill:"#8C8C8C",points:"127.962 0 0 212.32 127.962 287.959 127.962 154.158"}),c.a.createElement("polygon",{fill:"#3C3C3B",points:"127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"}),c.a.createElement("polygon",{fill:"#8C8C8C",points:"127.962 416.9052 127.962 312.1852 0 236.5852"}),c.a.createElement("polygon",{fill:"#141414",points:"127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"}),c.a.createElement("polygon",{fill:"#393939",points:"0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"})),m=function(e){var n=e.svgRef,t=e.title,r=f(e,["svgRef","title"]);return c.a.createElement("svg",s({width:"256px",height:"417px",viewBox:"0 0 256 417",preserveAspectRatio:"xMidYMid",ref:n},r),t?c.a.createElement("title",null,t):null,d)},b=c.a.forwardRef((function(e,n){return c.a.createElement(m,s({svgRef:n},e))}));t.p;function p(){var e=Object(a.a)(["\n  width: ",";\n  height: ",";\n"]);return p=function(){return e},e}function v(){var e=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ",";\n  height: ",";\n"]);return v=function(){return e},e}function h(){var e=Object(a.a)(["\n  width: ",";\n  height: ",";\n  background-color: white;\n  border-radius: 1rem;\n"]);return h=function(){return e},e}var g={},O=u.d.img(h(),(function(e){return e.size}),(function(e){return e.size})),j=u.d.span(v(),(function(e){return e.size}),(function(e){return e.size})),y=Object(u.d)(b)(p(),(function(e){return e.size}),(function(e){return e.size}));function E(e){var n=e.address,t=e.size,a=void 0===t?"1rem":t,u=Object(o.a)(e,["address","size"]),s=Object(i.useState)(!1),f=Object(r.a)(s,2),d=f[0],m=f[1],b="";return"ETH"===n?c.a.createElement(y,{size:a}):d||g[n]?c.a.createElement(j,Object.assign({},u,{size:a}),c.a.createElement("span",{role:"img","aria-label":"Thinking"},"\ud83e\udd14")):(b=function(e){return"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/".concat(Object(l.A)(e),"/logo.png")}(n.toLowerCase()),c.a.createElement(O,Object.assign({},u,{alt:n,src:b,size:a,onError:function(){g[n]=!0,m(!0)}})))}},872:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(0),o=t.n(r);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createElement("path",{d:"M11.4673 6L6.23364 1L0.999995 6",stroke:"#388DFF"}),u=function(e){var n=e.svgRef,t=e.title,r=i(e,["svgRef","title"]);return o.a.createElement("svg",a({width:12,height:7,viewBox:"0 0 12 7",fill:"none",ref:n},r),t?o.a.createElement("title",null,t):null,c)},l=o.a.forwardRef((function(e,n){return o.a.createElement(u,a({svgRef:n},e))}));t.p},907:function(e,n,t){"use strict";t.d(n,"a",(function(){return Ue}));var r=t(4),o=t(13),a=t.n(o),i=t(28),c=t(7),u=t(2),l=t(0),s=t.n(l),f=t(101),d=t(49),m=t(15),b=t(24),p=t(3),v=t(908),h=t.n(v),g=t(11),O=t(914),j=(t(909),t(35)),y=t(18),E=t(10),w=t(6),x=t(910),k=t(144),R=t(854),C=t(244),T=t.n(C),B=t(78),L=t(77),M=t(73),S=t(100),z=t(243),A=t.n(z);function P(){var e=Object(u.a)(["\n  margin: 0 0.25rem 0 0.25rem;\n  color: ",";\n  opacity: 0.6;\n"]);return P=function(){return e},e}function N(){var e=Object(u.a)(["\n  margin: 0 0.25rem 0 0.25rem;\n"]);return N=function(){return e},e}function H(){var e=Object(u.a)(["\n  ",";\n  align-items: flex-end;\n"]);return H=function(){return e},e}function W(){var e=Object(u.a)(["\n  font-size: 1rem;\n  line-height: 1.5rem;\n  color: ",";\n"]);return W=function(){return e},e}function G(){var e=Object(u.a)(["\n  font-size: 1rem;\n  line-height: 20px;\n"]);return G=function(){return e},e}function D(){var e=Object(u.a)(["\n  color: ",";\n"]);return D=function(){return e},e}function U(){var e=Object(u.a)(["\n  color: ",";\n"]);return U=function(){return e},e}function V(){var e=Object(u.a)(["\n  ",";\n  margin-left: 1rem;\n"]);return V=function(){return e},e}function F(){var e=Object(u.a)(["\n  ","\n  align-items : center;\n"]);return F=function(){return e},e}function Y(){var e=Object(u.a)(["\n    padding: 0.8rem 1rem;\n    padding-right: 2rem;\n  "]);return Y=function(){return e},e}function I(){var e=Object(u.a)(["\n  ","\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  cursor: pointer;\n  user-select: none;\n\n  #symbol {\n    color: ",";\n  }\n\n  :hover {\n    background-color: ",";\n  }\n\n  ","\n"]);return I=function(){return e},e}function _(){var e=Object(u.a)(["\n  flex-grow: 1;\n  height: 100%;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n"]);return _=function(){return e},e}function K(){var e=Object(u.a)(["\n  ","\n  align-items: center;\n  padding: 1rem 1.5rem;\n  margin: 0.25rem 0.5rem;\n  justify-content: center;\n  user-select: none;\n"]);return K=function(){return e},e}function $(){var e=Object(u.a)(["\n  ","\n  justify-content: flex-start;\n  padding: 0.5rem 1.5rem;\n  background-color: ",";\n"]);return $=function(){return e},e}function X(){var e=Object(u.a)(["\n  position: absolute;\n  right: 1rem;\n  top: 14px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]);return X=function(){return e},e}function J(){var e=Object(u.a)(["\n  path {\n    stroke: ",";\n  }\n"]);return J=function(){return e},e}function Z(){var e=Object(u.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0px 0px 0px 1rem;\n  height: 60px;\n"]);return Z=function(){return e},e}function q(){var e=Object(u.a)(["\n  ","\n  width: 100%;\n"]);return q=function(){return e},e}function Q(){var e=Object(u.a)(["\n  color: ",";\n  :hover {\n    cursor: pointer;\n    color: ",";\n  }\n"]);return Q=function(){return e},e}function ee(){var e=Object(u.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]);return ee=function(){return e},e}function ne(){var e=Object(u.a)(["\n  ","\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ",";\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(u.a)(["\n  border-radius: 1.25rem;\n  border: 1px solid ",";\n\n  background-color: ",";\n  :focus-within {\n    border: 1px solid ",";\n  }\n"]);return te=function(){return e},e}function re(){var e=Object(u.a)(["\n  ","\n  box-shadow: 0 4px 8px 0 ",";\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ",";\n  z-index: 1;\n"]);return re=function(){return e},e}function oe(){var e=Object(u.a)(["\n  margin: 0 0.5rem 0 0.5rem;\n  height: 35%;\n\n  path {\n    stroke: ",";\n  }\n"]);return oe=function(){return e},e}function ae(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return ae=function(){return e},e}function ie(){var e=Object(u.a)(["\n  align-items: center;\n  font-size: 1rem;\n  color: ",";\n  height: 2rem;\n  border: 1px solid ",";\n  border-radius: 2.5rem;\n  background-color: ",";\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n\n  :hover {\n    border: 1px solid\n      ",";\n  }\n\n  :focus {\n    border: 1px solid ",";\n  }\n\n  :active {\n    background-color: ",";\n  }\n"]);return ie=function(){return e},e}function ce(){var e=Object(u.a)(["\n  min-height: 2.5rem;\n  flex-shrink: 0;\n  text-align: left;\n  padding-left: 1.6rem;\n  background-color: ",";\n"]);return ce=function(){return e},e}function ue(){var e=Object(u.a)(["\n  font-size: 1.5rem;\n  color: ",";\n  background-color: ",";\n  -moz-appearance: textfield;\n"]);return ue=function(){return e},e}function le(){var e=Object(u.a)(["\n  ","\n  align-items: center;\n\n  padding: 0.25rem 0.85rem 0.75rem;\n"]);return le=function(){return e},e}function se(){var e=Object(u.a)(["\n  ","\n  padding: 4px 50px 4px 15px;\n  margin-right: -40px;\n  line-height: 0;\n  height: 2rem;\n  align-items: center;\n  border-radius: 2.5rem;\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  background: ",";\n  border: 1px solid ",";\n  color: ",";\n"]);return se=function(){return e},e}var fe=m.ethers.utils.bigNumberify(1e3),de=p.d.button(se(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.zumthorBlue}),(function(e){return e.theme.royalBlue}),(function(e){return e.theme.royalBlue})),me=p.d.div(le(),(function(e){return e.theme.flexRowNoWrap})),be=Object(p.d)(y.a)(ue(),(function(e){var n=e.error,t=e.theme;return n&&t.salmonRed}),(function(e){return e.theme.inputBackground})),pe=Object(p.d)(y.a)(ce(),(function(e){return e.theme.concreteGray})),ve=p.d.button(ie(),(function(e){var n=e.selected,t=e.theme;return n?t.textColor:t.royalBlue}),(function(e){var n=e.selected,t=e.theme;return n?t.mercuryGray:t.royalBlue}),(function(e){var n=e.selected,t=e.theme;return n?t.concreteGray:t.zumthorBlue}),(function(e){var n=e.selected,t=e.theme;return n?Object(g.a)(.1,t.mercuryGray):Object(g.a)(.1,t.royalBlue)}),(function(e){var n=e.theme;return Object(g.a)(.1,n.royalBlue)}),(function(e){return e.theme.zumthorBlue})),he=p.d.span(ae()),ge=Object(p.d)(x.a)(oe(),(function(e){var n=e.selected,t=e.theme;return n?t.textColor:t.royalBlue})),Oe=p.d.div(re(),(function(e){return e.theme.flexColumnNoWrap}),(function(e){var n=e.theme;return Object(g.c)(.95,n.shadowColor)}),(function(e){return e.theme.inputBackground})),je=p.d.div(te(),(function(e){var n=e.error,t=e.theme;return n?t.salmonRed:t.mercuryGray}),(function(e){return e.theme.inputBackground}),(function(e){return e.theme.malibuBlue})),ye=p.d.div(ne(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.doveGray}),(function(e){var n=e.theme;return Object(g.a)(.2,n.doveGray)})),Ee=p.d.div(ee()),we=p.d.span(Q(),(function(e){var n=e.error,t=e.theme;return n&&t.salmonRed}),(function(e){var n=e.error,t=e.theme;return n&&Object(g.a)(.1,t.salmonRed)})),xe=p.d.div(q(),(function(e){return e.theme.flexColumnNoWrap})),ke=p.d.div(Z()),Re=Object(p.d)(S.a)(J(),(function(e){return e.theme.textColor})),Ce=p.d.div(X()),Te=p.d.div($(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.concreteGray})),Be=p.d.div(K(),(function(e){return e.theme.flexRowNoWrap})),Le=p.d.div(_()),Me=p.d.div(I(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.doveGrey}),(function(e){return e.theme.tokenRowHover}),(function(e){return e.theme.mediaWidth.upToMedium(Y())})),Se=p.d.div(F(),(function(e){return e.theme.flexRowNoWrap})),ze=p.d.div(V(),(function(e){return e.theme.flexColumnNoWrap})),Ae=p.d.div(U(),(function(e){return e.theme.chaliceGray})),Pe=p.d.span(D(),(function(e){return e.theme.royalBlue})),Ne=p.d.div(G()),He=p.d.div(W(),(function(e){return e.theme.chaliceGray})),We=p.d.div(H(),(function(e){return e.theme.flexColumnNoWrap})),Ge=p.d.span(N()),De=Object(p.d)(y.e)(P(),(function(e){return e.theme.chaliceGray}));function Ue(e){var n=e.onValueChange,t=void 0===n?function(){}:n,r=e.allBalances,o=e.renderInput,u=e.onCurrencySelected,f=void 0===u?function(){}:u,b=e.title,p=e.description,v=e.extraText,h=e.extraTextClickHander,g=void 0===h?function(){}:h,j=e.errorMessage,y=e.disableUnlock,x=e.disableTokenSelect,k=e.selectedTokenAddress,C=void 0===k?"":k,T=e.showUnlock,S=e.value,z=e.urlAddedTokens,A=e.hideETH,P=void 0!==A&&A,N=Object(d.b)().t,H=Object(l.useState)(!1),W=Object(c.a)(H,2),G=W[0],D=W[1],U=Object(E.m)(C),V=Object(L.d)(C).exchangeAddress,F=Object(B.d)(C),Y=Object(B.e)(),I=Object(L.c)(),_=Object(E.n)().account,K=Object(M.c)(_,C);return s.a.createElement(Oe,null,s.a.createElement(je,{error:!!j},s.a.createElement(ye,null,s.a.createElement(Ee,null,s.a.createElement("span",null,b)," ",s.a.createElement("span",null,p)),s.a.createElement(we,{"data-tip":"Enter max",error:!!j,onClick:function(){g()}},s.a.createElement(O.a,{label:"Enter Max",style:{background:"hsla(0, 0%, 0%, 0.75)",color:"white",border:"none",borderRadius:"24px",padding:"0.5em 1em",marginTop:"-64px"}},s.a.createElement("span",null,v)))),"function"===typeof o?o():s.a.createElement(me,null,s.a.createElement(be,{type:"number",min:"0",step:"0.000000000000000001",error:!!j,placeholder:"0.0",onChange:function(e){return t(e.target.value)},onKeyPress:function(e){45===(e.which?e.which:e.keyCode)&&(e.preventDefault(),e.stopPropagation())},value:S}),!y&&T&&"ETH"!==C&&C?F?s.a.createElement(de,null,N("pending")):s.a.createElement(de,{onClick:Object(i.a)(a.a.mark((function e(){var n,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,e.next=3,U.estimate.approve(V,m.ethers.constants.MaxUint256).catch((function(e){console.log("Error setting max token approval.")}));case 3:if(n=e.sent){e.next=9;break}return e.next=7,U.estimate.approve(V,K);case 7:n=e.sent,t=!0;case 9:U.approve(V,t?K:m.ethers.constants.MaxUint256,{gasLimit:Object(w.b)(n,fe)}).then((function(e){Y(e,{approval:C})}));case 10:case"end":return e.stop()}}),e)})))},N("unlock")):null,s.a.createElement(ve,{selected:!!C,onClick:function(){x||D(!0)}},s.a.createElement(he,null,C?s.a.createElement(R.a,{address:C}):null,s.a.createElement(Ge,null,I[C]&&I[C].symbol||N("selectToken")),!x&&s.a.createElement(ge,{selected:!!C}))))),!x&&s.a.createElement(Ve,{isOpen:G,onDismiss:function(){D(!1)},urlAddedTokens:z,onTokenSelect:f,allBalances:r,hideETH:P}))}function Ve(e){var n=e.isOpen,t=e.onDismiss,o=e.onTokenSelect,a=e.urlAddedTokens,i=e.hideETH,u=Object(d.b)().t,p=Object(l.useState)(""),v=Object(c.a)(p,2),g=v[0],O=v[1],y=Object(L.d)(g).exchangeAddress,x=Object(L.c)(),C=Object(E.n)(),B=C.account,S=C.chainId,z=Object(M.e)(),P=Object(M.d)(),N=Object.keys(x).map((function(e){if(z&&P[B]&&P[B][e]&&P[B][e].value){var n=1,t=P[x[e].exchangeAddress];if(t&&t[e]&&t[e].value&&t.ETH&&t.ETH.value){var r=new b.BigNumber(t[e].value);n=new b.BigNumber(t.ETH.value).times(new b.BigNumber(10).pow(x[e].decimals)).div(r).div(new b.BigNumber(10).pow(18))}var o=z.times(n);return new b.BigNumber(P[B][e].value).times(o).div(new b.BigNumber(10).pow(x[e].decimals))}return null})),H=N&&Object.keys(x).reduce((function(e,n,t){return Object.assign(Object(r.a)({},n,N[t]),e)}),{}),W=Object(l.useMemo)((function(){return Object.keys(x).sort((function(e,n){if(x[e].symbol&&x[n].symbol){var t=x[e].symbol.toLowerCase(),r=x[n].symbol.toLowerCase();if(t==="ETH".toLowerCase()||r==="ETH".toLowerCase())return t===r?0:t==="ETH".toLowerCase()?-1:1;if(H[e]&&!H[n])return-1;if(H[n]&&!H[e])return 1;if(H[e]&&H[n]){var o=H[e],a=H[n];return o.gt(a)?-1:o.lt(a)?1:0}return t<r?-1:t>r?1:0}return 0})).map((function(e){var n,t;return"ETH"===e&&P[B]&&P[B][e]&&P[B][e].value?(n=Object(w.d)(m.ethers.utils.bigNumberify(P[B][e].value)),t=H[e]):P[B]&&P[B][e]&&P[B][e].value&&(n=Object(w.f)(m.ethers.utils.bigNumberify(P[B][e].value),x[e].decimals),t=H[e]),{name:x[e].name,symbol:x[e].symbol,address:e,balance:n,usdBalance:t}}))}),[P,x,H,B]),G=Object(l.useMemo)((function(){var e=W.filter((function(e){var n="0x"===g.slice(0,2);return Object.keys(e).map((function(t){return"address"===t?n&&"string"===typeof e[t]&&!!e[t].match(new RegExp(h()(g),"i")):"string"===typeof e[t]&&!!e[t].match(new RegExp(h()(g),"i"))})).some((function(e){return e}))}));return""===g?e:e.sort((function(e,n){return e.symbol.toLowerCase()===g.toLowerCase()?-1:1}))}),[W,g]);var D=Object(l.useRef)();function U(){O(""),t()}return s.a.createElement(k.a,{isOpen:n,onDismiss:U,minHeight:60,maxHeight:50,initialFocusRef:j.isMobile?void 0:D},s.a.createElement(xe,null,s.a.createElement(ke,null,s.a.createElement("p",null,u("selectToken")),s.a.createElement(Ce,{onClick:U},s.a.createElement(Re,{alt:"close icon"}))),s.a.createElement(Te,null,s.a.createElement("img",{src:T.a,alt:"search"}),s.a.createElement(pe,{ref:D,type:"text",placeholder:j.isMobile?u("searchOrPasteMobile"):u("searchOrPaste"),onChange:function(e){var n=e.target.value,t=Object(w.A)(n);O(t||n)}})),s.a.createElement(Le,null,Object(w.A)(g)&&void 0===y?s.a.createElement(Be,null,"Searching for Exchange..."):Object(w.A)(g)&&y===m.ethers.constants.AddressZero?s.a.createElement(s.a.Fragment,null,s.a.createElement(Be,null,u("noExchange")),s.a.createElement(Be,null,s.a.createElement(f.b,{to:"/create-exchange/".concat(g)},u("createExchange")))):G.length?G.map((function(e){var n=e.address,r=e.symbol,c=e.name,u=e.balance,l=e.usdBalance,f=a&&a.hasOwnProperty(n),d="ETH"!==n&&L.a[S]&&!L.a[S].hasOwnProperty(n)&&!f;return i&&"ETH"===n?null:s.a.createElement(Me,{key:n,onClick:function(){return function(e){O(""),o(e),t()}(n)}},s.a.createElement(Se,null,s.a.createElement(R.a,{address:n,size:"2rem"}),s.a.createElement(ze,null,s.a.createElement("div",null,s.a.createElement("span",{id:"symbol"},r),s.a.createElement(Pe,null,f&&"(Added by URL)"," ",d&&"(Added by user)")),s.a.createElement(Ae,null," ",c))),s.a.createElement(We,null,u?s.a.createElement(Ne,null,u&&(u>0||"<0.0001"===u)?u:"-"):B?s.a.createElement(De,{src:A.a,alt:"loader"}):"-",s.a.createElement(He,null,l&&!l.isNaN()?l.isZero()?"":l.lt(.01)?"<$0.01":"$"+Object(w.e)(l):"")))})):s.a.createElement(Be,null,u("noExchange")))))}},908:function(e,n,t){"use strict";var r=/[|\\{}()[\]^$+*?.-]/g;e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected a string");return e.replace(r,"\\$&")}},909:function(e,n,t){},910:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(0),o=t.n(r);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createElement("path",{d:"M0.97168 1L6.20532 6L11.439 1",stroke:"#AEAEAE"}),u=function(e){var n=e.svgRef,t=e.title,r=i(e,["svgRef","title"]);return o.a.createElement("svg",a({width:12,height:7,viewBox:"0 0 12 7",fill:"none",ref:n},r),t?o.a.createElement("title",null,t):null,c)},l=o.a.forwardRef((function(e,n){return o.a.createElement(u,a({svgRef:n},e))}));t.p},914:function(e,n,t){"use strict";t.d(n,"a",(function(){return D}));var r,o=t(0),a=t.n(o),i=0,c=function(){var e=Object(o.useState)(null),n=e[0],t=e[1];return Object(o.useEffect)((function(){return t(++i)}),[]),n},u=t(72),l=t(148),s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f={border:0,clip:"rect(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute"},d=function(e){return a.a.createElement("div",s({style:f},e))},m=t(85),b=["bottom","height","left","right","top","width"],p=new Map,v=function e(){var n=[];p.forEach((function(e,t){var r,o,a=t.getBoundingClientRect();r=a,o=e.rect,void 0===r&&(r={}),void 0===o&&(o={}),b.some((function(e){return r[e]!==o[e]}))&&(e.rect=a,n.push(e))})),n.forEach((function(e){e.callbacks.forEach((function(n){return n(e.rect)}))})),r=window.requestAnimationFrame(e)};var h=function(e,n){return{observe:function(){var t=0===p.size;p.has(e)?p.get(e).callbacks.push(n):p.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[n]}),t&&v()},unobserve:function(){var t=p.get(e);if(t){var o=t.callbacks.indexOf(n);o>=0&&t.callbacks.splice(o,1),t.callbacks.length||p.delete(e),p.size||cancelAnimationFrame(r)}}}},g=(t(1),Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}),O=function(e){var n=e.refs;return(0,e.props.children)({ref:function(e){return n.node=e},rect:e.state.rect})},j=function(e){var n=e.setState,t=e.refs,r=e.props;t.node?(t.observer=h(t.node,(function(e){r.onChange&&r.onChange(e),n({rect:e})})),r.observe&&t.observer.observe()):console.warn("You need to place the ref")},y=function(e){var n=e.refs,t=e.props,r=e.prevProps;t.observe&&!r.observe?n.observer.observe():!t.observe&&r.observe&&n.observer.unobserve()},E=function(e){e.refs.observer.unobserve()},w=function(e){return a.a.createElement(m.a,g({},e,{refs:{node:void 0,observer:void 0},initialState:{rect:void 0},didMount:j,didUpdate:y,willUnmount:E,render:O}))};function x(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=Object(o.useState)(null),r=t[0],a=t[1],i=Object(o.useRef)(null);return Object(o.useLayoutEffect)((function(){return i.current||(i.current=h(e.current,a)),n&&i.current.observe(),function(){return i.current.unobserve()}}),[n]),r}w.defaultProps={observe:!0};var k,R=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};function C(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}var T="idle",B="focused",L="visible",M={initial:T,states:(k={},k[T]={enter:G,on:{mouseenter:B,focus:L}},k[B]={enter:function(){clearTimeout(H),H=setTimeout((function(){return A("rest")}),100)},leave:function(){clearTimeout(H)},on:{mousemove:B,mouseleave:T,mousedown:"dismissed",blur:T,rest:L}},k[L]={on:{focus:B,mouseenter:B,mouseleave:"leavingVisible",blur:"leavingVisible",mousedown:"dismissed",selectWithKeyboard:"dismissed",globalMouseMove:"leavingVisible"}},k.leavingVisible={enter:function(){clearTimeout(W),W=setTimeout((function(){return A("timecomplete")}),500)},leave:function(){clearTimeout(W),G()},on:{mouseenter:L,focus:L,timecomplete:T}},k.dismissed={leave:function(){S.id=null},on:{mouseleave:T,blur:T}},k)},S={id:null},z=M.initial;function A(e,n){var t=M.states[z],r=t.on[e];if(!r)throw new Error('Unknown state for action "'+e+'" from state "'+z+'"');t.leave&&t.leave(),n&&(S=n);var o=M.states[r];o.enter&&o.enter(),z=r,P.forEach((function(e){return e(z,S)}))}var P=[];function N(e){return P.push(e),function(){P.splice(P.indexOf(e),1)}}var H=void 0;var W=void 0;function G(){S.id=null}function D(e){var n=e.children,t=e.label,r=e.ariaLabel,i=e.DEBUG_STYLE,l=C(e,["children","label","ariaLabel","DEBUG_STYLE"]),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.onMouseEnter,t=e.onMouseMove,r=e.onMouseLeave,a=e.onFocus,i=(e.onBlur,e.onKeyDown),l=e.onMouseDown,s=e.ref,f=e.DEBUG_STYLE,d="tooltip:"+c(),m=Object(o.useState)(!!f||S.id===d&&z===L),b=m[0],p=m[1],v=s||Object(o.useRef)(),h=x(v,b);Object(o.useEffect)((function(){return N((function(){S.id!==d||z!==L&&"leavingVisible"!==z?p(!1):p(!0)}))}),[d]),Object(o.useEffect)((function(){return Object(u.b)("tooltip")}));var g=function(){switch(z){case T:case L:case"leavingVisible":A("mouseenter",{id:d})}},O=function(){switch(z){case B:A("mousemove",{id:d})}},j=function(e){if(!window.__REACH_DISABLE_TOOLTIPS)switch(z){case T:case L:case"leavingVisible":A("focus",{id:d})}},y=function(){switch(z){case B:case L:case"dismissed":A("mouseleave")}},E=function(){if(S.id===d)switch(z){case B:case L:case"dismissed":A("blur")}},w=function(){if(S.id===d)switch(z){case B:case L:A("mousedown")}},k=function(e){if("Enter"===e.key||" "===e.key)switch(z){case L:A("selectWithKeyboard")}},R={"aria-describedby":d,"data-reach-tooltip-trigger":"",ref:v,onMouseEnter:Object(u.c)(n,g),onMouseMove:Object(u.c)(t,O),onFocus:Object(u.c)(a,j),onBlur:Object(u.c)(a,E),onMouseLeave:Object(u.c)(r,y),onKeyDown:Object(u.c)(i,k),onMouseDown:Object(u.c)(l,w)},C={id:d,triggerRect:h,isVisible:b};return[R,C,b]}({DEBUG_STYLE:i}),f=s[0],d=s[1];return a.a.createElement(o.Fragment,null,Object(o.cloneElement)(o.Children.only(n),f),a.a.createElement(U,R({label:t,ariaLabel:r},d,l)))}var U=Object(o.forwardRef)((function(e,n){var t=e.label,r=e.ariaLabel,o=e.position,i=e.isVisible,c=e.id,u=e.triggerRect,s=C(e,["label","ariaLabel","position","isVisible","id","triggerRect"]);return i?a.a.createElement(l.a,null,a.a.createElement(V,R({label:t,ariaLabel:r,position:o,isVisible:i,id:c,triggerRect:u,ref:n},s))):null})),V=Object(o.forwardRef)((function(e,n){var t=e.label,r=e.ariaLabel,i=e.position,c=void 0===i?Y:i,u=e.isVisible,l=e.id,s=e.triggerRect,f=e.style,m=C(e,["label","ariaLabel","position","isVisible","id","triggerRect","style"]),b=null!=r,p=Object(o.useRef)(),v=x(p,u);return a.a.createElement(o.Fragment,null,a.a.createElement("div",R({"data-reach-tooltip":!0,role:b?void 0:"tooltip",id:b?void 0:l,children:t,style:R({},f,F(c,s,v)),ref:function(e){p.current=e,n&&n(e)}},m)),b&&a.a.createElement(d,{role:"tooltip",id:l},r))})),F=function(e,n,t){return!t?{visibility:"hidden"}:e(n,t)},Y=function(e,n){var t={left:e.left+window.pageXOffset+"px",top:e.top+e.height+window.pageYOffset+"px"},r={top:e.top-n.height<0,right:window.innerWidth<e.left+n.width,bottom:window.innerHeight<e.bottom+n.height+8,left:e.left-n.width<0},o=r.bottom&&!r.top;return R({},t,{left:r.right&&!r.left?e.right-n.width+window.pageXOffset+"px":e.left+window.pageXOffset+"px",top:o?e.top-8-n.height+window.pageYOffset+"px":e.top+8+e.height+window.pageYOffset+"px"})}}}]);
//# sourceMappingURL=0.9e2503e3.chunk.js.map