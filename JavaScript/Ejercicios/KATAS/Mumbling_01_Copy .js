// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

const nombre = 'atata';

const accum = (work) => { //=> identifica que es una funcion

    let result = '';
    let letraMay;

    for (let i = 0; i < work.length; i++) {
        
        if(i == 0) {
            result = result.concat(work[i]); 
        } else {
           result = result.concat(work[i].toLocaleUpperCase());            
        }

        for(let z = 0; z < i; z++) {     
            // if(z == 0) {
            //     result = result.concat(letraMay);            
            // }
            //result.toLocaleUpperCase
            
            result = result.concat(work[i]);
        }

        if(i != (work.length - 1))
        {
            result = result.concat('-');
        }
        
        //result = letra.concat();
    
    }

    return result;
};