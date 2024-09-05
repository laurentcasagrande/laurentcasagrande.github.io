<script>
  import { onMount } from 'svelte';

  export let title;
  export let img_path;
  export let description;
  export let link;

  let mouseX = 0;
  let mouseY = 0;

  const handleMouseMove = (e) => {
      const rect = document.getElementById('cards').getBoundingClientRect();
      const w = rect.right - rect.left;
      const h = rect.bottom - rect.top;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      mouseX = 0.5*w + 0.7*(x - w/2);
      mouseY = 0.5*h + 0.7*(y - h/2);
  };

  onMount(() => {
      document.getElementById('cards').addEventListener('mousemove', handleMouseMove);
  });
</script>

<svelte:head>

</svelte:head>

<div id="cards" style="--mouse-x: {mouseX}px; --mouse-y: {mouseY}px;">
  <a class="card" href={link}>
      <div class="card-content">
          <div class="card-info-wrapper row">
              <div class="card-info">
                  <div class="card-info-title center">
                      <h1>{title}</h1>
                      <div class="col-9 mx-auto d-block center" style="border-radius: 10px;">
                          <hr class="primary500 border-4 opacity-100 ">
                      </div>
                      <p>
                      <div class="col-9 mx-auto d-block center">
                          <img class="img-thumbnail" src={img_path} alt="Biden">
                      </div>
                      <p>
                      <div class="col-9 mx-auto d-block center" style="border-radius: 10px;">
                          <hr class="primary500 border-4 opacity-100 ">
                      </div>
                      <p>
                      <p class="dark600 ">{description}</p>
                      <a class="btn primary500 btn-lg font-weight-bold" href={link} role="button" style="color: black !important; border-radius: 100px;">View on Github</a>
                  </div>
              </div>
          </div>
          
              
          
      </div>
  </a>
</div>


<style>

  .white {
      color: #000000;
  }
  
  .black {
      color: #FFFFFF;
  }
  
  .primary500 {
      color: #a688fa;
      background-color: #a688fa;
  }
  
  .dark100 {
      color: #121212;
  }
  
  .dark200 {
      color: #282828;
  }
  
  .dark600 {
      color: #8b8b8b;
  }
  
  .mixed100 {
      color: #211938;
  }
  
  .mixed200 {
      color: #372e4c;
  }
  
  .mixed300 {
      color: #4d4560;
  }
  
  
          :root {
    --bg-color: rgb(20, 20, 20);
    --card-color: #282828;
    --bs-body-bg: #121212;
  }
  
  #cards {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;  
    max-width: 916px;
    width: calc(100% - 20px);
  }
  
  #cards:hover > .card::after {
    opacity: 1;
  }
  
  .card {
    background-color: #1F2225;
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    height: 750px;
    flex-direction: column;
    position: relative;
    width: 100%;  
  }
  
  .card:hover::before {
    opacity: 1;
  }
  
  .card::before,
  .card::after {
    border-radius: inherit;
    content: "";
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    top: 0px;
    transition: opacity 500ms;
    width: 100%;
  }
  
  .card::before {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y), 
      rgba(255, 255, 255, 0.06),
      transparent 50%
    );
    z-index: 3;
  }
  
  .card::after {  
    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y), 
      rgba(255, 255, 255, 0.4),
      transparent 40%
    );
    z-index: 1;
  }
  
  .card > .card-content {
    background-color: var(--card-color);
    border-radius: inherit;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    inset: 1px;
    padding: 10px;
    position: absolute;
    z-index: 2;
  }
  
  /* -- ↓ ↓ ↓ extra card content styles ↓ ↓ ↓ -- */
  
  h1, h2, h3, h4, span {
    color: rgb(240, 240, 240);
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    margin: 0px;
  }
  
  i {  
    color: rgb(240, 240, 240);
  }
  
  .card-image {
    align-items: center;
    display: flex;
    height: 140px;
    justify-content: center;
    overflow: hidden;
  }
  
  .card-image > i {
    font-size: 6em;
    opacity: 0.25;
  }
  
  .card-info-wrapper {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    padding: 0px 20px;
  }
  
  .card-info {
    align-items: flex-start;
    display: flex;
    gap: 10px;
  }
  
  .card-info > i {  
    font-size: 1em;
    height: 20px;
    line-height: 20px;
  }
  
  .card-info-title > h3 {
    font-size: 1.1em;
    line-height: 20px;
  }
  
  .card-info-title > h4 {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85em;
    margin-top: 8px;
  }
  .center {
    text-align: center;
    margin: auto;
  }
  
  
  img {
    width: 80%;
    opacity: 0.7;
    border:0;
    --bs-border-width:0;
    --bs-body-bg:none;
  
  }
      </style>