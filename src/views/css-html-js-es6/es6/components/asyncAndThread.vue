<!--
 * @Author: Chen.Junior
 * @LastEditTime: 2022-07-13 18:10:57
 * @Description: 异步和单线程
-->

<template>
  <div class="template-padding-bottom">
    <h2 class="h2-title">5，异步和单线程</h2>
    <p>
      JS 需要异步的根本原因是
      <strong>JS 是单线程运行的</strong>
      ，即在同一时间只能做一件事，不能“一心二用”。
    </p>

    <div v-highlight>
      <pre class="highlight-pre">
        <code class="javascript highlight-code">
            var a = true
            setTimeout(() => {
                a = false
            }, 100)

            while(a) {
                console.log('while执行了')
            }
        </code>
      </pre>
    </div>

    <p>
      上述代码运行后，不少人会认为 100ms 后，由于 a 变成 false，所以 while
      就中止了，实际不是这样，因为 JS 是单线程的，所以进入 while
      循环之后，就不会再去跑其他任务了，所以这是一个死循环 。
    </p>
  </div>
</template>
