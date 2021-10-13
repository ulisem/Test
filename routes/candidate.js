/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { createCandidate, getAllCandidates } = require('../controllers/candidate');


const router = Router();



router.post(
    '/candidate', 
    [ // middlewares
        check('name', 'El nombre es obligatorio').notEmpty(),
        check('skills', 'Las skills son obligatorias').not().isEmpty(),
        
    ],
    createCandidate 
);

router.get(
    '/candidate',
    [
    ],
    getAllCandidates 
);





module.exports = router;