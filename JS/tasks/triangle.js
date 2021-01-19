function printTriangle(depth = 3) {
    for (let i = 0; i < depth; i++) {
        console.log(' '.repeat(depth - i) + '# '.repeat(i + 1));
    }
}

module.exports = {
    printTriangle: printTriangle
}