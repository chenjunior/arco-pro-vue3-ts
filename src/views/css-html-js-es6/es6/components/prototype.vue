<!--
 * @Author: Chen.Junior
 * @LastEditTime: 2022-07-09 15:15:45
 * @Description: 原型和原型链
-->
<template>
  <div class="template-padding-bottom">
    <h2 class="h2-title">3，原型与原型链</h2>
    <p> JavaScript 是基于原型的语言。要理解原型，必须记住下面几条并且理解 </p>

    <div class="focus-box">
      <ul class="ul-box">
        <li>
          所有的引用类型（ 数组，对象，函数
          ），都具有对象特性，即可自由扩展属性（ null 除外)
        </li>
        <li>
          所有的引用类型（ 数组，对象，函数 ），都有一个 __proto__
          属性，属性值是一个普通的对象</li
        >
        <li> 所有的函数，都有一个 prototype 属性，属性值也是一个普通的对象 </li>
        <li>
          所有的引用类型（ 数组，对象，函数 ）, __proto__
          属性值都指向它的构造函数的 prototype 属性值
        </li>
      </ul>
    </div>
    <p> 通过一下代码解释一下： </p>

    <div v-highlight>
      <pre class="highlight-pre">
            <code class="javascript highlight-code">
                // 要点1：引用类型的扩展性
                var obj = {}
                obj.a = 100
                console.log(obj)    // 结果是： { a: 100 }

                var arr = []
                arr.a = 100
                console.log(arr)    // 结果是： [a: 100]

                function fn(){}
                fn.a = 100
                console.log(fn.a)    // 结果是： 100

                // 要点2：引用类型都有__proto__属性
                console.log(obj.__proto__)
                console.log(arr.__proto__)
                console.log(fn.__proto__)
                
                // 要点3：函数有prototype属性
                console.log(fn.prototype)

                // 要点4：引用类型的 __proto__ 属性值指向它的构造函数的 prototype 属性值
                console.log(obj.__proto__ === Object.prototype)   // 结果是： true
            </code>
        </pre>
    </div>

    <h3>原型</h3>
    <div v-highlight>
      <pre class="highlight-pre">
            <code class="javascript highlight-code">
                // 构造函数
                function Foo (name, age) {
                    this.name = name
                }

                Foo.prototype.alertName = function() {
                    alert(this.name)
                }

                // 创建实例
                var f = new Foo('zhangshan')
                f.printName = function() {
                    console.log(this.name)
                }

                f.printName()   // 结果是：zhangshan
                f.alertName()   // 结果是：弹出 zhangshan
            </code>
        </pre>
    </div>

    <p>
      执行 printName 时，很好理解，但是执行 alertName
      时，发现了什么事情？这里记住一个重点：
      <strong>
        当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么就会去他的
        __proto__ （即它的构造函数的 prototype）中寻找，
      </strong>
      因此 f.alertName 就会找到Foo.prototype.alertName。
    </p>
    <p>
      那么如何判断这个属性是不是对象本身的属性呢？可以使用
      hasOwnProperty，hasOwnProperty()
      只会检测对象的自有属性，不会对对象原型上的属性进行检测。常用的地方是遍历一个对象的时候，如下：
    </p>

    <div v-highlight>
      <pre class="highlight-pre">
            <code class="javascript highlight-code">
                var item = {
                    a:1,
                    b:2,
                    c:3,
                    __proto__:{
                        lastName:"li"
                    }
                }

                for(f in item) {
                    if(item.hasOwnProperty(f)) {
                        console.log(f)
                    }
                }

                // 打印结果是：a b c
            </code>
        </pre>
    </div>
    <h3>原型链</h3>
    <p> 接着上面的示例，如果增加执行 f.toString() 时，又发生了什么呢？ </p>

    <div v-highlight>
      <pre class="highlight-pre">
            <code class="javascript highlight-code">
                ...

                // 测试
                f.printName()
                f.alertName()
                f.toString()    // 结果是： '[object Object]'
            </code>
        </pre>
    </div>
    <p>
      因为 f 本身没有 toString()，并且 f.__protot__ （即 Foo.prototype）中也没有
      toString。这里就要拿出上面说的那句话————
      <strong>
        当试图得到一个对象的某个属性是，如果这个对象本身没有这个属性，则会去它
        __proto__ (即它的构造函数 prototype) 中寻找。
      </strong>
      所以在 f.__proto__ 中没有找到 toString，那么就会继续去
      f.__proto__.__proto__ 中去寻找，此时因为 f.__proto__
      就是一个普通的对象。流程如下：
    </p>

    <div class="focus-box">
      <ul class="ul-box">
        <li> f.__proto__ 即 Foo.prototype，没有找到 toSting，继续往上找 </li>
        <li>
          f.__proto__.__proto__ 即 Foo.prototype.__proto__，Foo.prototype
          就是一个普通对象，因此 Foo.prototype.__proto__ 就是
          Object.prototype，在这里可以找到 toString
        </li>
        <li> 因此，f.toString() 最终找到的是 Object.prototype.toString() </li>
      </ul>
    </div>

    <p>
      这样一直往上找，你会发现是一个链式结构，所以就叫做
      <strong>原型链</strong>。 如果一直找到最上层都没有找到的话，那么就会返回
      undefined。
    </p>
    <p>
      <strong
        >注意1：原型链的最上层是：Object.prototype.__proto__ === null。</strong
      >
    </p>

    <p>
      <strong>
        注意2：所有从原型或更高级原型中得到、执行的方法，其中的 this
        在执行时，就要指向了当前这个触发事件执行的对象。因此 printName 和
        alertName 中的 this 都是 f。
      </strong>
    </p>
  </div>
</template>
