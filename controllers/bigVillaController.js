
import BigVillaItem from "../models/bigVillaModel.js";



const getBigVilla = async (req, res) => {
    try {
        const BigVilla = await BigVillaItem.find();
        res.json(BigVilla);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const postBigVilla = async (req, res) => {
    try {
        const newBigVilla = req.body;
        const createdBigVilla = await BigVillaItem.create(newBigVilla);
        res.json(createdBigVilla);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const updateBigVilla = async (req, res) => {
    try {
        

        const updatedBigVilla = await BigVillaItem.findByIdAndUpdate(
            req.params.id,
            { $set:req.body }, 
            { new: true, runValidators: true }
        );

        if (!updatedBigVilla) {
            return res.status(404).json({ error: "TwinBalcony tapılmadı!" });
        }

        res.json(updatedBigVilla);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const deleteBigVilla = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBigVilla = await BigVillaItem.findByIdAndDelete(id);

        if (!deletedBigVilla) {
            return res.status(404).json({ error: "BigVilla tapılmadı!" });
        }

        res.json({ message: "Məlumat silindi!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export { getBigVilla, postBigVilla, updateBigVilla,deleteBigVilla };
