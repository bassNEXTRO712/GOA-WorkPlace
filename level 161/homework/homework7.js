process.stdin.on('data', (input) => {
    const userInput = input.toString().trim();
    const hiddenPassword = 'x'.repeat(userInput.length);
    console.log(`You entered: ${hiddenPassword}`);
    process.exit();
})