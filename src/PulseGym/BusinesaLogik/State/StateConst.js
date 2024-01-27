import { stateImage } from "./StateImage";

export const stateConst = {
  stateImage: stateImage,
  gyms: [
    {
      id: "0holodka",
      image: stateImage.gym,
      peopleName: "ХОЛОДНА ГОРА АТЛАС",
      address: "ВУЛ. ПОЛТАВСЬКИЙ ШЛЯХ 146 ТЦ АТЛАС",
      modeOfOperation: "asdasd",
      telephone: "123123",
      services: [
        "Тренажерний зал",
        "Фітнес",
        "Спорт бар",
        "Стретчінг",
        "Фітнес-мікс",
        "Salsation",
        "TRX",
      ],
      coaches: ["anton asd", "qwerty", "hyilo"],
      sportBar: true,
    },
    {
      id: "1masela",
      image: stateImage.gym2,
      peopleName: "НА МФСЕЛЬСКОГО",
      address: "ПР-Т. ГЕРОЇВ ХАРКОВА, 273-К",
      modeOfOperation: "asdasd",
      telephone: "123123",
      services: [
        "Тренажерний зал",
        "Фітнес",
        "Спорт бар",
        "Стретчінг",
        "Фітнес-мікс",
        "Salsation",
      ],
      coaches: [
        // {
        //   name: "asd asd",
        //   tel: "123123",
        //   description: "text",
        // },
      ],
      sportBar: true,
    },
    // {
    //   id: "2oleksiivka",
    //   image: stateImage.gym3,
    //   peopleName: "НА ОЛЕКСIIВЦI",
    //   address: "ПРОСПЕКТ ЛЮДВІГА СВОБОДИ, 29",
    //   modeOfOperation: "asdasd",
    //   telephone: "123123",
    //   services: [
    //     "Тренажерний зал",
    //     "Фітнес",
    //     "Спорт бар",
    //     "Стретчінг",
    //     "Фітнес-мікс",
    //     "Salsation",
    //   ],
    //   coaches: [
    //     {
    //       name: "asd asd",
    //       tel: "123123",
    //       description: "text",
    //     },
    //   ],
    //   sportBar: true,
    // },
    // {
    //   id: "3602mkp",
    //   image: stateImage.gym4,
    //   peopleName: "НА 602-МРН",
    //   address: "ВУЛ. АМОСОВА, 36-А",
    //   modeOfOperation: "asdasd",
    //   telephone: "123123",
    //   services: [
    //     "Тренажерний зал",
    //     "Фітнес",
    //     "Спорт бар",
    //     "Стретчінг",
    //     "Фітнес-мікс",
    //     "Salsation",
    //   ],
    //   coaches: [
    //     {
    //       name: "asd asd",
    //       tel: "123123",
    //       description: "text",
    //     },
    //   ],
    //   sportBar: true,
    // },
    // {
    //   id: "4htz",
    //   image: stateImage.gym5,
    //   peopleName: "НА ХТЗ",
    //   address: "ПР-Т. ОЛЕКСАНДРІВСЬКИЙ, 99",
    //   modeOfOperation: "asdasd",
    //   telephone: "123123",
    //   services: [
    //     "Тренажерний зал",
    //     "Фітнес",
    //     "Спорт бар",
    //     "Стретчінг",
    //     "Фітнес-мікс",
    //     "Salsation",
    //   ],
    //   coaches: [
    //     {
    //       name: "asd asd",
    //       tel: "123123",
    //       description: "text",
    //     },
    //   ],
    //   sportBar: true,
    // },
    // {
    //   id: "5oleksa1",
    //   image: stateImage.gym3,
    //   peopleName: "НА ОЛЕКСIIВЦI",
    //   address: "ПРОСПЕКТ ЛЮДВІГА СВОБОДИ, 29",
    //   modeOfOperation: "asdasd",
    //   telephone: "123123",
    //   services: [
    //     "Тренажерний зал",
    //     "Фітнес",
    //     "Спорт бар",
    //     "Стретчінг",
    //     "Фітнес-мікс",
    //     "Salsation",
    //   ],
    //   coaches: [
    //     {
    //       name: "asd asd",
    //       tel: "123123",
    //       description: "text",
    //     },
    //   ],
    //   sportBar: true,
    // },
    // {
    //   id: "6oleksa2",
    //   image: stateImage.gym3,
    //   peopleName: "НА ОЛЕКСIIВЦI",
    //   address: "ПРОСПЕКТ ЛЮДВІГА СВОБОДИ, 29",
    //   modeOfOperation: "asdasd",
    //   telephone: "123123",
    //   services: [
    //     "Тренажерний зал",
    //     "Фітнес",
    //     "Спорт бар",
    //     "Стретчінг",
    //     "Фітнес-мікс",
    //     "Salsation",
    //   ],
    //   coach: [
    //     {
    //       name: "asd asd",
    //       tel: "123123",
    //       description: "text",
    //     },
    //   ],
    //   sportBar: true,
    // },
    // {
    //   id: "7oleksa4",
    //   image: stateImage.gym3,
    //   peopleName: "НА ОЛЕКСIIВЦI",
    //   address: "ПРОСПЕКТ ЛЮДВІГА СВОБОДИ, 29",
    //   modeOfOperation: "asdasd",
    //   telephone: "123123",
    //   services: [
    //     "Тренажерний зал",
    //     "Фітнес",
    //     "Спорт бар",
    //     "Стретчінг",
    //     "Фітнес-мікс",
    //     "Salsation",
    //   ],
    //   coaches: [
    //     {
    //       name: "asd asd",
    //       tel: "123123",
    //       description: "text",
    //     },
    //   ],
    //   sportBar: true,
    // },
  ],
  priceList: [
    {
      searchId: "Тренажерний зал",
      name: "ТРЕНАЖЕРНЫЙ ЗАЛ",
      services: [
        {
          service: "АБОНЕМЕНТ НА МЕСЯЦ 8.00 — 17.00",
          price: "650 ГРН.",
        },
        {
          service: "АБОНЕМЕНТ НА МЕСЯЦ 8.00 — 21.00",
          price: "799 ГРН.",
        },
        {
          service: "АБОНЕМЕНТ 55+ 8.00 — 17.00",
          price: "499 ГРН.",
        },
        {
          service: "АБОНЕМЕНТ НА 3 МЕСЯЦА 8.00 — 21.00",
          price: "2100 ГРН.",
        },
        {
          service: "АБОНЕМЕНТ НА 6 МЕСЯЦЕВ 8.00 — 21.00",
          price: "3600 ГРН.",
        },
        {
          service: "ГОДОВОЙ АБОНЕМЕНТ 8.00 — 21.00",
          price: "5999 ГРН.",
        },
        {
          service: "ЕДИНОРАЗОВЫЙ АБОНЕМЕНТ",
          price: "200 ГРН.",
        },
      ],
    },
    {
      searchId: "Фітнес",
      name: "ФИТНЕС, ПИЛАТЕС, ЙОГА.",
      services: [
        {
          service: "8 ТРЕНИРОВОК В МЕСЯЦ",
          price: "750 ГРН.",
        },
        {
          service: "12 ТРЕНИРОВОК В МЕСЯЦ",
          price: "799 ГРН.",
        },
        {
          service: "ГРУППОВЫЕ + ЗАЛ",
          price: "900 ГРН.",
        },
        {
          service: "АБОНЕМЕНТ «СВОБОДНЫЙ» 12 ТРЕНИРОВОК/МЕСЯЦ",
          price: "900 ГРН.",
        },
        {
          service: "АБОНЕМЕНТ «СВОБОДНЫЙ» + ЗАЛ",
          price: "950 ГРН.",
        },
        {
          service: "РАЗОВАЯ ТРЕНИРОВКА",
          price: "200 ГРН.",
        },
        {
          service: "ПРИОСТАНОВКА АБОНЕМЕНТА (2 НЕДЕЛИ)",
          price: "100 ГРН.",
        },
      ],
    },
    {
      searchId: "TRX",
      name: "TRX",
      services: [
        {
          service: "8 ТРЕНИРОВОК В МЕСЯЦ",
          price: "850 ГРН.",
        },
        {
          service: "12 ТРЕНИРОВОК В МЕСЯЦ",
          price: "899 ГРН.",
        },
        {
          service: "12 ТРЕНИРОВОК В МЕСЯЦ + ТРЕНАЖЕРНЫЙ ЗАЛ",
          price: "950 ГРН.",
        },
        {
          service: "РАЗОВАЯ ТРЕНИРОВКА",
          price: "200 ГРН.",
        },
      ],
    },
  ],
  coaches: [
    {
      image: stateImage.coach1,
      name: "anton asd",
      tel: "123123",
      description: "text",
    },
    {
      image: stateImage.coach1,
      name: "qwerty",
      tel: "123123",
      description: "text",
    },
    {
      image: stateImage.coach1,
      name: "hyilo",
      tel: "123123",
      description: "text",
    },
  ],
};
