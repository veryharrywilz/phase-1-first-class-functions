function callbackFunction(x){
    console.log ('I was called');
}
function receivesAFunction(callbackFunction) {
    return callbackFunction;
}
