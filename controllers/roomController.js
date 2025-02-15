import RoomItem from "../models/roomModel.js"

 const getRooms = async(req, res) => {
    try {
        const room = await RoomItem.find()
        res.json(room)
    } catch (err) {
        res.status(400).json({ error: err.message })
    } 
}

 const postRooms = async(req, res) => {
    try {
       const newRoom = req.body
       const createdRoom = await RoomItem.create(newRoom)
       res.json(createdRoom)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

 const deleteRoom = async(req,res) => {
    try {
        const { id } = req.params;
        const deletedroom = await RoomItem.findByIdAndDelete(id);

        if (!deletedroom) {
            return res.status(404).json({ error: "Room tapılmadı!" });
        }

        res.json({ message: "Məlumat silindi!" });
    } catch (error) {
        res.status(400).json({ error: err.message }) 
    }
}

 const updateRooms = async(req, res) => {
    try {
        const updatedRoom = await RoomItem.findByIdAndUpdate(
            req.params.id,
            { $set:req.body }, 
            { new: true, runValidators: true }
        );

        if (!updatedRoom) {
            return res.status(404).json({ error: "Room tapılmadı!" });
        }

        res.json(updatedRoom); 
    } catch (err) {
        res.status(400).json({ error: err.message }) 
    }
}

export {getRooms, postRooms,deleteRoom, updateRooms}