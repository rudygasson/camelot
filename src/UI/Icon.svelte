<script>
  export let name = "icon";
  export let width = 32;
  export let height = 32;
  export let viewBox = "0 0 32 32";
  export let color = "currentColor";  
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} {height} {viewBox} aria-labelledby={name} role="presentation">
  <title id={name} lang="en">{`${name} icon`}</title>
  <g fill={color}>
    <slot></slot>
  </g>
</svg>

<style>
  svg {
    display: inline-block;
    vertical-align: middle;
  }
</style>
