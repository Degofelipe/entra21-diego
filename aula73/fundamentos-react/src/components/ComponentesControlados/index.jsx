import React from "react"

export class ComponentesControlados extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      email: "",
      cpf: "",
      sexo: "",
      cidade: ""
    }
  }

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    })
    console.log(this.state);
  }; 

  

  render() {
    return (
      <form>
        <label>
          nome:
                    <input type="text"
            name="nome"
            onChange={this.handleChange}
            value={this.state.nome}
          />
        </label><br />
        <label>
          email:
                    <input type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </label><br />
        <label>
          cpf:
                    <input type="text"
            name="cpf"
            onChange={this.handleChange}
            value={this.state.cpf}
          />
        </label><br />
        <label>
          <input type="radio" name="sexo" value="feminino" onClick={this.handleChange}/> Feminino
                </label>
        <label>
          <input type="radio" name="sexo" value="masculino" onClick={this.handleChange}/> Masculino
                </label><br />

        
        <select value={this.state.cidades} name="cidades" onChange={this.handleChange}>
          <option value="Blumenau" >Blumenau</option>
          <option value="Indaial">Indaial</option>
          <option value="Timbó">Timbó</option>
          <option value="Pomerode">Pomerode</option>
        </select>
        <button>Enviar</button>

      </form>
    );
  }
}