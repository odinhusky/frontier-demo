# Frontier-demo

本專案為展示用的 demo site, 利用以下技術完成單一頁面，具有分頁、切換顯示模式、跳出燈箱等基礎功能。

-   Vue CLI
-   Vue 3 Composition API
-   TailwindCSS
    -   雖然使用 TailwindCSS 但沒有使用預先刻畫好的元件，全部都以客製化為基礎去製作最基礎的 UI 介面。
-   Axios

## 下載並在本地端運行

下載整包專案資料夾或是在 Github 先 `fork` 一份以後，使用 `git clone` 從遠端數據庫拉下來

### 1. 進行模組的下載

    cd frontier/demo
    npm install

### 2. 進行本地端運行

    npm install

### 3. 依據建議的 url 進行本地端的運行

    npm run serve

## 執行專案遇到的問題與方法

1. 使用 Composition API 要非常注意資料的傳遞是否為 Impl 的物件包覆著 value，以及取用資料時要記得用 `propsname.value` 取得，
2. 因為這次只需要打一隻 API，所以透過全域掛載的方式將 axios 的本體掛載上去，但要打多個 API 的時候就應該封裝成一個 _requset_ 的 function，利用不同的變數區隔不同 API 的請求資料。
3. Vue CLI 可以直接加入 TailwindCSS 是之前都沒遇過，之前使用 Vue CLI 的時候都是用 SCSS 居多，使用 Vite 的時候則使用 TailwindCSS，但後來就在 youtube 上找到解答，利用 `vue add tailwindcss` 解決。
