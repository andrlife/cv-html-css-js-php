//Made andrlife https://github.com/andrlife

const langArr = {
    "titl" : {
        "en": "Resume for work",
        "ua": "Резюме на роботу",
        "ru": "Резюме на работу",
    },
    "kay1" : {
        "en": "Andrii Sokil",
        "ua": "Андрій Сокіл",
        "ru": "Андрей Сокол",
    },
    "kay2" : {
        "en": "I am learning frontend development",
        "ua": "Я вивчаю frontend розробку",
        "ru": "Я изучаю frontend разработку",
    },
    "kay3" : {
        "en": "I really enjoyed the programming",
        "ua": "Мені дуже сподобалося програмування",
        "ru": "Мне очень сильно понравилось программирование",
    },
    "kay4" : {
        "en": "I am currently studying the React JavaScript library",
        "ua": "Зараз займаюсь вивченням JavaScript-бібліотеки React",
        "ru": "Сейчас занимаюсь изучением JavaScript-библиотеки React",
    },
    "kay5" : {
        "en": "At the same time I do projects for more practice and work with code",
        "ua": "Паралельно роблю проекти для більшої практики та роботи з кодом",
        "ru": "Паралельно делаю проекты для большей практики и работы с кодом",
    },
    "contact" : {
        "en": "Feedback",
        "ua": "Зворотній зв'язок",
        "ru": "Обратная связь",
    },
    "kay6" : {
        "en": "Work experience",
        "ua": "Досвід роботи",
        "ru": "Опыт Работы",
    },
    "kay7" : {
        "en": "HTML/CSS3/JS/PHP courses...",
        "ua": "Курси HTML/CSS3/JS/PHP...",
        "ru": "Курсы HTML/CSS3/JS/PHP...",
    },
    "kay8" : {
        "en": "Front End Web Development",
        "ua": "Front End Web Development",
        "ru": "Front End Web Development",
    },
    "kay9" : {
        "en": "2022 - 2023y",
        "ua": "2022 - 2023р",
        "ru": "2022 - 2023г",
    },
    "kay10" : {
        "en": "Video surveillance",
        "ua": "Відеоспостереження",
        "ru": "Видеонаблюдение",
    },
    "kay11" : {
        "en": "Engineer",
        "ua": "Інженер",
        "ru": "Инженер",
    },
    "kay12" : {
        "en": "2020 - 2022y",
        "ua": "2020 - 2022р",
        "ru": "2020 - 2022г",
    },
    "kay13" : {
        "en": "Service Center",
        "ua": "Сервісний центр",
        "ru": "Сервисный центр",
    },
    "kay14" : {
        "en": "Repair of machinery",
        "ua": "Ремонт техніки",
        "ru": "Ремонт техники",
    },
    "kay15" : {
        "en": "2018 - 2020y",
        "ua": "2018 - 2020р",
        "ru": "2018 - 2020г",
    },
    "kay16" : {
        "en": "Bank Credit Dnepr",
        "ua": "Банк Кредит Дніпро",
        "ru": "Банк Кредит Днепр",
    },
    "kay17" : {
        "en": "Technical Support Specialist",
        "ua": "Фахівець з технічної підтримки",
        "ru": "Специалист технической поддержки",
    },
    "kay18" : {
        "en": "2017 - 2018y",
        "ua": "2017 - 2018р",
        "ru": "2017 - 2018г",
    },
    "kay19" : {
        "en": "Additional Information",
        "ua": "Додаткова інформація",
        "ru": "Дополнительная информация",
    },
    "kay20" : {
        "en": "Education",
        "ua": "Освіта",
        "ru": "Образование",
    },
    "kay21" : {
        "en": "Educational Institution:",
        "ua": "Навчальний заклад:",
        "ru": "Учебное заведение:",
    },
    "kay22" : {
        "en": "Dnepropetrovsk Industrial College",
        "ua": "Дніпропетровський індустріальний коледж",
        "ru": "Днепропетровский Индустриальный Колледж",
    },
    "kay23" : {
        "en": "End Date:",
        "ua": "Дата закінчення:",
        "ru": "Дата окончания:",
    },
    "kay24" : {
        "en": "June 2015",
        "ua": "червень 2015 року",
        "ru": "июнь 2015 года",
    },
    "kay25" : {
        "en": "Faculty:",
        "ua": "Факультет:",
        "ru": "Факультет:",
    },
    "kay26" : {
        "en": "Managing",
        "ua": "Менеджмент",
        "ru": "Менеджмент",
    },
    "kay27" : {
        "en": "Specialty:",
        "ua": "Спеціальність:",
        "ru": "Специальность:",
    },
    "kay28" : {
        "en": "Support for information systems and networks",
        "ua": "Підтримка інформаційних систем та мереж",
        "ru": "Поддержка информационных систем и сетей",
    },
    "kay29" : {
        "en": "Form of study:",
        "ua": "Форма навчання:",
        "ru": "Форма обучения:",
    },
    "kay30" : {
        "en": "Full time",
        "ua": "Мова",
        "ru": "Очная",
    },
    "kay31" : {
        "en": "Computer skills:",
        "ua": "Комп'ютерні навички:",
        "ru": "Компьютерные навыки:",
    },
    "kay32" : {
        "en": "Microsoft Word, Microsoft Excel, Microsoft Power Point, Photoshop, novicat for sql, html, css3, bootstrap 4, js junior, PHP.  Computer repair and maintenance, configuration of CCTV cameras, installation of cameras and much more ...",
        "ua": "Microsoft Word, Microsoft Excel, Microsoft Power Point, Photoshop, novicat for sql, html, css3, bootstrap 4, js junior, PHP... ремонт та обслуговування комп'ютерів, налаштування камер відеонаближення, встановлення камер та багато іншого...",
        "ru": "Microsoft Word, Microsoft Excel, Microsoft Power Point, Photoshop, novicat for sql, html, css3, bootstrap 4, js junior, PHP... ремонт и обслуживание компьютеров, настройка камер видеонаблидения, установка камер и многое другое...",
    },
    "kay33" : {
        "en": "Personal qualities:",
        "ua": "Особисті якості:",
        "ru": "Личные качества:",
    },
    "kay34" : {
        "en": "No bad habits (except icos), energy, initiative, independence, responsibility, communication skills, quick learning",
        "ua": "Відсутність шкідливих звичок (крім icos), енергійність, ініціативність, самостійність, відповідальність, комунікабельність, швидке навчання",
        "ru": "Отсутствие вредных привычек (кроме icos), энергичность, инициативность, самостоятельность, ответственность, коммуникабельность, быстрая обучаемость",
    },
    "kay35" : {
        "en": "Driver's license (category): B",
        "ua": "Наявність прав водія (категорії): B",
        "ru": "Наличие водительских прав (категории): B",
    },
    "kay36" : {
        "en": "My Hobbies",
        "ua": "Мої хобі",
        "ru": "Мои Хобби",
    },
    "kay37" : {
        "en": "Aeromodelling",
        "ua": "Авіамоделізм",
        "ru": "Авиамоделизм",
    },
    "kay38" : {
        "en": "Creation and piloting of remotely piloted aircraft.",
        "ua": "Створення та пілотування дистанційно керованих літальних апаратів.",
        "ru": "Создание и пилотирование дистанционно управляемых летательных аппаратов.",
    },
    "kay39" : {
        "en": "Travels",
        "ua": "Подорожі",
        "ru": "Путишествия",
    },
    "kay40" : {
        "en": "I like to travel around Europe or just go out in nature.",
        "ua": "Люблю по можливості подорожувати Європою або просто виходити на природу.",
        "ru": "Люблю по возможности путешествовать по европе либо просто выходить на природу.",
    },
    "kay41" : {
        "en": "Cars",
        "ua": "Автомобілі",
        "ru": "Автомобили",
    },
    "kay42" : {
        "en": "I like to repair the car myself, it distracts from the daily grind.",
        "ua": "Подобається самому ремонтувати машину, це відволікає від повсякденної рутини.",
        "ru": "Нравится самому ремонтировать машину, это отвлекает от повседневной рутины.",
    },
    "kay43" : {
        "en": "DIY",
        "ua": "Саморобки",
        "ru": "Cамоделки",
    },
    "kay44" : {
        "en": "There are times I make useful homemade things with my own hands at home",
        "ua": "Бувають моменти, роблю корисні саморобки своїми руками в домашніх умовах.",
        "ru": "Бывают моменты делаю полезные самоделки своими руками в домашних условиях.",
    },
    "kay45" : {
        "en": "My projects",
        "ua": "Мої проекти",
        "ru": "Мои проекты",
    },
    "kay46" : {
        "en": "There are more projects, these have been doing for a long time gradually while learning how to program)",
        "ua": "Є ще проекти, ці робив давно поступово, поки вчив програмування)",
        "ru": "Есть еще проекты, эти делал давно постепенно пока учил программирование)",
    },
    "kay47" : {
        "en": "Contact Me",
        "ua": "Зв'язатися зі мною",
        "ru": "Связаться со мной",
    },
    "kay48" : {
        "en": "Your Name",
        "ua": "Ваше ім'я",
        "ru": "Ваше Имя",
    },
    "kay49" : {
        "en": "Your phone number",
        "ua": "Ваш номер телефону",
        "ru": "Ваш номер телефона",
    },
    "kay50" : {
        "en": "Enter E-mail",
        "ua": "Введіть E-mail",
        "ru": "Введите E-mail",
    },
    "kay51" : {
        "en": "Company name",
        "ua": "Назва компанії",
        "ru": "Название компании",
    },
    "kay52" : {
        "en": "Your message:",
        "ua": "Ваше повідомлення:",
        "ru": "Ваше сообщение:",
    },
    "kay53" : {
        "en": "Send",
        "ua": "Відправити",
        "ru": "Отправить",
    },
    "kay54" : {
        "en": "Show more",
        "ua": "Показати ще",
        "ru": "Показить еще",
    },
    "kay55" : {
        "en": "Languages",
        "ua": "Мова",
        "ru": "Язык",
    },

};