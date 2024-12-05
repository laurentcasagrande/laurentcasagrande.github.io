<script>
  import Tile from "./newTile.svelte";
  export let data;

  let Cindex = 0;
  let Cindexp1 = 1;
  let Cindexm1 = data.length-1;

  function CNext() {
    Cindex += 1;
    Cindex %= data.length;

    Cindexp1 += 1;
    Cindexp1 %= data.length;

    Cindexm1 += 1;
    Cindexm1 %= data.length;

  }

  function CPrev() {

    if (Cindex < 1) {
      Cindex = data.length-1
    }else {
      Cindex -= 1;
    }

    if (Cindexp1 < 1) {
      Cindexp1 = data.length-1
    }else {
      Cindexp1 -= 1;
    }

    if (Cindexm1 < 1) {
      Cindexm1 = data.length-1
    }else {
      Cindexm1 -= 1;
    }
    

  }
</script>

<div class="rounded border border-black flex flex-row items-stretch justify-center">

  <Tile
  title={data[Cindexm1].title}
  img_path={data[Cindexm1].img_path}
  description={data[Cindexm1].description}
  link={data[Cindexm1].link}
></Tile>

  <button on:click={CPrev}>Prev</button>

  <Tile
  title={data[Cindex].title}
  img_path={data[Cindex].img_path}
  description={data[Cindex].description}
  link={data[Cindex].link}
></Tile>

    <button on:click={CNext}>Next</button>

    <Tile
      title={data[Cindexp1].title}
      img_path={data[Cindexp1].img_path}
      description={data[Cindexp1].description}
      link={data[Cindexp1].link}
    ></Tile>


    
</div>

<style>
</style>
