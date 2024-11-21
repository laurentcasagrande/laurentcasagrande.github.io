<script>
  import Tile from "./newTile.svelte";
  export let data;
</script>
 

<div class = "rounded border border-black  mx-auto">


dis a carousell:
{#each data as entry (entry.id)}
<Tile
title={entry.title}
img_path={entry.img_path}
description={entry.description}
link={entry.link}
></Tile>
{/each}


</div>


<style>

      </style>