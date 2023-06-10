
import { Router } from 'express';

import { getUsuario, getUsuarios, postUsuario, PutUsuario, deleteUsuario } from '../controllers/usuario'

const router = Router();

router.get('/', getUsuarios );
router.get('/:id', getUsuario );
router.post('/', postUsuario );
router.put('/:id', PutUsuario );
router.delete('/:id', deleteUsuario );

export default router;