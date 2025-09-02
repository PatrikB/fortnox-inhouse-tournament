(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const E=`
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
`,k=[{firstname:"Patrik",surname:"Björn",nickname:"BJOERN",captain:!0,team:1,kills:31,deaths:14},{firstname:"Eskil",surname:"Skarin",nickname:"skarre",captain:!1,team:1,kills:49,deaths:16},{firstname:"Rasmus",surname:"Lager",nickname:"Mousn",captain:!1,team:1,kills:12,deaths:14},{firstname:"Rickard",surname:"Lundby",nickname:"Phase",captain:!1,team:1,kills:26,deaths:13},{firstname:"Eric",surname:"Wahlgren",nickname:"Rasande Roland",captain:!1,team:1,kills:23,deaths:18},{firstname:"Carl",surname:"Pagels",nickname:"Cuuurl",captain:!0,team:2,kills:20,deaths:28},{firstname:"Håkan",surname:"Fröderberg",nickname:"Warken",captain:!1,team:2,kills:4,deaths:30},{firstname:"Pontus",surname:"Johansson",nickname:"shzss",captain:!1,team:2,kills:10,deaths:29},{firstname:"Gunnar",surname:"Henson",nickname:"Atlas",captain:!1,team:2,kills:24,deaths:27},{firstname:"Petter",surname:"Wagander",nickname:"Biggie cheese",captain:!1,team:2,kills:16,deaths:27},{firstname:"Lukas",surname:"Karlsson",nickname:"Krak3N",captain:!0,team:3,kills:0,deaths:0},{firstname:"Emil",surname:"Carlsson",nickname:"wRoNg",captain:!1,team:3,kills:0,deaths:0},{firstname:"Edvin",surname:"Ström",nickname:"Amp3d",captain:!1,team:3,kills:0,deaths:0},{firstname:"Tommy",surname:"Karlsson",nickname:"trivial_tom",captain:!1,team:3,kills:0,deaths:0},{firstname:"Gustav",surname:"Larsson",nickname:"Are those Reebok or Nike?",captain:!1,team:3,kills:0,deaths:0},{firstname:"Joakim",surname:"Österberg",nickname:"Units",captain:!0,team:4,kills:0,deaths:0},{firstname:"Ludvig",surname:"Bengtsson",nickname:"Lolkana",captain:!1,team:4,kills:0,deaths:0},{firstname:"Jon",surname:"Jennemann",nickname:"kr4nk",captain:!1,team:4,kills:0,deaths:0},{firstname:"Elliot",surname:"Gustafsson",nickname:"ottyhard",captain:!1,team:4,kills:0,deaths:0},{firstname:"Joakim",surname:"Lodén",nickname:"Daimon",captain:!1,team:4,kills:0,deaths:0}],v=[{team:1,name:"team_BJOERN",members:[]},{team:2,name:"team_Cuuurl",members:[]},{team:3,name:"team_Krak3N",members:[]},{team:4,name:"team_Units",members:[]}];v.forEach(e=>{k.forEach(l=>{l.team===e.team&&e.members.push(l)})});const _=e=>e===void 0?"":v.map(l=>{if(l.team===e)return l.name}).join("");function K(e,l){const a={},o=l.filter(s=>s.group===e);return o.length===0?[]:(o.forEach(({team1:s,team2:i,games:m})=>{[s,i].forEach(d=>{a[d]||(a[d]={id:d,played:0,mapPlayed:0,won:0,mapWon:0,lost:0,mapLost:0,points:0,scored:0,conceded:0})});let c=0;m.forEach(({score1:d,score2:u})=>{d===null||u===null||(a[s].mapPlayed++,a[i].mapPlayed++,a[s].scored+=d,a[s].conceded+=u,a[i].scored+=u,a[i].conceded+=d,d>u?(a[s].mapWon++,a[i].mapLost++,c++):(a[i].mapWon++,a[s].mapLost++,c--))}),c!==0&&(a[s].played++,a[i].played++,c>0?(a[s].won++,a[s].points+=3,a[i].lost++):(a[i].won++,a[i].points+=3,a[s].lost++))}),Object.values(a).sort((s,i)=>i.points-s.points||i.scored-i.conceded-(s.scored-s.conceded)||i.scored-s.scored).map((s,i)=>({rank:i+1,...s})).map((s,i)=>{const{id:m,won:c,lost:d,points:u,scored:p,conceded:g}=s,b=i+1,f=p-g;return`
                <tr>
                    <td class="border p-4 text-left font-bold">${b}. ${_(m)}</td>
                    <td class="border p-4 text-left">${c}</td>
                    <td class="border p-4 text-left">${d}</td>
                    <td class="border p-4 text-left">${f>0?"+"+f:f}</td>
                    <td class="border p-4 text-left">${u}</td>
                </tr>
            `}).join(""))}function L(e){let l=k.filter(a=>a.nickname===e)[0];return l?l.firstname+" <strong>"+l.nickname+"</strong> "+l.surname:e}function M(e,l){const a=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>`,o=l.filter(t=>t.group===e);return o.length===0?[]:o.map(t=>{let r=`
                <div class="mb-12">
                    <h2 class="md:ml-3 md:text-center font-bold md:text-2xl/7 sm:truncate sm:tracking-tight mb-6">${_(t.team1)} <span class="font-light">vs.</span> ${_(t.team2)}</h2>
                    <div class="rounded-lg p-4 pt-8 md:p-8 md:pt-10 text-xs md:text-base bg-white shadow">
                        <div class="md:flex">
        `;return r+=t?.games.map(s=>{let i=`
                <div class="grow px-4 mb-4 md:mb-0">
            `,m="",c="",d="",u=Math.random().toString(36).substring(2,15);if(s.url&&(m=`
                    <div class="inline-block float-right match-icons">
                        <a class="text-sm" href="${s.url}" target="_blank">Matchlänk ${a}</a>
                    </div>
                `),s.stats){let b=s.stats.filter(n=>n.team===t.team1).slice().sort((n,h)=>(h.damage!==n.damage,h.damage-n.damage)),f=s.stats.filter(n=>n.team===t.team2).slice().sort((n,h)=>(h.damage!==n.damage,h.damage-n.damage));c=`
                    <div class="inline-block float-right match-icons mr-4">
                        <button class="text-sm" command="show-modal" commandfor="stats-modal-${u}">Statistik ${a}</button>
                    </div>
               `,d=`     
                    <el-dialog>
                        <dialog id="stats-modal-${u}" tabindex="-1" aria-hidden="true" class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
                            <el-dialog-backdrop class="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>
                            
                            <div tabindex="0" class="flex min-h-full items-center justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
                                <el-dialog-panel class="relative transform overflow-hidden rounded-lg p-8 bg-white text-left transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:ml-8 md:mr-8 sm:w-full md:w-5xl data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                                    <table class="w-full">
                                        <thead>
                                            <tr>
                                                <th class="p-4 text-left">${_(t.team1)}</th>
                                                <th class="p-4 text-left">K</th>
                                                <th class="p-4 text-left">A</th>
                                                <th class="p-4 text-left">D</th>
                                                <th class="p-4 text-left hidden md:table-cell">DMG</th>
                                                <th class="p-4 text-left hidden md:table-cell">2K</th>
                                                <th class="p-4 text-left hidden md:table-cell">3K</th>
                                                <th class="p-4 text-left hidden md:table-cell">4K</th>
                                                <th class="p-4 text-left hidden md:table-cell">5K</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${b.map(n=>`<tr class="odd:bg-white even:bg-gray-50 hover:bg-gray-200">
                                                    <td class="border p-4 text-left">${L(n.name)}</td>
                                                    <td class="border p-4 text-left">${n.kills}</td>
                                                    <td class="border p-4 text-left">${n.assists}</td>
                                                    <td class="border p-4 text-left">${n.deaths}</td>
                                                    <td class="border p-4 text-left hidden md:table-cell">${n.damage}</td>
                                                    <td class="border p-4 text-left hidden md:table-cell">${n.enemy2ks}</td>
                                                    <td class="border p-4 text-left hidden md:table-cell">${n.enemy3ks}</td>
                                                    <td class="border p-4 text-left hidden md:table-cell">${n.enemy4ks}</td>
                                                    <td class="border p-4 text-left hidden md:table-cell">${n.enemy5ks}</td>
                                                </tr>`).join("")}
                                        </tbody>
                                    </table>
                                    
                                    <table class="w-full mt-8">
                                        <thead>
                                            <tr>
                                                <th class="p-4 text-left">${_(t.team2)}</th>
                                                <th class="p-4 text-left">K</th>
                                                <th class="p-4 text-left">A</th>
                                                <th class="p-4 text-left">D</th>
                                                <th class="p-4 text-left hidden md:table-cell">DMG</th>
                                                <th class="p-4 text-left hidden md:table-cell">2K</th>
                                                <th class="p-4 text-left hidden md:table-cell">3K</th>
                                                <th class="p-4 text-left hidden md:table-cell">4K</th>
                                                <th class="p-4 text-left hidden md:table-cell">5K</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${f.map(n=>`<tr class="odd:bg-white even:bg-gray-50 hover:bg-gray-200">
                                                    <td class="border p-4 text-left">${L(n.name)}</td>
                                                    <td class="border p-4 text-left">${n.kills}</td>
                                                    <td class="border p-4 text-left">${n.assists}</td>
                                                    <td class="border p-4 text-left">${n.deaths}</td>
                                                    <td class="border p-4 text-left hidden md:table-cell">${n.damage}</td>
                                                    <td class="border p-4 text-left hidden md:table-cell">${n.enemy2ks}</td>
                                                    <td class="border p-4 text-left hidden md:table-cell">${n.enemy3ks}</td>
                                                    <td class="border p-4 text-left hidden md:table-cell">${n.enemy4ks}</td>
                                                    <td class="border p-4 text-left hidden md:table-cell">${n.enemy5ks}</td>
                                                </tr>`).join("")}
                                        </tbody>
                                    </table>
                                </el-dialog-panel>
                        </dialog>
                    </el-dialog>
                `}let p=s.score1!==null&&s.score2!==null,g=t?.games[0]?.score1!==null&&t?.games[0]?.score2!==null;return i+=`
                <table class="match-info w-full">
                    <caption class="caption-top rounded-lg uppercase shadow">${s.map?s.map:"-"} ${m+c}</caption>
                    <tbody>
                        <tr>
                            <td class="p-2 text-left ${p?s.score1>s.score2?"font-bold":"opacity-50":g?"line-through":""}">${_(t.team1)}</td>
                            <td class="p-2 text-right ${p?s.score1>s.score2?"font-bold":"opacity-50":""}">${s.score1?s.score1:"-"}</td>
                        </tr>
                        <tr>
                            <td class="p-2 text-left ${p?s.score2>s.score1?"font-bold":"opacity-50":g?"line-through":""}">${_(t.team2)}</td>
                            <td class="p-2 text-right ${p?s.score2>s.score1?"font-bold":"opacity-50":""}">${s.score2?s.score2:"-"}</td>
                        </tr>
                    </tbody>
                </table>
                ${d}
            `,i+=`
                </div>
            `,i}).join(""),r+=`
                    </div>
                </div>
            </div>
        `,r}).join("")}const y={DUST2:"Dust2",MIRAGE:"Mirage"},P=2,B=1,q="mirage",j=[{matchid:3,mapnumber:0,steamid64:"76561198041848691",team:2,name:"Atlas",kills:11,deaths:13,damage:1431,assists:2,enemy5ks:0,enemy4ks:0,enemy3ks:0,enemy2ks:3,utility_count:2,utility_damage:42,utility_successes:2,utility_enemies:3,flash_count:6,flash_successes:6,health_points_removed_total:1344,health_points_dealt_total:1431,shots_fired_total:147,shots_on_target_total:35,v1_count:1,v1_wins:1,v2_count:0,v2_wins:0,entry_count:3,entry_wins:2,equipment_value:54750,money_saved:0,kill_reward:2900,live_time:519,head_shot_kills:6,cash_earned:46700,enemies_flashed:12},{matchid:3,mapnumber:0,steamid64:"76561198090211954",team:2,name:"Cuuurl",kills:6,deaths:13,damage:945,assists:2,enemy5ks:0,enemy4ks:0,enemy3ks:0,enemy2ks:0,utility_count:3,utility_damage:5,utility_successes:1,utility_enemies:1,flash_count:11,flash_successes:8,health_points_removed_total:1326,health_points_dealt_total:945,shots_fired_total:141,shots_on_target_total:29,v1_count:0,v1_wins:0,v2_count:2,v2_wins:0,entry_count:5,entry_wins:1,equipment_value:55200,money_saved:0,kill_reward:1800,live_time:449,head_shot_kills:3,cash_earned:44400,enemies_flashed:16},{matchid:3,mapnumber:0,steamid64:"76561199163643591",team:2,name:"Biggie cheese",kills:6,deaths:12,damage:814,assists:0,enemy5ks:0,enemy4ks:0,enemy3ks:0,enemy2ks:1,utility_count:5,utility_damage:0,utility_successes:0,utility_enemies:0,flash_count:0,flash_successes:0,health_points_removed_total:1209,health_points_dealt_total:814,shots_fired_total:147,shots_on_target_total:20,v1_count:0,v1_wins:0,v2_count:1,v2_wins:0,entry_count:3,entry_wins:1,equipment_value:51800,money_saved:0,kill_reward:1800,live_time:459,head_shot_kills:3,cash_earned:47650,enemies_flashed:0},{matchid:3,mapnumber:0,steamid64:"76561198028181961",team:2,name:"shzss",kills:4,deaths:14,damage:630,assists:1,enemy5ks:0,enemy4ks:0,enemy3ks:0,enemy2ks:0,utility_count:4,utility_damage:0,utility_successes:0,utility_enemies:0,flash_count:0,flash_successes:0,health_points_removed_total:1428,health_points_dealt_total:630,shots_fired_total:157,shots_on_target_total:30,v1_count:0,v1_wins:0,v2_count:0,v2_wins:0,entry_count:4,entry_wins:2,equipment_value:47750,money_saved:0,kill_reward:1500,live_time:503,head_shot_kills:2,cash_earned:48800,enemies_flashed:0},{matchid:3,mapnumber:0,steamid64:"76561199641521496",team:2,name:"Warken",kills:3,deaths:15,damage:320,assists:1,enemy5ks:0,enemy4ks:0,enemy3ks:0,enemy2ks:0,utility_count:4,utility_damage:0,utility_successes:0,utility_enemies:0,flash_count:0,flash_successes:0,health_points_removed_total:1500,health_points_dealt_total:320,shots_fired_total:76,shots_on_target_total:9,v1_count:0,v1_wins:0,v2_count:1,v2_wins:0,entry_count:0,entry_wins:0,equipment_value:43150,money_saved:0,kill_reward:900,live_time:666,head_shot_kills:2,cash_earned:44200,enemies_flashed:0},{matchid:3,mapnumber:0,steamid64:"76561198126695240",team:1,name:"skarre",kills:21,deaths:5,damage:1905,assists:3,enemy5ks:0,enemy4ks:1,enemy3ks:1,enemy2ks:5,utility_count:5,utility_damage:22,utility_successes:0,utility_enemies:0,flash_count:10,flash_successes:4,health_points_removed_total:1045,health_points_dealt_total:1905,shots_fired_total:273,shots_on_target_total:64,v1_count:0,v1_wins:0,v2_count:0,v2_wins:0,entry_count:6,entry_wins:5,equipment_value:71950,money_saved:0,kill_reward:6100,live_time:166,head_shot_kills:9,cash_earned:49650,enemies_flashed:5},{matchid:3,mapnumber:0,steamid64:"76561197973642923",team:1,name:"Phase",kills:17,deaths:5,damage:1808,assists:3,enemy5ks:0,enemy4ks:0,enemy3ks:2,enemy2ks:3,utility_count:6,utility_damage:9,utility_successes:1,utility_enemies:1,flash_count:7,flash_successes:2,health_points_removed_total:638,health_points_dealt_total:1808,shots_fired_total:156,shots_on_target_total:45,v1_count:1,v1_wins:0,v2_count:0,v2_wins:0,entry_count:3,entry_wins:2,equipment_value:65800,money_saved:0,kill_reward:5100,live_time:279,head_shot_kills:12,cash_earned:49050,enemies_flashed:4},{matchid:3,mapnumber:0,steamid64:"76561197998893054",team:1,name:"BJOERN",kills:17,deaths:7,damage:1835,assists:6,enemy5ks:0,enemy4ks:0,enemy3ks:1,enemy2ks:5,utility_count:9,utility_damage:119,utility_successes:4,utility_enemies:4,flash_count:11,flash_successes:4,health_points_removed_total:898,health_points_dealt_total:1835,shots_fired_total:220,shots_on_target_total:54,v1_count:0,v1_wins:0,v2_count:0,v2_wins:0,entry_count:2,entry_wins:1,equipment_value:66250,money_saved:0,kill_reward:5400,live_time:284,head_shot_kills:13,cash_earned:49650,enemies_flashed:5},{matchid:3,mapnumber:0,steamid64:"76561197988215620",team:1,name:"Rasande Roland",kills:9,deaths:8,damage:1006,assists:5,enemy5ks:0,enemy4ks:0,enemy3ks:1,enemy2ks:0,utility_count:2,utility_damage:0,utility_successes:0,utility_enemies:0,flash_count:6,flash_successes:5,health_points_removed_total:894,health_points_dealt_total:1006,shots_fired_total:118,shots_on_target_total:33,v1_count:0,v1_wins:0,v2_count:0,v2_wins:0,entry_count:0,entry_wins:0,equipment_value:69500,money_saved:0,kill_reward:2700,live_time:311,head_shot_kills:6,cash_earned:49050,enemies_flashed:7},{matchid:3,mapnumber:0,steamid64:"76561198070028224",team:1,name:"Mousn",kills:3,deaths:5,damage:253,assists:1,enemy5ks:0,enemy4ks:0,enemy3ks:0,enemy2ks:0,utility_count:3,utility_damage:0,utility_successes:0,utility_enemies:0,flash_count:9,flash_successes:3,health_points_removed_total:665,health_points_dealt_total:253,shots_fired_total:81,shots_on_target_total:12,v1_count:0,v1_wins:0,v2_count:0,v2_wins:0,entry_count:4,entry_wins:1,equipment_value:64100,money_saved:0,kill_reward:900,live_time:252,head_shot_kills:1,cash_earned:44550,enemies_flashed:3}],A={team1:P,team2:B,map:q,stats:j},D=1,N=2,O="dust2",C=[{matchid:4,mapnumber:0,steamid64:"76561198126695240",team:1,name:"skarre",kills:28,deaths:11,damage:2934,assists:8,enemy5ks:0,enemy4ks:1,enemy3ks:4,enemy2ks:4,utility_count:7,utility_damage:59,utility_successes:2,utility_enemies:2,flash_count:14,flash_successes:5,health_points_removed_total:1198,health_points_dealt_total:2934,shots_fired_total:275,shots_on_target_total:82,v1_count:0,v1_wins:0,v2_count:0,v2_wins:0,entry_count:4,entry_wins:3,equipment_value:73350,money_saved:0,kill_reward:10200,live_time:364,head_shot_kills:13,cash_earned:61850,enemies_flashed:7},{matchid:4,mapnumber:0,steamid64:"76561197988215620",team:1,name:"Rasande Roland",kills:14,deaths:10,damage:1535,assists:6,enemy5ks:0,enemy4ks:0,enemy3ks:0,enemy2ks:4,utility_count:10,utility_damage:257,utility_successes:7,utility_enemies:8,flash_count:5,flash_successes:2,health_points_removed_total:1206,health_points_dealt_total:1535,shots_fired_total:232,shots_on_target_total:43,v1_count:0,v1_wins:0,v2_count:0,v2_wins:0,entry_count:5,entry_wins:5,equipment_value:72950,money_saved:0,kill_reward:4700,live_time:507,head_shot_kills:9,cash_earned:56650,enemies_flashed:2},{matchid:4,mapnumber:0,steamid64:"76561197998893054",team:1,name:"BJOERN",kills:14,deaths:7,damage:1223,assists:4,enemy5ks:0,enemy4ks:0,enemy3ks:0,enemy2ks:3,utility_count:9,utility_damage:95,utility_successes:3,utility_enemies:4,flash_count:10,flash_successes:7,health_points_removed_total:809,health_points_dealt_total:1223,shots_fired_total:175,shots_on_target_total:25,v1_count:0,v1_wins:0,v2_count:0,v2_wins:0,entry_count:3,entry_wins:2,equipment_value:84750,money_saved:0,kill_reward:2800,live_time:204,head_shot_kills:5,cash_earned:54450,enemies_flashed:11},{matchid:4,mapnumber:0,steamid64:"76561197973642923",team:1,name:"Phase",kills:9,deaths:8,damage:891,assists:2,enemy5ks:0,enemy4ks:0,enemy3ks:0,enemy2ks:2,utility_count:6,utility_damage:21,utility_successes:2,utility_enemies:2,flash_count:4,flash_successes:2,health_points_removed_total:909,health_points_dealt_total:891,shots_fired_total:116,shots_on_target_total:21,v1_count:1,v1_wins:0,v2_count:0,v2_wins:0,entry_count:2,entry_wins:0,equipment_value:72850,money_saved:0,kill_reward:2700,live_time:386,head_shot_kills:6,cash_earned:57550,enemies_flashed:3},{matchid:4,mapnumber:0,steamid64:"76561198070028224",team:1,name:"Mousn",kills:9,deaths:9,damage:1170,assists:5,enemy5ks:0,enemy4ks:0,enemy3ks:0,enemy2ks:2,utility_count:9,utility_damage:153,utility_successes:4,utility_enemies:5,flash_count:11,flash_successes:8,health_points_removed_total:873,health_points_dealt_total:1170,shots_fired_total:174,shots_on_target_total:36,v1_count:0,v1_wins:0,v2_count:1,v2_wins:0,entry_count:3,entry_wins:2,equipment_value:64600,money_saved:0,kill_reward:2700,live_time:400,head_shot_kills:3,cash_earned:52650,enemies_flashed:12},{matchid:4,mapnumber:0,steamid64:"76561198090211954",team:2,name:"Cuuurl",kills:14,deaths:15,damage:1253,assists:2,enemy5ks:0,enemy4ks:1,enemy3ks:0,enemy2ks:2,utility_count:3,utility_damage:32,utility_successes:1,utility_enemies:1,flash_count:13,flash_successes:7,health_points_removed_total:1586,health_points_dealt_total:1253,shots_fired_total:107,shots_on_target_total:26,v1_count:0,v1_wins:0,v2_count:3,v2_wins:1,entry_count:2,entry_wins:1,equipment_value:58850,money_saved:0,kill_reward:4200,live_time:668,head_shot_kills:9,cash_earned:53200,enemies_flashed:10},{matchid:4,mapnumber:0,steamid64:"76561198041848691",team:2,name:"Atlas",kills:13,deaths:14,damage:1389,assists:3,enemy5ks:0,enemy4ks:0,enemy3ks:1,enemy2ks:2,utility_count:2,utility_damage:43,utility_successes:2,utility_enemies:3,flash_count:12,flash_successes:5,health_points_removed_total:1576,health_points_dealt_total:1389,shots_fired_total:258,shots_on_target_total:44,v1_count:0,v1_wins:0,v2_count:1,v2_wins:0,entry_count:4,entry_wins:1,equipment_value:61050,money_saved:0,kill_reward:3900,live_time:492,head_shot_kills:6,cash_earned:52500,enemies_flashed:8},{matchid:4,mapnumber:0,steamid64:"76561199163643591",team:2,name:"Biggie cheese",kills:10,deaths:15,damage:1270,assists:6,enemy5ks:0,enemy4ks:0,enemy3ks:1,enemy2ks:2,utility_count:3,utility_damage:57,utility_successes:1,utility_enemies:1,flash_count:0,flash_successes:0,health_points_removed_total:1500,health_points_dealt_total:1270,shots_fired_total:172,shots_on_target_total:40,v1_count:0,v1_wins:0,v2_count:1,v2_wins:0,entry_count:6,entry_wins:2,equipment_value:56750,money_saved:0,kill_reward:3600,live_time:575,head_shot_kills:6,cash_earned:52400,enemies_flashed:0},{matchid:4,mapnumber:0,steamid64:"76561198028181961",team:2,name:"shzss",kills:6,deaths:15,damage:933,assists:4,enemy5ks:0,enemy4ks:0,enemy3ks:0,enemy2ks:0,utility_count:4,utility_damage:0,utility_successes:0,utility_enemies:0,flash_count:1,flash_successes:1,health_points_removed_total:1591,health_points_dealt_total:933,shots_fired_total:157,shots_on_target_total:31,v1_count:0,v1_wins:0,v2_count:0,v2_wins:0,entry_count:4,entry_wins:1,equipment_value:54800,money_saved:0,kill_reward:1800,live_time:439,head_shot_kills:5,cash_earned:54800,enemies_flashed:3},{matchid:4,mapnumber:0,steamid64:"76561199641521496",team:2,name:"Warken",kills:1,deaths:15,damage:150,assists:1,enemy5ks:0,enemy4ks:0,enemy3ks:0,enemy2ks:0,utility_count:0,utility_damage:0,utility_successes:0,utility_enemies:0,flash_count:0,flash_successes:0,health_points_removed_total:1500,health_points_dealt_total:150,shots_fired_total:82,shots_on_target_total:9,v1_count:0,v1_wins:0,v2_count:3,v2_wins:0,entry_count:1,entry_wins:0,equipment_value:46850,money_saved:0,kill_reward:600,live_time:621,head_shot_kills:0,cash_earned:45700,enemies_flashed:0}],G={team1:D,team2:N,map:O,stats:C},$=[];$.push(A);$.push(G);function R(e,l,a){const o=$.find(t=>t.map===a.toLowerCase()&&t.team1===e&&t.team2===l);return o?o.stats.map(t=>({matchid:t.matchid,mapnumber:t.mapnumber,steamid64:t.steamid64,team:t.team,name:t.name,kills:t.kills,deaths:t.deaths,damage:t.damage,assists:t.assists,enemy5ks:t.enemy5ks,enemy4ks:t.enemy4ks,enemy3ks:t.enemy3ks,enemy2ks:t.enemy2ks,utility_count:t.utility_count,utility_damage:t.utility_damage,utility_successes:t.utility_successes,utility_enemies:t.utility_enemies,flash_count:t.flash_count,flash_successes:t.flash_successes,health_points_removed_total:t.health_points_removed_total,health_points_dealt_total:t.health_points_dealt_total,shots_fired_total:t.shots_fired_total,shots_on_target_total:t.shots_on_target_total,v1_count:t.v1_count,v1_wins:t.v1_wins,v2_count:t.v2_count,v2_wins:t.v2_wins,entry_count:t.entry_count,entry_wins:t.entry_wins,equipment_value:t.equipment_value,money_saved:t.money_saved,kill_reward:t.kill_reward,live_time:t.live_time,head_shot_kills:t.head_shot_kills,cash_earned:t.cash_earned,enemies_flashed:t.enemies_flashed})):null}const x=[{group:1,team1:1,team2:2,games:[{score1:13,score2:2,map:y.MIRAGE,stats:R(2,1,y.MIRAGE),url:null},{score1:13,score2:2,map:y.DUST2,stats:R(1,2,y.DUST2),url:null},{score1:null,score2:null,map:null,stats:null,url:null}]},{group:1,team1:2,team2:3,games:[{score1:null,score2:null,map:null,stats:null,url:null},{score1:null,score2:null,map:null,stats:null,url:null},{score1:null,score2:null,map:null,stats:null,url:null}]},{group:1,team1:3,team2:4,games:[{score1:null,score2:null,map:null,stats:null,url:null},{score1:null,score2:null,map:null,stats:null,url:null},{score1:null,score2:null,map:null,stats:null,url:null}]},{group:1,team1:4,team2:1,games:[{score1:null,score2:null,map:null,stats:null,url:null},{score1:null,score2:null,map:null,stats:null,url:null},{score1:null,score2:null,map:null,stats:null,url:null}]},{group:1,team1:1,team2:3,games:[{score1:null,score2:null,map:null,stats:null,url:null},{score1:null,score2:null,map:null,stats:null,url:null},{score1:null,score2:null,map:null,stats:null,url:null}]},{group:1,team1:4,team2:2,games:[{score1:null,score2:null,map:null,stats:null,url:null},{score1:null,score2:null,map:null,stats:null,url:null},{score1:null,score2:null,map:null,stats:null,url:null}]}],J=`
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
            ${K(1,x)}
        </tbody>
      </table>
      
      <div class="pt-12">
        ${M(1,x)}
      </div>
    </div>
  </div>
`,T=`
  <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-8">Slutspel</h1>
  
  <h2 class="font-bold sm:truncate sm:tracking-tight pb-3">Uppdateras så fort gruppspelet är klart.</h2>
`,W=k.map((e,l)=>(++l,`<tr><td class="border p-4 text-left">${l}. ${e.firstname} <strong>${e.nickname}</strong> ${e.surname}</td></tr>`)),H=`
  <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-8">Deltagare</h1>
  
  <table class="w-full border-collapse border">
    <tbody>
        ${W.join("")}
    </tbody>
  </table>
`;function I(){return v.map(e=>`
            <div class="md:grid md:grid-flow-row md:mr-2 mb-4 md:mb-0">
                <table class="w-full border-collapse border">
                    <caption class="caption-top">${e.name}</caption>
                    <tbody>
                        ${e.members.slice().sort((l,a)=>(a.captain?1:0)-(l.captain?1:0)).map(l=>`<tr>
                                <td class="border p-4 text-left ${l.captain?"bg-yellow-200":""}">${l.firstname} <strong>${l.nickname}</strong> ${l.surname}</td>
                            </tr>`).join("")}
                    </tbody>
                </table>
            </div>
        `).join("")}const z=`
  <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-8">Lag</h1>
  
  <div class="md:grid md:grid-flow-col md:grid-cols-4 md:items-start">
    ${I()}
  </div>
`;function V(e,l){const a={};return a[e]={id:e,played:0,mapPlayed:0,won:0,mapWon:0,lost:0,mapLost:0,points:0,scored:0,conceded:0},l.forEach(({team1:o,team2:t,games:r})=>{let s=0;r.forEach(({score1:i,score2:m})=>{i===null||m===null||(a[e].mapPlayed++,o===e?(a[e].scored+=i,a[e].conceded+=m,i>m?(a[e].mapWon++,s++):(a[e].mapLost++,s--)):t===e&&(a[e].scored+=m,a[e].conceded+=i,m>i?(a[e].mapWon++,s++):(a[e].mapLost++,s--)))}),s!==0&&(s>0?(a[e].won++,a[e].points+=3):a[e].lost++,a[e].played++)}),a[e]}const U=k.slice().sort((e,l)=>{if(l.kills!==e.kills)return l.kills-e.kills;const a=e.kills/(e.deaths||1);return l.kills/(l.deaths||1)-a}).map((e,l)=>{let a=e.kills/e.deaths||0,o="";l===0?o="bg-yellow-200":l===1?o="bg-gray-200":l===2&&(o="bg-amber-100");let t=v.find(s=>s.team===e.team);if(!t)return"";let r=V(t.team,x);return`
        <tr class="odd:bg-white even:bg-gray-50 hover:bg-gray-200">
            <td class="border p-4 text-left ${o}">${e.firstname} <strong>${e.nickname}</strong> ${e.surname}</td>
            <td class="border p-4 text-left ${o}">${_(t?.team)}</td>
            <td class="border p-4 text-right ${o}">${r.played}</td>
            <td class="border p-4 text-right ${o}">${r.won}</td>
            <td class="border p-4 text-right ${o}">${r.lost}</td>
            <td class="border p-4 text-right ${o}">${e.kills}</td>
            <td class="border p-4 text-right ${o}">${e.deaths}</td>
            <td class="border p-4 text-right ${o}">${a.toFixed(2).replace(/[.,]00$/,"")}</td>
        </tr>
    `}),F=`
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
        ${U.join("")}
    </tbody>
  </table>
`,X=`
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
`,Q=[{path:"/",data:E},{path:"/groups",data:J},{path:"/playoffs",data:T},{path:"/participants",data:H},{path:"/teams",data:z},{path:"/stats",data:F},{path:"/rules",data:X}],w=()=>{const e=document.getElementById("root");if(!e)return;const l=Q.find(o=>o.path==window.location.pathname||"/fortnox-inhouse-tournament"+o.path==window.location.pathname);if(!l)return;const a=l.data;e.style.opacity="0.0",setTimeout(()=>{e.innerHTML=a,e.style.opacity="1.0"},50)},S=()=>{document.querySelectorAll("nav a").forEach(e=>{e.href===window.location.href?(e.classList.add("bg-emerald-950"),e.classList.remove("bg-transparent")):(e.classList.remove("bg-emerald-950"),e.classList.add("bg-transparent"))})},Y=e=>{if(!e)return;e.preventDefault();const l=e.target;l&&(history.pushState({},"newUrl",l.href),w(),S())},Z=()=>{window.addEventListener("popstate",w),window.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("nav a").forEach(e=>{e.addEventListener("click",Y)}),w(),S()})};Z();const tt=`
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
    ${tt}
    <div id="root" class="md:flex-1 md:w-full p-8"></div>
`;
