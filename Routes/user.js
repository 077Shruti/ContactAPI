import express from 'express';
import { register,login } from '../Controllers/user.js';
const router=express.Router();
//@api dsc:- user registration
// @api method:= post
// @api endpint:- /api/user/register
router.post("/register",register);
//@api dsc:- user rlogin
// @api method:= post
// @api endpint:- /api/user/login
router.post("/login",login);


export default router;