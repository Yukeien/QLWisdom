export function importAsArray(module) {
    var array = []

    Object.keys(module).forEach(rows => {
        array.push(module[rows]);
    });

    return array;
}