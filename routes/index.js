import {Router} from 'express'
import MovieRoute from './movieRoute.js'
import CastRoute from './castRoute.js'

const router=Router();

router.use("/api/movie", MovieRoute);
router.use("/api/cast", CastRoute );

export default router;