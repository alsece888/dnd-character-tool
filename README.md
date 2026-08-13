# 跑团角色表工具（D&D 5E）

一个纯前端、单文件的跑团角色信息填写工具：

- 无需安装、无需联网（打开 HTML 即用）
- 角色数据保存在浏览器本地（localStorage），支持 JSON 导入/导出
- 内置职业/子职业/专长/法术/装备等规则库，职业与子职业内容整理自 5E 不全书（含官方与第三方/模组来源标注）

## 使用

直接访问 GitHub Pages 地址即可，或在本地双击 `index.html` 使用。

## 数据保存提醒

角色数据仅保存在当前浏览器的本地存储中，换浏览器或清除缓存会丢失；建议定期到「JSON」页导出备份。

## MALO-跑团角色卡插件（Owlbear Rodeo 扩展）

配套的 Owlbear Rodeo 扩展，把角色卡带进跑团房间：

- 安装链接：`https://alsece888.github.io/dnd-character-tool/character-card/manifest.json`
- 使用方法：
  1. 在 Owlbear Rodeo 个人资料页点「Add Extension」，粘贴上面的 manifest 链接；
  2. 在房间设置里启用「MALO-跑团角色卡插件」扩展；
  3. 打开扩展面板，导入「角色信息填写工具」导出的角色 JSON；
  4. 场景中右键棋子 →「绑定角色」→ 查看角色卡、调整血量，棋子头顶会显示 HP 标签，全房间同步。
