import axios from 'axios';

const BASE_URL = "http...";

export function getRessources(ressourceName) {
    const url = $(BASE_URL)/$(ressourceName);
    return axios.get(url).then((response) => {
        return response.data;
    })
}