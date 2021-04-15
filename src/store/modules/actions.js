import axios from "axios";
const actions = {
    async sendBanda(context, payload) {
        const { nombre, genero, integrantes } = payload;
        const response = await axios.post(
            "https://proyect-vuejs-ac-default-rtdb.firebaseio.com/bandas.json", { nombre, genero, integrantes }
        );
        return response;
    },
    async loadBandas(context) {
        const response = await axios.get(
            "https://proyect-vuejs-ac-default-rtdb.firebaseio.com/bandas.json"
        );
        context.commit("setBandas", response.data)
    },
    async deleteBandas() {
        const response = await axios.delete(
            "https://proyect-vuejs-ac-default-rtdb.firebaseio.com/bandas.json"
        );
        return response;
    },
}
export default actions;