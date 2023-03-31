import { Col, Container, Row, Card, CardHeader, CardBody, Button } from "reactstrap";
import TablaOwner from "./Componentes/TablaOwner";
import { useEffect, useState } from "react";
import ModalOwner from "./Componentes/ModalOwner";

const App = () => {

    const [owners, setOwners] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false);
    const [editar, setEditar] = useState(null)

    const mostrarOwners = async () => {

        const response = await fetch("api/Owner/Lista");
        if (response.ok) {
            const data = await response.json();
            setOwners(data)
        } else {
            console.log("Error en la lista")
        }
    }

    useEffect(() => {
        mostrarOwners()
    },[])

    const guardarOwner = async (owner) => {

        const response = await fetch("api/Owner/Guardar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(owner)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarOwners();
        }
    }

    const editarOwner = async (owner) => {

        const response = await fetch("api/Owner/Editar", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(owner)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarOwners();
        }
    }

    const eliminarOwner = async (idowner) => {

        var respuesta = window.confirm("Desea eliminar el owner?")

        if (!respuesta) {
            return;
        }

        const response = await fetch("api/Owner/Eliminar" + idowner, {
            method: 'DELETE',
        } )

        if (response.ok) {
            mostrarModal();
        }
    }



    return (
        <Container>
            <Row classname="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista de Owner</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success"
                                onClick={() => setMostrarModal(!mostrarModal)}>
                                Nuevo Owner</Button>
                            <hr></hr>
                            <TablaOwner data={owners}
                                setEditar={setEditar}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}

                                eliminarOwner={eliminarOwner}

                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <ModalOwner
                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                guardarOwner={guardarOwner}

                editar={editar}
                setEditar={setEditar}
                editarOwner={editarOwner}
                
            />
        </Container>

    );

}

export default App;