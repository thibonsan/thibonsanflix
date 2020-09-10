import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import useForm from "../../../hooks/useForm";
import Button from "../../../components/Button";
import videosRepository from "../../../repositories/videos";
import categoriasRepository from "../../../repositories/categorias";

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoriasTitulos = categorias.map(({ titulo }) => titulo);

  const { handleChange, values } = useForm({
    titulo: "Vídeo padrão",
    url: "https://www.youtube.com/watch?v=wYq9JiH-SJ4",
    categoria: "Front End",
  });

  useEffect(() => {
    categoriasRepository.getAll().then((c) => {
      setCategorias(c);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        const categoriaEscolhida = categorias.find((c) => c.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => history.push("/"));
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoriasTitulos}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
