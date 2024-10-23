import{b as E,Z as j}from"./graph-e9862b7e-C4cwkMCV.js";import{m as J,Y as U}from"./layout-2e6f21ea-C2T3qYZn.js";import{a as Y}from"./clone-06085faa-TsHSpogt.js";import{h as Z,m as A,y as H,o as W,x as q,t as B,p as O,u as z,g as K,f as Q,d as V,R as G,B as T}from"./edges-16a2be2d-BaLZ3yVx.js";import{L as i,J as D,d as C,T as R}from"./mermaid.esm.min-Bbv2PCap.js";import{U as _}from"./createText-323577ec-J1CGUCia.js";function y(r){var e={options:{directed:r.isDirected(),multigraph:r.isMultigraph(),compound:r.isCompound()},nodes:ee(r),edges:te(r)};return E(r.graph())||(e.value=Y(r.graph())),e}function ee(r){return J(r.nodes(),function(e){var t=r.node(e),a=r.parent(e),n={v:e};return E(t)||(n.value=t),E(a)||(n.parent=a),n})}function te(r){return J(r.edges(),function(e){var t=r.edge(e),a={v:e.v,w:e.w};return E(e.name)||(a.name=e.name),E(t)||(a.value=t),a})}let l={},u={},I={};const re=()=>{u={},I={},l={}},S=(r,e)=>(i.trace("In isDescendant",e," ",r," = ",u[e].includes(r)),!!u[e].includes(r)),ne=(r,e)=>(i.info("Descendants of ",e," is ",u[e]),i.info("Edge is ",r),r.v===e||r.w===e?!1:u[e]?u[e].includes(r.v)||S(r.v,e)||S(r.w,e)||u[e].includes(r.w):(i.debug("Tilt, ",e,",not in descendants"),!1)),L=(r,e,t,a)=>{i.warn("Copying children of ",r,"root",a,"data",e.node(r),a);const n=e.children(r)||[];r!==a&&n.push(r),i.warn("Copying (nodes) clusterId",r,"nodes",n),n.forEach(o=>{if(e.children(o).length>0)L(o,e,t,a);else{const c=e.node(o);i.info("cp ",o," to ",a," with parent ",r),t.setNode(o,c),a!==e.parent(o)&&(i.warn("Setting parent",o,e.parent(o)),t.setParent(o,e.parent(o))),r!==a&&o!==r?(i.debug("Setting parent",o,r),t.setParent(o,r)):(i.info("In copy ",r,"root",a,"data",e.node(r),a),i.debug("Not Setting parent for node=",o,"cluster!==rootId",r!==a,"node!==clusterId",o!==r));const g=e.edges(o);i.debug("Copying Edges",g),g.forEach(h=>{i.info("Edge",h);const f=e.edge(h.v,h.w,h.name);i.info("Edge data",f,a);try{ne(h,a)?(i.info("Copying as ",h.v,h.w,f,h.name),t.setEdge(h.v,h.w,f,h.name),i.info("newGraph edges ",t.edges(),t.edge(t.edges()[0]))):i.info("Skipping copy of edge ",h.v,"-->",h.w," rootId: ",a," clusterId:",r)}catch(w){i.error(w)}})}i.debug("Removing node",o),e.removeNode(o)})},k=(r,e)=>{const t=e.children(r);let a=[...t];for(const n of t)I[n]=r,a=[...a,...k(n,e)];return a},X=(r,e)=>{i.trace("Searching",r);const t=e.children(r);if(i.trace("Searching children of id ",r,t),t.length<1)return i.trace("This is a valid node",r),r;for(const a of t){const n=X(a,e);if(n)return i.trace("Found replacement for",r," => ",n),n}},N=r=>!l[r]||!l[r].externalConnections?r:l[r]?l[r].id:r,ie=(r,e)=>{if(!r||e>10){i.debug("Opting out, no graph ");return}else i.debug("Opting in, graph ");r.nodes().forEach(function(t){r.children(t).length>0&&(i.warn("Cluster identified",t," Replacement id in edges: ",X(t,r)),u[t]=k(t,r),l[t]={id:X(t,r),clusterData:r.node(t)})}),r.nodes().forEach(function(t){const a=r.children(t),n=r.edges();a.length>0?(i.debug("Cluster identified",t,u),n.forEach(o=>{if(o.v!==t&&o.w!==t){const c=S(o.v,t),g=S(o.w,t);c^g&&(i.warn("Edge: ",o," leaves cluster ",t),i.warn("Descendants of XXX ",t,": ",u[t]),l[t].externalConnections=!0)}})):i.debug("Not a cluster ",t,u)});for(let t of Object.keys(l)){const a=l[t].id,n=r.parent(a);n!==t&&l[n]&&!l[n].externalConnections&&(l[t].id=n)}r.edges().forEach(function(t){const a=r.edge(t);i.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),i.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(r.edge(t)));let n=t.v,o=t.w;if(i.warn("Fix XXX",l,"ids:",t.v,t.w,"Translating: ",l[t.v]," --- ",l[t.w]),l[t.v]&&l[t.w]&&l[t.v]===l[t.w]){i.warn("Fixing and trixing link to self - removing XXX",t.v,t.w,t.name),i.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),n=N(t.v),o=N(t.w),r.removeEdge(t.v,t.w,t.name);const c=t.w+"---"+t.v;r.setNode(c,{domId:c,id:c,labelStyle:"",labelText:a.label,padding:0,shape:"labelRect",style:""});const g=structuredClone(a),h=structuredClone(a);g.label="",g.arrowTypeEnd="none",h.label="",g.fromCluster=t.v,h.toCluster=t.v,r.setEdge(n,c,g,t.name+"-cyclic-special"),r.setEdge(c,o,h,t.name+"-cyclic-special")}else if(l[t.v]||l[t.w]){if(i.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),n=N(t.v),o=N(t.w),r.removeEdge(t.v,t.w,t.name),n!==t.v){const c=r.parent(n);l[c].externalConnections=!0,a.fromCluster=t.v}if(o!==t.w){const c=r.parent(o);l[c].externalConnections=!0,a.toCluster=t.w}i.warn("Fix Replacing with XXX",n,o,t.name),r.setEdge(n,o,a,t.name)}}),i.warn("Adjusted Graph",y(r)),F(r,0),i.trace(l)},F=(r,e)=>{if(i.warn("extractor - ",e,y(r),r.children("D")),e>10){i.error("Bailing out");return}let t=r.nodes(),a=!1;for(const n of t){const o=r.children(n);a=a||o.length>0}if(!a){i.debug("Done, no node has children",r.nodes());return}i.debug("Nodes = ",t,e);for(const n of t)if(i.debug("Extracting node",n,l,l[n]&&!l[n].externalConnections,!r.parent(n),r.node(n),r.children("D")," Depth ",e),!l[n])i.debug("Not a cluster",n,e);else if(!l[n].externalConnections&&r.children(n)&&r.children(n).length>0){i.warn("Cluster without external connections, without a parent and with children",n,e);let o=r.graph().rankdir==="TB"?"LR":"TB";l[n]&&l[n].clusterData&&l[n].clusterData.dir&&(o=l[n].clusterData.dir,i.warn("Fixing dir",l[n].clusterData.dir,o));const c=new j({multigraph:!0,compound:!0}).setGraph({rankdir:o,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});i.warn("Old graph before copy",y(r)),L(n,r,c,n),r.setNode(n,{clusterNode:!0,id:n,clusterData:l[n].clusterData,labelText:l[n].labelText,graph:c}),i.warn("New graph after copy node: (",n,")",y(c)),i.debug("Old graph after copy",y(r))}else i.warn("Cluster ** ",n," **not meeting the criteria !externalConnections:",!l[n].externalConnections," no parent: ",!r.parent(n)," children ",r.children(n)&&r.children(n).length>0,r.children("D"),e),i.debug(l);t=r.nodes(),i.warn("New list of nodes",t);for(const n of t){const o=r.node(n);i.warn(" Now next level",n,o),o.clusterNode&&F(o.graph,e+1)}},$=(r,e)=>{if(e.length===0)return[];let t=Object.assign(e);return e.forEach(a=>{const n=r.children(a),o=$(r,n);t=[...t,...o]}),t},ae=r=>$(r,r.children()),oe=(r,e)=>{i.info("Creating subgraph rect for ",e.id,e);const t=D(),a=r.insert("g").attr("class","cluster"+(e.class?" "+e.class:"")).attr("id",e.id),n=a.insert("rect",":first-child"),o=C(t.flowchart.htmlLabels),c=a.insert("g").attr("class","cluster-label"),g=e.labelType==="markdown"?_(c,e.labelText,{style:e.labelStyle,useHtmlLabels:o}):c.node().appendChild(G(e.labelText,e.labelStyle,void 0,!0));let h=g.getBBox();if(C(t.flowchart.htmlLabels)){const d=g.children[0],s=R(g);h=d.getBoundingClientRect(),s.attr("width",h.width),s.attr("height",h.height)}const f=0*e.padding,w=f/2,p=e.width<=h.width+f?h.width+f:e.width;e.width<=h.width+f?e.diff=(h.width-e.width)/2-e.padding/2:e.diff=-e.padding/2,i.trace("Data ",e,JSON.stringify(e)),n.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",e.x-p/2).attr("y",e.y-e.height/2-w).attr("width",p).attr("height",e.height+f);const{subGraphTitleTopMargin:x}=B(t);o?c.attr("transform",`translate(${e.x-h.width/2}, ${e.y-e.height/2+x})`):c.attr("transform",`translate(${e.x}, ${e.y-e.height/2+x})`);const v=n.node().getBBox();return e.width=v.width,e.height=v.height,e.intersect=function(d){return T(e,d)},a},de=(r,e)=>{const t=r.insert("g").attr("class","note-cluster").attr("id",e.id),a=t.insert("rect",":first-child"),n=0*e.padding,o=n/2;a.attr("rx",e.rx).attr("ry",e.ry).attr("x",e.x-e.width/2-o).attr("y",e.y-e.height/2-o).attr("width",e.width+n).attr("height",e.height+n).attr("fill","none");const c=a.node().getBBox();return e.width=c.width,e.height=c.height,e.intersect=function(g){return T(e,g)},t},se=(r,e)=>{const t=D(),a=r.insert("g").attr("class",e.classes).attr("id",e.id),n=a.insert("rect",":first-child"),o=a.insert("g").attr("class","cluster-label"),c=a.append("rect"),g=o.node().appendChild(G(e.labelText,e.labelStyle,void 0,!0));let h=g.getBBox();if(C(t.flowchart.htmlLabels)){const d=g.children[0],s=R(g);h=d.getBoundingClientRect(),s.attr("width",h.width),s.attr("height",h.height)}h=g.getBBox();const f=0*e.padding,w=f/2,p=e.width<=h.width+e.padding?h.width+e.padding:e.width;e.width<=h.width+e.padding?e.diff=(h.width+e.padding*0-e.width)/2:e.diff=-e.padding/2,n.attr("class","outer").attr("x",e.x-p/2-w).attr("y",e.y-e.height/2-w).attr("width",p+f).attr("height",e.height+f),c.attr("class","inner").attr("x",e.x-p/2-w).attr("y",e.y-e.height/2-w+h.height-1).attr("width",p+f).attr("height",e.height+f-h.height-3);const{subGraphTitleTopMargin:x}=B(t);o.attr("transform",`translate(${e.x-h.width/2}, ${e.y-e.height/2-e.padding/3+(C(t.flowchart.htmlLabels)?5:3)+x})`);const v=n.node().getBBox();return e.height=v.height,e.intersect=function(d){return T(e,d)},a},le=(r,e)=>{const t=r.insert("g").attr("class",e.classes).attr("id",e.id),a=t.insert("rect",":first-child"),n=0*e.padding,o=n/2;a.attr("class","divider").attr("x",e.x-e.width/2-o).attr("y",e.y-e.height/2).attr("width",e.width+n).attr("height",e.height+n);const c=a.node().getBBox();return e.width=c.width,e.height=c.height,e.diff=-e.padding/2,e.intersect=function(g){return T(e,g)},t},he={rect:oe,roundedWithTitle:se,noteGroup:de,divider:le};let P={};const ce=(r,e)=>{i.trace("Inserting cluster");const t=e.shape||"rect";P[e.id]=he[t](r,e)},ge=()=>{P={}},M=async(r,e,t,a,n,o)=>{i.info("Graph in recursive render: XXX",y(e),n);const c=e.graph().rankdir;i.trace("Dir in recursive render - dir:",c);const g=r.insert("g").attr("class","root");e.nodes()?i.info("Recursive render XXX",e.nodes()):i.info("No nodes found for",e),e.edges().length>0&&i.trace("Recursive edges",e.edge(e.edges()[0]));const h=g.insert("g").attr("class","clusters"),f=g.insert("g").attr("class","edgePaths"),w=g.insert("g").attr("class","edgeLabels"),p=g.insert("g").attr("class","nodes");await Promise.all(e.nodes().map(async function(d){const s=e.node(d);if(n!==void 0){const m=JSON.parse(JSON.stringify(n.clusterData));i.info("Setting data for cluster XXX (",d,") ",m,n),e.setNode(n.id,m),e.parent(d)||(i.trace("Setting parent",d,n.id),e.setParent(d,n.id,m))}if(i.info("(Insert) Node XXX"+d+": "+JSON.stringify(e.node(d))),s&&s.clusterNode){i.info("Cluster identified",d,s.width,e.node(d));const m=await M(p,s.graph,t,a,e.node(d),o),b=m.elem;A(s,b),s.diff=m.diff||0,i.info("Node bounds (abc123)",d,s,s.width,s.x,s.y),H(b,s),i.warn("Recursive render complete ",b,s)}else e.children(d).length>0?(i.info("Cluster - the non recursive path XXX",d,s.id,s,e),i.info(X(s.id,e)),l[s.id]={id:X(s.id,e),node:s}):(i.info("Node - the non recursive path",d,s.id,s),await W(p,e.node(d),c))})),e.edges().forEach(function(d){const s=e.edge(d.v,d.w,d.name);i.info("Edge "+d.v+" -> "+d.w+": "+JSON.stringify(d)),i.info("Edge "+d.v+" -> "+d.w+": ",d," ",JSON.stringify(e.edge(d))),i.info("Fix",l,"ids:",d.v,d.w,"Translating: ",l[d.v],l[d.w]),q(w,s)}),e.edges().forEach(function(d){i.info("Edge "+d.v+" -> "+d.w+": "+JSON.stringify(d))}),i.info("#############################################"),i.info("###                Layout                 ###"),i.info("#############################################"),i.info(e),U(e),i.info("Graph after layout:",y(e));let x=0;const{subGraphTitleTotalMargin:v}=B(o);return ae(e).forEach(function(d){const s=e.node(d);i.info("Position "+d+": "+JSON.stringify(e.node(d))),i.info("Position "+d+": ("+s.x,","+s.y,") width: ",s.width," height: ",s.height),s&&s.clusterNode?(s.y+=v,O(s)):e.children(d).length>0?(s.height+=v,ce(h,s),l[s.id].node=s):(s.y+=v/2,O(s))}),e.edges().forEach(function(d){const s=e.edge(d);i.info("Edge "+d.v+" -> "+d.w+": "+JSON.stringify(s),s),s.points.forEach(b=>b.y+=v/2);const m=z(f,d,s,l,t,e,a);K(s,m)}),e.nodes().forEach(function(d){const s=e.node(d);i.info(d,s.type,s.diff),s.type==="group"&&(x=s.diff)}),{elem:g,diff:x}},me=async(r,e,t,a,n)=>{Z(r,t,a,n),Q(),V(),ge(),re(),i.warn("Graph at first:",JSON.stringify(y(e))),ie(e),i.warn("Graph after:",JSON.stringify(y(e)));const o=D();await M(r,e,a,n,void 0,o)};export{me as b};
