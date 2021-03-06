import { Router } from 'express'
import * as postCtrl from '../controllers/posts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Public Routes ========= 
router.get('/', postCtrl.index)


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', checkAuth, postCtrl.create)
router.get('/:id', postCtrl.show)
router.put('/:id', checkAuth, postCtrl.update)
router.delete('/:id', checkAuth, postCtrl.delete)
// Comments
router.post('/:id/comments', checkAuth, postCtrl.createComment)
router.delete('/:postId/comments/:commentId', checkAuth, postCtrl.deleteComment)

export {
    router
}