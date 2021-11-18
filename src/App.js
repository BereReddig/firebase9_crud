import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Logueo from "./components/Logueo";

import firebaseApp from "./credenciales";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(firebaseApp);

function App() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      //codigo en caso de que haya sesion iniciada
      setUsuarioGlobal(usuarioFirebase);
    } else {
      //codigo en caso de que no haya sesion iniciada
      setUsuarioGlobal(null)
    }
  })

  return (
    <div className="App">
      { usuarioGlobal ? <Home/> : <Logueo/> }
    </div>
  );
}

export default App;
