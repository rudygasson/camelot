<script>
  import HeaderScore from "./HeaderScore.svelte";

  export let name = "";
  export let lifePoints = 0;
  export let stamina = 0;
  export let magicPower = 0;
  export let magicResistence = 0;

  let firstName = name.split(" ")[0];
  let [lastName] = name.split(" ").slice(-1);
</script>

<svelte:head>
  <title>{firstName} {lastName}</title>
</svelte:head>

<header>
  <HeaderScore icon="heart" score={lifePoints} />
  <HeaderScore icon="hourglass" score={stamina} />
  <div class="header__title">{firstName}</div>
  <HeaderScore icon="magic-wand" score={magicPower} />
  <HeaderScore icon="bolt" score={magicResistence} />
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
    margin: auto;
    height: 2rem;
    font-size: 1.5rem;
  }
</style>
