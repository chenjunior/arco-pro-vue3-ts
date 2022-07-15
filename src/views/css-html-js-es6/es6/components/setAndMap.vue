<!--
 * @Author: Chen.Junior
 * @LastEditTime: 2022-07-13 18:08:36
 * @Description: Set 和 Map
-->
<template>
  <div class="template-padding-bottom">
    <h2 class="h2-title">6，Set 和 Map</h2>
    <p>
      Set 和 Map 都是 ES6 中新增的数据结构，是当前 JS
      数组和对象这两种重要数据结构的扩展。两者最关键的地方：
    </p>

    <div class="focus-box">
      <ul class="ul-box">
        <li>Set 类似于数组，但数组允许元素重复，Set 不允许数据重复。</li>
        <li
          >Map 类似于对象，但普通对象的 key 必须是字符串或数字，而 Map 的 key
          可以是任何数据类型。</li
        >
      </ul>
    </div>
    <p>
      <strong>Set</strong>
    </p>
    <p> Set 实例不允许有重复，可以通过以下实例证明: </p>

    <div v-highlight>
      <pre class="highlight-pre">
        <code class="javascript highlight-code">
            // 例1
            const set = new Set([1, 2, 3, 4, 4])
            console.log(set)    // 结果是 Set(4) {1, 2, 3, 4}

            // 例2
            const set = new Set();
            [2, 3, 5, 4, 5, 8, 8].forEach( item => set.add(item))
            for(let item of set) {
                console.log(item)
            }
            // 结果是：2 3 5 4 8
        </code>
      </pre>
    </div>

    <p> Set 实例的属性和方法有： </p>

    <div class="focus-box">
      <ul class="ul-box">
        <li>size：获取元素数量；</li>
        <li>add(value)：添加元素，返回 Set 实例本身；</li>
        <li>delete(value): 删除元素，返回一个布尔值，表示删除是否成功；</li>
        <li>has(value)：返回一个布尔值，表示该值是否是 Set 实例的元素；</li>
        <li>clear()：清除所有元素，没有返回值。</li>
      </ul>
    </div>

    <div v-highlight>
      <pre class="highlight-pre">
        <code class="javascript highlight-code">
            const s = new Set();
            s.add(1).add(2).add(3)

            console.log(s.size)     // 2
            console.log(s.has(1))   // true
            console.log(s.has(2))   // true
            console.log(s.has(3))   // true

            console.log(s.delete(2))   // true
            console.log(s.has(2))   // true

            s.clear()
            console.log(s)      // Set(0){ size:0 }
        </code>
      </pre>
    </div>

    <p> Set 实例的遍历，可使用如下方法： </p>

    <div class="focus-box">
      <ul class="ul-box">
        <li>key()：返回键名的遍历器；</li>
        <li
          >values()：返回键值的遍历器。不过由于 Set
          结构没有键名，只有键值（或者说键名和键值是同一个值），所以 keys() 和
          values() 返回的结果一致；</li
        >
        <li>entries()：返回键值对的遍历器；</li>
        <li>forEach()：使用回调函数遍历每个成员。</li>
      </ul>
    </div>

    <div v-highlight>
      <pre class="highlight-pre">
        <code class="javascript highlight-code">
            let setData = new Set(['aaa', 'bbb', 'ccc']);

            for(let item of setData.keys()) {
                console.log(item)
            }

            // aaa
            // bbb
            // ccc

            for(let item of setData.values()) {
                console.log(item)
            }

            // aaa
            // bbb
            // ccc

            for(let item of setData.entries()) {
                console.log(item)
            }

            // ["aaa", "aaa"]
            // ["bbb", "bbb"]
            // ["ccc", "ccc"]

            setData.forEach((value, key) => console.log(key + ' : ' + value))
            // aaa : aaa
            // bbb : bbb
            // ccc : ccc
        </code>
      </pre>
    </div>
    <p>
      <strong>Map</strong>
    </p>
    <p
      >Map 的用法和普通对象基本一致，先看一下它能用非字符串或者数字作为 key
      的特性</p
    >
    <div v-highlight>
      <pre class="highlight-pre">
        <code class="javascript highlight-code">
           const map = new Map()
           const obj = {p: 'obj'}

           map.set(obj, 'OK')      // 用对象 obj 作为的 key （不光可以是对象，任何数据类型都可以）

           console.log(map.has(obj))    // true
           console.log(map.delete(obj))    // true
           console.log(map.has(obj))    // false
        </code>
      </pre>
    </div>

    <p>Map 实例的属性和方法如下：</p>

    <div class="focus-box">
      <ul class="ul-box">
        <li>size：获取成员的数量；</li>
        <li>set：设置成员 key 和 value;</li>
        <li>get：获取成员属性值；</li>
        <li>has：判断成员是否存在；</li>
        <li>delete：删除成员；</li>
        <li>clear：清空所有。</li>
      </ul>
    </div>

    <div v-highlight>
      <pre class="highlight-pre">
        <code class="javascript highlight-code">
           const map = new Map();
           map.set('aaa', 100)
           map.set('bbb', 200)

           console.log(map.size)    // 2
           console.log(map.get('aaa'))      // 100
           console.log(map.has('aaa'))      // true

           console.log(map.delete('aaa'))      // true
           console.log(map.has('aaa'))      // false

           map.clear()
        </code>
      </pre>
    </div>
    <p>Map 实例的遍历方法有：</p>
    <div class="focus-box">
      <ul class="ul-box">
        <li>keys：返回键名的遍历器；</li>
        <li>values()：返回键值的遍历器；</li>
        <li>entries()：返回所有成员的遍历器；</li>
        <li>forEach()：遍历 Map 的所有成员。</li>
      </ul>
    </div>

    <div v-highlight>
      <pre class="highlight-pre">
        <code class="javascript highlight-code">
            const map = new Map();
            map.set('aaa', 100)
            map.set('bbb', 200)

            for(let key of map.keys()) {
                console.log(key)
            }

            // aaa bbb

            for(let value of map.values()) {
                console.log(value)
            }

            // 100 200

            for(let item of map.entries()) {
                console.log(item, item[0], item[1])
            }

            // ['aaa':100 ] 'aaa' 100
            // ['bbb':200 ] 'bbb' 200

            for(let [key, value] of map.entries()) {
                console.log(key, value)
            }

            // aaa 100
            // bbb 200
        </code>
      </pre>
    </div>
  </div>
</template>
