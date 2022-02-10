import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";

export const ListarPedidos = () => {

    const [data, setData] = useState([]);

    // abaixo mostra um erro, quando não ha conexão com a API 
    const [status, setStatus] = useState({
        type: '',
        mesage: ''
    });

    const getPedidos = async () => {
        await axios.get(api + "/listapedidos")
            .then((response) => {
                console.log(response.data.pedidos);
                setData(response.data.pedidos);
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
        getPedidos();
    }, []);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Movimentação de Pedidos</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="/cadastrarpedido"
                            className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>

                    <div className="m-auto p-2">
                        <Link to="/listar-Pedidos"
                            className="btn btn-outline-primary btn-sm">Alterar</Link>
                    </div>

                    <div className="m-auto p-2">
                        <Link to="/listar-Pedidos"
                            className="btn btn-outline-primary btn-sm">Excluir</Link>
                    </div>


                    {status.type == 'error' ? <Alert color="danger"> {status.message}</Alert> : ""}
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Data</th>
                            <th>Cod Cliente</th>
                            <th>Cod Produto</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.data}</td>
                                <td>{item.ClienteId}</td>
                                <td>{item.ProdutoId}</td>
                                <td className="text-center/">
                                    <Link to={"/listar-pedido/" + item.id}
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