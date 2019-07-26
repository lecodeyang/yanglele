require('./css/red.css')
alert("成功了")
console.log("我又回来了")

import $ from "jquery"
import a from "./js/aa.js"
import Vue from 'vue'
import App from './app.vue'


//使用babel编译ES6
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log('my name is ' + this.name + ', ' + this.age + ' years old');
    }
}
$(function () {
    var person = new Person('payen', '25');
        console.log("我是jquery的，使用的是 import"+person.say())
 })
//实例化vue组件并挂载
//申明一个空div
const root=document.createElement('div');
document.body.appendChild(root);

//把app.vue的内容挂载到空div上
new Vue({
    render:(h) =>h(App)
}).$mount(root);