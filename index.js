const button = document.getElementById('button');
const result = document.getElementById('result');

let dropdown = document.getElementById('horoscope')

//Drop down list 
const horoscopeArr = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra',' Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

let html = []
    for(let i = 0; i < horoscopeArr.length; i++){
        html.push('<option>' + horoscopeArr[i] + '</option>')
    };
document.getElementById('horoscope').innerHTML = html.join("")



import {userHoroscope} from './quotes.js';
button.addEventListener('click', ()=> {
    const select = document.getElementById('horoscope').value
    
    const randomQuote = (arr) => {
        const ranIndex = Math.floor(Math.random()*arr.length)
        return (arr[ranIndex])
    }
    //console.log(select)
    
    const quote = (select) => {
        let selected = select.toLowerCase()
        //console.log(selected)
        
        let userArray = userHoroscope[selected]
        //console.log(userArray)
        
        //console.log(Object.keys(userHoroscope[selected]))
        
        if(selected === undefined){
            return 'Please select you sign.'
        } else {
            return randomQuote(userArray)
        }
    }
    return result.innerHTML = quote(select);
});


