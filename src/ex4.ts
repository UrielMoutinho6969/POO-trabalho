//Uriel Souza Reis Moutinho
//Matricula: 202010651
//Exercício numero 4

class ImpostoRenda{
  constructor (
    private _nome:string,
    private _renda:number,
  
  ){}
  get nome(): string {
    return this._nome;
  }
  get renda(): number {
    return this._renda;
  }
  set nome(nome:string) {
    if(nome.length < 1) {
      throw new Error("Nome invalido")
    }
    this._nome = nome;
  }
  set renda(renda:number) {
    if(renda == 0) {
      throw new Error("Renda invalida")
    }
    this._renda = renda;
  }
}
class PF extends ImpostoRenda {
  constructor(
    _nome: string,
    _renda: number,
    private _gastosaude: number,
  ) {
    super(_nome,_renda);
  }

  get gastosaude() : number {
    return this._gastosaude;
  }
  set gastosaude(gastosaude:number){
    if (gastosaude < 0) {
      throw new Error("Gastos inválidos com saude");

    }else{
      this._gastosaude = gastosaude;
    }
 
  }

  calculoimpostoPF(): number {
    const isencaosaude = this._gastosaude * 0.5;
    if (this.renda < 20000){
    return (this.renda * 0.15) - isencaosaude;
    }else{
      return (this.renda * 0.25) - isencaosaude;
    }
    }
}

class PJ extends ImpostoRenda {
  constructor(
    _nome: string,
    _renda: number,
    private _func: number,
  ) {
    super(_nome,_renda);
  }

  get func() : number {
    return this._func;
  }
  set func(funcionario:number){
    if (funcionario == 0) {
      throw new Error("numero invalido de funcionários");
    }else{
      this._func = funcionario;
    }
 
  }
  calculoimpostoPJ(): number {
    if (this.func > 10){
    return this.renda * 0.14;
    }else{
      return this.renda * 0.16;
    }
}
}
const impostopf = new PF("uriel moutinho",15000.00,2000);
console.log(impostopf.calculoimpostoPF());
//console.log(impostopf.nome = "");
const impostopj = new PJ("uriel moutinho",1000.00,9);
console.log(impostopj.calculoimpostoPJ());
//console.log(impostopj.renda = 0);