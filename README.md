<h1 align="center">Nonebot Annotation</h1>

<p align="center">
    <a href="https://github.com/botuniverse/onebot"><img src="https://img.shields.io/badge/Onebot-v11,v12-brightgreen.svg?" alt="onebot"></a>
    <a href="https://github.com/nonebot/nonebot2"><img src="https://img.shields.io/badge/Nonebot2-rc1-blue.svg?" alt="nonebot2"></a>
    <a href="https://github.com/Mrs4s/go-cqhttp"><img src="https://img.shields.io/badge/Gocqhttp-rc1-yellow.svg?" alt="nonebot2"></a>
</p>

## Nonebot2的文档注解~~《山海经注》~~

这里总结了个人对于Nonebot2的使用方法总结，以及对Nonebot抽象模型的分析，希望可以帮助：

- 有python基础（迭代器、生成器、装饰器、异步了解），本文档不会涉及关于python基本语法及用法，如果没有入门建议先学python.jpg
- 希望了解Onebot与Nonebot的关系，以及nb2与gocqhttp及其他客户端如何沟通的朋友
- 希望能了解Nonebot2中各种模型是怎样应用，常见插件的写法的朋友

这里文档大部分会以Onebot v11协议，与Gocqhttp连接作为示例

## TODO

### Nonebot2详解

- [ ] Nb2各个组件的说明，以及作用：Driver，Adapter，Bot，Event，Plugin，Matcher，Message

- [ ] Nb2的启动流程
- [ ] 事件是怎样触发的，事件又是怎么被处理的，中间经过了哪些过程
- [ ] 怎样调用平台的API，中间经过了哪些过程
- [ ] Matcher的几个参数分别是什么，EventType，Rule，Permission，priority，block
- [ ] Matcher的各种处理方法，handle，got
- [ ] Matcher.handle的几个参数分别是什么，Matcher，Bot，Event，State
- [ ] Nonebot的依赖注入（DI）能做什么，怎么使用
- [ ] Nonebot的几个Hook能做什么，怎么使用
- [ ] 自己定义一个新的插件并使用！
- [ ] 自己定义一个新的Event并触发！
- [ ] 自己定义一个新的Adapter！

### Onebot内容

- [ ] 协议是什么，为什么要有协议
- [ ] Onebot是什么协议
- [ ] 怎么使用Onebot协议进行通信
- [ ] 不如，自己写一个新的协议！

咕咕咕，等我写完微信adapter再说...

## 感谢

- **[Onebot](https://github.com/botuniverse/onebot)**：统一的聊天机器人应用接口标准
- **Nonebot2**：跨平台 Python 异步聊天机器人框架
- **[Go-cqhttp](https://github.com/Mrs4s/go-cqhttp)**：cqhttp的golang实现，轻量、原生跨平台.

