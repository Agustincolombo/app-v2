const mutations = {
    setBandas(state, bandas) {
        const resultadoBandas = []
        for (const key in bandas) {
            resultadoBandas.push(bandas[key]);
        }
        state.bandasAgregadas = resultadoBandas
    }
}
export default mutations;