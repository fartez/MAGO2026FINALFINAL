import { Language } from '../contexts/LanguageContext';

/** The original publication this page points at. */
export const FORBES_ARTICLE = {
  url: 'https://forbes.ge/en/redefining-ophthalmology-awakening-dormant-cells/',
  author: 'Anita Muskaria',
  publisher: 'Forbes Georgia',
  publishedIso: '2026-04-27',
  photo: '/forbes/maka-gogiashvili-forbes',
  equipment: '/forbes/magotherapy-equipment',
  logo: '/forbes/forbes-georgia-logo',
};

/** One canonical URL per language, cross-linked with hreflang. */
export const FORBES_PATHS: Record<Language, string> = {
  ge: '/ka/forbes/oftalmologiis-akhali-khedva',
  ru: '/ru/forbes/novyy-vzglyad-na-oftalmologiyu',
  en: '/en/forbes/redefining-ophthalmology-awakening-dormant-cells',
};

export interface ForbesSection {
  heading?: string;
  paragraphs: string[];
  /** Rendered as a pull quote rather than a paragraph. */
  quote?: string;
}

const forbesTranslations = {
  ge: {
    seoTitle: 'ოფთალმოლოგიის ახალი ხედვა — Forbes Georgia MaGo-ს შესახებ | MaGo',
    seoDescription:
      'Forbes Georgia-ს პუბლიკაცია მაკა გოგიაშვილსა და მაგოთერაპიაზე: როგორ ააქტიურებს რეგენერაციული ოფთალმოლოგია ბადურის „მძინარე“ უჯრედებს ქირურგიისა და მედიკამენტების გარეშე.',
    seoKeywords:
      'ოფთალმოლოგია, რეგენერაციული ოფთალმოლოგია, მხედველობის აღდგენა, ბადურის დაავადებები, ბადურის რეგენერაცია, ამბლიოპია, ნისტაგმი, გლაუკომა, მაგოთერაპია, MaGo, მაკა გოგიაშვილი, მხედველობის ნერვი, ბადურის უჯრედები, ინოვაციური ოფთალმოლოგია',
    h1: 'ოფთალმოლოგიის ახალი ხედვა: „მძინარე“ უჯრედების გააქტიურება',
    h2: 'Forbes Georgia მაკა გოგიაშვილსა და მაგოთერაპიაზე',
    ogTitle: 'ოფთალმოლოგიის ახალი ხედვა: „მძინარე“ უჯრედების გააქტიურება — Forbes Georgia',
    ogDescription:
      'მედიცინის მეცნიერებათა დოქტორი მაკა გოგიაშვილი და მაგოთერაპია Forbes Georgia-ს პუბლიკაციაში: უჯრედული რეგენერაცია, 12 საერთაშორისო პატენტი და 10 000-ზე მეტი შემთხვევა.',
    imageAlt: 'მაკა გოგიაშვილი, MD, DSc — კლინიკა „ახალი ტექნოლოგიები – MaGo“, Forbes Georgia-ს პუბლიკაცია',
    equipmentAlt: 'მაგოთერაპიის აპარატურა პროცედურის დროს — კლინიკა „ახალი ტექნოლოგიები – MaGo“',
    logoAlt: 'Forbes Georgia-ს ლოგო',

    publishedLabel: 'გამოქვეყნდა',
    authorLabel: 'ავტორი',
    publishedDate: '2026 წლის 27 აპრილი',
    sourceNote: 'პუბლიკაცია პირველად გამოქვეყნდა Forbes Georgia-ზე.',
    readFull: 'წაიკითხეთ სრული სტატია Forbes Georgia-ზე',
    backToMedia: '← მედიაში დაბრუნება',

    lead: 'თანამედროვე ოფთალმოლოგიაში მხედველობის შეუქცევადი დაკარგვის კონცეფცია სულ უფრო მეტად გადაიხედება. კლინიკური კვლევებისა და ტექნოლოგიების მიღწევები ეჭვქვეშ აყენებს ძველ შეხედულებებს უჯრედების დეგენერაციის შესახებ და ყურადღებას ამახვილებს იმ შესაძლებლობაზე, რომ ბადურის გარკვეული უჯრედები შეიძლება დარჩნენ სიცოცხლისუნარიანნი, თუმცა ფუნქციურად არააქტიურნი. ეს განვითარებადი პერსპექტივა ცვლის მხედველობის დარღვევის აღქმას და, პოტენციურად, მისი მკურნალობის გზებსაც.',

    sections: [
      {
        paragraphs: [
          'მედიცინის მეცნიერებათა დოქტორი, პროფესორი მაკა გოგიაშვილი არის საერთაშორისო თვალის კლინიკა „ახალი ტექნოლოგიები – MaGo“-ს დამფუძნებელი. მან განათლება მიიღო ცნობილ ოფთალმოლოგ სვიატოსლავ ფიოდოროვთან, ხოლო თავისი სამეცნიერო გამოცდილება კიდევ უფრო გააღრმავა აკადემიკოს ნატალია ბეხტერევასთან — გამოჩენილ ნეიროფიზიოლოგთან და ადამიანის ტვინის ინსტიტუტის დამფუძნებელთან — ერთწლიანი მუშაობისა და კვლევის პროცესში. ამ ბაზისზე დაყრდნობით, მან შეიმუშავა არაქირურგიული მეთოდი, სახელწოდებით „მაგოთერაპია“, რომელიც ფოკუსირებულია უჯრედულ რეგენერაციაზე. ამ მიდგომას ზურგს უმაგრებს 12 საერთაშორისო პატენტი და იგი გამოყენებულია 10 000-ზე მეტ შემთხვევაში მთელ მსოფლიოში, მათ შორის ისეთ პაციენტებშიც, რომლებიც ადრე განუკურნებლად ითვლებოდნენ.',
        ],
      },
      {
        heading: 'კლინიკური პერსპექტივის ცვლილება',
        paragraphs: [
          'მსოფლიოში აღიარებული მიდგომები მხედველობის დაკარგვისადმი ხშირად ეყრდნობა უჯრედების შეუქცევადი დაზიანების პრეზუმფციას. დოქტორ გოგიაშვილის მეთოდოლოგია კი განსხვავებულ წინაპირობაზეა დაფუძნებული: ზოგიერთი დაზიანებული უჯრედი შეიძლება კვლავ სიცოცხლისუნარიანი, თუმცა არააქტიური იყოს.',
          'ეს კონცეფცია ეფუძნება პარაბიოზის თეორიას — ფიზიოლოგიურ მდგომარეობას, როდესაც უჯრედები კი არ მკვდარან, არამედ ცოცხლები არიან, მაგრამ იმყოფებიან „მიძინებულ“ და, შესაბამისად, უფუნქციო მდგომარეობაში. ეს თეორია, რომელიც თავდაპირველად ნეიროფიზიოლოგმა ნიკოლაი ვვედენსკიმ წამოაყენა, ვარაუდობს, რომ გარკვეულ პირობებში უჯრედული აქტივობის აღდგენა შესაძლებელია.',
        ],
        quote: '„ჩვენ არ ვანაცვლებთ ბიოლოგიურ ფუნქციას. ჩვენ არ ვცდილობთ ბუნების შეცვლას; ჩვენ მას ხელახლა ჩართვის შანსს ვაძლევთ“.',
      },
      {
        paragraphs: [
          'იგი ხაზგასმით აღნიშნავს, რომ ეს მიდგომა ექსკლუზიურად „MaGo“-ს კლინიკაში გამოიყენება, სადაც საავტორო, დაპატენტებული მეთოდით ხდება ორგანიზმის გამოუყენებელი ბიოლოგიური რესურსების იდენტიფიცირება და გააქტიურება — ეს არის შესაძლებლობები, რომლებიც ყველა ადამიანში არსებობს, თუმცა სხვადასხვა ხარისხით. კლინიკა ასევე გთავაზობთ ადრეულ, პერსონალიზებულ პროგნოზს, ხშირად პირველივე კონსულტაციიდან, რაც საშუალებას იძლევა შეფასდეს მხედველობის პოტენციური გაუმჯობესება. საერთაშორისო პაციენტებისთვის ამ შეფასების გაკეთება დისტანციურადაც არის შესაძლებელი, მათ მშობლიურ ქვეყანაში ჩატარებული სამედიცინო გამოკვლევების საფუძველზე.',
          'მაგოთერაპია ამ კონცეფციას არაინვაზიური პროცესით ახორციელებს, რომელიც შექმნილია ბადურის უჯრედებში მეტაბოლური აქტივობის სტიმულირებისთვის. კლინიკის განცხადებით, მეთოდი არ საჭიროებს ქირურგიულ ჩარევას, ფარმაცევტულ პრეპარატებს ან კორექციულ ლინზებს; ამის ნაცვლად, იგი იყენებს ინოვაციურ აპარატურას ნერვული გზების გასწვრივ უჯრედული პროცესების გასააქტიურებლად.',
          'მკურნალობა მიმართულია უჯრედულ დონეზე ჟანგბადით მომარაგებისა და საკვები ნივთიერებების მიწოდების გაუმჯობესებაზე — ეს პროცესები მიმდინარეობს მილიწამებში (დაახლოებით წამის მეორიათასედში) — რაც პოტენციურად აღადგენს ფუნქციურ სიგნალებს თვალსა და ტვინს შორის. ეს სწრაფი ფიზიოლოგიური პასუხი ხსნის იმას, თუ რატომ შეიძლება პაციენტებმა იგრძნონ მხედველობის გაზომვადი გაუმჯობესება პროცედურის დაწყებიდან სულ რაღაც ერთ საათში. დოქტორი გოგიაშვილი ხაზს უსვამს, რომ მხედველობა არა მხოლოდ ოპტიკური, არამედ ნევროლოგიური პროცესია:',
        ],
        quote: '„თვალი გადასცემს ინფორმაციას, მაგრამ ინტერპრეტაცია ტვინში ხდება. როდესაც ეს გზა დარღვეულია, მხედველობის სიცხადე ზარალდება“.',
      },
      {
        paragraphs: [
          'მეთოდი გამოიყენება პათოლოგიების ფართო სპექტრის დროს — მათ შორის ბადურის დისტროფიის, ნისტაგმის, გლაუკომისა და პოსტოპერაციული გართულებების დროს — ვინაიდან მაგოთერაპიაში შედეგს განსაზღვრავს თავად ორგანიზმის სამკურნალო რესურსები, მიუხედავად დაავადების ეტიოლოგიის, ხანგრძლივობის, სიმძიმისა თუ პაციენტის ასაკისა. მკურნალობის პროტოკოლები ინდივიდუალურია და ეფუძნება დიაგნოსტიკურ შეფასებებსა და პაციენტის სპეციფიკურ ფაქტორებს.',
          'კლინიკის თანახმად, პაციენტები შედეგს მკურნალობის სრული კურსის დასრულებამდე გრძნობენ. პირველივე ვიზიტისას დგინდება პროგნოზი ორგანიზმის ხელმისაწვდომი რესურსების გათვალისწინებით. მეორე დღეს ტარდება სატესტო მაგოთერაპიის პროცედურა — და ერთ საათში პაციენტები, როგორც წესი, აღნიშნავენ მხედველობის შესამჩნევ გაუმჯობესებას, რაც ხასიათდება სინათლის აფეთქებების/ციმციმის მატებით. მკურნალობის პროგრესირებასთან ერთად, ამ შეგრძნებების სიხშირე და ხანგრძლივობა იზრდება, რადგან სულ უფრო მეტი უჯრედი უბრუნდება აქტივობას. ეს სწრაფი რეაგირება აიხსნება უჯრედული მეტაბოლიზმის აღდგენით წამის 1/2000 ნაწილში, რა დროშიც ტვინი ამუშავებს იმპულსს და აღადგენს მკვეთრ ვიზუალურ გამოსახულებას; ეს ხსნის პოზიტიურ შედეგებს იმ პათოლოგიების დროსაც კი, რომლებიც ადრე განუკურნებლად ითვლებოდა. მეთოდის არაინვაზიური ბუნება მისი განმსაზღვრელი ნიშანია. ფარმაკოლოგიური ან ქირურგიული ჩარევის გარეშე, გართულებების რისკები და ხანგრძლივი რეაბილიტაციის პერიოდი გამოირიცხება, რადგან მაგოთერაპია ფიზიოლოგიური, სრულიად ბუნებრივი მეთოდია.',
          'დოქტორი გოგიაშვილი აღნიშნავს, რომ მკურნალობის შედეგებზე დაკვირვება დროთა განმავლობაში ხდება, ძირითადი აქცენტით დაავადების პროგრესირების შენელებაზე ან სტაბილიზაციაზე. მისი კლინიკური დაკვირვებით, მაგოთერაპია აჩერებს ან ანელებს დაავადების პროგრესირებას. ვინაიდან მეთოდი სრულიად ფიზიოლოგიურია, მისი გაგრძელება შესაძლებელია იმდენ ხანს, რამდენიც საჭიროა სასურველი შედეგის მისაღწევად. კლინიკა ფლობს გრძელვადიან დაკვირვების მონაცემებს, რომლებიც ორ ათწლეულზე მეტს მოიცავს — ეს ყველაფერი გამყარებულია სამეცნიერო დოკუმენტაციით, კლინიკური ჩანაწერებითა და ფოტოგალერეით, რომელიც ხელმისაწვდომია მათ YouTube არხზე: Magotherapy Eye Clinic | Dr. Maka Gogiashvili.',
          'ამ მიდგომის საკვანძო კომპონენტია პერსონალიზაცია — მკურნალობის პროტოკოლების ადაპტირება ინდივიდუალურ ფიზიოლოგიურ პასუხებზე. ეს განსაკუთრებით აქტუალურია იმ შემთხვევებში, როდესაც სტანდარტული მკურნალობის მეთოდები შეზღუდულ შესაძლებლობებს იძლევა.',
        ],
      },
      {
        heading: 'მომავლის პერსპექტივა',
        paragraphs: [
          'ოფთალმოლოგიის განვითარებასთან ერთად, რეგენერაციული მიდგომები სულ უფრო მეტ ყურადღებას იპყრობს არსებული მკურნალობის მოდელების ტრანსფორმაციის პოტენციალის გამო.',
          'დოქტორი გოგიაშვილი მხარს უჭერს ადრეულ დიაგნოსტიკასა და პროაქტიულ მოვლას და ხაზს უსვამს დროული ჩარევის მნიშვნელობას:',
        ],
        quote: '„სანამ უჯრედი სიცოცხლისუნარიანია, აღდგენის პოტენციალი არსებობს. იმოქმედეთ მანამ, სანამ მხედველობა მთლიანად დაიკარგება, რადგან როდესაც საქმე მიძინებული უჯრედების გამოღვიძებას ეხება, თითოეულ დღეს გადამწყვეტი მნიშვნელობა აქვს“.',
      },
    ] as ForbesSection[],
  },

  ru: {
    seoTitle: 'Новый взгляд на офтальмологию — Forbes Georgia о MaGo | MaGo',
    seoDescription:
      'Публикация Forbes Georgia о Маке Гогиашвили и Маготерапии: как регенеративная офтальмология пробуждает «спящие» клетки сетчатки без операций и медикаментов.',
    seoKeywords:
      'офтальмология, регенеративная офтальмология, восстановление зрения, заболевания сетчатки, регенерация сетчатки, амблиопия, нистагм, глаукома, маготерапия, MaGo, Мака Гогиашвили, зрительный нерв, клетки сетчатки, инновационная офтальмология',
    h1: 'Новый взгляд на офтальмологию: пробуждение «спящих» клеток',
    h2: 'Forbes Georgia о Маке Гогиашвили и Маготерапии',
    ogTitle: 'Новый взгляд на офтальмологию: пробуждение «спящих» клеток — Forbes Georgia',
    ogDescription:
      'Доктор медицинских наук Мака Гогиашвили и Маготерапия в публикации Forbes Georgia: клеточная регенерация, 12 международных патентов и более 10 000 случаев.',
    imageAlt: 'Мака Гогиашвили, MD, DSc — клиника «Новые технологии – MaGo», публикация Forbes Georgia',
    equipmentAlt: 'Аппаратура Маготерапии во время процедуры — клиника «Новые технологии – MaGo»',
    logoAlt: 'Логотип Forbes Georgia',

    publishedLabel: 'Опубликовано',
    authorLabel: 'Автор',
    publishedDate: '27 апреля 2026 года',
    sourceNote: 'Публикация впервые вышла на Forbes Georgia.',
    readFull: 'Читать полную статью на Forbes Georgia',
    backToMedia: '← Вернуться в раздел СМИ',

    lead: 'В современной офтальмологии концепция необратимой потери зрения пересматривается всё чаще. Достижения клинических исследований и технологий ставят под сомнение давние представления о дегенерации клеток и обращают внимание на возможность того, что отдельные клетки сетчатки могут оставаться жизнеспособными, хотя и функционально неактивными. Эта развивающаяся точка зрения меняет понимание нарушений зрения и, потенциально, подходы к их лечению.',

    sections: [
      {
        paragraphs: [
          'Доктор медицинских наук, профессор Мака Гогиашвили — основатель международной глазной клиники «Новые технологии – MaGo». Она училась у известного офтальмолога Святослава Фёдорова, а свой научный опыт углубила за год работы и исследований с академиком Натальей Бехтеревой — выдающимся нейрофизиологом и основателем Института мозга человека. На этой основе она разработала нехирургический метод под названием «Маготерапия», сфокусированный на клеточной регенерации. Подход подкреплён 12 международными патентами и применён более чем в 10 000 случаев по всему миру, включая пациентов, которые ранее считались неизлечимыми.',
        ],
      },
      {
        heading: 'Смена клинической перспективы',
        paragraphs: [
          'Принятые в мире подходы к потере зрения часто исходят из презумпции необратимого повреждения клеток. Методология доктора Гогиашвили основана на другой предпосылке: некоторые поражённые клетки могут оставаться жизнеспособными, хотя и неактивными.',
          'Эта концепция опирается на теорию парабиоза — физиологического состояния, при котором клетки не мертвы, а живы, но находятся в «спящем» и, следовательно, нефункционирующем состоянии. Теория, первоначально выдвинутая нейрофизиологом Николаем Введенским, предполагает, что при определённых условиях клеточная активность может быть восстановлена.',
        ],
        quote: '«Мы не замещаем биологическую функцию. Мы не пытаемся изменить природу; мы даём ей шанс перезапуститься».',
      },
      {
        paragraphs: [
          'Она подчёркивает, что этот подход применяется исключительно в клинике «MaGo», где авторским запатентованным методом выявляются и активируются неиспользованные биологические ресурсы организма — возможности, которые есть у каждого человека, хотя и в разной степени. Клиника также предлагает ранний персонализированный прогноз, часто уже с первой консультации, что позволяет оценить потенциальное улучшение зрения. Для иностранных пациентов такая оценка возможна и дистанционно — на основании обследований, проведённых в их стране.',
          'Маготерапия реализует эту концепцию через неинвазивный процесс, созданный для стимуляции метаболической активности в клетках сетчатки. По заявлению клиники, метод не требует хирургического вмешательства, фармацевтических препаратов или корригирующих линз; вместо этого используется инновационная аппаратура, активирующая клеточные процессы вдоль нервных путей.',
          'Лечение направлено на улучшение снабжения кислородом и доставки питательных веществ на клеточном уровне — эти процессы происходят за миллисекунды (примерно за двухтысячную долю секунды) — что потенциально восстанавливает функциональные сигналы между глазом и мозгом. Этот быстрый физиологический ответ объясняет, почему пациенты могут ощутить измеримое улучшение зрения всего через час после начала процедуры. Доктор Гогиашвили подчёркивает, что зрение — не только оптический, но и неврологический процесс:',
        ],
        quote: '«Глаз передаёт информацию, но интерпретация происходит в мозге. Когда этот путь нарушен, страдает чёткость зрения».',
      },
      {
        paragraphs: [
          'Метод применяется при широком спектре патологий — включая дистрофии сетчатки, нистагм, глаукому и послеоперационные осложнения — поскольку в маготерапии результат определяют собственные восстановительные ресурсы организма, независимо от этиологии заболевания, его длительности, тяжести и возраста пациента. Протоколы лечения индивидуальны и основаны на диагностических оценках и особенностях конкретного пациента.',
          'По данным клиники, пациенты ощущают результат ещё до завершения полного курса лечения. На первом визите устанавливается прогноз с учётом доступных ресурсов организма. На второй день проводится тестовая процедура маготерапии — и в течение часа пациенты, как правило, отмечают заметное улучшение зрения, характеризующееся усилением вспышек света. По мере продолжения лечения частота и длительность этих ощущений растут, так как всё больше клеток возвращается к активности. Такая быстрая реакция объясняется восстановлением клеточного метаболизма за 1/2000 долю секунды, за которую мозг обрабатывает импульс и восстанавливает чёткое зрительное изображение; это объясняет положительные результаты даже при патологиях, которые ранее считались неизлечимыми. Неинвазивный характер метода — его определяющая черта. Без фармакологического или хирургического вмешательства исключаются риски осложнений и длительный период реабилитации, поскольку маготерапия — физиологический, полностью естественный метод.',
          'Доктор Гогиашвили отмечает, что результаты лечения наблюдаются в динамике, с основным акцентом на замедлении или стабилизации прогрессирования заболевания. По её клиническим наблюдениям, маготерапия останавливает или замедляет прогрессирование болезни. Поскольку метод полностью физиологичен, его можно продолжать столько, сколько необходимо для достижения желаемого результата. Клиника располагает данными долгосрочного наблюдения, охватывающими более двух десятилетий, — всё это подкреплено научной документацией, клиническими записями и фотогалереей, доступной на их YouTube-канале: Magotherapy Eye Clinic | Dr. Maka Gogiashvili.',
          'Ключевой компонент подхода — персонализация, то есть адаптация протоколов лечения к индивидуальным физиологическим реакциям. Это особенно актуально в случаях, когда стандартные методы лечения дают ограниченные возможности.',
        ],
      },
      {
        heading: 'Взгляд в будущее',
        paragraphs: [
          'По мере развития офтальмологии регенеративные подходы привлекают всё больше внимания благодаря их потенциалу преобразовать существующие модели лечения.',
          'Доктор Гогиашвили выступает за раннюю диагностику и проактивный уход, подчёркивая важность своевременного вмешательства:',
        ],
        quote: '«Пока клетка жизнеспособна, потенциал восстановления существует. Действуйте до того, как зрение будет полностью потеряно, потому что, когда речь идёт о пробуждении спящих клеток, каждый день имеет решающее значение».',
      },
    ] as ForbesSection[],
  },

  en: {
    seoTitle: 'Redefining Ophthalmology — Forbes Georgia on MaGo | MaGo',
    seoDescription:
      'The Forbes Georgia feature on Maka Gogiashvili and Magotherapy: how regenerative ophthalmology awakens dormant retinal cells without surgery or medication.',
    seoKeywords:
      'ophthalmology, regenerative ophthalmology, vision restoration, retinal diseases, retinal regeneration, amblyopia, nystagmus, glaucoma, Magotherapy, MaGo, Maka Gogiashvili, optic nerve, retinal cells, innovative ophthalmology',
    h1: 'Redefining Ophthalmology: Awakening Dormant Cells',
    h2: 'Forbes Georgia on Maka Gogiashvili and Magotherapy',
    ogTitle: 'Redefining Ophthalmology: Awakening Dormant Cells — Forbes Georgia',
    ogDescription:
      'Dr. Maka Gogiashvili, MD, DSc, and Magotherapy in Forbes Georgia: cellular regeneration, 12 international patents and more than 10,000 cases worldwide.',
    imageAlt: 'Dr. Maka Gogiashvili, MD, DSc — New Technologies – MaGo eye clinic, Forbes Georgia feature',
    equipmentAlt: 'Magotherapy equipment during a procedure — New Technologies – MaGo eye clinic',
    logoAlt: 'Forbes Georgia logo',

    publishedLabel: 'Published',
    authorLabel: 'By',
    publishedDate: 'April 27, 2026',
    sourceNote: 'This article was first published by Forbes Georgia.',
    readFull: 'Read the full article on Forbes Georgia',
    backToMedia: '← Back to Media',

    lead: 'In modern ophthalmology, the concept of irreversible vision loss is increasingly being re-examined. Advances in clinical research and technology are challenging long-standing assumptions about cellular degeneration, shifting attention toward the possibility that certain retinal cells may remain viable, though functionally inactive. This evolving perspective is beginning to reshape how vision impairment is understood — and, potentially, how it is treated.',

    sections: [
      {
        paragraphs: [
          'Dr. Maka Gogiashvili, MD, DSc, is a professor of ophthalmology and the founder of the “New Technologies – MaGo” International Eye Clinic. Trained under renowned ophthalmologist Svyatoslav Fyodorov, she further advanced her scientific expertise through a year of work and research with Academician Natalya Bekhtereva, the distinguished neurophysiologist and founder of the Institute of the Human Brain. Building on this foundation, she has developed a non-surgical method known as Magotherapy, focused on cellular regeneration. The approach is supported by 12 international patents and has been applied in more than 10,000 cases worldwide, including patients previously considered untreatable.',
        ],
      },
      {
        heading: 'A shift in clinical perspective',
        paragraphs: [
          'Globally adopted approaches to vision loss often assume irreversible cellular damage. Dr. Gogiashvili’s methodology is grounded in a different premise: that some affected cells may remain viable, though inactive.',
          'This concept is based on the theory of parabiosis — a physiological state in which cells are not dead, but alive, though “dormant,” and therefore not functioning. Originally introduced by neurophysiologist Nikolai Vvedensky, the theory suggests that, under certain conditions, cellular activity may be restored.',
        ],
        quote: '“We’re not replacing biological function. We’re not trying to replace nature; we’re giving it a chance to restart.”',
      },
      {
        paragraphs: [
          'She emphasizes that this approach is used exclusively at the MaGo clinic, where a proprietary, patented method is employed to identify and activate the body’s underused biological resources — capacities that exist in every person, though to different extents. The clinic also offers an early, personalized prognosis, often from the first consultation, estimating potential vision improvement. For international patients, this assessment can be done remotely, based on medical exams performed in their home country.',
          'Magotherapy applies this concept through a non-invasive process designed to stimulate metabolic activity in retinal cells. According to the clinic, the method does not rely on surgery, pharmaceuticals, or corrective lenses, but instead uses innovative equipment to activate cellular processes along neural pathways.',
          'The treatment is designed to improve oxygenation and nutrient delivery at the cellular level — processes that occur within milliseconds (approximately two-thousandths of a second) — potentially restoring functional signaling between the eye and the brain. This rapid physiological response helps explain why patients may begin to experience measurable improvements in vision within as little as one hour of the procedure. Dr. Gogiashvili emphasizes that vision is not solely an optical process but a neurological one:',
        ],
        quote: '“The eye transmits information, but interpretation happens in the brain. When this pathway is disrupted, visual clarity is affected.”',
      },
      {
        paragraphs: [
          'The method is applied across a wide range of conditions — including retinal dystrophies, nystagmus, glaucoma, and post-surgical complications — because in magotherapy, what determines outcomes is the organism’s own healing resources, regardless of the disease’s etiology, duration, severity, or the patient’s age. Treatment protocols are individualized, based on diagnostic assessments and patient-specific factors.',
          'According to the clinic, results are perceived by patients before the full treatment course is complete. On the first visit, a prognosis is established based on the organism’s available healing resources. On the second day, a test magotherapy procedure is performed — and within one hour, patients typically report noticeably improved vision, characterized by increased flashes of light. As treatment progresses, the frequency and duration of these perceptions grow as more cells resume activity. This rapid response is attributed to the restoration of cellular metabolism occurring in 1/2000th of a second, within which the brain processes the impulse and restores a sharp visual image, explaining the positive outcomes observed even in conditions previously considered untreatable. The non-invasive nature of the method is a defining feature. Without pharmacological or surgical intervention, the risks of complications and extended recovery time are eliminated, as magotherapy is a physiological, entirely natural method.',
          'Dr. Gogiashvili notes that treatment outcomes are monitored over time, with an emphasis on slowing or stabilizing disease progression. According to Dr. Gogiashvili’s clinical observations, magotherapy halts or slows the progression of disease. Because the method is entirely physiological, it can be continued for as long as needed until the desired result is achieved. The clinic reports long-term follow-up data spanning more than two decades — supported by scientific documentation, clinical records, and a photo gallery available on their YouTube channel: Magotherapy Eye Clinic | Dr. Maka Gogiashvili.',
          'A key component of the approach is personalization — adapting treatment protocols to individual physiological responses. This is particularly relevant in cases where standard treatments offer limited options.',
        ],
      },
      {
        heading: 'Looking ahead',
        paragraphs: [
          'As ophthalmology continues to evolve, regenerative approaches are gaining attention for their potential to transform existing treatment models.',
          'Dr. Gogiashvili advocates for earlier diagnosis and proactive care, emphasizing the importance of timely intervention:',
        ],
        quote: '“As long as a cell remains viable, there is potential for recovery. Act before vision is completely lost because every single day matters when it comes to awakening dormant cells.”',
      },
    ] as ForbesSection[],
  },
};

export function useForbesTranslations(language: Language) {
  return forbesTranslations[language];
}
