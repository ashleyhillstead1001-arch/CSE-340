import { Router } from 'express';
// Create a new router instance
const router = Router();

/**
* Add import statements for controllers and middleware
*/
// The demo headers middleware from ../middleware/demo/headers.js
import { addDemoHeaders } from '../middleware/demo/headers.js';
// The catalog controllers from ./catalog/catalog.js
import { catalogPage, courseDetailPage } from './catalog/catalog.js';
// The basic page controllers from ./index.js
import { homePage, aboutPage, demoPage, testErrorPage } from './index.js';

/**
 * Add route definitions
 */
// Home and basic pages
router.get('/', homePage);
router.get('/about', aboutPage);
// Course catalog routes
router.get('/catalog', catalogPage);
router.get('/catalog/:courseId', courseDetailPage);
// Demo page with special middleware
router.get('/demo', addDemoHeaders, demoPage);
// Route to trigger a test error
router.get('/test-error', testErrorPage);

export default router;