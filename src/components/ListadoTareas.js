import React from "react";

import { Container, Stack, Row, Col, Button } from 'react-bootstrap';

const ListadoTareas = ({ arrayTareas }) => {
    return (
        <Container>
            <Stack>
                {arrayTareas.map((objetoTarea) => {
                    return (
                        <Row>
                            <Col>{objetoTarea.descripcion}</Col>
                            <Col><Button>Ver Archivos</Button></Col>
                            <Col><Button>Eliminar Tarea</Button></Col>
                        </Row>
                    );
                })}
            </Stack>
        </Container>
    );
}

export default ListadoTareas;