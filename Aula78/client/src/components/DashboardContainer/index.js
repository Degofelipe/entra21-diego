import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "../Prova/styles.css"

export function DashboardContainer({title, children}) {
    const { signOut } = useAuth();
    const history = useHistory();

    function handleClick() {
        signOut();
        history.push("/");
    }

    return (
      <>
        <h1 className="titulo">{title}</h1>
        <button class="signOut" onClick={handleClick}>SignOut</button>
        {children}
      </>
    )
}