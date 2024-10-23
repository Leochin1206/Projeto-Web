import './ClipBoardRequisitado.css'

import { CardPrancheta } from '../../componentes/CardPrancheta/CardPrancheta.js'
import { BotaoMaior } from '../../componentes/BotaoMaior/BotaoMaior.js'

export function ClipBoardRequisitado() {
    return (
        <div className='Clip-board'>

            <div className='Buttons'>
                <BotaoMaior titulo="Requisitado" />
                <BotaoMaior titulo="Prestado" cor="#B7DBF4" font="#000000" rota="/ClipBoardPrestado" />
            </div>

            <div className='Container'>

                <div className='Container-Requisitado'>
                    <div className='Requisitado'>
                        <h1>Requisitado</h1>
                    </div>

                    <div className='CardsRequisitado'>
                        <CardPrancheta />
                        <CardPrancheta />
                    </div>
                </div>

                <div className='Container-Andamento'>
                    <div className='Andamento'>
                        <h1>Em Andamento</h1>
                    </div>

                    <div className='CardsRequisitado'>
                        <CardPrancheta />
                        <CardPrancheta />
                    </div>
                </div>

                <div className='Container-Finalizado'>
                    <div className='Finalizado'>
                        <h1>Finalizado</h1>
                    </div>

                    <div className='Cards-Finalizado'>
                        <CardPrancheta />
                        <CardPrancheta />
                    </div>
                </div>

            </div>

        </div>
    );
}