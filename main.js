let result = 0;

function mouseOnElement(elem){
	elem.hover(()=>{elem[0].style.opacity = 0.6;}, ()=>{elem[0].style.opacity = 1;});
}

function stopMouse(id){
	for (let j = 1; j<=4; j+=1) {
		let elem = $("#ans_" + id + "_" + j);
		elem.off();
	}
}

function quizBoxInit(id){
	box = $("#q" + id)
	box.append($('<h2>', {id:('num_'+ id)}))
	if (id) {$('#num_'+ id)[0].innerHTML = id + "/7";}
	box.append($('<h1>', {id:('question_'+ id)}));
	if (!id) {$('#question_0')[0].style.marginTop = "50px";}

	$('#question_'+ id)[0].style.fontSize = h1Size;
	$('#question_'+ id)[0].innerHTML = texts[id][0];
	box.append($('<img>',{id:('img_' + id),src:('images/' + (id) + '.png'), class:"quiz-img"}));

	if (id){
	box.append($('<div>', {id: ('ans-box_'+id), class:"ans-box"}));

	for (let j = 1; j<=(texts[id].length - 1); j+=1) {
		$("#ans-box_" + id).append($('<div>', {id:('ans_' + id + "_" + j), class: "ans-button bottom-border"}));
		$('#ans_' + id + "_" + j)[0].innerHTML = texts[id][j];
		mouseOnElement($("#ans_" + id + "_"+j));
	}
	$('#ans_' + id + "_" + (texts[id].length - 1))[0].className =  "ans-button";
	}
	if (!id){
		box.append($('<div>', {class: "next-button", id: ("next_"+id)}));
		$("#next_"+id)[0].innerHTML = "ДАЛЬШЕ";
		mouseOnElement($("#next_"+id));
	}
}

function resultBoxInit(id, ans){
	box = $("#a"+id)
	box.append($('<h2>', {id:('num0_'+ id)}))
	if (id) {$('#num_'+ id)[0].innerHTML = id + "/7";}

	box.append($('<h1>', {id:('question0_'+ id), class:"free-space"}));
	$('#question0_'+ id)[0].style.fontSize = h1Size;


	$('#question0_'+ id)[0].style.marginTop = "15px";
	$('#question0_'+ id)[0].innerHTML = answers[id][ans];
	box.append($('<div>', {class: "next-button", id: ("next0_"+id)}));
	let b = $("#next0_"+id);
	b[0].innerHTML = "ДАЛЬШЕ";
	b.click(()=>{
		b[0].style.opacity = "1";
		stopMouse(id);
		box[0].style.display = "none";
		clickAns(id + 1);
		window.scrollTo(0, 0);
	})
	mouseOnElement($("#next0_"+id));
}

texts = [["Привет! Представим, что Вы руководитель небольшой девелоперской компании, и вы приняли решение переходить на международный уровень."],
[
	"Этап первый: необходимо найти партнеров.<br>Как Вы будете это делать?",
	"Самостоятельно, попробую погуглить",
	"Спрошу у коллег по отрасли",
	"Обращусь за консультацией в государственные структуры"
],
[
	"Хорошо, с компанией-партнером определились. Следующий шаг — бюджет. Из чего он складывается? ",
	"Использую собственные средства",
	"Возьму кредит в банке",
	"Попробую найти инвесторов, готовых вложить деньги в проект "
],
[
	"Необходимо определиться с площадкой. Из чего будем выбирать? ",
	"Сосед говорил, что у троюродного брата есть хороший участок",
	"Попробую найти по объявлениям в интернете",
	"Обращусь в отраслевые организации за помощью"
],
[
	"Начинаем готовить документацию. Что для этого нужно? ",
	"Это не первый мой проект. Документация — в любой стране документация",
	"Самостоятельно изучу нормативную базу или дам поручение сотрудникам",
	"Направлю официальный запрос на разъяснение для получения максимально исчерпывающей информации"
],
[
	"Теперь нужно получить обязательные разрешения и пройти согласования.",
	"Самостоятельно обойду все необходимые инстанции",
	"Обращусь к специализированным бюро",
	"Проконсультируюсь у представителей профильного ведомства "
],
[
	"Остался небольшой вопрос перед переходом к реализации. Как определиться с подрядчиком? ",
	"Привлеку подрядные организации, с которыми уже доводилось сотрудничать",
	"Обращусь к первой компании на рынке",
	"Проведу подробную аналитику международного рынка и подберу по итогам"
],
[
	"Остался лишь вопрос, как распорядиться результатом?",
	"Запущу рекламу",
	"Заключу договор с крупными риэлтерскими агентствами",
	"Я изначально всё продумал, поэтому всё раскупили на старте продаж "
]
];

answers = [[],
['',
	"Вероятно, Вам придется пролистать более 100 страниц результатов поиска, Вы потеряете время и в итоге Вы выберете компанию, которая больше вкладывается в маркетинг, нежели имеет действительный опыт реализации проектов. Дабы этого избежать, напоминаем, что Минстрой России сотрудничает с профильными ведомствами других стран, которые лучше всех осведомлены о компаниях, представленных на их рынке, в связи с чем намного проще найти компанию-партнера.",
	"Неплохой вариант, но Вам стоит учитывать, что компания, которая подошла Вашим коллегам, может не подойти Вам, ввиду особенностей Вашего проекта, поэтому напоминаем, что Минстрой России сотрудничает с профильными ведомствами других стран, которые лучше всех осведомлены о компаниях, представленных на их рынке, в связи с чем намного проще найти компанию-партнера.",
	"Это действительно просто и поможет найти компанию партнера исходя из характеристик именно Вашего проекта, так как Минстрой России сотрудничает с профильными ведомствами других стран, которые лучше всех осведомлены о компаниях, представленных на их рынке."
],
['',
	"Такой вариант сопряжен с множеством рисков, в то время как в работе различных совещательных органов при Минстрое России участвуют как банковские и инвестиционные организации, так и государственные органы зарубежных партнеров, которые специализируются на вариантах и программах поддержки международных проектов",
	"Неплохой вариант, но Вам придется в одиночку отстаивать идею перед представителями банков, в то время как в работе различных совещательных органов при Минстрое России участвуют как банковские и инвестиционные организации, так и государственные органы зарубежных партнеров, которые специализируются на вариантах и программах поддержки международных проектов",
	"Но где же найти инвесторов? В работе различных совещательных органов при Минстрое России участвуют как банковские и инвестиционные организации, так и государственные органы зарубежных партнеров, которые специализируются на вариантах и программах поддержки международных проектов"
],
['',
	"Вы не можете быть уверены, что Вам сообщат всестороннюю и объективную информацию об участке земли, что может повлечь необоснованную трату Ваших средств и времени. Во избежание этого лучше обратиться в отраслевые организации за помощью, так как при обсуждении проектов на межведомственном уровне в том числе рассматриваются возможные площадки реализации проекта, учитывая характеристики объектов",
	"Это ненадежно, и от Вас может быть скрыта важная информация, которая может повлечь необоснованную трату Ваших средств и времени. Во избежание этого лучше обратиться в отраслевые организации за помощью, так как при обсуждении проектов на межведомственном уровне в том числе рассматривают возможные площадки реализации проекта, учитывая характеристики объектов",
	"Их информация будет полезна, так как при обсуждении проектов на межведомственном уровне в том числе рассматривают возможные площадки реализации проекта, учитывая характеристики объектов"
],
['',
	"В каждой стране свои требования к описанию и технической документации проекта. Получая информацию напрямую от государственных органов зарубежных стран, можно быть уверенным в достоверности и полноте предоставленной информации",
	"В открытом доступе может быть недостоверная и неактуальная информация, а также не забывайте про расходы на перевод. Получая информацию напрямую от государственных органов зарубежных стран, можно быть уверенным в достоверности и полноте предоставленной информации",
	"Успех реализации проекта во многом зависит от ответственного и профессионального подхода на этапе подготовки. Получая информацию напрямую от государственных органов зарубежных стран, можно быть уверенным в достоверности и полноте предоставленной информации"
],
['',
	"Излюбленный многими метод проб и ошибок. Данный этап - самый сложный, запутанный и неподконтрольный исполнителю проекта. Важно понимать все процедуры, знать все инстанции, участвующие в экспертизе и проверке проекта, чтобы начать его реализацию в изначально запланированные сроки",
	"Лишние затраты и отсутствие контроля над процессом и результатом. Прохождение данного этапа - самый сложный, запутанный и неподконтрольный исполнителю проекта процесс. Важно понимать все процедуры, знать все инстанции, участвующие в экспертизе и проверке проекта чтобы начать его реализацию в изначально запланированные сроки",
	"Прохождение данного этапа - самый сложный, запутанный и неподконтрольный исполнителю проекта процесс. Важно понимать все процедуры, знать все инстанции, участвующие в экспертизе и проверке проекта чтобы начать его реализацию в изначально запланированные сроки"
],
['',
	"Ваш бывший подрядчик может не иметь опыта реализации международных проектов, не соответствовать международным требованиям или не устраивать компанию-партнера. Взаимоприемлемый выбор можно достичь путем сотрудничества с зарубежными государственными структурами, они всегда имеют реестр подрядных организаций, из которого можно подобрать подходящий вариант согласно индивидуальным характеристикам.",
	"Первая компания на рынке может не соответствовать индивидуальным характеристикам проекта или международным требованиям. Наилучший вариант можно найти путем сотрудничества с зарубежными государственными структурами, которые всегда имеют реестр подрядных организаций, из которого можно подобрать подходящий вариант согласно индивидуальным характеристикам.",
	"Хвалим Вашу инициативность, но наилучший вариант можно найти путем сотрудничества с зарубежными государственными структурами, они всегда имеют реестр подрядных организаций, из которого можно подобрать подходящий вариант согласно индивидуальным характеристикам."
],
['',
	"Затянуто, непредсказуемо, стихийно. Как уже отмечали ранее, в работе различных совещательных органов при Минстрое России задействованы такие участники, как инвестиционные фонды и государственные органы. В ходе обсуждения прорабатываются все этапы реализации проекта, в том числе возможность включения в государственные и социальные программы. В свою очередь, комплексный подход позволяет максимально предрассчитать окупаемость проекта.",
	"Отсутствуют гарантии и контроль. Как уже отмечали ранее, в работе различных совещательных органов при Минстрое России задействованы такие участники, как инвестиционные фонды и государственные органы. В ходе обсуждения прорабатываются все этапы реализации проекта, в том числе возможность включения в государственные и социальные программы. В свою очередь, комплексный подход позволяет максимально предрассчитать окупаемость проекта.",
	"Как уже отмечали ранее, в работе различных совещательных органов при Минстрое России задействованы такие участники, как инвестиционные фонды и государственные органы. В ходе обсуждения прорабатываются все этапы реализации проекта, в том числе возможность включения в государственные и социальные программы. В свою очередь, комплексный подход позволяет максимально предрассчитать окупаемость проекта."
]
]

for (i = 0; i< 8; i+=1) {quizBoxInit(i);}


function start(){
	let box = $("#q0");
	box[0].style.display = "inline-block";
	$("#next_0")[0].style.innerHTML="ДАЛЬШЕ";
			$("#next_0").click(()=>{
				box[0].style.display = "none";
				clickAns(1);
				window.scrollTo(0, 0);
			})
}

let countAns = [0, 0, 0]

function clickAns(id) {
	if (id == 8) {exit(); return;}
	let box = $("#q" + id);
	box[0].style.display = "inline-block";
	for (let j = 1; j <= (texts[id].length - 1); j+=1){
		let b = $("#ans_" + id + "_" + j);
		b.click(()=>{
			countAns[j-1]++
			b[0].style.opacity = "1";
			stopMouse(id);
			box[0].style.display = "none";
			window.scrollTo(0, 0);
			/*
			if (j == answers[id][0]){
				result+=1;
				console.log(result);
			}
			*/
			goToRes(id, j);
		})
	}
}

function goToRes(id, a) {
	var rand = resultBoxInit(id, a);
	$("#a" + id)[0].style.display = "inline-block";
}

function answerShow(id) {
	let box =  $("#q" + id);
	box[0].style.display = "inline-block";

}

function exit(){
	box = $("#finish");
	box.append($('<h1>', {id: 'finish-text'}));
	$("#finish")[0].style.paddingBottom = "50px";
	$('#finish-text')[0].style.marginTop = "50px";
	$('#finish-text')[0].style.fontSize = h1Size;

	var finalText
	if (countAns[0] > countAns[1] && countAns[0] > countAns[2]) finalText = `ВАШ ТИП – САМОУВЕРЕННЫЙ НОВИЧОК ИЛИ УВЕРЕННЫЙ ПОЛЬЗОВАТЕЛЬ

	<h4>Вы верите в свои силы, часто взваливаете на себя много задач одновременно. Азарт, непредсказуемость и возможность больших побед толкает Вас к быстрым решениям. Старайтесь соблюдать равновесие и не впадать в крайности, в противном случае не избежать негативных последствий.</h4>`
	else if (countAns[1] > countAns[0] && countAns[1] > countAns[2]) finalText = `ВАШ ТИП - ОПТИМИЗАТОР

	<h4>Вы подходите ко всем проблемам с двух позиций: где можно срезать, Вы обязательно срежете (иногда даже слишком), где срезать нельзя, Вы готовы тратить разумное количество ресурсов, и всё ради успешного результата.</h4>`
	else if (countAns[2] > countAns[1] && countAns[2] > countAns[1]) finalText = `ВАШ ТИП – МИНИМИЗАТОР РИСКОВ

	<h4>Вы просчитываете всё наперед, готовясь ко всем исходам. Вы не терпите импульсивности, опрометчивости и нерассудительности, Вы позаботитесь сделать точный расчет, и конечный результат Вашего труда будет соответствовать изначально поставленным целям.</h4>`
	else finalText = `ВАШ ТИП – ГИБКИЙ УМ

	<h4>Вы начинаете дело, не зная правильных ответов, но при возникновении сложной ситуации всегда найдете оптимальное решение. Вы полны незаурядных идей и работать с Вами – настоящее удовольствие от процесса.</h4>`

	$('#finish-text')[0].innerHTML = "Результат:<br>" + finalText;
	box[0].style.height = "60vh";
//	box.append($('<img>',{id:('img_final'),src:('images/finished.png'), class:"quiz-img"}));
/*	box.append($('<div>', {id: ('text-box'), class:"ans-box"}));
	$("#text-box")[0].style.marginTop = "50px";
	$("#text-box")[0].style.marginBottom = "50px";
	$("#text-box")[0].style.height= "auto";
*/

//	emailForm();

	box[0].style.display = "inline-block";
}

function emailForm(){
	var form = document.createElement('form');
	form.action = 'send.php';
	form.method='post';
	$("#finish").append(form);
	var input = document.createElement('input');
	input.id = "email-text";
	input.type = 'text';
	input.name = 'email';
	input.placeholder="Укажите ваш email";
	form.append(input);
	var button = document.createElement('input');
	button.type = "submit";
	button.id="email-button";
	button.value = " ";
	form.append(button);
}


start(0);
