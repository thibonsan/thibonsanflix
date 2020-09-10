import React from "react";
import { Link, useHistory } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import useForm from "../../../hooks/useForm";
import categoriasRepository from "../../../repositories/categorias";

function CadastroCategoria() {
  const history = useHistory();

  const valoresIniciais = {
    titulo: "",
    // descricao: "",
    cor: "",
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  // const [categorias, setCategorias] = useState([]);

  // useEffect(() => {
  //   const URL = window.location.hostname.includes("localhost")
  //     ? "http://localhost:8080/categorias"
  //     : "https://thibonsanflix.herokuapp.com/categorias";

  //   fetch(URL).then(async (resposta) => {
  //     const r = await resposta.json();
  //     setCategorias([...r]);
  //   });
  // }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        categoriasRepository.create(values)
          .then(() => history.push("/"));

        clearForm();

        // setCategorias([
        //   ...categorias,
        //   values,
        // ]);
      }}
      >

        <FormField
          label="Título da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        {/* <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        /> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {/* {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul> */}

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
