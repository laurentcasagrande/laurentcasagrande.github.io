<script>
  export let title;
  export let img_path;
  export let description;
  export let link;
</script>

<svelte:head>
</svelte:head>

  
  <div class="rounded border border-black w-1/3 max-w-lg flex flex-col">  <!-- card -->
    <h1 class = "basis-1/3">{title}</h1> <!-- title -->

    <img class = "object-scale-down max-w-full max-h-fit basis-1/3" src="{img_path}">

    <p class = "flex-grow basis-1/3">{description}</p>
    <button onclick="window.location.href='{link}';" class = "rounded border border-black">
        Knopf
      </button>
  </div>


<style>

</style>