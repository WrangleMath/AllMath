/**
 * Created by AUTHOR: Wrangler on 05-Mar-16.
 */
 /*
    Fill-in the following citation line for your wranglet:
    <p><cite> create2dMatrix </cite> Author: Wrangler   WrangleID: Wrangler </p>
 */

function create2DMatrix(rows) {  // rows = 1 implies [x,y,x,...)
    var arr = [];

    for (var i=0;i<rows;i++) {
        arr[i] = [];
    }

    return arr;
}

var iMatrix = create2DMatrix(2);
iMatrix[1][1] = 1;
iMatrix[1][2] = 3;
iMatrix[1][3] = 5;

iMatrix[2][1] = 2;
iMatrix[2][2] = 4;
iMatrix[2][3] = 6;

/*
   This should create:
   |1 3 5|
   |2 4 6|
 */
console.log("| " + iMatrix[1][1] + "  " + iMatrix[1][2] + "  " + iMatrix[1][3] + " |");
console.log("| " + iMatrix[2][1] + "  " + iMatrix[2][2] + "  " + iMatrix[2][3] + " |");