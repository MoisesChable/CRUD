const express = require('express');
const router = express.Router();
const Task = require('../models/task');


router.get('/', async(req, res) => {
    const tareas = await Task.find();
    //res.type('text/html');
    res.render('index', {
        datos: tareas
    });
});

router.post('/add', async(req, res) => {
    //definicion de los datos
    const task = new Task(req.body);
    //almacenamiento en base de datos
    await task.save();
    res.redirect('/');
});
router.get('/delete/:id', async(req, res) => {
    const { id } = req.params;
    await Task.remove({ _id: id });
    res.redirect('/');
});

router.post('/update/:id', async(req, res) => {
    const { id } = req.params;
    await Task.update({ _id: id }, req.body);
    res.redirect('/');
});

router.get('/edit/:id', async(req, res) => {
    const { id } = req.params;
    const datos = await Task.findById(id);
    res.render('edit', {
        datos
    });
});

router.get('/nuevo', async(req, res) => {
    res.render('nuevo');
});


module.exports = router;