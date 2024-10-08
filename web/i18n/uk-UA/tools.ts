const translation = {
  title: 'Інструменти',
  createCustomTool: 'Створити власний інструмент',
  type: {
    all: 'Усі',
    builtIn: 'Вбудовані',
    custom: 'Користувацькі',
    workflow: 'Робочий процес',
  },
  contribute: {
    line1: 'Мені цікаво зробити свій внесок',
    line2: 'створення інструментів для Lab[IA].',
    viewGuide: 'Переглянути інструкцію',
  },
  author: 'Автор',
  auth: {
    unauthorized: 'Авторизуватися',
    authorized: 'Авторизовано',
    setup: 'Налаштувати авторизацію, щоб використовувати',
    setupModalTitle: 'Налаштування авторизації',
    setupModalTitleDescription: 'Після налаштування облікових даних усі члени робочого простору можуть використовувати цей інструмент під час оркестрування програм.',
  },
  includeToolNum: '{{num}} інструмент(ів) включено',
  addTool: 'Додати інструмент ',
  createTool: {
    title: 'Створити власний інструмент',
    editAction: 'Налаштування',
    editTitle: 'Редагувати настроюваний інструмент',
    name: 'Назва',
    toolNamePlaceHolder: 'Введіть назву інструменту',
    schema: 'Схема',
    schemaPlaceHolder: 'Введіть свою схему OpenAPI тут',
    viewSchemaSpec: 'Переглянути специфікацію OpenAPI-Swagger',
    importFromUrl: 'Імпортувати з URL-адреси',
    importFromUrlPlaceHolder: 'https://...',
    urlError: 'Введіть дійсну URL-адресу',
    examples: 'Приклади',
    exampleOptions: {
      json: 'Погода (JSON)',
      yaml: 'Зоотоварів (YAML)',
      blankTemplate: 'Чистий шаблон',
    },
    availableTools: {
      title: 'Доступні інструменти',
      name: 'Назва',
      description: 'Опис',
      method: 'Метод',
      path: 'Шлях',
      action: 'Дія',
      test: 'Перевірка',
    },
    authMethod: {
      title: 'Метод авторизації',
      type: 'Тип авторизації',
      keyTooltip: 'Ключ HTTP-заголовка. Якщо ви не знаєте, залиште його як "Authorization" або встановіть власне значення',
      types: {
        none: 'Відсутня',
        api_key: 'API-ключ',
        apiKeyPlaceholder: 'Назва HTTP-заголовка для API-ключа',
        apiValuePlaceholder: 'Введіть API-ключ',
      },
      key: 'Ключ',
      value: 'Значення',
    },
    authHeaderPrefix: {
      types: {
        basic: 'Basic',
        bearer: 'Bearer',
        custom: 'Custom',
      },
      title: 'Тип аутентифікації',
    },
    privacyPolicy: 'Політика конфіденційності',
    privacyPolicyPlaceholder: 'Введіть політику конфіденційності',
    customDisclaimer: 'Власний відомості',
    customDisclaimerPlaceholder: 'Введіть власні відомості',
    deleteToolConfirmTitle: 'Видалити цей інструмент?',
    deleteToolConfirmContent: 'Видалення інструменту є незворотнім. Користувачі більше не зможуть отримати доступ до вашого інструменту.',
    toolInput: {
      label: 'Мітки',
      name: 'Ім\'я',
      required: 'Необхідний',
      method: 'Метод',
      title: 'Введення інструменту',
      methodSetting: 'Параметр',
      description: 'Опис',
      methodParameter: 'Параметр',
      labelPlaceholder: 'Виберіть теги (необов\'язково)',
      descriptionPlaceholder: 'Опис значення параметра',
      methodSettingTip: 'Користувач заповнює конфігурацію інструменту',
      methodParameterTip: 'LLM заповнюється під час логічного висновку',
    },
    description: 'Опис',
    nameForToolCall: 'Ім\'я виклику інструменту',
    confirmTitle: 'Підтвердьте, щоб зберегти?',
    nameForToolCallTip: 'Підтримує лише цифри, літери та підкреслення.',
    confirmTip: 'Це вплине на програми, які використовують цей інструмент',
    nameForToolCallPlaceHolder: 'Використовується для розпізнавання машин, таких як getCurrentWeather, list_pets',
    descriptionPlaceholder: 'Короткий опис призначення інструменту, наприклад, отримання температури для конкретного місця.',
  },
  test: {
    title: 'Тест',
    parametersValue: 'Параметри та значення',
    parameters: 'Параметри',
    value: 'Значення',
    testResult: 'Результати тесту',
    testResultPlaceholder: 'Результат тесту буде відображатися тут',
  },
  thought: {
    using: 'Використання',
    used: 'Використано',
    requestTitle: 'Запит до',
    responseTitle: 'Відповідь від',
  },
  setBuiltInTools: {
    info: 'Інформація',
    setting: 'Налаштування',
    toolDescription: 'Опис інструменту',
    parameters: 'Параметри',
    string: 'Рядок',
    number: 'Число',
    required: 'Обов’язково',
    infoAndSetting: 'Інформація та налаштування',
  },
  noCustomTool: {
    title: 'Немає користувацьких інструментів!',
    content: 'Додавайте та керуйте своїми власними інструментами тут для створення програм зі штучним інтелектом.',
    createTool: 'Створити інструмент',
  },
  noSearchRes: {
    title: 'Вибачте, немає результатів!',
    content: 'Ми не знайшли жодних інструментів, які б відповідали вашому пошуку.',
    reset: 'Скинути пошук',
  },
  builtInPromptTitle: 'Підказка',
  toolRemoved: 'Інструмент видалено',
  notAuthorized: 'Інструмент не авторизовано',
  howToGet: 'Як отримати',
  addToolModal: {
    category: 'категорія',
    add: 'Додати',
    added: 'Додано',
    type: 'тип',
    manageInTools: 'Керування в інструментах',
    emptyTip: 'Перейдіть до розділу "Робочий процес -> Опублікувати як інструмент"',
    emptyTitle: 'Немає доступного інструменту для роботи з робочими процесами',
  },
  openInStudio: 'Відкрити в Студії',
  customToolTip: 'Дізнайтеся більше про користувацькі інструменти Dify',
  toolNameUsageTip: 'Ім\'я виклику інструменту для міркувань і підказок агента',
}

export default translation
