const { Transform } = require('stream');

const toCamelCase = (str) => {
    let camel = str.charAt(0).toUpperCase();
    let strSpaces = str.toLowerCase().replace(/ /g, '').slice(1);
    camel += strSpaces;
    return camel;
}

const transfromStream = new Transform({
    transform(chunk, encoding, callback) {
        this.push(toCamelCase(chunk.toString()));
        callback();
    }
});

process.stdin.pipe(transfromStream).pipe(process.stdout);