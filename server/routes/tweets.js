import express from "express";
import { verifyToken } from "../verifyToken.js";
import { createTweet, deleteTweet, editTweet, likeOrDislike, getAllTweets, getUserTweets, getExploreTweets} from "../controllers/tweet.js";

const router = express.Router();

//post tweet
router.post('/', verifyToken, createTweet);

//delete a tweet
router.delete('/:id', verifyToken, deleteTweet);

//edit tweet
router.put('/:id', verifyToken, editTweet);

//Like Or Dislike a Tweet
router.put('/:id/like', likeOrDislike);

//get all the tweets to display
router.get('/timeline/:id', getAllTweets);

//get user tweets only
router.get('/user/all/:id', getUserTweets);

//all tweets exlpre
router.get('/explore', getExploreTweets);

export default router;