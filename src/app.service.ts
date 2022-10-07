import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello, World';
  }
  getBSMS(): string {
    return 'Comunicação, Orientacão aos Detalhes, Persistência, Trabalho em Equipe, Gestão de Tempo, Orientação ao Futuro, Responsabilidade pessoal e Mentalidade de Crescimento!' ;
  }
  getObjetivo(): string {
    return 'Continuar estudando o que nós vimos e conseguir o máximo de aprendizagem.';
  }
}
