import React from 'react'
import axios from 'axios'
//چون کد ما اینجا ثابته از همون روش اول میریم و روش پیشرفته برای فایل های بزرگتر استفاده میشه
// import axios from '../../axios'

import './FullPost.css'

class FullPost extends React.Component {
  state = {
    //منظور از لوددپست پستیه که سلکت شده و اومده توی فول پست
    loadedPost : null
  }
  //چون میخاهیم تایتل و کانتنت  موقع انتخاب پست داینامیک بشه باید یک متد لایف سایکل تعریف کنیم
  //این متد در هنگام آپدیت شدن استفاده میشه
  //و توابع لایف سایکل قبل رندر تعریف میشن
  //متد کامپوننت دید آپدیت زمانی استفاده میشه که میخواهیم وقتی اطلاعات از بک اند میاد یه سری آپدیت روی اون انجام بشه
  //بعدش بره روی مرورگر
  componentDidUpdate(){
    //این شرط میگه اگه اصلا پستی وجود داشت این کار ها رو بکن
    if(this.props.id){
      //می خواهیم بگیم اول چک کن ببین اگه پستی قبلا کلیک نشده این کار و براش بکن
      //یا اگر محصولی قبلا کلیک شده و آیدی که گرفیتم از ورودی برابر نباشه با آیدی پستی که گرفتیم
      //برای این این شرط رو تعیین کردیم که هنگامی یه پست کلیک تکراری بشه توی لوپ نیوفتیم
      if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id))
      axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
        .then((response)=>{
          this.setState({
            //مقداری که از بکند میاد میره توی لودد پست
            loadedPost : response.data
          })
        })
    }
  }
  deletePostHandler =()=>{
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
      .then((response)=>{
        console.log(response)
      })
  }
 render(){
  let post = <p style ={{textAlign : "center"}}>Please select a Post</p>

  if(this.props.id){ 
    <p style ={{textAlign : "center"}}>Loading...</p>
  }
  //میخواهیم بگیم اگر پست وجود داشت اونو در فول پست نمایش بده
  //پس باید یک شرط تعیین کنیم بگیم اگر آی دی وجود داشت این کار رو بکن
  if(this.state.loadedPost){
    post = (
      <div className="full-post">
        <h2>{this.state.loadedPost.title}</h2>
        <p>{this.state.loadedPost.body}</p>
        <div>
          <button className="delete" onClick = {this.deletePostHandler}>Delete</button>
        </div>
      </div>
    )
  }
  return post
 }
  
}

export default FullPost