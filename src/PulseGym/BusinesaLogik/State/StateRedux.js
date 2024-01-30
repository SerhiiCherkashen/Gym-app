import { stateConst } from "./StateConst";

// import { scrgym1, scrgym2, scrgym3 } from "./StateImage";
export const stateRedux = {
  name: "redux",
  currentGym: {},
  currentPriceList: [],
  currentCoaches: [],
  schedulePage: false,
  startSrcImg: 0,
  arrayImageScroll: [
    stateConst.stateImage.scrgym[0],
    stateConst.stateImage.scrgym[1],
    stateConst.stateImage.scrgym[2],
    stateConst.stateImage.scrgym[3],
    stateConst.stateImage.scrgym[4],
    stateConst.stateImage.scrgym[5],
    stateConst.stateImage.scrgym[6],
    stateConst.stateImage.scrgym[7],
  ],
  popUp: {
    isOpen: false,
  },
};
// priceList: [
//   {
//     searchId: "Тренажерний зал",
//     name: "ТРЕНАЖЕРНЫЙ ЗАЛ",
//     services: [
//       {
//         service: "asd",
//         price: "123",
//       },
//     ],
//   },
//   {
//     searchId: "Фітнес",
//     name: "ФИТНЕС, ПИЛАТЕС, ЙОГА.",
//     services: [
//       {
//         service: "qwerty",
//         price: "123",
//       },
//     ],
//   },
//   {
//     searchId: "TRX",
//     name: "TRX",
//     services: [
//       {
//         service: "hyi",
//         price: "123",
//       },
//     ],
//   },
// ],

//
//
//
// {
//   id: "0holodka",
//   image: stateImage.gym,
//   peopleName: "ХОЛОДНА ГОРА АТЛАС",
//   address: "ВУЛ. ПОЛТАВСЬКИЙ ШЛЯХ 146 ТЦ АТЛАС",
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
