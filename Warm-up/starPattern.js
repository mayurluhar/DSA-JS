const n = 5;

console.log("Pattern 1: Right-angled Triangle");
for(let i = 1; i <= n; i++) {
    let row = "";
    for(let j = 0; j < i; j++) {
        row += "* ";
    }
    console.log(row);
}

console.log("\nPattern 2: Inverted Right-angled Triangle");
for(let i = n; i >= 1; i--) {
    let row = "";
    for(let j = 0; j < i; j++) {
        row += "* ";
    }
    console.log(row);
}

console.log("\nPattern 3: Right-aligned Triangle");
for(let i = 1; i <= n; i++) {
    let row = "";
    for(let j = 0; j < n - i; j++) {
        row += "  ";
    }
    for(let j = 0; j < i; j++) {
        row += "* ";
    }
    console.log(row);
}

console.log("\nPattern 4: Inverted Right-aligned Triangle");
for(let i = n; i >= 1; i--) {
    let row = "";
    for(let j = 0; j < n - i; j++) {
        row += "  ";
    }
    for(let j = 0; j < i; j++) {
        row += "* ";
    }
    console.log(row);
}

console.log("\nPattern 5: Pyramid");
for(let i = 1; i <= n; i++) {
    let row = "";
    for(let j = 0; j < n - i; j++) {
        row += " ";
    }
    for(let j = 0; j < 2 * i - 1; j++) {
        row += "*";
    }
    console.log(row);
}

console.log("\nPattern 6: Inverted Pyramid");
for(let i = n; i >= 1; i--) {
    let row = "";
    for(let j = 0; j < n - i; j++) {
        row += " ";
    }
    for(let j = 0; j < 2 * i - 1; j++) {
        row += "*";
    }
    console.log(row);
}

console.log("\nPattern 7: Diamond");
for(let i = 1; i <= n; i++) {
    let row = "";
    for(let j = 0; j < n - i; j++) {
        row += " ";
    }
    for(let j = 0; j < 2 * i - 1; j++) {
        row += "*";
    }
    console.log(row);
}
for(let i = n - 1; i >= 1; i--) {
    let row = "";
    for(let j = 0; j < n - i; j++) {
        row += " ";
    }
    for(let j = 0; j < 2 * i - 1; j++) {
        row += "*";
    }
    console.log(row);
}

console.log("\nPattern 8: Hollow Square");
for(let i = 0; i < n; i++) {
    let row = "";
    for(let j = 0; j < n; j++) {
        if(i === 0 || i === n - 1 || j === 0 || j === n - 1) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}

console.log("\nPattern 9: Hollow Pyramid");
for(let i = 1; i <= n; i++) {
    let row = "";
    for(let j = 0; j < n - i; j++) {
        row += " ";
    }
    for(let j = 0; j < 2 * i - 1; j++) {
        if(j === 0 || j === 2 * i - 2 || i === n) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}

console.log("\nPattern 10: Hollow Diamond");
for(let i = 1; i <= n; i++) {
    let row = "";
    for(let j = 0; j < n - i; j++) {
        row += " ";
    }
    for(let j = 0; j < 2 * i - 1; j++) {
        if(j === 0 || j === 2 * i - 2) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}
for(let i = n - 1; i >= 1; i--) {
    let row = "";
    for(let j = 0; j < n - i; j++) {
        row += " ";
    }
    for(let j = 0; j < 2 * i - 1; j++) {
        if(j === 0 || j === 2 * i - 2) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}

console.log("\nPattern 11: Number Triangle");
for(let i = 1; i <= n; i++) {
    let row = "";
    for(let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}

console.log("\nPattern 12: Number Pyramid");
for(let i = 1; i <= n; i++) {
    let row = "";
    for(let j = 0; j < n - i; j++) {
        row += " ";
    }
    for(let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}

console.log("\nPattern 13: Floyd's Triangle");
let num = 1;
for(let i = 1; i <= n; i++) {
    let row = "";
    for(let j = 0; j < i; j++) {
        row += num + " ";
        num++;
    }
    console.log(row);
}

console.log("\nPattern 14: Pascal's Triangle");
for(let i = 0; i < n; i++) {
    let row = "";
    for(let j = 0; j < n - i; j++) {
        row += " ";
    }
    let num = 1;
    for(let j = 0; j <= i; j++) {
        row += num + " ";
        num = num * (i - j) / (j + 1);
    }
    console.log(row);
}

console.log("\nPattern 15: Butterfly");
for(let i = 1; i <= n; i++) {
    let row = "";
    for(let j = 0; j < i; j++) {
        row += "*";
    }
    for(let j = 0; j < 2 * (n - i); j++) {
        row += " ";
    }
    for(let j = 0; j < i; j++) {
        row += "*";
    }
    console.log(row);
}
for(let i = n; i >= 1; i--) {
    let row = "";
    for(let j = 0; j < i; j++) {
        row += "*";
    }
    for(let j = 0; j < 2 * (n - i); j++) {
        row += " ";
    }
    for(let j = 0; j < i; j++) {
        row += "*";
    }
    console.log(row);
}

console.log("\nPattern 16: Hourglass");
for(let i = n; i >= 1; i--) {
    let row = "";
    for(let j = 0; j < n - i; j++) {
        row += " ";
    }
    for(let j = 0; j < 2 * i - 1; j++) {
        row += "*";
    }
    console.log(row);
}
for(let i = 2; i <= n; i++) {
    let row = "";
    for(let j = 0; j < n - i; j++) {
        row += " ";
    }
    for(let j = 0; j < 2 * i - 1; j++) {
        row += "*";
    }
    console.log(row);
}

console.log("\nPattern 17: X Pattern");
for(let i = 0; i < n; i++) {
    let row = "";
    for(let j = 0; j < n; j++) {
        if(i === j || i + j === n - 1) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}

console.log("\nPattern 18: Plus Pattern");
for(let i = 0; i < n; i++) {
    let row = "";
    for(let j = 0; j < n; j++) {
        if(i === Math.floor(n / 2) || j === Math.floor(n / 2)) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}

console.log("\nPattern 19: Zigzag");
const rows = 3;
for(let i = 0; i < rows; i++) {
    let row = "";
    for(let j = 0; j < n; j++) {
        if((i + j) % 4 === 0 || (i === 2 && j % 4 === 2)) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}

console.log("\nPattern 20: Rhombus");
for(let i = 1; i <= n; i++) {
    let row = "";
    for(let j = 0; j < n - i; j++) {
        row += " ";
    }
    for(let j = 0; j < n; j++) {
        row += "*";
    }
    console.log(row);
}