<script>
  export let score = 0;
</script>

<div role="cell" class="score">
  <slot></slot>
  <div class="score__value">{score}</div>
</div>

<style>
  .score {
    height: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 4.4rem;
  }

  .score__value {
    margin: 0;
    font-size: 1.5rem;
  }
</style>
