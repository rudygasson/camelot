<script>
  export let icon = "";
  export let score = 0;
</script>

<div role="cell" class="score">
  <img class="score__icon" src={"assets/icons/" + icon + ".svg"} alt="" />
  <p class="score__value">{score}</p>
</div>

<style>
  .score {
    height: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 4.4rem;
  }

  .score__icon {
    height: 2rem;
  }

  .score__value {
    font-size: 1.5rem;
  }
</style>
