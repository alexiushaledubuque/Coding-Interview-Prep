var rect1 = {
    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 20,

    // width and height
    width: 4,
    height: 3,
};

var rect2 = {
    // coordinates of bottom-left corner
    leftX: 20,
    bottomY:20,

    // width and height
    width: 6,
    height: 2,
};

const findRangeOverlap = (point1, length1, point2, length2) => {
    // find the highest start point and lowest end point.
    // the highest ("rightmost" or "upmost") start point is
    // the start point of the overlap.
    // the lowest end point is the end point of the overlap.
    var highestStartPoint = Math.max(point1, point2);
    var lowestEndPoint = Math.min(point1 + length1, point2 + length2);

    // return null overlap if there is no overlap
    if (highestStartPoint >= lowestEndPoint) {
        return {startPoint: null, overlapLength: null};
    }

    // compute the overlap length
    var overlapLength = lowestEndPoint - highestStartPoint;

    return {startPoint: highestStartPoint, overlapLength: overlapLength};
}

const findRectangularOverlap = (rect1, rect2) => {

    // get the x and y overlap points and lengths
    var xOverlap = findRangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
    var yOverlap = findRangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

    console.log(`xOverlap ${JSON.stringify(xOverlap, null, 2)}`)
    console.log()
    console.log(`yOverlap ${JSON.stringify(yOverlap, null, 2)}`)
    
    if (xOverlap.overlapLength || yOverlap.overlapLength) {
      return true
    } else {
      return false
    }
}

findRectangularOverlap(rect1, rect2)