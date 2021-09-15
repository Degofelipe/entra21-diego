import { Redirect } from "react-router-dom";
import { Login } from "../../components/Login";
import authServices from "../../services/authServices";

export function Home() {
  const accessToken = authServices.getAccessToken();  

  if (accessToken) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div className="container-home">        
        <h1 className="home-title">trabalho final</h1>
      <Login />                                   
    </div>
  );  
}
