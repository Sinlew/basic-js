export function romanToInteger(str) {
    var values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    var digits = Object.keys(values);
    var res = 0;

    for (var q = 0; q < str.length; ++q) {
        if (digits.indexOf(str[q]) < digits.indexOf(str[q + 1])) {
            res -= values[str[q]];
        } else {
            res += values[str[q]];
        }
    }

    return res;
}
