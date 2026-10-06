Kuro Skaičiuoklė – Projekto Kontekstas

1. Projekto paskirtis

Kuro Skaičiuoklė – pirmasis projekto etapas, kuriamas naudojant React ir Vite.

Projekto kodas turi būti paprastas, aiškus ir lengvai prižiūrimas. Atliekant pakeitimus svarbiausia išlaikyti esamą funkcionalumą ir projekto struktūrą.

Esamos naudotojo sąsajos galimybės:

- Prisijungimo forma su el. pašto ir slaptažodžio laukais.
- Kuro sąnaudų skaičiuoklė: kelionės atstumas, sąnaudos, kuro rūšis ir ranka įrašoma kuro litro kaina.
- Kuro rūšys: benzinas, dyzelinas, LPG arba pasirinktinė kuro rūšis / kaina.
- Kelionės dalyvių skaičius (numatytoji reikšmė – 4) ir išlaidų vienam žmogui skaičiavimas.
- Rezultatuose rodomas kelionės atstumas, reikalingas kuro kiekis, bendra kelionės kaina ir kaina vienam žmogui.

Kuro kainos nėra gaunamos automatiškai: jas įveda naudotojas.

2. Technologijos

Projektas naudoja:

React

Vite

JavaScript / JSX

Svarbu

Nenaudoti TypeScript.

Nenaudoti Tailwind CSS.

Nenaudoti CSS Modules.

Stiliams naudoti įprastus .css failus.

React komponentai ir projekto resursai turi būti laikomi src/ aplanke.

Naudoti funkcinius React komponentus ir Hooks (useState, useEffect ir kt.).

3. Projekto struktūra

Rekomenduojama struktūra:

src/
├── components/
│   ├── ...
│
├── utils/
│   ├── ...
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx

Komponentus, kuriuos verta atskirti nuo pagrindinės aplikacijos, laikyti src/components/.

Pagalbines funkcijas ir skaičiavimo logiką laikyti src/utils/.

Nekurti naujų aplankų ar failų struktūros be aiškios priežasties.

4. UI ir vizualinis stilius

Projekte naudojama šviesi indigo / mėlyna vizualinė tema.

Pagrindiniai principai

- Šviesus aplikacijos fonas su švelniais indigo ir mėlynais gradientais.
- Baltos arba šviesios, skaidrios kortelės su stiklo efektu.
- Naudoti backdrop-filter: blur(...), kai jis tinka kortelės fonui.
- Modernūs, minimalistiniai UI elementai, aiški vizualinė hierarchija ir subtilūs šešėliai.
- Užapvalinti kampai (dažniausiai 10–24 px).
- Sąsaja turi būti patogi kompiuteryje ir mobiliuosiuose įrenginiuose.

Pagrindiniai akcentų atspalviai

- Indigo: #4f46e5, #6366f1
- Mėlyna: #0ea5e9
- Šviesūs fonai: #f8fafc, #eef2ff, #dbeafe

Tekstas

- Ant šviesaus fono naudoti tamsų pagrindinį tekstą (#0f172a arba #334155).
- Pagalbiniam tekstui naudoti įskaitomą pilkai mėlyną spalvą (#64748b).
- Ant tamsių akcentinių mygtukų naudoti baltą tekstą.

Formos ir kortelės

- Įvesties laukams naudoti baltą arba beveik baltą foną, pilkai mėlyną kraštinę ir aiškų indigo fokusavimo žymėjimą.
- Rezultatų kortelę išskirti švelniu indigo fonu ir tamsiu, įskaitomu tekstu.
- Išlaikyti saikingą border-radius ir box-shadow.

5. Kalba

Visas vartotojui matomas turinys turi būti lietuvių kalba.

Tai apima:

mygtukus;

laukų pavadinimus;

pagalbinius tekstus;

klaidų pranešimus;

validacijos pranešimus;

informacinius pranešimus.

Nenaudoti angliškų tekstų vartotojo sąsajoje, nebent tai yra techninis pavadinimas, kurio negalima arba nereikia versti.

6. Validacija

Formų validacija turi būti aiški ir suprantama vartotojui.

El. pašto laukams turi būti taikoma griežta reikšmės validacija.

Klaidos turi būti pateikiamos lietuvių kalba ir aiškiai paaiškinti, ką vartotojas turi pataisyti.

7. Kodo keitimo principai

Prieš keičiant kodą:

Perskaityti context.md.

Perskaityti README.md.

Peržiūrėti keičiamo failo esamą turinį.

Patikrinti, kaip esamas kodas susijęs su kitais komponentais.

Visada pirmenybę teikti naujausiam faktiniam projekto kodui, o ne pasenusiai dokumentacijai.

Atliekant pakeitimus

Neištrinti veikiančio funkcionalumo be aiškios priežasties.

Nesukurti neegzistuojančių API ar funkcijų.

Nekeisti esamos architektūros be poreikio.

Vengti nereikalingų refaktorizacijų.

Nediegti naujų dependencies, jei jų nereikia užduočiai.

Išlaikyti esamą projekto stilistiką.

Užtikrinti, kad import keliai būtų teisingi.

8. Responsive dizainas

Kiekvienas naujas arba pakeistas UI elementas turi būti pritaikytas skirtingiems ekranų dydžiams.

Būtina patikrinti:

mobiliuosius ekranus;

planšetinius ekranus;

stalinius ekranus.

Elementai neturi išslysti už ekrano ribų arba tapti nepatogūs naudoti mažame ekrane.

9. Prieš užbaigiant pakeitimus

Prieš pateikiant atliktą darbą patikrinti:

ar kodas atitinka esamą projekto struktūrą;

ar esamas funkcionalumas išliko;

ar nėra JavaScript / React klaidų;

ar nėra nereikalingų dependencies;

ar visi import keliai teisingi;

ar UI išlieka responsive;

ar vartotojui matomi tekstai yra lietuvių kalba;

ar naujas kodas atitinka esamą projekto estetiką.

10. Pakeitimų pateikimas

Pateikiant atliktą užduotį vartotojui:

Trumpai aprašyti, kas buvo pakeista.

Nurodyti kiekvieno pakeisto arba sukurto failo tikslų kelią.

Aiškiai nurodyti, ar failą reikia sukurti, ar pakeisti.

Pateikti pilną atnaujinto failo kodą.

Pateikti trumpą instrukciją, kaip patikrinti pakeitimus.

Pagrindinis tikslas – kad vartotojas galėtų pateiktą kodą tiesiogiai nukopijuoti į projektą ir jį paleisti.

## 11. Profilio puslapio MVP

Programėlėje įgyvendintas naudotojo profilio puslapis, pasiekiamas iš kuro skaičiuoklės antraštėje esančio mygtuko „Profilis“. Kadangi projekte nenaudojamas maršrutizatorius, profilio ir skaičiuoklės vaizdai perjungiami programėlės būsena.

Profilio puslapyje yra:

- Hero kortelė su apskritu avataru, naudotojo vardu, el. paštu ir žymomis „Vairuotojas“ bei „Aktyvus narys“. Kol vardas neįvestas, rodomas pavyzdinis vardas „Jonas Jonaitis“.
- Veiklos statistika su pavyzdinėmis reikšmėmis: 12 skaičiavimų, 1 450 km ir mėgstamiausias kuras – dyzelinas. Šie duomenys yra demonstraciniai.
- Numatytojų nuostatų forma: kuro sąnaudos (l/100 km; leidžiama reikšmė nuo 0,1 iki 100) ir pageidaujama EUR arba USD valiuta. Išsaugojus parodomas patvirtinimo pranešimas. MVP nuostatos saugomos tik komponento būsenoje ir nėra išsaugomos serveryje ar naršyklės saugykloje.
- Profilio forma vardui ir telefono numeriui atnaujinti; el. paštas rodomas tik skaitymui.

**Failai:** `src/pages/Profile.jsx`, `src/pages/Profile.css`, `src/App.jsx`, `src/components/FuelCalculator.jsx` ir `src/components/FuelCalculator.css`.

Sąsaja pritaikyta siauriems ekranams: statistikos kortelės išdėstomos vertikaliai, formos laukai telpa viename stulpelyje, o profilio antraštės mygtukai išdėstomi vienas po kitu. Gamybinis build (`npm run build`) ir ESLint patikra (`npm run lint`) sėkmingai įvykdyti po profilio pakeitimų.
