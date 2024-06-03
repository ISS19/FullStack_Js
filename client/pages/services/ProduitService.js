import axios from "axios";

const USER_API_URL = "http://localhost:5000/api/produit";

class ProduitService{
    addprod(prod){
        return axios.post(USER_API_URL + "/addprod", prod);
    }

    listeByIdSec(idSec){
        return axios.get(USER_API_URL + "/listeByIdSec/" + idSec);
    }

    statistiqueJ(){
        return axios.get(USER_API_URL + "/statistiqueJ");
    }

    statistiqueF(){
        return axios.get(USER_API_URL + "/statistiqueF");
    }

    statistiqueM(){
        return axios.get(USER_API_URL + "/statistiqueM");
    }

    statistiqueA(){
        return axios.get(USER_API_URL + "/statistiqueA");
    }

    statistiqueMai(){
        return axios.get(USER_API_URL + "/statistiqueMai");
    }

    statistiqueJn(){
        return axios.get(USER_API_URL + "/statistiqueJn");
    }

    statistiqueJll(){
        return axios.get(USER_API_URL + "/statistiqueJll");
    }

    statistiqueAu(){
        return axios.get(USER_API_URL + "/statistiqueAu");
    }

    statistiqueS(){
        return axios.get(USER_API_URL + "/statistiqueS");
    }

    statistiqueO(){
        return axios.get(USER_API_URL + "/statistiqueO");
    }

    statistiqueN(){
        return axios.get(USER_API_URL + "/statistiqueN");
    }

    statistiqueD(){
        return axios.get(USER_API_URL + "/statistiqueD");
    }
}

export default new ProduitService();