import KingBalconyItem from "../models/kingBalconyModel.js";


const getKingBalcony = async (req, res) => {
    try {
        const kingBalconies = await KingBalconyItem.find();
        res.json(kingBalconies);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const postKingBalcony = async (req, res) => {
    try {
        const newKingBalcony = req.body;
        const createdKingBalcony = await KingBalconyItem.create(newKingBalcony);
        res.json(createdKingBalcony);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const updateKingBalcony = async (req, res) => {
    try {
    

        const updatedKingBalcony = await KingBalconyItem.findByIdAndUpdate(
            req.params.id,
            { $set: req.body }, 
            { new: true, runValidators: true }
        );

        if (!updatedKingBalcony) {
            return res.status(404).json({ error: "KingBalcony tapılmadı!" });
        }

        res.json(updatedKingBalcony);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const deleteKingBalcony = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedKingBalcony = await KingBalconyItem.findByIdAndDelete(id);

        if (!deletedKingBalcony) {
            return res.status(404).json({ error: "KingBalcony tapılmadı!" });
        }

        res.json({ message: "Məlumat silindi!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export { getKingBalcony, postKingBalcony, updateKingBalcony, deleteKingBalcony };
