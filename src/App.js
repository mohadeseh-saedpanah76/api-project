import React from 'react'
//میخواهیم ای پی آی های مربوط به ریکت روتر رو بصورت ایموپرت نیمد اضافه کنیم
//چیزهایی که توی آکولاد باز و بسته میاد یه سری ای پی آی هستن
//برازیر روتر از روتر یعنی از برازر روتر به عنوان روتر هم میشه استفاده کرد و براوزر روتر اصلی ترین ای پی آی هست
import {BrowserRouter  as Router} from 'react-router-dom'

import Blog from './containers/Blog/Blog'

class App extends React.Component {
  //باید بخش اصلی کد زیر رو در کامپوننت روتر قرار بدیم
  render(){
    return(
    <Router>
      <div>
      <Blog />
    </div>
    </Router>
    )
  }
}

export default App