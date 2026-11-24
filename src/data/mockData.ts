import { ArbitrationCase, Notification } from '../types';

export const mockCases: ArbitrationCase[] = [
  {
    id: '1',
    caseNumber: 'А40-12345/2024',
    court: 'Арбитражный суд города Москвы',
    judge: 'Иванов А.С.',
    plaintiff: 'ООО "ТехноСервис"',
    defendant: 'АО "СтройИнвест"',
    status: 'active',
    stage: 'first_instance',
    dateFiled: '2024-03-15',
    lastUpdate: '2024-12-18',
    summary: 'Взыскание задолженности по договору подряда на выполнение строительно-монтажных работ',
    amount: '12 450 000 ₽',
    documents: [
      { id: 'd1', type: 'Исковое заявление', date: '2024-03-15', title: 'Исковое заявление', hasFile: true },
      { id: 'd2', type: 'Определение', date: '2024-03-20', title: 'Определение о принятии искового заявления к производству', hasFile: true },
      { id: 'd3', type: 'Отзыв', date: '2024-04-10', title: 'Отзыв на исковое заявление', hasFile: true },
      { id: 'd4', type: 'Решение', date: '2024-12-18', title: 'Решение по делу', hasFile: true },
    ],
    events: [
      { id: 'e1', date: '2024-12-18', title: 'Вынесено решение', description: 'Исковые требования удовлетворены частично', isNew: true },
      { id: 'e2', date: '2024-11-25', title: 'Судебное заседание', description: 'Заседание по существу спора', isNew: false },
      { id: 'e3', date: '2024-10-15', title: 'Представлены доказательства', description: 'Истец представил дополнительные документы', isNew: false },
    ],
    isFavorite: true,
    hasNewDocuments: true,
    url: 'https://kad.arbitr.ru/Card/12345'
  },
  {
    id: '2',
    caseNumber: 'А41-67890/2024',
    court: 'Арбитражный суд Московской области',
    judge: 'Петрова М.И.',
    plaintiff: 'ИП Козлов В.Н.',
    defendant: 'ООО "МегаСтрой"',
    status: 'appeal',
    stage: 'appeal',
    dateFiled: '2024-01-20',
    lastUpdate: '2024-12-15',
    summary: 'Оспаривание решения арбитражного управляющего в рамках дела о банкротстве',
    amount: '8 900 000 ₽',
    documents: [
      { id: 'd5', type: 'Исковое заявление', date: '2024-01-20', title: 'Заявление о признании банкротом', hasFile: true },
      { id: 'd6', type: 'Решение', date: '2024-06-10', title: 'Решение суда первой инстанции', hasFile: true },
      { id: 'd7', type: 'Апелляционная жалоба', date: '2024-07-05', title: 'Апелляционная жалоба', hasFile: true },
      { id: 'd8', type: 'Определение', date: '2024-12-15', title: 'Определение о назначении заседания', hasFile: true },
    ],
    events: [
      { id: 'e4', date: '2024-12-15', title: 'Назначено апелляционное заседание', description: 'Дата рассмотрения: 25.12.2024', isNew: true },
      { id: 'e5', date: '2024-07-05', title: 'Подана апелляционная жалоба', isNew: false },
      { id: 'e6', date: '2024-06-10', title: 'Вынесено решение первой инстанции', isNew: false },
    ],
    isFavorite: false,
    hasNewDocuments: true,
    url: 'https://kad.arbitr.ru/Card/67890'
  },
  {
    id: '3',
    caseNumber: 'А56-11111/2023',
    court: 'Арбитражный суд города Санкт-Петербурга и Ленинградской области',
    judge: 'Сидоров К.П.',
    plaintiff: 'АО "БалтТранс"',
    defendant: 'ООО "ПортЛогистик"',
    status: 'completed',
    stage: 'first_instance',
    dateFiled: '2023-09-01',
    lastUpdate: '2024-02-28',
    summary: 'Взыскание убытков, причинённых ненадлежащим исполнением обязательств по договору транспортной экспедиции',
    amount: '3 200 000 ₽',
    documents: [
      { id: 'd9', type: 'Исковое заявление', date: '2023-09-01', title: 'Исковое заявление', hasFile: true },
      { id: 'd10', type: 'Решение', date: '2024-01-15', title: 'Решение - иск удовлетворён', hasFile: true },
      { id: 'd11', type: 'Исполнительный лист', date: '2024-02-28', title: 'Исполнительный лист', hasFile: true },
    ],
    events: [
      { id: 'e7', date: '2024-02-28', title: 'Выдан исполнительный лист', isNew: false },
      { id: 'e8', date: '2024-01-15', title: 'Вынесено решение', description: 'Исковые требования удовлетворены в полном объёме', isNew: false },
    ],
    isFavorite: true,
    hasNewDocuments: false,
    url: 'https://kad.arbitr.ru/Card/11111'
  },
  {
    id: '4',
    caseNumber: 'А50-22222/2024',
    court: 'Девятый арбитражный апелляционный суд',
    judge: 'Козлова Е.В.',
    plaintiff: 'ООО "ФинКонсалт"',
    defendant: 'ООО "ИнвестГрупп"',
    status: 'active',
    stage: 'cassation',
    dateFiled: '2024-05-10',
    lastUpdate: '2024-12-20',
    summary: 'Спор о взыскании вознаграждения по договору оказания консультационных услуг',
    amount: '5 670 000 ₽',
    documents: [
      { id: 'd12', type: 'Кассационная жалоба', date: '2024-10-01', title: 'Кассационная жалоба', hasFile: true },
      { id: 'd13', type: 'Определение', date: '2024-12-20', title: 'Определение о передаче жалобы к рассмотрению', hasFile: true },
    ],
    events: [
      { id: 'e9', date: '2024-12-20', title: 'Жалоба передана к рассмотрению', description: 'Назначено заседание на 15.01.2025', isNew: true },
      { id: 'e10', date: '2024-10-01', title: 'Подана кассационная жалоба', isNew: false },
    ],
    isFavorite: false,
    hasNewDocuments: true,
    url: 'https://kad.arbitr.ru/Card/22222'
  },
  {
    id: '5',
    caseNumber: 'А65-33333/2024',
    court: 'Арбитражный суд Республики Татарстан',
    judge: 'Мухаметшин Р.А.',
    plaintiff: 'ООО "КазаньСтрой"',
    defendant: 'Муниципальное образование г. Казань',
    status: 'active',
    stage: 'first_instance',
    dateFiled: '2024-07-01',
    lastUpdate: '2024-12-10',
    summary: 'Оспаривание результатов государственной закупки (электронный аукцион)',
    amount: '45 000 000 ₽',
    documents: [
      { id: 'd14', type: 'Заявление', date: '2024-07-01', title: 'Заявление о признании результатов закупки недействительными', hasFile: true },
      { id: 'd15', type: 'Определение', date: '2024-07-15', title: 'Определение о принятии заявления', hasFile: true },
      { id: 'd16', type: 'Протокол', date: '2024-12-10', title: 'Протокол судебного заседания', hasFile: true },
    ],
    events: [
      { id: 'e11', date: '2024-12-10', title: 'Судебное заседание', description: 'Допрошены свидетели, исследованы документы', isNew: false },
      { id: 'e12', date: '2024-11-20', title: 'Представлены доказательства', isNew: false },
    ],
    isFavorite: true,
    hasNewDocuments: false,
    url: 'https://kad.arbitr.ru/Card/33333'
  },
  {
    id: '6',
    caseNumber: 'А40-44444/2024',
    court: 'Арбитражный суд города Москвы',
    judge: 'Николаев Д.А.',
    plaintiff: 'Банк ВТБ (ПАО)',
    defendant: 'ООО "АльфаТрейд"',
    status: 'bankruptcy',
    stage: 'first_instance',
    dateFiled: '2024-02-01',
    lastUpdate: '2024-12-22',
    summary: 'Дело о банкротстве должника по заявлению кредитора',
    amount: '156 000 000 ₽',
    documents: [
      { id: 'd17', type: 'Заявление', date: '2024-02-01', title: 'Заявление о признании банкротом', hasFile: true },
      { id: 'd18', type: 'Решение', date: '2024-05-20', title: 'Решение о введении конкурсного производства', hasFile: true },
      { id: 'd19', type: 'Отчёт', date: '2024-12-22', title: 'Отчёт конкурсного управляющего', hasFile: true },
    ],
    events: [
      { id: 'e13', date: '2024-12-22', title: 'Представлен отчёт конкурсного управляющего', description: 'Опубликован отчёт за IV квартал 2024', isNew: true },
      { id: 'e14', date: '2024-05-20', title: 'Введено конкурсное производство', isNew: false },
    ],
    isFavorite: false,
    hasNewDocuments: true,
    url: 'https://kad.arbitr.ru/Card/44444'
  }
];

export const mockNotifications: Notification[] = [
  {
    id: 'n1',
    caseId: '1',
    caseNumber: 'А40-12345/2024',
    message: 'Новое решение по делу',
    date: '2024-12-18',
    read: false,
    type: 'decision'
  },
  {
    id: 'n2',
    caseId: '2',
    caseNumber: 'А41-67890/2024',
    message: 'Назначено апелляционное заседание на 25.12.2024',
    date: '2024-12-15',
    read: false,
    type: 'hearing'
  },
  {
    id: 'n3',
    caseId: '4',
    caseNumber: 'А50-22222/2024',
    message: 'Кассационная жалоба передана к рассмотрению',
    date: '2024-12-20',
    read: false,
    type: 'status'
  },
  {
    id: 'n4',
    caseId: '6',
    caseNumber: 'А40-44444/2024',
    message: 'Новый документ: отчёт конкурсного управляющего',
    date: '2024-12-22',
    read: false,
    type: 'document'
  },
  {
    id: 'n5',
    caseId: '1',
    caseNumber: 'А40-12345/2024',
    message: 'Определение о назначении заседания',
    date: '2024-11-25',
    read: true,
    type: 'hearing'
  }
];
