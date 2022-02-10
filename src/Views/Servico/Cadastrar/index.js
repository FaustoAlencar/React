import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, FormGroup, Form, Label, Input, Button } from "reactstrap";
import {api} from "../../../config";

export const CadastrarServico = () => {

    const [servico, setServico] = useState({
        nome: '',
        descricao: '',
    });

    const valorInput = e => setServico({
        ...servico, [e.target.name]: e.target.value
    });

    const cadservico = async e => {
        e.preventDefault();
        console.log(servico);

        const headers = {
            'Content-Type' : 'application/json  '
        }

        await axios.post(api+"/servicos", servico, {headers})
        .then((response)=>{
            console.log(response)

        })
        .catch(() => {
            console.log("Erro: Sem Conexão com a API!")
        }) 
    }

    return (
        <Container>
            <div className="d-flex">
                <div className="m-auto p-2">
                    <h1>Cadastrar Novo Servico</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-servico"
                        className="btn btn-outline-success btn-sm">Servicos</Link>
                </div>
            </div>

            <hr className="m-1" />
            <Form className="p-2" onSubmit={cadservico}>
                <FormGroup className="p-2">
                    <Label>Nome</Label>
                    <Input type="text" name="nome" placeholder="Nome do Serviço"
                        onChange={valorInput} />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>Descrição</Label>
                    <Input type="text" name="descricao" placeholder="Descrição do Serviço"
                        onChange={valorInput} />
                </FormGroup>
                <Button type="Submit" outline color="success">Inserir</Button>

            </Form>
        </Container>
    );
};  