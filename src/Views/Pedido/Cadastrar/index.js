import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, FormGroup, Form, Label, Input, Button } from "reactstrap";
import { api } from "../../../config";

export const CadastrarPedido = () => {

    const [pedido, setPedido] = useState({
        data: '',
        ClienteId: '',
        ProdutoId: '',
    });

    const valorInput = e => setPedido({
        ...pedido, [e.target.name]: e.target.value
    });

    const cadpedido = async e => {
        e.preventDefault();
        console.log(pedido);

        const headers = {
            'Content-Type': 'application/json  '
        }

        await axios.post(api + "/pedidos", pedido, { headers })
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
                    <h1>Cadastrar Novo Pedido</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-pedido"
                        className="btn btn-outline-success btn-sm">Pedido</Link>
                </div>
            </div>

            <hr className="m-1" />
            <Form className="p-2" onSubmit={cadpedido}>
                <FormGroup className="p-2">
                    <Label>Data</Label>
                    <Input type="text" name="data" placeholder="Data do Pedido"
                        onChange={valorInput} />
             </FormGroup>

                <FormGroup className="p-2">
                    <Label>Codigo do Cliente</Label>
                    <Input type="text" name="ClienteId" placeholder="Código do Cliente"
                        onChange={valorInput} />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>Código do Produto</Label>
                    <Input type="text" name="ProdutoId" placeholder="Código do Produto"
                        onChange={valorInput} />
                </FormGroup>
                
                <Button type="Submit" outline color="success">Inserir</Button>

            </Form>
        </Container>
    );
};  