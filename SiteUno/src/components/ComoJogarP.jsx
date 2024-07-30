export default function ComoJogarP() {
    return(
        <div className="containerCI">
            <div className="C01">
                <div className="HI01">
                    <h1>Preparação</h1>
                    <p>Distribuição de Cartas: Cada jogador recebe 7 cartas. O restante do baralho é colocado virado para baixo, formando a pilha de compras. A primeira carta da pilha de compras é virada e colocada ao lado, formando a pilha de descarte.
                    Número de Jogadores: Uno pode ser jogado por 2 a 10 jogadores.</p>
                </div>
                <div className="HI01">
                    <h1>Início do Jogo</h1>
                    <p>O jogador à esquerda do distribuidor começa a jogar.
                    Os jogadores, em ordem, descartam uma carta da mão que coincida com a cor ou número da carta no topo da pilha de descarte. Se um jogador não puder jogar, ele deve comprar uma carta da pilha de compras. Se a carta comprada puder ser jogada, o jogador pode jogá-la imediatamente. Caso contrário, a vez passa para o próximo jogador.</p>
                </div>
                <div className="HI01">
                    <h1>Jogadas Especiais</h1>
                    <ul>
                    <li>Compra 2 (+2): O próximo jogador compra duas cartas e perde a vez.</li>
                    <li>Inverter: Muda a direção do jogo.</li>
                    <li>Pular: O próximo jogador perde a vez.</li>
                    <li>Curinga: O jogador escolhe a cor que continuará o jogo.</li>
                    <li>Curinga Compra 4 (+4): O jogador escolhe a cor e o próximo jogador compra quatro cartas e perde a vez. Só pode ser jogada se o jogador não tiver outra carta da cor da pilha de descarte.</li>
                    <li>Uno!: Quando um jogador tem apenas uma carta, deve gritar "Uno!" Se não fizer isso e for pego por outro jogador antes da próxima jogada, deve comprar duas cartas como penalidade.
                    </li>
                    </ul>
                </div>
                <div className="HI01">
                    <h1>Fim da Rodada</h1>
                    <p>A rodada termina quando um jogador descarta sua última carta.
Os jogadores contam seus pontos com base nas cartas restantes na mão dos outros jogadores.
O jogo continua até que um jogador atinja 500 pontos.</p>
                </div>
                <div className="HI01">
                    <h1>Pontuação</h1>
                    <li>Cartas Numeradas: Valem o número impresso.</li>
                    <li>Compra 2, Inverter, Pular: 20 pontos cada.</li>
                    <li>Curinga, Curinga Compra 4: 50 pontos cada.</li>
                </div>
                <div className="HI01">
                    <h1>Estratégia</h1>
                    <p>Gerenciamento de Cartas: Tente equilibrar sua mão para ter sempre uma carta que você possa jogar.
Uso de Cartas Especiais: Use cartas de ação estrategicamente para atrapalhar os oponentes e avançar seu jogo.
Preste Atenção: Fique atento às cartas dos outros jogadores e tente prever suas jogadas.</p>
                </div>
                <div className="HI01">
                    <h1>Conclusão</h1>
                    <p>Uno é um jogo de cartas simples e divertido que pode ser apreciado por pessoas de todas as idades. Seguindo essas regras e estratégias básicas, você estará pronto para começar a jogar e se divertir com amigos e familiares.</p>
                </div>
                
                <br /><br />
            </div>
            
        </div>
    )
}