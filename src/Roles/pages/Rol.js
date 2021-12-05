import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Edit from "../components/Edit";
import Remove from "../components/Remove";
import { api } from '../../utils/api.js'
import {ExportToExcel} from '../../ExportToExcel';

const Titulos = [ 'Nombres', 'Apellidos', 'Cedula', 'Correo', 'Direccion', 'Ciudad', 'Celular'];

function Rol() {

  //Listado de usuarios
  const [ users, setUsuarios ] = useState([]);

  const [ consulta, setConsulta ] = useState(true);

  const fileName = "lista-usuarios";
  
  //cada vez que recargemos el use entrara en funcion
  useEffect(() => {
    //con esta funcion pedimos todos los datos a la api
    const fetchData = async () => {
      const respUsers = await api.Users.list();
      setUsuarios(respUsers);
      setConsulta(false);
    };

    if (consulta) {
      fetchData();
    }

  }, [ consulta ]);

  if (!users.length) {
    return (
        <>
          <h1 class="title">No se registran Usuarios!</h1>
        </>
    );
  } else {
      return (
          <>
            <Container className="secondary">
              <Col>
                <Button variant="secondary" className="border border-5 border-white" href="/">Volver</Button>{ ' ' }
                <ExportToExcel apiData={users} fileName={fileName} />
                <Tab.Container defaultActiveKey="first" className="border border-5 Table">
                    <Row className="border border-5 border-white">
                        <Col md="auto">
                            <Table striped bordered hover size="sm" responsive="xl">
                                <thead>
                                    <tr>
                                        { Titulos.map((value) => (
                                            <th>{ value }</th>
                                        )) }
                                        <th colSpan="2">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody >
                                { users.map((user) => (
                                    <tr>
                                        <th>{ user.Nombres }</th>
                                        <th>{ user.Apellidos }</th>
                                        <th>{ user.Cedula }</th>
                                        <th>{ user.Correo }</th>
                                        <th>{ user.Direccion }</th>
                                        <th>{ user.Ciudad }</th>
                                        <th>{ user.Celular }</th>
                                        {/*<td><Edit user={ user } setConsulta={ setConsulta }  /></td>*/}
                                        <td><Remove user={ user } setConsulta={ setConsulta } /></td>
                                    </tr>
                                )) }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Tab.Container>
              </Col>
            </Container>
          </>
      );
  }

}

export default Rol;
