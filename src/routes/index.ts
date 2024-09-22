import { Router } from "express";
import * as PageController from "../controllers/pageController";
import * as SearchController from "../controllers/searchController";

const router = Router();

router.get("/", PageController.home);
router.get("/regionais", PageController.regionais);
router.get("/mundo", PageController.mundo);
router.get("/funcionais", PageController.funcionais);

router.get("/search", SearchController.search);

export default router;