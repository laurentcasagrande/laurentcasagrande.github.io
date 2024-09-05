<script>
  import Tile from "../components/Tile.svelte";
  import Carousel from "../components/Carousel.svelte";
</script>

<main>
  <h1>Welcome to SvelteKit</h1>
  <h1>Welcome to SvelteKit</h1>
  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>

  <div>component beneth here:</div>

  <Tile
    title="My cool project"
    img_path="https://cdn.pixabay.com/photo/2024/01/09/22/11/avocado-8498520_960_720.jpg"
    link="https://www.github.com"
    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  ></Tile>
</main>

<style>
  main {
    background-color: #121212;
  }
</style>
