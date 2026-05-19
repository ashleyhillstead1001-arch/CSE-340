import { getAllFaculty, getFacultyById, getSortedFaculty } from "../../models/faculty/faculty.js";

//Route handler for faculty list page
const facultyPage = (req, res) => {
    const validSortFields = ['name', 'department', 'title'];
    const sortBy = validSortFields.includes(req.query.sort) ? req.query.sort : 'name';
    const sortedFaculty = getSortedFaculty(getAllFaculty(), sortBy);


    res.render('faculty/list', {
        title: 'Faculty Directory',
        faculty: sortedFaculty,
        currentSort: sortBy
    });
}

//Route handler for individual faculty detail pages
const facultyDetailPage = (req, res, next) => {
    const facultyId = req.params.facultyId;
    const facultyMember = getFacultyById(facultyId);

    // If faculty member doesn't exist, create 404 error
    if (!facultyMember) {
        const err = new Error(`Faculty member ${facultyId} not found`);
        err.status = 404;
        return next(err);
    }

    res.render('faculty/detail', {
        title: 'Faculty Detail',
        faculty: facultyMember
    });
};

export { facultyPage, facultyDetailPage };