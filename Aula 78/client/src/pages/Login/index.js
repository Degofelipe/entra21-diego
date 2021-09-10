import "./styles.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Loading } from "../Loading";

export function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setIsLoading(true);
            await signIn(email, password);
            history.replace("/dashboard");
        } catch (err) {
            setIsLoading(false);
            setError(err.message);
        }

    }

    return (
        <>

            { isLoading && <Loading />}
            <div class="container">
                <div class="inner">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        {error && <p className="error">{error}</p>}
                        <input className="deCima" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail"/>
                        <input className="debaixo"type="password" value={password} onChange={e => setPassword(e.target.value)}  placeholder="Senha"/>
                        <button>Ir para o dashboard</button>
                    </form>
                </div>
            </div>
        </>
    );
}