/*
class meccha{
    constructor(arma){
        this.arma= arma
    }
    tipo(){
        return console.log(`${this.arma}`)
    }
}
class meccha1 extends meccha{
        tipo(){
            return console.log(`BT7274 esta recargando el fusil ${this.arma}`)
        }
}

class meccha2 extends meccha{
    tipo(){
        return console.log(`ION a recargado el fusil ${this.arma}  `)
    }
}
let bt = new meccha1 ('R-201 Carbine')
let ion = new meccha2 ('V-47 flatline')
bt.tipo()
ion.tipo()
*/

//ejercicio 2 

class dango{
    constructor(name){
        this.name = name;
    }
    salud(){
        return console.log(`${this.name}`)
    }
}
class dango1 extends dango{
    salud(){
        return console.log(`Nagisa esta en cama emferma mientras que ${this.name} la cuida`)
    }
}
class dango2 extends dango{
    salud(){
        return console.log(`${this.name} muere por su enfermedad y esta la contrae su hija quien morira en el futuro dejando solo a Okazaki`)
    }
}

let okazaki = new dango1('Okazaki-kun')
let nagisa = new dango2('Nagisa')
okazaki.salud()
nagisa.salud()