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
 * Add route definitions
 */
// Home and basic pages
router.get('/', homePage);
router.get('/about', aboutPage);
// Course course routes
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
