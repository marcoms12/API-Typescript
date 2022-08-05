"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const db_1 = require("../DataBase/db");
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    save() {
        const novoUsuario = db_1.default.query("INSERT INTO usersi (name, email, password) VALUES(?,?,?)", [this.name, this.email, this.password], (err, result) => {
            if (err) {
                console.log(err.code);
            }
            else {
                console.log(result);
            }
        });
        return novoUsuario;
    }
}
exports.User = User;
