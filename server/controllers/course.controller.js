import { Course } from "../models/course.model.js";
import {deleteMediaFromCloudinary, deleteVideoFromCloudinary, uploadMedia} from "../utils/cloudinary.js";
import { Lecture } from "../models/lecture.model.js";




export const createCourse = async (req, res) => {
    try {
        const { courseTitle, category } = req.body;
        if(!courseTitle || !category) {
            return res.status(400).json({ success: false, message: "Course title and category are required" });
        }
        const course = await Course.create({ courseTitle, category, creator: req.id });/////  
        

        return res.status(201).json({
            course, 
            message :"Course created successfully"
        })
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Failed to create course" });
    }
}


export const searchCourse = async (req, res) => {
    try {
        const { query = "", categories = [], sortByPrice = "" } = req.query;

        const searchCriteria = {
            isPublished : true,
            $or: [
                { courseTitle: { $regex: query, $options: "i" } },
                { subtitle: { $regex: query, $options: "i" } },
                { description: { $regex: query, $options: "i" } }
            ]
        }

        if(categories.length > 0) {
            searchCriteria.category = { $in: categories };
        }

        const sortOptions = {}
        if (sortByPrice === "low") {
            sortOptions.coursePrice = 1; // Ascending order
        }
        else if(sortByPrice === "high") {
            sortOptions.coursePrice = -1; // Descending order
        }
        let courses = await Course.find(searchCriteria).populate({ path: "creator", select: "name photoUrl" }).sort(sortOptions);
        return res.status(200).json({
            success: true, 
            courses : courses || []
        })
    }
    catch { error } {
        console.log(error);
        return res.status(500).json({ success: false, message: "Failed to search courses" });
    }
}



