ymaps.ready(init);

function init() {

	var objects = '[\
		{"id": 0,	"latitude": 55.751916,	"longitude": 37.859014,		"city": "Reutov",			"name": "Салон красоты «Ангел»",					"filter_product": [],									"address": "г. Реутов, ул. Октября, владение 10, тц Экватор, 4 этаж",		"phone": "+7 (495) 777-64-54"						},\
		{"id": 1,	"latitude": 55.733177,	"longitude": 37.592275,		"city": "Moscow",			"name": "Салон красоты «Акварель»",					"filter_product": ["lotions"],							"address": "г. Москва, Комсомольский проспект, 4. ТЦ Акрополь",				"phone": "+7 (499) 245-00-05"						},\
		{"id": 2,	"latitude": 55.738912,	"longitude": 37.582074,		"city": "Moscow",			"name": "Студия красоты «Британа»",					"filter_product": ["sprays"],							"address": "г. Москва, улица Бурденко, 14",									"phone": "+7 (499) 248-24-82"						},\
		{"id": 3,	"latitude": 55.746367,	"longitude": 37.659101,		"city": "Moscow",			"name": "Студия моментального загара «Веснушка»",	"filter_product": ["instant_tan"],						"address": "г. Москва, Большой Дровяной пер., д.20с2, офис 2",				"phone": "+7 (985) 225-26-76"						},\
		{"id": 4,	"latitude": 55.768774,	"longitude": 37.604853,		"city": "Moscow",			"name": "Студия моментального загара «Веснушка»",	"filter_product": ["lotions", "sprays"],				"address": "г. Москва, Дегтярный переулок, д.10 стр.2, в салоне Niki Nail",	"phone": "+7 (985) 225-26-76"						},\
		{"id": 5,	"latitude": 59.926833,	"longitude": 30.375582,		"city": "St_Petersburg",	"name": "Студия моментального загара «Веснушка»",	"filter_product": [],									"address": "г. Санкт-Петербург, Невский проспект, 137",						"phone": "+7 (981) 158-22-01"						},\
		{"id": 6,	"latitude": 55.916891,	"longitude": 37.759278,		"city": "Mytischi",			"name": "Студия загара «Жара»",						"filter_product": [],									"address": "г. Мытищи, Шараповский проезд, дом 2, ТЦ Красный Кит",			"phone": "+7 (499) 990-09-90"						},\
		{"id": 7,	"latitude": 55.754709,	"longitude": 37.634635,		"city": "Moscow",			"name": "Имидж-студия КраSота",						"filter_product": ["lotions", "sprays", "instant_tan"],	"address": "г. Москва, Лубянский проезд, д.25",								"phone": "+7 (495) 625-11-96, +7 (495) 625-11-97"	},\
		{"id": 8,	"latitude": 55.787686,	"longitude": 37.559366,		"city": "Moscow",			"name": "Имидж-студия КраSота",						"filter_product": [],									"address": "г. Москва, Ленинградский проспект, д.33, корп.5",				"phone": "+7 (495) 945-93-43, +7 (499) 940-71-71"	},\
		{"id": 9,	"latitude": 43.800749,	"longitude": 131.976893,	"city": "Ussuriysk",		"name": "Студия красоты «МатрёShка»",				"filter_product": [],									"address": "г. Уссурийск, ул. Пушкина, 152",								"phone": "+7 (924) 723-00-23, 26-99-98"				},\
		{"id": 10,	"latitude": 56.865497,	"longitude": 53.208168,		"city": "Izhevsk",			"name": "ZagarClubШоколад (Прядки в порядке)",		"filter_product": [],									"address": "г. Ижевск, ул. Пушкинская, 268",								"phone": "+7 (341) 224-66-40"						},\
		{"id": 11,	"latitude": 55.648081,	"longitude": 37.339944,		"city": "Moscow",			"name": "Интернет-магазин SweetZagar",				"filter_product": [],									"address": "г. Москва, ул. Лукинская, д. 14, корп. 1",						"phone": "+7 (495) 799-82-77"						},\
		{"id": 12,	"latitude": 57.160455,	"longitude": 65.552764,		"city": "Tyumen",			"name": "SunKiss",									"filter_product": [],									"address": "г. Тюмень, Свердлова, 1",										"phone": "+7 (922) 288-68-86, +7 (345) 298-99-85"	},\
		{"id": 13,	"latitude": 54.695157,	"longitude": 55.984319,		"city": "Ufa",				"name": "Студия Загара «Шоколад»",					"filter_product": [],									"address": "г. Уфа, ул. Загира Исмагилова, 5",								"phone": "+7 (937) 357-89-89"						},\
		{"id": 14,	"latitude": 54.757320,	"longitude": 56.035577,		"city": "Ufa",				"name": "Студия Загара «Шоколад»",					"filter_product": [],									"address": "г. Уфа, ул. Энтузиастов, 20, ТРЦ Планета",						"phone": "+7 (937) 357-89-89"						},\
		{"id": 15,	"latitude": 55.761860,	"longitude": 37.636558,		"city": "Moscow",			"name": "Илона",									"filter_product": [],									"address": "г. Москва, Кривоколенный переулок 12с3",						"phone": "+7 (968) 945-71-28"						},\
		{"id": 16,	"latitude": 53.210481,	"longitude": 50.124615,		"city": "Samara",			"name": "SunSpray",									"filter_product": [],									"address": "г. Самара, ул. Лесная, 11 А",									"phone": "+7 (927) 761-59-13"						},\
		{"id": 17,	"latitude": 43.046266,	"longitude": 44.634042,		"city": "Vladikavkaz",		"name": "Студия загара и красоты ШОКОЛАD",			"filter_product": [],									"address": "г. Владикавказ, ул.Владикавказская 25б",						"phone": "+7 (8672) 29-29-09, +7 (963) 376-01-01"	},\
		{"id": 18,	"latitude": 55.743354,	"longitude": 37.650581,		"city": "Moscow",			"name": "Студия моментального загара «Черника»",	"filter_product": [],									"address": "г. Москва, Верхняя Радищевская 16с2",							"phone": "+7 (925) 285-27-66"						},\
		{"id": 19,	"latitude": 45.073045,	"longitude": 38.977513,		"city": "Krasnodar",		"name": "Студия моментального загара «Черника»",	"filter_product": [],									"address": "г. Краснодар, проезд Репина 40 цок.4",							"phone": "+7 (918) 319-29-52"						},\
		{"id": 20,	"latitude": 52.517474,	"longitude": 103.838653,	"city": "Angarsk",			"name": "Салон красоты Forever Beautiful.",			"filter_product": [],									"address": "г. Ангарск. 30 микрорайон, дом 9, этаж 2",						"phone": "+7 (950) 063-50-09"						}\
	]';
	
	var filterItems = {
		lotions: [],
		sprays: [],
		instant_tan: []
	}

	var cities = {
		Kazan: {plcm: "", items: []}, 
		Moscow: {plcm: "", items: []}, 
		Reutov: {plcm: "", items: []}, 
		St_Petersburg: {plcm: "", items: []}, 
		Mytischi: {plcm: "", items: []}, 
		Ussuriysk: {plcm: "", items: []}, 
		Izhevsk: {plcm: "", items: []}, 
		Tyumen: {plcm: "", items: []}, 
		Ufa: {plcm: "", items: []}, 
		Samara: {plcm: "", items: []}, 
		Vladikavkaz: {plcm: "", items: []}, 
		Krasnodar: {plcm: "", items: []}, 
		Angarsk: {plcm: "", items: []}
	};

	for (var city in cities) {
		cities[city].plcm = new ymaps.GeoObjectCollection();
	}
	
	objects = JSON.parse(objects);
	objects.forEach(function(item, i, arr) {
		var newPlcm = new ymaps.Placemark([item.latitude, item.longitude], {iconContent: item.id, balloonContent: item.name, hintContent: item.name});
		newPlcm.balloon.events.add("userclose", function(e) {
			if (checkedLi) {
				unCheckItem();
			}
		});
		cities[item.city].plcm.add(newPlcm);
		item.plcm = newPlcm;
		cities[item.city].items.push(item);
		item.filter_product.forEach(function(fitem, fi, farr) {
			filterItems[fitem].push(item);
		});
	});

	//alert(cities["Moscow"].items[0].plcm.getMap);

	var map = new ymaps.Map("map", {
            center: [55.8, 49.1], 
            zoom: 10
        },{
        	geoObjectBalloonOffset: [58,60],
        	geoObjectHideIconOnBalloonOpen: false,
        	geoObjectOpenBalloonOnClick: false
        });

	var ulelem = menu.getElementsByClassName("item_list")[0];
	var city_select = city_filter.getElementsByTagName("select")[0];
	var checkedLi = null;

	var allCheckbox = menu.querySelector('input[name="filter_all"]');
	var checkboxes = menu.querySelectorAll('input[name="filter"]');
	var checkedCount = 0;


	allCheckbox.onclick = function(e) {
		//alert("allCheckbox");

		for (var i = 0; i < checkboxes.length; i++) {
			checkboxes[i].checked = false;
		}
		checkedCount = 0;

		if (!allCheckbox.checked) {
			//значит галочка тут уже была, а пользователь нажал повторно. галочку не убираем
			allCheckbox.checked = true;
		}

		var LIelems = ulelem.getElementsByTagName('LI');
		for (var i = 0; i < LIelems.length; i++) {
			var liElem = LIelems[i];
			liElem.style.display = '';
			liElem.plcm.options.set('visible', true);
		}

		/*
		if (allCheckbox.checked) {
			for (var i = 0; i < checkboxes.length; i++) {
				checkboxes[i].checked = true;
			}
			checkedCount = checkboxes.length;
		} else {
			for (var i = 0; i < checkboxes.length; i++) {
				checkboxes[i].checked = false;
			}
			checkedCount = 0;
		}
		*/
		//updateFilter();
	};

	for (var i = 0; i < checkboxes.length; i++) {
		checkboxes[i].onclick = function (e) {
			var chbox = e.target;

			if (chbox.checked) {
				allCheckbox.checked = false;
				checkedCount++;
				//allCheckbox.checked = (checkedCount == checkboxes.length) ? true : false;

				updateFilter();
			} else {
				if (checkedCount == 1)
					chbox.checked = true;
				else
					checkedCount--;
				//checkedCount--;
				//allCheckbox.checked = false;

				updateFilter();
			}
		};
	}

	function updateFilter() {
		var LIelems = ulelem.getElementsByTagName('LI');
		//alert(LIelems);
		for (var i = 0; i < LIelems.length; i++) {
			var liElem = LIelems[i];
			if (inFilter(liElem)) {
				liElem.style.display = '';
				liElem.plcm.options.set('visible', true);
			} else {
				liElem.style.display = 'none';
				liElem.plcm.options.set('visible', false);
			}
		}
		/*LIelems.forEach(function(liElem) {
			if (inFilter(liElem)) {
				liElem.style.display = '';
				liElem.plcm.options.set('visible', true);
			}
		})*/
		
		/*
		for (var fItem in filterItems) {
			var chbox = document.getElementById(fItem);
			if (chbox.checked) {
				filterItems[fItem].forEach(function (item) {
					if (map.geoObjects.)
				});
			}
		}*/
	}

	function inFilter(elem) {
		for (var i = 0; i < checkboxes.length; i++) {
			if (checkboxes[i].checked && elem.item.filter_product.indexOf(checkboxes[i].value) != -1)
				return true;
		}
		return false;
	}

	addPlacemarks("Moscow");
	
	city_select.value = "Moscow";

	city_select.onchange = function(e) {

		removePlacemarks();
		addPlacemarks(city_select.value);

		function removePlacemarks() {
			for (var city in cities) {
				map.geoObjects.remove(cities[city].plcm);
			}
			ulelem.innerHTML="";
		}
	};

	ulelem.onclick = function(e) {
		var lielem = e.target;
		
		if (lielem.tagName != "LI")
			return;
		
		if (checkedLi == lielem) {
			return;
		}

		if (checkedLi) 
			unCheckItem();

		checkItem(lielem);
		
	};

	function addPlacemarks(city) {
		//checkedCount = checkboxes.length;
		allCheckbox.checked = true;
		checkedCount = 0;
		for (var i = 0; i < checkboxes.length; i++) {
			checkboxes[i].checked = false;
		}

		map.geoObjects.add(cities[city].plcm);
		map.setBounds(map.geoObjects.getBounds());

		outputList(cities[city].items);
	}

	function unCheckItem() {
		checkedLi.classList.remove("checked");
		checkedLi.plcm.options.set("preset", "islands#blueIcon");
		checkedLi.plcm.balloon.close();
		checkedLi = null;
	}

	function checkItem(lielem) {
		lielem.classList.add("checked");
		lielem.plcm.balloon.open();
		checkedLi = lielem;
		lielem.plcm.options.set("preset", "islands#greenIcon");
	}

	function outputList(itemList) {
		itemList.forEach(function(item, i, arr) {
			var newLi = document.createElement('li');
			newLi.innerHTML = "<strong>" + item.id + "</strong> " + item.name + "<br/>" + item.filter_product.toString();
			newLi.item = item;
			newLi.plcm = item.plcm;
			ulelem.appendChild(newLi);
			newLi.plcm.events.add("click", function(e) {
				
				if (checkedLi == newLi) {
					return;
				}

				if (checkedLi)
					unCheckItem();

				checkItem(newLi);
			});
		});
	}

	var myplcm = new ymaps.Placemark([55.733177, 38.592275], {iconContent: "#", balloonContent: "###", hintContent: "###"});
	//map.geoObjects.add(myplcm);
	//myplcm.balloon.setOptions({offset: [20,20]});
	//myplcm.balloon.open();
	/*
	navigator.geolocation.getCurrentPosition(function(position) {
		
		alert(position.coords.longitude);
		
		myPlacemark = new ymaps.Placemark([position.coords.latitude, position.coords.longitude], { hintContent: 'Мое местоположение', balloonContent: 'Я здесь' });
		map.geoObjects.add(myPlacemark);
		
		
		//do_something(position.coords.latitude, position.coords.longitude);
	});
	*/
	
	
	//myPlacemark = new ymaps.Placemark([55.76, 37.64], { hintContent: 'Москва!', balloonContent: 'Столица России' });
	
	/*
    var geolocation = ymaps.geolocation;
        myMap = new ymaps.Map('map', {
            center: [55, 34],
            zoom: 6
        }, {
            searchControlProvider: 'yandex#search'
        });

	
    // Сравним положение, вычисленное по ip пользователя и
    // положение, вычисленное средствами браузера.
    geolocation.get({
        provider: 'yandex',
        mapStateAutoApply: true
    }).then(function (result) {
        // Красным цветом пометим положение, вычисленное через ip.
        result.geoObjects.options.set('preset', 'islands#redCircleIcon');
        result.geoObjects.get(0).properties.set({
            balloonContentBody: 'Мое местоположение'
        });
        myMap.geoObjects.add(result.geoObjects);
    });

    geolocation.get({
        provider: 'browser',
        mapStateAutoApply: true
    }).then(function (result) {
        // Синим цветом пометим положение, полученное через браузер.
        // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.
        result.geoObjects.options.set('preset', 'islands#greenCircleIcon');
        myMap.geoObjects.add(result.geoObjects);
    });

    */
	/*
	navigator.geolocation.getCurrentPosition(function(position) {
		
		//alert(position.coords.longitude);
		
		myPlacemark = new ymaps.Placemark([position.coords.latitude+0.2, position.coords.longitude], { hintContent: 'Мое местоположение', balloonContent: 'Я здесь' });
		myMap.geoObjects.add(myPlacemark);
		
		
		//do_something(position.coords.latitude, position.coords.longitude);
	});*/

}
