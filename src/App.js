import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import AppRouter from "./router/AppRouter";
import AuthContext from "./context/AuthContext";


function App() {
  return (
    <div className="App">
      <AuthContext>
        <AppRouter />
      </AuthContext>

      

    </div>
  );
}

export default App;
