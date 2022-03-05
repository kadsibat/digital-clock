

function Time(){


  
  let cift=no =>no<10 ? "0" + no : no; 
  
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
  else{
    pm.innerText="PM"
  }

  setTimeout(Time, 1000);
}
Time();