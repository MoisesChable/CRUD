const express = require('express');
const router = express.Router();
const Question = require('../models/questions');

router.get('/', async(req, res) => {
     res.render('index');
});

router.get('/admin', async(req, res) => {
    const preguntas = await Question.find();
    res.render('form', {
        datos: preguntas
    });
});
router.post('/add', async(req, res) => {
    //definicion de los datos
    const question = new Question(req.body);
    //almacenamiento en base de datos
    await question.save();
    res.redirect('/admin');
});
router.get('/delete/:id', async(req, res) => {
    const { id } = req.params;
    await Question.remove({ _id: id });
    res.redirect('/admin');
});

router.post('/update/:id', async(req, res) => {
    const { id } = req.params;
    await Question.update({ _id: id }, req.body);
    res.redirect('/admin');
});

router.get('/edit/:id', async(req, res) => {
    const { id } = req.params;
    const datos = await Question.findById(id);
    res.render('edit', {
        datos
    });
});

router.get('/nuevo', async(req, res) => {
    res.render('nuevo');
});

router.get('/question/:number', async(req, res) => {
    const preguntas = await Question.find();
    const totalPreguntas = preguntas.length;
    const { number} = req.params;
    var next = parseInt(number) + 1;
    res.render('preguntas', {
        datos: preguntas[number], 
        numero:next,
        totalPreguntas: totalPreguntas
    });
});

router.get('/finish', async(req, res) => {
   res.render('finish');
});

module.exports = router;