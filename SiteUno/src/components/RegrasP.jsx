export default function RegrasP() {
    return(
        <div className="containerCI">
            <div>
                <div>
                    <h1>Cartas Normais</h1>
                    <p>Numeradas (0-9): Podem ser jogadas se coincidirem com a cor ou o número da carta no topo da pilha de descarte.</p>
                </div>
                <div>
                    <h1>Cartas Especiais</h1>
                    <p>Compra 2 (+2): O próximo jogador compra duas cartas e perde a vez.
                        Inverter: Muda a direção do jogo.
                        Pular: O próximo jogador perde a vez.
                        Curinga: O jogador que a joga escolhe a cor que continuará o jogo.
                        Curinga Compra 4 (+4): O jogador escolhe a cor e o próximo jogador compra quatro cartas e perde a vez. Só pode ser jogada se o jogador não tiver outra carta da cor da pilha de descarte.</p>
                </div>
                <div>
                    <h1>Regras Adicionaise</h1>
                    <p>Uno!: Quando um jogador tem apenas uma carta, deve gritar "Uno!" para avisar os outros jogadores. Se outro jogador perceber que alguém não gritou "Uno!" antes da próxima jogada, o jogador que não gritou deve comprar duas cartas como penalidade.
                        Compra Forçada: Se um jogador não puder jogar uma carta, deve comprar uma carta da pilha de compras. Se a carta comprada puder ser jogada, o jogador pode jogá-la imediatamente. Caso contrário, a vez passa para o próximo jogador.
                        Fim do Jogo: O jogo termina quando um jogador descarta sua última carta. Pontos são então contados, e uma nova rodada começa até que um jogador atinja 500 pontos.</p>
                </div>
                <div>
                    <h1>Pontuação</h1>
                    <p>Cartas Numeradas: Valem o número impresso.
                        Compra 2, Inverter, Pular: 20 pontos cada.
                        Curinga, Curinga Compra 4: 50 pontos cada.</p>
                </div>
                
                <br /><br />
            </div>
            
        </div>
    )
}