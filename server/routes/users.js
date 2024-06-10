import express from "express";
import { getUser, update, deleteUser, follow , unFollow} from "../controllers/user.js"
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//update user
router.put('/:id', verifyToken, update);

//get user
router.get('/find/:id', getUser);

//delete user
router.delete('/:id', verifyToken, deleteUser);

//Follow 
router.put('/follow/:id', verifyToken, follow);

//unFollow
router.put('/unfollow/:id', verifyToken, unFollow);

export default router;