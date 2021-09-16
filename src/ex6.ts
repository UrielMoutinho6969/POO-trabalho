//Uriel Souza Reis Moutinho
//Matricula: 202010651
//Exercício numero 6

interface IEndereco{
  rua: string|number,
  numero: number,
  bairro:string,
  cidade:string,
}
var endereco:IEndereco = {
  rua:"avenida das flores",
  numero:15,
  bairro:"Retiro",
  cidade:"Volta Redonda",
};
console.log(endereco);
