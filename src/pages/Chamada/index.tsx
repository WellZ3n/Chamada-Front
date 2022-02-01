import React, { useState, useEffect } from 'react';
import api from '../../service/api'

import { Container } from './styles';

interface AlunosDTO {
    id: number,
    nome: string
}

interface PresencasDTO {
    id: number,
    presente: boolean
}


const Chamada: React.FC = () => {
    const [alunos, setAlunos] = useState<AlunosDTO[]>([])
    const [presencas, setPresencas] = useState<PresencasDTO[]>([])
    const [newNome, setNewNome] = useState('')
    const [newId, setNewId] = useState('')

    async function cadastrar (name: String){

        const aluno ={
            id: null,
            nome: name
        }

        try {
            await api.post(`/alunos`, aluno)
            window.location.reload();
        } catch (error) {
        }
    }

    async function deletar (idAluno: String){

        try {
            await api.delete(`/alunos/${idAluno}`)
            window.location.reload();
        } catch (error) {
        }
    }

    async function editar (idAluno: String, name: String){

        const aluno ={
            id: null,
            nome: name
        }

        try {
            await api.put(`/alunos/${idAluno}`, aluno)
            window.location.reload();
        } catch (error) {
        }
    }


    async function confirmPresenca (alunoId: number){

        const presentes = presencas.filter(presenca => presenca.presente !== null)
        let presenteId = presentes.filter(presente => presente.id === alunoId).map(aluno => aluno.presente)

        let presenca;

        if (presenteId.includes(true)) {
            presenca = false;
        } else if (presenteId.includes(false)){
            presenca = true;
        }

        const aluno ={
            id: alunoId,
            presente: presenca
        }

        try {
            console.log(presentes)
            await api.post(`/chamada`, aluno)
        } catch (error) {
        }
        
    }


    useEffect(() => {
        api.get(`alunos`).then(response => {
            setAlunos(response.data)
        })
        api.get(`chamada`).then(response => {
            setPresencas(response.data)
        })
    }, [])

    return (
       

    <Container>
        <div id="chamada">
            <div id="titleContent">CHAMADA ONLINE:</div><br/>
            <form id="form">
                    {alunos.map((aluno) => (
                    <div id="name">
                        <label id="label">{aluno.id} - {aluno.nome}</label>
                        <input id="check" type="checkbox" onClick={() => confirmPresenca(aluno.id)}/>
                    </div>
                    ))}
                <br/>
            </form>
        </div>
        
        <div id="grade">
            <div id="cadastrar">CADASTRO:
                <input id="nameInput" type="text" name="presente" placeholder="Nome do aluno" onChange={({ target: { value } }) => {setNewNome(value);}}/>
                <input id="enviar" type="submit" value="ENVIAR" onClick={() => cadastrar(newNome)}/>
            </div>
            
            <div id="excluir">EXCLUSÃO:
                <input id="idInput" type="text" placeholder="ID" onChange={({ target: { value } }) => {setNewId(value);}}/>
                <input id="enviar" type="submit" value="ENVIAR" onClick={() => deletar(newId)}/>
            </div>
            
            <div id="editar">EDIÇÃO:
                <input id="idInput" type="text" placeholder="ID" onChange={({ target: { value } }) => {setNewId(value);}}/>
                <input id="nameInput" type="text" placeholder="Nome do aluno" onChange={({ target: { value } }) => {setNewNome(value);}}/>
                <input id="enviar" type="submit" value="ENVIAR" onClick={() => editar(newId, newNome)}/>
            </div>
        </div>
    </Container>

    )
};

export default Chamada;