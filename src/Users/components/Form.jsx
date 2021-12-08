import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect, useRef} from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import styles from '../styles/styles.css';
import { api } from '../../utils/api';
import { useNavigate } from "react-router-dom";
import logo from '../../Image/logo.png'
import Notification from '../components/Notification';

function Form () {

    const navigate = useNavigate();
    function reload() {
        navigate(-1);
    }
    

    const [notify, setNotify] = useState(false);
    const [notifyError, setNotifyError] = useState(false);
    const [ list, setList ] = useState({
        Nombres: '',
        Apellidos: '',
        Cedula: '',
        Correo: '',
        Direccion: '',
        Ciudad: '',
        Celular: ''
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
        reload();
    };

    const GuardarRegistro = async (list) => {
        const res = await api.Users.create(list);
        alert('Usuario registrado con exito');
    };

    let component;
    if(notify){
        component = <Notification setNotify={setNotify} setNotifyError={setNotifyError} show={notify} mensaje='Venta registrada correctamente!'/>
    }else if(notifyError){
        component = <Notification setNotify={setNotify} setNotifyError={setNotifyError}  show={notifyError} mensaje='Todos los campos son obligatorios'/>
    }else{
        component = null;
    }

    return (
        <>
        <div className="container-form">
            <div>
                <h1>Programa nacional de becas para cursos de vigilancia</h1>
                <h4>Reactivación económica</h4>
                <h3>¡Inicia el año con una profesión, hágase vigilante y trabaje ya!</h3>
            </div>
            <Form className="form">
                <Row className="mb-3">
                    <Form.FloatingLabel as={Col} controlId="floatingNombres" label="Nombres">
                    <Form.Control placeholder=" Nombres" type="text"
                        onChange={ handleInputtAdd }
                        name="Nombres"
                    />
                    </Form.FloatingLabel>

                    <Form.FloatingLabel as={Col} controlId="floatingApellidos" label="Apellidos">
                    <Form.Control placeholder=" Apellidos" type="text"
                        onChange={ handleInputtAdd }
                        name="Apellidos"
                    />
                    </Form.FloatingLabel>
                </Row>

                <Form.FloatingLabel controlId="floatingCedula" label="Cedula" className="mb-3">
                    <Form.Control placeholder="Cedula sin puntos" type="number"
                        onChange={ handleInputtAdd }
                        name="Cedula"
                    />
                </Form.FloatingLabel>

                <Form.FloatingLabel controlId="floatingEmail" label="Correo Electronico" className="mb-3">
                    <Form.Control placeholder="correo@gmail.com" type="email"
                        onChange={ handleInputtAdd }
                        name="Correo"
                    />
                </Form.FloatingLabel>

                <Form.FloatingLabel controlId="floatingDireccion" label="Direccion" className="mb-3">
                    <Form.Control placeholder="Calle 50 #24-23" 
                        onChange={ handleInputtAdd }
                        name="Direccion"
                    />
                </Form.FloatingLabel>

                <Form.FloatingLabel controlId="floatingCiudad" label="Ciudad" className="mb-3">
                    <Form.Control placeholder="Bogota" type="text"
                        onChange={ handleInputtAdd }
                        name="Ciudad"
                    />
                </Form.FloatingLabel>

                <Form.FloatingLabel controlId="floatingCelular" label="Celular" className="mb-3">
                    <Form.Control placeholder="3505550000" 
                        onChange={ handleInputtAdd }
                        name="Celular"
                    />
                </Form.FloatingLabel>

                <Button variant="success" onClick={ Guardar } href="/">Enviar Formulario</Button>{' '}

                </Form>

                <a href="https://wa.me/573508833740/?text=Hola,%20quiero%20mas%20informacion." target="_blank">
                    <img className="imagen" src={logo}  />
                </a>

            <div className="footer">
                <h3>Plan nacional de reactivación económica, ¡Creo en ti!</h3>
                <p>¡IMPORTANTE! Quienes resulten seleccionados para ser beneficiarios de estas becas, solo tendrán que cancelar 128.000 pesos por concepto de prácticas de tiro y/o polígono.</p>
            </div>
        </div>
        </>
    );
}

export default Form;