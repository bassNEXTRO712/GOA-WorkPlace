const express = require('express');
const { title } = require('process');
const postRouter = express.Router();

let nextId = 1;
let postId = 1;
let users = [
    {
        id: nextId++,
        name: 'Nika',
        lastName: 'Abrumia',
        age: 25,
        comments: []
    }
];

// მომხმარებლების წამოღება
postRouter.get('/users', (req, res) => {
    res.json(users);
});

// ახალი მომხმარებლის დამატება
postRouter.post('/users', (req, res) => {
    const { name, lastName, age,email } = req.body;

    if (!name || !lastName || !age || !email) {
        return res.status(400).json({ error: 'Problem!!' });
    }

    const newUser = {
        id: nextId++,
        name,
        lastName,
        age,
        comments: []
    };

    users.push(newUser);
    res.status(201).json(newUser)
});


let posts = [
    {
        id: postId++,
        title: 'First Post',
        author: "Nikolozzza",
        description: "Just Funny",
        comments: []
    }
];

postRouter.get('/posts',(req,res) => {
    res.json(posts)
})


// კონკრეტული პოსტის წამოღება ID-ით

postRouter.get('/posts/:id',(req,res) => {
    const findPostWithID = posts.find(p => p.id === parseInt(req.params.id));

    if (!findPostWithID) return  res.status(404).json({error:"Can Not Find Post With That Id"})
        res.json(findPostWithID)
})

// პოსტის წაშლა იდ ით
postRouter.delete('/posts/:id',(req,res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id))

    if(postIndex  === -1){
        return res.status(404).json({ error: "Post not found" });
    }

    const deletedPost = posts.splice(postIndex,1)
    res.json(posts)
     res.json({ message: "Post deleted successfully", deleted: deletedPost[0] });
})

postRouter.post('/posts', (req, res) => {
    const { title, author, description } = req.body;
    if (!title || !author || !description) {
        return res.status(400).json({ error: "Missing fields!" });
    }

    const newPost = {
        id: postId++,
        title,
        author,
        description,
        comments: []
    };

    posts.push(newPost);
    res.status(201).json(newPost);
});


// პოსტის შეცვლა ID-ით
postRouter.patch('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, author, description } = req.body;

    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }

    // მხოლოდ მოცემული ველების შეცვლა
    if (title) post.title = title;
    if (author) post.author = author;
    if (description) post.description = description;

    res.json(post);
});

module.exports = {
    postRouter
};
