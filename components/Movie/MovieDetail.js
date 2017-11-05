
//1. 导入 react
import React from 'react'

import { Button, Icon ,Spin} from 'antd';

const imgUrl = 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2499793218.jpg';



//2. 导出组件
export default class MovieDetail extends React.Component{


  constructor(){
    super()

    this.state = {
      movieDetail:{},
      isLoading:true
    }
  }

  componentWillMount(){

    var id = this.props.match.params.id;

    fetch(`/api/movie/subject/${id}`)
    .then(res=>res.json())
    .then((data)=>{

      console.log('data',data)
      this.setState({
        movieDetail:data,
        isLoading:false
      })
      
    })
  }


  render(){

    var data = this.state.movieDetail;
    return  (<div>
      <Button onClick={ ()=>{  this.ml_goBack() } } type="primary">
            <Icon type="left" />返回
      </Button>
     <div>
      {
        this.state.isLoading ? 
        ( <div style={ styles.centerStyle }><Spin size="large" /></div> ) : 
        (<div>
          <h1 style={ styles.centerStyle }>{data.title}</h1>
          <div style={  styles.centerStyle }>
            <img src={ imgUrl} alt="错了"/>
          </div>
          <h3>主要演员</h3>
          <ul style={{ display:'flex' }}>
            {
              data.casts.map((item)=>{
                return (<li style={{ margin:20 }} key={item.id}>
                  <div style={  styles.centerStyle }>
                    <img src={ item.avatars.small } alt="" />
                  </div>
                  <p>{ item.name }</p>
                  </li>)
              })
            }
          </ul>
          <h3>剧情介绍</h3>
          <p style={{ textIndent:'2em' }}>{ data.summary }</p>
          
          </div>)
      }
     </div>
    </div>)
    
  }

  //公共方法
  ml_goBack(){

    this.props.history.goBack();
  }
}


const styles = {

  centerStyle:{
    textAlign:'center'
  }

}
