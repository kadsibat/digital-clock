

function Time(){


  
  let cift= i=>i<10?"0"+i:i;
    
 
  
  let hours= document.getElementById("hours");
  let minutes  =document.getElementById("minutes");
  let seconds=document.getElementById("seconds");
  let pm=document.getElementById("pm");

  const d = new Date();
  hours.innerText=cift((d.getHours()));
  minutes.innerText=cift((d.getMinutes()));
  seconds.innerText=cift((d.getSeconds()));

  if(d.getHours()<12){
    pm.innerText="AM"
  }

  setTimeout(Time, 1000);
}
Time();