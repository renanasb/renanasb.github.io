class Usuario {
   constructor(){ 
   
    this.nome = "";
    this.idade = 0;
    this.login = "";
    this.senha= "";
}
constructor(nome, idade, login, senha){
this.nome = nome;
this.idade = idade;
this.login = login;
this.senha = senha;
}
getNome(){
    return this.nome;
}
setNome(nome){
 this.nome = nome;

}
getIdade(){
    return this.idade;
}
setIdade(idade){
 this.idade = idade;

}
getlogin(){
    return this.login;
}
setlogin(login){
 this.login = login;

}
getSenha(){
    return this.senha;
}
setSenha(senha){
return this.senha = senha;

}

}
export{Usuario}