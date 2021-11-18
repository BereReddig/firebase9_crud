import React, { useState } from "react";
import { Stack, Container, Form, Button } from "react-bootstrap";
import firebaseApp from "../credenciales";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signInWithRedirect,
    GoogleAuthProvider
} from 'firebase/auth';

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const Logueo = () => {
    const [estaRegistrandose, setEstaRegistrandose] = useState(false);

    async function submitHandler (event) {
        event.preventDefault();

        const email = event.target.formBasicEmail.value;
        const password = event.target.formBasicPassword.value;
        //console.log(email, password);

        if(estaRegistrandose) {
            //si se esta registrando
            const user = await createUserWithEmailAndPassword(auth, email, password);
            // console.log(user);
        } else {
            //si esta iniciando sesion
            signInWithEmailAndPassword(auth, email, password);
        }
    }

    return (
        <Container>
            <Stack gap={3}>
                <h1>{estaRegistrandose ? 'Regístrate' : 'Inicia sesión'}</h1>

                <Form onSubmit={submitHandler}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        {estaRegistrandose ? 'Regístrate' : 'Inicia sesión'}
                    </Button>

                </Form>

                <Button 
                    style={{ width: '300px'}}
                    variant="primary" 
                    type="submit"
                    onClick={()=> signInWithRedirect(auth, googleProvider)}
                >
                    Acceder con Google
                </Button>

                <Button 
                    style={{ width: '300px'}}
                    variant="primary" 
                    onClick= {() => setEstaRegistrandose(!estaRegistrandose)}
                >
                    { estaRegistrandose 
                        ? '¿Ya tienes cuenta? Inicia sesión' 
                        : '¿No tienes cuenta? Regístrate'
                    }
                </Button>

            </Stack>
        </Container>
    );
}

export default Logueo;