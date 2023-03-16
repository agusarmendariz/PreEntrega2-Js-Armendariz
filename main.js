class Banda{
    constructor(nombre,genero,precioEntrada,presentacionesPorMes,showMendoza){
    this.nombre= nombre;
    this.genero=genero;
    this.precioEntrada=parseFloat(precioEntrada);
    this.presentacionesPorMes=parseInt(presentacionesPorMes);
    this.showMendoza= showMendoza;
    };
    
}

const fito = new Banda("FITO PAEZ","rock",5500,3,true);
const divididos = new Banda("DIVIDIDOS", "rock",4500,4,true);
const lali= new Banda ("LALI","pop",5000,5,false);
const bandalos= new Banda("BANDALOS CHINOS","pop indie",4000,3,false);

const Bandas= [fito,divididos,lali,bandalos];

Bandas.push(new Banda("CONOCIENDO RUSIA","rock indie",3500,2,true));
Bandas.push(new Banda("BABASONICOS","rock",6000,5,true));
Bandas.push(new Banda("LA KONGA","cuarteto",4000,3,true));
Bandas.push(new Banda("WOS","rap",4500,1,false));
Bandas.push(new Banda("TINI","pop",6000,4,false));
Bandas.push(new Banda("CIRO Y LOS PERSAS","rock",5500,2,true));
console.log("Bandas",Bandas);

function enMendoza(ingresar){
   return Bandas.filter(objeto => objeto.nombre === ingresar.toUpperCase() && objeto.showMendoza ===true) 
}

for (let index = 0; index < Bandas.length ; index++) {
    let ingresar = enMendoza (prompt('INGRESAR NOMBRE DE BANDA'));
    if(ingresar.length==1){
         alert('SI ACTUA EN MENDOZA');
    }else{
        alert('NO ACTUA EN MENDOZA ');
    }
}

console.log(enMendoza());


