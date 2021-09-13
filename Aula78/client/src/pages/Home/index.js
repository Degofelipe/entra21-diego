import { Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./styles.css"


export function Home(props) {
  const { accessToken } = useAuth();
  const history = useHistory();

  if (accessToken) {
    return <Redirect to="/dashboard" />
  }

  return (
    <>

      <div class="container">
        <div class="inner">
          <h1>Home</h1>
          <p>{props.text}</p>
          <button onClick={() => history.push("/login")}>Logar</button>
        </div>
      </div>

    </>
  );
}