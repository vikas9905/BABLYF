export const  replacer = (key, value) => {
    return value.replace(/[^\w\s]/gi, '');
}