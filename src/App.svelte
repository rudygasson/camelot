<script>
  import getJsonData from "./utilities/getJsonData";

  import HeaderScore from "./UI/HeaderScore.svelte";
  import Bolt from "./icons/Bolt.svelte";
  import Heart from "./icons/Heart.svelte";
  import Hourglass from "./icons/Hourglass.svelte";
  import MagicWand from "./icons/MagicWand.svelte";

  let isLoading = true;
  let sc = {};
  let firstName,
    lastName = "";

  getJsonData("sc.json")
    .then((data) => {
      sc = data;
      firstName = sc.Name.split(" ")[0];
      [lastName] = sc.Name.split(" ").slice(-1);
      isLoading = false;
    })
    .catch((err) => {
      isLoading = false;
      alert(err);
    });
</script>

<svelte:head>
  <title>{firstName} {lastName}</title>
</svelte:head>

{#if isLoading}
  <p>Loading...</p>
{:else}
  <header>
    <HeaderScore score={sc.Lebenspunkte}>
      <Heart />
    </HeaderScore>
    <HeaderScore score={sc.Ausdauer}>
      <Hourglass />
    </HeaderScore>
    <div class="header__title">{firstName}</div>
    <HeaderScore score={sc.Astralenergie}>
      <MagicWand />
    </HeaderScore>
    <HeaderScore score={sc.Magieresistenz}>
      <Bolt />
    </HeaderScore>
  </header>
  <main>
    <h1>Hallo {firstName}!</h1>
  </main>
{/if}
