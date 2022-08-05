import db from "../DataBase/db";

export interface UsuarioBasico{
    id: number;
    name: string;
    email: string;
    password: string;
}
export class User implements UsuarioBasico{
    id: number;
    name: string;
    email: string;
    password: string;

   constructor(name: string, email: string, password: string){
    this.name = name
    this.email = email
    this.password = password
   } 
  save():any{
    const novoUsuario = db.query(
        "INSERT INTO users (name, email, password) VALUES(?,?,?)",
        [this.name, this.email, this.password],
        (err,result) => {
            if (err){ 
                console.log(err.code);
            }else{
                console.log(result);
            }

        } 
    )
    return novoUsuario
  } 
}
