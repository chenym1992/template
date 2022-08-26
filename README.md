# react-typescript

## 技术栈

- vite: ^3.0.7
- typescript: ^4.6.4
- react: ^18.2.0
- react-dom: ^18.2.0
- react-redux: ^8.0.2
- react-router-dom: ^6.3.0
- styled-components: ^5.3.5
- react-i18next ^11.18.4
  - i18next ^21.9.1
  - i18next-http-backend ^1.4.1
  - i18next-browser-languagedetector ^6.1.5

## 项目目录

```
├── public  //vite public
│   └── locales //国际化json文件
├── src
│   ├── assets  // asstes
│   ├── components  // 公共组件
│   ├── constants  //常量
│   ├── hooks  //自定义hooks
│   ├── pages  //页面组件
│   ├── state  //redux state
│   ├── theme  //主题
│   ├── utils  //工具
│   ├── i18n.ts //国际化
│   ├── main.tsx  //入口
│   └── vite-env.d.ts
├── index.html
├── LICENSE
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 开发步骤

### install

```
pnpm install
```

### dev

```
pnpm dev
```

### build

```
pnpm build
```

### preview

```
pnpm preview
```
