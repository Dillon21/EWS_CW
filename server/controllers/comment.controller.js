import Comment from '../models/comment.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'
import { request, response } from 'express'

const create = async (req, res) => {
    const comment = new Comment(req.body)
    try {
        await comment.save()
        return res.status(200).json({
            message: "Comment posted"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}


const update = async (req, res) => {
    extend(req.comment, req.body);
    req.comment.updated = Date.now();
    req.comment.save((error, comment) => {
    if (error) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(error)
        });

    }
    res.json(comment);
});
    };


const list = async (req, res) => {
    try {
        let comment = await Comment.find().select("*");
        res.json(comment)
    }catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
} 
}



const remove = async (req, res) => {
    try {
        let comment = req.comment
        let deletedComment = await comment.remove()
        res.json(deletedComment)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const commentByID = async (req, res, next, id) => {
    try {
        let comment = await Comment.findById(id)
        if (!comment)
            return res.status('400').json({
                error: "Comment not found"
            })
        req.comment = comment
        next()
    } catch (err) {
        return res.status('400').json({
            error: "Could not retrieve user"
        })
    }
}


export default {
    create,
    remove,
    list,
    update,
    commentByID,
    remove
}