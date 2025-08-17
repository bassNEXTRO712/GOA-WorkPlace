// Mock data
let posts = [
    { id: 1, title: 'Post 1', author: 'Author 1', comments: [] },
    { id: 2, title: 'Post 2', author: 'Author 2', comments: [] }
];

// Get all posts
const getAllPosts = (req, res) => {
    res.json(posts);
};

// Get post by id
const findPostById = (req, res) => {
    const { id } = req.params;
    const post = posts.find(el => el.id === Number(id));

    if (!post) {
        return res.status(404).json({ status: 'fail', message: 'Post can’t be found!' });
    }

    res.json(post);
};

// Create new post
const createPost = (req, res) => {
    const { title, author, comments } = req.body;

    if (!title || !author || !comments) {
        return res.status(400).json({ status: 'fail', message: 'Title, author and comments are required!' });
    }

    const post = { id: posts.length ? posts[posts.length - 1].id + 1 : 1, title, author, comments };
    posts.push(post);

    res.status(201).json(post);
};

// Update post by id
const updatePostById = (req, res) => {
    const { id } = req.params;
    const { title, comments } = req.body;
    const post = posts.find(el => el.id === Number(id));

    if (!post) {
        return res.status(404).json({ status: 'fail', message: 'Post can’t be found!' });
    }

    if (title) post.title = title;
    if (comments) post.comments = comments;

    res.json(post);
};

// Delete post by id
const deletePostbyId = (req, res) => {
    const { id } = req.params;
    const index = posts.findIndex(el => el.id === Number(id));

    if (index === -1) {
        return res.status(404).json({ status: 'fail', message: 'Post can’t be found!' });
    }

    posts.splice(index, 1);
    res.status(204).send();
};

module.exports = { getAllPosts, findPostById, createPost, updatePostById, deletePostbyId };
