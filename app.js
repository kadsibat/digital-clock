// let hours= document.getElementById("hours");
// let minutes  =document.getElementById("minutes");
// let seconds=document.getElementById("seconds");
// let pm=document.getElementById("pm");
// // console.log(seconds);

// const second=1000*60
// const minute = second * 60;
// const hour = minute * 60;
// const day = hour * 24;





// function cift(i) {
//     if (i < 10) {i = "0" + i}
//     return i;
//   }
  
// setInterval(function(){

//   pm.innerText=hours>=12 ? "PM":" "

// },1000)


  

function Time(){


  
  function cift(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

  
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