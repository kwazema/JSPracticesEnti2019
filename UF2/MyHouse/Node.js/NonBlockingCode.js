

// Set Timeout con una funcion anonima
// Codigo bloqueante pero NodeJs lo convierte en codigo no bloqueante
setTimeout(function(){ 
    console.log("Async")
}, 2000);

console.log("Now");