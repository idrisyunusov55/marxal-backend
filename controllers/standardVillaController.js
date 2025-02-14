
import CornerSuideItem from "../models/cornerSuideModel.js";
import DeluxeSuideItem from "../models/deluxeSuiteModel.js";
import StandartVillaItem from "../models/standardVillaModel.js";
import TwinBalconyItem from "../models/twinBalconyModel.js";


const getStandartVilla = async (req, res) => {
    try {
        const StandartVilla = await StandartVillaItem.find();
        res.json(StandartVilla);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const postStandartVilla = async (req, res) => {
    try {
        const newStandartVilla = req.body;
        const createdStandartVilla = await StandartVillaItem.create(newStandartVilla);
        res.json(createdStandartVilla);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const updateStandartVilla = async (req, res) => {
    try {
        

        const updatedStandartVilla = await StandartVillaItem.findByIdAndUpdate(
            req.params.id,
            { $set:req.body }, 
            { new: true, runValidators: true }
        );

        if (!updatedStandartVilla) {
            return res.status(404).json({ error: "TwinBalcony tapılmadı!" });
        }

        res.json(updatedStandartVilla);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const deleteStandartVilla = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStandartVilla = await StandartVillaItem.findByIdAndDelete(id);

        if (!deletedStandartVilla) {
            return res.status(404).json({ error: "TwinBalcony tapılmadı!" });
        }

        res.json({ message: "Məlumat silindi!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export { getStandartVilla, postStandartVilla, updateStandartVilla, deleteStandartVilla };
