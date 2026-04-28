const mongoose = require("mongoose");
const Blog = require("../DB/models/blog");


const seed = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Connected to DB.");

        // await Blog.deleteMany();    // Optional: clean old data

        const count = await Blog.countDocuments();

        if (count > 0) {
            console.log("Data already exists, skipping seed.");
            return;
        }

        console.log("Seeding data...");

        const blogs = [
            {
                title: "Atomic Habits",
                description: "A book about building good habits and breaking bad ones through small daily improvements."
            },
            {
                title: "The Alchemist",
                description: "A young shepherd travels in search of treasure and discovers the importance of following his dreams."
            },
            {
                title: "The Prophet",
                description: "A poetic collection of philosophical reflections about love, freedom, work, and the meaning of life."
            },
            {
                title: "Clean Code",
                description: "A practical guide to writing readable, maintainable, and professional-quality code."
            },
            {
                title: "Deep Work",
                description: "Explains how focused, distraction-free work leads to greater productivity and success."
            },
            {
                title: "Getting Things Done",
                description: "Introduces a productivity system for organizing tasks, reducing mental clutter, and getting more meaningful work done."
            }
        ];

        await Blog.insertMany(blogs);

        console.log("Seeding done.");
    }
    catch (err) {
        console.error(err);
    }
    finally {
        await mongoose.disconnect();
    }
};


seed();