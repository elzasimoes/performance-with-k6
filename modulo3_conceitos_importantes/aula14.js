import http from 'k6/http';
import { Counter} from 'k6/metrics';
import { Gauge } from 'k6/metrics';
import { Rate } from 'k6/metrics';
import { Trend } from 'k6/metrics';

export const options = {
    vus: 1,
    duration: '3s'
}

// Correção dos nomes das métricas para seguir a convenção de snake_case
// quantidade de chamadas → quantidade_de_chamadas
// Tempo bloqueado → tempo_bloqueado
// taxa req 200 → taxa_req_200
// taxa de espera → taxa_de_espera

const chamadas = new Counter('quantidade_de_chamadas');
const myGauge = new Gauge('tempo_bloqueado');
const myRate = new Rate('taxa_req_200');
const myTrend = new Trend('taxa_de_espera');

export default function () {
    const req = http.get('http://test.k6.io/');
    // Contador 
    chamadas.add(1);
    // Medidor
    myGauge.add(req.timings.blocked);
    // Taxa de sucesso
    myRate.add(req.status === 200);
    // Tendência
    myTrend.add(req.timings.waiting);
}