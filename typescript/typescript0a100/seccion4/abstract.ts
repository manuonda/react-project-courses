abstract class Father{
     abstract caminar():void;
     abstract gatear():void;

     saludar(saludo:string):string{
         return saludo;
     }
}


class Sons extends Father {
    
    caminar(): void {
        throw new Error("Method not implemented.");
    }
    gatear(): void {
        throw new Error("Method not implemented.");
    }
    
}
