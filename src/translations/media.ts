import { Language } from '../contexts/LanguageContext';

export interface MediaItemText {
  source: string;
  title: string;
  paragraphs?: string[];
  linkText?: string;
  linkAuthor?: string;
  timestamps?: { time: string; text: string }[];
  imageAlt?: string;
}

interface MediaTranslation {
  heroTitle: string;
  heroSubtitle: string;
  typeTv: string;
  typeRadio: string;
  typeAward: string;
  navigationLabel: string;
  detailsLabel: string;
  callToBook: string;
  items: Record<string, MediaItemText>;
}

const mediaTranslations: Record<Language, MediaTranslation> = {
  ge: {
    heroTitle: 'მედია',
    heroSubtitle: 'ტელე და რადიო გადაცემები · პაციენტების გამოცდილება',
    typeTv: 'TV',
    typeRadio: 'რადიო',
    typeAward: 'ჯილდო',
    navigationLabel: 'გადაცემის ნავიგაცია (წუთები):',
    detailsLabel: 'დეტალური ინფორმაცია · პაციენტების გამოცდილება',
    callToBook: 'ჩასაწერათ დარეკეთ',
    items: {
      anano: {
        source: 'TV PALITRA NEWS | გადაცემა მკურნალი',
        title: 'პაციენტის დაუჯერებელი შედეგი პიგმენტური რეტინის დროს',
        paragraphs: [
          'პაციენტის მშობელი უზიარებს 9 წლის შვილის მკურნალობის შედეგებს მაგოთერაპიით მკურნალობისას. პატარა ბიჭუნსა ჰქონდა საკმაოდ რთული დიაგნოზები — მაღალი ხარისხის მიოპია, ასტიგმატიზმი, ბადურის პიგმენტური რეტინიტი, სიელმე და სხვა.',
          'როგორც თვითონ აღნიშნავს, თვალის კლინიკა „ახალი ტექნოლოგიები — MaGo“-ს საკმაოდ იმედგაცრუებულმა, სკეპტიკურად განწყობილმა მიაკითხა — როგორც ბოლო შანსი, რადგან ბოლომდე არ ეჯერა, რომ ასე მოკლე დროში ქირურგიის და მედიკამენტების გარეშე შესაძლებელი იყო მხედველობის აღდგენა.',
          'მანამდე ბავშვის მკურნალობა გავრცელებული მეთოდებით ხდებოდა, რამაც შედეგი ვერ გამოიღო. გაიარა კონსულტაცია თურქეთსა და გერმანიაში, სადაც კვლავ მსგავს მეთოდებით მკურნალობას სთავაზობდნენ.',
          'მაგოთერაპიით ორჯერ ათ დღიანი მკურნალობისას ბიჭუნას იმდენად მოემატა მხედველობა, რომ სათვალე −9.0 დიოპტრიებით −6.0 დიოპტრიით შეიცვალა. სიელმე (გადახრა), რომელსაც სათვალეც ვერ უსწორება — გასწორდა!',
          'ეს იმდენად დაუჯერებელი იყო, რომ გადასამოწმებლად მიაკითხა სხვა ექიმს. როდესაც მან დაუდასტურა მხედველობის აღდგენა და სიელმის კუთხის მაქსიმალური შემცირება, მაშინ მართლა ირწმუნა, რომ მხოლოდ აპარატურული პერსონიფიცირებული მკურნალობით — მაგოთერაპია — შესაძლებელია მხედველობის აღდგენა!',
          'პაციენტის დედა ურჩევს ყველა სასოწარკვეთილ პაციენტს ან მის მშობლებს დაიჯერონ, რომ მაგოთერაპია ეს არის მხედველობის აღდგენის ეფექტური, უმტკივნეულო და უსაფრთხო გზა, რის დასტურადაც მაგოთერაპია დაცულია საერთაშორისო პატენტებით.',
        ],
        linkText:
          'პაციენტის დედა გიზიარებთ გამოცდილებას და მოგიწოდებთ მიმართოთ მხედველობის აღდგენის უსაფრთხო მეთოდს — მაგოთერაპია.',
        linkAuthor: 'ანანო თავხელიძე',
      },
      iveria: {
        source: 'რადიო ივერია საპატრიარქოს (105.5) | გადაცემა „კონსილიუმი“',
        title: 'როგორ აღდგება მხედველობა განუკურნებადი დაავადებების დროს — მაგოთერაპია',
        paragraphs: [
          'თუ გაინტერესებთ, როგორ შეამჩნიოთ, რომ თქვენს ახლობელს სასწრაფოდ ესაჭიროება თუ არა თვალის ექიმთან გასინჯვა, რა არის აპარატურული მკურნალობა — მაგოთერაპია და როგორ აღდგება მხედველობა განუკურნებადი დაავადებების დროს, მოუსმინეთ საპატრიარქოს არხზე რადიო ივერია, გადაცემა „კონსილიუმი“.',
        ],
        imageAlt: 'რადიო ივერია — გადაცემა კონსილიუმი',
      },
      palitra2025: {
        source: 'TV PALITRA NEWS | გადაცემა მკურნალი',
        title: 'მხედველობის აღდგენა მხოლოდ აპარატურული მკურნალობით — მაგოთერაპია',
        timestamps: [
          { time: '1:18', text: 'POST TV დაინტერესდა — რატომ ხედავს ადამიანი ცუდად, რითი არის განპირობებული' },
          { time: '5:24', text: 'რჩევები ოჯახის წევრებისათვის — როგორ შემჩნიოთ, რომ პატარა ცუდად ხედავს' },
          { time: '6:34', text: 'როგორ შეიძლება მხოლოდ აპარატურული პერსონიფიცირებული მკურნალობა — რას გულისხმობს?' },
          { time: '7:29', text: 'როგორ აღდგენთ მხედველობას მაგოთერაპიით ორგანიზმის რესურსზე დაყრდნობით' },
          { time: '9:47', text: 'როგორ იკვლევთ ორგანიზმის რესურსს' },
          { time: '10:37', text: 'როგორ ხდება აპარატურით მხედველობის აღდგენა' },
          { time: '11:01', text: 'რა არის პარაბიოზი და რა კავშირი აქვს ძილთან ან მხედველობის აღდგენასთან' },
          { time: '12:02', text: 'რაზეა დამოკიდებული მხედველობის აღდგენა ელვისებურად — რა კავშირი აქვს მას ტვინთან' },
          { time: '14:16', text: 'პროცედურულად რას აკეთებთ, რომ არსებული რესურსი აპარატურით ააღორძინოთ' },
          { time: '15:05', text: 'რას ნიშნავს და როგორ აკეთებთ სატესტო პროცედურას' },
          { time: '15:39', text: 'რამდენჯერ არის საჭირო კლინიკაში მოსვლა, რომ შედეგი გამყარდეს' },
          { time: '16:37', text: 'რამდენ ხანს გრძელდება 1 საათში მომატებული მხედველობა' },
          { time: '17:35', text: 'რა დაავადების მქონე პაციენტები მოდიან სამკურნალოდ' },
          { time: '18:44', text: 'რა უკუჩვენება და რისკი არის მაგოთერაპიით მკურნალობისას' },
        ],
      },
      postv: {
        source: 'TV POST',
        title: 'თვალის სნეულებების თანამედროვე მკურნალობა მხოლოდ აპარატურით — მაგოთერაპია',
      },
      gds: {
        source: 'TV GDS',
        title: 'როგორ აღდგება მხედველობა მხოლოდ აპარატურით — მკურნალობის დემონსტრაცია ღია ეთერში',
        paragraphs: [
          'TV GDS-ის ფარგლებში, ფეისბუქის ღია ეთერში, ჩატარდა მხედველობის აღდგენის პროცედურის ლაივ დემონსტრაცია. გადაცემა მიმაგრებულია კლინიკის ფეისბუქ გვერდზე.',
        ],
      },
      mir: {
        source: 'რუსული ტელევიზია МИР | ახალი ამბები',
        title: 'საქართველოში თვალის დაავადებებს მაგოთერაპიით მკურნალობენ',
      },
    },
  },

  en: {
    heroTitle: 'Media',
    heroSubtitle: 'TV and radio programmes · Patient experience',
    typeTv: 'TV',
    typeRadio: 'Radio',
    typeAward: 'Award',
    navigationLabel: 'Programme navigation (minutes):',
    detailsLabel: 'Detailed information · Patient experience',
    callToBook: 'To book, call',
    items: {
      anano: {
        source: 'TV PALITRA NEWS | Programme “Mkurnali” (The Healer)',
        title: "A patient's incredible result with pigmentary retinitis",
        paragraphs: [
          "A patient's parent shares the results of her 9-year-old son's treatment with Magotherapy. The little boy had a set of rather serious diagnoses — high-degree myopia, astigmatism, pigmentary retinitis of the retina, strabismus and others.",
          'As she says herself, she came to the eye clinic “New Technologies — MaGo” disappointed and sceptical — as a last chance, because she did not quite believe that vision could be restored in such a short time without surgery or medication.',
          'Before that the child had been treated with conventional methods, which brought no result. They had consultations in Turkey and Germany, where similar treatment methods were offered again.',
          "After two ten-day courses of Magotherapy the boy's vision improved so much that his −9.0 dioptre glasses were replaced with −6.0. The strabismus (eye deviation), which even glasses could not correct — straightened out!",
          'It was so unbelievable that she went to another doctor to double-check. When he confirmed the restored vision and the maximal reduction of the strabismus angle, she truly believed that vision can be restored with personalised device-based treatment alone — Magotherapy!',
          "The patient's mother advises every desperate patient, or their parents, to believe that Magotherapy is an effective, painless and safe way to restore vision — as confirmed by the international patents that protect Magotherapy.",
        ],
        linkText:
          "The patient's mother shares her experience and urges you to turn to the safe method of restoring vision — Magotherapy.",
        linkAuthor: 'Anano Tavkhelidze',
      },
      iveria: {
        source: 'Radio Iveria of the Patriarchate (105.5) | Programme “Consilium”',
        title: 'How vision is restored in “incurable” diseases — Magotherapy',
        paragraphs: [
          'If you want to know how to tell whether a loved one urgently needs to see an eye doctor, what device-based treatment — Magotherapy — is, and how vision is restored in the case of “incurable” diseases, listen to the Patriarchate’s Radio Iveria, programme “Consilium”.',
        ],
        imageAlt: 'Radio Iveria — programme Consilium',
      },
      palitra2025: {
        source: 'TV PALITRA NEWS | Programme “Mkurnali” (The Healer)',
        title: 'Restoring vision with device-based treatment alone — Magotherapy',
        timestamps: [
          { time: '1:18', text: 'POST TV asked — why does a person see poorly, and what causes it' },
          { time: '5:24', text: 'Advice for family members — how to notice that a child sees poorly' },
          { time: '6:34', text: 'How is treatment possible with devices alone — what does personalised device-based treatment mean?' },
          { time: '7:29', text: "How vision is restored with Magotherapy by relying on the body's own resources" },
          { time: '9:47', text: "How the body's resource is examined" },
          { time: '10:37', text: 'How vision is restored with the equipment' },
          { time: '11:01', text: 'What parabiosis is and how it relates to sleep and to restoring vision' },
          { time: '12:02', text: 'What lightning-fast restoration of vision depends on — how it relates to the brain' },
          { time: '14:16', text: 'What is done during the procedure to revive the existing resource with the equipment' },
          { time: '15:05', text: 'What the test procedure means and how it is performed' },
          { time: '15:39', text: 'How many visits to the clinic are needed to consolidate the result' },
          { time: '16:37', text: 'How long the vision gained within 1 hour lasts' },
          { time: '17:35', text: 'Patients with which diseases come for treatment' },
          { time: '18:44', text: 'What contraindications and risks Magotherapy treatment has' },
        ],
      },
      postv: {
        source: 'TV POST',
        title: 'Modern treatment of eye diseases with devices alone — Magotherapy',
      },
      gds: {
        source: 'TV GDS',
        title: 'How vision is restored with devices alone — a live demonstration of the treatment',
        paragraphs: [
          "As part of TV GDS, a live demonstration of the vision-restoring procedure was held on Facebook Live. The programme is pinned on the clinic's Facebook page.",
        ],
      },
      mir: {
        source: 'Russian television MIR | News',
        title: 'In Georgia, eye diseases are treated with Magotherapy',
      },
    },
  },

  ru: {
    heroTitle: 'СМИ',
    heroSubtitle: 'Теле- и радиопередачи · Опыт пациентов',
    typeTv: 'TV',
    typeRadio: 'Радио',
    typeAward: 'Награда',
    navigationLabel: 'Навигация по передаче (минуты):',
    detailsLabel: 'Подробная информация · Опыт пациентов',
    callToBook: 'Для записи звоните',
    items: {
      anano: {
        source: 'TV PALITRA NEWS | передача «Мкурнали» (Целитель)',
        title: 'Невероятный результат пациента при пигментном ретините',
        paragraphs: [
          'Мама пациента делится результатами лечения своего 9-летнего сына Маготерапией. У мальчика был ряд довольно сложных диагнозов — миопия высокой степени, астигматизм, пигментный ретинит сетчатки, косоглазие и другие.',
          'Как она сама отмечает, в глазную клинику «Новые технологии — MaGo» она обратилась разочарованной и настроенной скептически — как к последнему шансу, поскольку до конца не верила, что за столь короткое время можно восстановить зрение без операции и медикаментов.',
          'До этого ребёнка лечили общепринятыми методами, которые не дали результата. Были консультации в Турции и Германии, где вновь предлагали лечение теми же методами.',
          'После двух десятидневных курсов Маготерапии зрение мальчика улучшилось настолько, что очки −9.0 диоптрий заменили на −6.0. Косоглазие (отклонение), которое не исправляли даже очки, — выпрямилось!',
          'Это было настолько невероятно, что для проверки она обратилась к другому врачу. Когда тот подтвердил восстановление зрения и максимальное уменьшение угла косоглазия, она по-настоящему поверила, что восстановить зрение возможно только аппаратным персонифицированным лечением — Маготерапией!',
          'Мама пациента советует всем отчаявшимся пациентам и их родителям поверить, что Маготерапия — это эффективный, безболезненный и безопасный путь восстановления зрения, подтверждением чему служат международные патенты, защищающие Маготерапию.',
        ],
        linkText:
          'Мама пациента делится опытом и призывает обратиться к безопасному методу восстановления зрения — Маготерапии.',
        linkAuthor: 'Анано Тавхелидзе',
      },
      iveria: {
        source: 'Радио «Иверия» Патриархии (105.5) | передача «Консилиум»',
        title: 'Как восстанавливается зрение при «неизлечимых» заболеваниях — Маготерапия',
        paragraphs: [
          'Если вы хотите узнать, как понять, что вашему близкому срочно нужен осмотр у офтальмолога, что такое аппаратное лечение — Маготерапия — и как восстанавливается зрение при «неизлечимых» заболеваниях, послушайте радио «Иверия» на канале Патриархии, передача «Консилиум».',
        ],
        imageAlt: 'Радио «Иверия» — передача «Консилиум»',
      },
      palitra2025: {
        source: 'TV PALITRA NEWS | передача «Мкурнали» (Целитель)',
        title: 'Восстановление зрения только аппаратным лечением — Маготерапия',
        timestamps: [
          { time: '1:18', text: 'POST TV интересуется — почему человек плохо видит и чем это обусловлено' },
          { time: '5:24', text: 'Советы членам семьи — как заметить, что ребёнок плохо видит' },
          { time: '6:34', text: 'Как возможно только аппаратное персонифицированное лечение — что оно подразумевает?' },
          { time: '7:29', text: 'Как восстанавливается зрение Маготерапией с опорой на ресурс организма' },
          { time: '9:47', text: 'Как исследуется ресурс организма' },
          { time: '10:37', text: 'Как происходит восстановление зрения с помощью аппаратуры' },
          { time: '11:01', text: 'Что такое парабиоз и как он связан со сном и восстановлением зрения' },
          { time: '12:02', text: 'От чего зависит молниеносное восстановление зрения — какая связь с мозгом' },
          { time: '14:16', text: 'Что делается процедурно, чтобы аппаратурой возродить имеющийся ресурс' },
          { time: '15:05', text: 'Что означает тестовая процедура и как она проводится' },
          { time: '15:39', text: 'Сколько раз нужно прийти в клинику, чтобы закрепить результат' },
          { time: '16:37', text: 'Как долго сохраняется зрение, улучшившееся за 1 час' },
          { time: '17:35', text: 'С какими заболеваниями пациенты приходят на лечение' },
          { time: '18:44', text: 'Какие противопоказания и риски при лечении Маготерапией' },
        ],
      },
      postv: {
        source: 'TV POST',
        title: 'Современное лечение глазных болезней только аппаратурой — Маготерапия',
      },
      gds: {
        source: 'TV GDS',
        title: 'Как восстанавливается зрение только аппаратурой — демонстрация лечения в прямом эфире',
        paragraphs: [
          'В рамках TV GDS в прямом эфире Facebook была проведена live-демонстрация процедуры восстановления зрения. Передача закреплена на Facebook-странице клиники.',
        ],
      },
      mir: {
        source: 'Российское телевидение МИР | Новости',
        title: 'В Грузии глазные болезни лечат с помощью Маготерапии',
      },
    },
  },
};

export function useMediaTranslations(language: Language) {
  return mediaTranslations[language];
}
