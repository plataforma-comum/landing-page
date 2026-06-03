import{q as d,r as y,B as R,j as e,t as h,L as I,c as l,e as S}from"./index-B3QPx-76.js";import{a as c}from"./youtube-DQAqAO-e.js";import"./maps-wi6ce5-h.js";import"./firebase-C2tVwIQW.js";import"./hls-Cp2x8l1r.js";import"./supabase-D0gsiSak.js";const k=680,j=120,m=480,F=160,C="https://cdn.builder.io/api/v1/image/assets%2F8decac7d217b4e02a090384b68b42488%2F23a546d531574df3b5ed68a926341c55";function O({mainZone:r,mainItemIndex:o,isActive:g,categoriaAtiva:p,onCategoriaChange:x,ufFiltro:n}){const[w,N]=c.useState(0),b=c.useRef([]),u=c.useRef({});c.useEffect(()=>{r==="rail-0"&&d[o]&&x(d[o].id)},[r,o,x]);const v=c.useMemo(()=>d.filter(i=>i.id!=="todos"),[]),$=c.useMemo(()=>{if(p==="todos")return v.map(s=>({cat:s,cursos:y(s.id,n)}));const i=d.find(s=>s.id===p);return i?[{cat:i,cursos:y(i.id,n)}]:[]},[p,v,n]),q=c.useMemo(()=>n?R.find(i=>i.uf===n)?.name:null,[n]);return c.useEffect(()=>{if(!g)return;let i=0;if(r==="rail-0")i=0;else{const s=r.match(/^rail-(\d+)$/);if(s){const a=parseInt(s[1]);a>=1&&(i=k+j+(a-1)*m-F)}}N(i)},[r,g]),c.useEffect(()=>{if(r==="rail-0"&&b.current[o]){b.current[o]?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"});return}const i=r.match(/^rail-(\d+)$/);if(i){const s=parseInt(i[1]);if(s>=1){const a=u.current[s];(a&&a[o])?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}}},[r,o]),e.jsxs("main",{className:"qualifica-page",children:[e.jsxs("div",{className:"qualifica-scroll-track",style:{transform:`translateY(-${w}px)`},children:[e.jsx("section",{className:"qualifica-hero",style:{backgroundImage:`url(${C})`},children:e.jsxs("div",{className:"qualifica-hero-content",children:[e.jsx("h1",{className:"qualifica-hero-title",style:h.display.large,children:"Cursos gratuitos e remotos para você"}),q&&e.jsxs("span",{className:"qualifica-uf-chip",style:h.body.medium,children:[e.jsx(I,{size:20,className:"qualifica-uf-chip-icon"}),"Mostrando cursos de ",q]}),e.jsx("span",{className:"qualifica-hero-tagline",style:h.body.large,children:"Trabalho e Emprego · Governo do Brasil"})]})}),e.jsx("nav",{className:"qualifica-chips-rail",children:e.jsx("div",{className:"qualifica-chips-track",children:d.map((i,s)=>{const a=p===i.id,t=r==="rail-0"&&o===s;return e.jsx("button",{ref:f=>{b.current[s]=f},className:"qualifica-chip",style:{fontFamily:"Plus Jakarta Sans",fontSize:28,fontWeight:500,lineHeight:"120%",color:a?"#11172B":l.text.primaryInverse,background:a?"#FFF":"transparent",border:t?`4px solid ${l.background.brandPrimary}`:a?"4px solid #FFF":"4px solid transparent"},onClick:()=>x(i.id),children:i.nome},i.id)})})}),$.map((i,s)=>{const a=s+1;return u.current[a]||(u.current[a]=[]),e.jsxs("section",{className:"qualifica-cursos-section",children:[e.jsx("h2",{className:"qualifica-cursos-title",style:{...h.display.small,color:l.text.primaryInverse},children:i.cat.nome}),e.jsx("div",{className:"qualifica-cursos-rail-outer",children:e.jsx("div",{className:"qualifica-cursos-rail",children:i.cursos.map((t,f)=>{const E=r===`rail-${a}`&&o===f;return e.jsx("div",{ref:H=>{u.current[a]||(u.current[a]=[]),u.current[a][f]=H},className:"qualifica-curso-item",children:e.jsx(S,{variant:"image-text",image:t.thumbnail,label:t.instituicao,title:t.titulo,timestamp:`${t.modalidade} · ${t.cargaHoraria}h`,isFocused:E})},t.id)})})})]},i.cat.id)}),e.jsx("div",{className:"qualifica-bottom-spacer"})]}),e.jsx("style",{children:`
        .qualifica-page {
          flex: 1;
          overflow: clip;
          position: relative;
          height: 100vh;
          background: ${l.background.baseInverse};
        }
        .qualifica-scroll-track {
          position: absolute;
          inset: 0 0 auto 0;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .qualifica-hero {
          height: ${k}px;
          width: 100%;
          background-color: ${l.background.baseInverse};
          background-repeat: no-repeat;
          background-size: cover;
          background-position: right center;
          position: relative;
          display: flex;
          align-items: center;
        }
        .qualifica-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            ${l.background.baseInverse} 0%,
            ${l.background.baseInverse} 35%,
            rgba(17, 23, 43, 0.6) 55%,
            rgba(17, 23, 43, 0) 75%
          );
        }
        .qualifica-hero-content {
          position: relative;
          padding: 0 64px 0 152px;
          max-width: 60%;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .qualifica-hero-title {
          margin: 0;
          color: ${l.text.primaryInverse};
        }
        .qualifica-hero-tagline {
          color: ${l.text.secondaryInverse};
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .qualifica-uf-chip {
          color: ${l.text.secondaryInverse};
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .qualifica-chips-rail {
          height: ${j}px;
          display: flex;
          align-items: center;
        }
        .qualifica-chips-track {
          display: flex;
          flex-direction: row;
          gap: 24px;
          padding: 0 64px;
          overflow-x: auto;
          overflow-y: visible;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-behavior: smooth;
          width: 100%;
          box-sizing: border-box;
        }
        .qualifica-chips-track::-webkit-scrollbar { display: none; }
        .qualifica-chip {
          border-radius: 100px;
          padding: 0 24px;
          height: 72px;
          cursor: pointer;
          outline: none;
          transition: all 0.2s ease-out;
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }
        .qualifica-cursos-section {
          padding-top: 32px;
        }
        .qualifica-cursos-title {
          padding-left: 64px;
          margin: 0 0 32px 0;
        }
        .qualifica-cursos-rail-outer {
          position: relative;
          width: 100%;
          height: ${m}px;
          overflow: visible;
        }
        .qualifica-cursos-rail {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: row;
          gap: 32px;
          padding: 0 64px;
          overflow-x: auto;
          overflow-y: visible;
          align-items: flex-start;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-behavior: smooth;
          box-sizing: border-box;
        }
        .qualifica-cursos-rail::-webkit-scrollbar { display: none; }
        .qualifica-curso-item {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .qualifica-bottom-spacer {
          height: ${m}px;
        }
      `})]})}export{O as default};
