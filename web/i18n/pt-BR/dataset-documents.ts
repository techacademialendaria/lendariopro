const translation = {
  list: {
    title: 'Documentos',
    desc: 'Todos os arquivos do Knowledge são mostrados aqui, e todo o Knowledge pode ser vinculado a citações do Lab[IA] ou indexado por meio do plugin Chat.',
    addFile: 'adicionar arquivo',
    addPages: 'Adicionar Páginas',
    table: {
      header: {
        fileName: 'NOME DO ARQUIVO',
        words: 'PALAVRAS',
        hitCount: 'CONTAGEM DE RECUPERAÇÃO',
        uploadTime: 'HORA DO UPLOAD',
        status: 'STATUS',
        action: 'AÇÃO',
      },
      name: 'Nome',
      rename: 'Renomear',
    },
    action: {
      uploadFile: 'Enviar novo arquivo',
      settings: 'Configurações de segmento',
      addButton: 'Adicionar fragmento',
      add: 'Adicionar um fragmento',
      batchAdd: 'Adicionar em lote',
      archive: 'Arquivar',
      unarchive: 'Desarquivar',
      delete: 'Excluir',
      enableWarning: 'O arquivo arquivado não pode ser habilitado',
      sync: 'Sincronizar',
    },
    index: {
      enable: 'Habilitar',
      disable: 'Desabilitar',
      all: 'Todos',
      enableTip: 'O arquivo pode ser indexado',
      disableTip: 'O arquivo não pode ser indexado',
    },
    status: {
      queuing: 'Em fila',
      indexing: 'Indexando',
      paused: 'Pausado',
      error: 'Erro',
      available: 'Disponível',
      enabled: 'Habilitado',
      disabled: 'Desabilitado',
      archived: 'Arquivado',
    },
    empty: {
      title: 'Ainda não há documentação',
      upload: {
        tip: 'Você pode enviar arquivos, sincronizar do site ou de aplicativos da web como Notion, GitHub, etc.',
      },
      sync: {
        tip: 'O Lab[IA] baixará periodicamente arquivos do seu Notion e concluirá o processamento.',
      },
    },
    delete: {
      title: 'Tem certeza que deseja excluir?',
      content: 'Se você precisar retomar o processamento posteriormente, continuará de onde parou',
    },
    batchModal: {
      title: 'Adicionar fragmentos em lote',
      csvUploadTitle: 'Arraste e solte seu arquivo CSV aqui ou ',
      browse: 'navegar',
      tip: 'O arquivo CSV deve seguir a seguinte estrutura:',
      question: 'pergunta',
      answer: 'resposta',
      contentTitle: 'conteúdo do fragmento',
      content: 'conteúdo',
      template: 'Baixe o modelo aqui',
      cancel: 'Cancelar',
      run: 'Executar em lote',
      runError: 'Falha ao executar em lote',
      processing: 'Processando em lote',
      completed: 'Importação concluída',
      error: 'Erro na importação',
      ok: 'OK',
    },
    addUrl: 'Adicionar URL',
  },
  metadata: {
    title: 'Metadados',
    desc: 'A rotulagem de metadados para documentos permite que a IA acesse-os de maneira oportuna e expõe a fonte de referências para os usuários.',
    dateTimeFormat: 'D MMMM, YYYY hh:mm A',
    docTypeSelectTitle: 'Selecione um tipo de documento',
    docTypeChangeTitle: 'Alterar tipo de documento',
    docTypeSelectWarning:
      'Se o tipo de documento for alterado, os metadados preenchidos agora não serão mais preservados',
    firstMetaAction: 'Vamos lá',
    placeholder: {
      add: 'Adicionar ',
      select: 'Selecionar ',
    },
    source: {
      upload_file: 'Enviar arquivo',
      notion: 'Sincronizar do Notion',
      github: 'Sincronizar do Github',
    },
    type: {
      book: 'Livro',
      webPage: 'Página da Web',
      paper: 'Artigo',
      socialMediaPost: 'Postagem em Mídias Sociais',
      personalDocument: 'Documento Pessoal',
      businessDocument: 'Documento Empresarial',
      IMChat: 'Chat de IM',
      wikipediaEntry: 'Entrada da Wikipedia',
      notion: 'Sincronizar do Notion',
      github: 'Sincronizar do Github',
      technicalParameters: 'Parâmetros Técnicos',
    },
    field: {
      processRule: {
        processDoc: 'Processar Documento',
        segmentRule: 'Regra de Fragmentação',
        segmentLength: 'Comprimento dos Fragmentos',
        processClean: 'Limpeza de Texto',
      },
      book: {
        title: 'Título',
        language: 'Idioma',
        author: 'Autor',
        publisher: 'Editora',
        publicationDate: 'Data de Publicação',
        ISBN: 'ISBN',
        category: 'Categoria',
      },
      webPage: {
        title: 'Título',
        url: 'URL',
        language: 'Idioma',
        authorPublisher: 'Autor/Editor',
        publishDate: 'Data de Publicação',
        topicsKeywords: 'Tópicos/Palavras-chave',
        description: 'Descrição',
      },
      paper: {
        title: 'Título',
        language: 'Idioma',
        author: 'Autor',
        publishDate: 'Data de Publicação',
        journalConferenceName: 'Nome do Jornal/Conferência',
        volumeIssuePage: 'Volume/Edição/Página',
        DOI: 'DOI',
        topicsKeywords: 'Tópicos/Palavras-chave',
        abstract: 'Resumo',
      },
      socialMediaPost: {
        platform: 'Plataforma',
        authorUsername: 'Autor/Nome de Usuário',
        publishDate: 'Data de Publicação',
        postURL: 'URL da Postagem',
        topicsTags: 'Tópicos/Tags',
      },
      personalDocument: {
        title: 'Título',
        author: 'Autor',
        creationDate: 'Data de Criação',
        lastModifiedDate: 'Data da Última Modificação',
        documentType: 'Tipo de Documento',
        tagsCategory: 'Tags/Categoria',
      },
      businessDocument: {
        title: 'Título',
        author: 'Autor',
        creationDate: 'Data de Criação',
        lastModifiedDate: 'Data da Última Modificação',
        documentType: 'Tipo de Documento',
        departmentTeam: 'Departamento/Equipe',
      },
      IMChat: {
        chatPlatform: 'Plataforma de Chat',
        chatPartiesGroupName: 'Partes/Grupo do Chat',
        participants: 'Participantes',
        startDate: 'Data de Início',
        endDate: 'Data de Término',
        topicsKeywords: 'Tópicos/Palavras-chave',
        fileType: 'Tipo de Arquivo',
      },
      wikipediaEntry: {
        title: 'Título',
        language: 'Idioma',
        webpageURL: 'URL da Página da Web',
        editorContributor: 'Editor/Contribuidor',
        lastEditDate: 'Data da Última Edição',
        summaryIntroduction: 'Resumo/Introdução',
      },
      notion: {
        title: 'Título',
        language: 'Idioma',
        author: 'Autor',
        createdTime: 'Data de Criação',
        lastModifiedTime: 'Data da Última Modificação',
        url: 'URL',
        tag: 'Tag',
        description: 'Descrição',
      },
      github: {
        repoName: 'Nome do Repositório',
        repoDesc: 'Descrição do Repositório',
        repoOwner: 'Proprietário do Repositório',
        fileName: 'Nome do Arquivo',
        filePath: 'Caminho do Arquivo',
        programmingLang: 'Linguagem de Programação',
        url: 'URL',
        license: 'Licença',
        lastCommitTime: 'Data do Último Commit',
        lastCommitAuthor: 'Autor do Último Commit',
      },
      originInfo: {
        originalFilename: 'Nome do arquivo original',
        originalFileSize: 'Tamanho do arquivo original',
        uploadDate: 'Data de envio',
        lastUpdateDate: 'Data da última atualização',
        source: 'Fonte',
      },
      technicalParameters: {
        segmentSpecification: 'Especificação dos fragmentos',
        segmentLength: 'Comprimento dos fragmentos',
        avgParagraphLength: 'Comprimento médio do parágrafo',
        paragraphs: 'Parágrafos',
        hitCount: 'Contagem de recuperação',
        embeddingTime: 'Tempo de incorporação',
        embeddedSpend: 'Tempo gasto na incorporação',
      },
    },
    languageMap: {
      zh: 'Chinês',
      en: 'Inglês',
      es: 'Espanhol',
      fr: 'Francês',
      de: 'Alemão',
      ja: 'Japonês',
      ko: 'Coreano',
      ru: 'Russo',
      ar: 'Árabe',
      pt: 'Português',
      it: 'Italiano',
      nl: 'Holandês',
      pl: 'Polonês',
      sv: 'Sueco',
      tr: 'Turco',
      he: 'Hebraico',
      hi: 'Hindi',
      da: 'Dinamarquês',
      fi: 'Finlandês',
      no: 'Norueguês',
      hu: 'Húngaro',
      el: 'Grego',
      cs: 'Tcheco',
      th: 'Tailandês',
      id: 'Indonésio',
    },
    categoryMap: {
      book: {
        fiction: 'Ficção',
        biography: 'Biografia',
        history: 'História',
        science: 'Ciência',
        technology: 'Tecnologia',
        education: 'Educação',
        philosophy: 'Filosofia',
        religion: 'Religião',
        socialSciences: 'Ciências Sociais',
        art: 'Arte',
        travel: 'Viagem',
        health: 'Saúde',
        selfHelp: 'Autoajuda',
        businessEconomics: 'Negócios/Economia',
        cooking: 'Culinária',
        childrenYoungAdults: 'Crianças/Jovens Adultos',
        comicsGraphicNovels: 'Quadrinhos/Graphic Novels',
        poetry: 'Poesia',
        drama: 'Drama',
        other: 'Outro',
      },
      personalDoc: {
        notes: 'Notas',
        blogDraft: 'Rascunho de Blog',
        diary: 'Diário',
        researchReport: 'Relatório de Pesquisa',
        bookExcerpt: 'Trecho de Livro',
        schedule: 'Agenda',
        list: 'Lista',
        projectOverview: 'Visão Geral do Projeto',
        photoCollection: 'Coleção de Fotos',
        creativeWriting: 'Escrita Criativa',
        codeSnippet: 'Trecho de Código',
        designDraft: 'Rascunho de Design',
        personalResume: 'Currículo Pessoal',
        other: 'Outro',
      },
      businessDoc: {
        meetingMinutes: 'Minutos de Reunião',
        researchReport: 'Relatório de Pesquisa',
        proposal: 'Proposta',
        employeeHandbook: 'Manual do Funcionário',
        trainingMaterials: 'Materiais de Treinamento',
        requirementsDocument: 'Documento de Requisitos',
        designDocument: 'Documento de Design',
        productSpecification: 'Especificação do Produto',
        financialReport: 'Relatório Financeiro',
        marketAnalysis: 'Análise de Mercado',
        projectPlan: 'Plano de Projeto',
        teamStructure: 'Estrutura da Equipe',
        policiesProcedures: 'Políticas e Procedimentos',
        contractsAgreements: 'Contratos e Acordos',
        emailCorrespondence: 'Correspondência por E-mail',
        other: 'Outro',
      },
    },
  },
  embedding: {
    processing: 'Processando incorporação...',
    paused: 'Incorporação pausada',
    completed: 'Incorporação concluída',
    error: 'Erro na incorporação',
    docName: 'Pré-processamento do documento',
    mode: 'Regra de segmentação',
    segmentLength: 'Comprimento dos fragmentos',
    textCleaning: 'Definição prévia e limpeza de texto',
    segments: 'Parágrafos',
    highQuality: 'Modo de alta qualidade',
    economy: 'Modo econômico',
    estimate: 'Consumo estimado',
    stop: 'Parar processamento',
    resume: 'Retomar processamento',
    automatic: 'Automático',
    custom: 'Personalizado',
    previewTip: 'A visualização do parágrafo estará disponível após a incorporação ser concluída',
  },
  segment: {
    paragraphs: 'Parágrafos',
    keywords: 'Palavras-chave',
    addKeyWord: 'Adicionar palavra-chave',
    keywordError: 'O comprimento máximo da palavra-chave é 20',
    characters: 'caracteres',
    hitCount: 'Contagem de recuperação',
    vectorHash: 'Hash do vetor: ',
    questionPlaceholder: 'adicionar pergunta aqui',
    questionEmpty: 'A pergunta não pode estar vazia',
    answerPlaceholder: 'adicionar resposta aqui',
    answerEmpty: 'A resposta não pode estar vazia',
    contentPlaceholder: 'adicionar conteúdo aqui',
    contentEmpty: 'O conteúdo não pode estar vazio',
    newTextSegment: 'Novo fragmento de texto',
    newQaSegment: 'Novo fragmento de P&R',
    delete: 'Excluir este fragmento?',
  },
}

export default translation
