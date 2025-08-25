(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();const v=`
  <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-8">Hem</h1>
    
  <h2 class="text-2xl/7 font-bold sm:truncate sm:text-2xl sm:tracking-tight pb-3">Tidigare vinnare</h2>
  
  <div class="md:grid md:grid-flow-col md:grid-cols-3 md:mb-4 md:items-start">
    <div class="md:grid md:grid-flow-row md:mr-2 mb-4 md:mb-0">
      <table class="w-full border-collapse borde">
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
    
    <div class="md:grid md:grid-flow-row md:mr-2 mb-4 md:mb-0">
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
    
    <div class="md:grid md:grid-flow-row md:mr-2 mb-4 md:mb-0">
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
`,g=[{firstname:"Patrik",surname:"Björn",nickname:"BJOERN",captain:!0,team:1,kills:0,deaths:0},{firstname:"Eskil",surname:"Skarin",nickname:"skarre",captain:!1,team:1,kills:0,deaths:0},{firstname:"Rasmus",surname:"Lager",nickname:"Mousn",captain:!1,team:1,kills:0,deaths:0},{firstname:"Rickard",surname:"Lundby",nickname:"Phase",captain:!1,team:1,kills:0,deaths:0},{firstname:"Eric",surname:"Wahlgren",nickname:"Rasande Roland",captain:!1,team:1,kills:0,deaths:0},{firstname:"Carl",surname:"Pagels",nickname:"Cuuurl",captain:!0,team:2,kills:0,deaths:0},{firstname:"Håkan",surname:"Fröderberg",nickname:"Warken",captain:!1,team:2,kills:0,deaths:0},{firstname:"Pontus",surname:"Johansson",nickname:"shzss",captain:!1,team:2,kills:0,deaths:0},{firstname:"Gunnar",surname:"Henson",nickname:"atlas",captain:!1,team:2,kills:0,deaths:0},{firstname:"Petter",surname:"Wagander",nickname:"Biggie cheese",captain:!1,team:2,kills:0,deaths:0},{firstname:"Lukas",surname:"Karlsson",nickname:"Krak3N",captain:!0,team:3,kills:0,deaths:0},{firstname:"Emil",surname:"Carlsson",nickname:"wRoNg",captain:!1,team:3,kills:0,deaths:0},{firstname:"Edvin",surname:"Ström",nickname:"Amp3d",captain:!1,team:3,kills:0,deaths:0},{firstname:"Tommy",surname:"Karlsson",nickname:"trivial_tom",captain:!1,team:3,kills:0,deaths:0},{firstname:"Gustav",surname:"Larsson",nickname:"Are those Reebok or Nike?",captain:!1,team:3,kills:0,deaths:0},{firstname:"Joakim",surname:"Österberg",nickname:"Units",captain:!0,team:4,kills:0,deaths:0},{firstname:"Ludvig",surname:"Bengtsson",nickname:"Lolkana",captain:!1,team:4,kills:0,deaths:0},{firstname:"Jon",surname:"Jennemann",nickname:"kr4nk",captain:!1,team:4,kills:0,deaths:0},{firstname:"Elliot",surname:"Gustafsson",nickname:"ottyhard",captain:!1,team:4,kills:0,deaths:0},{firstname:"Joakim",surname:"Lodén",nickname:"Daimon",captain:!1,team:4,kills:0,deaths:0}],p=[{team:1,name:"team_BJOERN",members:[]},{team:2,name:"team_Cuuurl",members:[]},{team:3,name:"team_Krak3N",members:[]},{team:4,name:"team_Units",members:[]}];p.forEach(t=>{g.forEach(l=>{l.team===t.team&&t.members.push(l)})});const u=t=>t===void 0?"":p.map(l=>{if(l.team===t)return l.name}).join("");function w(t,l){const e={},n=l.filter(s=>s.group===t);return n.length===0?[]:(n.forEach(({team1:s,team2:r,games:c})=>{[s,r].forEach(d=>{e[d]||(e[d]={id:d,played:0,mapPlayed:0,won:0,mapWon:0,lost:0,mapLost:0,points:0,scored:0,conceded:0})});let i=0;c.forEach(({score1:d,score2:m})=>{d===null||m===null||(e[s].mapPlayed++,e[r].mapPlayed++,e[s].scored+=d,e[s].conceded+=m,e[r].scored+=m,e[r].conceded+=d,d>m?(e[s].mapWon++,e[r].mapLost++,i++):(e[r].mapWon++,e[s].mapLost++,i--))}),i!==0&&(e[s].played++,e[r].played++,i>0?(e[s].won++,e[s].points+=3,e[r].lost++):(e[r].won++,e[r].points+=3,e[s].lost++))}),Object.values(e).sort((s,r)=>r.points-s.points||r.scored-r.conceded-(s.scored-s.conceded)||r.scored-s.scored).map((s,r)=>({rank:r+1,...s})).map((s,r)=>{const{id:c,won:i,lost:d,points:m,scored:x,conceded:k}=s;return`
                <tr>
                    <td class="border p-4 text-left font-bold">${r+1}. ${u(c)}</td>
                    <td class="border p-4 text-left">${i}</td>
                    <td class="border p-4 text-left">${d}</td>
                    <td class="border p-4 text-left">${x-k}</td>
                    <td class="border p-4 text-left">${m}</td>
                </tr>
            `}).join(""))}const f=[{group:1,team1:1,team2:2,games:[{score1:null,score2:null,map:null,url:null},{score1:null,score2:null,map:null,url:null},{score1:null,score2:null,map:null,url:null}]},{group:1,team1:2,team2:3,games:[{score1:null,score2:null,map:null,url:null},{score1:null,score2:null,map:null,url:null},{score1:null,score2:null,map:null,url:null}]},{group:1,team1:3,team2:4,games:[{score1:null,score2:null,map:null,url:null},{score1:null,score2:null,map:null,url:null},{score1:null,score2:null,map:null,url:null}]},{group:1,team1:4,team2:1,games:[{score1:null,score2:null,map:null,url:null},{score1:null,score2:null,map:null,url:null},{score1:null,score2:null,map:null,url:null}]},{group:1,team1:1,team2:3,games:[{score1:null,score2:null,map:null,url:null},{score1:null,score2:null,map:null,url:null},{score1:null,score2:null,map:null,url:null}]},{group:1,team1:4,team2:2,games:[{score1:null,score2:null,map:null,url:null},{score1:null,score2:null,map:null,url:null},{score1:null,score2:null,map:null,url:null}]}];function y(t,l){const e=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>`,n=l.filter(a=>a.group===t);return n.length===0?[]:n.map(a=>{let o=`
                <div class="mb-12">
                    <h2 class="md:ml-3 md:text-center font-bold md:text-2xl/7 sm:truncate sm:tracking-tight mb-6">${u(a.team1)} <span class="font-light">vs.</span> ${u(a.team2)}</h2>
                    <div class="rounded-lg p-4 pt-8 md:p-8 md:pt-10 text-xs md:text-base bg-white shadow">
                        <div class="md:flex">
        `;return o+=a?.games.map(s=>{let r=`
                <div class="grow px-4 mb-4 md:mb-0">
            `,c="";s.url&&(c=`
                    <div class="inline-block float-right match-icons">
                        <a class="text-sm" href="${s.url}" target="_blank">Matchlänk ${e}</a>
                    </div>
                `);let i=s.score1!==null&&s.score2!==null,d=a?.games[0]?.score1!==null&&a?.games[0]?.score2!==null;return r+=`
                <table class="match-info w-full">
                    <caption class="caption-top rounded-lg uppercase shadow">${s.map?s.map:"-"} ${c}</caption>
                    <tbody>
                        <tr>
                            <td class="p-2 text-left ${i?s.score1>s.score2?"font-bold":"opacity-50":d?"line-through":""}">${u(a.team1)}</td>
                            <td class="p-2 text-right ${i?s.score1>s.score2?"font-bold":"opacity-50":""}">${s.score1?s.score1:"-"}</td>
                        </tr>
                        <tr>
                            <td class="p-2 text-left ${i?s.score2>s.score1?"font-bold":"opacity-50":d?"line-through":""}">${u(a.team2)}</td>
                            <td class="p-2 text-right ${i?s.score2>s.score1?"font-bold":"opacity-50":""}">${s.score2?s.score2:"-"}</td>
                        </tr>
                    </tbody>
                </table>
            `,r+=`
                </div>
            `,r}).join(""),o+=`
                    </div>
                </div>
            </div>
        `,o}).join("")}const $=`
  <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-8">Gruppspel</h1>
  
  <div class="md:grid md:grid-flow-col md:grid-cols-1 md:items-start">
    <div class="md:grid md:grid-flow-row md:mr-2">
      <table class="w-full border-collapse border">
        <thead>
            <tr>
                <th></th>
                <th class="p-4 text-left">W</th>
                <th class="p-4 text-left">L</th>
                <th class="p-4 text-left">RD</th>
                <th class="p-4 text-left">P</th>
            </tr>
        </thead>
        <tbody>
            ${w(1,f)}
        </tbody>
      </table>
      
      <div class="pt-12">
        ${y(1,f)}
      </div>
    </div>
  </div>
`,L=`
  <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-8">Slutspel</h1>
  
  <h2 class="font-bold sm:truncate sm:tracking-tight pb-3">Uppdateras så fort gruppspelet är klart.</h2>
`,P=g.map((t,l)=>(++l,`<tr><td class="border p-4 text-left">${l}. ${t.firstname} <strong>${t.nickname}</strong> ${t.surname}</td></tr>`)),E=`
  <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-8">Deltagare</h1>
  
  <table class="w-full border-collapse border">
    <tbody>
        ${P.join("")}
    </tbody>
  </table>
`;function S(){return p.map(t=>`
            <div class="md:grid md:grid-flow-row md:mr-2 mb-4 md:mb-0">
                <table class="w-full border-collapse border">
                    <caption class="caption-top">${t.name}</caption>
                    <tbody>
                        ${t.members.slice().sort((l,e)=>(e.captain?1:0)-(l.captain?1:0)).map(l=>`<tr>
                                <td class="border p-4 text-left ${l.captain?"bg-yellow-200":""}">${l.firstname} <strong>${l.nickname}</strong> ${l.surname}</td>
                            </tr>`).join("")}
                    </tbody>
                </table>
            </div>
        `).join("")}const R=`
  <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-8">Lag</h1>
  
  <div class="md:grid md:grid-flow-col md:grid-cols-4 md:items-start">
    ${S()}
  </div>
`;function B(t,l){const e={};return e[t]={id:t,played:0,mapPlayed:0,won:0,mapWon:0,lost:0,mapLost:0,points:0,scored:0,conceded:0},l.filter(a=>a.group===t).length===0||l.forEach(({team1:a,team2:o,games:s})=>{s.forEach(({score1:r,score2:c})=>{if(r===null||c===null)return;let i=0;e[t].mapPlayed++,a===t?(e[t].scored+=r,e[t].conceded+=c,r>c?(e[t].mapWon++,i++):(e[t].mapLost++,i--)):o===t&&(e[t].scored+=c,e[t].conceded+=r,c>r?(e[t].mapWon++,i++):(e[t].mapLost++,i--)),i!==0&&(e[t].played++,i>0,e[t].won++,e[t].points+=3,e[t].lost++)})}),e[t]}const j=g.map((t,l)=>{let e=t.kills/t.deaths||0,n="";l===0?n="bg-yellow-200":l===1?n="bg-gray-200":l===2&&(n="bg-amber-100");let a=p.find(s=>s.team===t.team);if(!a)return"";let o=B(a.team,f);return`
        <tr>
            <td class="border p-4 text-left ${n}">${t.firstname} <strong>${t.nickname}</strong> ${t.surname}</td>
            <td class="border p-4 text-left ${n}">${u(a?.team)}</td>
            <td class="border p-4 text-right ${n}">${o.played}</td>
            <td class="border p-4 text-right ${n}">${o.won}</td>
            <td class="border p-4 text-right ${n}">${o.lost}</td>
            <td class="border p-4 text-right ${n}">${t.kills}</td>
            <td class="border p-4 text-right ${n}">${t.deaths}</td>
            <td class="border p-4 text-right ${n}">${e.toFixed(2)}</td>
        </tr>
    `}),M=`
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
        ${j.join("")}
    </tbody>
  </table>
`,K=`
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
  
  <p class="mb-8">Inget satt schema, utan lagen bestämmer själva när de vill spela. Alla gruppspelsmatcher behöver dock vara klara till <strong>21/9</strong>, alltså en match per vecka i snitt.</p>
  
  <h2 class="text-2xl/7 font-bold sm:truncate sm:text-2xl sm:tracking-tight pb-3">Frågor?</h2>
  
  <p>Information kommer primärt hållas i <a href="https://discord.gg/edCNCUKhGt" target="_blank">fortnox-gameon discord</a>, så se till att alla lagmedlemmar sitter där.</p>
`,N=[{path:"/",data:v},{path:"/groups",data:$},{path:"/playoffs",data:L},{path:"/participants",data:E},{path:"/teams",data:R},{path:"/stats",data:M},{path:"/rules",data:K}],h=()=>{const t=document.getElementById("root");if(!t)return;const l=N.find(n=>n.path==window.location.pathname||"/fortnox-inhouse-tournament"+n.path==window.location.pathname);if(!l)return;const e=l.data;t.style.opacity="0.0",setTimeout(()=>{t.innerHTML=e,t.style.opacity="1.0"},50)},b=()=>{document.querySelectorAll("nav a").forEach(t=>{t.href===window.location.href?(t.classList.add("bg-emerald-950"),t.classList.remove("bg-transparent")):(t.classList.remove("bg-emerald-950"),t.classList.add("bg-transparent"))})},O=t=>{if(!t)return;t.preventDefault();const l=t.target;l&&(history.pushState({},"newUrl",l.href),h(),b())},C=()=>{window.addEventListener("popstate",h),window.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("nav a").forEach(t=>{t.addEventListener("click",O)}),h(),b()})};C();const H=`
    <div class="md:flex flex-col md:flex-row md:min-h-screen sticky top-0 md:h-screen">
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
    ${H}
    <div id="root" class="md:flex-1 md:w-full p-8"></div>
`;
