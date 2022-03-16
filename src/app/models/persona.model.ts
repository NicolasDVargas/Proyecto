
export interface IPersona{
    nombre: string;

    saludar():string;
}

export class Admin implements IPersona{

    nombre: string;

    constructor (){


    }

    saludar(): string {
        throw new Error ("Camilo no me ignore")
    }

}

export class cliente implements IPersona{

    nombre:string;
    email:string;

    constructor (){
    }

    saludar(): string {
        throw new Error ("Camilo por que es tan perra?")
    }
}