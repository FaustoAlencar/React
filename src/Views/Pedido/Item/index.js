import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";

export const Item = (props) => {
    console.log(props.match.params.id);

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
                <div>
                    <h1>Atualizar Pedidos</h1>
                </div>
                {status.type == 'error' ? <Alert color="danger"> {status.message}</Alert> : ""}

                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Data</th>
                            <th>clienteId</th>
                            <th>produtoId</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.data}</td>
                                <td>{item.clienteId}</td>
                                <td>{item.pedidoid}</td>
                                <td className="text-center/">
                                    <Link to={"/listar-pedidos/" + item.id}
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