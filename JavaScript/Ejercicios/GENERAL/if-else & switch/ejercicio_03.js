const notas = [ 5, 6, 8, 4 ];

switch (notas[3]) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("Insuficiente");
        break;
    case 5:
    case 6:
        console.log("Suficiente");
        break;
    case 7:
    case 8:
        console.log("Notable");
        break;
    case 9:
    case 10:
        console.log("Excelente");
        break;
    }