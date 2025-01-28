<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="vh-100 container-flex d-flex vstack">
	<div class="h-100">
	  <div class="row h-100 g-0 justify-content-center">
		<div class="col-lg-3 col-0 bg-gray-100"></div>
		<div
		  class="col-lg-6 col-12 vstack d-flex align-items-center h-100"
		>
		  {@render children()}
		</div>
		<div class="col-lg-3 col-0 bg-gray-100"></div>
	  </div>
	</div>
  </div>

  <style>
	/* * {
		outline: 2px solid purple;
	} */
  </style>