import { useEffect, useState } from "react";
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Input, Label, ModalFooter, Button } from "reactstrap";


const modeloOwner = {
    idOwner: 0,
    name: "",
    addres: "",
    photo: "",
    birthday: ""
}

const ModalOwner = ({ mostrarModal, setMostrarModal, guardarOwner, editar, setEditar, editarOwner }) => {

    const [owner, setOwner] = useState(modeloOwner);
    
    const actualizarDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setOwner(
            {
                ...owner,
                [e.target.idOwner] : e.target.value
            }
           
        )
    }

    const enviarDatos = () => {
        if (owner.idOwner == 0) {
            guardarOwner(owner)
        } else {
            editarOwner(owner)
        }

        setOwner(modeloOwner)
    }

    useEffect(() => {
        if (editar != null) {
            setOwner(editar)
        } else {
            setOwner(modeloOwner)
        }
    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }

    return (

        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {owner.idOwner == 0 ? "Nuevo Owner" : "Editar Owner"}
                Nuevo Owner
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Id Owner</Label>
                        <Input type="number" name="idOwner" onChange={(e) => actualizarDato(e)} value={owner.IdOwner}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input type="text" name="name" onChange={(e) => actualizarDato(e)} value={owner.Name}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Direccion</Label>
                        <Input type="text" name="addres" onChange={(e) => actualizarDato(e)} value={owner.Addres}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Foto</Label>
                        <Input type="file" name="photo" onChange={(e) => actualizarDato(e)} value={owner.Photo}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Birthday</Label>
                        <Input type="date" name="birthday" onChange={(e) => actualizarDato(e)} value={owner.Birthday}/>
                    </FormGroup>
                </Form>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalOwner;