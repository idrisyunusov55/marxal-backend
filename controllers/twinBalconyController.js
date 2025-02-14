import TripleItem from "../models/tripleModel.js";
import TwinBalconyItem from "../models/twinBalconyModel.js";


const getTwinBalcony = async (req, res) => {
    try {
        const TwinBalconys = await TwinBalconyItem.find();
        res.json(TwinBalconys);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const postTwinBalcony = async (req, res) => {
    try {
        const newTwinBalcony = req.body;
        const createdTwinBalcony = await TwinBalconyItem.create(newTwinBalcony);
        res.json(createdTwinBalcony);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const updateTwinBalcony = async (req, res) => {
    try {
       

        const updatedTwinBalcony = await TwinBalconyItem.findByIdAndUpdate(
            req.params.id,
            { $set: req.body }, 
            { new: true, runValidators: true }
        );

        if (!updatedTwinBalcony) {
            return res.status(404).json({ error: "TwinBalcony tapılmadı!" });
        }

        res.json(updatedTwinBalcony);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const deleteTwinBalcony= async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTwinBalcony = await TwinBalconyItem.findByIdAndDelete(id);

        if (!deletedTwinBalcony) {
            return res.status(404).json({ error: "TwinBalcony tapılmadı!" });
        }

        res.json({ message: "Məlumat silindi!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export { getTwinBalcony, postTwinBalcony, updateTwinBalcony, deleteTwinBalcony };
