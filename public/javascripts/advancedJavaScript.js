function sampleFn1() {
    return "I'm function 1!";
}

function sampleFn2() {
    return "I'm function 2!";
}

function functionWrapper(functionToCall) {
    alert( "Wrapping function -- " + functionToCall() );
}
