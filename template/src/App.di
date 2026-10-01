<div class="p-3">
  <h1 class="text-2xl">Di Counter</h1>
  <Counter count={count} />
</div>


<script>
   import Counter from "./components/Counter.di"
   
   const count = newReactive(0)
</script>