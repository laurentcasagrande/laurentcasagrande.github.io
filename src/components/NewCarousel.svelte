<script>
  import Tile from "./newTile.svelte";
  export let data;

  let Cindex = 0;

  function CNext() {
    Cindex += 1;
    Cindex %= data.length;
    console.log(Cindex);
  }

  function CPrev() {
    Cindex -= 1;
    if (Cindex == -0) {
      Cindex = 1
    }
    console.log(Cindex);
  }
</script>

<div class="rounded border border-black mx-auto">
  dis a carousell:

  <button on:click={CNext}>Next</button>
  <button on:click={CPrev}>Prev</button>


    <Tile
      title={data[Cindex].title}
      img_path={data[Cindex].img_path}
      description={data[Cindex].description}
      link={data[Cindex].link}
    ></Tile>
</div>

<style>
</style>
