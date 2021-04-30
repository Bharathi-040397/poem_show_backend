const router = require('express').Router();
const poemCtrl = require('../Controller/poem')


router.post('/addPoem', poemCtrl.addPoem)

router.get('/allPoem', poemCtrl.getPoems);

router.get('/get/:poemId', poemCtrl.getPoem);

router.put('/edit/:Id', poemCtrl.editPoem);




module.exports = router;