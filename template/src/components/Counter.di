<button 
  onclick={() => count.increment()}
  class="bg-slate-100 border-2 border-slate-200 rounded-xl p-3"
>
 Count: {count()}
</button>

<script>
 const { count } = props
</script>