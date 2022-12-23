import { Router } from "./router.js";

const router = new Router();

router.add("/", "/stage_06/class_01/pages/home.html");
router.add("/about", "/stage_06/class_01/pages/about.html");
router.add("/contact", "/stage_06/class_01/pages/contact.html");
router.add(404, "/stage_06/class_01/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
