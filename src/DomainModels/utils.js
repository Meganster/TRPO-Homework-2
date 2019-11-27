export function filterObject(object, callback) {
    var rez = {}, key;
    for (key in object) {
        if (object.hasOwnProperty(key) && callback(object[key])) {
            rez[key] = object[key];
        }
    }
    return rez;
};
