!function(){const e=document.querySelector(".preloader"),t=document.querySelector(".preloader__progress-line");let n=10,o=!1;function i(){e.classList.add("preloader--hide"),document.body.classList.remove("forbid-scroll"),setTimeout((()=>{e.style.zIndex="-1"}),1e3)}t.style.width=`${n}%`,setInterval((()=>{n<=99?(t.style.width=`${n}%`,n+=1):o&&(t.style.width=`${n}%`,i())}),25),window.addEventListener("load",(()=>{o=!0,n>99&&(t.style.width=`${n}%`,i()),window.scrollTo(0,0);const e=document.querySelector(".intro__bg-shadow"),l=document.querySelector(".footer"),d=e.getBoundingClientRect().top,r=l.getBoundingClientRect().top,w=window.innerWidth>1441?300:window.innerWidth>1025?200:100;let s=l.clientHeight,c=0,h=window.innerWidth;e.style.height=`${h}px`,window.addEventListener("scroll",(()=>{window.scrollY>c&&(c=window.scrollY,-(d-window.scrollY-window.innerHeight)-w>0&&(e.style.transform=`translateY(${-1*(d-window.scrollY-window.innerHeight+w)}px)`,e.style.height=h- -1*(d-window.scrollY-window.innerHeight+w)+"px",-(r-window.scrollY-window.innerHeight)-s>0&&(e.style.transform=`translateY(${-1*(d-window.scrollY-window.innerHeight+w)+h- -1*(d-window.scrollY-window.innerHeight+w)}px)`,e.style.height="0px")))}))}))}();