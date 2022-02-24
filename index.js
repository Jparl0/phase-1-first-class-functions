function receivesAFunction (callback) {
    return callback;
}
receivesAFunction("Spy");

function returnsANamedFunction(functionName) {
    return functionName;
}
returnsANamedFunction();

let anonFunction = function (){

}
function returnsAnAnonymousFunction() {
    return anonFunction;

}

