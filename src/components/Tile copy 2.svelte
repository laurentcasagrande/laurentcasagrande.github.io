<!DOCTYPE html>
<!-- svelte-ignore a11y-missing-attribute -->

<script>
    export let title;
    export let img_path;
    export let description;
    export let link;
</script>
<html>

    
    


<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>


<body>

        <div id="cards">
            <div class="card">
                <div class="card-content">

                    <div class="card-info-wrapper row">
                        <div class="card-info">
                            <div class="card-info-title center">

                                                                            

                                <h1>{title}</h1>
                                
                                <div class="col-5 mx-auto d-block center">
                                    <hr class="primary500 border-4 opacity-100 ">
                                </div>

                                <p>

                                <div class="col-9 mx-auto d-block center">
                                    <img class="img-thumbnail"
                                        src={img_path}
                                        alt="Biden">
                                </div>
                                
                                <p>

                                <div class="col-5 mx-auto d-block center">
                                    <hr class="primary500 border-4 opacity-100 ">   
                                </div>

                                <p>

                                <p class="dark600">{description}</p>

                                <a class="btn btn-primary" href="google.com" role="button">ToDo Fix this button</a>
                       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</body>


<style>

.white {
    color: #000000;
}

.black {
    color: #FFFFFF;
}

.primary500 {
    color: #a688fa;
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
    transparent 40%
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



<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<script >



  document.getElementById("cards").onmousemove =
  e => {
    
    for(const card of document.getElementsByClassName("card")) {
        
      const rect = card.getBoundingClientRect();
      console.log(e.clientY - rect.top);
      const w = rect.right - rect.left;
      const h = rect.bottom - rect.top;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

  
      card.style.setProperty("--mouse-x", `${0.5*w+0.7*(x-w/2)}px`);
      card.style.setProperty("--mouse-y", `${0.5*h+0.7*(y-h/2)}px`);

      //card.style.setProperty("--mouse-x", `${x}px`);
      //card.style.setProperty("--mouse-y", `${y}px`);

    };
  }</script>


</html>
