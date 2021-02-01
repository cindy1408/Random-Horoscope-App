const facts = ['The moon has moonquakes.',
'Humans are the only animals that blush.',
'The hottest spot on the planet is in Libya. El Azizia, in Libya, where a temperature of 136 degrees Fahrenheit was recorded on Sept. 13, 1922.',
'Rabbits can\'t puke.',
'The "M\'s" in M&Ms stand for "Mars" and "Murrie."',
'Copper door knobs are self-disinfecting.',
'The English word with the most definitions is "set."',
' The Famous Easter Island Heads Have Hidden Bodies.',
' Competitive art used to be in the Olympics.',
'"OMG" usage can be traced back to 1917.',
'Some cats are actually allergic to humans.',
'The majority of your brain is fat.',
'There was a successful Tinder match in Antarctica in 2014.']
const random = Math.floor(Math.random() *facts.length)
console.log( 'Fact of the day:  ' + facts[random]);
