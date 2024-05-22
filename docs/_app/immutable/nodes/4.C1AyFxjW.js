import{s as B,n as P,a as N}from"../chunks/scheduler.BfJEPAwo.js";import{S as O,i as X,e as v,s as x,c as b,g as L,a as C,b as _,d as f,f as p,h as D,t as I,k as R,l as E,m as T,n as F,H as W,o as K,w as Y,j as g,p as U,q as Z,r as ee,u as te,v as ae,x as V}from"../chunks/index.q_cr5NIQ.js";import{e as q}from"../chunks/each.D6YF6ztN.js";import{I as ie}from"../chunks/ImagePopout.XmxrPK4x.js";function J(o,t,i){const l=o.slice();return l[1]=t[i],l}function $(o,t,i){const l=o.slice();return l[4]=t[i],l}function A(o,t,i){const l=o.slice();return l[7]=t[i],l}function le(o){let t,i,l,a="View on GitHub",r,e;return{c(){t=v("div"),i=v("a"),l=v("span"),l.textContent=a,r=x(),e=v("i"),this.h()},l(n){t=b(n,"DIV",{class:!0});var c=_(t);i=b(c,"A",{href:!0,target:!0,class:!0});var s=_(i);l=b(s,"SPAN",{class:!0,"data-svelte-h":!0}),L(l)!=="svelte-w8ing4"&&(l.textContent=a),r=C(s),e=b(s,"I",{class:!0}),_(e).forEach(f),s.forEach(f),c.forEach(f),this.h()},h(){p(l,"class","ml-2"),p(e,"class","bi bi-github"),p(i,"href",o[1].github),p(i,"target","_blank"),p(i,"class","bg-dim2 px-6 py-2 rounded-full"),p(t,"class","my-8 text-xl font-bold")},m(n,c){D(n,t,c),g(t,i),g(i,l),g(i,r),g(i,e)},p:P,d(n){n&&f(t)}}}function ne(o){let t,i,l=q(o[1].img),a=[];for(let e=0;e<l.length;e+=1)a[e]=H(A(o,l,e));const r=e=>E(a[e],1,1,()=>{a[e]=null});return{c(){t=v("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=b(e,"DIV",{class:!0});var n=_(t);for(let c=0;c<a.length;c+=1)a[c].l(n);n.forEach(f),this.h()},h(){p(t,"class","mt-4 flex flex-wrap gap-4")},m(e,n){D(e,t,n);for(let c=0;c<a.length;c+=1)a[c]&&a[c].m(t,null);i=!0},p(e,n){if(n&1){l=q(e[1].img);let c;for(c=0;c<l.length;c+=1){const s=A(e,l,c);a[c]?(a[c].p(s,n),I(a[c],1)):(a[c]=H(s),a[c].c(),I(a[c],1),a[c].m(t,null))}for(U(),c=l.length;c<a.length;c+=1)r(c);R()}},i(e){if(!i){for(let n=0;n<l.length;n+=1)I(a[n]);i=!0}},o(e){a=a.filter(Boolean);for(let n=0;n<a.length;n+=1)E(a[n]);i=!1},d(e){e&&f(t),T(a,e)}}}function H(o){let t,i,l,a;return i=new ie({props:{title:o[7].title,path:"/images/"+o[7].url}}),{c(){t=v("div"),Z(i.$$.fragment),l=x()},l(r){t=b(r,"DIV",{});var e=_(t);ee(i.$$.fragment,e),l=C(e),e.forEach(f)},m(r,e){D(r,t,e),te(i,t,null),g(t,l),a=!0},p:P,i(r){a||(I(i.$$.fragment,r),a=!0)},o(r){E(i.$$.fragment,r),a=!1},d(r){r&&f(t),ae(i)}}}function se(o){let t,i=q(o[1].vid),l=[];for(let a=0;a<i.length;a+=1)l[a]=Q($(o,i,a));return{c(){t=v("div");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){t=b(a,"DIV",{class:!0});var r=_(t);for(let e=0;e<l.length;e+=1)l[e].l(r);r.forEach(f),this.h()},h(){p(t,"class","mt-4 flex flex-wrap gap-4")},m(a,r){D(a,t,r);for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(t,null)},p(a,r){if(r&1){i=q(a[1].vid);let e;for(e=0;e<i.length;e+=1){const n=$(a,i,e);l[e]?l[e].p(n,r):(l[e]=Q(n),l[e].c(),l[e].m(t,null))}for(;e<l.length;e+=1)l[e].d(1);l.length=i.length}},d(a){a&&f(t),T(l,a)}}}function Q(o){let t,i,l,a;return{c(){t=v("div"),i=v("iframe"),a=x(),this.h()},l(r){t=b(r,"DIV",{class:!0});var e=_(t);i=b(e,"IFRAME",{title:!0,src:!0,style:!0});var n=_(i);n.forEach(f),a=C(e),e.forEach(f),this.h()},h(){p(i,"title",o[4].url),N(i.src,l=o[4].url)||p(i,"src",l),i.allowFullscreen=!0,V(i,"min-height","40vh"),V(i,"width","100%"),p(t,"class","mt-5 w-full")},m(r,e){D(r,t,e),g(t,i),g(t,a)},p:P,d(r){r&&f(t)}}}function j(o){let t,i,l=o[1].name+"",a,r,e,n,c=o[1].text+"",s,m,u,S,M,w=o[1].github&&le(o),y=o[1].img&&o[1].img.length&&ne(o),k=o[1].vid&&o[1].vid.length&&se(o);return{c(){t=v("div"),i=v("h3"),a=F(l),r=x(),e=v("p"),n=new W(!1),s=x(),w&&w.c(),m=x(),y&&y.c(),u=x(),k&&k.c(),S=x(),this.h()},l(h){t=b(h,"DIV",{class:!0});var d=_(t);i=b(d,"H3",{class:!0});var z=_(i);a=K(z,l),z.forEach(f),r=C(d),e=b(d,"P",{class:!0});var G=_(e);n=Y(G,!1),G.forEach(f),s=C(d),w&&w.l(d),m=C(d),y&&y.l(d),u=C(d),k&&k.l(d),S=C(d),d.forEach(f),this.h()},h(){p(i,"class","box-title"),n.a=null,p(e,"class","mt-4 text-lg"),p(t,"class","box my-2 w-full")},m(h,d){D(h,t,d),g(t,i),g(i,a),g(t,r),g(t,e),n.m(c,e),g(t,s),w&&w.m(t,null),g(t,m),y&&y.m(t,null),g(t,u),k&&k.m(t,null),g(t,S),M=!0},p(h,d){h[1].github&&w.p(h,d),h[1].img&&h[1].img.length&&y.p(h,d),h[1].vid&&h[1].vid.length&&k.p(h,d)},i(h){M||(I(y),M=!0)},o(h){E(y),M=!1},d(h){h&&f(t),w&&w.d(),y&&y.d(),k&&k.d()}}}function re(o){let t,i="PROJECTS",l,a,r,e=q(o[0]),n=[];for(let s=0;s<e.length;s+=1)n[s]=j(J(o,e,s));const c=s=>E(n[s],1,1,()=>{n[s]=null});return{c(){t=v("h1"),t.textContent=i,l=x(),a=v("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){t=b(s,"H1",{class:!0,"data-svelte-h":!0}),L(t)!=="svelte-1petqxv"&&(t.textContent=i),l=C(s),a=b(s,"DIV",{class:!0});var m=_(a);for(let u=0;u<n.length;u+=1)n[u].l(m);m.forEach(f),this.h()},h(){p(t,"class","page-title"),p(a,"class","flex flex-wrap gap-6")},m(s,m){D(s,t,m),D(s,l,m),D(s,a,m);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(a,null);r=!0},p(s,[m]){if(m&1){e=q(s[0]);let u;for(u=0;u<e.length;u+=1){const S=J(s,e,u);n[u]?(n[u].p(S,m),I(n[u],1)):(n[u]=j(S),n[u].c(),I(n[u],1),n[u].m(a,null))}for(U(),u=e.length;u<n.length;u+=1)c(u);R()}},i(s){if(!r){for(let m=0;m<e.length;m+=1)I(n[m]);r=!0}},o(s){n=n.filter(Boolean);for(let m=0;m<n.length;m+=1)E(n[m]);r=!1},d(s){s&&(f(t),f(l),f(a)),T(n,s)}}}function oe(o){return[[{name:"Integrated multi-functional environmental characterization system",link:"imes",github:"https://github.com/ericmuckley/IMES",text:`Screening functional materials for performance in sensing and optoelectronic applications is significantly accelerated by automated control of environmental conditions and measurement settings using real-time feedback. This integrated multifunctional characterization system at the <a class="mx-1" target="_blank" href="https://www.ornl.gov/facility/cnms">Center for Nanophase Materials Sciences</a> at <a class="mx-1" target="_blank" href="https://www.ornl.gov/">Oak Ridge National Laboratory</a> is used for rapidly screening materials and sensors across an ultra-wide range frequency spectrum spanning electrical, gravimetric/vsicoelastic, and optical functional modes. The system's control software interfaces with over 15 different scientific instruments and performs real-time data analytics and machine learning for enabling autonomous experiments.`,img:[{url:"IMES_broadband.JPG",title:"Capabilities of the autonomous characterization system"},{url:"IMES_screenshot.JPG",title:"Python-based control software"},{url:"system343b.jpg",title:"Autonomous characterization system"},{url:"systemcentered.jpg",title:"Autonomous characterization system"}],vid:[{url:"https://www.youtube.com/embed/TG-s2J7XrX8?autoplay=0&loop=1&playlist=TG-s2J7XrX8"}]},{name:"Automated nanomaterials processing system",link:"laser-triggering",github:"https://github.com/ericmuckley/laser_triggering",text:'Development of functional nanomaterials is accelerated when laser processing can occur in tandem with in situ spectroscopic characterization. The control software triggers laser pulses, acquisition of Raman spectra, motorized translational stages, and control of motorized optical polarizer/analyzer systems. The system is in use at one of the laser processing labs for 2D materials at the <a class="mx-1" href="https://www.ornl.gov/facility/cnms">Center for Nanophase Materials Sciences</a> at <a class="mx-1" href="https://www.ornl.gov/">Oak Ridge National Laboratory</a>.',img:[{url:"laser-triggering-ui.jpg",title:"User interface for controlling automated laser processing system"},{url:"laser-triggering-diagram.jpg",title:"Schematic diagram of laser processing system"},{url:"laserlabpano.jpg",title:"Laser processing lab"}]},{name:"Smart beer brewing system",link:"brewing",github:"https://github.com/ericmuckley/smart_homebrewing_system",text:`Home-brewed beer fermentation process can be monitored in real-time using a raspberry pi computer, camera, and array of gas/vapor sensors. The camera acquires images of the fermentation at constant 
                time intervals as the sensors measure tepmerature, pressure, relative humidity, and alcohol concentration (measured by MQ-X gas sensors) over time. Data is wirelessly streamed to a remote server for analytics and plotting.`,img:[{url:"carboy.JPG",title:"Fermentation vessel with sensors and camera"}],vid:[{url:"https://www.youtube.com/embed/_vpxnixSp3A?autoplay=0&loop=1&playlist=_vpxnixSp3A"}]},{name:"Real-time machine learning",link:"rt-ml",text:"To reap the benefits of predictive analytics in real-time, its often necessary to stream data directly from acquisition sources into model training workflows, which enables dynamic models that improve as training data evolves.",vid:[{url:"https://www.youtube.com/embed/iIOD1UxuxVo?autoplay=0&loop=1&playlist=iIOD1UxuxVo"},{url:"https://www.youtube.com/embed/qShslUHae9w?autoplay=0&loop=1&playlist=qShslUHae9w"}],tags:["data science","machine learning","visualization"]},{name:"Machine learning performance diagnostics",link:"modeldiagnostics",text:"Tuning machine learning model parameters is often difficult due to the large number of degrees of freedom in the model. Parameter convergence often occurs by automated Bayesian optimization and domain-specific constraints for balancing prediction accuracy and resources required for model training.",img:[],vid:[{url:"https://www.youtube.com/embed/b6TPW9VnTuk?autoplay=0&loop=1&playlist=b6TPW9VnTuk"}]},{name:"Spectral deconvolution",link:"peakfinding",text:"Reliable tools for automated peak detection and spectral deconvolution are critical in many areas of science and engineering. In some cases it is possible to automate spectal deconvolution by simulation of Gaussian-shaped peaks which enables reconstruction of the fitted signal. Peak positions are tracked over time to more easily enable prediction of future peak positions. The positions, widths, and equivalent circuit model parameters can be extracted from each peak automatically and tracked over time to further aid in prediction of signal evolution.",img:[],vid:[{url:"https://www.youtube.com/embed/G8a7ou1wLBw?autoplay=0&loop=1&playlist=G8a7ou1wLBw"}]},{name:"Viscoelastic modeling application",link:"qcmdapp",github:"https://github.com/ericmuckley/QCMD_calculator",text:"The quartz crystal microbalance with energy dissipation monitoring (QCM-D) is an advanced tool for measuring miniscule changes in gravimetic and viscoelastic properties of nanomaterials. Modeling QCM-D response requires specialized numerical solvers using estimates of film thickness, density, shear modulus, and bulk modulus.",img:[{url:"QCMD-app-UI.JPG",title:"QCM-D modeling application"},{url:"QCMD-app-df-surface.JPG",title:"Calculated surface for solutions in fequency shift space"},{url:"QCMD-app-dD-surface.JPG",title:"Calculated surface for solutions in eneergy dissipation space"},{url:"QCMD-app-solution.JPG",title:"Estimation of point at which different solution spaces converge"}],tags:["data visualization","data science","phyiscs"]},{name:"Sequential learning simulator",link:"slsimulator",text:"Cloud-based simulator for estimating throughput, cost, and time associated with AI-driven materials discovery and development.",img:[{url:"SL-dashboard.png",title:"SL simulator homepage"}],tags:["cloud","data science","machine learning"]},{name:"Data buddy",link:"databuddy",github:"https://github.com/ericmuckley/data-buddy",text:"Cloud tool for exploratory data visualization, analysis, and machine learning.",img:[{url:"data-buddy.png",title:"Data buddy user interface"}],tags:["cloud","data science","machine learning"]}]]}class de extends O{constructor(t){super(),X(this,t,oe,re,B,{})}}export{de as component};
