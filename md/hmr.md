```tsx
import { defineComponent } from 'vue'

// named exports w/ variable declaration: ok
export const Foo = defineComponent({})

// named exports referencing variable declaration: ok
const Bar = defineComponent({
  render() {
    return <div>Test</div>
  }
})
export { Bar }

// default export call: ok
export default defineComponent({
  render() {
    return <div>Test</div>
  }
})

// default export referencing variable declaration: ok
const Baz = defineComponent({
  render() {
    return <div>Test</div>
  }
})
export default Baz
```
