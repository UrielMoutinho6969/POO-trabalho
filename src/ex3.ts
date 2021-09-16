//Uriel Souza Reis Moutinho
//Matricula: 202010651
//Exercício numero 3

class fatura{
  constructor(
    public _numeros:number,
    public _descricao:string,
    public _qtdcomprada:number,
    public _valor:number
  ){}
  
  get numeros(){
    return this._numeros;
  }

  get descricao(){
    return this._descricao;
  }

  get  qtdcomprada(){
    return this._qtdcomprada;
  }

  get valor(){
    return this._valor;
  }
  
  set numeros(numeros:number) {
    this._numeros = numeros;
  }

  set descricao(descricao:string) {
    this._descricao = descricao;
  }

  set qtdcomprada(qtdcomprada:number) {
    this._qtdcomprada = qtdcomprada;
  }

  set valor(valor:number) {
    this._valor = valor;
  }
  
  
  public ValorFatura(qtdcomprada:number,valor:number):string {
    const TotalFatura = qtdcomprada * valor;
    return ("o valor final da fatura foi de R$" + TotalFatura);
  }

}
const faturas = new fatura(1,"cartão de credito / mês de agosto",5,100);
console.log(faturas,faturas.ValorFatura(faturas.qtdcomprada,faturas.valor));
