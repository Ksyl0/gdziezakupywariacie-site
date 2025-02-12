<script lang="ts">
    export let data;
    const { apiData, apiData1 } = data;
    console.log(`Up to date footer was brought to you by:\n${apiData1.sponsored_by}`)
</script>

<svelte:head>
    <title>Gdzie zakupy wariacie?</title>
    <meta name="description" content="Niezawodne API dla tych którzy muszą wiedzieć czy w tym tygodniu jest handlowa.">
</svelte:head>

<!-- <div class="bg-gradient-to-r from-orange-500 to-red-500 text-white p-2 relative overflow-hidden">
    <div class="animate-slide flex whitespace-nowrap">
        <span class="mx-4">⚠️ Uwaga: Trwają prace nad ulepszeniem systemu</span>
        <span class="mx-4">🔧 Możliwe chwilowe niedokładności w działaniu API</span>
        <span class="mx-4">📅 Pracujemy nad tym!</span>
    </div>
</div> -->

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <div class="max-w-4xl mx-auto px-4 py-12">
        <div class="flex justify-center mb-8">
            <div class="bg-white p-4 rounded-full shadow-lg">
                <svg class="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </div>
        </div>

        <div class="text-center mb-16">
            <h1 class="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                Koniec z pytaniem:<br/>
                "Czy dziś jest niedziela handlowa?"
            </h1>
            
            <p class="text-xl text-gray-700 mb-4">
                Czy użytkownik twojej aplikacji kiedykolwiek się ciebie zapytał:<br>
                "Cholera czy w tym tygodniu jest niedziela handlowa?"
            </p>

            <p class="text-gray-600 text-lg">
                Każdego dnia setki milionów polaków* zadaje sobie to pytanie.<br>
                Developerzy nie posiadający narzędzi do odpowiedzenia na to pytanie byli całkowicie bezradni, <strong>aż do teraz</strong>.<br>
                <span class="text-xs italic">* Liczba ustalona na podstawie wróżb żula Mietka spod lidla</span>
            </p>
            <p class="text-gray-700 text-xl">
                Nasz zespół 2.5 inżynierów nieustannie pracował przez 5 dni żeby dostarczyć ostateczne API by rozwiązać problem niedzieli handlowych.
            </p>
        </div>

        <div class="bg-white rounded-xl shadow-xl p-8 mb-16">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold text-gray-800">Banalnie proste API</h2>
                <div class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    v1.0
                </div>
            </div>

            <div class="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm">
                <pre><code>{`GET "https://api.gdziezakupywariacie.pl/"

{
    "czy_handlowa": "${apiData.czy_handlowa}",
    "odp": "${apiData.odp}",
    "next_handlowa": "${apiData.next_handlowa}"
}`}</code></pre>
            </div>
        </div>

        <footer class="text-center text-gray-600">
            <p class="mb-2">© {apiData1.year_string} gdziezakupywariacie.pl | Wszelkie prawa zastrzeżone</p>
            <p class="text-sm">API dostarczył dla was <a href="https://github.com/Ksyl0" target="_blank" class="text-purple-600 hover:text-purple-700 transition-colors">Ksyl</a></p>
        </footer>
    </div>
</div>

<style>
    .animate-slide {
        animation: slide 20s linear infinite;
    }
    
    @keyframes slide {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(-100%);
        }
    }
</style>
