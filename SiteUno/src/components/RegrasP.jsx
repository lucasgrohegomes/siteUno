export default function RegrasP() {
    return(
        <div className="containerCI">
            <div>
                <div className="HI01">
                    <h1>Cartas Normais</h1>
                    <p>Numeradas (0-9): Podem ser jogadas se coincidirem com a cor ou o número da carta no topo da pilha de descarte.</p>
                </div>
                <div className="HI01">
                    <h1>Cartas Especiais</h1>
                    <li>Compra 2 (+2): O próximo jogador compra duas cartas e perde a vez.</li>
                    <li>Inverter: Muda a direção do jogo.</li>
                    <li>Pular: O próximo jogador perde a vez.</li>
                    <li>Curinga: O jogador que a joga escolhe a cor que continuará o jogo.</li>
                    <li>Curinga Compra 4 (+4): O jogador escolhe a cor e o próximo jogador compra quatro cartas e perde a vez. Só pode ser jogada se o jogador não tiver outra carta da cor da pilha de descarte.</li>
                </div>
                <div className="HI01">
                    <h1>Regras Adicionais</h1>
                    <li>Uno!: Quando um jogador tem apenas uma carta, deve gritar "Uno!" para avisar os outros jogadores. Se outro jogador perceber que alguém não gritou "Uno!" antes da próxima jogada, o jogador que não gritou deve comprar duas cartas como penalidade.</li>
                    <li>Compra Forçada: Se um jogador não puder jogar uma carta, deve comprar uma carta da pilha de compras. Se a carta comprada puder ser jogada, o jogador pode jogá-la imediatamente. Caso contrário, a vez passa para o próximo jogador.</li>
                    <li>Fim do Jogo: O jogo termina quando um jogador descarta sua última carta. Pontos são então contados, e uma nova rodada começa até que um jogador atinja 500 pontos.</li>
                </div>
                <div className="HI01">
                    <h1>Pontuação</h1>
                        <li>Cartas Numeradas: Valem o número impresso.</li>
                        <li>Compra 2, Inverter, Pular: 20 pontos cada.</li>
                        <li>Curinga, Curinga Compra 4: 50 pontos cada.</li>
                </div>
                
                <br /><br />
            </div>
            
        </div>
    )
}