AOS.init();
//comando para iniciara animação na index

const dataDoEvento = new Date("Dec 12, 2024, 19:00:00");
//criamos uma variavel do tipo data apontando para uma data do fuutro mas podia ser do passado

const timeStampDoEvento = dataDoEvento.getTime();

//vamos verificar uma função para trabalhar com intervalos.

const contaAsHoras = setInterval(function(){
    const agora = new Date ();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    //pegamos os milissegundos que faltam até o evento.

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const MinutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horaEmMs); //resto da divisao para pegar as horas que faltam
    const minutosAteOEvento = Math.floor((distanciaAteOEvento %  horaEmMs) / MinutoEmMs); //pegar os minutos que faltam ate o evento.
    const segundosAteOEvento = Math.floor ((distanciaAteOEvento % MinutoEmMs) / 1000); //pegando os segundos até o evento.

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    //colocando o timer na tela até o evento

    if (diasAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado!';
    }
}, 1000)

//agora precisamos pegar a distancia do timestamp atual para o timestamp do evento

