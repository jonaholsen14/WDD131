
function calc_area(radius) {
    const PI = 3.14;
    let rad = radius;
    return rad * rad * PI;
}

function print_area(radius) {
    console.log("The area is " + calc_area(radius) + " with a radius of " + radius);
}

function main() {
    print_area(3);
    print_area(4);
}

main();