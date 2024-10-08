const translation = {
  apiServer: 'API 伺服器',
  apiKey: 'API 金鑰',
  status: '狀態',
  disabled: '已停用',
  ok: '執行中',
  copy: '複製',
  copied: '已複製',
  play: '播放',
  pause: '暫停',
  playing: '播放中',
  loading: '載入中',
  merMaid: {
    rerender: '重新渲染',
  },
  never: '從未',
  apiKeyModal: {
    apiSecretKey: 'API 金鑰',
    apiSecretKeyTips: '如果不想你的 API 被濫用，請保護好你的 API Key :) 最佳實踐是避免在前端程式碼中明文引用。',
    createNewSecretKey: '建立金鑰',
    secretKey: '金鑰',
    created: '建立時間',
    lastUsed: '最後使用',
    generateTips: '請將此金鑰儲存在安全且可訪問的地方。',
  },
  actionMsg: {
    deleteConfirmTitle: '刪除此金鑰？',
    deleteConfirmTips: '刪除金鑰無法撤銷，正在使用中的應用會受影響。',
    ok: '好的',
  },
  completionMode: {
    title: '文字生成型應用 API',
    info: '可用於生成高質量文字的應用，例如生成文章、摘要、翻譯等，透過呼叫 completion-messages 介面，傳送使用者輸入得到生成文字結果。用於生成文字的模型引數和提示詞模版取決於開發者在 Lab[IA] 提示詞編排頁的設定。',
    createCompletionApi: '建立文字補全訊息',
    createCompletionApiTip: '建立文字補全訊息，支援一問一答模式。',
    inputsTips: '（選填）以鍵值對方式提供使用者輸入欄位，與提示詞編排中的變數對應。Key 為變數名稱，Value 是引數值。如果欄位型別為 Select，傳入的 Value 需為預設選項之一。',
    queryTips: '使用者輸入的文字正文。',
    blocking: 'blocking 阻塞型，等待執行完畢後返回結果。（請求若流程較長可能會被中斷）',
    streaming: 'streaming 流式返回。基於 SSE（**[Server-Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)**）實現流式返回。',
    messageFeedbackApi: '訊息反饋（點贊）',
    messageFeedbackApiTip: '代表終端使用者對返回訊息進行評價，可以點贊與點踩，該資料將在“日誌與標註”頁中可見，並用於後續的模型微調。',
    messageIDTip: '訊息 ID',
    ratingTip: 'like 或 dislike， 空值為撤銷',
    parametersApi: '獲取應用配置資訊',
    parametersApiTip: '獲取已配置的 Input 引數，包括變數名、欄位名稱、型別與預設值。通常用於客戶端載入後顯示這些欄位的表單或填入預設值。',
  },
  chatMode: {
    title: '對話型應用 API',
    info: '可用於大部分場景的對話型應用，採用一問一答模式與使用者持續對話。要開始一個對話請呼叫 chat-messages 介面，透過繼續傳入返回的 conversation_id 可持續保持該會話。',
    createChatApi: '傳送對話訊息',
    createChatApiTip: '建立會話訊息，或基於此前的對話繼續傳送訊息。',
    inputsTips: '（選填）以鍵值對方式提供使用者輸入欄位，與提示詞編排中的變數對應。Key 為變數名稱，Value 是引數值。如果欄位型別為 Select，傳入的 Value 需為預設選項之一。',
    queryTips: ' 使用者輸入/提問內容',
    blocking: 'blocking 阻塞型，等待執行完畢後返回結果。（請求若流程較長可能會被中斷）',
    streaming: 'streaming 流式返回。基於 SSE（**[Server-Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)**）實現流式返回。',
    conversationIdTip: '（選填）會話識別符號，首次對話可為空，如果要繼續對話請傳入上下文返回的 conversation_id',
    messageFeedbackApi: '訊息反饋（點贊）',
    messageFeedbackApiTip: '代表終端使用者對返回訊息進行評價，可以點贊與點踩，該資料將在“日誌與標註”頁中可見，並用於後續的模型微調。',
    messageIDTip: '訊息 ID',
    ratingTip: 'like 或 dislike， 空值為撤銷',
    chatMsgHistoryApi: '獲取會話歷史訊息',
    chatMsgHistoryApiTip: '滾動載入形式返回歷史聊天記錄，第一頁返回最新 `limit` 條，即：倒序返回。',
    chatMsgHistoryConversationIdTip: '會話 ID',
    chatMsgHistoryFirstId: '當前頁第一條聊天記錄的 ID，預設 none',
    chatMsgHistoryLimit: '一次請求返回多少條聊天記錄',
    conversationsListApi: '獲取會話列表',
    conversationsListApiTip: '獲取當前使用者的會話列表，預設返回最近的 20 條。',
    conversationsListFirstIdTip: ' 當前頁最前面一條記錄的 ID，預設 none',
    conversationsListLimitTip: '一次請求返回多少條記錄',
    conversationRenamingApi: '會話重新命名',
    conversationRenamingApiTip: '對會話進行重新命名，會話名稱用於顯示在支援多會話的客戶端上。',
    conversationRenamingNameTip: '新的名稱',
    parametersApi: '獲取應用配置資訊',
    parametersApiTip: '獲取已配置的 Input 引數，包括變數名、欄位名稱、型別與預設值。通常用於客戶端載入後顯示這些欄位的表單或填入預設值。',
  },
  develop: {
    requestBody: 'Request Body',
    pathParams: 'Path Params',
    query: 'Query',
  },
  regenerate: '重新生成',
}

export default translation
