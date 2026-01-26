<script lang="ts">
    export let data;
    const { apiData, apiData1 } = data;
    
    // Determine if next Sunday is a trade Sunday
    const isTradeNextSunday = apiData.czy_handlowa === "tak";
</script>

<svelte:head>
    <title>Gdzie zakupy wariacie?</title>
    <meta name="description" content="Sprawdź czy najbliższa niedziela jest handlowa">
</svelte:head>

<div class="min-h-[calc(100vh-4rem)] bg-slate-800 flex items-center justify-center px-4 py-12">
    <div class="max-w-2xl w-full">
        <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-slate-700 rounded-full mb-6 ring-2 ring-slate-600">
                <svg class="w-9 h-9 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </div>
            <h1 class="text-3xl font-bold text-slate-100 mb-2">
                Czy najbliższa niedziela jest handlowa?
            </h1>
        </div>

        <div class="bg-slate-900 rounded-2xl shadow-2xl p-12 text-center border border-slate-700">
            <div class={`text-8xl font-black mb-6 ${isTradeNextSunday ? 'text-emerald-400' : 'text-amber-400'}`}>
                {isTradeNextSunday ? 'TAK' : 'NIE'}
            </div>
            
            <div class="text-slate-300 text-lg">
                <p class="mb-2">Najbliższa niedziela handlowa:</p>
                <p class="text-2xl font-semibold text-slate-100">{apiData.next_handlowa}</p>
            </div>
        </div>

        <footer class="text-center mt-12 text-slate-400">
            <p class="mb-2">© {apiData1.year_string} gdziezakupywariacie.pl | Wszelkie prawa zastrzeżone</p>
            <p class="text-sm">Stronę dostarczył dla was <a href="https://github.com/Ksyl0" target="_blank" class="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">Ksyl</a></p>
        </footer>
    </div>
</div>
