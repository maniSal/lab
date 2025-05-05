const Cour = require("../model/Cour");

exports.addCour = async (req, res) => {
    try {
        const newCour = new Cour({ ...req.body });
        await newCour.save();
        res.status(200).json({ msg: "cours saved!", newCour });
    } catch (error) {
        res.status(400).json({ msg: "cours not saved!", error: error.message });
    }
};
///
exports.getAllCour= async(req,res)=>{
    try {
        const listCour = await Cour.find()
        res.status(200).json({ msg: "Cours List :",listCour });
    } catch (error) {
        res.status(400).json({ msg: "List Not Found!", error: error.message });
    }
}

///
exports.getOneCour = async (req, res) => {
    try {
        const { id } = req.params;
        const courToGet = await Cour.findById(id);
        if (!courToGet) {
            return res.status(400).json({ msg: "Cours Not Found!" });
        }
        return res.status(200).json({ msg: "The Cours is:", cour: courToGet });
    } catch (error) {
        res.status(400).json({ msg: "Error!", error: error.message });
    }
};

///
exports.editCour = async (req, res) => {
    try {
        const { id } = req.params;
        const courToChange = req.body
        const courToedit = await Cour.findByIdAndUpdate(id,courToChange,{new:true});
        if (!courToedit) {
            return res.status(400).json({ msg: "Cours Not Found!" });
        }
        return res.status(200).json({ msg: "new Cours is:", cour: courToedit });
    } catch (error) {
        res.status(400).json({ msg: "Error!", error: error.message });
    }
};



///
exports.deleteCour = async (req, res) => {
    try {
        const { id } = req.params;
       
        const courTodel = await Cour.findByIdAndDelete(id)
        if (!courTodel) {
            return res.status(400).json({ msg: "Cours Not Found!" });
        }
        return res.status(200).json({ msg: "Cours Deleted:", cour: courTodel });
    } catch (error) {
        res.status(400).json({ msg: "Error!", error: error.message });
    }
};