/**
 * Created by AUTHOR: Wrangler on 05-Mar-16.
 */
 /*
    Fill-in the following citation line for your wranglet:
    <p><cite> create2dMatrix </cite> Author: Wrangler   WrangleID: Wrangler </p>
 */

function createNdMatrix(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

createNdMatrix();      // [] or new Array()

createNdMatrix(2);    // new Array(2)

createNdMatrix(3, 2); // [new Array(2),
                      //  new Array(2),
                      //  new Array(2)]

var iMatrix = createNdMatrix(2,3);
iMatrix[1][1] = 1;
iMatrix[1][2] = 3;
iMatrix[1][3] = 5;

iMatrix[2][1] = 2;
iMatrix[2][2] = 4;
iMatrix[2][3] = 6;

/*
   This should create matrix:
   | 1  3  5 |
   | 2  4  6 |
 */
console.log("| " + iMatrix[1][1] + "  " + iMatrix[1][2] + "  " + iMatrix[1][3] + " |");
console.log("| " + iMatrix[2][1] + "  " + iMatrix[2][2] + "  " + iMatrix[2][3] + " |");