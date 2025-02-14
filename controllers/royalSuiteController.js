import RoyalItem from "../models/royalSuiteModel.js";



const getRoyal = async (req, res) => {
    try {
        const Royal = await RoyalItem.find();
        res.json(Royal);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const postRoyal = async (req, res) => {
    try {
        const newRoyal = req.body;
        const createdRoyal = await RoyalItem.create(newRoyal);
        res.json(createdRoyal);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const updateRoyal = async (req, res) => {
    try {
        

        const updatedRoyal = await RoyalItem.findByIdAndUpdate(
            req.params.id,
            { $set:req.body }, 
            { new: true, runValidators: true }
        );

        if (!updatedRoyal) {
            return res.status(404).json({ error: "RoyalSuide tapılmadı!" });
        }

        res.json(updatedRoyal);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const deleteRoyal = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRoyal = await RoyalItem.findByIdAndDelete(id);

        if (!deletedRoyal) {
            return res.status(404).json({ error: "RoyalSuite tapılmadı!" });
        }

        res.json({ message: "Məlumat silindi!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export { getRoyal, postRoyal, deleteRoyal, updateRoyal };
