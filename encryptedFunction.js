function encryptedFunction(s) {
    const filteredStr = s.split(" ").join("");
    const strLength = filteredStr.length;
    const min = Math.floor(Math.sqrt(strLength));
    const max = Math.ceil(Math.sqrt(strLength));
 
   rows = (min * max < strLength) ? max : min;
    let grid = [];
    for (let i = 0; i < min; i++) {
        let rowStart = i * max;
        let rowEnd = rowStart + max;
        grid.push(filteredStr.slice(rowStart, Math.min(rowEnd,rowEnd=rowEnd< strLength ? rowEnd : strLength)));
    }

    grid.map(el => console.log(el));
}
encryptedFunction("if man was meant to stay on the ground god would have given us roots");