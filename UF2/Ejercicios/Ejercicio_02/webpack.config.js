const path = require('path'); 

module.exports = { 
    entry: './index.js', 
    output: { 
        filename: 'main.js', 
        publicPath: '/dist',
        path: path.resolve(__dirname, 'dist') 
    },
    watch: true, // Cada vez que guardas actualiza el dist.
    devtool: 'eval-source-map', // Traducir el dist y el codigo para mostrar en el navegar.
    mode: 'development', // 
    
    devServer: {
        port: 1975 // Puerto para utilizar Live Realad
    }
};