const button = document.getElementById('button');
const result = document.getElementById('result');

import { aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces } from './quotes.js';

button.addEventListener('click', ()=> {
    const select = document.getElementById('horoscope').value
    
    const randomQuote = (arr) => {
        const ranIndex = Math.floor(Math.random()*arr.length)
        return (arr[ranIndex])
    }
    //console.log(select)
    
    const quote = (select) => {
        
        if(select === 'Aries'){
            return randomQuote(aries)
        } 
        if(select === 'Taurus'){
            return randomQuote(taurus)
        }
        if(select === 'Gemini'){
            return randomQuote(gemini)
        }
        if(select === 'Cancer'){
            return randomQuote(cancer)
        }
        if(select === 'Gemini'){
            return randomQuote(gemini)
        }
        if(select === 'Leo'){
            return randomQuote(leo)
        }
        if(select === 'Virgo'){
            return randomQuote(virgo)
        }
        if(select === 'Libra'){
            return randomQuote(libra)
        }
        if(select === 'Scorpio'){
            return randomQuote(scorpio)
        }
        if(select === 'Sagittarius'){
            return randomQuote(sagittarius)
        }
        if(select === 'Capricorn'){
            return randomQuote(capricorn)
        }
        if(select === 'Aquarius'){
            return randomQuote(aquarius)
        }
        
        if(select === 'Pisces'){
            return randomQuote(pisces)
        }
        
    }

    return result.innerHTML = quote(select);
});


