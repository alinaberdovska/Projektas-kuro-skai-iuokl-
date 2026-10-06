Kuro Skaičiuoklė – Projekto Kontekstas

1. Projekto paskirtis

Kuro Skaičiuoklė – pirmasis projekto etapas, kuriamas naudojant React ir Vite.

Projekto kodas turi būti paprastas, aiškus ir lengvai prižiūrimas. Atliekant pakeitimus svarbiausia išlaikyti esamą funkcionalumą ir projekto struktūrą.

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

Projekte naudojama moderni tamsi / Indigo vizualinė tema.

Pagrindiniai principai

Tamsus aplikacijos fonas.

Skaidrios kortelės su stiklo efektu.

Naudoti backdrop-filter: blur(...).

Modernūs, minimalistiniai UI elementai.

Užapvalinti kampai.

Subtilūs šešėliai.

Aiški vizualinė hierarchija.

Pagrindiniai akcentų atspalviai

#4f46e5
#6366f1
#0ea5e9
#312e81

Tekstas

Pagrindinis tekstas turi būti šviesus.

Pagalbiniam tekstui galima naudoti:

#64748b
#9ca3af

Formos ir kortelės

Naudoti maždaug:

border-radius: 10px - 20px;
box-shadow: ...;

UI turi išlikti švarus, neperkrautas ir patogus naudoti tiek kompiuteryje, tiek mobiliuosiuose įrenginiuose.

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