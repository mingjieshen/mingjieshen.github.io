# echarts3-chinese-map-drill-down
Echarts3中国地图下钻至县级

预览地址：https://touxing.github.io/echarts3-chinese-map-drill-down/index.html

![map drill down](./static/img/map2.gif)

## 运行项目

### 1.git clone 项目

### 2.在根目录启动一个web服务器访问
使用vscode的同学可以直接用 `Go Live` 插件

## 新增功能

添加mock数据
- [x] 优化地图渲染，如果mock请求数据出错，采取地图自身数据+random人数渲染

- [x] 接入本地数据
  - 爬取城市数据不完整，有城市级数据的省份，查看 `mock/city` 目录，山东、河南 有下钻数据
  - [x] 直辖市二级下钻与三级数据入栈判断存在问题

> 个别直辖市的mock数据没有区域数据，会导致排行榜只有一个数据展示，例如：北京、天津
> 重庆直辖市没有mock，会从地图渲染，排行榜有区域数据展示

> 地图资源参考: https://github.com/touxing/echarts-geo-json
