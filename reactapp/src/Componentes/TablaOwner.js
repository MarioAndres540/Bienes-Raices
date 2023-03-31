import { Button, Table } from "reactstrap"


const TablaOwner = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarOwner }) => {

    const enviarDatos = (owner) => {
        setEditar(owner)
        setMostrarModal(!mostrarModal)
    }

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Id Owner</th>
                    <th>Nombre</th>
                    <th>Direccion</th>
                    <th>Foto</th>
                    <th>Birthday</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                        <td colSpan="6">Sin registros</td>
                        </tr>
                    ) : (
                            data.map((item) => (

                                <tr key={item.idOwner}>
                                    <td>{item.idOwner}</td>
                                    <td>{item.name}</td>
                                    <td>{item.addres}</td>
                                    <td>{item.photo}</td>
                                    <td>{item.birthday}</td>
                                    <td>
                                        <Button color="primary" size="sm" className="me-2"
                                            onClick={() => enviarDatos(item)}
                                        >Editar</Button>
                                        <Button color="danger" size="sm"
                                            onClick={() => eliminarOwner(item.idOwner)}
                                        >Eliminar</Button>
                                    </td>
                                </tr>
                            ))
                    )
                }
            </tbody>
        </Table>
    );
}

export default TablaOwner;