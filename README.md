TypeScript Lowdb File Db Demo
===========================

以JSON文件为数据库。

但是在typescript中难以运行，会报错：

```
Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: .../node_modules/lowdb/lib/index.js
```

原因是作者固执的要求使用纯ESM module，对于很多项目都带来不便: https://github.com/typicode/lowdb/issues/480

```
npm install
npm run demo
```

