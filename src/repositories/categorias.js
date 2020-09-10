import config from "../config";

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async (resposta) => {
    if (resposta.ok) {
      const r = await resposta.json();
      return r;
    }

    throw new Error("Não foi possível pegar os dados :(");
  });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (resposta) => {
    if (resposta.ok) {
      const r = await resposta.json();
      return r;
    }

    throw new Error("Não foi possível pegar os dados :(");
  });
}

function create(objetoDaCategoria) {
  return fetch(`${URL_CATEGORIES}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(objetoDaCategoria),
  })
    .then(async (resposta) => {
      if (resposta.ok) {
        const r = await resposta.json();
        return r;
      }

      throw new Error("Não foi possível cadastrar os dados :(");
    });
}

export default {
  getAllWithVideos,
  getAll,
  create,
};
