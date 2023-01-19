function calculateCircleArea(r) {
    const radius = r || 1;
    return Math.PI * radius * radius;
}

function calculateCircleArea2(r = 1) {
    return Math.PI * r * r;
}

const area = calculateCircleArea();
console.log(area);

const calculateCircleArea4 = (r = 1) => Math.PI * r * r;