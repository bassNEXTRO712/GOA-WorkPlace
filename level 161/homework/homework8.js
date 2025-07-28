//xmovnebi da tanxmovnebiii

process.stdin.on('data', (input) => {
const userInput = input.toString().trim().toLocaleLowerCase();
const vowels = ['a', 'e', 'i', 'o', 'u'];
if (vowels.includes(userInput)) {
    console.log('You entered a vowel', userInput);
    
}else{
    console.log('You Did Enter  Consonant,', userInput);
    
}
    process.exit();
})