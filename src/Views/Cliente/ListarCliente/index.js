import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";

export const ListarClientes = () => {

    const [data, setData] = useState([]);

    // abaixo mostra um erro, quando não ha conexão com a API
    const [status, setStatus] = useState({
        type: '',
        mesage: ''
    });

    const getClientes = async () => {
        await axios.get(api + "/listaclientes")
            .then((response) => {
                console.log(response.data.clientes);
                setData(response.data.clientes);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    mensage: 'Erro: Sem Conexão Com a API!!'
                })
                //console.log("Erro: Sem Conexão Com a API!!")
            })
    }
    useEffect(() => {
        getClientes();
    }, []);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Movimentação de Clientes</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="/cadastrarcliente"
                            className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>

                    <div className="m-auto p-2">
                        <Link to="/listar-clientes"
                            className="btn btn-outline-primary btn-sm">Alterar</Link>
                    </div>

                    <div className="m-auto p-2">
                        <Link to="/listar-clientes"
                            className="btn btn-outline-primary btn-sm">Excluir</Link>
                    </div>

                    {status.type == 'error' ? <Alert color="danger"> {status.message}</Alert> : ""}
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>Ação</th>
                            <th>Nascimento</th>
                            <th>Cliente Desde</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.endereco}</td>
                                <td>{item.cidade}</td>
                                <td>{item.uf}</td>
                                <td>{item.nascimento}</td>
                                <td>{item.clienteDesde}</td>
                                <td className="text-center/">
                                    <Link to={"/listar-cliente/" + item.id}
                                        className="btn btn-outline-primary btn-sm">
                                        Consultar
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};