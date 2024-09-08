window.addEventListener ('scroll', () =>{
  
   const ScrollY = Math.round(window.scrollY);
   const fo = document.querySelector('.scroll-watcher').style.top = ScrollY + "px";
   
    if( fo <= "1000px"){
       document.querySelector('.scroll-watcher').style.top = 1100 + "px";
       document.querySelector('.scroll-watcher').style.transition = 1 + "s" + ' ' + "ease";

    }
    if( fo <= "1650px"){
      document.querySelector('.scroll-watcher').style.top = 1100 + "px";
      document.querySelector('.scroll-watcher').style.transition = 1 + "s" + ' ' + "ease";

    }
  console.log(fo);
  })

document.addEventListener('mousemove', event => {
  
  let x = event.clientX
  let y = event.clientY

  const X = 90;
  const Y = 90;

 const cursor = document.querySelector('.cursor').style.left =  x + "px";
 const cursors = document.querySelector('.cursor').style.top =  y + "px";

 document.querySelector('.cursor').style.opacity =  1;

});