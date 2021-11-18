import React from "react";

import { Container, Button } from "react-bootstrap";

import firebaseApp from "../credenciales";
import { getAuth, signOut } from "@firebase/auth";

//Components
import AgregarTarea from "./AgregarTarea";
import ListadoTareas from "./ListadoTareas";

const auth = getAuth(firebaseApp);

const Home = () => {

    const fakeData = [
        { id:'01', descripcion:'tarea falsa 1', url:'https://picsum.photos/420' },
        { id:'02', descripcion:'tarea falsa 2', url:'https://picsum.photos/420' },
        { id:'03', descripcion:'tarea falsa 3', url:'https://picsum.photos/420' }
    ];

    return (
        <Container>
            <h4>Sesion Iniciada</h4>
            <Button onClick={() => signOut(auth)}>Cerrar Sesión</Button>
            <hr />
            <AgregarTarea />
            <ListadoTareas  arrayTareas={fakeData}/>
        </Container>
    );
}

export default Home;