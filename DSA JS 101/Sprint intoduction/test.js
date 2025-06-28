process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', chunk => {
    inputString += chunk;
});

process.stdin.on('end', () => {
    console.log('[received data]');
    console.log('You typed:\n', inputString);
});
