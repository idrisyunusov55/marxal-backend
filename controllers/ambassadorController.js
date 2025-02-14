
import AmbassadorItem from "../models/ambassadorSuiteModel.js";
import BigVillaItem from "../models/bigVillaModel.js";



const getAmbassador = async (req, res) => {
    try {
        const Ambassador = await AmbassadorItem.find();
        res.json(Ambassador);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const postAmbassador = async (req, res) => {
    try {
        const newAmbassador = req.body;
        const createdAmbassador = await AmbassadorItem.create(newAmbassador);
        res.json(createdAmbassador);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const updateAmbassador = async (req, res) => {
    try {
        

        const updatedAmbassador = await AmbassadorItem.findByIdAndUpdate(
            req.params.id,
            { $set:req.body }, 
            { new: true, runValidators: true }
        );

        if (!updatedAmbassador) {
            return res.status(404).json({ error: "AmbassadorSuite tapılmadı!" });
        }

        res.json(updatedAmbassador);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const deleteAmbassador = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAmbassador = await AmbassadorItem.findByIdAndDelete(id);

        if (!deletedAmbassador) {
            return res.status(404).json({ error: "AmbassadorSuite tapılmadı!" });
        }

        res.json({ message: "Məlumat silindi!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export { getAmbassador, postAmbassador, updateAmbassador,deleteAmbassador };
