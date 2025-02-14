
import CornerSuideItem from "../models/cornerSuideModel.js";
import DeluxeSuideItem from "../models/deluxeSuiteModel.js";
import SizeVillaItem from "../models/sizeVillaModel.js";
import StandartVillaItem from "../models/standardVillaModel.js";
import TwinBalconyItem from "../models/twinBalconyModel.js";


const getSizeVilla = async (req, res) => {
    try {
        const SizeVilla = await SizeVillaItem.find();
        res.json(SizeVilla);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const postSizeVilla = async (req, res) => {
    try {
        const newSizeVilla = req.body;
        const createdSizeVilla = await SizeVillaItem.create(newSizeVilla);
        res.json(createdSizeVilla);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const updateSizeVilla = async (req, res) => {
    try {
        

        const updatedSizeVilla = await SizeVillaItem.findByIdAndUpdate(
            req.params.id,
            { $set:req.body }, 
            { new: true, runValidators: true }
        );

        if (!updatedSizeVilla) {
            return res.status(404).json({ error: "TwinBalcony tapılmadı!" });
        }

        res.json(updatedSizeVilla);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const deleteSizeVilla = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSizeVilla = await SizeVillaItem.findByIdAndDelete(id);

        if (!deletedSizeVilla) {
            return res.status(404).json({ error: "SizeVilla tapılmadı!" });
        }

        res.json({ message: "Məlumat silindi!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export { getSizeVilla, postSizeVilla, updateSizeVilla,deleteSizeVilla };
