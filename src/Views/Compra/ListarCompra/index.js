import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";

export const ListarCompras = () => {

    const [data, setData] = useState([]);

    // abaixo mostra um erro, quando não ha conexão com a API
    const [status, setStatus] = useState({
        type: '',
        mesage: ''
    });

    const getCompras = async () => {
        await axios.get(api + "/listacompras")
            .then((response) => {
                console.log(response.data.compras);
                setData(response.data.compras);
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
        getCompras();
    }, []);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Movimentação de Compras</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="/cadastrarcompra"
                            className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>

                    <div className="m-auto p-2">
                        <Link to="/listar-compras"
                            className="btn btn-outline-primary btn-sm">Alterar</Link>
                    </div>

                    <div className="m-auto p-2">
                        <Link to="/listar-compras"
                            className="btn btn-outline-primary btn-sm">Excluir</Link>
                    </div>

                    {status.type == 'error' ? <Alert color="danger"> {status.message}</Alert> : ""}
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Data</th>
                            <th>Codigo do Cliente</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.data}</td>
                                <td>{item.clienteId}</td>
                                <td className="text-center/">
                                    <Link to={"/listar-compra/" + item.id}
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