import config from "../config";

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(objetoDoVideo),
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
  create,
};
