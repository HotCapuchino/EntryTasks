function main(arraySize = 5, range = 100) {
    let arr = new Array(arraySize);
    let modifiedArr = [];

    function fillArray() {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = Math.floor((Math.random() * range) - range / 2);
        }
        console.log(arr.toString());
    }
    
    function replaceFromArray () {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) arr[i] = 0;
        }
        console.log(arr.toString());
    }
    
    function addToArray() {
        for (let i = 0; i < arr.length; i++) {
            modifiedArr.push(arr[i]);
            if (i % 2 === 0 && arr[i] === 0) {
                modifiedArr.push(-1);
            }
        }
        arr = modifiedArr;
        console.log(arr.toString());
    }
    fillArray();
    replaceFromArray();
    addToArray();
}

module.exports = {
    main: main
}