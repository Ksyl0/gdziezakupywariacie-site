<script lang="ts">
    export let data;
    const { apiData, apiData1 } = data;
</script>

<svelte:head>
    <title>API - Gdzie zakupy wariacie?</title>
    <meta name="description" content="Niezawodne API dla tych którzy muszą wiedzieć czy w tym tygodniu jest handlowa.">
</svelte:head>

<div class="min-h-screen bg-slate-800">
    <div class="max-w-4xl mx-auto px-4 py-12">
        <div class="flex justify-center mb-8">
            <div class="bg-slate-700 p-4 rounded-full shadow-lg ring-2 ring-slate-600">
                <svg class="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </div>
        </div>

        <div class="text-center mb-16">
            <h1 class="text-4xl font-bold mb-6 text-slate-100">
                Koniec z pytaniem:<br/>
                "Czy dziś jest niedziela handlowa?"
            </h1>
            
            <p class="text-xl text-slate-300 mb-4">
                Czy użytkownik twojej aplikacji kiedykolwiek się ciebie zapytał:<br>
                "Cholera czy w tym tygodniu jest niedziela handlowa?"
            </p>

            <p class="text-slate-400 text-lg">
                Każdego dnia setki milionów polaków* zadaje sobie to pytanie.<br>
                Developerzy nie posiadający narzędzi do odpowiedzenia na to pytanie byli całkowicie bezradni, <strong class="text-slate-200">aż do teraz</strong>.<br>
                <span class="text-xs italic">* Liczba ustalona na podstawie wróżb żula Mietka spod lidla</span>
            </p>
            <p class="text-slate-300 text-xl mt-4">
                Nasz zespół 2.5 inżynierów nieustannie pracował przez 5 dni żeby dostarczyć ostateczne API by rozwiązać problem niedzieli handlowych.
            </p>
        </div>

        <div class="bg-slate-900 rounded-xl shadow-2xl p-8 mb-16 border border-slate-700">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold text-slate-100">Banalnie proste API</h2>
                <div class="bg-emerald-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                    v1.0
                </div>
            </div>

            <div class="bg-slate-950 rounded-lg p-6 text-slate-100 font-mono text-sm overflow-x-auto border border-slate-800">
                <pre><code>{`GET "https://api.gdziezakupywariacie.pl/"

{
    "czy_handlowa": "${apiData.czy_handlowa}",
    "next_handlowa": "${apiData.next_handlowa}"
}`}</code></pre>
            </div>

            <div class="mt-6 p-4 bg-slate-800 rounded-lg border border-slate-700">
                <h3 class="font-semibold text-slate-200 mb-2">Opis pól:</h3>
                <ul class="text-sm text-slate-300 space-y-1">
                    <li><strong class="text-emerald-400">czy_handlowa:</strong> "true" albo "false" - czy najbliższa niedziela jest handlowa</li>
                    <li><strong class="text-emerald-400">next_handlowa:</strong> Data najbliższej niedzieli handlowej</li>
                </ul>
            </div>
        </div>

        <footer class="text-center text-slate-400">
            <p class="mb-2">© {apiData1.year_string} gdziezakupywariacie.pl | Wszelkie prawa zastrzeżone</p>
            <p class="text-sm">API dostarczył dla was <a href="https://github.com/Ksyl0" target="_blank" class="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">Ksyl</a></p>
        </footer>
    </div>
</div>
