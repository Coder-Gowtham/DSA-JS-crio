
function gcd(a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

function LCM(a, b) {
    return (a * b) / gcd(a, b)
}