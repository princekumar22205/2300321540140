const getDepots = require("../services/depot.service");
const getVehicles = require("../services/vehicle.service");
const maximizeImpact = require("../services/knapsack.service");

const getSchedule = async(req,res)=>{

    try{

        const token = process.env.TOKEN;

        const depots = await getDepots(token);

        const vehicles = await getVehicles(token);

        const result = depots.map((depot)=>{

            const schedule = maximizeImpact(
                vehicles,
                depot.MechanicHours
            );

            return{
                depotId: depot.ID,
                mechanicHours: depot.MechanicHours,
                totalImpact: schedule.totalImpact,
                selectedTasks: schedule.selectedTasks
            };
        });

        res.status(200).json(result);

    }catch(error){

        res.status(500).json({
            message:error.message
        });
    }
};

module.exports = {
    getSchedule
};