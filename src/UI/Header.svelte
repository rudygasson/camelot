<script>
    import Life from "./Life.svelte";
    import Stamina from "./Stamina.svelte";
    import Magic from "./Magic.svelte";

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
    <div>
        <Life {lifePoints} />
        <Stamina {stamina} />
    </div>
    <h2>{firstName}</h2>
    <div><Magic {magicPower} {magicResistence}/></div>
</header>

<style>
    header {
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
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
    }
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 7.5rem;
    }
    h2 {
        color: white;
        margin: auto;
    }
</style>
