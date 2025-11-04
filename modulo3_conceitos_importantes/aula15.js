import http from 'k6/http';
import { check }  from 'k6';

// Thresholds adicionados para monitorar falhas de requisição, duração e checks
// Critérios de reprovação ou aprovação dos testes

export const options = {
    // Configuração dos testes
    vus: 1,
    // Duração do teste
    duration: '3s',
    // Thresholds definidos
    thresholds: {
        // Taxa de falhas de requisição deve ser menor que 1%
        http_req_failed: ['rate < 0.01'],
        // 95% das requisições devem ser concluídas em menos de 200ms
        http_req_duration: [{threshold: 'p(95) < 200', abortOnFail: true}],
        // Percentual de checks aprovados deve ser maior que 99%
        checks: ['rate > 0.99']
    }
}

export default function () {
    const res = http.get('http://test.k6.io/')

    check(res, {
        'status code é 200': (r) => r.status === 201
    });
}