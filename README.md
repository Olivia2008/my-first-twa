# 开发记录
[Ton Tutorials](https://helloworld.tonstudio.io/01-wallet/)
[Ton Tutorials Code](https://github.com/ton-community/tutorials/blob/main/01-wallet/index.md)

## Working with the your first wallet

### Step 1: Create a new wallet using Tonkeeper app

### Step 2: View the wallet by address in an explorer

>  https://testnet.tonscan.org

### Step 3: Fund and deploy your wallet contract

> 从telegram bot发送2Ton 到你的钱包地址，再从你的钱包地址发送0.01Ton到其它钱包地址，就可激活钱包账户，从[TonExplor](https://testnet.tonscan.org/address)去查看是否激活

open the faucet `https://t.me/testgiver_ton_bot` and request some coins from the bot by providing your wallet address.
⚠️钱包版本，这里用的wallet v4 r2

### Step 4: Create github pages

参考：https://pages.github.com/

- 1)根据提示创建page
- 2)在github上创建twa工程，将dist文件放到分支gh-pages中
- 3)在当前分支的Pages->settings,将Branch指向到gh-pages上
注意：
1、GitHub的username去命名io
2、tonconnect-manifest.json中url是`https://username.github.io/your-project`
3、`<TonConnectUIProvider manifestUrl=‘https://username.github.io/your-project/tonconnect-manifest.json’>`
4、访问my-first-twa
https://olivia2008.github.io/my-first-twa/

### Step 5: Set up App with coding

node version: v16+

#### 安装

```bash
npm create vite@latest my-twa -- --template react-ts
cd my-twa
npm install

npm install @ton/ton @ton/core @ton/crypto
npm install @orbs-network/ton-access

npm install vite-plugin-node-polyfills

npm install @tonconnect/ui-react

```

#### Vite.config.ts配置
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),nodePolyfills()],
  base: '/my-first-twa/'
})

```


#### manifestUrl配置
将GitHub pages配置好后就可配置manifest URL

```ts
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
const manifestUrl = 'https://olivia2008.github.io/my-first-twa/tonconnect-manifest.json';
createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>,
)
```

#### 连接钱包
```ts
import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';

function App() {
  return (
    <div>
      <TonConnectButton />
    </div>
  );
}

export default App

```

### Step 6: Publish web app to GitHub Pages

根据step4创建工程及github pages完成后，配置`manifest.json`

**Create the file public/tonconnect-manifest.json with this content**
```bash
{
  "url": "https://olivia2008.github.io/my-first-twa",
  "name": "Ausli First TWA",
  "iconUrl":"https://olivia2008.github.io/my-first-twa/icon.svg"
}
```

### Step 7: Publish web app as TWA in Telegram

add the [TWA SDK](https://github.com/twa-dev)
```bash
npm install @twa-dev/sdk

```
edit src/App.tsx and add the following import

```ts
import '@twa-dev/sdk';

```
open your telegram botfather: https://t.me/botfather
- input "/start"
- choose "/newbot": create a new bot select 
根据提示给new bot命名：一个是name, 一个是username,最终的访问是以username(t.me/user_name_bot)
- input "/mybots": 可查看你的bot详情
- 输入你的github pages访问地址，即可在telegram中打开进行dapps的操作
以下是操作图片展示


```html
<div style="display: flex; justify-content: space-around">
  <img src='/public/botfather.jpg' width=100>
  <img src='/public/dapp1.jpg' width=100>
  <img src='/public/dapp2.jpg' width=100>
  <img src='/public/dapp3.jpg' width=100>
</div>
```
