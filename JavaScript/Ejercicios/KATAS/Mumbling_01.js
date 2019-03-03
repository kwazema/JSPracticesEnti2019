// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

const nombre = 'AdriaN';

const accum = (work) => { //=> identifica que es una funcion

    let result = '';

    for (let i = 0; i < work.length; i++) {
        
        result = result.concat(work[i].toUpperCase());            

        for(let z = 0; z < i; z++) {     
            
            result = result.concat(work[i].toLowerCase());
        }

        if(i != (work.length - 1))
        {
            result = result.concat('-');
        }
    }
    return result;
};

console.log(accum(nombre));
//console.log(nombre.slice(0, ));