import{j as e,c as i,t as d}from"./index-B3QPx-76.js";import{a as r}from"./youtube-DQAqAO-e.js";import{Q as w}from"./maps-wi6ce5-h.js";import"./firebase-C2tVwIQW.js";import"./hls-Cp2x8l1r.js";import"./supabase-D0gsiSak.js";const j={alta:"Alta",media:"Média",baixa:"Baixa"},k={alta:"#00AF51",media:"#F2C744",baixa:"#F25C44"};function L({tone:a,color:s}){return a==="alta"?e.jsx("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M5.665 30L3.332 27.667L15.665 15.25L22.332 21.917L30.999 13.333H26.665V10H36.665V20H33.332V15.667L22.332 26.667L15.665 20L5.665 30Z",fill:s})}):a==="baixa"?e.jsx("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M5.665 10L3.332 12.333L15.665 24.75L22.332 18.083L30.999 26.667H26.665V30H36.665V20H33.332V24.333L22.332 13.333L15.665 20L5.665 10Z",fill:s})}):e.jsx("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M30 13.333L26.667 16.667H6.667V23.333H26.667L30 26.667L36.667 20L30 13.333Z",fill:s})})}function $({curso:a,isActive:s,onBack:l}){const[n,p]=r.useState(1),[x,f]=r.useState(!1),[u,o]=r.useState(!1),g=r.useRef(null);r.useEffect(()=>{s&&(p(1),f(!1),o(!1),g.current?.focus())},[s]);const c=r.useCallback(t=>{x||(f(!0),window.setTimeout(t,200))},[x]),h=r.useCallback(t=>{if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Enter","Escape","Backspace"].includes(t.key)&&(t.preventDefault(),t.stopPropagation(),t.nativeEvent.stopImmediatePropagation()),u){(t.key==="Enter"||t.key==="Escape"||t.key==="Backspace")&&o(!1);return}switch(t.key){case"ArrowUp":p(0);break;case"ArrowDown":p(1);break;case"Enter":n===0?o(!0):c(l);break;case"Escape":case"Backspace":c(l);break}},[n,l,u,c]),m=a.empregabilidade??"media",b=j[m],y=k[m],v=a.salarioMedio?a.salarioMedio.toLocaleString("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0}):"—";return e.jsxs("div",{ref:g,tabIndex:0,className:`curso-detail-overlay${x?" is-closing":""}`,onKeyDown:h,role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"curso-detail-modal",children:[e.jsxs("section",{className:"curso-detail-card-top",children:[e.jsxs("header",{className:"curso-detail-header",children:[e.jsx("img",{className:"curso-detail-logo",src:a.logoInstituicao,alt:a.instituicao}),e.jsxs("div",{className:"curso-detail-heading",children:[e.jsx("h1",{className:"curso-detail-title",children:a.titulo}),e.jsx("span",{className:"curso-detail-instituicao",children:a.instituicaoFull??a.instituicao})]})]}),e.jsxs("div",{className:"curso-detail-metrics",children:[e.jsxs("div",{className:"curso-detail-metric",children:[e.jsx("span",{className:"curso-detail-metric-value",children:v}),e.jsx("span",{className:"curso-detail-metric-label",children:"Salário médio"})]}),e.jsxs("div",{className:"curso-detail-metric",children:[e.jsxs("div",{className:"curso-detail-metric-row",children:[e.jsx("span",{className:"curso-detail-metric-value",children:b}),e.jsx(L,{tone:m,color:y})]}),e.jsx("span",{className:"curso-detail-metric-label",children:"Empregabilidade"})]})]}),(a.cbo||a.cboDescricao)&&e.jsxs("div",{className:"curso-detail-cbo",children:[a.cbo&&e.jsx("h2",{className:"curso-detail-cbo-title",children:a.cbo}),a.cboDescricao&&e.jsx("p",{className:"curso-detail-cbo-desc",children:a.cboDescricao})]})]}),e.jsxs("section",{className:"curso-detail-card-bottom",children:[e.jsx("button",{className:`curso-detail-btn curso-detail-btn-ghost ${n===0?"is-focused":""}`,onClick:()=>o(!0),children:"Fazer inscrição"}),e.jsx("button",{className:`curso-detail-btn curso-detail-btn-primary ${n===1?"is-focused":""}`,onClick:()=>c(l),children:"Fechar"})]})]}),u&&e.jsx("div",{onClick:()=>o(!1),style:{position:"fixed",inset:0,zIndex:240,background:"rgba(17, 23, 43, 0.85)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs("div",{onClick:t=>t.stopPropagation(),style:{background:i.background.primary,borderRadius:"24px",padding:"40px",display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",maxWidth:"480px"},children:[e.jsx(w,{value:a.inscricaoUrl??a.qualificaUrl,size:320,bgColor:i.background.primary,fgColor:i.text.primary}),e.jsx("h2",{style:{...d.headline.large,color:i.text.primary,margin:0,textAlign:"center"},children:a.titulo}),e.jsx("span",{style:{...d.body.medium,color:i.text.secondary,textAlign:"center"},children:a.instituicaoFull??a.instituicao}),e.jsx("span",{style:{...d.body.medium,color:i.text.primary,textAlign:"center"},children:"Aponte a câmera do celular para fazer sua inscrição"}),e.jsx("span",{style:{...d.label.small,color:i.text.secondary,textAlign:"center"},children:"OK ou Voltar para fechar"})]})}),e.jsx("style",{children:`
        .curso-detail-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          outline: none;
          z-index: 220;
          animation: curso-detail-overlay-in 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .curso-detail-overlay.is-closing {
          animation: curso-detail-overlay-out 200ms cubic-bezier(0.4, 0, 1, 1) forwards;
        }
        .curso-detail-modal {
          position: relative;
          width: 960px;
          max-width: calc(100vw - 64px);
          max-height: calc(100vh - 64px);
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
          border-radius: 24px;
          background-color: ${i.background.baseInverse};
          box-shadow: 0 4px 37.5px 45px rgba(0, 0, 0, 0.25);
          will-change: opacity, transform;
          animation: curso-detail-modal-in 240ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .curso-detail-overlay.is-closing .curso-detail-modal {
          animation: curso-detail-modal-out 200ms cubic-bezier(0.4, 0, 1, 1) forwards;
        }
        @keyframes curso-detail-overlay-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes curso-detail-overlay-out {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes curso-detail-modal-in {
          from { opacity: 0; transform: translateY(8px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes curso-detail-modal-out {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to   { opacity: 0; transform: translateY(8px) scale(0.97); }
        }
        .curso-detail-card-top {
          position: relative;
          padding: 24px 32px 0;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .curso-detail-header {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 24px 0;
        }
        .curso-detail-logo {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: #FFF;
          object-fit: cover;
          flex-shrink: 0;
        }
        .curso-detail-heading {
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex: 1;
        }
        .curso-detail-title {
          margin: 0;
          color: ${i.text.primaryInverse};
          font-family: Roboto, 'Plus Jakarta Sans', sans-serif;
          font-size: 36px;
          font-weight: 400;
          line-height: 44px;
        }
        .curso-detail-instituicao {
          color: ${i.text.secondaryInverse};
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 145%;
          letter-spacing: 0.25px;
          text-transform: uppercase;
        }
        .curso-detail-metrics {
          display: flex;
          gap: 8px;
        }
        .curso-detail-metric {
          flex: 1;
          min-height: 120px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
          border-radius: 16px;
          background: ${i.background.primaryInverse};
        }
        .curso-detail-metric-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .curso-detail-metric-value {
          color: ${i.text.primaryInverse};
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 28px;
          font-weight: 500;
          line-height: 120%;
        }
        .curso-detail-metric-label {
          color: ${i.text.secondaryInverse};
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 145%;
          letter-spacing: 0.25px;
        }
        .curso-detail-cbo {
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          border-radius: 24px;
          background: ${i.background.primaryInverse};
        }
        .curso-detail-cbo-title {
          margin: 0;
          color: ${i.text.primaryInverse};
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 28px;
          font-weight: 500;
          line-height: 120%;
        }
        .curso-detail-cbo-desc {
          margin: 0;
          color: ${i.text.secondaryInverse};
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 24px;
          font-weight: 500;
          line-height: 145%;
          letter-spacing: 0.24px;
        }
        .curso-detail-card-bottom {
          position: relative;
          padding: 32px 32px 80px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .curso-detail-btn {
          width: 100%;
          height: 72px;
          padding: 0 24px;
          border: 4px solid transparent;
          border-radius: 100px;
          background: transparent;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 28px;
          font-weight: 500;
          line-height: 120%;
          cursor: pointer;
          outline: none;
          transition: all 0.2s ease-out;
        }
        .curso-detail-btn-ghost {
          color: ${i.text.primaryInverse};
        }
        .curso-detail-btn-ghost.is-focused {
          border-color: ${i.background.brandPrimary};
        }
        .curso-detail-btn-primary {
          color: ${i.text.primaryInverse};
        }
        .curso-detail-btn-primary.is-focused {
          background: #FFF;
          border-color: #FFF;
          color: ${i.text.primary};
        }
      `})]})}export{$ as default};
