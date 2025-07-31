(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const w=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>`,k=[{id:1,name:"BJOERN"},{id:2,name:"Cuuurl"},{id:3,name:"Units"},{id:4,name:"Atlas"},{id:5,name:"f0rest"},{id:6,name:"GeT_RiGhT"},{id:7,name:"Krak3N"},{id:8,name:"wr0ng"}],p=t=>k.map(s=>{if(s.id===t)return s.name}).join(""),m=[{group:1,team1:1,team2:2,score1:13,score2:1,url:"/"},{group:1,team1:3,team2:4,score1:13,score2:11,url:"/"},{group:1,team1:3,team2:1,score1:6,score2:13,url:"/"},{group:1,team1:2,team2:4,score1:13,score2:4,url:"/"},{group:1,team1:1,team2:4,score1:13,score2:9,url:"/"},{group:1,team1:3,team2:2,score1:11,score2:13,url:"/"},{group:2,team1:5,team2:6,score1:11,score2:13,url:"/"},{group:2,team1:7,team2:8,score1:13,score2:11,url:"/"},{group:2,team1:7,team2:5,score1:13,score2:0,url:"/"},{group:2,team1:6,team2:8,score1:16,score2:19,url:"/"},{group:2,team1:5,team2:8,score1:13,score2:9,url:"/"},{group:2,team1:7,team2:6,score1:11,score2:13,url:"/"}];function g(t,s){const r={},e=s.filter(a=>a.group===t);return e.length===0?[]:(e.forEach(({team1:a,team2:i,score1:l,score2:d})=>{[a,i].forEach(c=>{r[c]||(r[c]={id:c,played:0,won:0,lost:0,points:0,scored:0,conceded:0})}),r[a].played++,r[i].played++,r[a].scored+=l,r[a].conceded+=d,r[i].scored+=d,r[i].conceded+=l,l>d?(r[a].won++,r[a].points+=3,r[i].lost++):(r[i].won++,r[i].points+=3,r[a].lost++)}),Object.values(r).sort((a,i)=>i.points-a.points||i.scored-i.conceded-(a.scored-a.conceded)||i.scored-a.scored).map((a,i)=>({rank:i+1,...a})).map((a,i)=>{const{id:l,won:d,lost:c,points:h,scored:x,conceded:v}=a;return`
                <tr>
                    <td class="border p-4 text-left font-bold">${i+1}. team ${p(l)}</td>
                    <td class="border p-4 text-left">${d}</td>
                    <td class="border p-4 text-left">${c}</td>
                    <td class="border p-4 text-left">${x-v}</td>
                    <td class="border p-4 text-left">${h}</td>
                </tr>
            `}).join(""))}function u(t,s){const r=s.filter(e=>e.group===t);return r.length===0?[]:r.map(e=>{let o="";return e.url&&(o=`
                <div class="flex-col match-icons rounded-es-lg rounded-ee-lg bg-stone-900 px-6 py-4 space-y-2">
                    <a class="text-sm" href="${e.url}" target="_blank">Matchlänk ${w}</a>
                </div>
                `),`
            <div class="mb-6">
                <div class="rounded-ss-lg rounded-se-lg bg-stone-200 px-6 py-6 space-y-2 text-xs md:text-base">
                    <div class="grid grid-flow-col grid-cols-2 pb-4">
                      <p class="${e.score1>e.score2?"font-bold":"opacity-50"}">team ${p(e.team1)}</p>
                      <p class="text-right ${e.score1>e.score2?"font-bold":"opacity-50"}">${e.score1}</p>
                    </div>
                    <div class="grid grid-flow-col grid-cols-2">
                      <p class="${e.score2>e.score1?"font-bold":"opacity-50"}">team ${p(e.team2)}</p>
                      <p class="text-right ${e.score2>e.score1?"font-bold":"opacity-50"}">${e.score2}</p>
                    </div>
                </div>
                
                ${o}
            </div>
        `}).join("")}const y=`
  <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-8">Gruppspel</h1>
  
  <div class="grid grid-flow-col grid-cols-2 items-start">
    <div class="grid grid-flow-row mr-2">
      <table class="w-full border-collapse border">
        <caption class="caption-top">
            Grupp A
        </caption>
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
            ${g(1,m)}
        </tbody>
      </table>
      
      <div class="pt-12">
        ${u(1,m)}
      </div>
    </div>
    
    <div class="grid grid-flow-row ml-2">
      <table class="w-full border-collapse border">
        <caption class="caption-top">
            Grupp B
        </caption>
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
            ${g(2,m)}
        </tbody>
      </table>
      
      <div class="pt-12">
        ${u(2,m)}
      </div>
    </div>
  </div>
`,A=`
  <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-8">Slutspel</h1>
  
  <div class="grid grid-flow-col grid-cols-3 items-center">
    <div class="grid grid-flow-row grid-rows-3">
      <div class="mb-4 rounded-lg bg-stone-200 px-6 py-4 space-y-2 text-xs md:text-base">
        <div class="grid grid-flow-col grid-cols-2">
          <p class="font-bold">team BJOERN</p>
          <p class="text-right font-bold">13</p>
        </div>
        <div class="grid grid-flow-col grid-cols-2">
          <p class="opacity-50">team Cuuurl</p>
          <p class="text-right opacity-50">1</p>
        </div>
      </div>
      <div class="mb-4 rounded-lg bg-stone-200 px-6 py-4 text-gray-900 space-y-2 text-xs md:text-base">
        <div class="grid grid-flow-col grid-cols-2">
          <p class="font-bold">team Krak3N</p>
          <p class="text-right font-bold">13</p>
        </div>
        <div class="grid grid-flow-col grid-cols-2">
          <p class="opacity-50">team Units</p>
          <p class="text-right opacity-50">10</p>
        </div>
      </div>
      <div class="mb-4 rounded-lg bg-stone-200 px-6 py-4 text-gray-900 space-y-2 text-xs md:text-base">
        <div class="grid grid-flow-col grid-cols-2">
          <p class="opacity-50">team Atlas</p>
          <p class="text-right opacity-50">6</p>
        </div>
        <div class="grid grid-flow-col grid-cols-2">
          <p class="font-bold">team wr0ng</p>
          <p class="text-right font-bold">13</p>
        </div>
      </div>
      <div class="mb-4 rounded-lg bg-stone-200 px-6 py-4 text-gray-900 space-y-2 text-xs md:text-base">
        <div class="grid grid-flow-col grid-cols-2">
          <p class="font-bold">team f0rest</p>
          <p class="text-right font-bold">16</p>
        </div>
        <div class="grid grid-flow-col grid-cols-2">
          <p class="opacity-50">team GeT_RiGhT</p>
          <p class="text-right opacity-50">12</p>
        </div>
      </div>
    </div>
    <div class="mx-2 grid h-1/2 grid-flow-row grid-rows-2">
      <div class="mb-4 rounded-lg bg-stone-200 px-6 py-4 text-gray-900 space-y-2 text-xs md:text-base">
        <div class="grid grid-flow-col grid-cols-2">
          <p class="font-bold">team BJOERN</p>
          <p class="text-right font-bold">13</p>
        </div>
        <div class="grid grid-flow-col grid-cols-2">
          <p class="opacity-50">team Krak3N</p>
          <p class="text-right opacity-50">0</p>
        </div>
      </div>
      <div class="mb-4 rounded-lg bg-stone-200 px-6 py-4 text-gray-900 space-y-2 text-xs md:text-base">
        <div class="grid grid-flow-col grid-cols-2">
          <p class="font-bold">team Atlas</p>
          <p class="text-right font-bold">13</p>
        </div>
        <div class="grid grid-flow-col grid-cols-2">
          <p class="opacity-50">team f0rest</p>
          <p class="text-right opacity-50">11</p>
        </div>
      </div>
    </div>
    <div class="mx-2 grid h-1/4 grid-flow-row grid-rows-1">
      <div class="mb-4 rounded-lg bg-stone-200 px-6 py-4 text-gray-900 space-y-2 text-xs md:text-base">
        <div class="grid grid-flow-col grid-cols-2">
          <p class="font-bold">team BJOERN</p>
          <p class="text-right font-bold">13</p>
        </div>
        <div class="grid grid-flow-col grid-cols-2">
          <p class="opacity-50">team Atlas</p>
          <p class="text-right opacity-50">8</p>
        </div>
      </div>
    </div>
  </div>
`;let L=[{firstname:"Patrik",surname:"Björn",nickname:"BJOERN"},{firstname:"Lena",surname:"Kowalski",nickname:"LENSKY"},{firstname:"Hiroshi",surname:"Takahashi",nickname:"HIRO"},{firstname:"Amira",surname:"Nasri",nickname:"MIRA"},{firstname:"Carlos",surname:"Domínguez",nickname:"CARLITO"},{firstname:"Freya",surname:"Andersen",nickname:"FREY"},{firstname:"Zane",surname:"Keller",nickname:"ZAK"},{firstname:"Nina",surname:"Volkova",nickname:"VOLKA"},{firstname:"Tariq",surname:"Hassan",nickname:"TQ"},{firstname:"Sophie",surname:"Dubois",nickname:"SOPH"},{firstname:"Mateo",surname:"Rossi",nickname:"TEO"},{firstname:"Ines",surname:"Müller",nickname:"NES"},{firstname:"David",surname:"Nguyen",nickname:"DAVE"},{firstname:"Luca",surname:"Petrovic",nickname:"LUCKY"},{firstname:"Ayla",surname:"Demir",nickname:"AY"},{firstname:"Jonas",surname:"Lindholm",nickname:"JONNY"},{firstname:"Fatima",surname:"Al-Mansoori",nickname:"FATZ"},{firstname:"Noah",surname:"Zimmer",nickname:"ZIM"},{firstname:"Chiara",surname:"Bianchi",nickname:"CHI"},{firstname:"Elias",surname:"Gruber",nickname:"ELI"},{firstname:"Rania",surname:"Fahmy",nickname:"RAN"},{firstname:"Marcus",surname:"Stewart",nickname:"MARCY"},{firstname:"Tanya",surname:"Ilyin",nickname:"TAN"},{firstname:"Leo",surname:"Carvalho",nickname:"LION"},{firstname:"Mila",surname:"Horvat",nickname:"MIMI"},{firstname:"Jasper",surname:"Schultz",nickname:"JAZZ"},{firstname:"Lena",surname:"Kowalski",nickname:"LENSKY"},{firstname:"Hiroshi",surname:"Takahashi",nickname:"HIRO"},{firstname:"Amira",surname:"Nasri",nickname:"MIRA"},{firstname:"Carlos",surname:"Domínguez",nickname:"CARLITO"},{firstname:"Freya",surname:"Andersen",nickname:"FREY"},{firstname:"Zane",surname:"Keller",nickname:"ZAK"},{firstname:"Nina",surname:"Volkova",nickname:"VOLKA"},{firstname:"Tariq",surname:"Hassan",nickname:"TQ"},{firstname:"Sophie",surname:"Dubois",nickname:"SOPH"},{firstname:"Mateo",surname:"Rossi",nickname:"TEO"},{firstname:"Ines",surname:"Müller",nickname:"NES"},{firstname:"David",surname:"Nguyen",nickname:"DAVE"},{firstname:"Luca",surname:"Petrovic",nickname:"LUCKY"},{firstname:"Ayla",surname:"Demir",nickname:"AY"}];const N=L.map((t,s)=>(++s,`<tr><td class="border p-4 text-left">${s}. ${t.firstname} <strong>${t.nickname}</strong> ${t.surname}</td></tr>`)),E=`
  <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-8">Deltagare</h1>
  
  <table class="w-full border-collapse border">
    <tbody>
        ${N.join("")}
    </tbody>
  </table>
`,R=`
  <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-8">Lag</h1>
  
  <div class="grid grid-flow-col grid-cols-4 mb-4 items-start">
    <div class="grid grid-flow-row mr-2">
      <table class="w-full border-collapse border">
        <caption class="caption-top">
            team BJOERN
        </caption>
        <tbody>
            <tr><td class="border p-4 text-left bg-yellow-100">Patrik <strong>BJOERN</strong> Björn</td></tr>
            <tr><td class="border p-4 text-left">Lena <strong>WULF</strong> Wagner</td></tr>
            <tr><td class="border p-4 text-left">Tobias <strong>GRIMM</strong> Steiner</td></tr>
            <tr><td class="border p-4 text-left">Mira <strong>KOCH</strong> Feldmann</td></tr>
            <tr><td class="border p-4 text-left">Jonas <strong>FREY</strong> Lehmann</td></tr>
        </tbody>
      </table>
    </div>
    
    <div class="grid grid-flow-row mr-2">
      <table class="w-full border-collapse border">
        <caption class="caption-top">
            team Cuuurl
        </caption>
        <tbody>
            <tr><td class="border p-4 text-left bg-yellow-100">Cuuurl <strong>Cuuurl</strong> Cuuurl</td></tr>
            <tr><td class="border p-4 text-left">Anja <strong>VOGT</strong> Keller</td></tr>
            <tr><td class="border p-4 text-left">Erik <strong>SCHMIDT</strong> Braun</td></tr>
            <tr><td class="border p-4 text-left">Nico <strong>BAUER</strong> Scholz</td></tr>
            <tr><td class="border p-4 text-left">Sofie <strong>MAIER</strong> Beck</td></tr>
        </tbody>
      </table>
    </div>
    
    <div class="grid grid-flow-row mr-2">
      <table class="w-full border-collapse border">
        <caption class="caption-top">
            team Units
        </caption>
        <tbody>
            <tr><td class="border p-4 text-left bg-yellow-100">Units <strong>Units</strong> Units</td></tr>
            <tr><td class="border p-4 text-left">Felix <strong>KRUGER</strong> Reinhardt</td></tr>
            <tr><td class="border p-4 text-left">Clara <strong>HOFMANN</strong> Seidel</td></tr>
            <tr><td class="border p-4 text-left">Lukas <strong>NEUMANN</strong> Faber</td></tr>
            <tr><td class="border p-4 text-left">Jana <strong>WEBER</strong> Thalberg</td></tr>
        </tbody>
      </table>
    </div>
    
    <div class="grid grid-flow-row mr-2">
      <table class="w-full border-collapse border">
        <caption class="caption-top">
            team Atlas
        </caption>
        <tbody>
            <tr><td class="border p-4 text-left bg-yellow-100">Atlas <strong>Atlas</strong> Atlas</td></tr>
            <tr><td class="border p-4 text-left">Milan <strong>FISCHER</strong> Adler</td></tr>
            <tr><td class="border p-4 text-left">Leonie <strong>SCHULZ</strong> Berger</td></tr>
            <tr><td class="border p-4 text-left">Tom <strong>REINER</strong> Busch</td></tr>
            <tr><td class="border p-4 text-left">Emma <strong>HAAS</strong> König</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  
  <div class="grid grid-flow-col grid-cols-4 items-start">
    <div class="grid grid-flow-row mr-2">
      <table class="w-full border-collapse border">
        <caption class="caption-top">
            team Krak3N
        </caption>
        <tbody>
            <tr><td class="border p-4 text-left bg-yellow-100">Krak3N <strong>Krak3N</strong> Krak3N</td></tr>
            <tr><td class="border p-4 text-left">Lara <strong>MEYER</strong> Schulte</td></tr>
            <tr><td class="border p-4 text-left">Jonas <strong>WAGNER</strong> Busch</td></tr>
            <tr><td class="border p-4 text-left">Nina <strong>KELLER</strong> Voigt</td></tr>
            <tr><td class="border p-4 text-left">Tim <strong>SCHMIDT</strong> Lang</td></tr>
        </tbody>
      </table>
    </div>
    
    <div class="grid grid-flow-row mr-2">
      <table class="w-full border-collapse border">
        <caption class="caption-top">
            team wr0ng
        </caption>
        <tbody>
            <tr><td class="border p-4 text-left bg-yellow-100">wr0ng <strong>wr0ng</strong> wr0ng</td></tr>
            <tr><td class="border p-4 text-left">Julia <strong>FUCHS</strong> Arnold</td></tr>
            <tr><td class="border p-4 text-left">Ben <strong>RICHTER</strong> Ziegler</td></tr>
            <tr><td class="border p-4 text-left">Mia <strong>HARTMANN</strong> Lorenz</td></tr>
            <tr><td class="border p-4 text-left">Paul <strong>KRÜGER</strong> Stahl</td></tr>
        </tbody>
      </table>
    </div>
    
    <div class="grid grid-flow-row mr-2">
      <table class="w-full border-collapse border">
        <caption class="caption-top">
            team f0rest
        </caption>
        <tbody>
            <tr><td class="border p-4 text-left bg-yellow-100">f0rest <strong>f0rest</strong> f0rest</td></tr>
            <tr><td class="border p-4 text-left">Lea <strong>VOGLER</strong> Kranz</td></tr>
            <tr><td class="border p-4 text-left">Noah <strong>WINTER</strong> Frank</td></tr>
            <tr><td class="border p-4 text-left">Emma <strong>BRANDT</strong> Keller</td></tr>
            <tr><td class="border p-4 text-left">Luca <strong>WOLF</strong> Günther</td></tr>
        </tbody>
      </table>
    </div>
    
    <div class="grid grid-flow-row mr-2">
      <table class="w-full border-collapse border">
        <caption class="caption-top">
            team GeT_RiGhT
        </caption>
        <tbody>
            <tr><td class="border p-4 text-left bg-yellow-100">GeT_RiGhT <strong>GeT_RiGhT</strong> GeT_RiGhT</td></tr>
            <tr><td class="border p-4 text-left">Marie <strong>SCHNEIDER</strong> Böhm</td></tr>
            <tr><td class="border p-4 text-left">Elias <strong>HERMANN</strong> Jäger</td></tr>
            <tr><td class="border p-4 text-left">Clara <strong>BAUMANN</strong> Dietrich</td></tr>
            <tr><td class="border p-4 text-left">Moritz <strong>BECKER</strong> Thiele</td></tr>
        </tbody>
      </table>
    </div>
  </div>
`;let M=[{firstname:"Patrik",surname:"Björn",nickname:"BJOERN"},{firstname:"Lena",surname:"Kowalski",nickname:"LENSKY"},{firstname:"Hiroshi",surname:"Takahashi",nickname:"HIRO"},{firstname:"Amira",surname:"Nasri",nickname:"MIRA"},{firstname:"Carlos",surname:"Domínguez",nickname:"CARLITO"},{firstname:"Freya",surname:"Andersen",nickname:"FREY"},{firstname:"Zane",surname:"Keller",nickname:"ZAK"},{firstname:"Nina",surname:"Volkova",nickname:"VOLKA"},{firstname:"Tariq",surname:"Hassan",nickname:"TQ"},{firstname:"Sophie",surname:"Dubois",nickname:"SOPH"},{firstname:"Mateo",surname:"Rossi",nickname:"TEO"},{firstname:"Ines",surname:"Müller",nickname:"NES"},{firstname:"David",surname:"Nguyen",nickname:"DAVE"},{firstname:"Luca",surname:"Petrovic",nickname:"LUCKY"},{firstname:"Ayla",surname:"Demir",nickname:"AY"},{firstname:"Jonas",surname:"Lindholm",nickname:"JONNY"},{firstname:"Fatima",surname:"Al-Mansoori",nickname:"FATZ"},{firstname:"Noah",surname:"Zimmer",nickname:"ZIM"},{firstname:"Chiara",surname:"Bianchi",nickname:"CHI"},{firstname:"Elias",surname:"Gruber",nickname:"ELI"},{firstname:"Rania",surname:"Fahmy",nickname:"RAN"},{firstname:"Marcus",surname:"Stewart",nickname:"MARCY"},{firstname:"Tanya",surname:"Ilyin",nickname:"TAN"},{firstname:"Leo",surname:"Carvalho",nickname:"LION"},{firstname:"Mila",surname:"Horvat",nickname:"MIMI"},{firstname:"Jasper",surname:"Schultz",nickname:"JAZZ"},{firstname:"Lena",surname:"Kowalski",nickname:"LENSKY"},{firstname:"Hiroshi",surname:"Takahashi",nickname:"HIRO"},{firstname:"Amira",surname:"Nasri",nickname:"MIRA"},{firstname:"Carlos",surname:"Domínguez",nickname:"CARLITO"},{firstname:"Freya",surname:"Andersen",nickname:"FREY"},{firstname:"Zane",surname:"Keller",nickname:"ZAK"},{firstname:"Nina",surname:"Volkova",nickname:"VOLKA"},{firstname:"Tariq",surname:"Hassan",nickname:"TQ"},{firstname:"Sophie",surname:"Dubois",nickname:"SOPH"},{firstname:"Mateo",surname:"Rossi",nickname:"TEO"},{firstname:"Ines",surname:"Müller",nickname:"NES"},{firstname:"David",surname:"Nguyen",nickname:"DAVE"},{firstname:"Luca",surname:"Petrovic",nickname:"LUCKY"},{firstname:"Ayla",surname:"Demir",nickname:"AY"}];const T=M.map((t,s)=>{let r=Math.floor(Math.random()*300+100),e=Math.floor(Math.random()*-300+400),o=r/e,n="";return s===0?n="bg-yellow-200":s===1?n="bg-gray-200":s===2&&(n="bg-amber-100"),`
        <tr>
            <td class="border p-4 text-left ${n}">${t.firstname} <strong>${t.nickname}</strong> ${t.surname}</td>
            <td class="border p-4 text-right ${n}">6</td>
            <td class="border p-4 text-right ${n}">${r}</td>
            <td class="border p-4 text-right ${n}">${e}</td>
            <td class="border p-4 text-right ${n}">${o.toFixed(2)}</td>
        </tr>
    `}),O=`
  <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-8">Statistik</h1>
  
  <table class="w-full border-collapse border">
    <thead>
        <tr>
            <th></th>
            <th class="p-4 text-right">M</th>
            <th class="p-4 text-right">K</th>
            <th class="p-4 text-right">D</th>
            <th class="p-4 text-right">K/D</th>
        </tr>
    </thead>
    <tbody>
        ${T.join("")}
    </tbody>
  </table>
`,S=[{path:"/",data:y},{path:"/playoffs",data:A},{path:"/participants",data:E},{path:"/teams",data:R},{path:"/stats",data:O}],f=()=>{const t=document.getElementById("root");if(!t)return;const s=S.find(e=>e.path==window.location.pathname||"/fortnox-inhouse-tournament"+e.path==window.location.pathname);if(!s)return;const r=s.data;t.style.opacity="0.0",setTimeout(()=>{t.innerHTML=r,t.style.opacity="1.0"},50)},b=()=>{document.querySelectorAll("nav a").forEach(t=>{t.href===window.location.href?(t.classList.add("bg-emerald-950"),t.classList.remove("bg-transparent")):(t.classList.remove("bg-emerald-950"),t.classList.add("bg-transparent"))})},I=t=>{if(!t)return;t.preventDefault();const s=t.target;s&&(history.pushState({},"newUrl",s.href),f(),b())},K=()=>{window.addEventListener("popstate",f),window.addEventListener("DOMContentLoaded",()=>{f(),b()}),document.querySelectorAll("nav ul li a").forEach(t=>{t.addEventListener("click",I)})};K();const C=`
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
          <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-white focus:text-white hover:bg-emerald-950 focus:bg-emerald-95 focus:outline-none focus:shadow-outline" href="./">Gruppspel</a>
          <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-white focus:text-white hover:bg-emerald-950 focus:bg-emerald-95 focus:outline-none focus:shadow-outline" href="./playoffs">Slutspel</a>
          <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-white focus:text-white hover:bg-emerald-950 focus:bg-emerald-95 focus:outline-none focus:shadow-outline" href="./participants">Deltagare</a>
          <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-white focus:text-white hover:bg-emerald-950 focus:bg-emerald-95 focus:outline-none focus:shadow-outline" href="./teams">Lag</a>
          <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-white focus:text-white hover:bg-emerald-950 focus:bg-emerald-95 focus:outline-none focus:shadow-outline" href="./stats">Statistik</a>
        </nav>
      </div>
    </div>
`;document.querySelector("#app").innerHTML=`
    ${C}
    <div id="root" class="flex-1 w-full p-8"></div>
`;
