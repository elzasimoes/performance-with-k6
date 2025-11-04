import http from 'k6/http';
// Importação do módulo check do k6 para validação de respostas
import { check }  from 'k6';

export const options = {
    vus: 1,
    duration: '3s'
}

export default function () {
    // Armazena a resposta da requisição GET
    const res = http.get('http://test.k6.io/')

    // Valida se o status code da resposta é 200
    check(res, {
        'status code é 200': (r) => r.status === 200
    });
}