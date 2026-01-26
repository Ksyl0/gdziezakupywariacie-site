<script lang="ts">
    export let data;
    const { apiData1 } = data;
</script>

<svelte:head>
    <title>O Nas - Gdzie zakupy wariacie?</title>
    <meta name="description" content="Informacje o projekcie gdziezakupywariacie.pl">
</svelte:head>

<div class="min-h-[calc(100vh-4rem)] bg-slate-800 py-12 px-4">
    <div class="max-w-3xl mx-auto">
        <div class="bg-slate-900 rounded-xl shadow-2xl p-8 border border-slate-700">
            <div class="flex justify-center mb-8">
                <div class="bg-slate-700 p-4 rounded-full ring-2 ring-slate-600">
                    <svg class="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>

            <h1 class="text-4xl font-bold text-slate-100 text-center mb-8">O Nas</h1>
            
            <div class="prose prose-slate max-w-none">
                <h2 class="text-2xl font-semibold text-slate-200 mb-4">O Projekcie</h2>
                <p class="text-slate-300 mb-6 leading-relaxed">
                    <strong class="text-slate-100">gdziezakupywariacie.pl</strong> to projekt stworzony z myślą o osobach którym nie chce się zaznaczać na kalendarzach co roku wszystkich niedziel handlowych oraz wszystkich developerów, którzy potrzebują prostego i niezawodnego sposobu na sprawdzenie, czy najbliższa niedziela jest handlowa.
                </p>

                <p class="text-slate-300 mb-6 leading-relaxed">
                    Nasz zespół dostarczył prostą strone oraz niezawodne API, które pozwalają na zawsze pożegnać się z regularnym sprawdzaniem kalendarza niedziel handlowych.
                </p>

                <h2 class="text-2xl font-semibold text-slate-200 mb-4 mt-8">Autor:</h2>
                <p class="text-slate-300 mb-6">
                    <a href="https://github.com/Ksyl0" target="_blank" class="text-emerald-400 hover:text-emerald-300 transition-colors font-semibold">
                        Ksyl
                    </a>
                </p>

                <h2 class="text-2xl font-semibold text-slate-200 mb-4 mt-8">Kontakt</h2>
                <p class="text-slate-300 mb-6">
                    Masz pytania, sugestie lub chcesz zgłosić problem?<br>
                    Odwiedź repozytorium na <a href="https://github.com/Ksyl0/gdziezakupywariacie-site" target="_blank" class="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">GitHubie</a>.
                </p>
                <p class="text-slate-300 mb-6">
                    Bądź zadzwoń na naszą infolinie w sieci IP Telefonija pod numerem 11266.
                </p>
            </div>
        </div>

        <footer class="text-center mt-12 text-slate-400">
            <p class="mb-2">© {apiData1.year_string} gdziezakupywariacie.pl | Wszelkie prawa zastrzeżone</p>
            <p class="text-sm">API oraz stronę dostarczył dla was <a href="https://github.com/Ksyl0" target="_blank" class="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">Ksyl</a></p>
        </footer>
    </div>
</div>
