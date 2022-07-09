<!--
 * @Author: Chen.Junior
 * @LastEditTime: 2022-07-09 18:54:30
 * @Description: 作用域和闭包
-->
<template>
  <div class="template-padding-bottom">
    <h2 class="h2-title">4，作用域与闭包</h2>

    <p>
      要理解闭包，我们就要先了解
      <strong> 执行上下文 </strong>
    </p>

    <h3>执行上下文</h3>
    <div v-highlight>
      <pre class="highlight-pre">
            <code class="javascript highlight-code">
                // 题目：说出下面执行的结果（这里笔者直接注释输出了）
                console.log(a)  // 结果是：undefined
                var a = 100

                fn('zhangsan')  // 结果是：zhangsan 20
                function fn(name) {
                    age = 20
                    console.log(name, age)
                    var age
                }

                console.log(b) // 报错 Uncaught ReferenceError: b is not defined
                b = 100
            </code>
        </pre>
    </div>

    <p>
      <strong>解析：</strong>
      在一段JS脚本（即script标签中）执行之前，要先解析代码（所以说 JS
      是解释执行的脚本语言），解析的时候会先创建一个
      <strong>全局执行上下文</strong>
      环境，先把代码中即将执行的（函数内部的不算，因为你不知道函数何时执行）变量，函数声明都拿出来，变量会先暂时赋值为
      <strong>undefined</strong
      >，函数则先声明好可使用。然后再开始正式的执行出现。
      <strong>再次强调，这只是执行代码之前才开始的工作。</strong>
      为什么 a 是 undefined，而 b 却报错了。实际 JS 在代码执行之前，要
      <strong>全文解析</strong>
      发现 var a ，知道有个 a 的变量，存入了
      <strong>执行上下文，</strong>
      而 b 没有找到 var 关键字，这时候没有在 <strong>执行上下文</strong>提前
      <strong>占位</strong>，所以代码执行的时候，提到报到的 a
      是有记录的，只不过值暂时还没有赋值，即为 undefined，而 b 在
      <strong>执行上下文</strong>没有找找到，自然报错（没有找到 b 的引用）
    </p>
    <p>
      另外，一个函数在执行之前，也会创建一个
      <strong>函数执行上下文</strong>环境，跟
      <strong>全局上下文</strong>差不多，不过
      <strong>函数执行上下文</strong>中会多出 this，arguments和函数的参数。
    </p>
    <p> 总结一下： </p>
    <div class="focus-box">
      <ul class="ul-box">
        <li> 范围：一段 script、js文件或者一个函数中 </li>
        <li> 全局上下文： 变量定义，函数声明</li>
        <li>函数上下文：变量定义，函数声明，this，arguments</li>
      </ul>
    </div>

    <h3>this</h3>
    <p>
      记住一个很重要的概念————
      <strong> this 的值是在执行的时候才能确认，定义的时候不能确认！</strong>
      因为 this
      是执行上下文环境的一部分，而执行上下文需要在代码执行之前确定，而不是定义的时候。如下：
    </p>

    <div v-highlight>
      <pre class="highlight-pre">
        <code class="javascript highlight-code">
            var a = {
                name: 'A',
                fn: function() {
                    console.log(this.name)
                }
            }

            a.fn()  // 结果是：A
            a.fn().call({name: 'B'})  // 结果是：B

            var f = a.fn
            f()   // 结果是：window
            // 解析：这是因为虽然将 f 对象的 fn 方法赋值给变量 f 了，
            // 但是没有调用，跟我念这一句话：“this 永远指向最后调用它的那个对象”，
            // 由于刚刚的 f 并没有调用，所以 fn() 最后仍然是被 window 调用的。
            // 所以 this 指向的也就是 window。
        </code>
      </pre>
    </div>
    <strong>重点记住：this永远指向最后调用它的那个对象。</strong>

    <h3>作用域</h3>
    <p>
      <strong>ES6 之前，JS 没有块级作用域。</strong>
      如：
    </p>

    <div v-highlight>
      <pre class="highlight-pre">
        <code class="javascript highlight-code">
            function person(status) {
                if (status) {
                    var value = "zhangsan" 
                } else {
                    console.log(value)  // 结果是：undefined
                }
                console.log(value)  // 结果是：undefined
            }

            person(false)
        </code>
      </pre>
    </div>

    <p>
      从上面的例子可以体会到作用域的概念，作用域就是一个独立的地盘，让变量不会外泄、暴露出去。上面的
      value 就被暴露出去，是因为 var
      关键字会被提升到该作用域的最顶端，此时该作用域的最顶端是
      <strong>全局作用域</strong>， 这其实就是我们常常说的变量提升。因此：
      <strong
        >ES6 之前，JS 没有块级作用域，只有全局作用域和函数作用域。var
        关键字存在变量提升。
      </strong>
    </p>
    <p>
      <strong>ES6加入了块级作用域。</strong>
      如：
    </p>
    <div v-highlight>
      <pre class="highlight-pre">
        <code class="javascript highlight-code">
            function person(status) {
                if (status) {
                    let value = "zhangsan" 
                } else {
                    console.log(value)  // 报错
                }
                console.log(value)  // 报错
            }

            person(false)
        </code>
      </pre>
    </div>

    <p>
      因为 let是块级作用域，所有外面的语句块访问不到，let
      不存在变量提升，所以只在当前作用域有效。如
    </p>

    <div v-highlight>
      <pre class="highlight-pre">
        <code class="javascript highlight-code">
            console.log(value)  // 报错
            let value = 'zhangsan'
        </code>
      </pre>
    </div>

    <p>
      在<strong>执行上下文</strong>中的例子，用的 var，而 var
      存在变量提升，故输出的结果是：undefined，此处的 let
      不存在变量提升，故报错。</p
    >

    <strong>下面的例子，输出结果有点特殊</strong>

    <div v-highlight>
      <pre class="highlight-pre">
        <code class="javascript highlight-code">
            if (false) {
                let name = 'zhangsan'
            }
            console.log(name)  // undefined

            // 此处的结果是undefined，而不是报错，而上上个例子却报错了，
            // 这是因为，此处的作用域

            const status = false
            if (status) {
                let value = "zhangsan" 
            }
            console.log(value)  // 报错
        </code>
      </pre>
    </div>
  </div>
</template>
