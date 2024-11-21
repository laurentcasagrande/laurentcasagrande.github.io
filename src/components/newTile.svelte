<script>
  export let title;
  export let img_path;
  export let description;
  export let link;
</script>

<svelte:head>
</svelte:head>

<main>

  
  <div class="rounded border border-black max-w-sm mx-auto">  <!-- card -->
    <h1>{title}</h1> <!-- title -->
    <img src="{img_path}">
    <p>{description}</p>
      <button onclick="window.location.href='{link}';" class = "rounded border border-black ">
        Knopf
      </button>
  </div>


</main>


<style>

</style>
