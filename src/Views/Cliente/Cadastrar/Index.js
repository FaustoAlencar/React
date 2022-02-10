import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, FormGroup, Form, Label, Input, Button } from "reactstrap";
import { api } from "../../../config";

export const CadastrarCliente = () => {

    const [cliente, setCliente] = useState({
        Nome: '',
        endereco: '',
        cidade: '',
        uf: '',
        nascimento: '',
        clienteDesde: '',
    });

    const valorInput = e => setCliente({
        ...cliente, [e.target.name]: e.target.value
    });

    const cadcliente = async e => {
        e.preventDefault();
        console.log(cliente);

        const headers = {
            'Content-Type': 'application/json  '
        }

        await axios.post(api + "/clientes", cliente, { headers })
            .then((response) => {
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
                    <h1>Cadastrar Novo Cliente</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-cliente"
                        className="btn btn-outline-success btn-sm">Clientes</Link>
                </div>
            </div>

            <hr className="m-1" />
            <Form className="p-2" onSubmit={cadcliente}>
                <FormGroup className="p-2">
                    <Label>Nome</Label>
                    <Input type="text" name="nome" placeholder="Nome do Cliente"
                        onChange={valorInput} />
             </FormGroup>

                <FormGroup className="p-2">
                    <Label>Endereco</Label>
                    <Input type="text" name="endereco" placeholder="Endereço"
                        onChange={valorInput} />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>Cidade</Label>
                    <Input type="text" name="cidade" placeholder="Nome da Cidade"
                        onChange={valorInput} />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>Estado</Label>
                    <Input type="text" name="uf" placeholder="Estado"
                        onChange={valorInput} />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>Nascimento</Label>
                    <Input type="text" name="nascimento" placeholder="Data de Nascimento"
                        onChange={valorInput} />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>Cliente Desde</Label>
                    <Input type="text" name="clienteDesde" placeholder="Cliente Desde"
                        onChange={valorInput} />
                </FormGroup>

                <Button type="Submit" outline color="success">Inserir</Button>

            </Form>
        </Container>
    );
};  