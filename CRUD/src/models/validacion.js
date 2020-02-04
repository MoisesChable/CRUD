function validar(data){
    const {tarea, fecha} = data;
  if(tarea.length < 3 ){
    res.render('index')
  }
}
module.exports = {
    createUsersValidacion,
};