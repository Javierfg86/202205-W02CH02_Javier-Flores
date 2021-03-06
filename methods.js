// eslint-disable-next-line prefer-const

export function push(array, item) {
    array[array.length] = item;
    return array.length;
}

export function length(array) {
    return array.length;
}

export function pop(array) {
    const result = array[array.length - 1];
    array.length = array.length - 1;
    return result;
}
export function shift(array) {
    return array[0];
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
