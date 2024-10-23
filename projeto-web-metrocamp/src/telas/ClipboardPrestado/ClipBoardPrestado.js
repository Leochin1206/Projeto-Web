import './ClipBoardPrestado.css'

import { CardPrancheta } from '../../componentes/CardPrancheta/CardPrancheta.js'
import { BotaoMaior } from '../../componentes/BotaoMaior/BotaoMaior.js'
import { ClipBoardAndamento } from '../../componentes/ClipBoardAndamento/ClipBoardAndamento.js'
import { ClipBoardRequerido } from '../../componentes/ClipBoardRequerido/ClipBoardRequerido.js'

export function ClipBoardPrestado() {
    return (
        <div className='Clip-board'>

            <div className='Buttons'>
                <BotaoMaior titulo="Requisitado" cor="#B7DBF4" font="#000000" rota="/ClipBoardRequisitado" />
                <BotaoMaior titulo="Prestado" />
            </div>

            <div className='Container'>

                <div className='Container-Requisitado'>
                    <div className='Requisitado'>
                        <h1>Requisitado</h1>
                    </div>

                    <div className='CardsPrestado'>
                        <ClipBoardRequerido />
                    </div>
                </div>

                <div className='Container-Andamento'>
                    <div className='Andamento'>
                        <h1>Em Andamento</h1>
                    </div>

                    <div className='CardsPrestado'>
                        <ClipBoardAndamento />
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