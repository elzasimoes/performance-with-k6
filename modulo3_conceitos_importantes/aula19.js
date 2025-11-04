import http from 'k6/http';
import { sleep } from 'k6';

// Fornecer uma variável de ambiente para o script
// Realziar configurações de escopo de options com base na variável de ambiente


export const options = {
    vus: 2,
    duration: '5s'
}

// O comando abaixo executa o script com a variável de ambiente URL definida como 'https://www.google.com'
// k6 run --env URL='https://www.google.com' modulo3_conceitos_importantes/aula19.js --stage 5s:5 

export default function(){
    const res = http.get(__ENV.URL);
    sleep(1);
}
