const blogsService = require("./blogsService");

const getAllBlogsController = async (req, res) => {
    const allBlogs = await blogsService.getAllBlogs();

    res.status(200).json({
        success: true,
        blogs: allBlogs
    });
};


const seedController = async (req, res) => {
    await blogsService.seed();

    res.status(200).json({ succes: true });
};


module.exports = {
    getAllBlogsController,
    seedController
};