<script>
    import Header from "./UI/Header.svelte";

    let isLoading = true;
    let scData = {};
    let firstName = "";
    let error;

    fetch("sc.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error("Ups, ein Fehler. Bitte versuche es noch einmal.");
            }
            return res.json();
        })
        .then((data) => {
            scData = data;
            firstName = scData.Name.split(" ")[0];
            isLoading = false;
        })

        .catch((err) => {
            error = err;
            isLoading = false;
            console.warn(err);
        });
</script>

<main>
    {#if isLoading}
        <p>Loading...</p>
    {:else}
        <Header
            name={scData.Name}
            lifePoints={scData.Lebenspunkte}
            stamina={scData.Ausdauer}
            magicPower={scData.Astralenergie}
        />
        <h1>Hallo {firstName}!</h1>
    {/if}
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 3em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
