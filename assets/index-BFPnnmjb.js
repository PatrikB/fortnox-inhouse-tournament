(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const m=`
  <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-8">Hem</h1>
  
  <section class="mb-8">
      <div class="max-w">
        <div class="lg:py-14 p-10 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-800 flex items-center justify-between flex-col lg:flex-row">
          <div class="block text-center mb-5 lg:text-left lg:mb-0">
            <h2 class="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2">Anmälan stänger 22 augusti</h2>
            <p class="text-xl text-indigo-100">Dags för den fjärde upplagan av Fortnox interna CS2-turnering!</p>
          </div>
          <a href="https://forms.gle/Gx8cNftuERFVo3px5" target="_blank" class="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-emerald-600 font-semibold py-4 px-8 transition-all duration-500">Ta mig till anmälan
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                stroke="#003824"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
    
  <h2 class="text-2xl/7 font-bold sm:truncate sm:text-2xl sm:tracking-tight pb-3">Tidigare vinnare</h2>
  
  <div class="grid grid-flow-col grid-cols-3 mb-4 items-start">
    <div class="grid grid-flow-row mr-2">
      <table class="w-full border-collapse border">
        <caption class="caption-top">
            #1 - K+4
        </caption>
        <tbody>
            <tr><td class="border p-4 text-left">Patrik <strong>BJOERN</strong> Björn</td></tr>
            <tr><td class="border p-4 text-left">Rasmus <strong>TwiXx</strong> Klarefelt</td></tr>
            <tr><td class="border p-4 text-left">Casper <strong>KennyC</strong> Petersson</td></tr>
            <tr><td class="border p-4 text-left">Kristoffer <strong>Suavamente</strong> Jämtefors</td></tr>
            <tr><td class="border p-4 text-left">Samuel <strong>Samme</strong> Karlsson</td></tr>
        </tbody>
      </table>
    </div>
    
    <div class="grid grid-flow-row mr-2">
      <table class="w-full border-collapse border">
        <caption class="caption-top">
            #2 - team BJOERN
        </caption>
        <tbody>
            <tr><td class="border p-4 text-left">Patrik <strong>BJOERN</strong> Björn</td></tr>
            <tr><td class="border p-4 text-left">Emil <strong>wRoNg</strong> Carlsson</td></tr>
            <tr><td class="border p-4 text-left">Tommy <strong>trivial_tom</strong> Karlsson</td></tr>
            <tr><td class="border p-4 text-left">Johan <strong>Widiz</strong> Widenberg</td></tr>
            <tr><td class="border p-4 text-left">Martin <strong>kill3rbee</strong> Stengård</td></tr>
        </tbody>
      </table>
    </div>
    
    <div class="grid grid-flow-row mr-2">
      <table class="w-full border-collapse border">
        <caption class="caption-top">
            #3 - Team Inkognito
        </caption>
        <tbody>
            <tr><td class="border p-4 text-left">Pierre <strong>BabaPierre</strong> Abou Abboud</td></tr>
            <tr><td class="border p-4 text-left">Rasmus <strong>Mousn</strong> Lager</td></tr>
            <tr><td class="border p-4 text-left">Carl <strong>Cuuurl</strong> Pagels</td></tr>
            <tr><td class="border p-4 text-left">Oliver <strong>TaiLung</strong> Jovicic</td></tr>
            <tr><td class="border p-4 text-left">Rasmus <strong>TwiXx</strong> Klarefelt</td></tr>
        </tbody>
      </table>
    </div>
  </div>
`,g=`
  <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-8">Gruppspel</h1>
  
  <h2 class="font-bold sm:truncate sm:tracking-tight pb-3">Uppdateras så fort lagen är klara.</h2>
`,h=`
  <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-8">Slutspel</h1>
  
  <h2 class="font-bold sm:truncate sm:tracking-tight pb-3">Uppdateras så fort gruppspelet är klart.</h2>
`,i=[{firstname:"Patrik",surname:"Björn",nickname:"BJOERN",team:1,kills:0,deaths:0},{firstname:"Lukas",surname:"Karlsson",nickname:"Krak3N",team:1,kills:0,deaths:0},{firstname:"Emil",surname:"Carlsson",nickname:"wRoNg",team:1,kills:0,deaths:0},{firstname:"Joakim",surname:"Österberg",nickname:"Units",team:1,kills:0,deaths:0},{firstname:"Carl",surname:"Pagels",nickname:"Cuuurl",team:1,kills:0,deaths:0},{firstname:"Ludvig",surname:"Bengtsson",nickname:"Lolkana",team:1,kills:0,deaths:0},{firstname:"Elliot",surname:"Gustafsson",nickname:"ottyhard",team:1,kills:0,deaths:0},{firstname:"Edvin",surname:"Ström",nickname:"Amp3d",team:1,kills:0,deaths:0},{firstname:"Gunnar",surname:"Henson",nickname:"atlas",team:1,kills:0,deaths:0},{firstname:"Pontus",surname:"Johansson",nickname:"shzss",team:1,kills:0,deaths:0}],p=i.map((t,s)=>(++s,`<tr><td class="border p-4 text-left">${s}. ${t.firstname} <strong>${t.nickname}</strong> ${t.surname}</td></tr>`)),u=`
  <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-8">Deltagare</h1>
  
  <table class="w-full border-collapse border">
    <tbody>
        ${p.join("")}
    </tbody>
  </table>
`,f=`
  <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-8">Lag</h1>
  
  <h2 class="font-bold sm:truncate sm:tracking-tight pb-3">Uppdateras så fort lagen är lottade.</h2>
`,d=[{team:1,name:"N/A",games:0,wins:0,losses:0}],b=t=>t===void 0?"":d.map(s=>{if(s.team===t)return s.name}).join(""),x=i.map((t,s)=>{let l=t.kills/t.deaths||0,a="";s===0?a="bg-yellow-200":s===1?a="bg-gray-200":s===2&&(a="bg-amber-100");let e=d.find(r=>r.team===t.team);return`
        <tr>
            <td class="border p-4 text-left ${a}">${t.firstname} <strong>${t.nickname}</strong> ${t.surname}</td>
            <td class="border p-4 text-left ${a}">${b(e?.team)}</td>
            <td class="border p-4 text-right ${a}">${e?.games}</td>
            <td class="border p-4 text-right ${a}">${e?.wins}</td>
            <td class="border p-4 text-right ${a}">${e?.losses}</td>
            <td class="border p-4 text-right ${a}">${t.kills}</td>
            <td class="border p-4 text-right ${a}">${t.deaths}</td>
            <td class="border p-4 text-right ${a}">${l.toFixed(2)}</td>
        </tr>
    `}),k=`
  <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-8">Statistik</h1>
  
  <table class="w-full border-collapse border">
    <thead>
        <tr>
            <th class="p-4 text-left">Spelare</th>
            <th class="p-4 text-left">Lag</th>
            <th class="p-4 text-right">Matcher</th>
            <th class="p-4 text-right">Vinster</th>
            <th class="p-4 text-right">Förluster</th>
            <th class="p-4 text-right">K</th>
            <th class="p-4 text-right">D</th>
            <th class="p-4 text-right">K/D</th>
        </tr>
    </thead>
    <tbody>
        ${x.join("")}
    </tbody>
  </table>
`,w=`
  <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-8">Regler</h1>
  
  <p class="mb-8">Alla matcher spelas i bäst av 3 (BO3). Beroende på hur många lag som anmäler sig blir det slutspel alternativt möter de 2 bästa lagen poängmässigt varandra i en final.</p>
  
  <h2 class="text-2xl/7 font-bold sm:truncate sm:text-2xl sm:tracking-tight pb-3">Kartor och bans</h2>
  
  <p class="mb-3">Kartor som spelas är de som är aktiva <em>(Dust2, Mirage, Train, Nuke, Ancient, Overpass, Inferno)</em>. Då det är BO3 ser pick/ban ut likt;</p>
  
  <ul class="max-w-md space-y-1 list-disc list-inside mb-8">
    <li>Hemmalag bannar</li>
    <li>Bortalag bannar</li>
    <li>Hemmalag pickar (bortalag väljer sida)</li>
    <li>Bortalag pickar (hemmalag väljer sida)</li>
    <li>Hemmalag bannar</li>
    <li>Bortalag bannar</li>
    <li>Sista kartan som blir över spelas i decider (kniv om sida)</li>
  </ul>
  
  <h2 class="text-2xl/7 font-bold sm:truncate sm:text-2xl sm:tracking-tight pb-3">Servrar</h2>
  
  <p class="mb-8">Rekommenderar att spela era matcher på <a href="https://esplay.com" target="_blank">esplay</a>, där kan ni skapa en gather som lagen kan joina och sätta igång på smidigast sätt. Är inte detta möjligt så kan man köra privat matchmaking, här spelas det dock bara en övertid sedan är matchen över så man har det i åtanke.</p>
  
  <h2 class="text-2xl/7 font-bold sm:truncate sm:text-2xl sm:tracking-tight pb-3">Schema</h2>
  
  <p class="mb-8">Inget satt schema, utan lagen bestämmer själva när de vill spela. Alla gruppspelsmatcher behöver dock vara klara till <strong>TBD</strong>, alltså en match per vecka i snitt.</p>
  
  <h2 class="text-2xl/7 font-bold sm:truncate sm:text-2xl sm:tracking-tight pb-3">Frågor?</h2>
  
  <p>Information kommer primärt hållas i <a href="https://discord.gg/edCNCUKhGt" target="_blank">fortnox-gameon discord</a>, så se till att alla lagmedlemmar sitter där.</p>
`,v=[{path:"/",data:m},{path:"/groups",data:g},{path:"/playoffs",data:h},{path:"/participants",data:u},{path:"/teams",data:f},{path:"/stats",data:k},{path:"/rules",data:w}],n=()=>{const t=document.getElementById("root");if(!t)return;const s=v.find(a=>a.path==window.location.pathname||"/fortnox-inhouse-tournament"+a.path==window.location.pathname);if(!s)return;const l=s.data;t.style.opacity="0.0",setTimeout(()=>{t.innerHTML=l,t.style.opacity="1.0"},50)},c=()=>{document.querySelectorAll("nav a").forEach(t=>{t.href===window.location.href?(t.classList.add("bg-emerald-950"),t.classList.remove("bg-transparent")):(t.classList.remove("bg-emerald-950"),t.classList.add("bg-transparent"))})},y=t=>{if(!t)return;t.preventDefault();const s=t.target;s&&(history.pushState({},"newUrl",s.href),n(),c())},L=()=>{window.addEventListener("popstate",n),window.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("nav a").forEach(t=>{t.addEventListener("click",y)}),n(),c()})};L();const $=`
    <div class="md:flex flex-col md:flex-row md:min-h-screen sticky top-0 h-screen">
      <div @click.away="open = false" class="flex flex-col w-full md:w-64 text-white bg-emerald-900 flex-shrink-0" x-data="{ open: false }">
        <div class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
          <a href="./" class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Fortnox Inhouse Tournament #4</a>
          <button class="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline" @click="open = !open">
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
              <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <nav :class="{'block': open, 'hidden': !open}" class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
        <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-white focus:text-white hover:bg-emerald-950 focus:bg-emerald-95 focus:outline-none focus:shadow-outline" href="./">Hem</a>
          <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-white focus:text-white hover:bg-emerald-950 focus:bg-emerald-95 focus:outline-none focus:shadow-outline" href="./groups">Gruppspel</a>
          <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-white focus:text-white hover:bg-emerald-950 focus:bg-emerald-95 focus:outline-none focus:shadow-outline" href="./playoffs">Slutspel</a>
          <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-white focus:text-white hover:bg-emerald-950 focus:bg-emerald-95 focus:outline-none focus:shadow-outline" href="./participants">Deltagare</a>
          <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-white focus:text-white hover:bg-emerald-950 focus:bg-emerald-95 focus:outline-none focus:shadow-outline" href="./teams">Lag</a>
          <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-white focus:text-white hover:bg-emerald-950 focus:bg-emerald-95 focus:outline-none focus:shadow-outline" href="./stats">Statistik</a>
          <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-white focus:text-white hover:bg-emerald-950 focus:bg-emerald-95 focus:outline-none focus:shadow-outline" href="./rules">Regler</a>
        </nav>
      </div>
    </div>
`;document.querySelector("#app").innerHTML=`
    ${$}
    <div id="root" class="flex-1 w-full p-8"></div>
`;
