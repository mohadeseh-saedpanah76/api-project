import React from 'react'
import axios from 'axios'
// import axios from '../../axios'

import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'

import './Blog.css'

class Blog extends React.Component {
  // چون چیزی که از ای پی آی میاد قراره بره تو مرورگر و یه تغییراتی ایجاد کنه پس باید یه استیت واسه پست ها داشته باشیم
  state = {
    posts : [],
    selectedPostId : null,
    error : false
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) =>{
      // this.setState({posts : response.data})
      //ؤیسپانس مقدارهای زیادی داشت ما فقط مقدار دیتا رو میخواهیم
      //اکسیوس دات گت یک تابع ای سینکرونوسه و برای اینکه ما یک تاخیر زمانی داشته باشیم از پرامیس استفاده میکنیم
      //چون مقدار دیتا 100 تا هست میخواهیم مقدارش کمتر بشه و بجای اوتدر اسم نویسنده رو بیاره
      const posts = response.data.slice(0 , 4)
      //حالا پست یک آرایه شد
      const updatedPosts = posts.map((item)=>{
        //چیزی که برمیکرده باید یک آبجت باشهپ

        return {
          // میخواهیم آبجکت ما همه ی اطلاعات قبلی پست رو داشته باشه و یک داده ی جدید هم به اون اضافه بشه
          //اطلاعات قبلی رو با اسپرید آپریتور میاریم توی آبجکت 
          ...item,
          author : "Mohadeseh"
        }
      })
      //مقدار آپدیتد پست در آخر باید برگرده و در دام نشون داده بشه
      //حالا چون آرایه ی پست ها عوض شده باید اونو در استیت ست کنیم
      this.setState({posts : updatedPosts})
    })
    .catch((err)=>{
      this.setState({error:true})
    })
  }
  //این تابع قرارع با انتخاب هرپست یا کلیک روی هر پست اون پست رو نمایش بده
  //و پست ها بر اساس آیدی شناسایی میشوند
  selectPostHandler =(id)=>{
      this.setState({ selectedPostId : id})
  }
  //چون می خواهیم پست انتخاب شده در فول پست نمایش داده بشه پس این سلکتد پست آی باید در فول پست نمایش داده بشه
   render() {
     //می خواهیم برای زمانی که اررور داشتیم در ارتباط با بک اند کد زیر نمایش داده بشه
    //  let posts = <p style={{textAlign : 'center'}}>Fetching data failed!</p>
     //میخواهیم بگوییم اگر اررور وجود نداشت پست هارو نشون بده
    //  if(!this.state.error)
      //میخواهیم در آرایه ی پست یه لوپ بزنیم و هر خونه ی آرایه رو به عنوان یک پست در نظر بگیریم
     const posts = this.state.posts.map((item) =>{
      //میخاهیم مقدار تایتل موجود در ای پی آی رو برابر با مقدار تایتل در پست بذاریم
      return <Post title ={item.title} key={item.id} author={item.author} click ={() => this.selectPostHandler(item.id)}/>
    }) //مقدار بالا رو در یک متغیر به اسم پستس میریزیم و اونو بصورت داینامیک در سکشن مربوط به پست فراخانی میکنیم
  
    return (
      <div className='blog'>
        <header>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/new-post'>New Post</a>
              </li>
            </ul>
        </header>
        <section className="posts">
          {posts}
        </section>
        <section>
          <FullPost id = {this.state.selectedPostId}/>
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    )
  }
}

export default Blog
