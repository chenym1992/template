# 框架模板(typescript)

工作中常用的几种框架模板

---
### 写在之前  

约定git提交信息按照以下规范，不再利用hooks进行提交信息验证

git commit message 规范  

commit message 就是对你这次的代码提交进行一个简单的说明，好的提交说明可以让人一眼就明白这次代码提交做了什么。

commit message 的格式：
```md
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

commit message 分为三个部分(使用空行分割):

- 标题行（subject）: 必填, 描述主要修改类型和内容。
- 主题内容（body）: 描述为什么修改, 做了什么样的修改, 以及开发的思路等等。
- 页脚注释（footer）: 可以写注释，放 BUG 号的链接。

commit 的类型：

- feat: 新功能、新特性
- fix: 修改 bug
- perf: 更改代码，以提高性能（在不影响代码内部行为的前提下，对程序性能进行优化）
- refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
- docs: 文档修改
- style: 代码格式修改, 注意不是 css 修改（例如分号修改）
- test: 测试用例新增、修改
- build: 影响项目构建或依赖项修改
- revert: 恢复上一次提交
- ci: 持续集成相关文件修改
- chore: 其他修改（不在上述类型中的修改）
- release: 发布新版本
---

## 项目列表

- ## [react-typescript(vite)](https://github.com/chenym1992/template/tree/react-typescript)



