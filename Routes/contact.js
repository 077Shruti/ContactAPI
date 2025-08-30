import { newContact,getallContacts,getConatctById,updateContactById, deleteContactById, getConatctByUserId  } from "../Controllers/contact.js";
import express from 'express';
import { authenticated } from "../middleware/auth.js";
const router=express.Router();
//Create new Contact
//@api dsc:-create new contact
//@method=POST
//@api endpoint: /api/contact/new
router.post("/new",authenticated,newContact);

//@api dsc:-Get all Contact
//@method=GET
//@api endpoint: /

router.get("/",getallContacts);

//@api dsc:-Get  Contact By id
//@method=GET
//@api endpoint: /:id
router.get("/:id",getConatctById);

//@api dsc:-update  Contact By id
//@method=PUT
//@api endpoint: /:id
router.put("/:id",authenticated,updateContactById )

//@api dsc:-Delete  Contact By id
//@method=DELETE
//@api endpoint: /:id
router.delete("/:id",authenticated,deleteContactById)

//@api dsc:-Get  Contact By user id
//@method=GET
//@api endpoint: /:id
router.get("/userId/:id",getConatctByUserId)

export default router;