const express = require('express');
const router = express.Router();
//const Task = require('../models/task');
const Question = require('../models/questions');

router.get('/', async(req, res) => {
    const preguntas = await Question.find();
    //res.type('text/html');
    res.render('index', {
        datos: preguntas
    });
});

router.get('/admin', async(req, res) => {
    const preguntas = await Question.find();
    //res.type('text/html');
    res.render('form', {
        datos: preguntas
    });
});

router.post('/admin/add', async(req, res) => {
    //definicion de los datos
    const question = new Question(req.body);
    //almacenamiento en base de datos
    await question.save();
    res.redirect('/admin');
});
router.get('/admin/delete/:id', async(req, res) => {
    const { id } = req.params;
    await Question.remove({ _id: id });
    res.redirect('/admin');
});

router.post('/admin/update/:id', async(req, res) => {
    const { id } = req.params;
    await Question.update({ _id: id }, req.body);
    res.redirect('/admin');
});

router.get('/admin/edit/:id', async(req, res) => {
    const { id } = req.params;
    const datos = await Question.findById(id);
    res.render('edit', {
        datos
    });
});

router.get('/admin/nuevo', async(req, res) => {
    res.render('nuevo');
});


module.exports = router;