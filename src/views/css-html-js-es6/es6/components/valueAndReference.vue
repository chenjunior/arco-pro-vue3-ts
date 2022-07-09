<!--
 * @Author: Chen.Junior
 * @LastEditTime: 2022-07-08 17:20:26
 * @Description: 值类型与引用类型
-->
<template>
  <div class="template-padding-bottom">
    <h2 class="h2-title">2，值类型与引用类型</h2>

    <p>
      除了原始类型，ES 还有引用类型，上文提到的 typeof 识别出来的类型中，只有
      object 和 function 是引用类型，其他都是值类型。
    </p>

    <p>
      根据 JavaScript
      中变量类型传递方式，又分为<strong>值类型</strong>和<strong>引用类型</strong>，值类型变量包括
      boolean、 number、 string、 undefined、 null，因用户类型包括 object
      类的所有，如 Data、 Array、 Function
      等。在参数传递方式上，值类型是按值传递的，引用类型是按共享传递。如：
    </p>

    <div v-highlight>
      <pre class="highlight-pre">
            <code class="javascript highlight-code">
                // 值类型
                var  a = 10
                var  b = a
                b = 20

                console.log(a)  // 结果是：10
                console.log(b)  // 结果是：20
            </code>
        </pre>
    </div>
    <p>
      上述代码中，a、 b 都是值类型，两者分别修改赋值，相互之间没有任何影响。
    </p>

    <div v-highlight>
      <pre class="highlight-pre">
            <code class="javascript highlight-code">
                // 引用类型
                var a = { x: 10, y: 20 }    
                var b = a
                b.x = 100
                b.y = 200

                console.log(a)  // 结果是：{ x: 100, y: 202 }
                console.log(b)  // 结果是：{ x: 100, y: 202 }
            </code>
        </pre>
    </div>
    <p>
      上述代码中，a、 b 都是引用类型。在执行 b = a 之后，修改了 b 的属性值， a
      的也跟着变化。因为 a 和 b
      都是引用类型，指向的是同一个内存地址，即两者引用的是同一个值，因此 b
      修改属性是，a 的值也随之变动。
    </p>

    <div v-highlight>
      <pre class="highlight-pre">
            <code class="javascript highlight-code">
               function foo(a) {
                    a = a * 10
               }
               
               function bar(b) {
                    b.value = 'new'
               }

                var a = 1
                var b = { value: 'old' }
                foo(a)
                bar(b)

                console.log(a)  // 结果是：1
                console.log(b)  // 结果是：{ value: 'new' }
            </code>
        </pre>
    </div>

    <p>通过执行代码，会发现：</p>
    <div class="focus-box">
      <ul class="ul-box">
        <li> a 的值没有发生变化 </li>
        <li> b 的值发生了变化 </li>
      </ul>
    </div>

    <p>
      JS
      中这种设计的原因是：按值传递的类型，复制一份存入栈内存，这类类型一般不占用太多内存，而且按值传递保证了其访问速度。按共享传递的类型，是复制其引用，而不是整个复制其值（C
      语言中的指针），保证过大的对象等不会因为不停复制内容而造成内存的浪费。
    </p>

    <div v-highlight>
      <pre class="highlight-pre">
            <code class="javascript highlight-code">
                var obj = {
                    a: 1,
                    b: [1, 2, 3]
                }

                var a = obj.a
                var b = obj.b

                a = 2
                b = push(4)

                console.log(obj)  // 结果是：{ a: 1,  b: [1, 2, 3, 4] }
                console.log(a)  // 结果是：2
                console.log(b)  // 结果是：[1, 2, 3, 4]
            </code>
        </pre>
    </div>

    <p>
      虽然obj本身是个引用类型的变量（对象），但是内部的a和b一个是值类型一个是引用类型，a的赋值不会改变obj.a，但是b的操作却会反映到obj对象上。
    </p>
  </div>
</template>

<style></style>
