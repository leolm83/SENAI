//função para totalizar valor de assinatura mensal
function totaliza()
{
    total = 0.00;
    //plano mensal
    if(document.form.planos[0].checked)
        total = total + 85.00;
    //plano quadrimestral
    if(document.form.planos[1].checked)
        total = total + 300.00 / 4;
    //plano anual
    if(document.form.planos[2].checked)
        total = total + 600.00 / 12;
    //Premiere econômico
    if(document.form.premiere[0].checked)
        total = total + 60.00;
    //Premiere controle
    if(document.form.premiere[1].checked)
        total = total + 80.00;
    document.form.total.value = total.toFixed(2);
}
function naoEstaVazio(id){
    item=document.querySelector(id)
    if(item.value.trim()==""){
        console.log(`${item.name} está vazio!!!!`)
        return false
    }
    else{
        console.log(item.value.trim())
        return true
    }
}

function validaFormulario(){
    /*inputs=document.querySelectorAll("input")
    for(let x=0; x<inputs.length;x++){
        console.log(inputs[x].value)
    }
    
   let nome=document.querySelector("#nome")
   console.log(nome.value)
    */
   //FALTA O CPF
   resultadoValidacao=[]
   listaId=["#nome","#email","#cel","#nascimento","#salario","select[name='times']","#total"]
   for(let x=0;x<listaId.length;x++){
        resultadoValidacao.push(naoEstaVazio(listaId[x]))
   }
   listaRadio=["#sexo","#planos","#premiere"]
   for(let x=0;x<listaRadio.length;x++){
       resultadoValidacao.push(validaRadioButton(listaRadio[x]))
   }
   resultadoValidacao.push(validaUsuario(),validaCPF("#cpf"))
   console.log(resultadoValidacao)
   let falso=0
   for(let x=0;x<resultadoValidacao.length;x++){
       if(resultadoValidacao[x]==false){
           falso+=1
       }
   }
   if(falso>0){
       window.alert("Algum dos campos do fomulário nao está preenchido corretamente")

   }
   }
function validaRadioButton(id){
    radio=document.querySelectorAll(id)
    for(let x=0;x<radio.length;x++){
        if(radio[x].checked){
            //retorna verdadeiro se ao menos 1 valor estiver marcado
            return true 
        }
    }
    return false
}
function ObtemUsuario(){
    return {'login':"Usuario",
'senha':"Abc$123"}
}
function validaUsuario(){
    let loginJSON=ObtemUsuario().login
    console.log(loginJSON)
    let senhaJSON=ObtemUsuario().senha
    let login=document.querySelector("#login").value
    let senha=document.querySelector("#senha").value
    if(loginJSON==login && senhaJSON==senha){
        return true
    }
    else{
        return false
    }
}
function validaCPF(id){
    padrao=/[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]\-[0-9][0-9][0-9]/
    cpf=document.querySelector(id).value
    result=cpf.match(padrao)
    if(result!=null){
        return true
    }
    else{
        return false
    }
}
/*
function horarioAtual(){
    d=new Date()
    hora=d.getHours()
    minutos=d.getMinutes()
    segundos=d.getSeconds()
    return `${hora}:${minutos}:${segundos}`
}
function atualizaHorario(id){
    document.querySelector(id).innerHTML=horarioAtual()
}
setInterval(()=>atualizaHorario("#horario"),1000)*/
class Tempo{
    segundos=0;
    minutos=0;
    horas=0;
    getSegundos(){
        return this.segundos
    }
    getMinutos(){
        return this.minutos
    }
    getHoras(){
        return this.horas
    }
    atualizaHorario(){
        this.segundos++
        if(this.segundos>59){
            this.minutos++
            this.segundos=0
        }
        if(this.minutos>59){
            this.horas++
            this.minutos=0
        }
        document.querySelector("#horario").innerHTML=`${this.horas<10?"0":""}${this.horas}:${this.minutos<10?"0":""}${this.minutos}:${this.segundos<10?"0":""}${this.segundos}`
    }
}
horario=new Tempo()
setInterval(()=>horario.atualizaHorario(),1000)
