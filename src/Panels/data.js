export let points = [
  {
    id: 1,
    title: 'Музей истории города Гатчина',
    description: 'Музей',
    coordinates: [59.570786, 30.122674],
    type: 'Museum'
  },
  {
    id: 2,
    title: 'Кирха',
    description: 'Лютеранское обрядное сооружение, музей',
    coordinates: [59.572565, 30.126017],
    type: 'Museum'
  },
  {
    id: 3,
    title: 'Колодец Иордань',
    description: 'Чистейший родник, заключенный в гранитную оправу',
    coordinates: [59.56421, 30.11473],
    type: 'Monument'
  },
  {
    id: 4,
    title: 'Адмиралтейство',
    description: 'Парковое сооружение в Дворцовом парке города Гатчина',
    coordinates: [59.56333, 30.116021],
    type: 'Monument'
  },
  {
    id: 5,
    title: 'Приоратский дворец',
    description: 'Дворец 1799 года',
    coordinates: [59.558508, 30.121323],
    type: 'Museum'
  },
  {
    id: 6,
    title: 'Сильвийские ворота',
    description: 'Главный вход в парк Сильвия',
    coordinates: [59.567584, 30.095024],
    type: 'Monument'
  },
  {
    id: 7,
    title: 'Памятник Павлу I',
    description: 'Скульптура Павла I, установленная в 1851 году',
    coordinates: [59.563022, 30.1068],
    type: 'Monument'
  },
  {
    id: 8,
    title: 'Государственный музей-заповедник Гатчина',
    description:
      'Огромный роскошный дворец с садами, в котором хранятся многочисленные коллекции предметов искусства',
    coordinates: [59.563489, 30.107388],
    type: 'Museum'
  },
  {
    id: 9,
    title: 'Собственный сад',
    description: 'Прекрасное место для прогулок',
    coordinates: [59.563259, 30.109908],
    type: 'Park'
  },
  {
    id: 10,
    title: 'Собор Святого Апостола Павла',
    description: 'Религиозная организация',
    coordinates: [59.565129, 30.129797],
    type: 'Monument'
  },
  {
    id: 11,
    title: 'Гатчинский музей-усадьба художника П.Е.Щербакова',
    description:
      "Филиал ленинградского областного государственного учреждения культуры 'Музейное агенство'",
    coordinates: [59.556992, 30.13331],
    type: 'Museum'
  },
  {
    id: 12,
    title: 'Приоратский парк',
    description: 'Пейзажный парк в городе Гатчине',
    coordinates: [59.554329, 30.120397],
    type: 'Park'
  },
  {
    id: 13,
    title: 'Березовые ворота',
    description:
      'Памятник архитектуры, расположенный на восточной границе дворцового парка в городе Гатчина',
    coordinates: [59.55987, 30.113842],
    type: 'Monument'
  },
  {
    id: 14,
    title: 'Павильон Венеры',
    description: 'Павильон в дворцовом парке Гатчины',
    coordinates: [59.568506, 30.10924],
    type: 'Museum'
  },
  {
    id: 15,
    title: 'Дубок',
    description: 'Ресторан',
    coordinates: [59.566724, 30.118565],
    type: 'Food'
  },
  {
    id: 16,
    title: 'Росто',
    description: 'Кафе',
    coordinates: [59.563079, 30.104341],
    type: 'Food'
  },
  {
    id: 17,
    title: 'Calcio',
    description: 'Кафе',
    coordinates: [59.566102, 30.126308],
    type: 'Food'
  },
  {
    id: 18,
    title: 'СушиWay',
    description: 'Суши',
    coordinates: [59.571453, 30.123687],
    type: 'Food'
  }
]

export let routes = [
  { id: 1, theme: 0, duration: 1, points: [1, 3, 4, 5] },
  { id: 2, theme: 1, duration: 1, points: [1, 15, 3, 4, 5] },
  { id: 3, theme: 0, duration: 1, points: [6, 7, 8, 9, 4] },
  { id: 4, theme: 1, duration: 1, points: [6, 16, 7, 8, 9, 4] },
  { id: 5, theme: 0, duration: 1, points: [2, 1, 10, 11, 12] },
  { id: 6, theme: 1, duration: 1, points: [2, 1, 17, 10, 11, 12] },
  { id: 7, theme: 0, duration: 1, points: [2, 1, 13, 14] },
  { id: 8, theme: 1, duration: 1, points: [2, 18, 1, 13, 14] }
]
