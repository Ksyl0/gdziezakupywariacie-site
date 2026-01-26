<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav class="bg-slate-900 shadow-lg border-b border-slate-700">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<div class="flex-shrink-0">
				<a href="/" class="text-xl font-bold text-slate-100 hover:text-emerald-400 transition-colors">
					gdziezakupywariacie.pl
				</a>
			</div>
			<div class="flex space-x-8">
				<a href="/api" class="text-slate-300 hover:text-emerald-400 transition-colors font-medium">
					API
				</a>
				<a href="/o-nas" class="text-slate-300 hover:text-emerald-400 transition-colors font-medium">
					O Nas
				</a>
			</div>
		</div>
	</div>
</nav>

{@render children()}
