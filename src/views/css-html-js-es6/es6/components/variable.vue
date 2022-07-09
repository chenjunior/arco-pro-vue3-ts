<!--
 * @Author: Chen.Junior
 * @LastEditTime: 2022-07-08 17:20:55
 * @Description: 变量类型
-->
<template>
  <div class="template-padding-bottom">
    <h2 class="h2-title">1，变量类型</h2>
    <div>
      <p
        >JavaScript是一种弱类型脚本语言，所谓弱脚本类型指的是定义变量是，不需要什么类型，在程序运行过程中，会自动判断类型。</p
      >
      <p>ECMAScript中定义了6种原始类型：</p>
      <div class="focus-box">
        <ul class="ul-box">
          <li>Boolean</li>
          <li>String</li>
          <li>Number</li>
          <li>Null</li>
          <li>Undefined</li>
          <li>Symbol（ES6新定义）</li>
        </ul>
      </div>

      <h4>注意事项：原始类型不包含Object</h4>

      <h3>typeof</h3>

      <p
        >typeof
        得到值有以下几种类型：undefined、object、boolean、string、function、number、symbol</p
      >

      <h4>注意以下三点：</h4>

      <div class="focus-box">
        <ul class="ul-box">
          <li
            >typeof null 结果是 object，实际这是 typeof 的一个 bug，null
            是原始值，非引用类型</li
          >
          <li
            >typeof [1,2] 结果是 object，结果中没有 array 这一项，引用类型除了
            function 其他的都是 object</li
          >
          <li
            >typeof Symbol() 获取到 symbol 类型的值得到的是 symbol，这是 ES6
            新增的知识点</li
          >
        </ul>
      </div>

      <h3>instanceof</h3>
      <p
        >用于实例和构造函数的对应。例如判断一个变量是否是数组，使用 typeof
        无法判断，但可以使用 [1,2] instanceof Arrary 来判断，因为 [1,2]
        是数组，它的构造函数就是 Array。同理：</p
      >

      <div v-highlight>
        <pre class="highlight-pre">
            <code class="javascript highlight-code" >
                function Foo(name) {
                    this.name = name
                }

                var foo = new Foo('bar')
                console.log(foo instanceof Foo) // 结果是：true
            </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  p {
    line-height: 2em !important;
  }
</style>
