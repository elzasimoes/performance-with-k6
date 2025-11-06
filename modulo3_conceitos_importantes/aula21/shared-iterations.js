import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  scenarios: {
    contacts: {
      // Cenário de teste para a página de contatos
      executor: 'shared-iterations',
      // Número total de iterações a serem executadas
      vus: 10,
      // Cada VU executará 20 iterações (10 VUs x 20 iterações = 200 iterações totais)
      iterations: 200,
      // Duração máxima do cenário
      maxDuration: '30s',
    },
  },
};

export default function () {
  http.get('https://test.k6.io/contacts.php');
  sleep(0.5);
}
