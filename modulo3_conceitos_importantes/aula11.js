// Importação do módulo http do k6
import http from 'k6/http';

// Exportação da função principal do teste
export default function(){
    http.get('http://test.k6.io');
}
export default function(){
    http.delete('http://test.k6.io');
}

export default function(){
    http.put('http://test.k6.io');
}