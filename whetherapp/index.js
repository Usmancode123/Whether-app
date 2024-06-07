const input = document.querySelector('input');
const btn = document.querySelector('i');
const country = document.querySelector('.Country');
const  city = document.querySelector('.city');
const h1 = document.querySelector('#third');
const time = document.querySelector('.time');
// console.log(btn,input);;

// const apiKey='9b818c9d474e49eebb994546240706'
const cityName='Pune'
;


 async function getData(cityInput){
  const response = await  fetch(`http://api.weatherapi.com/v1/current.json?key=9b818c9d474e49eebb994546240706&q=${cityInput}&aqi=yes`)
 return await response.json()

}  
btn.addEventListener('click', async()=>{
const value=input.value
  const result = await getData(value)
  console.log(result);
country.innerHTML=`${result.location.country}`
city.innerHTML=`${result.location.name}`
h1.innerHTML=`${result.current.temp_c}`
time.innerHTML=`${result.location.localtime}`
})