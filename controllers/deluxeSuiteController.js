
import DeluxeSuideItem from "../models/deluxeSuiteModel.js";
import TwinBalconyItem from "../models/twinBalconyModel.js";


const getDeluxeSuide = async (req, res) => {
    try {
        const DeluxeSuide = await DeluxeSuideItem.find();
        res.json(DeluxeSuide);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const postDeluxeSuide = async (req, res) => {
    try {
        const newDeluxeSuide = req.body;
        const createdDeluxeSuide = await DeluxeSuideItem.create(newDeluxeSuide);
        res.json(createdDeluxeSuide);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const updateDeluxeSuide = async (req, res) => {
    try {
        

        const updatedDeluxeSuide = await DeluxeSuideItem.findByIdAndUpdate(
            req.params.id,
            { $set:req.body }, 
            { new: true, runValidators: true }
        );

        if (!DeluxeSuideItem) {
            return res.status(404).json({ error: "TwinBalcony tapılmadı!" });
        }

        res.json(updatedDeluxeSuide);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const deleteDeluxeSuide = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedDeluxeSuide = await DeluxeSuideItem.findByIdAndDelete(id);

        if (!deletedDeluxeSuide) {
            return res.status(404).json({ error: "TwinBalcony tapılmadı!" });
        }

        res.json({ message: "Məlumat silindi!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export { getDeluxeSuide, postDeluxeSuide, updateDeluxeSuide, deleteDeluxeSuide };
