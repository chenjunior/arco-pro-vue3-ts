// 代码高亮插件
import hljs from 'highlight.js';
import 'highlight.js/styles/vs.css';
import 'highlight.js/styles/default.css';

const install = (Vue: any) => {
  Vue.directive('highlight', (el: any) => {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block: any) => {
      hljs.highlightBlock(block);
    });
  });

  Vue.directive('code', {
    deep: true,
    bind(el: any, binding: any) {
      const targets = el.querySelectorAll('code');
      targets.forEach((target: any) => {
        if (typeof binding.value === 'string') {
          target.textContent = binding.value;
        }
        hljs.highlightBlock(target);
      });
    },
    componentUpdated(el: any, binding: any) {
      const targets = el.querySelectorAll('code');
      targets.forEach((target: any) => {
        if (typeof binding.value === 'string') {
          target.textContent = binding.value;
          hljs.highlightBlock(target);
        }
      });
    },
  });
};

export default install;
