
import CornerSuideItem from "../models/cornerSuideModel.js";
import DeluxeSuideItem from "../models/deluxeSuiteModel.js";
import TwinBalconyItem from "../models/twinBalconyModel.js";


const getCornerSuide = async (req, res) => {
    try {
        const CornerSuide = await CornerSuideItem.find();
        res.json(CornerSuide);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const postCornerSuide = async (req, res) => {
    try {
        const newCornerSuide = req.body;
        const createdCornerSuide = await CornerSuideItem.create(newCornerSuide);
        res.json(createdCornerSuide);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const updatedCornerSuide = async (req, res) => {
    try {
        

        const updatedCornerSuide = await CornerSuideItem.findByIdAndUpdate(
            req.params.id,
            { $set:req.body }, 
            { new: true, runValidators: true }
        );

        if (!updatedCornerSuide) {
            return res.status(404).json({ error: "TwinBalcony tapılmadı!" });
        }

        res.json(updatedCornerSuide);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const deleteCornerSuide = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCornerSuide = await CornerSuideItem.findByIdAndDelete(id);

        if (!deletedCornerSuide) {
            return res.status(404).json({ error: "TwinBalcony tapılmadı!" });
        }

        res.json({ message: "Məlumat silindi!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export { getCornerSuide, postCornerSuide, updatedCornerSuide, deleteCornerSuide };
