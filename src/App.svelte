<script>
  import Header from "./UI/Header.svelte";
  import getJsonData from "./utilities/getJsonData";

  let isLoading = true;
  let scData = {};
  let firstName = "";

  getJsonData("sc.json")
    .then((data) => {
      scData = data;
      firstName = scData.Name.split(" ")[0];
      isLoading = false;
    })
    .catch((err) => {
      isLoading = false;
      alert(err);
    });
</script>

<Header
  name={scData.Name}
  lifePoints={scData.Lebenspunkte}
  stamina={scData.Ausdauer}
  magicPower={scData.Astralenergie}
  magicResistence={scData.Magieresistenz}
/>
{#if isLoading}
  <p>Loading...</p>
{:else}
  <main>
    <h1>Hallo {firstName}!</h1>
  </main>
{/if}

<style>
  main {
    grid-area: main;
    text-align: center;
    padding: 0;
    /* max-width: 240px; */
    margin: 0;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
