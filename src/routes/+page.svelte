<script>
  import Tile from "../components/newTile.svelte";
  import Carousel from "../components/newCarousel.svelte";


  const data = [
    { id: 1, title: "'Murica", 
    img_path: "https://totallyhistory.com/wp-content/uploads/2013/04/Mao.jpg", 
    description: "Louis Bergeron war ein französischer Journalist, Dramatiker und Schriftsteller. Geboren und aufgewachsen in Chauny, zog er 1829 nach Paris, wo er Rechtswissenschaften studierte.", 
    link: "https://youtu.be/dQw4w9WgXcQ?si=Df1uLMU6qGKYe1F"},

    { id: 2, title: "Jelena Wsewolodowna Perechwalskaja", 
    img_path: "https://upload.wikimedia.org/wikipedia/commons/1/11/001ev_josue_s.jpg", 
    description: "Jelena Wsewolodowna Perechwalskaja (russisch Елена Всеволодовна Перехвальская; * 4. März 1954 in Leningrad) ist eine sowjetische bzw. russische Soziolinguistin und Hochschullehrerin.", 
    link: "https://de.wikipedia.org/wiki/Jelena_Wsewolodowna_Perechwalskaja"},
  ];


</script>

<main>

  <h1>Welcome to SvelteKit</h1>
  <h1>Welcome to SvelteKit</h1>
  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>

  <div>component beneth here:</div>

<Carousel {data}></Carousel>

</main>


<style>
  /*
  main {
    background-color: #121212;
  }
    */
</style>
