const { Transform } = require('stream');

const transfromStream = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

process.stdin.pipe(transfromStream).pipe(process.stdout);