(() => {
const OWNER="aaronjamesgarcia681-sys", REPO="DANMACHI-RETELLING-OF-THE-LEGEND-", BRANCH="main";
const RAW="https://raw.githubusercontent.com/"+OWNER+"/"+REPO+"/"+BRANCH+"/";
const GH="https://github.com/"+OWNER+"/"+REPO+"/blob/"+BRANCH+"/";
const pages=[
{ id:"home",title:"Project Wiki",group:"Overview",path:"Wiki/README.md",desc:"Start here: project identity, navigation and source rules."},
{ id:"timeline",title:"Arcs & Timeline",group:"Story",path:"Wiki/Timeline-and-Arcs.md",desc:"Eight arc labels, verified checkpoints and chronology cautions."},
{ id:"characters",title:"Character Directory",group:"Story",path:"Wiki/Characters/README.md",desc:"Character index and profile standards."},
{ id:"bell",title:"Bell Cranel",group:"Characters",path:"Wiki/Characters/Bell-Cranel.md",desc:"Protagonist foundation, verified checkpoints and open status fields."},
{ id:"ein",title:"Ein",group:"Characters",path:"Wiki/Characters/Ein.md",desc:"Arc 8 purification, awakening and relationship evidence."},
{ id:"world",title:"World & Factions",group:"Story",path:"Wiki/World-and-Factions.md",desc:"Locations, organizations and setting notes."},
{ id:"systems",title:"Systems & Abilities",group:"Story",path:"Wiki/Systems-and-Abilities.md",desc:"Falna, magic, skills, equipment and unresolved mechanics."},
{ id:"continuity",title:"Continuity Guide",group:"Project records",path:"Wiki/Continuity-Guide.md",desc:"Authority hierarchy, evidence labels and editorial rules."},
{ id:"editorial",title:"Editorial Status",group:"Project records",path:"Wiki/Editorial-Status.md",desc:"What is verified, missing, provisional or unresolved."}
];
const content=document.getElementById("content"), search=document.getElementById("search"), results=document.getElementById("searchResults"), sidebar=document.getElementById("sidebar");
const cache=new Map();
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function inline(s){return esc(s).replace(/\[([^\]]+)\]\(([^)]+)\)/g,(m,t,u)=>{let url=u;if(!/^https?:|^mailto:|^#/.test(url)){const found=pages.find(p=>p.path.endsWith(url.split("/").pop()));url=found?"#/"+found.id:GH+url.replace(/^\.\.\//,"");}return '<a href="'+url+'"'+(/^https?:/.test(url)?' target="_blank" rel="noopener"':'')+'>'+t+'</a>';}).replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>");}
function markdown(md){
 const lines=md.replace(/\r/g,"").split("\n");let out="",list="",table=false,para=[];
 const flush=()=>{if(para.length){out+="<p>"+inline(para.join(" "))+"</p>";para=[];}if(list){out+="</"+list+">";list="";}if(table){out+="</tbody></table>";table=false;}};
 for(let i=0;i<lines.length;i++){const l=lines[i],t=l.trim();
 if(!t){flush();continue;}
 if(/^\|.*\|$/.test(t)){if(!table){flush();table=true;out+='<table><tbody>';}if(/^\|[\s:|-]+\|$/.test(t))continue;const cells=t.replace(/^\||\|$/g,"").split("|").map(x=>x.trim());const head=out.endsWith("<tbody>");out+=head?"<tr>"+cells.map(x=>"<th>"+inline(x)+"</th>").join("")+"</tr>":"<tr>"+cells.map(x=>"<td>"+inline(x)+"</td>").join("")+"</tr>";continue;}
 if(/^#{1,4} /.test(t)){flush();const n=t.match(/^#+/)[0].length;const title=t.slice(n+1);const id=title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");out+="<h"+n+" id='"+id+"'>"+inline(title)+"</h"+n+">";continue;}
 if(/^---+$/.test(t)){flush();out+="<hr>";continue;}
 if(/^>/.test(t)){flush();out+="<blockquote>"+inline(t.replace(/^>\s?/,""))+"</blockquote>";continue;}
 if(/^[-*] /.test(t)||/^\d+\. /.test(t)){flush();const typ=/^\d/.test(t)?"ol":"ul";if(list!==typ){if(list)out+="</"+list+">";list=typ;out+="<"+typ+">";}out+="<li>"+inline(t.replace(/^([-*]|\d+\.)\s+/,""))+"</li>";continue;}
 if(/^\`\`\`/.test(t)){flush();let code=[];while(++i<lines.length&&!/^\`\`\`/.test(lines[i]))code.push(lines[i]);out+="<pre><code>"+esc(code.join("\n"))+"</code></pre>";continue;}
 para.push(t);
 }flush();return out;
}
async function load(p){if(cache.has(p.id))return cache.get(p.id);const r=await fetch(RAW+p.path);if(!r.ok)throw new Error("Could not load "+p.path+" ("+r.status+")");const md=await r.text();cache.set(p.id,md);return md;}
function setActive(id){document.querySelectorAll("#nav a").forEach(a=>a.classList.toggle("active",a.dataset.page===id));}
async function render(id){const p=pages.find(x=>x.id===id);setActive(id);sidebar.classList.remove("open");if(id==="chapters"){renderChapters();return;}if(!p){renderHome();return;}content.innerHTML='<div class="loading"><span class="spinner"></span> Loading '+esc(p.title)+'…</div>';try{const md=await load(p);const html=markdown(md);content.innerHTML='<div class="article-head"><div class="crumb">THE LEGEND ARCHIVE / '+esc(p.group.toUpperCase())+'</div><h1>'+esc(p.title)+'</h1><div class="crumb">'+esc(p.desc)+'</div></div><article>'+html+'</article><div class="sourcebar">SOURCE FILE · <a href="'+GH+p.path+'" target="_blank" rel="noopener">'+esc(p.path)+'</a> · <a href="https://github.com/'+OWNER+'/'+REPO+'" target="_blank" rel="noopener">Repository</a></div>';content.focus({preventScroll:true});}catch(e){content.innerHTML='<div class="error">The article could not be loaded. Check your connection and try again.<br><small>'+esc(e.message)+'</small></div>';}}
function renderHome(){content.innerHTML='<section class="hero"><span class="hero-tag">PROJECT ENCYCLOPEDIA · PUBLIC EDITION</span><div class="eyebrow">AN ARCHIVE OF A DIFFERENT LEGEND</div><h1>DanMachi:<br>Retelling of the Legend</h1><p>A searchable, source-linked reference for the alternate timeline, characters, events, abilities and continuity of the project.</p><p><span class="pill">SOURCE-LINKED</span><span class="pill">CONTINUITY-AWARE</span><span class="pill">REPOSITORY-DRIVEN</span></p></section><div class="callout"><strong>Read this first.</strong> This wiki is a derived reference layer. The manuscript and author-approved project records outrank any wiki summary. Unknown information stays marked <code>[OPEN]</code>; it is never filled by guesswork.</div><h2>Explore the archive</h2><div class="card-grid">'+pages.slice(1).map(p=>'<a class="card" href="#/'+p.id+'"><span class="symbol">✧</span><strong>'+esc(p.title)+'</strong><span>'+esc(p.desc)+'</span></a>').join('')+'<a class="card" href="#/chapters"><span class="symbol">⌁</span><strong>Chapter Archive</strong><span>Browse the chapter files currently indexed in the repository.</span></a></div><h2>Editorial principle</h2><p>Evidence comes before completeness. A missing chapter, unresolved identity, uncertain status value or character theory must remain visibly uncertain until an authoritative source resolves it.</p><p><a href="#/continuity">Read the continuity guide →</a></p><div class="sourcebar">PRIMARY SOURCE · <a href="'+GH+'README.md" target="_blank">Repository README</a> · <a href="'+GH+'02_MASTER_CONTINUITY.md" target="_blank">Master continuity</a> · <a href="'+GH+'05_MANUSCRIPT_INDEX_AND_GAPS.md" target="_blank">Manuscript index</a></div>';}
async function renderChapters(){content.innerHTML='<div class="article-head"><div class="crumb">THE LEGEND ARCHIVE / STORY</div><h1>Chapter Archive</h1><div class="crumb">Live directory listing from the public GitHub repository.</div></div><div class="loading"><span class="spinner"></span> Reading chapter folders…</div>';try{const paths=["Manuscript","Arc 8 - Crescendo"];let all=[];for(const path of paths){const r=await fetch("https://api.github.com/repos/"+OWNER+"/"+REPO+"/contents/"+encodeURIComponent(path).replace(/%2F/g,"/")+"?ref="+BRANCH);if(!r.ok)continue;const data=await r.json();all=all.concat(data.filter(x=>x.type==="file"&&/chapter/i.test(x.name)).map(x=>({...x,folder:path})));}const seen=new Set();all=all.filter(x=>{const k=x.name.toLowerCase();if(seen.has(k))return false;seen.add(k);return true;}).sort((a,b)=>{const n=x=>Number((x.name.match(/chapter\s*(\d+)/i)||[])[1]||999);return n(a)-n(b);});content.innerHTML='<div class="article-head"><div class="crumb">THE LEGEND ARCHIVE / STORY</div><h1>Chapter Archive</h1><div class="crumb">Live directory listing · duplicate filenames are collapsed for display only.</div></div><div class="callout"><strong>Storage rule:</strong> Chapter 71 onward belongs in <code>Manuscript/</code>. Existing historical copies are preserved; this listing does not move or delete anything.</div><div class="chapter-list">'+all.map(x=>'<a class="chapter-row" href="'+x.html_url+'" target="_blank" rel="noopener"><span><b>'+esc(x.name)+'</b><small>'+esc(x.folder)+'</small></span><span class="state">OPEN SOURCE ↗</span></a>').join('')+'</div><div class="sourcebar">Fetched from the GitHub Contents API. <a href="'+GH+'Manuscript" target="_blank">Open Manuscript folder</a></div>';}catch(e){content.innerHTML='<div class="error">The chapter listing could not be retrieved. '+esc(e.message)+'</div>';}}
let searchSequence=0;
async function searchIndex(q){
 const query=q.toLowerCase().trim(), seq=++searchSequence;
 if(!query){results.hidden=true;return;}
 results.hidden=false;results.innerHTML='<a>Searching article text…</a>';
 try{
  const docs=await Promise.all(pages.map(async p=>({p,md:await load(p)})));
  if(seq!==searchSequence)return;
  const hits=docs.map(({p,md})=>{const match=md.split('\n').find(line=>line.toLowerCase().includes(query));const titleMatch=(p.title+' '+p.desc+' '+p.path).toLowerCase().includes(query);return {p,match,titleMatch};}).filter(x=>x.match||x.titleMatch);
  results.innerHTML=hits.length?hits.map(x=>'<a href="#/'+x.p.id+'">'+esc(x.p.title)+'<small>'+esc((x.match||x.p.desc).replace(/[#*_>|]/g,'').slice(0,150))+'</small></a>').join(''):'<a>No matching article text found.</a>';
 }catch(e){results.innerHTML='<a>Search unavailable. Check your connection.</a>';}
}
search.addEventListener("input",()=>searchIndex(search.value));
search.addEventListener("keydown",e=>{if(e.key==="Enter"){const first=results.querySelector("a[href]");if(first)location.href=first.href;}if(e.key==="Escape"){results.hidden=true;search.blur();}});
document.addEventListener("click",e=>{if(!e.target.closest(".search-wrap"))results.hidden=true;});
document.getElementById("menuToggle").addEventListener("click",()=>sidebar.classList.toggle("open"));
window.addEventListener("hashchange",()=>{const id=location.hash.replace(/^#\/?/,"")||"home";render(id);});
if(!location.hash)location.hash="/home";else render(location.hash.replace(/^#\/?/,""));
})();