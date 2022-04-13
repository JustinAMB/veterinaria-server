import Veterinarian from '../db/models/veterinarian';


export const getAllVeterinarians = async() => {

    const veterinarians = await Veterinarian.find();
    return veterinarians;

}

export const getOneVeterinarian = async(id) => {

    const veterinarian = await Veterinarian.findById(id);
    return veterinarian;

}