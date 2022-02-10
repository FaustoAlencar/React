import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, FormGroup, Form, Label, Input, Button } from "reactstrap";
import {api} from "../../../config";

export const CadastrarCompra = () => {

    const [compra, setCompra] = useState({
        data: '',
        clienteId: '',
    });

    const valorInput = e => setCompra({
        ...compra, [e.target.name]: e.target.value
    });

    const cadcompra = async e => {
        e.preventDefault();
        console.log(compra);

        const headers = {
            'Content-Type' : 'application/json  '
        }

        await axios.post(api+"/compras", compra, {headers})
        .then((response)=>{
            console.log(response)

        })
        .catch(() => {
            console.log("Erro: Sem Conexão com a API de Compras!")
        }) 
    }

    return (
        <Container>
            <div className="d-flex">
                <div className="m-auto p-2">
                    <h1>Cadastrar Nova Compra</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-compra"
                        className="btn btn-outline-success btn-sm">Compras</Link>
                </div>
            </div>

            <hr className="m-1" />
            <Form className="p-2" onSubmit={cadcompra}>
                <FormGroup className="p-2">
                    <Label>Data</Label>
                    <Input type="text" name="data" placeholder="Data da Compra" 
                        onChange={valorInput} />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>Cod do Cliente</Label>
                    <Input type="text" name="clienteId" placeholder="Código do Cliente"
                        onChange={valorInput} />
                </FormGroup>
                <Button type="Submit" outline color="success">Inserir</Button>
            </Form>
        </Container>
    );
};  