import axios from "axios";

const OUVRIER_API_URL = "http://localhost:5000/api/ouvrier";

class OuvrierService{
    addOuvrier(ouvrier){
        return axios.post(OUVRIER_API_URL + "/addouvrier", ouvrier);
    }

    getOuvrier(idSec){
        return axios.get(OUVRIER_API_URL + "/liste/"+ idSec);
    }

    updateOuvrier(ouvrier, ouvrierId){
        return axios.put(OUVRIER_API_URL + "/modifier/"+ ouvrierId, ouvrier);
    }

    deleteOuvrier(ouvrierId){
        return axios.delete(OUVRIER_API_URL + "/supprimer/" + ouvrierId);
    }
}

export default new OuvrierService();