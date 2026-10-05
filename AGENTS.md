# AI Agent Instructions – Kuro Skaičiuoklė (Pirmas projektas)

Šios instrukcijos taikomos AI asistentams (Cursor, Claude, ChatGPT, GitHub Copilot ir kt.), dirbantiems prie šio projekto.

## 1. Projekto Kontekstas
- Prieš atlikdami bet kokius kodo pakeitimus, būtinai perskaitykite `context.md` ir `README.md`.
- Visada pirmenybę teikite naujausiam projekto kodui, o ne pasenusiai dokumentacijai.

## 2. Technologijos ir Stakė
- Naudokite **React + Vite**.
- Naudokite tik **JavaScript (JS / JSX)**. Netransformuokite kodo į TypeScript.
- Nenaudokite Tailwind CSS ar CSS Modulių.
- Stilius rašykite švariu **CSS** atskiruose `.css` failuose (pvz., `App.css`, `index.css` arba konkretaus komponento CSS faile).
- Visi React komponentai ir resursai turi būti laikomi `src/` aplanke.

## 3. Dizainas ir UI Stilius
Išlaikykite esamą projekto estetiką:
- **Tema:** Tamsi / Indigo tema su skaidriomis stiklo efekto (`backdrop-filter: blur`) kortelėmis.
- **Akcentai / Gradientai:** Indigo ir mėlyni atspalviai (`#4f46e5`, `#6366f1`, `#0ea5e9`, `#312e81`).
- **Tekstas:** Tamsiame fone – šviesus pagrindinis tekstas ir pilkas pagalbinis tekstas (`#64748b` / `#9ca3af`).
- **Formos ir elementai:** Užapvalinti kampai (`border-radius: 10px - 20px`), švelnūs šešėliai (`box-shadow`), moderni minimalistinė sąsaja.

## 4. Kodo Pakeitimo Taisyklės
- Prieš redaguodami failą, visada peržiūrėkite esamą jo turinį.
- Nesugalvokite neegzistuojančios logikos ar API.
- Išsaugokite esamą funkcionalumą (pvz., prisijungimo formos laukus, validaciją), nebent gavote aiškią užduotį jį pakeisti.
- Venkite nereikalingų kodo refaktorizacijų ar naujų bibliotekų (dependencies) diegimo be atskiro nurodymo.
- Naudokite tik funkcinius React komponentus ir Hooks (`useState`, `useEffect` ir t. t.).
- Skaidydami kodą į atskirus komponentus, laikykitės logiškos struktūros (`src/components/`, `src/utils/`).

## 5. UI Kalba ir Validacija
- Visi vartotojui matomi tekstai, mygtukai ir pranešimai turi būti **lietuvių kalba**.
- Įgyvendinant el. pašto tikrinimą, užtikrinkite griežtą reikšmių validaciją ir aiškius pranešimus lietuviškai.

## 6. Patikra prieš Pateikiant Atsakymą
Prieš užbaigdami užduotį patikrinkite, ar:
1. Kodas atitinka esamą projekto failų struktūrą.
2. Esamas funkcionalumas veikia be klaidų.
3. Nepridėta nereikalingų bibliotekų ar kodo priklausomybių.
4. Sąsaja išlieka adaptyvi (responsive).
5. Visi `import` keliai yra teisingi.

## 7. Pakeitimų Pateikimas Vartotojui
- Trumpai ir aiškiai paaiškinkite, kas buvo pakeista.
- Nurodykite tikslų kiekvieno naujo ar modifikuoto failo kelią (pvz., `src/components/LoginForm.jsx`).
- Pateikite **pilną atnaujinto failo kodą**, kad vartotojas galėtų jį tiesiog nukopijuoti ir įklijuoti.
- Aiškiai nurodykite, ar failą reikia sukurti iš naujo, ar pakeisti esamą.
- Pateikite trumpą instrukciją, kaip patikrinti atliktus pakeitimus.