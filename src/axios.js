import axios from 'axios'

//اینجا هم مثل همون فایل ایندکس دات جی اس یک آدرس ثابت برای کار با اکسیوس تعریف میکنیم
//وقتی از این روش استفاده میکنی دیگه لازم نیست در ایندکس دات جی اس اون تیکه کد مروطیه رو بنویسی
const instance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
})

export default instance