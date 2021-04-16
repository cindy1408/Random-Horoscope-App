const button = document.getElementById('button');
const result = document.getElementById('result');


//const horoscopeArr = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra',' Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];


import {userHoroscope} from './quotes.js';

//Drop down list 
let html = []
const signs = Object.keys(userHoroscope);
console.log(signs);

    for(let i = 0; i < signs.length; i++){
        html.push('<option>' + signs[i] + '</option>')
    };
document.getElementById('horoscope').innerHTML = html.join("")




button.addEventListener('click', ()=> {
    const select = document.getElementById('horoscope').value
    
    const randomQuote = (arr) => {
        const ranIndex = Math.floor(Math.random()*arr.length)
        return (arr[ranIndex])
    }
    //console.log(select)
    
    const quote = (select) => {
        //let selected = select.toLowerCase()
        //console.log(selected)
        
        let userArray = userHoroscope[select]
        //console.log(userArray)
        
        //console.log(Object.keys(userHoroscope[selected]))
        
        if(select === undefined){
            return 'Please select you sign.'
        } else {
            return randomQuote(userArray)
        }
    }
    return result.innerHTML = quote(select);
});


