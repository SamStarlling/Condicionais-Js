var compraRefrigerante = false;
var compraCerveja = false;
var compraSucoNatural = false;

var convidado = {
  nome: 'Pedro',
  idade: 18,
bebeCerveja: true,
  bebeRefrigerante: false
}

if(convidado.bebeRefrigerante)
{
  compraRefrigerante = true;
}
else if(convidado.bebeCerveja && convidado.idade >= 18)
{
  compraCerveja = true;
}
else
{
  compraSucoNatural = true;
}