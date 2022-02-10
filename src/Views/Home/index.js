import { Container } from "reactstrap";

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">

                    <div className="p-2">
                        <a href="listar-clientes"
                            className="btn btn-success btn-sm">Clientes</a>
                    </div>

                    <div className="p-2">
                        <a href="/listar-pedidos"
                            className="btn btn-success btn-sm">Pedidos</a>
                    </div>

                    <div className="p-2">
                        <a href="/listar-servicos"
                            className="btn btn-success btn-sm">Serviços</a>
                    </div>

                    <div className="p-2">
                        <a href="/listar-compras"
                            className="btn btn-success btn-sm">Compras</a>
                    </div>

                    <div className="p-2">
                        <a href="/listar-produtos"
                            className="btn btn-success btn-sm">Produtos</a>
                    </div>


                </div>
            </Container>
        </div>
    );
};