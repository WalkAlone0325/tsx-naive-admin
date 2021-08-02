/// <reference types="vite/client" />

import { DialogApi, LoadingBarApi, MessageApi, NotificationApi } from 'naive-ui'

declare global {
  interface Window {
    $message: MessageApi
    $dialog: DialogApi
    $loadingBar: LoadingBarApi
    $notification: NotificationApi
  }
}
