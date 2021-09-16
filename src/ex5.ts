//Uriel Souza Reis Moutinho
//Matricula: 202010651
//Exercício numero 5

class Vendedores {
  constructor(
    private _nome: string,
    private _salario: number,
    private _valorvenda: number
  ) {}

  get nome() {
    return this._nome;
  }
  get salario(): number {
    return this._salario;
  }
  get valorvenda() {
    return this._valorvenda;
  }
  set nome(nome: string) {
    this._nome = nome;
  }

  set salario(salario: number) {
    this._salario = salario;
  }
  set valorvenda(valorvenda: number) {
    this._valorvenda = valorvenda;
  }

  desconto(): number {
    const reajuste = (this._salario * 8) / 100;
    return reajuste;
  }
}
class VendedorFisico extends Vendedores {
  constructor(
    private _regiao: string,
    _nome: string,
    _salario: number,
    _valorCompra: number
  ) {
    super(_nome, _salario, _valorCompra);
  }
  get regiao() {
    return this._regiao;
  }
  set regiao(regiao: string) {
    this._regiao = regiao;
  }
  comissao(): number {
    var comissao = 0;
    var reg = this._regiao.toLowerCase();
    
    if (reg == "sul") {
      comissao += (this.valorvenda * 10) / 100;
      return comissao;

    } else if (reg == "sudeste") {
      comissao += (this.valorvenda * 12) / 100;
      return comissao;

    } else if (reg == "centro-oeste") {
      comissao += (this.valorvenda * 14) / 100;
      return comissao;

    } else if (reg == "norte") {
      comissao += (this.valorvenda * 15) / 100;
      return comissao;

    } else if (reg == "nordeste") {
      comissao += (this.valorvenda * 17) / 100;
      return comissao;
    }else{
      throw new Error("comissão indisponivel ou região invalida");
    }
    
    
 
  }

  salarioTotal() {
    const totalSalario = this.salario + this.comissao();
    return (totalSalario);
  }
}
class PessoaJuridica extends Vendedores {
  constructor(
    private _empresa: string,
    private _totalFunc: number,
    _nome: string,
    _salario: number,
    _valorCompra: number
  ) {
    super(_nome, _salario, _valorCompra);
  }
  get empresa() {
    return this._empresa;
  }
  set empresa(empresa: string) {
    this._empresa = empresa;
  }
  get funcionario() {
    return this._totalFunc;
  }
  set funcionario(totalFunc: number) {
    this._totalFunc = totalFunc;
  }


  
  comissao() {
    var comissao = 0;
    if (this.valorvenda < 5000) {
      comissao = (this.valorvenda * 2) / 100;
    } else if (this.valorvenda >= 5000 && this.valorvenda < 10000) {
      comissao = (this.valorvenda * 4) / 100;
    } else if (this.valorvenda >= 10000) {
      comissao = (this.valorvenda * 6) / 100;
    }
    return comissao;
  }
  salarioTotal() {
    var totalSalario = this.salario + this.comissao();
    if (this.funcionario < 100) {
      totalSalario += 200;
    }else{
      totalSalario += 300;
    }
   
    return (totalSalario);
  }
}

  const vendas = new Vendedores("Marco", 1000, 5);
  console.log("Desconto do vendedor R$:" + vendas.desconto());
  console.log(vendas)
  const pf = new VendedorFisico("nOrDeStE", "João Augusto", 1000, 500);
  console.log("Comissão pessoa fisica R$:" + pf.comissao());
  console.log("Salario total pessoa fisica R$:" + pf.salarioTotal());
  const pj = new PessoaJuridica("Alimentos.ltda",1000, "Maria", 10000, 1000);
  console.log("Comissão pessoa juridica R$:" + pj.comissao());
  console.log("Os lucros totais da pessoa juridica foram de R$:" + pj.salarioTotal());