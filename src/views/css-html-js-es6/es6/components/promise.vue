<!--
 * @Author: Chen.Junior
 * @LastEditTime: 2022-11-25 11:13:19
 * @Description: 
-->
<template>
  <div class="template-padding-bottom">
    <h2 class="h2-title">7，Promise</h2>
    <p>
      Promise 是异步编程的一种解决方案。所谓Promise，
      简单来说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
      从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。
    </p>

    <p> Promise对象的两个<strong>特点：</strong> </p>

    <div class="focus-box">
      <ul class="ul-box">
        <li>
          <strong>对象的状态不受外界影响</strong
          >。<strong>Promise</strong>对象代表一个异步操作，有三种状态：
          <strong>pending（进行中）</strong
          >、<strong>fultilled（已成功）</strong>、<strong>rejected（已失败）</strong>。
          只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
          这也是Promise这个名字的由来，英语的意思就是“承诺”，表示其他手段无法改变。
        </li>
        <li>
          <strong>一旦状态改变，就不会再变，任何时候都能可以得到这个结果</strong
          >。<strong>Promise</strong>对象的状态改变，只有两种可能：
          从<strong>pending</strong>变为<strong>fulfilled</strong>、从<strong>pending</strong>变为<strong>rejected</strong>。
          只要这两种情况发生，状态就凝固，不会再变了，会一直保持这个结果，这时就称为<strong>resolved（已定型）</strong>。
        </li>
      </ul>
    </div>
  </div>
</template>
