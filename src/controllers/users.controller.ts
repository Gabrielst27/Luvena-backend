import { Request, Response } from "express";
//import { getFirestore } from "firebase-admin/firestore";

type User = {
    id: number;
    nome: string;
    age: number;
}

let usuarios: User[] = [{
    id: 1,
    nome: 'Gabriel',
    age: 21
}]

let id: number = 1

export class UsersController{

    static getAll(req: Request, res: Response){
        res.send(usuarios);
    }

    static getById(req: Request, res: Response){
        const user = usuarios.find(user => Number(req.params.id) === user.id);
        res.send(user);
    }

    static create(req: Request, res: Response){
        const user: User = req.body;
        user.id = ++id;
        usuarios.push(user);
        res.send({
            message: "Usuario criado com sucesso"
        });
        
    }

    static updateById(req: Request, res: Response){
        const newUser:User = req.body;
        const userIndex = usuarios.findIndex((user : User) => user.id === Number(req.params.id));
        usuarios[userIndex].nome = newUser.nome;
        usuarios[userIndex].age = newUser.age;
    }

    static deleteById(req: Request, res: Response){
        const userIndex = usuarios.findIndex((user: User) => user.id === Number(req.params.id));
        usuarios.splice(userIndex, 1);
        
        res.send({
            message: "Usuario excluido com sucesso"
        })
    }
}