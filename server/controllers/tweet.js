import { handleError } from '../error.js';
import Tweet from '../models/Tweet.js';
import User from '../models/User.js';

export const createTweet = async (req, res, next) => {
    const newTweet = new Tweet({ userId: req.user.id, description: req.body.description });
    try{
        const savedTweet = await newTweet.save();
        res.status(200).json(savedTweet);
    }
    catch(err){
        handleError(500, err);
    }
}

export const deleteTweet = async (req, res, next) => {
    try{
        const tweet = await Tweet.findById(req.params.id);
        if(tweet.userId === req.user.id){
            await tweet.deleteOne();
            res.status(200).json("Tweet deleted successfully");
        }
        else {
            handleError(500, err);
        }
    }
    catch(err){
        handleError(500, err);  
    }
}

export const editTweet = async (req, res, next) => {
    try{
        const tweet = await Tweet.findById(req.params.id);
        if(!tweet){
            return next(handleError(404, "Tweet not found"));
        }

        if(tweet.userId === req.user.id){
            tweet.description = req.body.description;
            const updatedTweet = await tweet.save();
            res.status(200).json(updatedTweet);
        }
        else {
            handleError(500, "You can only edit your own Tweet");
        }
    }
    catch(err){
        handleError(500, err);  
    }
}

export const likeOrDislike = async (req, res, next) => {
    try{
        const tweet = await Tweet.findById(req.params.id);
        if(!tweet.likes.includes(req.body.id)){
            await tweet.updateOne({
                $push: {likes: req.body.id},
            });
            res.status(200).json("tweet has been liked");
        }else{
            await tweet.updateOne({
                $pull: {likes: req.body.id},
            });
            res.status(200).json("tweet has been disliked");
        }
    }
    catch(err){
        handleError(500, err);  
    }
}

export const getAllTweets = async (req, res, next) => {
    try{
        const currentUser = await User.findById(req.params.id);
        const userTweets = await Tweet.find({userId: currentUser._id});
        const followersTweets = await Promise.all(
            currentUser.following.map((followerId) => {
                return Tweet.find({ userId: followerId });
            })
        );
        res.status(200).json(userTweets.concat(...followersTweets));
    }
    catch(err){
        handleError(500, err);  
    }
}

export const getUserTweets = async (req, res, next) => {
    try{
        const userTweets = await Tweet.find({ userId: req.params.id}). sort({
            createdAt: -1,
        });
        res.status(200).json(userTweets);
    }
    catch(err){
        handleError(500, err);  
    }
}

export const getExploreTweets = async (req, res, next) => {
    try {
        const exploreTweets = await Tweet.find({})
            .sort({ likes: -1 }); // Sort by likes descending

        // Separate tweets with likes and without likes
        const tweetsWithLikes = exploreTweets.filter(tweet => tweet.likes.length > 0);
        const tweetsWithoutLikes = exploreTweets.filter(tweet => tweet.likes.length === 0);

        // Concatenate the two arrays, putting tweets with likes first
        const sortedTweets = [...tweetsWithLikes, ...tweetsWithoutLikes];

        res.status(200).json(sortedTweets);
    } catch (err) {
        handleError(500, err);
    }
}
