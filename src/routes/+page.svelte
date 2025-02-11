<script lang="ts">
    export let data;
    const { apiData, apiData1 } = data;
    console.log(apiData1.sponsored_by)
</script>
<svelte:head>
    <title>Gdzie zakupy wariacie?</title>
    <meta name="description" content="Niezawodne API dla tych którzy muszą wiedzieć czy w tym tygodniu jest handlowa.">
</svelte:head>

<div class="vh-100 v-stack bg-gray-50" id="main">
    <div class="text-base" id="intro">
        <p class="mt-10 font-bold text-xl">
            Czy użytkownik twojej aplikacji kiedykolwiek się ciebie zapytał:<br>
            A w tym tygodniu jest handlowa czy niehandlowa?<br>
            Jeśli twoja odpowiedź to TAK, to znajdujesz się we właściwym miejscu.
        </p>
        <br>Każdego dnia setki milionów polaków* korzystając z internetu zadaje sobie pytanie<br>
        "Cholera czy w tym tygodniu jest niedziela handlowa?"
        <br>Developerzy nie posiadający narzędzi do odpowiedzenia na to pytanie byli całkowicie bezradni, <bold class="font-bold">aż do teraz</bold>.
        <p class="text-xs italic font-extralight">* Liczba ustalona na podstawie wróżb żula Mietka spod lidla</p>
        <br>
        Nasz zespół 2.5 inżynierów nieustannie pracował przez 5 dni żeby dostarczyć ostateczne API by rozwiązać problem niedzieli handlowych.
    </div>
    <div id="example" class="mt-12 text-base">
        <p class="text-3xl f">
            Banalnie proste API
        </p>
        <p id="example-code" class="border-gray-200">
            <pre><code>
                {`
                GET "https://api.gdziezakupywariacie.pl/"
                {
                    "czy_handlowa": ${apiData.czy_handlowa},
                    "odp": ${apiData.odp},
                    "next_handlowa": ${apiData.next_handlowa}
                }`}
            </code></pre>
    </div>
    <div id="footer" class="bottom-1 inset-x-0 absolute">
        <p class="text-center"> © {apiData1.year_string} gdziezakupywariacie.pl | Wszelkie prawa zastrzeżone</p>
        <p class="text-xs text-center">Te piękne API dostarczył dla was <a href="https://github.com/Ksyl0" class="text-blue-400 font-extralight">Ksyl</a></p>
    </div>
</div>

<style>
    /* * {
        outline: 2px solid lavender
    } */
</style>