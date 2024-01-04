import {Router} from 'express'
import { deleteMovie, fetchMovies, searchMovie, store, updateMovie } from '../controllers/MovieController.js';

const router=Router();

router.post("/", store);
router.get("/", fetchMovies);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);
router.get("/search", searchMovie);

export default router;
