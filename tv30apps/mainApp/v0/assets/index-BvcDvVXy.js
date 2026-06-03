import{j as a,c as t,t as l}from"./index-B3QPx-76.js";import{a as s}from"./youtube-DQAqAO-e.js";import"./maps-wi6ce5-h.js";import"./firebase-C2tVwIQW.js";import"./hls-Cp2x8l1r.js";import"./supabase-D0gsiSak.js";function E({profiles:i,activeProfileId:x,onSelect:d,onManageAccount:p,onBack:g}){const[o,n]=s.useState("avatars"),[f,m]=s.useState(()=>{const e=i.findIndex(r=>r.id===x);return e>=0?e:0}),c=s.useRef({onSelect:d,onManageAccount:p,onBack:g});c.current={onSelect:d,onManageAccount:p,onBack:g};const u=s.useCallback(e=>{if(e.key==="Escape"||e.key==="Backspace"){e.stopImmediatePropagation(),e.preventDefault(),c.current.onBack();return}if(e.key==="ArrowLeft"){e.stopImmediatePropagation(),e.preventDefault(),o==="avatars"&&m(r=>Math.max(0,r-1));return}if(e.key==="ArrowRight"){e.stopImmediatePropagation(),e.preventDefault(),o==="avatars"&&m(r=>Math.min(i.length-1,r+1));return}if(e.key==="ArrowDown"){e.stopImmediatePropagation(),e.preventDefault(),o==="avatars"&&n("manage");return}if(e.key==="ArrowUp"){e.stopImmediatePropagation(),e.preventDefault(),o==="manage"&&n("avatars");return}if(e.key==="Enter")if(e.stopImmediatePropagation(),e.preventDefault(),o==="avatars"){const r=i[f];r&&c.current.onSelect(r)}else c.current.onManageAccount()},[o,f,i]);return s.useEffect(()=>(window.addEventListener("keydown",u,{capture:!0}),()=>window.removeEventListener("keydown",u,{capture:!0})),[u]),a.jsxs("div",{className:"profile-switcher",children:[a.jsx("style",{children:`
        .profile-switcher {
          position: fixed;
          inset: 0;
          z-index: 200;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 64px;
          padding: 80px 120px;
          background: ${t.background.baseInverse};
        }
        .profile-switcher__title {
          margin: 0;
          color: ${t.text.primaryInverse};
        }
        .profile-switcher__list {
          display: flex;
          gap: 48px;
          align-items: flex-start;
          justify-content: center;
        }
        .profile-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: inherit;
          color: inherit;
          transition: transform 0.2s ease;
        }
        .profile-card__avatar {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          background: ${t.background.primaryInverse};
          outline: 4px solid transparent;
          outline-offset: 4px;
          transition: outline-color 0.2s ease, box-shadow 0.2s ease;
        }
        .profile-card--active .profile-card__avatar {
          box-shadow: 0 0 0 3px ${t.background.brandPrimary} inset;
        }
        .profile-card--focused {
          transform: scale(1.05);
        }
        .profile-card--focused .profile-card__avatar {
          outline-color: #fff;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
        }
        .profile-card__name {
          margin: 0;
          color: ${t.text.primaryInverse};
          text-align: center;
        }
        .profile-card--focused .profile-card__name {
          color: #fff;
        }
        .profile-card__relation {
          margin: 0;
          color: ${t.text.secondaryInverse};
          text-align: center;
        }
        .profile-switcher__manage {
          padding: 18px 64px;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: transparent;
          color: ${t.text.primaryInverse};
          cursor: pointer;
          font-family: inherit;
          transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .profile-switcher__manage--focused {
          background: ${t.background.primary};
          color: ${t.text.primary};
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          border-color: transparent;
        }
        @media (max-width: 1100px) {
          .profile-switcher__list { gap: 32px; }
          .profile-card__avatar { width: 160px; height: 160px; }
        }
      `}),a.jsx("h1",{className:"profile-switcher__title",style:l.display.medium,children:"Quem está assistindo?"}),a.jsx("div",{className:"profile-switcher__list",role:"list",children:i.map((e,r)=>{const h=o==="avatars"&&r===f,y=e.id===x,_="profile-card"+(h?" profile-card--focused":"")+(y?" profile-card--active":"");return a.jsxs("button",{type:"button",role:"listitem",className:_,onMouseEnter:()=>{n("avatars"),m(r)},onClick:()=>d(e),children:[a.jsx("img",{className:"profile-card__avatar",src:e.avatar,alt:e.name}),a.jsx("h2",{className:"profile-card__name",style:l.headline.small,children:e.name}),a.jsx("p",{className:"profile-card__relation",style:l.body.small,children:e.relation})]},e.id)})}),a.jsx("button",{type:"button",className:"profile-switcher__manage"+(o==="manage"?" profile-switcher__manage--focused":""),style:{...l.body.large,fontWeight:600},onMouseEnter:()=>n("manage"),onClick:p,children:"Gerenciar conta"})]})}export{E as default};
