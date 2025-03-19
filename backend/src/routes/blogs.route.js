import express from 'express'
import { addBlog, deleteBlog, editBlog, getBlogId, getBlogs, getData } from '../controllers/blog.controller.js'

const router = express.Router()

router.get('/getblog', getBlogs)

router.get('/getblog/:id', getBlogId)

router.post('/postblog', addBlog)

router.put('/editBlog/:id', editBlog)

router.delete('/deleteblog/:id', deleteBlog)

router.get('/getdata', getData)

export default router;
