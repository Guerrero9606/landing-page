import styles from '../styles/styles.css';
import personal from '../../Image/personal.png';
import Button from 'react-bootstrap/Button'

function Body() {
    return (
        <>
            <div className="body-container">
                <div className="body-aside">
                    <img src={personal} alt="Imagen Personal" />
                </div>
                <div className="body-section">
                    <h3>FUNDACION EDUCARIBE Y LA ONG CUCAF EN CONVENIO CON ACADEMIAS DE VIGILANCIA Y SEGURIDAD PRIVADA ENTREGARÁN BECAS PARA CURSOS DE VIGILANCIA</h3>
                    <ul className="body-list">
                        <li>REQUISITOS</li>
                        <li>Fotocopia del documento de identidad</li>
                        <li>Recibo de servicio público</li>
                        <li>Diligenciar el formulario</li>
                    </ul>
                    <Button variant="success" size="lg">IR AL FORMULARIO</Button>{' '}
                    <p>¡IMPORTANTE! Quienes resulten seleccionados para ser beneficiarios de estas becas, solo tendrán que cancelar 128.000 pesos por concepto de prácticas de tiro y/o polígono.</p>

                    <p>LA ACADEMIA DE CAPACITACIÓN Y ENTRENAMIENTO EN LA SEGURIDAD PRIVADA DEL CARIBE LTDA., ofrece sus servicios de capacitación y entrenamiento para los ciclos de Vigilantes, Supervisores, Medios Tecnológicos y Escolta, Reentrenamiento en todos los ciclos; fundamentando su metodología de enseñanza en el marco legal aplicable vigente.
                        Contamos con personal altamente capacitado y cualificado, tecnología de punta, precios accesibles, horarios de clase flexibles y nuestros programas se encuentran aprobados por la Superintendencia de Vigilancia y Seguridad Privada mediante la Resolución N° 20194440015447 del 19 de febrero 2019.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Body