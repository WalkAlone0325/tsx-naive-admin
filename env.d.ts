/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

import type {
  DialogApi,
  LoadingBarApi,
  MessageApi,
  NotificationApi
} from 'naive-ui'

declare global {
  interface Window {
    $message: MessageApi
    $dialog: DialogApi
    $loadingBar: LoadingBarApi
    $notification: NotificationApi
  }
}
