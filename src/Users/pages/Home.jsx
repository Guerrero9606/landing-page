import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect, useRef} from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import styles from '../styles/styles.css';
import { api } from '../../utils/api';

function Home () {

    const [ list, setList ] = useState({
        Nombres: '',
        Apellidos: '',
        Cedula: '',
        Correo: '',
        Direccion: '',
        Ciudad: '',
        Celular: '',
        WhatsApp: '',
    });
    
    //escucha el cambio de los inputs
    const handleInputtAdd = (e) => {
        if (e.target.value === '' || e.target.value === 0) {
            console.log('No se ingreso un nuevo valor');
        } else {
            //cambiamos el estado
            setList({
                ...list,
                [ e.target.name ]: e.target.value
            }
            );
        }
    };

    const Guardar = () => {
        GuardarRegistro(list);
    };

    const GuardarRegistro = async (list) => {
        await api.Users.create(list);
    };

    return (
        <>
            <Form className="form">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNombres">
                    <Form.Label>Nombres: </Form.Label>
                    <Form.Control placeholder="Nombres" type="text"
                        onChange={ handleInputtAdd }
                        name="Nombres"
                    />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridApellidos">
                    <Form.Label>Apellidos: </Form.Label>
                    <Form.Control placeholder="Apellidos" 
                        onChange={ handleInputtAdd }
                        name="Apellidos"
                    />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridDocumento">
                    <Form.Label>Numero de Cedula: </Form.Label>
                    <Form.Control placeholder="Cedula sin puntos" type="number"
                        onChange={ handleInputtAdd }
                        name="Cedula"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridCorreo">
                    <Form.Label>Correo electronico: </Form.Label>
                    <Form.Control placeholder="correo@gmail.com" type="email"
                        onChange={ handleInputtAdd }
                        name="Correo"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Direccion: </Form.Label>
                    <Form.Control placeholder="Calle 50 #24-23" 
                        onChange={ handleInputtAdd }
                        name="Direccion"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridCiudad">
                    <Form.Label>Ciudad: </Form.Label>
                    <Form.Control placeholder="Bogota" type="text"
                        onChange={ handleInputtAdd }
                        name="Ciudad"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridCelular">
                    <Form.Label>Celular: </Form.Label>
                    <Form.Control placeholder="3505550000" 
                        onChange={ handleInputtAdd }
                        name="Celular"
                    />
                </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="¿Numero celular tiene WhatsApp?" 
                        onChange={ handleInputtAdd }
                        name="WhatsApp"
                    />
                </Form.Group>

                <Button variant="success" onClick={ Guardar }>Success</Button>{' '}

                </Form>
        </>
    );
}

export default Home;