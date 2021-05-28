<script>
  import HeaderScore from "./HeaderScore.svelte";

  export let Name = "";
  export let Lebenspunkte = 0;
  export let Ausdauer = 0;
  export let Astralenergie = 0;
  export let Magieresistenz = 0;

  let firstName = Name.split(" ")[0];
  let [lastName] = Name.split(" ").slice(-1);
</script>

<svelte:head>
  <title>{firstName} {lastName}</title>
</svelte:head>

<header>
  <HeaderScore icon="Lebenspunkte" score={Lebenspunkte} />
  <HeaderScore icon="Ausdauer" score={Ausdauer} />
  <div class="header__title">{firstName}</div>
  <HeaderScore icon="Astralenergie" score={Astralenergie} />
  <HeaderScore icon="Magieresistenz" score={Magieresistenz} />
</header>

<style>
  header {
    color: white;
    padding: 0.5rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 3rem;
    background: #6d1919;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__title {
    margin: 0 auto;
    height: 2rem;
    font-size: 1.5rem;
  }
</style>
