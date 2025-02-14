import TripleItem from "../models/tripleModel.js";


const getTriple = async (req, res) => {
    try {
        const triples = await TripleItem.find();
        res.json(triples);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const postTriple = async (req, res) => {
    try {
        const newTriple = req.body;
        const createdTriple = await TripleItem.create(newTriple);
        res.json(createdTriple);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const updateTriple = async (req, res) => {
    try {
    

        const updatedTriple = await TripleItem.findByIdAndUpdate(
            req.params.id,
            { $set: req.body }, 
            { new: true, runValidators: true }
        );

        if (!updatedTriple) {
            return res.status(404).json({ error: "Triple tapılmadı!" });
        }

        res.json(updatedTriple);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const deleteTriple = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTriple = await TripleItem.findByIdAndDelete(id);

        if (!deletedTriple) {
            return res.status(404).json({ error: "Triple tapılmadı!" });
        }

        res.json({ message: "Məlumat silindi!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export { getTriple, postTriple, updateTriple, deleteTriple };
