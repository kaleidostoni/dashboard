//var sede = Object.keys(data);
//console.log(sede);
//var generation = Object.keys(sede[]); //va dentro de la función [i]
//var sedeLength = sede.length;
//var generationLength = generation.length;
//console.log(generationLength)
/*
var totalStudentsBySede= function(){
  for (var i= 0; i<=sedeLength; i++){
  //  for (var j= 0; j<=generationLength; i++);
  }
}
*/

/*LLAMANDO AL CONTENEDOR*/
var container = document.getElementById('container');
//llamando el contenedor del menu
var menu = document.getElementById('menu');

/*CREANDO ELEMENTOS*/

//barra de navegción
var navBar = document.createElement('header');
var logoSection = document.createElement('div');
var userSection = document.createElement('div');
var logo = document.createElement('img');
var buttonLogOut = document.createElement('a');
var buttonSettings = document.createElement('a');
var settingsIcon = document.createElement('i');
//main
var mainSide = document.createElement('section');
var mainBody = document.createElement('section');
//barra de opciones(select)
var sideContainer = document.createElement('section');
//seccion enrollment
var firstSection= document.createElement('section');
var enrollment = document.createElement('div');
var enrollmentTitle = document.createElement('h3');
var enrollmentRule = document.createElement('div');
var enrollmentContainerOne = document.createElement('div');
var enrollmentContainerTwo = document.createElement('div');
var enrollmentDescriptionOne = document.createElement('p');
var enrollmentDescriptionTwo = document.createElement('p');
//sección achievement
var achievement = document.createElement('div');
var achievementTitle = document.createElement('h3');
var achievementRule = document.createElement('div');
var achievementContainerOne = document.createElement('div');
var achievementContainerTwo = document.createElement('div');
var achievementDescriptionOne = document.createElement('p');
var achievementDescriptionTwo = document.createElement('p');
//sección nps
var nps = document.createElement('div');
var npsTitle = document.createElement('h3');
var npsRule = document.createElement('div');
var npsContainerOne = document.createElement('div');
var npsDescriptionOne = document.createElement('p');

//sección skills
var secondSection= document.createElement('section');
var skills = document.createElement('div');
var skillsTech = document.createElement('h3');
var skillsBySprint1 = document.createElement('div');
var skillsLife = document.createElement('h3');
var skillsBySprint2 = document.createElement('div');
var skillsTwo = document.createElement('div');
var skillsContainerOne = document.createElement('div');
var skillsContainerTwo = document.createElement('div');
var skillsContainerThree = document.createElement('div');
var skillsContainerFour = document.createElement('div');
var skillsRuler = document.createElement('div');
//sección students satisfaction
var thirdSection= document.createElement('section');
var satisfaction = document.createElement('div');
var satisfactionTitle = document.createElement('h3');
var satisfactionRule = document.createElement('div');
var satisfactionContainerOne = document.createElement('div');
var satisfactionDescriptionOne = document.createElement('p');
//sección teacher ratings
var teacher = document.createElement('div');
var teacherTitle = document.createElement('h3');
var teacherRule = document.createElement('div');
var teacherContainerOne = document.createElement('div');
var teacherDescriptionOne = document.createElement('p');
//seccióm jedi ratings
var jedi = document.createElement('div');
var jediTitle = document.createElement('h3');
var jediRule = document.createElement('div');
var jediContainerOne = document.createElement('div');
var jediDescriptionOne = document.createElement('p');


/*AGREGANDO ATRIBUTOS A LOS ELEMENTOS*/

//barra de navegción
navBar.classList.add('nav-bar');
logoSection.classList.add('logo-section');
userSection.classList.add('user-section');
logo.setAttribute('src','assets/images/logo-laboratoria.svg');
logo.classList.add('logo');
buttonLogOut.classList.add('log-out-button');
buttonLogOut.innerText ='LOG OUT';
buttonLogOut.setAttribute("href", "#");
buttonSettings.classList.add('settings-button');
buttonSettings.innerText ='SETTINGS';
buttonSettings.setAttribute("href", "#");
settingsIcon.classList.add('fa');
settingsIcon.classList.add('fa-cog');
settingsIcon.setAttribute('area-hidden','true');
//main
mainSide.classList.add('main-side');
mainBody.classList.add('main-body');
//barra de opciones(select)
sideContainer.classList.add('side-container');
//seccion enrollment
firstSection.classList.add('first-section');
enrollment.classList.add('enrollment');
enrollmentTitle.innerText = 'ENROLLMENT';
enrollmentTitle.classList.add('enrollment-title');
enrollmentRule.classList.add('enrollment-rule');
enrollmentContainerOne.classList.add('enrollment-container-one');
enrollmentContainerTwo.classList.add('enrollment-container-two');
enrollmentDescriptionOne.classList.add ("enrollment-desc-one");
enrollmentDescriptionTwo.classList.add ("enrollment-desc-two");
enrollmentDescriptionOne.innerText = '#ENROLLED STUDENTS';
enrollmentDescriptionTwo.innerText = 'DROPOUT %';
//sección achievement
achievement.classList.add('achievement');
achievementTitle.innerText = 'ACHIEVEMENT';
achievementTitle.classList.add('achievement-title');
achievementRule.classList.add('achievement-rule');
achievementContainerOne.classList.add('achievement-container-one');
achievementContainerTwo.classList.add('achievement-container-two');
achievementDescriptionOne.classList.add ("achievement-desc-one");
achievementDescriptionTwo.classList.add ("achievement-desc-two");
achievementDescriptionOne.innerText = '#THAT MEET THE TARGET';
achievementDescriptionTwo.innerText = '%OF TOTAL';
//sección nps
nps.classList.add('nps');
npsTitle.innerText = 'NPS';
npsTitle.classList.add('nps-title');
npsRule.classList.add('nps-rule');
npsContainerOne.classList.add('nps-container-one');
npsDescriptionOne.classList.add ("nps-desc-one");
npsDescriptionOne.innerText = ' % NPS CUMULATIVE';

//sección skills
secondSection.classList.add('second-section');
skills.classList.add('skills');
skillsTech.classList.add('skills-tech');
skillsLife.classList.add('skills-life');
skillsTech.innerText = 'TECH SKILLS'
skillsLife.innerText = 'LIFE SKILLS'
skillsBySprint1.classList.add('skills-by-sprint-1');
skillsBySprint2.classList.add('skills-by-sprint-2');
skillsTwo.classList.add('skills-two');
skillsContainerOne.classList.add('skills-container-one');
skillsContainerTwo.classList.add('skills-container-two');
skillsContainerThree.classList.add('skills-container-three');
skillsContainerFour.classList.add('skills-container-four');
skillsRuler.classList.add('skills-ruler');
//sección students satisfaction
thirdSection.classList.add('third-section');
satisfaction.classList.add('satisfaction');
satisfactionTitle.innerText = 'STUDENT SATISFACTION';
satisfactionTitle.classList.add('satisfaction-title');
satisfactionRule.classList.add('satisfaction-rule');
satisfactionContainerOne.classList.add('satisfaction-container-one');
satisfactionDescriptionOne.classList.add ("satisfaction-desc-one");
satisfactionDescriptionOne.innerText = 'MEETING OR ECXEEDING EXPECTATIONS';
//sección teacher ratings
teacher.classList.add('teacher');
teacherTitle.innerText = 'TEACHER RATING';
teacherTitle.classList.add('teacher-title');
teacherRule.classList.add('teacher-rule');
teacherContainerOne.classList.add('teacher-container-one');
teacherDescriptionOne.classList.add ("teacher-desc-one");
teacherDescriptionOne.innerText = 'OVERALL TEACHER RATING';
//seccióm jedi ratings
jedi.classList.add('jedi');
jediTitle.innerText = 'JEDI RATING';
jediTitle.classList.add('jedi-title');
jediRule.classList.add('jedi-rule');
jediContainerOne.classList.add('jedi-container-one');
jediDescriptionOne.classList.add ("jedi-desc-one");
jediDescriptionOne.innerText = 'OVERALL JEDI RATING';


/*COLOCANDO LOS ELEMENTOS EN EL HTML*/

//barra de navegción
container.appendChild(navBar);
navBar.appendChild(logoSection);
navBar.appendChild(userSection);
logoSection.appendChild(logo);
userSection.appendChild(menu);
userSection.appendChild(buttonSettings);
userSection.appendChild(buttonLogOut);
buttonSettings.appendChild(settingsIcon);


//main
container.appendChild(mainSide);
container.appendChild(mainBody);
//barra de opciones(select)
mainSide.appendChild(sideContainer);
//seccion enrollment
mainBody.appendChild(firstSection);
firstSection.appendChild(enrollment);
enrollment.appendChild(enrollmentTitle);
enrollment.appendChild(enrollmentRule);
enrollment.appendChild(enrollmentContainerOne);
enrollment.appendChild(enrollmentContainerTwo);
enrollment.appendChild(enrollmentDescriptionOne);
enrollment.appendChild(enrollmentDescriptionTwo);
//sección achievement
firstSection.appendChild(achievement);
achievement.appendChild(achievementTitle);
achievement.appendChild(achievementRule);
achievement.appendChild(achievementContainerOne);
achievement.appendChild(achievementContainerTwo);
achievement.appendChild(achievementDescriptionOne);
achievement.appendChild(achievementDescriptionTwo);
//sección nps
firstSection.appendChild(nps);
nps.appendChild(npsTitle);
nps.appendChild(npsRule);
nps.appendChild(npsContainerOne);
nps.appendChild(npsDescriptionOne);
//sección skills
mainBody.appendChild(secondSection);
secondSection.appendChild(skills);
skills.appendChild(skillsTech);
skills.appendChild(skillsBySprint1);
skills.appendChild(skillsLife);
skills.appendChild(skillsBySprint2);
secondSection.appendChild(skillsTwo);
skillsTwo.appendChild(skillsContainerOne);
skillsTwo.appendChild(skillsContainerTwo);
skillsTwo.appendChild(skillsRuler);
skillsTwo.appendChild(skillsContainerThree);
skillsTwo.appendChild(skillsContainerFour);
//sección students satisfaction
mainBody.appendChild(thirdSection);
thirdSection.appendChild(satisfaction);
satisfaction.appendChild(satisfactionTitle);
satisfaction.appendChild(satisfactionRule);
satisfaction.appendChild(satisfactionContainerOne);
satisfaction.appendChild(satisfactionDescriptionOne);
//sección teacher ratings
thirdSection.appendChild(teacher);
teacher.appendChild(teacherTitle);
teacher.appendChild(teacherRule);
teacher.appendChild(teacherContainerOne);
teacher.appendChild(teacherDescriptionOne);
//seccióm jedi ratings
thirdSection.appendChild(jedi);
jedi.appendChild(jediTitle);
jedi.appendChild(jediRule);
jedi.appendChild(jediContainerOne);
jedi.appendChild(jediDescriptionOne);


var mapSedes = function(data) {
  var sedeList = Object.keys(data);
  var selectSedes = document.getElementById('sedes');

  for (var i = 0; i < sedeList.length; i++) {

//En este caso se agregó manualmente el nombre de las sedes, al no tener un identificador dentro de data
    var nameSede;
    if (sedeList[i] === 'AQP') {
      nameSede = 'Arequipa';
    }
    else if (sedeList[i] === 'CDMX') {
      nameSede = 'Ciudad de México';
    }
    else if (sedeList[i] === 'LIM') {
      nameSede = 'Lima';
    }
    else if (sedeList[i] === 'SCL') {
      nameSede = 'Santiago de Chile';
    }
    else {
      nameSede = sedeList[i];
    }

//Creando las opciones del Select y agregándolas al DOM
    var optionSede = document.createElement('option');
    optionSede.setAttribute('value',sedeList[i]);
    optionSede.innerText= nameSede;
    selectSedes.appendChild(optionSede);
  }
}
mapSedes(data);

//Creando función del evento Click a la opción
var sedes = document.getElementById('sedes');

var onButtonClick = function(){
//Condicional para borrar el select cada vez que suceda el evento
//Porque se creaba un select generacion por cada click
  var selectAvailable = document.getElementById('generation');
  if (selectAvailable !== null){
    selectAvailable.remove();
  }

  var valueSede = document.getElementById('sedes');
  //console.log(valueSede.value);
  //accesando al objeto(key) seleccionado en el select
  var generation = data[valueSede.value];
  //console.log(generation);
//agregando con este evento las opciones de generacion

mapGeneration(generation);
}
sedes.addEventListener('click', onButtonClick);

//Creando funcion para generaciones

var mapGeneration = function(data) {
  var generationList = Object.keys(data);
  var selectGeneration = document.createElement('select');
  selectGeneration.setAttribute('id','generation');

//llamando al div que contendrá el segundo select, para poder agregar un appendChild
var containerSelect = document.getElementById('container-select');
//Agregando la primera opcion vacía de generaciones, afuera del for
var optionDefault = document.createElement('option');
optionDefault.setAttribute('value', 'null');
optionDefault.innerText= 'Generación';
selectGeneration.appendChild(optionDefault);

  for (var i = 0; i < generationList.length; i++) {
//Creando las opciones del Select y agregándolas al DOM
    var optionGeneration = document.createElement('option');
    optionGeneration.setAttribute('value',generationList[i]);
    optionGeneration.innerText= generationList[i];
    selectGeneration.appendChild(optionGeneration);
  }
containerSelect.appendChild(selectGeneration);
}


var sedeList = Object.keys(data);
var sedeAqp = data.AQP;
var sedeCdmx = data.CDMX;
var sedeLim = data.LIM;
var sedeScl = data.SCL;

// SEDE AREQUIPA

//1.-Total de estudiantes presentes por sede y generación
//RUTA data.AQP['2016-2'].students


//variable para guardar las dos generaciones de Arequipa
var generationAqp1 = sedeAqp['2016-2'];
var generationAqp2 = sedeAqp['2017-1'];

//primer generación
var students = generationAqp1.students;
var studentsLength =students.length -1;
var dropoutStudents = 0;
for (var i = 0; i<studentsLength; i++){
  if(students[i].active===false){
    dropoutStudents +=1;
  }
}
var counterAqp = studentsLength - dropoutStudents;
console.log(dropoutStudents);


/*segunda genración

var students = generationAqp2.students;
var studentsLength =students.length -1;
var dropoutStudents = 0;
for (var i = 0; i<studentsLength; i++){
  if(students[i].active===false){
    dropoutStudents +=1;
  }
}
var counterAqp = studentsLength - dropoutStudents;*/



//creando el elemento
var totaEnrolledStudents = document.createElement('p');
//agregando atributos
totaEnrolledStudents.classList.add('total-enrolled-students');
totaEnrolledStudents.innerText = counterAqp;
//añadiendo elemento al html
enrollmentContainerOne.appendChild(totaEnrolledStudents);



//2. El promedio de deserción de estudiantes
//RUTA data.AQP['2016-2'].student.active.false

var dropout = (dropoutStudents * 100)/studentsLength;


//creando el elemento
var dropoutRate = document.createElement('p');
//agregando atributos
dropoutRate.classList.add('dropout');
dropoutRate.innerText = dropout +'%';
//añadiendo elemento al html
enrollmentContainerTwo.appendChild(dropoutRate);


//3. Cantidad de estudiantes que superan la meta de puntos
//en promedio de todos los sprints cursados

var ratings = generationAqp1.ratings;
var ratingsLength = ratings.length;
var sum = 0;
for(var i =0; i<4; i++){
  var supera = ratings[i].student.supera;
  sum += supera;
  }
var meetTheTarget = sum/ratingsLength;

//creando el elemento
var studentsThatMeetTheTarget = document.createElement('p');
//agregando atributos
studentsThatMeetTheTarget.classList.add('students-meeting-target');
studentsThatMeetTheTarget.innerText = meetTheTarget;
//añadiendo elemento al html
achievementContainerOne.appendChild(studentsThatMeetTheTarget);


//4.El porcentaje que representa el dato anterior
//en relación al total de estudiantes.

var achivemenPercent = (sum * studentsLength)/100;

//creando el elemento
var achievementRate = document.createElement('p');
//agregando atributos
achievementRate.classList.add('achievement-rate');
achievementRate.innerText = achivemenPercent +'%';
//añadiendo elemento al html
achievementContainerTwo.appendChild(achievementRate);

//5.El Net Promoter Score (NPS) promedio de los sprints cursados.

//[Promoters] = [Respuestas 9 o 10] / [Total respuestas] * 100
//[Passive] = [Respuestas 7 u 8] / [Total respuestas] * 100
//[Detractors] = [Respuestas entre 1 y 6] / [Total respuestas] * 100
//[NPS] = [Promoters] - [Detractors]

var promotersSum = 0;
var passiveSum = 0;
var detractorsSum = 0;

for( var i = 0; i<4; i++){
  var promoters = ratings[i].nps.promoters;
  var passive = ratings[i].nps.passive;
  var detractors = ratings[i].nps.detractors;
  promotersSum += promoters;
  passiveSum += passive;
  detractorsSum += detractors;
}

var totalNpsSum = promotersSum+passiveSum+detractorsSum;
var totalPromoters =(promotersSum/totalNpsSum)*100;
var totalPassive = (passiveSum/totalNpsSum)*100;
var totalDetractors = (detractorsSum/totalNpsSum)*100;

var nps = totalPromoters-totalDetractors;

//creando el elemento
var npsRate = document.createElement('p');
//agregando atributos
npsRate.classList.add('nps-rate');
npsRate.innerText = nps +'%';
//añadiendo elemento al html
npsContainerOne.appendChild(npsRate);

//6.La cantidad y el porcentaje que representa el total de estudiantes
// que superan la meta de puntos técnicos en promedio y por sprint.




//7.La cantidad y el porcentaje que representa el total de estudiantes
//que superan la meta de puntos de HSE en promedio y por sprint.




 //8.El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.
//9.La puntuación promedio de l@s profesores.
//10.La puntuación promedio de l@s jedi masters.

var sumCumple= 0;
var sumSupera= 0;
var sumNoCumple= 0;
var sumTeacher= 0;
var sumJedis= 0;


for (var i= 0; i < ratings.length; i++) {

  var cumple= ratings[i].student.cumple;//Alumnas que cumple con el minimo requerido
  var supera= ratings[i].student.supera;//Alumnas que supera el minimo requerido
  var noCumple= ratings[i].student["no-cumple"];//Alumnas que NO-cumple el minimo requerido
  var teacher = ratings[i].teacher; //Total teachers
  var jedi= ratings[i].jedi;//Total jedis
  sumCumple += cumple;
  sumSupera += supera;
  sumNoCumple += noCumple;
  sumTeacher += teacher;
  sumJedis += jedi;

}
//console.log(sumCumple);
//console.log(sumSupera);
//console.log(sumNoCumple);
//console.log(sumTeacher);
//console.log(sumJedis);


var totalAlumnas= (sumCumple+sumSupera+sumNoCumple);
var porcentajeSatisfactorio = (sumCumple + sumSupera)* 100/totalAlumnas;
var promTeachers= (sumTeacher/ratings.length).toFixed(1);//puntuacion promedio de los profesores
var promJedis= (sumJedis / ratings.length).toFixed(1);//puntuacion promedio de los jedis
//console.log(totalAlumnas);
//console.log(porcentajeSatisfactorio);
//console.log(promTeachers);
//console.log(promJedis);

//creando el elemento
var satisfactionRate = document.createElement('p');
var teacherRate = document.createElement('p');
var jediRate = document.createElement('p');
//agregando atributos
satisfactionRate.classList.add('satisfaction-rate');
satisfactionRate.innerText = porcentajeSatisfactorio +'%';
teacherRate.classList.add('teacher-rate');
teacherRate.innerText = promTeachers;
jediRate.classList.add('jedi-rate');
jediRate.innerText = promJedis;
//añadiendo elemento al html
satisfactionContainerOne.appendChild(satisfactionRate);
teacherContainerOne.appendChild(teacherRate);
jediContainerOne.appendChild(jediRate);
