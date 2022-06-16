setImmediate(() => {
    console.log("immediate");
})

process.nextTick(() => {
    console.log("process")
})

setTimeout(() => {
    console.log("setTimeout")
}, 0);

Promise.resolve().then(() => console.log('promise'))

