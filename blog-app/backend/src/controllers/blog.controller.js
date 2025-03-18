import Blog from "../models/blog.model.js";

export const getBlogs = async(req, res)=>{
    try {
        const blogs = await Blog.find({})
        res.status(200).send(
            {
                count: blogs.length,
                data: blogs
            }
        )
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

export const getBlogId = async(req, res)=>{
    const {id} = req.params
    try {
        if(!id){
            return res.status(400).send('Id not found')
        }else{
            const blog = await Blog.findById(id)
            res.status(200).send(blog)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

export const addBlog = async(req, res)=>{
    const {title, description, image} = req.body;
    try {
        if(!title || !description || !image){
            return res.status(400).send({message: 'Please enter all the required data!'})
        }else{
            const newBlog = new Blog(
                {
                    title,
                    description,
                    image
                }
            )
            const blog = await newBlog.save()
            res.status(200).send({message: 'Blog added success', blog})
        }
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

export const editBlog = async(req, res)=>{
    const {title, description, image} = req.body
    try {
        if(!title || !description || !image){
            return res.status(400).send({message: 'Send all required data'})
        }else{
            const {id} = req.params
            if(!id){
                return res.status(400).send({message: 'Id not defined'})
            }else{
                const result = await Blog.findByIdAndUpdate(id, req.body)
                return res.status(200).send({message: 'Blog updated success', result})
            }
        }
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

export const deleteBlog = async(req, res)=>{
    try {
        const {id} = req.params
        if(!id){
            return res.status(400).send('Invalid id')
        }else{
            const result = await Blog.findByIdAndDelete(id)
            return res.status(200).send('Blog deleted success.')
        }
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}
