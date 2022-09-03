function solve(obj) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriRegex = /\w+/g;
    let message = /[<\>\\&\'\"\)]+/g;

    if (!obj.method || !validMethods.includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`)
    }
    if (!obj.uri || obj.uri === "" || !uriRegex.test(obj.uri)) {
        throw new Error(`Invalid request header: Invalid URI`);
    }
    if (!obj.version || !validVersion.includes(obj.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }
    if (obj.message === undefined || !obj.message == "" || message.test(obj.message)) {
        throw new Error(`Invalid request header: Invalid Message`);
    }
    // console.log(obj);
    return obj
}
solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
})