const sum = (a, b) => a + b; // => return
const subs = (a, b) => a - b; // => return

module.exports = {sum, subs}; // La forma más popular de 
// module.exports = sum; // expose(exponer) this functions
// module.exports = {hello: suma, bye: subs}; // Nos sirve para cambiar el nombre de como las llamariamos