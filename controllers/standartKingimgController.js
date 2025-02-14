import StandartKingItem from "../models/standartKingimg.js";


const getStandartKing = async (req, res) => {
    try {
        const STking = await StandartKingItem.find();
        res.json(STking);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const postStandartKing = async (req, res) => {
    try {
        const newSTking = req.body;
        const createdSTking = await StandartKingItem.create(newSTking);
        res.json(createdSTking);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const updateStandartKing = async (req, res) => {
    try {
       

        const updatedSTking = await StandartKingItem.findByIdAndUpdate(
            req.parmas.id,
            { $set: req.body }, 
            { new: true, runValidators: true }
        );

        if (!updatedSTking) {
            return res.status(404).json({ error: "StandartKing tapılmadı!" });
        }

        res.json(updatedSTking);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const deleteStandartKing = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSTking = await StandartKingItem.findByIdAndDelete(id);

        if (!deletedSTking) {
            return res.status(404).json({ error: "StandartKing tapılmadı!" });
        }

        res.json({ message: "Məlumat silindi!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export { getStandartKing, postStandartKing, updateStandartKing, deleteStandartKing };
