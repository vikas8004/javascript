export function greater_bet_three(a, b, c) {
    return (a > b) ? (a > c) ? a : c : (b > c) ? b : c;
}

export function ret(){
    console.log(this);
    return this;
}