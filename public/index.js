const button = document.getElementById('button');
const result = document.getElementById('result');

//import { aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces } from './quotes.js';
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
        
        if(selected === selected){
            return randomQuote(userArray)
        }
    }
    return result.innerHTML = quote(select);
});


