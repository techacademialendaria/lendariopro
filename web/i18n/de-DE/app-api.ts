const translation = {
  apiServer: 'API Server',
  apiKey: 'API Schlüssel',
  status: 'Status',
  disabled: 'Deaktiviert',
  ok: 'In Betrieb',
  copy: 'Kopieren',
  copied: 'Kopiert',
  play: 'Abspielen',
  pause: 'Pause',
  playing: 'Wiedergabe',
  merMaid: {
    rerender: 'Neu rendern',
  },
  never: 'Nie',
  apiKeyModal: {
    apiSecretKey: 'API Geheimschlüssel',
    apiSecretKeyTips: 'Um Missbrauch der API zu verhindern, schützen Sie Ihren API Schlüssel. Vermeiden Sie es, ihn als Klartext im Frontend-Code zu verwenden. :)',
    createNewSecretKey: 'Neuen Geheimschlüssel erstellen',
    secretKey: 'Geheimschlüssel',
    created: 'ERSTELLT',
    lastUsed: 'ZULETZT VERWENDET',
    generateTips: 'Bewahren Sie diesen Schlüssel an einem sicheren und zugänglichen Ort auf.',
  },
  actionMsg: {
    deleteConfirmTitle: 'Diesen Geheimschlüssel löschen?',
    deleteConfirmTips: 'Diese Aktion kann nicht rückgängig gemacht werden.',
    ok: 'OK',
  },
  completionMode: {
    title: 'Completion App API',
    info: 'Für die Erzeugung von hochwertigem Text, wie z.B. Artikel, Zusammenfassungen und Übersetzungen, verwenden Sie die Completion-Messages API mit Benutzereingaben. Die Texterzeugung basiert auf den Modellparametern und Vorlagen für Aufforderungen in Lab[IA] Prompt Engineering.',
    createCompletionApi: 'Completion Nachricht erstellen',
    createCompletionApiTip: 'Erstellen Sie eine Completion Nachricht, um den Frage-Antwort-Modus zu unterstützen.',
    inputsTips: '(Optional) Geben Sie Benutzereingabefelder als Schlüssel-Wert-Paare an, die Variablen in Prompt Eng. entsprechen. Schlüssel ist der Variablenname, Wert ist der Parameterwert. Wenn der Feldtyp Select ist, muss der übermittelte Wert eine der voreingestellten Optionen sein.',
    queryTips: 'Textinhalt der Benutzereingabe.',
    blocking: 'Blockierender Typ, wartet auf die Fertigstellung der Ausführung und gibt Ergebnisse zurück. (Anfragen können unterbrochen werden, wenn der Prozess lang ist)',
    streaming: 'Streaming Rückgaben. Implementierung der Streaming-Rückgabe basierend auf SSE (Server-Sent Events).',
    messageFeedbackApi: 'Nachrichtenfeedback (Like)',
    messageFeedbackApiTip: 'Bewerten Sie empfangene Nachrichten im Namen der Endbenutzer mit Likes oder Dislikes. Diese Daten sind auf der Seite Logs & Annotations sichtbar und werden für zukünftige Modellanpassungen verwendet.',
    messageIDTip: 'Nachrichten-ID',
    ratingTip: 'like oder dislike, null ist rückgängig machen',
    parametersApi: 'Anwendungsparameterinformationen abrufen',
    parametersApiTip: 'Abrufen konfigurierter Eingabeparameter, einschließlich Variablennamen, Feldnamen, Typen und Standardwerten. Typischerweise verwendet, um diese Felder in einem Formular anzuzeigen oder Standardwerte nach dem Laden des Clients auszufüllen.',
  },
  chatMode: {
    title: 'Chat App API',
    info: 'Für vielseitige Gesprächsanwendungen im Q&A-Format rufen Sie die chat-messages API auf, um einen Dialog zu initiieren. Führen Sie laufende Gespräche fort, indem Sie die zurückgegebene conversation_id übergeben. Antwortparameter und -vorlagen hängen von den Einstellungen in Lab[IA] Prompt Eng. ab.',
    createChatApi: 'Chatnachricht erstellen',
    createChatApiTip: 'Eine neue Konversationsnachricht erstellen oder einen bestehenden Dialog fortsetzen.',
    inputsTips: '(Optional) Geben Sie Benutzereingabefelder als Schlüssel-Wert-Paare an, die Variablen in Prompt Eng. entsprechen. Schlüssel ist der Variablenname, Wert ist der Parameterwert. Wenn der Feldtyp Select ist, muss der übermittelte Wert eine der voreingestellten Optionen sein.',
    queryTips: 'Inhalt der Benutzereingabe/Frage',
    blocking: 'Blockierender Typ, wartet auf die Fertigstellung der Ausführung und gibt Ergebnisse zurück. (Anfragen können unterbrochen werden, wenn der Prozess lang ist)',
    streaming: 'Streaming Rückgaben. Implementierung der Streaming-Rückgabe basierend auf SSE (Server-Sent Events).',
    conversationIdTip: '(Optional) Konversations-ID: für erstmalige Konversation leer lassen; conversation_id aus dem Kontext übergeben, um den Dialog fortzusetzen.',
    messageFeedbackApi: 'Nachrichtenfeedback des Endbenutzers, like',
    messageFeedbackApiTip: 'Bewerten Sie empfangene Nachrichten im Namen der Endbenutzer mit Likes oder Dislikes. Diese Daten sind auf der Seite Logs & Annotations sichtbar und werden für zukünftige Modellanpassungen verwendet.',
    messageIDTip: 'Nachrichten-ID',
    ratingTip: 'like oder dislike, null ist rückgängig machen',
    chatMsgHistoryApi: 'Chatverlaufsnachricht abrufen',
    chatMsgHistoryApiTip: 'Die erste Seite gibt die neuesten `limit` Einträge in umgekehrter Reihenfolge zurück.',
    chatMsgHistoryConversationIdTip: 'Konversations-ID',
    chatMsgHistoryFirstId: 'ID des ersten Chat-Datensatzes auf der aktuellen Seite. Standardmäßig keiner.',
    chatMsgHistoryLimit: 'Wie viele Chats in einer Anfrage zurückgegeben werden',
    conversationsListApi: 'Konversationsliste abrufen',
    conversationsListApiTip: 'Ruft die Sitzungsliste des aktuellen Benutzers ab. Standardmäßig werden die letzten 20 Sitzungen zurückgegeben.',
    conversationsListFirstIdTip: 'Die ID des letzten Datensatzes auf der aktuellen Seite, standardmäßig keine.',
    conversationsListLimitTip: 'Wie viele Chats in einer Anfrage zurückgegeben werden',
    conversationRenamingApi: 'Konversation umbenennen',
    conversationRenamingApiTip: 'Konversationen umbenennen; der Name wird in Mehrsitzungs-Client-Schnittstellen angezeigt.',
    conversationRenamingNameTip: 'Neuer Name',
    parametersApi: 'Anwendungsparameterinformationen abrufen',
    parametersApiTip: 'Abrufen konfigurierter Eingabeparameter, einschließlich Variablennamen, Feldnamen, Typen und Standardwerten. Typischerweise verwendet, um diese Felder in einem Formular anzuzeigen oder Standardwerte nach dem Laden des Clients auszufüllen.',
  },
  develop: {
    requestBody: 'Anfragekörper',
    pathParams: 'Pfadparameter',
    query: 'Anfrage',
  },
  loading: 'Laden',
  regenerate: 'Erneuern',
}

export default translation
