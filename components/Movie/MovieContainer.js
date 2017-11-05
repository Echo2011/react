//1. 导入 react
import React from 'react'

import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

// 导入电影列表组件
import MovieList from './MovieList'
//详情页组件
import MovieDetail from './MovieDetail'

import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

//2. 导出组件
export default class MovieContainer extends React.Component{

  constructor(){
    super()

    const arr = ['/in_theaters','/coming_soon','/top250'];

    console.log('location', location)
    
      var hash =  '/'+location.hash.split('/')[2];
  
      var num = arr.indexOf(hash) + 1  
  
        num =  num > 0 ? num : 1 
  
      this.key  = num + '';
      
      console.log(hash);

  }

  render(){
    return (<Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[ this.key]}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%' }}
        >
            <Menu.Item key="1"><Link to='/movie/in_theaters/1'>正在热映</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/movie/coming_soon/1'>即将上映</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/movie/top250/1'>Top250</Link>Top250</Menu.Item>

        </Menu>
      </Sider>
      <Layout style={{  }}>
    
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
        
        {/* 1. 通过 switch 是不想两个都出现 只能显示一个*/}
        {/* 2. 把`具体`的放在第一个  参数的放在后面 */}

        <Switch>
          <Route path='/movie/detail/:id' component={ MovieDetail }></Route>
          <Route path='/movie/:movieType/:page' component={ MovieList }></Route>
        </Switch>
          {/* <Route path='/movie/coming_soon' component={ MovieList}></Route>
          <Route path='/movie/top250' component={ MovieList}></Route> */}
        </Content>
      </Layout>
    </Layout>)
  }
}