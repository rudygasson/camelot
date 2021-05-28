function pick(obj, keys) {
    let picked = {};
    keys.forEach(el => {
        picked[el] = obj[el];
    });
    return picked;
}

export default pick;
