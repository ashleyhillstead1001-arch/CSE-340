import { Router } from 'express';
// Create a new router instance
const router = Router();

/**
* Add import statements for controllers and middleware
*/
// The demo headers middleware from ../middleware/demo/headers.js
import { addDemoHeaders } from '../middleware/demo/headers.js';
// The course controllers from ./course/course.js
import { courseListPage, courseDetailPage } from './course/course.js';
// The basic page controllers from ./index.js
import { homePage, aboutPage, demoPage, testErrorPage } from './index.js';
//The faculty controllers from ./faculty/faculty.js
import { facultyListPage, facultyDetailPage } from './faculty/faculty.js';

/**
 * 🚀 Router-Level Middleware
 * These intercept requests to specific paths and inject the correct CSS asset tags
 * BEFORE the route handlers compile the views.
 */

// Automatically inject catalog styles to all course-related views
router.use('/course', (req, res, next) => {
    res.addStyle('<link rel="stylesheet" href="/css/catalog.css">');
    next();
});

// Automatically inject faculty styles to all faculty-related views
router.use('/faculty', (req, res, next) => {
    res.addStyle('<link rel="stylesheet" href="/css/faculty.css">');
    next();
});

/**
 * Add route definitions
 */
// Home and basic pages
router.get('/', homePage);
router.get('/about', aboutPage);

// Course routes
router.get('/course', courseListPage);
router.get('/course/:courseSlug', courseDetailPage);

// Demo page with special middleware
router.get('/demo', addDemoHeaders, demoPage);
// Route to trigger a test error
router.get('/test-error', testErrorPage);

// Faculty routes
router.get('/faculty', facultyListPage);
router.get('/faculty/:facultySlug', facultyDetailPage);

export default router;
