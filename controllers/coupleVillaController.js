
import CornerSuideItem from "../models/cornerSuideModel.js";
import CoupleVillaItem from "../models/coupleVillaModel.js";
import DeluxeSuideItem from "../models/deluxeSuiteModel.js";
import TwinBalconyItem from "../models/twinBalconyModel.js";


const getCoupleVilla = async (req, res) => {
    try {
        const CoupleVilla = await CoupleVillaItem.find();
        res.json(CoupleVilla);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const postCoupleVilla = async (req, res) => {
    try {
        const newCoupleVilla = req.body;
        const createdCoupleVilla = await CoupleVillaItem.create(newCoupleVilla);
        res.json(createdCoupleVilla);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const updatedCoupleVilla = async (req, res) => {
    try {
        

        const updatedCoupleVilla = await CoupleVillaItem.findByIdAndUpdate(
            req.params.id,
            { $set:req.body }, 
            { new: true, runValidators: true }
        );

        if (!updatedCoupleVilla) {
            return res.status(404).json({ error: "CoupleVilla tapılmadı!" });
        }

        res.json(updatedCoupleVilla);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const deleteCoupleVilla = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCoupleVilla = await CoupleVillaItem.findByIdAndDelete(id);

        if (!deletedCoupleVilla) {
            return res.status(404).json({ error: "TwinBalcony tapılmadı!" });
        }

        res.json({ message: "Məlumat silindi!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export { getCoupleVilla, postCoupleVilla, updatedCoupleVilla, deleteCoupleVilla };
