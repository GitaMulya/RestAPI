import express from "express";
import { getNotifs, getNotifID, saveNotif, updateNotif, deleteNotif } from "../controllers/bookController.js";
const router = express.Router();
//get all
router.get('/', getNotifs);
//create data
router.post('/', saveNotif);
// get by id
router.get('/:id', getNotifID);
//updanpm startte
router.patch('/:id',updateNotif);
//delete
router.delete('/:id',deleteNotif);
export default router;