// if the point resides inside of the rectangle
// True is returned. if not, false

const pointRectangleIntersection = (p, r) => {
    return p.x > r.x1 && p.x < r.x2 && p.y > r.y1 && p.y < r.y2;
}

var point = {x: 1, y: 2};
var rectangle = {x1: 0, x2: 10, y1: 1, y2: 7}; // true with this rectangle
var rectangle = {x1: 10, x2: 10, y1: 1, y2: 7}; // false

pointRectangleIntersection(point, rectangle);