//1. 
import React from 'react'

import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

import './../src/css/app.css'

import HomeContainer from './Home/HomeContainer'
import MovieContainer from './Movie/MovieContainer'
import AboutContainer from './About/AboutContainer'

//1. b 没有# 
//2. 点击多次 没有警告

// hash (推荐) 安全
//1. 有#
//2. 点击有警告

import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//2. 创建并导出组件
export default class App extends React.Component {

  constructor(props){
    super(props)
    // #/
    // #/about
    // #/movie/in_theaters/1
    //  # movie in_theaters 1

    const arr = ['/','/movie','/about'];

    var hash =  '/'+location.hash.split('/')[1];

    var num = arr.indexOf(hash) + 1  

     num =  num > 0 ? num : 1 

    this.key  = num + '';

  }


  render(){
    return (
    <Router>
    <Layout style={{ height:'100%' }} className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[this.key]}  // 1 2 3
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to='/'>首页</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/movie/in_theaters/1'>电影列表</Link></Menu.Item>
        <Menu.Item key="3"><Link to='/about'>关于</Link></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ }}>
  
      <div style={{ background: '#fff',  minHeight: 280 }}>
        <Route exact path='/' component={ HomeContainer }></Route>
        <Route path='/movie' component={ MovieContainer }></Route>
        <Route path='/about' component={ AboutContainer }></Route>

      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
     传智播客 ©2016 Created by 黑马程序员
    </Footer>
  </Layout>
  </Router>)
  }
}