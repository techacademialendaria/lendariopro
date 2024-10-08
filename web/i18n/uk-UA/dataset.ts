const translation = {
  knowledge: 'Знання',
  // Скорочення від 'документів'
  documentCount: ' док.',
  wordCount: ' тис. слів',
  appCount: ' пов\'язаних додатків',
  createDataset: 'Створити Знання',
  createDatasetIntro: 'Імпортуйте власні текстові дані або записуйте дані в реальному часі через Webhook для покращення LLM-контексту.',
  deleteDatasetConfirmTitle: 'Видалити це Знання?',
  deleteDatasetConfirmContent:
        'Видалення "Знання" є незворотнім. Користувачі більше не матимуть доступу до Знань, а всі конфігурації підказок і журнали будуть безповоротно видалені.',
  datasetUsedByApp: 'Ці знання використовуються деякими додатками. Додатки більше не зможуть використовувати ці Знання, а всі конфігурації підказок та журнали будуть остаточно видалені.',
  datasetDeleted: 'Знання видалено',
  datasetDeleteFailed: 'Не вдалося видалити Знання',
  didYouKnow: 'Чи знаєте ви?',
  intro1: 'Знання можна інтегрувати до програми Lab[IA] ',
  intro2: 'як контекст',
  intro3: ',',
  intro4: 'або його ',
  intro5: 'можна створити',
  intro6: ' як автономний плагін індексу ChatGPT для публікації',
  unavailable: 'Недоступно',
  unavailableTip: 'Модель вбудовування недоступна, необхідно налаштувати модель вбудовування за замовчуванням',
  datasets: 'ЗНАННЯ',
  datasetsApi: 'API',
  retrieval: {
    semantic_search: {
      title: 'Векторний пошук',
      description: 'Генерує вбудовування запитів і шукає фрагмент тексту, найбільш схожий на його векторне представлення.',
    },
    full_text_search: {
      title: 'Повнотекстовий пошук',
      description: 'Індексує всі терміни в документі, дозволяючи користувачам шукати будь-який термін і отримувати відповідний фрагмент тексту, що містить цей термін.',
    },
    hybrid_search: {
      title: 'Гібридний пошук',
      description: 'Виконуйте повнотекстовий пошук і векторний пошук одночасно, повторно ранжуючи, щоб вибрати найкращу відповідність на запит користувача. Необхідна конфігурація Rerank model API.',
      recommend: 'Рекомендовано',
    },
    invertedIndex: {
      title: 'Інвертований індекс',
      description: 'Інвертований індекс – це структура, яка використовується для ефективного пошуку. Організований за термінами, кожен термін вказує на документи або веб-сторінки, що його містять.',
    },
    change: 'Змінити',
    changeRetrievalMethod: 'Змінити метод пошуку',
  },
  docsFailedNotice: 'документи не вдалося проіндексувати',
  retry: 'Повторити спробу',
  indexingTechnique: {
    high_quality: 'ВЯ',
    economy: 'ЕКО',
  },
  indexingMethod: {
    semantic_search: 'ВЕКТОР',
    full_text_search: 'ПОВНИЙ ТЕКСТ',
    hybrid_search: 'ГІБРИД',
    invertedIndex: 'ІНВЕРТОВАНИЙ',
  },
  mixtureHighQualityAndEconomicTip: 'Модель перерангування потрібна для суміші високоякісних та економічних баз знань.',
  inconsistentEmbeddingModelTip: 'Модель перерангування потрібна, якщо моделі вбудовування вибраних баз знань є несумісними.',
  retrievalSettings: 'Налаштування пошуку',
  rerankSettings: 'Налаштування перерангування',
  weightedScore: {
    title: 'Зважена оцінка',
    description: 'Регулюючи призначені ваги, ця стратегія перерангування визначає, чи надавати пріоритет семантичному чи ключовому відповідності.',
    semanticFirst: 'Спочатку семантичний',
    keywordFirst: 'Спочатку ключове слово',
    customized: 'Налаштований',
    semantic: 'Семантичний',
    keyword: 'Ключове слово',
  },
  nTo1RetrievalLegacy: 'N-до-1 пошук буде офіційно застарілим з вересня. Рекомендується використовувати найновіший багатошляховий пошук для отримання кращих результатів.',
  nTo1RetrievalLegacyLink: 'Дізнатися більше',
  nTo1RetrievalLegacyLinkText: 'N-до-1 пошук буде офіційно застарілим у вересні.',
  defaultRetrievalTip: 'За замовчуванням використовується отримання кількома шляхами. Знання витягуються з кількох баз знань, а потім заново ранжуються.',
  editExternalAPIConfirmWarningContent: {
    front: 'Цей API зовнішніх знань пов\'язаний з',
    end: 'зовнішні знання, і ця модифікація буде застосована до всіх них. Ви впевнені, що хочете зберегти цю зміну?',
  },
  editExternalAPIFormWarning: {
    end: 'Зовнішні знання',
    front: 'Цей зовнішній API пов\'язаний з',
  },
  deleteExternalAPIConfirmWarningContent: {
    title: {
      front: 'Видалити',
      end: '?',
    },
    content: {
      front: 'Цей API зовнішніх знань пов\'язаний з',
      end: 'зовнішні знання. Видалення цього API призведе до втрати чинності всіх з них. Ви впевнені, що хочете видалити цей API?',
    },
    noConnectionContent: 'Ви впевнені, що видалили цей API?',
  },
  selectExternalKnowledgeAPI: {
    placeholder: 'Виберіть API зовнішніх знань',
  },
  connectDatasetIntro: {
    content: {
      link: 'Дізнайтеся, як створити зовнішній API',
      front: 'Щоб підключитися до зовнішньої бази знань, спочатку потрібно створити зовнішній API. Будь ласка, уважно прочитайте та зверніться до',
      end: '. Потім знайдіть відповідний ідентифікатор знань і заповніть його у формі зліва. Якщо вся інформація вірна, він автоматично перейде до пошукового тесту в базі знань після натискання кнопки підключення.',
    },
    title: 'Як підключитися до зовнішньої бази знань',
    learnMore: 'Дізнатися більше',
  },
  connectHelper: {
    helper2: 'Підтримується лише функція пошуку',
    helper4: 'Прочитайте довідкову документацію',
    helper3: '. Ми настійно рекомендуємо вам',
    helper5: 'Уважно перед використанням цієї функції.',
    helper1: 'Підключайтеся до зовнішніх баз знань через API та ідентифікатор бази знань. Наразі',
  },
  externalKnowledgeForm: {
    cancel: 'Скасувати',
    connect: 'Підключатися',
  },
  externalAPIForm: {
    encrypted: {
      end: 'Технології.',
      front: 'Ваш токен API буде зашифровано та збережено за допомогою',
    },
    name: 'Ім\'я',
    edit: 'Редагувати',
    apiKey: 'Ключ API',
    cancel: 'Скасувати',
    save: 'Рятувати',
    endpoint: 'Кінцева точка API',
  },
  externalKnowledgeDescriptionPlaceholder: 'Опишіть, що міститься в цій базі знань (необов\'язково)',
  externalAPIPanelDocumentation: 'Дізнайтеся, як створити API зовнішніх знань',
  externalAPIPanelTitle: 'API зовнішніх знань',
  externalKnowledgeDescription: 'Опис знань',
  noExternalKnowledge: 'API зовнішніх знань поки що не існує, натисніть тут, щоб створити',
  externalTag: 'Зовнішній',
  externalKnowledgeId: 'Зовнішній ідентифікатор знань',
  externalAPI: 'Зовнішній API',
  createExternalAPI: 'Додавання зовнішнього API знань',
  createNewExternalAPI: 'Створення нового API зовнішніх знань',
  externalKnowledgeName: 'Зовнішнє найменування знань',
  externalKnowledgeNamePlaceholder: 'Будь ласка, введіть назву бази знань',
  editExternalAPITooltipTitle: 'ПОВ\'ЯЗАНІ ЗНАННЯ',
  editExternalAPIFormTitle: 'Редагування API зовнішніх знань',
  connectDataset: 'Підключення до зовнішньої бази знань',
  learnHowToWriteGoodKnowledgeDescription: 'Навчіться писати хороший опис знань',
  allExternalTip: 'При використанні тільки зовнішніх знань користувач може вибрати, чи включати модель Rerank. Якщо цей параметр не увімкнено, отримані фрагменти будуть відсортовані на основі оцінок. Коли стратегії пошуку різних баз знань несумісні, це буде неточно.',
  mixtureInternalAndExternalTip: 'Модель Rerank необхідна для поєднання внутрішніх і зовнішніх знань.',
  externalKnowledgeIdPlaceholder: 'Будь ласка, введіть Knowledge ID',
  externalAPIPanelDescription: 'API зовнішніх знань використовується для підключення до бази знань за межами Dify і отримання знань із цієї бази знань.',
}

export default translation
