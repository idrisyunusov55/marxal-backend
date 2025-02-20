import userModel from "../models/userModel.js"

export const deleteUsers = async(req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Istifadeci silindi!"})
    } catch (err) {
       res.status(400).json({ error: err.message}) 
    }
}

export const getUser = async(req, res) => {
    try {
       const user = await userModel.findById(req.params.id)
       res.status(200).json(user) 
    } catch (err) {
        res.status(400).json({ error:err.message})
    }
}

export const getUsers = async(req, res) => {
    try {
       const users = await userModel.find()
       res.status(200).json(users) 
    } catch (err) {
       res.status(400).json({ error: err.message}) 
    }
}

export const updateUsers = async(req, res) => {
    try {
        let updatedData = { ...req.body };
        if (req.body.password) {
            const salt = bcrypt.genSaltSync(10);
            updatedData.password = bcrypt.hashSync(req.body.password, salt);
        }

       const updateUser = await userModel.findByIdAndUpdate(
        req.params.id,
        { $set:req.body },
        { new:true, runValidators:true }
       )
    } catch (err) {
        res.status(400).json({ error:err.message})
    }
}