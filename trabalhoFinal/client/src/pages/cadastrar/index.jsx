import React, {useState} from 'react'
import api from '../../services/api'
 

export default function UsuarioCadastrar() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
}

function handleSubmit() {
  const data = {name, email,phone, password}

  const response = api.post('./api/user')
}


return(
    <div>
        <main>
            <div>
                <container>
                    <h2>Cadastro de usuário</h2>
                    <label htmlFor="text">Nome:</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome completo" />
                    <label htmlFor="text">Email:</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite o email" />
                    <label htmlFor="text">Telefone:</label>
                    <input type="tel" value={phone} onChange={e => setphone(e.target.value)} placeholder="Telefone" />
                    <label htmlFor="text">Senha:</label>
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite a senha" />
                    <div>
                      <button onClick={handleSubmit}>Salvar</button>
                    </div>
                </container>
            </div>
        </main>

    </div>
)