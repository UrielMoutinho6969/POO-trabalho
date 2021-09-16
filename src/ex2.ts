//Uriel Souza Reis Moutinho
//Matricula: 202010651
//Exercício numero 2
class Veiculos {
  constructor(
    private _modelo:string,
    private _marca:string,
    private _ano:number,
    private _valorlocacao:number,
    private _dias:number,

  ){
  }
  
  get modelo(){
    return this._modelo;
  }
  
  set modelo(modelo:string) {
    if(modelo == ""|| modelo == undefined){
      throw new Error ("modelo inválido");
    }else{
      this._modelo = modelo;
    }
  }

  get marca(){
    return this._marca;
  }
  set marca(marca:string){
    if(marca == "" || marca == undefined){
      throw new Error("marca inválida");      
    }else{
      this._marca = marca;
    }
  }

  
  get ano(){
    return this._ano;
  }
  
  set ano(ano:number) {
    if (ano == 0 || ano == undefined) {
      throw new Error("Ano do carro inválido");      
    }else{
      this._ano = ano;
    }
  }
  get valorLocacao(){
    return this._valorlocacao;
  }
  
  set valorLocacao(valorLocacao:number) {
    if(valorLocacao == 0 || valorLocacao == undefined){
      throw new Error("Valor de locação inválido");
    }else {
      this._valorlocacao = valorLocacao;
    }
  }
  
  get dias(){
    return this._dias;
  }

  set dias(dias:number){
    if (dias <= 0 || dias == undefined){
      throw new Error("Quantidade de dias inválidos");
    }else{
      this._dias = dias;
    }
  }
  
  public passeio(valorLocacao:number,dias:number):string {
      const passeio =valorLocacao * dias;
      return ("o valor do passeio será de R$" + passeio);
    }

}
const carro = new Veiculos ("super esportivo","ford",2019,1000,5);
//console.log(carro);
//console.log(carro.modelo = "");
//console.log(carro.marca = "");
//console.log(carro.ano = 0);
//console.log(carro.valorLocacao = 0);
//console.log(carro.dias = 0);
console.log(carro.passeio(50,6));


  //const carro = new Veiculos("super esportivo","ford",2019,1000,5);
  try {
  carro.valorLocacao = 15;
} catch (error:any) {
  console.log(error.message)
} 
