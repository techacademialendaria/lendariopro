const translation = {
  title: 'Configurações do conhecimento',
  desc: 'Aqui você pode modificar as propriedades e métodos de trabalho do conhecimento.',
  form: {
    name: 'Nome do conhecimento',
    namePlaceholder: 'Por favor, insira o nome do conhecimento',
    nameError: 'O nome não pode estar vazio',
    desc: 'Descrição do conhecimento',
    descInfo: 'Por favor, escreva uma descrição textual clara para delinear o conteúdo do conhecimento. Esta descrição será usada como base para a correspondência ao selecionar entre vários conhecimentos para inferência.',
    descPlaceholder: 'Descreva o que está neste conhecimento. Uma descrição detalhada permite que a IA acesse o conteúdo do conhecimento de forma oportuna. Se estiver vazio, o Lab[IA] usará a estratégia de correspondência padrão.',
    descWrite: 'Aprenda como escrever uma boa descrição do conhecimento.',
    permissions: 'Permissões',
    permissionsOnlyMe: 'Apenas eu',
    permissionsAllMember: 'Todos os membros da equipe',
    indexMethod: 'Método de indexação',
    indexMethodHighQuality: 'Alta qualidade',
    indexMethodHighQualityTip: 'Invocar o modelo de Embedding para processamento para fornecer maior precisão nas consultas dos usuários.',
    indexMethodEconomy: 'Econômico',
    indexMethodEconomyTip: 'Use motores de vetor offline, índices de palavras-chave, etc. para reduzir a precisão sem gastar tokens.',
    embeddingModel: 'Modelo de incorporação',
    embeddingModelTip: 'Altere o modelo incorporado, por favor, vá para ',
    embeddingModelTipLink: 'Configurações',
    retrievalSetting: {
      title: 'Configuração de recuperação',
      learnMore: 'Saiba mais',
      description: ' sobre o método de recuperação.',
      longDescription: ' sobre o método de recuperação, você pode alterar isso a qualquer momento nas configurações do conhecimento.',
    },
    save: 'Salvar',
    permissionsInvitedMembers: 'Membros parciais da equipe',
    me: '(Você)',
    retrievalSettings: 'Configurações de recuperação',
    externalKnowledgeID: 'ID de conhecimento externo',
    externalKnowledgeAPI: 'API de conhecimento externo',
  },
}

export default translation
