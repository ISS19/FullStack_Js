import axios from "axios";

const USER_API_URL = "http://localhost:5000/api/statistique";

class StatistiqueService{
    statistiqueJ(idSec){
        return axios.get(USER_API_URL + "/statistiqueJ/" + idSec);
    }

    statistiqueF(idSec){
        return axios.get(USER_API_URL + "/statistiqueF/" + idSec);
    }

    statistiqueM(idSec){
        return axios.get(USER_API_URL + "/statistiqueM/" + idSec);
    }

    statistiqueA(idSec){
        return axios.get(USER_API_URL + "/statistiqueA/" + idSec);
    }

    statistiqueMai(idSec){
        return axios.get(USER_API_URL + "/statistiqueMai/" + idSec);
    }

    statistiqueJn(idSec){
        return axios.get(USER_API_URL + "/statistiqueJn/" + idSec);
    }

    statistiqueJll(idSec){
        return axios.get(USER_API_URL + "/statistiqueJll/" + idSec);
    }

    statistiqueAu(idSec){
        return axios.get(USER_API_URL + "/statistiqueAu/" + idSec);
    }

    statistiqueS(idSec){
        return axios.get(USER_API_URL + "/statistiqueS/" + idSec);
    }

    statistiqueO(idSec){
        return axios.get(USER_API_URL + "/statistiqueO/" + idSec);
    }

    statistiqueN(idSec){
        return axios.get(USER_API_URL + "/statistiqueN/" + idSec);
    }

    statistiqueD(idSec){
        return axios.get(USER_API_URL + "/statistiqueD/" + idSec);
    }

    statMais(){
        return axios.get(USER_API_URL + "/statMais");
    }

    statManioc(){
        return axios.get(USER_API_URL + "/statManioc");
    }

    statArachide(){
        return axios.get(USER_API_URL + "/statArachide");
    }

    statHaricot(){
        return axios.get(USER_API_URL + "/statHaricot");
    }

    statSec(idSec){
        return axios.get(USER_API_URL + "/statSec/" + idSec);
    }
}

export default new StatistiqueService();