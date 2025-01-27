<script lang="ts">
    let exampleCodeString: string = `GET "https://getfullyear.com/api/year"<br>
                {<br>
                    "year": 2025,<br>
                    "year_string": "2025",<br>
                    "sponsored_by": "Viagra: standing tall and proud"<br>
                }<br>`
</script>

<div class="vh-100 v-stack" id="main">
    <div class="text-base" id="intro">
        <p class="mt-10 font-bold text-xl">
            Czy użytkownik twojej aplikacji kiedykolwiek się ciebie zapytał:<br>
            A w tym tygodniu jest handlowa czy niehandlowa?<br>
            Jeśli twoja odpowiedź to TAK, to znajdujesz się we właściwym miejscu.
        </p>
        <br>Każdego dnia setki milionów polaków korzystając z internetu zadaje sobie pytanie<br>
        "Cholera czy w tym tygodniu jest niedziela handlowa?"*
        <br>Developerzy nie posiadający narzędzi do odpowiedzenia na to pytanie byli całkowicie bezradni, <bold class="font-bold">aż do teraz</bold>.
        <p class="text-xs italic font-extralight">* Liczba ustalona na podstawie wróżb żula Mietka spod lidla</p>
        <br>
        Nasz zespół 2.5 inżynierów nieustannie pracował przez 5 dni żeby dostarczyć ostateczne API by rozwiązać problem niedzieli handlowych.
    </div>
    <div id="example" class="mt-12 text-base">
        <p class="text-3xl f">
            Banalnie proste API
        </p>
        <p id="exaple-code" class="border-gray-200">
        </p>
    </div>
</div>

<style>
    * {
        outline: 2px solid lavender
    }
</style>