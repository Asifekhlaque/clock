const deg=6;
// getting all hands of clock from html through id
const hourHand=document.querySelector('#hour-hand');
const minuteHand=document.querySelector('#minute-hand');
const secondHand=document.querySelector('#second-hand');

setInterval(()=>{
    let day = new Date();

    //setting the actual seconds minutes and hour in clock

let ms = day.getMilliseconds()*deg;
let hh = day.getHours()* 30;
let mm = day.getMinutes()*deg;
let ss = day.getSeconds()*deg + ms/1000;

//changing the degrees in the style as per the time

hourHand.style.transform=`rotate(${(hh)+(mm/12)}deg)`;
minuteHand.style.transform=`rotate(${mm}deg)`;
secondHand.style.transform=`rotate(${ss}deg)`;
},1)