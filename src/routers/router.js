import routa from 'express';
import missionController from '../controllers/missionController.js';



const router = routa.Router();

router.post('/missions', missionController.createMission);
export default router;