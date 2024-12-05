<script>
  import Tile from "../components/newTile.svelte";
  import Carousel from "../components/newCarousel.svelte";


  const data = [
    { id: 1, title: "Joe Biden", 
    img_path: "https://totallyhistory.com/wp-content/uploads/2013/04/Mao.jpg", 
    description: "Louis Bergeron war ein französischer Journalist, Dramatiker und Schriftsteller. Geboren und aufgewachsen in Chauny, zog er 1829 nach Paris, wo er Rechtswissenschaften studierte.", 
    link: "https://youtu.be/dQw4w9WgXcQ?si=Df1uLMU6qGKYe1F"},

    { id: 2, title: "Jelena Wsewolodowna Perechwalskaja", 
    img_path: "https://upload.wikimedia.org/wikipedia/commons/1/11/001ev_josue_s.jpg", 
    description: "Jelena Wsewolodowna Perechwalskaja (russisch Елена Всеволодовна Перехвальская; * 4. März 1954 in Leningrad) ist eine sowjetische bzw. russische Soziolinguistin und Hochschullehrerin.", 
    link: "https://de.wikipedia.org/wiki/Jelena_Wsewolodowna_Perechwalskaja"},

    { id: 2, title: "Jelena Wsewolodowna Perechwalskaja", 
    img_path: "https://upload.wikimedia.org/wikipedia/commons/1/11/001ev_josue_s.jpg", 
    description: "Jelena Wsewolodowna Perechwalskaja (russisch Елена Всеволодовна Перехвальская; * 4. März 1954 in Leningrad) ist eine sowjetische bzw. russische Soziolinguistin und Hochschullehrerin.", 
    link: "https://de.wikipedia.org/wiki/Jelena_Wsewolodowna_Perechwalskaja"},

    { id: 2, title: "Jelena Wsewolodowna Perechwalskaja", 
    img_path: "https://upload.wikimedia.org/wikipedia/commons/1/11/001ev_josue_s.jpg", 
    description: "Jelena Wsewolodowna Perechwalskaja (russisch Елена Всеволодовна Перехвальская; * 4. März 1954 in Leningrad) ist eine sowjetische bzw. russische Soziolinguistin und Hochschullehrerin.", 
    link: "https://de.wikipedia.org/wiki/Jelena_Wsewolodowna_Perechwalskaja"},

    { id: 2, title: "Jelena Wsewolodowna Perechwalskaja", 
    img_path: "https://upload.wikimedia.org/wikipedia/commons/1/11/001ev_josue_s.jpg", 
    description: "Jelena Wsewolodowna Perechwalskaja (russisch Елена Всеволодовна Перехвальская; * 4. März 1954 in Leningrad) ist eine sowjetische bzw. russische Soziolinguistin und Hochschullehrerin.", 
    link: "https://de.wikipedia.org/wiki/Jelena_Wsewolodowna_Perechwalskaja"},

    { id: 2, title: "Piero di Cosimo de Medici", 
    img_path: "https://upload.wikimedia.org/wikipedia/commons/2/26/Bust_of_Piero_de%27_Medici_by_Mino_da_Fiesole-Bargello.jpg", 
    description: "Piero di Cosimo de’ Medici (auch Piero il Gottoso („der Gichtige“) genannt; * 1416 in Florenz; † 2. Dezember 1469 ebenda) war der älteste Sohn von Cosimo de’ Medici und zwischen 1464 und 1469 der führende Politiker in Florenz.[1] Seine Söhne und Nachfolger waren Lorenzo il Magnifico und Giuliano di Piero de’ Medici. Seit 1444 war er mit Lucrezia Tornabuoni verheiratet. Sie hatten noch vier weitere Kinder, von denen allerdings zwei sehr früh starben. Piero erhielt durch seinen Vater Cosimo eine humanistische Bildung, er behielt aber durchaus auch mittelalterliche, vornehmlich ritterliche Denkweisen bei, die er sich beim Umgang mit burgundischen Geschäftsfreunden angeeignet hatte. ", 
    link: "https://de.wikipedia.org/wiki/Piero_di_Cosimo_de%E2%80%99_Medici"},
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
