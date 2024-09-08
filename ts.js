document.addEventListener('mousemove', event => {
  
  let x = event.clientX
  let y = event.clientY

  const X = 90;
  const Y = 90;

 const cursor = document.querySelector('.cursor').style.left =  x + "px";
 const cursors = document.querySelector('.cursor').style.top =  y + "px";

 document.querySelector('.cursor').style.opacity =  1;


});

function revealCoaching() {

 document.querySelector('.CoachingOffer').style.height =  330 + "px";
 document.querySelector('.CoachingOffer').style.transition =  1 + "s" + ' ' + 'ease';

 document.querySelector('.fd').style.opacity =  1;
 document.querySelector('.fd').style.transition =  3.1 + "s" + ' ' + 'ease';

 document.querySelector('.book7').style.opacity =  1;
 document.querySelector('.book7').style.transition =  7 + "s" + ' ' + 'ease';

// Changing the others on click MASTERCLASS 

 document.querySelector('.MasterClassOffer').style.height =  130 + "px";
 document.querySelector('.MasterClassOffer').style.transition =  1 + "s" + ' ' + 'ease';

 document.querySelector('.fdh').style.opacity =  0;
 document.querySelector('.fdh').style.transition =  0.5 + "s" + ' ' + 'ease';

 document.querySelector('.book8').style.opacity =  0;
 document.querySelector('.book8').style.transition =  1 + "s" + ' ' + 'ease';

 // Changing the others on click SESSION
 
 document.querySelector('.Session').style.height =  130 + "px";
 document.querySelector('.Session').style.transition =  1 + "s" + ' ' + 'ease';

 document.querySelector('.fdj').style.opacity =  0;
 document.querySelector('.fdj').style.transition =  0.5 + "s" + ' ' + 'ease';

 document.querySelector('.book8').style.opacity =  0;
 document.querySelector('.book8').style.transition =  1 + "s" + ' ' + 'ease';

 document.querySelector('.book9').style.opacity =  0;
 document.querySelector('.book9').style.transition =  1 + "s" + ' ' + 'ease';
 
}


function revealMasterClass() {

 document.querySelector('.MasterClassOffer').style.height =  330 + "px";
 document.querySelector('.MasterClassOffer').style.transition =  1 + "s" + ' ' + 'ease';

 document.querySelector('.fdh').style.opacity =  1;
 document.querySelector('.fdh').style.transition =  3.1 + "s" + ' ' + 'ease';

 document.querySelector('.book8').style.opacity =  1;
 document.querySelector('.book8').style.transition =  7 + "s" + ' ' + 'ease';

 // Changing the others on click SESSION
 document.querySelector('.Session').style.height =  130 + "px";
 document.querySelector('.Session').style.transition =  1 + "s" + ' ' + 'ease';

 document.querySelector('.fdj').style.opacity =  0;
 document.querySelector('.fdj').style.transition =  0.5 + "s" + ' ' + 'ease';

 document.querySelector('.book9').style.opacity =  0;
 document.querySelector('.book9').style.transition =  1 + "s" + ' ' + 'ease';

  // Changing the others on click COACHING
  document.querySelector('.CoachingOffer').style.height =  130 + "px";
  document.querySelector('.CoachingOffer').style.transition =  0.5 + "s" + ' ' + 'ease';
 
  document.querySelector('.fd').style.opacity =  0;
  document.querySelector('.fd').style.transition =  0.5 + "s" + ' ' + 'ease';
 
  document.querySelector('.book7').style.opacity =  0;
  document.querySelector('.book7').style.transition =  0.3 + "s" + ' ' + 'ease';
}


function revealSession() {

  document.querySelector('.Session').style.height =  330 + "px";
  document.querySelector('.Session').style.transition =  1 + "s" + ' ' + 'ease';
 
  document.querySelector('.fdj').style.opacity =  1;
  document.querySelector('.fdj').style.transition =  3.1 + "s" + ' ' + 'ease';
 
  document.querySelector('.book8').style.opacity =  1;
  document.querySelector('.book8').style.transition =  7 + "s" + ' ' + 'ease';

 
  document.querySelector('.book9').style.opacity =  1;
  document.querySelector('.book9').style.transition =  7 + "s" + ' ' + 'ease';

 // Changing the others on click COACHING
  document.querySelector('.CoachingOffer').style.height =  130 + "px";
  document.querySelector('.CoachingOffer').style.transition =  0.5 + "s" + ' ' + 'ease';
 
  document.querySelector('.fd').style.opacity =  0;
  document.querySelector('.fd').style.transition =  0.5 + "s" + ' ' + 'ease';
 
  document.querySelector('.book7').style.opacity =  0;
  document.querySelector('.book7').style.transition =  0.3 + "s" + ' ' + 'ease';

   // Changing the others on click MASTERCLASS
  document.querySelector('.MasterClassOffer').style.height =  130 + "px";
  document.querySelector('.MasterClassOffer').style.transition =  1 + "s" + ' ' + 'ease';
 
  document.querySelector('.fdh').style.opacity =  0;
  document.querySelector('.fdh').style.transition =  0.5 + "s" + ' ' + 'ease';
 
  document.querySelector('.book8').style.opacity =  0;
  document.querySelector('.book8').style.transition =  1 + "s" + ' ' + 'ease';
 }