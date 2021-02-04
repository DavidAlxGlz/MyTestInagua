import { Router } from "express";
const router = Router();

import { getTest } from "../controllers/test.controller";


router.route('/')
    .get(getTest)


export default router;