import { useState } from "react"
import './Form.css'

function Form() {
    const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    cep: "",
    endereco1: "",
    endereco2: "",
    dataNascimento: "",
    cpf:"",
    rendaMensal: ""
    })

    const [count, setCount] = useState(1)
  
    const updateForm = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      })
    }
    return (
      <div className="App">
        <h2>Cadastro</h2>
        <h4>Parte {count} de 3</h4>
        <form
          onSubmit={() =>
            alert(
              `Salvo -- Nome: ${form.nome} Sobrenome: ${form.sobrenome} Telefone: ${form.telefone} Email: ${form.email} CEP: ${form.cep} Endereço 1: ${form.endereco1} Endereço 2: ${form.endereco2} Data de Nascimento: ${form.dataNascimento} CPF: ${form.cpf} Renda mensal: ${form.rendaMensal}`
            )
          }
        >
          {count === 1 ? (
            <div className="container">
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                onChange={updateForm}
                value={form.nome}
              />
              <label>Sobrenome</label>
              <input
                type="text"
                name="sobrenome"
                onChange={updateForm}
                value={form.sobrenome}
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={updateForm}
                value={form.email}
              />
              <label>Telefone</label>
              <input
                type="tel"
                name="telefone"
                onChange={updateForm}
                value={form.telefone}
              />
            </div>
          ) : null}
          {count === 2 ? (
            <div className="container">
              <label>CEP</label>
              <input
                type="text"
                name="cep"
                onChange={updateForm}
                value={form.cep}
              />
              <label>Endereço 1</label>
              <input
                type="text"
                name="endereco1"
                onChange={updateForm}
                value={form.endereco1}
              />
              <label>Endereco 2</label>
              <input
                type="text"
                name="endereco2"
                onChange={updateForm}
                value={form.endereco2}
              />
            </div>
          ) : null}
          {count === 3 ? (
            <div className="container">
              <label>Data de Nascimento</label>
              <input
                type="date"
                name="dataNascimento"
                onChange={updateForm}
                value={form.dataNascimento}
              />
              <label>CPF</label>
              <input
                type="text"
                name="cpf"
                onChange={updateForm}
                value={form.cpf}
              />
              <label>Renda Mensal</label>
              <input
                placeholder="R$000.00"
                type="text"
                name="rendaMensal"
                onChange={updateForm}
                value={form.rendaMensal}
              />
            </div>
          ) : null}
        {count === 3 ? (
          <button className="btn btn-primary" type="submit">
            Salvar
          </button>
        ) : null}
      </form>
      <button
        className="btn btn-dark"
        type="submit"
        onClick={() => setCount(count - 1)}
        disabled={count < 2}
      >
        Voltar
      </button>
      <button
        className="btn btn-light"
        type="submit"
        onClick={() => setCount(count + 1)}
        disabled={count > 2}
      >
        Próximo
      </button>
    </div>
  )
  }
  
  export default Form