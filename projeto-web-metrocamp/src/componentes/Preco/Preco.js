import './Preco.css'
import ImagemPerfil from '../../images/icone.png'

export function Preco() {
    async function criarServico(clienteId, profissionalId, descricaoServico) {
        try {
            const response = await fetch('/servicos/criar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    clienteId,
                    profissionalId,
                    descricaoServico
                })
            });
    
            if (!response.ok) {
                throw new Error('Erro ao criar serviço');
            }
    
            const result = await response.json();
            console.log(result); // Ou exiba uma mensagem de sucesso para o usuário
    
        } catch (error) {
            console.error('Erro:', error);
        }
    }
    
    return (
        <div className='Preco'>

            <div className="PerfilUsuario">
                <img src={ImagemPerfil} alt="" className="imagem-perfil" />

                <h5>Renato Willian</h5>

                <div className="Bolinha"></div>

                <h6>Calheiro | Pedreiro</h6>
            </div>

            <h1>R$800,00</h1>

            <button className="SolicitarServico" onClick={criarServico}>
                <h2>Solicitar Serviço</h2>
            </button>
        </div>
    );
}