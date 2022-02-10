import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, FormGroup, Form, Label, Input, Button } from "reactstrap";
import {api} from "../../../config";

export const CadastrarProduto = () => {

    const [produto, setProduto] = useState({
        nome: '',
        descricao: '',
    });

    const valorInput = e => setProduto({
        ...produto, [e.target.name]: e.target.value
    });

    const cadproduto = async e => {
        e.preventDefault();
        console.log(produto);

        const headers = {
            'Content-Type' : 'application/json  '
        }

        await axios.post(api+"/produtos", produto, {headers})
        .then((response)=>{
            console.log(response)

        })
        .catch(() => {
            console.log("Erro: Sem Conexão com a API de Produtos!")
        }) 
    }

    return (
        <Container>
            <div className="d-flex">
                <div className="m-auto p-2">
                    <h1>Cadastrar Novo Produto</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-produto"
                        className="btn btn-outline-success btn-sm">Produtos</Link>
                </div>
            </div>

            <hr className="m-1" />
            <Form className="p-2" onSubmit={cadproduto}>
                <FormGroup className="p-2">
                    <Label>Nome</Label>
                    <Input type="text" name="nome" placeholder="Nome do Produto"
                        onChange={valorInput} />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>Descrição</Label>
                    <Input type="text" name="descricao" placeholder="Descrição do Produto"
                        onChange={valorInput} />
                </FormGroup>
                <Button type="Submit" outline color="success">Inserir</Button>
            </Form>
        </Container>
    );
};  