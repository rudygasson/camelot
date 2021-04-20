<script>
  import Icon from './Icon.svelte';
  import icons from '../icons/icons';
  
  export let icon = 'Lebenspunkte';
  export let score = 0;

  let pic=icons[icon].img;
  let viewBox=icons[icon].viewBox;
</script>

<div role="cell" class="score">
  <Icon name={icon} {pic} {viewBox}></Icon>
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

  .score__value {
    font-size: 1.5rem;
  }
</style>
