import { Contact } from "../Models/Contact.js";
//get all conatacts
export const getallContacts = async (req, res) => {
    const userContact = await Contact.find();
    if (!userContact) {
        res.json({ message: "No contacts found", success: false });
    }
    res.json({ message: "Contacts found", success: true, contacts: userContact });

}

//get contact by id
export const getConatctById = async (req, res) => {
    const id = req.params.id;
    const userid = await Contact.findById(id);
    if (!userid) {
        return res.json({ message: "No contact found", success: false });
    }
    res.json({ message: "Contact found", success: true, contact: userid });
}

//get constact by user id
export const getConatctByUserId = async (req, res) => {
    const id = req.params.id;
    const userid = await Contact.find({user:id});
    if (!userid) {
        return res.json({ message: "No contact found", success: false });
    }
    res.json({ message: "Contact found by user id", success: true, contact: userid });
}

//update the contact by id
export const updateContactById = async (req, res) => {
    const id = req.params.id;
    const { name, email, phone, type } = req.body;
    const userid = await Contact.findByIdAndUpdate(id, {
        name, email, phone, type
    }, { new: true });
    if (!userid) {
        return res.json({ message: "No contact found", success: false });
    }
    res.json({
        message: "Contact updated successfully", success: true, contact: userid
    })

}

//delete the contact by id
export const deleteContactById = async (req, res) => {
    const id = req.params.id;

    const userdelete = await Contact.findByIdAndDelete(id);
    if (!userdelete) {
        return res.json({ message: "No contact found", success: false });
    }
    res.json({
        message: "Contact updated successfully", success: true
    })

}


//Create new Conatct
export const newContact = async (req, res) => {
    const { name, email, phone, type } = req.body;
    if (name == "" || email == "" || phone == "" || type == "") {
        return res.json({ message: "Please enter all the fields", success: false });
    }
    const nContact = await Contact.create({
        name, email, phone, type,user:req.user
    })
    res.json({ message: "Contact created successfully", success: true, contact: nContact });

}