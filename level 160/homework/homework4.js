process.stdin.on('data', (userInput) => {
    const input = userInput.toString().trim().toUpperCase();
    console.log(input);
    process.exit();
})