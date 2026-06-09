const getVehicles = async(token)=>{
   const response = await axios.get(
      VEHICLE_URL,
      {
         headers:{
            Authorization:`Bearer ${token}`
         }
      }
   );

   return response.data.vehicles;
}