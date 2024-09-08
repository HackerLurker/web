document.addEventListener('mousemove', event => {
  
    let x = event.clientX
    let y = event.clientY
  
    const X = 90;
    const Y = 90;
  
   const cursor = document.querySelector('.cursor').style.left =  x + "px";
   const cursors = document.querySelector('.cursor').style.top =  y + "px";
  
   document.querySelector('.cursor').style.opacity =  1;
  
  
  });