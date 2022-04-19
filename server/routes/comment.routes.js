import express from 'express'
import commentController from '../controllers/comment.controller'

const router = express.Router()

router.route('/api/comments')
 .get(commentController.list)
 .post(commentController.create)

router.route('/api/comments/:comment')
 
 .put(commentController.update)
 .delete(commentController.remove)

 router.param('commentid', commentController.commentByID)


 export default router
