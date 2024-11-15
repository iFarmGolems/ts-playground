const { Vue, luxon, bModule } = window;

const vm = new Vue({
  setup(props) {},
  template: `<div>Hello World</div>`,
});


// has correct typing
const time = luxon.DateTime.now();

console.log(bModule.a)
console.log(bModule.b)
