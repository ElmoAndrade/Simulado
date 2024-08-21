const questions = [
    {
        questions: " A CARGA PAGA QUE UMA AERONAVE PODE TRANSPORTAR É A DIFERENÇA ENTRE O PESO:",
        answers: [
            { text: "A MÁXIMO DE DECOLAGEM E O MÁXIMO DE POUSO", correct: false },
            { text: "B BÁSICO E O OPERACIONAL", correct: false },
            { text: "MÁXIMO DE DECOLAGEM E O BÁSICO OPERACIONAL", correct: false },
            { text: "MÁXIMO DE DECOLAGEM E O PESO OPERACIONAL", correct: true },
        ]
    },
    {
        questions: "SABENDO-SE QUE O PESO DE DECOLAGEM DE UMA AERONAVE É IGUAL A 92000 LB E QUE A PESAGEM INDICOU 40000 LB EM CADA UM DOS TRENS PRINCIPAIS, O PESO NA RODA DO NARIZ (STA 100), É DE: ",
        answers: [
            { text: "52000 LB", correct: false },
            { text: "6000 LB", correct: false },
            { text: "24000 LB", correct: false },
            { text: "12000 LB", correct: true },
        ]
    },
    {
        questions: "NUMA ASA ENFLECHADA, SE O ESTOL OCORRER NA PONTA DA ASA, PODERÁ PROVOCAR",
        answers: [
            { text: "TUCK UNDER", correct: false },
            { text: "PITCH DOWN", correct: false },
            { text: "DUTCH ROLL", correct: false },
            { text: "PITCH UP", correct: true },
        ]
    },
    {
        questions: "- O COMPRIMENTO DA PISTA COMPREENDIDO ENTRE AS CABECEIRAS DENOMINA-SE COMPRIMENTO",
        answers: [
            { text: "EFETIVO", correct: false },
            { text: " FÍSICO.", correct: true },
            { text: "RETIFICADO.", correct: false },
            { text: " ABSOLUTO.", correct: false },
        ]
    },
    {
        questions: "DURANTE UMA DECOLAGEM, NO SEGUNDO SEGMENTO, O TREM DE POUSO ESTARÁ",
        answers: [
            { text: "RECOLHIDO E O FLAP ACIONADO", correct: true },
            { text: "DISTENDIDO E O FLAP RECOLHIDO", correct: false },
            { text: "DISTENDIDO E O FLAP ACIONADO", correct: false },
            { text: "RECOLHIDO E O FLAP RECOLHIDO", correct: false },
        ]
    },
    {
        questions: "O NÚMERO QUE REPRESENTA A RESISTÊNCIA ESTRUTURAL DE UMA PISTA DENOMINA-SE",
        answers: [
            { text: "AIP", correct: false },
            { text: "PCN", correct: true },
            { text: "ACN", correct: false },
            { text: "NEW", correct: false },
        ]
    },
    {
        questions: "A VELOCIDADE DE ESTOL DE UMA AERONAVE, VOANDO RETO E NIVELADO, É DE 100 KT.CONSIDERANDO- SE QUE A AERONAVE SEJA SUBMETIDA A UM FATOR DE CARGA 2, A SUA NOVA VELOCIDADE DE ESTOL SERÁ DE",
        answers: [
            { text: "100 KT", correct: false },
            { text: "81 KT", correct: false },
            { text: "141 KT", correct: true },
            { text: "80 KT", correct: false },
        ]
    },
    {
        questions: "- O COMPRIMENTO REAL DE UMA PISTA HOMOLOGADA PARA UM TIPO DE AVIÃO É DE 3000 METROS.A MAIOR DISTÂNCIA DEMONSTRADA DE POUSO DA MESMA, NO AD DE DESTINO, SERÁ DE",
        answers: [
            { text: "3000 METROS.", correct: false },
            { text: "2100 METROS", correct: false },
            { text: "1800 METROS.", correct: true },
            { text: "2500 METROS", correct: false },
        ]
    },
    {
        questions: "A RELAÇÃO DE COMPONENTES MÍNIMOS REQUERIDOS PARA O DESPACHO DE UMA AERONAVE ESTÁ CONTIDA NO(A)",
        answers: [
            { text: "MANUAL DE OPERAÇÕES.", correct: false },
            { text: "MEL.", correct: true },
            { text: "IPC.", correct: false },
            { text: "MANUAL DE MANUTENÇÃO.", correct: false },
        ]
    },
    {
        questions: "O SEGMENTO HORIZONTAL DA DECOLAGEM, UTILIZADA PARA ACELERAÇÃO E RECOLHIMENTO DOS FLAPES, É O",
        answers: [
            { text: "PRIMEIRO.", correct: false },
            { text: "SEGUNDO.", correct: false },
            { text: "TERCEIRO.", correct: true },
            { text: "QUARTO.", correct: false },
        ]
    },
    {
        questions: "- NA CONFIGURAÇÃO DE POUSO, UMA AERONAVE POSSUI UMA VELOCIDADE DE ESTOL DE 110 KT A SUA VREF MÍNIMA DEVERÁ SER DE",
        answers: [
            { text: "120 KT", correct: false },
            { text: "153 KT", correct: false },
            { text: " 111 KT", correct: false },
            { text: "143 KT", correct: true },
        ]
    },
    {
        questions: "NOS VÔOS EM ALTA VELOCIDADE, O CENTRO DE PRESSÃO",
        answers: [
            { text: "TENDE A COINCIDIR COM A CMA", correct: false },
            { text: "TENDE A COINCIDIR COM O CG.", correct: false },
            { text: "DESLOCA-SE PARA A FRENTE.", correct: false },
            { text: " DESLOCA-SE PARA TRÁS.", correct: true },
        ]
    },
    {
        questions: "COM O APARECIMENTO DA ONDA DE CHOQUE, EXISTE A TENDÊNCIA DA ACFT BAIXAR O NARIZ, CAUSADA PELA PERDA DE SUSTENTAÇÃO.ESSE FENÔMENO DENOMINA - SE",
        answers: [
            { text: "TUCK UNDER.", correct: true },
            { text: "MACH TRIMM.", correct: false },
            { text: "DUTCH ROLL.", correct: false },
            { text: "BUFFET.", correct: false },
        ]
    },
    {
        questions: "QUANTO MAIOR O ENFLECHAMENTO DE UMA ASA,",
        answers: [
            { text: "MAIOR O COEFICIENTE DE ARRASTO.", correct: false },
            { text: "MAIS EFICIENTE SERÁ O TUCK UNDER.", correct: false },
            { text: " MAIS EFICIENTE SERÁ O RETARDAMENTO DO MACH CRÍTICO.", correct: true },
            { text: " MAIOR A SUSTENTAÇÃO.", correct: false },
        ]
    },
    {
        questions: "UM DOS RECURSOS UTILIZADOS PARA O CONTROLE DA CAMADA LIMITE É",
        answers: [
            { text: "SLOTS.", correct: false },
            { text: " WING FENCE.", correct: false },
            { text: "VORTEX GENERATOR.", correct: true },
            { text: "SPOILERS.", correct: false },
        ]
    },
    {
        questions: "VMO E MMO, SÃO, RESPECTIVAMMENTE",
        answers: [
            { text: "VELOCIDADE MÁXIMA OPERACIONAL/MACH MÍNIMO OPERACIOANL", correct: false },
            { text: "VELOCIDADE MÍNIMA OPERACIONAL/MACH MÍNIMO OPERACIONAL", correct: false },
            { text: "VELOCIDADE MÁXIMA OPERACIONAL/MACH MÁXIMO OPERACIONAL", correct: true },
            { text: "VELOCIDADE MÍNIMA OPERACIONAL/MACH MÁXIMO OPERACIONAL", correct: false },
        ]
    },
    {
        questions: "SENDO O EFEITO DO VENTO RELATIVO SOBRE UMA ASA ENFLECHADA PROPORCIONAL AO ÂNGULO DE ENFLECHAMENTO, SUA INTENSIDADE SERÁ DECOMPOSTA EM DOIS VETORES, QUE SÃO: UM",
        answers: [
            { text: "TRANSVERSAL E OUTRO PERPENDICULAR AO BORDO DE FUGA.", correct: false },
            { text: "PARALELO E OUTRO PERPENDICULAR AO BORDO DE FUGA.", correct: false },
            { text: "PARALELO E OUTRO PERPENDICULAR AO BORDO DE ATAQUE", correct: true },
            { text: "TRANSVERSAL E OUTRO PERPENDICULAR AO BORDO DE ATAQUE.", correct: false },
        ]
    },
    {
        questions: "A ESTABILIDADE E A CONTROLABILIDADE LONGITUDINAL DA AERONAVE SÃO RESULTANTES DO",
        answers: [
            { text: "BALANCEAMENTO", correct: false },
            { text: "CG", correct: true },
            { text: "PESO DA AERONAVE", correct: false },
            { text: "CP", correct: false },
        ]
    },
    {
        questions: "O CENTRO DE GRAVIDADE DE UM AVIÃO É",
        answers: [
            { text: "UM VETOR TRIDIMENSIONAL", correct: false },
            { text: " O PONTO DE APLICAÇÃO DA RESULTANTE DE TODOS OS PESOS DO MESMO", correct: true },
            { text: " UMA RESULTANTE ADIABÁTICA", correct: false },
            { text: "UM MOMENTO GRAVITACIONAL DO PESO", correct: false },
        ]
    },
    {
        questions: `"A STA 256" FICA A"`,
        answers: [
            { text: "256 POLEGADAS À FRENTE DA LINHA DATUM", correct: false },
            { text: " 256 METROS À FRENTE DA LINHA DATUM", correct: false },
            { text: " 256 POLEGADAS ATRÁS DA LINHA DATUM", correct: true },
            { text: "METROS ATRÁS DA LINHA DATUM", correct: false },
        ]
    },
    {
        questions: "CONSIDERANDO-SE OS SEGUINTES DADOS: DOW=31858 KG, MZFW=48307 KG, MLW=51709 KG, MTOW = 61235 KG, TRIP FUEL = 3000 KG E TAKEOFF FUEL = 10500, KG, O DISPONÍVEL PERMITIDO (ALLOWED TRAFFIC LOAD)É: ",
        answers: [
            { text: "13449 KG", correct: false },
            { text: "15351 KG", correct: false },
            { text: "12351 KG", correct: true },
            { text: "6351 KG", correct: false },
        ]
    },
    {
        questions: "ADICIONANDO-SE O COMBUSTÍVEL DE DECOLAGEM AO PESO BÁSICO OPERACIONAL OBTÉM-SE O PESO",
        answers: [
            { text: "MÁXIMO DE POUSO", correct: false },
            { text: "MÁXIMO DE TÁXI", correct: false },
            { text: "BÁSICO DE DECOLAGEM", correct: false },
            { text: "OPERACIONAL", correct: true },
        ]
    },
    {
        questions: "O SOMATÓRIO DOS PESOS DOS PASSAGEIROS, BAGAGEM, CARGA E CORREIO, DENOMINA-SE:",
        answers: [
            { text: "CARGA PAGA ATUAL", correct: true },
            { text: "PESO MÁXIMO DE POUSO ", correct: false },
            { text: " CARGA ÚTIL", correct: false },
            { text: " PESO MÁXIMO ZERO COMBUSTÍVEL", correct: false },
        ]
    },
    {
        questions: "A VELOCIDADE QUE DEVE SER ATINGIDA A 35 FT DE ALTURA SOBRE A PISTA, EQUIVALENTE OU MAIOR QUE 120 % DA VELOCIDADE DE ESTOL, DENOMINA - SE",
        answers: [
            { text: "V2", correct: true },
            { text: "VLOF", correct: false },
            { text: "VR", correct: false },
            { text: "V1", correct: false },
        ]
    },
    {
        questions: "- O VÔO DE UMA ACFT PODERÁ SER REALIZADO COM ALGUNS COMPONENTES INOPERANTES, DESDE QUE OS EQUIPAMENTOS E INSTRUMENTOS RESTANTES GARANTAM CONTINUADA OPERAÇÃO SEGURA.PARA ISSO, HÁ NECESSIDADE DE SER CONSULTADO(A) O(A)",
        answers: [
            { text: "DPG", correct: false },
            { text: "ONS", correct: false },
            { text: "IRS", correct: false },
            { text: "MEL", correct: true },
        ]
    },
    {
        questions: "O RECLEARANCE TEM COMO OBJETIVO",
        answers: [
            { text: "DIMINUIR O COMBUSTÍVEL MÍNIMO REQUERIDO", correct: true },
            { text: "AUMENTAR O COMBUSTÍVEL MÍNIMO REQUERIDO", correct: false },
            { text: "AUMENTAR A AUTONOMIA", correct: false },
            { text: "DIMINUIR A AUTONOMIA", correct: false },
        ]
    },
    {
        questions: "O COMPRIMENTO DE UMA PISTA, MEDIDA DE UMA CABECEIRA À OUTRA, CORRIGIDA PARA A EXISTÊNCIA DE OBSTÁCULOS PRÓXIMOS À CABECEIRA E PARA EFEITOS DE VENTO E GRADIENTE DE PISTA, É DENOMINADO COMPRIMENTO",
        answers: [
            { text: "REAL", correct: false },
            { text: "FÍSICO.", correct: false },
            { text: "EFETIVO.", correct: false },
            { text: "RETIFICADO.", correct: true },
        ]
    },
    {
        questions: "9 - POR DEFINIÇÃO, A VELOCIDADE NA QUAL OU ACIMA DA QUAL O AVIÃO PODERÁ DEIXAR O SOLO E CONTINUAR A DECOLAGEM COM SEGURANÇA, É A",
        answers: [
            { text: "VLOF", correct: false },
            { text: "VR", correct: false },
            { text: "VMU", correct: true },
            { text: "V1", correct: false },
        ]
    },
    {
        questions: "O COMBUSTÍVEL LEVADO COMO MARGEM DE SEGURANÇA, ALÉM DAQUELE PREVISTO PARA O VÔO, DENOMINA - SE COMBUSTÍVEL",
        answers: [
            { text: " PARA ESPERA.", correct: false },
            { text: "RESERVA", correct: true },
            { text: "TOTAL.", correct: false },
            { text: "PARA ETAPA.", correct: false },
        ]
    },
    {
        questions: "-NA DETERMINAÇÃO DA DISTÂNCIA DISPONÍVEL PARA ACELERAÇÃO E PARADA DE UMA AERONAVE, LEVA - SE EM CONTA O COMPRIMENTO DA",
        answers: [
            { text: " PISTA", correct: false },
            { text: "PISTA, MAIS CLEARWAY", correct: false },
            { text: "PISTA, MAIS STOPWAY", correct: true },
            { text: "PISTA, MAIS STOPWAY E CLEARWAY", correct: false },
        ]
    },
    {
        questions: "O DISPOSITIVO AUTOMÁTICO DE CORREÇÃO QUE ATUA NO ESTABILIZADOR DO AVIÃO, PARA MANTER A TRAJETÓRIA DE VOO INDEPENDENTE DA AÇÃO DO PILOTO, DENOMINA - SE",
        answers: [
            { text: "VORTEX GENERATOR", correct: false },
            { text: "YAW DUMPER.", correct: false },
            { text: "MACH TRIM", correct: true },
            { text: "WING LET.", correct: false },
        ]
    },
    {
        questions: "COM RELAÇÃO À PROPAGAÇÃO SONORA, PODE-SE DIZER QUE",
        answers: [
            { text: "NÃO VARIA COM O NÍVEL DE VÔO", correct: false },
            { text: "É DIRETAMENTE PROPORCIONAL À TEMPERATURA DO MEIO DE PROPAGAÇÃO", correct: true },
            { text: " NÃO VARIA COM A TEMPERATURA DO MEIO DA PROPAGAÇÃO.", correct: false },
            { text: " É INVERSAMENTE PROPORCIONAL À TEMPERATURA DO MEIO DE PROPAGAÇÃO", correct: false },
        ]
    },
    {
        questions: "MANTENDO A TAS CONSTANTE, UM AUMENTO DE TEMPERATURA PROVOCARÁ",
        answers: [
            { text: "AUMENTO DO NÚMERO MACH.", correct: false },
            { text: " ONDAS DE CHOQUE.", correct: false },
            { text: " DIMINUIÇÃO DO NÚMERO MACH.", correct: true },
            { text: "MODIFICAÇÃO NAS ONDAS DE CHOQUE.", correct: false },
        ]
    },
    {
        questions: "VMO E MMO, SÃO, RESPECTIVAMMENTE",
        answers: [
            { text: "VELOCIDADE MÁXIMA OPERACIONAL/MACH MÁXIMO OPERACIONAL", correct: true },
            { text: "VELOCIDADE MÁXIMA OPERACIONAL/MACH MÍNIMO OPERACIOANL ", correct: false },
            { text: "VELOCIDADE MÍNIMA OPERACIONAL/MACH MÁXIMO OPERACIONAL", correct: false },
            { text: "VELOCIDADE MÍNIMA OPERACIONAL/MACH MÍNIMO OPERACIONAL", correct: false },
        ]
    },
    {
        questions: "NAS ALTAS VELOCIDADES, O RETARDAMENTO DA FORMAÇÃO DE ONDAS DE CHOQUE OCORRE QUANDO AS ASAS DO AVIÃO SÃO",
        answers: [
            { text: "ESPESSAS, SEM ENFLECHAMENTO", correct: false },
            { text: " FINAS, SEM ENFLECHAMENTO.", correct: false },
            { text: " FINAS, COM ENFLECHAMENTO.", correct: true },
            { text: " ESPESSAS, COM ENFLECHAMENTO", correct: false },
        ]
    },
    {
        questions: "A VELOCIDADE CALIBRADA, QUANDO CORRIGIDA PARA A COMPRESSIBILIDADE DO ESCOAMENTO ADIABÁTICO NA ALTITUDE DE VÔO, PASSA A SE CHAMAR VELOCIDADE ",
        answers: [
            { text: "DINÂMICA", correct: false },
            { text: "EQUIVALENTE. ", correct: true },
            { text: "AERODINÂMICA.", correct: false },
            { text: " INDICADA.", correct: false },
        ]
    },
    {
        questions: "OS AVIÕES QUE DESENVOLVEM VELOCIDADE ACIMA DE MACH 1.2 SÃO CONHECIDOS COMO",
        answers: [
            { text: "SUBSÔNICOS", correct: false },
            { text: "AERODINÂMICOS", correct: true },
            { text: "SUPERSÔNICOS", correct: false },
            { text: " TRANSÔNICOS", correct: false },
        ]
    },
    {
        questions: "UMA AERONAVE VOANDO COM CG PRÓXIMO AO LIMITE DIANTEIRO, EM RELAÇÃO À ATITUDE DE VOO, TERÁ",
        answers: [
            { text: "MENOR VELOCIDADE DE STOL", correct: false },
            { text: "MENOR ÂNGULO DE ATAQUE", correct: false },
            { text: "MAIOR VELOCIDADE DE STOL", correct: false },
            { text: "MAIOR ÂNGULO DE ATAQUE", correct: true },
        ]
    },
    {
        questions: "- A DIFERENÇA ENTRE O PAZC E O PBO CHAMA-SE CARGA",
        answers: [
            { text: "ÚTIL", correct: false },
            { text: "PAGA", correct: true },
            { text: "MÁXIMA", correct: false },
            { text: " MÍNIMA", correct: false },
        ]
    },
    {
        questions: "NUMA ASA ENFLECHADA, SE O ESTOL OCORRER NA PONTA DA ASA, PODERÁ PROVOCAR",
        answers: [
            { text: "DUTCH ROLL", correct: false },
            { text: "PITCH DOWN", correct: false },
            { text: "PITCH UP", correct: true },
            { text: "TUCK UNDER", correct: false },
        ]
    },
    {
        questions: "CONSIDERANDO-SE OS DADOS: DOW=32308 KG, PAYLOAD=11230 KG,TAKEOFF FUEL=10900 KG, TRIP FUEL = 6100 KG; O PESO ESTIMADO DE POUSO É",
        answers: [
            { text: "49638 KG", correct: false },
            { text: "51709 KG", correct: false },
            { text: "48338 KG", correct: true },
            { text: "45609 KG", correct: false },
        ]
    },
    {
        questions: "SABENDO-SE QUE A PESAGEM DE UMA AERONAVE INDICOU 8000 LB NO TREM DO NARIZ (STA 150) E 25000 LB EM CADA UM DOS TRENS PRINCIPAIS(STA 550), CALCULE A STA DO CG: ",
        answers: [
            { text: "794,8", correct: false },
            { text: "494,8 ", correct: true },
            { text: "594,8", correct: false },
            { text: "694,8", correct: false },
        ]
    },
    {
        questions: `"QUANDO A "ASDA" É IGUAL À "TODA", TEM-SE"`,
        answers: [
            { text: "CLEARWAY MAIOR.", correct: false },
            { text: "RWY DESBALANCEADA", correct: false },
            { text: "STOPWAY MAIOR.", correct: false },
            { text: "RWY BALANCEADA.", correct: true },
        ]
    },
    {
        questions: "NO TERCEIRO SEGMENTO DA TRAJETÓRIA DE DECOLAGEM OCORRE",
        answers: [
            { text: "RECOLHIMENTO DO FLAPE E AUMENTO DE VELOCIDADE.", correct: true },
            { text: "RECOLHIMENTO DO FLAPE E DO TREM DE POUSO.", correct: false },
            { text: "REDUÇÃO DA POTÊNCIA DO MOTOR PARA MÁXIMA CONTÍNUA.", correct: false },
            { text: "RECOLHIMENTO DO TREM DE POUSO.", correct: false },
        ]
    },
    {
        questions: "EM DIVERSOS TIPOS DE AVIÕES, O ESTABILIZADOR HORIZONTAL PODE SER AJUSTADO PARA A DECOLAGEM.NESTES CASOS, O AJUSTE É FEITO LEVANDO - SE EM CONSIDERAÇÃO A POSIÇÃO DO(A)",
        answers: [
            { text: "CMA", correct: false },
            { text: "CMG", correct: false },
            { text: " CP", correct: false },
            { text: " CG", correct: true },
        ]
    },
    {
        questions: "NAS BAIXAS VELOCIDADES, PARA SE AUMENTAR A EFICIÊNCIA DO CONTROLE LATERAL OS AILERONS EXTERNOS PODEM OPERAR EM CONJUNTO COM OS:",
        answers: [
            { text: "COMPENSADORES", correct: false },
            { text: "SLATS", correct: false },
            { text: " FLAPES", correct: false },
            { text: "SPOILERS", correct: true },
        ]
    },
    {
        questions: "- A UTILIZAÇÃO DO REDESPACHO DE UMA ACFT, EM DETERMINADO PONTO DA ROTA, TEM COMO OBJETIVO",
        answers: [
            { text: "AUMENTAR O PESO DE DECOLAGEM.", correct: false },
            { text: "AUMENTAR O COMBUSTÍVEL MÍNIMO REQUERIDO.", correct: false },
            { text: "DIMINUIR O TEMPO DE VÔO.", correct: false },
            { text: "DIMINUIR O COMBUSTÍVEL MÍNIMO REQUERIDO.", correct: true },
        ]
    },
    {
        questions: "O MACH TRIMMER COMPENSA AS CONSTANTES VARIAÇÕES DO NÚMERO DE MACH E ATUA NO",
        answers: [
            { text: "AILERON.", correct: false },
            { text: " SPOILER.", correct: false },
            { text: "ESTABILIZADOR VERTICAL", correct: false },
            { text: "ESTABILIZADOR HORIZONTAL.", correct: true },
        ]
    },
    {
        questions: "OS SPOILERS SÃO SUPERFÍCIES QUE, QUANDO COMANDADAS, SE ABREM NO EXTRADORSO DAS ASAS, COM A FINALIDADE DE: ",
        answers: [
            { text: "REDUZIR A SUSTENTAÇÃO DA ASA", correct: true },
            { text: "REDUZIR O ARRASTO", correct: false },
            { text: "AUMENTAR A VELOCIDADE DE POUSO", correct: false },
            { text: "AUMENTAR A CURVATURA DA ASA", correct: false },
        ]
    },
    {
        questions: "SE NA DESCIDA PARA UMA ALTITUDE MENOR, DURANTE UM DRIFT DOWN, A ULTRAPASSAGEM DE UM OBSTÁCULO SE TORNAR CRÍTICA, A TRAJETÓRIA DESCRITA DEVERÁ SER FEITA COM: ",
        answers: [
            { text: "O MENOR ÂNGULO DE DESCIDA POSSÍVEL", correct: true },
            { text: "O MAIOR ÂNGULO DE DESCIDA POSSÍVEL", correct: false },
            { text: "DESACELERAÇÃO PARA A VELOCIDADE DE MAIOR ARRASTO", correct: false },
            { text: "ACELERAÇÃO CONSTANTE PARA A VELOCIDADE DE MENOR ARRASTO", correct: false },
        ]
    },
    {
        questions: "- O AMORTECEDOR DE GUINADA QUE NORMALMENTE EQUIPA OS AVIÕES PARA CORREÇÃO DE UM DUTCH ROLL É O ",
        answers: [
            { text: "MACH TRIMM.", correct: false },
            { text: "ROLL OFF", correct: false },
            { text: "YAW DAMPER.", correct: true },
            { text: "TUCK UNDER", correct: false },
        ]
    },
    {
        questions: "NA PRÁTICA, O QUE TORNA A AERODINÂMICA DE ALTA VELOCIDADE UM ESTUDO DIFERENCIADO DA AERODINÂMICA DE BAIXA VELOCIDADE É O(A) ",
        answers: [
            { text: "DIMINUIÇÃO DA VISCOSIDADE DO AR, EM ALTAS VELOCIDADES.", correct: false },
            { text: "COMPRESSIBILIDADE DO AR.", correct: true },
            { text: " AUMENTO DA TEMPERATURA DO AR, DEVIDO AO DESLOCAMENTO", correct: false },
            { text: " BARREIRA DO SOM.", correct: false },
        ]
    },
    {
        questions: "O LIMITE MÁXIMO DE VELOCIDADE PARA UM AVIÃO TRANSÔNICO É",
        answers: [
            { text: "VNE.", correct: false },
            { text: " MACH 1.2 ", correct: true },
            { text: " VS.", correct: false },
            { text: "MACH CRÍTICO", correct: false },
        ]
    },
    {
        questions: "O SENTIDO DO FLUXO TRANSVERSAL, AO PASSAR PELO BORDO DE ATAQUE DE UMA ASA ENFLECHADA, SERÁ DO(A)",
        answers: [
            { text: "INTRADORSO PARA O EXTRADORSO.", correct: false },
            { text: "PONTA PARA A RAIZ.", correct: true },
            { text: "EXTRADORSO PARA O INTRADORSO.", correct: false },
            { text: "RAIZ PARA A PONTA.", correct: false },
        ]
    },
    {
        questions: "UM DOS EFEITOS DECORRENTES DA FORMAÇÃO DA ONDA DE CHOQUE É A(O) ",
        answers: [
            { text: "ONDA OBLÍQUA.", correct: false },
            { text: "ONDA NORMAL", correct: false },
            { text: "DESVIO SONORO", correct: false },
            { text: "ARRASTO.", correct: true },
        ]
    },
    {
        questions: "- O PESO REAL OU ATUAL DE DECOLAGEM É DADO PELA SOMA ENTRE O ",
        answers: [
            { text: "PAZC + TRIP FUEL", correct: false },
            { text: "PBO + TRIP FUEL", correct: false },
            { text: " PBO + TAKEOFF FUEL", correct: false },
            { text: "PAZC + TAKEOFF FUEL", correct: true },
        ]
    },
    {
        questions: "PARA SE CALCULAR O PESO MÁXIMO DE DECOLAGEM LIMITADO PELO POUSO, DEVE-SE SOMAR",
        answers: [
            { text: "MLW + TRIP FUEL", correct: true },
            { text: "PMZC + TAKEOFF FUEL", correct: false },
            { text: "PAZC + TRIP FUEL", correct: false },
            { text: "PAZC + TAKEOFF FUEL", correct: false },
        ]
    },
    {
        questions: "CONSIDERANDO-SE, PARA UM DETERMINADO VOO, OS SEGUINTES DADOS: DOW=32592 KG, MZFW = 48307 KG, MLW = 51709 KG, MTOW = 61235 KG, TRIP FUEL = 2500 KG, TAKEOFF FUEL = 5500 KG, PAX = 9900 KG; O DISPONÍVEL PARA BAGAGEM E CARGA É ",
        answers: [
            { text: "3717 KG", correct: false },
            { text: "15715 KG", correct: false },
            { text: "5815 KG", correct: true },
            { text: "13243 KG", correct: false },
        ]
    },
    {
        questions: "O SOMATÓRIO DOS PESOS DOS PASSAGEIROS, BAGAGEM, CARGA E CORREIO, DENOMINA-SE: ",
        answers: [
            { text: "CARGA ÚTIL", correct: false },
            { text: "PESO MÁXIMO ZERO COMBUSTÍVEL ", correct: false },
            { text: "CARGA PAGA ATUAL", correct: true },
            { text: "PESO MÁXIMO DE POUSO", correct: false },
        ]
    },
    {
        questions: "SE O C.G. DE UMA AERONAVE ESTIVER À FRENTE DO LIMITE DIANTEIRO, A MESMA APRESENTARÁ ",
        answers: [
            { text: "COMANDO DE ARFAGEM LEVE E DIMINUIÇÃO DO ARRASTO", correct: false },
            { text: "AUMENTO DO ARRASTO E REDUÇÃO DA CONTROLABILIDADE ", correct: true },
            { text: "ESTABILIDADE LONGITUDINAL E LATERA", correct: false },
            { text: "ESTABILIDADE LONGITUDINAL E REDUÇÃO DE CONSUMO", correct: false },
        ]
    },
    {
        questions: "O CENTRÓIDE DE UM COMPARTIMENTO QUE COMEÇA NA STA 200 E TERMINA NA STA 260 É A STA",
        answers: [
            { text: "460", correct: false },
            { text: "320 ", correct: false },
            { text: "230", correct: true },
            { text: "060", correct: false },
        ]
    },
    {
        questions: "A VELOCIDADE OBTIDA COM O SOMATÓRIO OU A DIFERENÇA, ENTRE A TAS E A COMPONENTE DO VENTO, DENOMINA - SE VELOCIDADE",
        answers: [
            { text: "CALIBRADA", correct: false },
            { text: "EM RELAÇÃO AO SOLO", correct: true },
            { text: "INDICADA", correct: false },
            { text: "VERDADEIRA", correct: false },
        ]
    },
    {
        questions: "APÓS A DECOLAGEM, UM AVIÃO PASSA DA CAMADA DE AR CALMO PARA A CAMADA EM MOVIMENTO, COM VENTO DE CAUDA, DEVIDO A UMA WINDSHEAR, PRÓXIMA À SUPERFÍCIE. DURANTE A TRAJETÓRIA DE SUBIDA, O REFERIDO AVIÃO TERÁ",
        answers: [
            { text: "PERDA DA VELOCIDADE EM RELAÇÃO AO SOLO.", correct: false },
            { text: "PERDA DE SUSTENTAÇÃO.", correct: true },
            { text: "AUMENTO DE SUSTENTAÇÃO", correct: false },
            { text: "AUMENTO DA VELOCIDADE INDICADA", correct: false },
        ]
    },
    {
        questions: "O COMBUSTÍVEL A SER CONSUMIDO NA VIAGEM, DA DECOLAGEM AO POUSO, SEM MARGEM DE SEGURANÇA, É O",
        answers: [
            { text: "FUEL OVER DESTINATION.", correct: false },
            { text: "TRIP FUEL ", correct: true },
            { text: " BLOCK FUEL.", correct: false },
            { text: "TAKE OFF FUEL.", correct: false },
        ]
    },
    {
        questions: "NORMALMENTE, A ONDA DE CHOQUE APARECE PRIMEIRAMENTE",
        answers: [
            { text: "SOBRE A CMA", correct: false },
            { text: "SOBRE A CMG.", correct: false },
            { text: "PRÓXIMA À FUSELAGEM.", correct: true },
            { text: " PRÓXIMA À PONTA DA ASA", correct: false },
        ]
    },
    {
        questions: "IDENTIFIQUE, ABAIXO, A RAZÃO PELA QUAL, NOS VÔOS EM ALTA VELOCIDADE, SÃO UTILIZADOS OS AILERONS INTERNOS ",
        answers: [
            { text: "EVITAR TORÇÃO DAS ASAS, COM POSSÍVEL INVERSÃO DOS COMANDOS", correct: true },
            { text: "PROPORCIONAR MAIOR ESTABILIDADE LONGITUDINAL", correct: false },
            { text: "EVITAR O EFEITO DO TUCK UNDER.", correct: false },
            { text: "PROPORCIONAR MAIOR ESTABILIDADE LATERAL.", correct: false },
        ]
    },
    {
        questions: "O FENÔMENO CONHECIDO COMO DUTCH ROLL É CONSEQUÊNCIA PRIMÁRIA DE UM MOVIMENTO DE",
        answers: [
            { text: "GLISSADA", correct: false },
            { text: "ARFAGEM", correct: true },
            { text: "ROLAMENTO", correct: false },
            { text: "GUINADA", correct: false },
        ]
    },
    {
        questions: "SE O PESO MÁXIMO ZERO COMBUSTÍVEL DE UM DETERMINADO AVIÃO FOR ULTRAPASSADO OCORRERÃO ESFORÇOS EXCESSIVOS ",
        answers: [
            { text: "NAS PROXIMIDADES DA RAIZ DA ASA", correct: true },
            { text: "NAS PROXIMIDADES DA PONTA DA ASA ", correct: false },
            { text: "NA FUSELAGEM", correct: false },
            { text: "NO EXTRADORSO", correct: false },
        ]
    },
    {
        questions: "À MEDIDA QUE O CG DE UM AVIÃO DESLOCA-SE PARA A FRENTE, OCORRE",
        answers: [
            { text: "UMA MAIOR DIFICULDADE NA EXECUÇÃO DE MANOBRAS", correct: true },
            { text: "UMA DIMINUIÇÃO NA ESTABILIDADE LONGITUDINAL", correct: false },
            { text: "A POSSIBILIDADE DE UM PARAFUSO CHATO", correct: false },
            { text: "UM AUMENTO NA CONTROLABILIDADE", correct: false },
        ]
    },
    {
        questions: "CONSIDERANDO-SE O BALANCEAMENTO DA AERONAVE, O CG É NORMALMENTE EXPRESSO COMO PORCENTAGEM DO(A)",
        answers: [
            { text: "CMA", correct: true },
            { text: "ESTAÇÃO DE REFERÊNCIA ", correct: false },
            { text: "LINHA DATUM", correct: false },
            { text: "CP", correct: false },
        ]
    },
    {
        questions: "O MOMENTO PRODUZIDO POR UM PESO DE 20 KG COLOCADO NA STA 200 É",
        answers: [
            { text: "400 KG/POL", correct: false },
            { text: "400 KG/M", correct: false },
            { text: "4000 KG/POL", correct: true },
            { text: "40 KG/M", correct: false },
        ]
    },
    {
        questions: "O PESO MÁXIMO COM O QUAL UMA AERONAVE PODE POUSAR, DETERMINADO PELO FABRICANTE, SENDO LIMITADO PELA ESTRUTURA DA FUSELAGEM, É DENOMINADO",
        answers: [
            { text: "PMEP", correct: true },
            { text: "PMBR", correct: false },
            { text: "PMZC", correct: false },
            { text: "PMED", correct: false },
        ]
    },
    {
        questions: "NA CONFIGURAÇÃO DE POUSO, UMA AERONAVE POSSUI UMA VELOCIDADE DE ESTOL DE 110 KT A SUA VREF MÍNIMA DEVERÁ SER DE",
        answers: [
            { text: "120 KT", correct: false },
            { text: "143 KT", correct: true },
            { text: "153 KT", correct: false },
            { text: "111 KT", correct: false },
        ]
    },
    {
        questions: "O VÔO PARA A ALTERNATIVA DEVE SER REALIZADO EM REGIME DE ",
        answers: [
            { text: "LONG RANGE", correct: true },
            { text: "CONSTANT SPEED.", correct: false },
            { text: "HIGH SPEED.", correct: false },
            { text: "SPECIFIC RANGE.", correct: false },
        ]
    },
    {
        questions: `"SABE-SE QUE UMA AERONAVE ESTÁ EQUIPADA COM MACH TRIMMER E QUE ESTE "NÃO" ATUA NO PROFUNDOR DA CITADA ACFT.EXCLUSIVAMENTE COM BASE NESTES DADOS, PODE - SE AFIRMAR QUE ESSA AERONAVE POSSUI "`,
        answers: [
            { text: "ESTABILIZADOR VERTICAL DE INCIDÊNCIA VARIÁVEL.", correct: false },
            { text: "DISPOSITIVO AUTOMÁTICO DE CORREÇÃO DE DERIVA.", correct: false },
            { text: "DISPOSITIVO COMANDÁVEL DE CORREÇÃO DE DERIVA.", correct: false },
            { text: "ESTABILIZADOR HORIZONTAL DE INCIDÊNCIA VARIÁVEL.", correct: true },
        ]
    },
    {
        questions: "PARA SE CALCULAR A VELOCIDADE DO SOM, EM QUALQUER ALTITUDE, DEVE-SE CONSIDERAR A TEMPERATURA ABSOLUTA, EMPREGANDO - SE A ESCALA ",
        answers: [
            { text: " FAHRENHEIT.", correct: false },
            { text: " KELVIN.", correct: true },
            { text: "CELCIUS.", correct: false },
            { text: "RANKINE.", correct: false },
        ]
    },
    {
        questions: "- A ONDA DE PROA FORMA-SE ACIMA DO ",
        answers: [
            { text: " MACH CRÍTICO.", correct: false },
            { text: " MACH CRÍTICO.", correct: false },
            { text: "MACH MÁXIMO OPERACIONAL.", correct: false },
            { text: "MACH 1.", correct: true },
        ]
    },
    {
        questions: "A TAT, EM FUNÇÃO DO ATRITO E DA COMPRESSIBILIDADE DO AR EM VÔO, É SEMPRE",
        answers: [
            { text: "MENOR QUE A OAT", correct: false },
            { text: "IGUAL À OAT ", correct: false },
            { text: "MENOR QUE A SAT", correct: false },
            { text: "MENOR QUE A SAT", correct: true },
        ]
    },
    {
        questions: "CONSIDERE-SE O PBO DE UMA AERONAVE IGUAL A 4200LB, NA STA 90, A 20 POR CENTO DA CMA E O TAKE - OFF FUEL IGUAL A 500LB, NA STA 100, A 30 POR CENTO DA CMA.PORTANTO, O CG DA AERONAVE, EM PERCENTAGEM DA CMA, SERÁ DE ",
        answers: [
            { text: "27,30", correct: false },
            { text: "10,48", correct: false },
            { text: "15,95", correct: false },
            { text: "21,06", correct: true },
        ]
    },
    {
        questions: "- ADICIONANDO-SE O COMBUSTÍVEL DE DECOLAGEM AO PESO BÁSICO OPERACIONAL OBTÉM-SE O PESO",
        answers: [
            { text: "MÁXIMO DE TÁXI", correct: false },
            { text: "BÁSICO DE DECOLAGEM", correct: false },
            { text: "MÁXIMO DE POUSO", correct: false },
            { text: "OPERACIONAL", correct: true },
        ]
    },
    {
        questions: `"A STA 256" FICA A"`,
        answers: [
            { text: "256 METROS À FRENTE DA LINHA DATUM", correct: false },
            { text: "256 POLEGADAS À FRENTE DA LINHA DATUM", correct: false },
            { text: "256 METROS ATRÁS DA LINHA DATUM", correct: false },
            { text: "256 POLEGADAS ATRÁS DA LINHA DATUM", correct: true },
        ]
    },
    {
        questions: "A CMA DE UM AVIÃO VAI DA STA 620, ATÉ A STA 780. A STA DO CG É 677, 6 E SEUS LIMITES DIANTEIRO E TRASEIRO SÃO, RESPECTIVAMENTE, 10 % E 35 % DA CMA.CONCLUI - SE, PORTANTO, QUE O CG ESTÁ",
        answers: [
            { text: "DENTRO DOS LIMITES OPERACIONAIS, PRÓXIMO AO DIANTEIRO", correct: false },
            { text: "À FRENTE DO LIMITE DIANTEIRO ", correct: false },
            { text: "DENTRO DOS LIMITES OPERACIONAIS, PRÓXIMO AO TRASEIRO", correct: false },
            { text: "ATRÁS DO LIMITE TRASEIRO", correct: true },
        ]
    },
    {
        questions: "A VELOCIDADE NA QUAL UM AVIÃO, COM UM MOTOR INOPERANTE, DEVE ATINGIR 35 PÉS DE ALTURA SOBRE A PISTA DE DECOLAGEM, É A",
        answers: [
            { text: "V2", correct: true },
            { text: "V1 ", correct: false },
            { text: "VLOF", correct: false },
            { text: "VR", correct: false },
        ]
    },
    {
        questions: "COM RELAÇÃO À VELOCIDADE DE ROTAÇÃO, É CORRETO AFIRMAR QUE ELA",
        answers: [
            { text: "É SEMPRE SUPERIOR À VMBE.", correct: false },
            { text: "NÃO DEVE SER SUPERIOR A 1,05 DA VMCA. ", correct: false },
            { text: "NÃO DEVE SER INFERIOR A 1,05 DA VMCA.", correct: true },
            { text: "É SEMPRE SUPERIOR À VLOF.", correct: false },
        ]
    },
    {
        questions: "UMA DAS CONDIÇÕES FAVORÁVEIS PARA O AUMENTO DO PESO MÁXIMO DE DECOLAGEM É",
        answers: [
            { text: "ALTA TEMPERATURA.", correct: false },
            { text: "AUSÊNCIA DE STOPWAY.", correct: false },
            { text: "PISTA COM GRADIENTE NEGATIVO.", correct: true },
            { text: "ALTA ALTITUDE PRESSÃO.", correct: false },
        ]
    },
    {
        questions: "O SEGMENTO DE DECOLAGEM ONDE A ACFT ENCONTRA-SE NIVELADA COM GRADIENTE NULO, DENOMINA - SE",
        answers: [
            { text: "FINAL.", correct: false },
            { text: "SEGUNDO.", correct: false },
            { text: " TERCEIRO.", correct: true },
            { text: "PRIMEIRO", correct: false },
        ]
    },
    {
        questions: "O DESCOLAMENTO DA CAMADA LIMITE É VERIFICADO",
        answers: [
            { text: "ATRÁS DA ONDA DE CHOQUE.", correct: true },
            { text: "NA ONDA DE CHOQUE", correct: false },
            { text: "NA SUPERFÍCIE CÔNICA DO VENTO RELATIVO.", correct: false },
            { text: "À FRENTE DA ONDA DE CHOQUE.", correct: false },
        ]
    },
    {
        questions: " MACH CRÍTICO É O NÚMERO MACH ",
        answers: [
            { text: "EM QUE SE INICIA O TURBILHONAMENTO NO EXTRADORSO DA ASA", correct: false },
            { text: "NO QUAL A ASA ATINGE A VELOCIDADE DE MACH 1 ", correct: false },
            { text: " MÁXIMO POSSÍVEL PARA O AVIÃO", correct: false },
            { text: "NO QUAL O VENTO RELATIVO ATINGE O VALOR M=1 EM UM PONTO DA AERONAVE", correct: true },
        ]
    },
    {
        questions: "UM AVIÃO VOA COM A TAS=833 KM/H E A VELOCIDADE DO SOM, LOCAL, É DE 926 KM/H, A VELOCIDADE, EM NÚMERO MACH, SERÁ ",
        answers: [
            { text: "1.11", correct: false },
            { text: "0.90", correct: true },
            { text: "0.80", correct: false },
            { text: "0.92", correct: false },
        ]
    },
    {
        questions: "UM DOS RECURSOS UTILIZADOS PARA O CONTROLE DA CAMADA LIMITE É",
        answers: [
            { text: "VORTEX GENERATOR", correct: true },
            { text: "WING FENCE", correct: false },
            { text: " SLOTS.", correct: false },
            { text: "SPOILERS", correct: false },
        ]
    },
    {
        questions: "OS PRINCIPAIS PESOS ESTRUTURAIS DE UM AVIÃO SÃO:",
        answers: [
            { text: "MTAW / MZFW / MTOGW / MLGW", correct: false },
            { text: "MTAW / MZFW / MTOGW / MLAW ", correct: false },
            { text: "MTW / MZFW / MTOW / MLW", correct: false },
            { text: "MTW / MZFW / MTOGW / MLGW", correct: true },
        ]
    },
    {
        questions: `""OPERATING WEIGHT" É O SOMATÓRIO DO "`,
        answers: [
            { text: "ALLOWED TRAFFIC LOAD / TAKEOFF FUEL", correct: false },
            { text: "DRY OPERATING WEIGHT / TAKEOFF FUEL", correct: true },
            { text: "DRY OPERATING WEIGHT / PAYLOAD", correct: false },
            { text: "ALLOWED TRAFFIC LOAD / PAYLOAD", correct: false },
        ]
    },
    {
        questions: "CONSIDERANDO-SE QUE O PORÃO DE CARGA TERMINA NA STA 825 E O CENTRÓIDE LOCALIZA-SE NA STA 575, O PORÃO INICIA - SE NA STA: ",
        answers: [
            { text: "325", correct: true },
            { text: "625 ", correct: false },
            { text: "425", correct: false },
            { text: "525", correct: false },
        ]
    },
    {
        questions: "A CMA DE UM AVIÃO VAI DA STA 620, ATÉ A STA 780. A STA DO CG É 677,6 E SEUS LIMITES DIANTEIRO E TRASEIRO SÃO, RESPECTIVAMENTE, 10 % E 35 % DA CMA.CONCLUI - SE, PORTANTO, QUE O CG ESTÁ",
        answers: [
            { text: " À FRENTE DO LIMITE DIANTEIRO", correct: false },
            { text: "ATRÁS DO LIMITE TRASEIRO", correct: true },
            { text: " DENTRO DOS LIMITES OPERACIONAIS, PRÓXIMO AO TRASEIRO", correct: false },
            { text: "DENTRO DOS LIMITES OPERACIONAIS, PRÓXIMO DO DIANTEIRO", correct: false },
        ]
    },
    {
        questions: "A ESTAÇÃO MÉDIA ENTRE AS ESTAÇÕES INICIAL E FINAL DE UM COMPARTIMENTTO DE CARGA, DENOMINA - SE:",
        answers: [
            { text: "CMA", correct: false },
            { text: "CENTRÓIDE", correct: true },
            { text: "CG", correct: false },
            { text: "LINHA DATUM", correct: false },
        ]
    },
    {
        questions: "- NAS ESPERAS, O REGIME, NORMALMENTE UTILIZADO, É O",
        answers: [
            { text: "LONG RANGE.", correct: false },
            { text: "MAXIMUM ENDURANCE.", correct: true },
            { text: "SPECIFIC RANGE", correct: false },
            { text: " CONSTANT SPEED", correct: false },
        ]
    },
    {
        questions: "A VELOCIDADE DE ESTOL DE UMA AERONAVE, VOANDO RETO E NIVELADO, É DE 100 KT. CONSIDERANDO - SE QUE A AERONAVE SEJA SUBMETIDA A UM FATOR DE CARGA 2, A SUA NOVA VELOCIDADE DE ESTOL SERÁ DE",
        answers: [
            { text: "80 KT", correct: false },
            { text: "100 KT", correct: false },
            { text: "141 KT", correct: true },
            { text: "81 KT", correct: false },
        ]
    },
    {
        questions: "- A UTILIZAÇÃO DO REDESPACHO DE UMA ACFT, EM DETERMINADO PONTO DA ROTA, TEM COMO OBJETIVO",
        answers: [
            { text: "AUMENTAR O COMBUSTÍVEL MÍNIMO REQUERIDO", correct: false },
            { text: "DIMINUIR O TEMPO DE VÔO.", correct: false },
            { text: "DIMINUIR O COMBUSTÍVEL MÍNIMO REQUERIDO.", correct: true },
            { text: "AUMENTAR O PESO DE DECOLAGEM.", correct: false },
        ]
    },
    {
        questions: "- O DEFLEXIONAMENTO DE UMA ASA ENFLECHADA, DURANTE O VOO, FARÁ COM QUE HAJA UMA",
        answers: [
            { text: "DIMINUIÇÃO DA SUSTENTAÇÃO.", correct: false },
            { text: "DESLOCAMENTO DO CP PARA TRÁS", correct: false },
            { text: "DIMINUIÇÃO DO ÂNGULO DE INCIDÊNCIA", correct: false },
            { text: "DESLOCAMENTO DO CP PARA FRENTE.", correct: true },
        ]
    },
    {
        questions: "UM AVIÃO VOA COM A TAS=833 KM/H E A VELOCIDADE DO SOM, LOCAL, É DE 926 KM/H, A VELOCIDADE, EM NÚMERO MACH, SERÁ",
        answers: [
            { text: "1.11", correct: false },
            { text: " 0.92 ", correct: false },
            { text: " 0.90", correct: true },
            { text: " 0.80", correct: false },
        ]
    },
    {
        questions: "- A ONDA DE CHOQUE É",
        answers: [
            { text: "UMA REGIÃO DE ALTA PRESSÃO E BAIXA DENSIDADE", correct: false },
            { text: " UMA ONDA QUE RESULTA DO CHOQUE DE PARTÍCULAS DE AR ", correct: false },
            { text: " UM ACÚMULO DE ONDAS DE PRESSÃO", correct: true },
            { text: "UMA SUPERFÍCIE CÔNICA QUE AVANÇA COM O AVIÃO", correct: false },
        ]
    },
    {
        questions: "O PESO MÁXIMO ZERO COMBUSTÍVEL DE UMA AERONAVE LIMITA O ",
        answers: [
            { text: " COMBUSTÍVEL MÁXIMO PARA A ETAPA", correct: false },
            { text: "PESO BÁSICO OPERACIONAL", correct: false },
            { text: "COMBUSTÍVEL A SER USADO NO ABASTECIMENTO", correct: false },
            { text: "MÁXIMO DE CARGA QUE PODERÁ TRANSPORTAR", correct: true },
        ]
    },
    {
        questions: "- CONSIDERANDO-SE OS SEGUINTES DADOS: DOW=31858 KG, MZFW=48307 KG, MLW=51709 KG, MTOW = 61235 KG, TRIP FUEL = 3000 KG E TAKEOFF FUEL = 10500, KG, O DISPONÍVEL PERMITIDO (ALLOWED TRAFFIC LOAD)É",
        answers: [
            { text: "6351 KG", correct: false },
            { text: "12351 KG", correct: true },
            { text: "15351 KG", correct: false },
            { text: "13449 KG", correct: false },
        ]
    },
    {
        questions: "- NUMA ASA ENFLECHADA, SE O ESTOL OCORRER NA PONTA DA ASA, PODERÁ PROVOCAR",
        answers: [
            { text: "PITCH DOWN", correct: false },
            { text: "PITCH UP", correct: true },
            { text: "TUCK UNDER", correct: false },
            { text: "DUTCH ROLL", correct: false },
        ]
    },
    {
        questions: `"QUANDO A "ASDA" É IGUAL À "TODA", TEM-SE"`,
        answers: [
            { text: "CLEARWAY MAIOR.", correct: false },
            { text: "RWY BALANCEADA.", correct: true },
            { text: "RWY DESBALANCEADA", correct: false },
            { text: "STOPWAY MAIOR", correct: false },
        ]
    },
    {
        questions: "SE POR ALGUM MOTIVO HOUVER UM AUMENTO NA ESPESSURA DA CAMADA LIMITE, O AVIÃO TERÁ",
        answers: [
            { text: "SOBRE O EXTRADORSO UMA REGIÃO DE TURBULÊNCIA", correct: true },
            { text: "GANHO DE SUSTENTAÇÃO. ", correct: false },
            { text: "EFEITOS DIFERENTES AO DO ESTOL.", correct: false },
            { text: " REDUÇÃO DO ARRASTO.", correct: false },
        ]
    },
    {
        questions: "A VELOCIDADE ESCOLHIDA DURANTE UM PROCEDIMENTO DE DRIFT DOWN DEVE ASSEGURAR",
        answers: [
            { text: "VELOCIDADE IGUAL A DE ESTOL", correct: false },
            { text: "ALCANCE MÍNIMO", correct: false },
            { text: "VELOCIDADE SUFICIENTE, PARA MANTER A ALTITUDE INICIAL", correct: false },
            { text: " ULTRAPASSAGEM SEGURA DOS OBSTÁCULOS", correct: true },
        ]
    },
    {
        questions: "O DEFLEXIONAMENTO DE UMA ASA ENFLECHADA, DURANTE O VOO, FARÁ COM QUE HAJA UM(A)",
        answers: [
            { text: "DESLOCAMENTO DO CP PARA FRENTE.", correct: true },
            { text: "DIMINUIÇÃO DA SUSTENTAÇÃO.", correct: false },
            { text: "DESLOCAMENTO DO CP PARA TRÁS.", correct: false },
            { text: "DIMINUIÇÃO DO ÂNGULO DE INCIDÊNCIA.", correct: false },
        ]
    },
    {
        questions: "QUANDO O AVIÃO SE DESLOCA EM VELOCIDADE SUPERSÔNICA, A ONDA DE PROA TORNA-SE",
        answers: [
            { text: " NORMAL", correct: false },
            { text: "TRANSVERSA ", correct: true },
            { text: " UNIDIRECIONAL", correct: false },
            { text: "OBLÍQUA.", correct: false },
        ]
    },
    {
        questions: `"O "TUCK UNDER" É UM FENÔMENO PROVOCADO PELA PERDA DE SUSTENTAÇÃO PROVENIENTE DO APARECIMENTO DA ONDA DE CHOQUE, NA"`,
        answers: [
            { text: "RAIZ DA ASA, CAUSANDO O LEVANTAMENTO DO NARIZ DO AVIÃO", correct: false },
            { text: "RAIZ DA ASA, CAUSANDO O AFUNDAMENTO DO NARIZ DO AVIÃO.", correct: true },
            { text: "PONTA DA ASA, CAUSANDO O LEVANTAMENTO DO NARIZ DO AVIÃO.", correct: false },
            { text: "PONTA DA ASA, CAUSANDO O AFUNDAMENTO DO NARIZ DO AVIÃO", correct: false },
        ]
    },
    {
        questions: "- NO ESTUDO DOS EFEITOS DA COMPRESSIBILIDADE DO AR, É ABORDADA A EXISTÊNCIA DO CHAMADO PONTO DE ESTAGNAÇÃO.EM UM AEROFÓLIO, TAL PONTO LOCALIZA - SE NO(A)",
        answers: [
            { text: "EXTRADORSO.", correct: false },
            { text: "INTRADORSO ", correct: false },
            { text: "BORDO DE ATAQUE.", correct: true },
            { text: "BORDO DE FUGA.", correct: false },
        ]
    },
    {
        questions: "O SENTIDO DO FLUXO TRANSVERSAL, AO PASSAR PELO BORDO DE ATAQUE DE UMA ASA ENFLECHADA, SERÁ DO(A)",
        answers: [
            { text: "EXTRADORSO PARA O INTRADORSO", correct: false },
            { text: "PONTA PARA A RAIZ", correct: true },
            { text: "RAIZ PARA A PONTA", correct: false },
            { text: " INTRADORSO PARA O EXTRADORSO.", correct: false },
        ]
    },
    {
        questions: "- A SITUAÇÃO EM QUE O PESO MÁXIMO DE DECOLAGEM DE UMA AERONAVE SOFRERÁ RESTRIÇÃO SERÁ COM ",
        answers: [
            { text: "OBSTÁCULOS PRÓXIMOS À CABECEIRA OPOSTA DA RWY EM USO", correct: true },
            { text: "AUSÊNCIA DE STOPWAY E CLEARWAY", correct: false },
            { text: "VENTO CALMO", correct: false },
            { text: "ANTI-SKID OPERATIVO", correct: false },
        ]
    },
    {
        questions: "- O COMPRIMENTO REAL DE UMA PISTA É DE 3000M. A DIFERENÇA MÁXIMA PERMISSÍVEL DE ALTURA ENTRE SUAS CABECEIRAS É DE",
        answers: [
            { text: "0,6M", correct: false },
            { text: "2M", correct: false },
            { text: "6M", correct: false },
            { text: "60M", correct: true },
        ]
    },
    {
        questions: "UMA DETERMINADA PISTA DE PCN 80/R/A/X/T POSSUI",
        answers: [
            { text: "RIGIDEZ E ALTA RESISTÊNCIA", correct: true },
            { text: "FLEXIBILIDADE E BAIXA RESISTÊNCIA ", correct: false },
            { text: "FLEXIBILIDADE E ALTA RESISTÊNCIA.", correct: false },
            { text: "RIGIDEZ E BAIXA RESISTÊNCIA.", correct: false },
        ]
    },
    {
        questions: "A VELOCIDADE ESCOLHIDA PARA A DESCIDA, NUM PROCEDIMENTO DE DRIFT DOWN, DEVE ASSEGURAR ",
        answers: [
            { text: "ALCANCE SUFICIENTE", correct: true },
            { text: " MAIOR ALTITUDE", correct: false },
            { text: " TRAJETÓRIA LÍQUIDA A 1000 PÉS ACIMA DOS OBSTÁCULOS", correct: false },
            { text: "TRAJETÓRIA LÍQUIDA A 600 PÉS ACIMA DOS OBSTÁCULOS", correct: false },
        ]
    },
    {
        questions: "SE O FABRICANTE DETERMINA QUE OS LIMITES MÁXIMOS DO CG SÃO 20% E 30% DA CMA E ESTA COMEÇA NA STA 300 E VAI ATÉ A STA 450, ENTÃO AS ESTAÇÕES QUE REPRESENTAM ESSES LIMITES SÃO, RESPECTIVAMENTE",
        answers: [
            { text: " STA 360 E 445", correct: false },
            { text: " STA 320 E 345", correct: false },
            { text: "STA 360 E 430", correct: false },
            { text: "STA 330 E 345", correct: true },
        ]
    },
    {
        questions: "A VELOCIDADE MÁXIMA UTILIZADA PARA APLICAÇÃO DOS FREIOS É A",
        answers: [
            { text: "VMCA", correct: false },
            { text: "VMBE", correct: true },
            { text: "VB", correct: false },
            { text: "VMU", correct: false },
        ]
    },
    {
        questions: "NA PRÁTICA, O QUE TORNA A AERODINÂMICA DE ALTA VELOCIDADE UM ESTUDO DIFERENCIADO DA AERODINÂMICA DE BAIXA VELOCIDADE É O(A)",
        answers: [
            { text: "DIMINUIÇÃO DA VISCOSIDADE DO AR, EM ALTAS VELOCIDADES.", correct: false },
            { text: " AUMENTO DA TEMPERATURA DO AR, DEVIDO AO DESLOCAMENTO.", correct: false },
            { text: " BARREIRA DO SOM.", correct: false },
            { text: "COMPRESSIBILIDADE DO AR.", correct: true },
        ]
    },
    {
        questions: "O CENTRO DE PRESSÃO DE UMA AERONAVE, EM ALTA VELOCIDADE, DESLOCA-SE ",
        answers: [
            { text: "À FRENTE.", correct: false },
            { text: "EM DIREÇÃO À CMA.", correct: false },
            { text: "PARA TRÁS.", correct: true },
            { text: " EM DIREÇÃO AO CG.", correct: false },
        ]
    },
    {
        questions: "- A TAT, EM FUNÇÃO DO ATRITO E DA COMPRESSIBILIDADE DO AR EM VÔO, É SEMPRE ",
        answers: [
            { text: "MENOR QUE A OAT", correct: false },
            { text: "MAIOR QUE A SAT", correct: true },
            { text: " MENOR QUE A SAT", correct: false },
            { text: " IGUAL À OAT", correct: false },
        ]
    },
    {
        questions: "- PARA EVITAR O FLUXO TRANSVERSAL, UTILIZA-SE",
        answers: [
            { text: "SLOT", correct: false },
            { text: " WING FENCE. ", correct: true },
            { text: "VORTEX GENERATOR.", correct: false },
            { text: "SPOILER.", correct: false },
        ]
    },
    {
        questions: "DURANTE UMA DECOLAGEM, AO ATRAVESSAR UMA TESOURA DE VENTO OCASIONADA POR UMA DESCENDENTE, O AVIÃO SOFRERÁ UM(A)",
        answers: [
            { text: "MELHOR DESEMPENHO", correct: false },
            { text: "REDUÇÃO DA SUA TRAJETÓRIA ASCENDENTE ", correct: true },
            { text: "GANHO DE VELOCIDADE", correct: false },
            { text: "AUMENTO NO ÂNGULO DE ATAQUE", correct: false },
        ]
    },
    {
        questions: `"- O "TUCK UNDER" É UM FENÔMENO PROVOCADO PELA PERDA DE SUSTENTAÇÃO PROVENIENTE DO APARECIMENTO DA ONDA DE CHOQUE, NA "`,
        answers: [
            { text: "RAIZ DA ASA, CAUSANDO O AFUNDAMENTO DO NARIZ DO AVIÃO", correct: true },
            { text: "RAIZ DA ASA, CAUSANDO O LEVANTAMENTO DO NARIZ DO AVIÃO.", correct: false },
            { text: "PONTA DA ASA, CAUSANDO O AFUNDAMENTO DO NARIZ DO AVIÃO.", correct: false },
            { text: " PONTA DA ASA, CAUSANDO O LEVANTAMENTO DO NARIZ DO AVIÃO.", correct: false },
        ]
    },
    {
        questions: "O PESO ATUAL OU REAL DE DECOLAGEM É CALCULADO PELA SOMA DO",
        answers: [
            { text: "PMZC + TAKEOFF FUEL", correct: false },
            { text: "PMZC + TRIP FUE", correct: false },
            { text: "PAZC + TAKEOFF FUEL", correct: true },
            { text: "PAZC + TRIP FUEL", correct: false },
        ]
    },
    {
        questions: "DURANTE UMA APROXIMAÇÃO PARA POUSO, UM AVIÃO ESTA SOB A INFLUÊNCIA DE UM VENTO DE PROA.AO PASSAR PARA UMA CONDIÇÃO DE VENTO CALMO, O AVIÃO TERÁ ",
        answers: [
            { text: "TENDÊNCIA DE IGUALAR A VA COM A VS", correct: true },
            { text: "AUMENTO NO ÂNGULO DE INCIDÊNCIA.", correct: false },
            { text: " MELHOR DESEMPENHO.", correct: false },
            { text: "AUMENTO DA SUSTENTAÇÃO.", correct: false },
        ]
    },
    {
        questions: "UMA DAS SOLUÇÕES QUE PODEM SER DADAS PARA O AUMENTO DO MACH CRÍTICO É A UTILIZAÇÃO DO",
        answers: [
            { text: "DESLOCAMENTO DO CP PARA A FRENTE", correct: false },
            { text: "AUMENTO DA ESPESSURA DO AEROFÓLIO", correct: false },
            { text: "YAW DAMPER", correct: false },
            { text: " PERFIL SUPERCRÍTICO.", correct: true },
        ]
    },
    {
        questions: "- DURANTE A DECOLAGEM, A VELOCIDADE NO EXATO MOMENTO EM QUE A AERONAVE DEIXA O SOLO DENOMINA - SE",
        answers: [
            { text: "VR", correct: false },
            { text: "VLOF ", correct: true },
            { text: "VREF", correct: false },
            { text: "V2", correct: false },
        ]
    },
    {
        questions: "- A TEMPERATURA DO AR DE IMPACTO DENOMINA-SE",
        answers: [
            { text: "OAT", correct: false },
            { text: "TAT", correct: true },
            { text: "SAT", correct: false },
            { text: "RAT", correct: false },
        ]
    },
    {
        questions: "A DISTÂNCIA DEMONSTRADA DE POUSO, NECESSÁRIA PARA ATERRISSAGEM, TEM COMO REFERÊNCIA UMA ALTURA, SOBRE A CABECEIRA, DE",
        answers: [
            { text: "100 FT", correct: false },
            { text: "50 FT", correct: true },
            { text: "35 FT", correct: false },
            { text: "150 FT", correct: false },
        ]
    },
    {
        questions: "- UMA DAS CONDIÇÕES FAVORÁVEIS PARA O AUMENTO DO PESO MÁXIMO DE DECOLAGEM É",
        answers: [
            { text: "ALTA ALTITUDE PRESSÃO", correct: false },
            { text: "ALTA TEMPERATURA", correct: false },
            { text: "AUSÊNCIA DE STOPWAY", correct: false },
            { text: "PISTA COM GRADIENTE NEGATIVO.", correct: true },
        ]
    },

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function starQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próximo";
    ShowQuestion();
}

function ShowQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

    // Embaralhar as respostas antes de exibi-las
    const shuffledAnswers = shuffleArray(currentQuestion.answers);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Função para embaralhar um array usando o algoritmo de Fisher-Yates (modern version).
function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}



function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    questions[currentQuestionIndex].selectedAnswer = selectedBtn.innerHTML; // Armazena a resposta selecionada no objeto questions
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function handleNexButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        ShowQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNexButton();
    } else {
        starQuiz();
    }
})

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!<br><br>`;
    let htmlContent = ""; // Variável para armazenar o conteúdo das perguntas

    questions.forEach((question, index) => {
        const selectedAnswer = question.answers.find(answer => answer.text === questions[index].selectedAnswer);
        const isCorrect = selectedAnswer && selectedAnswer.correct;
        const emoji = isCorrect ? "✅" : "❌";

        // Adiciona a pergunta atual ao conteúdo HTML com espaçamento
        htmlContent += `${index + 1}. ${question.questions} - ${questions[index].selectedAnswer} ${emoji}<br><br>`;
    });

    questionElement.innerHTML += htmlContent; // Atualiza o elemento com todo o conteúdo das perguntas
    nextButton.innerHTML = "Tentar novamente";
    nextButton.style.display = "block";
}

starQuiz();
