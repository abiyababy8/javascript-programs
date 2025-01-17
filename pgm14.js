// 1
// 1 2
// 1 2 3 
// 1 2 3 4
// 1 2 3 4 5

for (var i = 1; i <= 5; i++) {
    var str = "";
    for (var j = 1; j <= i; j++) {
        str = str + j + ' '
    }
    console.log(str);

}

// *
// * *
// * * *
// * * * *
for (var i = 1; i <= 4; i++) {
    var str = "";
    for (var j = 1; j <= i; j++) {
        str = str + '*' + ' ';
    }
    console.log(str);
}

// * * * * *
// * * * * *
// * * * * *
for (var k = 1; k <= 3; k++) {
    var str = "";
    for (var l = 1; l <= 5; l++) {
        str = str + "* ";
    }
    console.log(str);
}

// * * * * *
// * * * * 
// * * *
// * *
// *

for (var i = 5; i >= 1; i--) {
    str = "";
    for (var j = 1; j <= i; j++) {
        str = str + "* ";
    }
    console.log(str);
}

// 1 1 1 1
// 2 2 2 2
// 3 3 3 3 
// 4 4 4 4
// 5 5 5 5
for (var i = 1; i <= 5; i++) {
    var str = "";
    for (var j = 1; j <= 4; j++) {
        str = str + i + ' ';
    }
    console.log(str);
}

// 1 
// 2 2 
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5 

for (var i = 1; i <= 5; i++) {
    var str = "";
    for (var j = 1; j <= i; j++) {
        str = str + i + ' ';
    }
    console.log(str);
}

// *
// * *
// * * *
// * * * *
// * * * * 
// * * *
// * *
// *

for (var i = 1; i <= 4; i++) {
    str = "";
    for (var j = 1; j <= i; j++) {
        str = str + "* ";
    }
    console.log(str);
}
for (var i = 5; i >= 1; i--) {
    str = "";
    for (var j = 5; j <= 5; j++) {
        str = str + "* ";
    }
    console.log(str);
}

// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
for (var i = 1; i <= 4; i++) {
    var str = "";
    for (var j = 1; j <= 5; j++) {
        str = str + j + " ";
    }
    console.log(str);
}
