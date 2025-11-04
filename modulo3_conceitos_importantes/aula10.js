// Inicialização do script de teste de carga usando k6
import sleep from 'k6';

// Configuração do teste: 1 usuário virtual (VU) por 10 segundos
export const options = {
    vus: 1,
    duration: '10s'
}

// Executa a função principal do teste

export default function () {
    console.log('Hello, World!');
    sleep(1);
}


// Desmontagem do script
export function teardown(data) {
    console.log(data)
    // Código de limpeza ou finalização pode ser adicionado aqui
}