const Blog = require("../../DB/models/blog");


const getAll = async () => {
    return await Blog.find();
};

const createMany = async (blogs) => {
    return await Blog.insertMany(blogs);
};


module.exports = {
    getAll,
    createMany
};