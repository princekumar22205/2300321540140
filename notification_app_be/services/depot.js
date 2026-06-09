const axios = require("axios");

const getDepots = async(token)=>{
   const response = await axios.get(
      DEPOT_URL,
      {
         headers:{
            Authorization:`Bearer ${token}`
         }
      }
   );

   return response.data.depots;
}