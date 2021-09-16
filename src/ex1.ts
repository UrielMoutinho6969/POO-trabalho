//Uriel Souza Reis Moutinho
//Matricula: 202010651
//Exercício numero 1

class pessoa {
  constructor(
  private _nome:string,
  private _idade:number,
  private _sexo:string,
  ){}

  get nome ():string{
    return this._nome;
  }
  
  set nome(nome:string){
    if (nome == undefined || nome == ""){
      throw new Error ("nome invalido");
      
    }else{
      this._nome = nome;
    }
   
  }

  get sexo (): string{
    return this._sexo;
  }
  
  set sexo (sexo:string){
    var sex = this._sexo.toLowerCase();
    switch (sex) {
      case sex = "masculino":
        this._sexo = sexo; 
        break;
      case sex = "feminino":
        this._sexo = sexo;
        break;
      
      default :
        throw new Error ("sexo invalido");

    }

  }

  get idade():number{
    return this._idade;
  }
  
  set idade(idade:number) {
    if (idade <= 0) {
        throw new Error("idade invalida")        
    }else if(idade >= 18){
      console.log("maior de idade");
    }else
      console.log("menor de idade");
      this._idade = idade;
  }

}

  const verificaPessoa = new pessoa("uriel",18,"masculino");

  console.log(verificaPessoa);
  //console.log(verificaPessoa.nome ="");
  //console.log(verificaPessoa.sexo ="mascUlino");
  //console.log(verificaPessoa.idade = 15);
  //console.log(verificaPessoa.idade = 19);
  //console.log(verificaPessoa);