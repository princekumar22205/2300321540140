const axios = require("axios");

const getDepots = async(token)=>{

    const response = await axios.get(
        "http://4.224.186.213/evaluation-service/depots",
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
    );

    return response.data.depots;
};

module.exports = getDepots;