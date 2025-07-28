for (let i = 0; i < 5; i++) {
    let line = "";
    for (let j = 0; j < i; j++) line += " ";
    for (let k = 0; k < 2 * (5 - i) - 1; k++) {
        line += (i === 0 || i === 4 || k === 0 || k === 2 * (5 - i) - 2) ? "*" : " ";
    }
    console.log(line);
}

