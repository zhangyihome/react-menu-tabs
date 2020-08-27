# react-menu-tabs

## 介绍

 本项目是基于react antd
 菜单可配置，点击一个菜单，打开一个tab页，tab为src/pages文件夹下的页面绝对路径

## 使用

npm i react-menu-tabs

在运行本项目前，确保系统已经安装了and，

车牌号键盘  

示例 

import MenuTabs from "react-menu-tabs";  
const mainMenu=[
      { name: '示例一', sub: [{ name: '示例1.1', path: 'demo/IndexPage' }] },
      { name: '示例二', sub: [{ name: '示例2.1', path: 'demo/IndexPage' },] },
    ]  
	
<MenuTabs mainMenu={mainMenu} />  



