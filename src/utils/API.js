import axios from "axios";

export default {
    
getData: function () {
    return axios.get(`https://fast-everglades-97829.herokuapp.com/homes`)
}

};


