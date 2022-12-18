exports.getAllPost = (req, res) => {
    const { category, filter, page } = req.query;
    console.log(category, filter, page);
    res.send('Get all post')
}

exports.getSinglePost = (req, res) => {
    res.send('Your searching post id is:' + req.params.postId);
}

exports.createPost = (req, res) => {
    res.send('Create a new post')
}

exports.updatePost = (req, res) => {
    res.send('Update a existing post' + req.params.postId)
}

exports.deletePost = (req, res) => {
    res.send('Delete a existing post' + req.params.postId)
}