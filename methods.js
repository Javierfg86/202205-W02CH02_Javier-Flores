// eslint-disable-next-line prefer-const
let array;

export function push(array, item) {
    array[array.length] = item;
    return array.length;
}
push(array, 0);

export function length() {
    return array.length;
}

export function pop(array) {
    const result = array[array.length - 1];
    array.length = array.length - 1;
    return result;
}
export function shift(array) {
    const result = array[0];
    return result;
}
export function unshift(array, item) {
    const temp = [item];
    array = [...temp, ...array];

    return array.length;
}
export function join(array) {
    array = String(array);
    return array;
}

export function some(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return true;
        }
    }
}
