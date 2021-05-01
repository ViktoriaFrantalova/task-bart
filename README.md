# task-bart

## Úroveň 1

## Vytvor responzívnu HTML šablónu pre fotogalériu podľa grafického návrhu.

Potrebné podklady:

- Grafický návrh: [link](./Task/description.pdf)
- Zdrojový súbor (.psd): [link](./Task/gallery.psd)
- Použité fotografie (www.pexels.com): [link](./images)

Použité technológie a požiadavky:

- HTML5 štandard
- CSS s použitím SASS
- Responzívna grafika
- Nezabudni na optimalizáciu pre obrazovky s vysokým rozlíšením (5K display)
- Mysli na sémantickosť a validnosť kódu
- Použi bootstrap alebo iný CSS framework (voliteľné)

Odovzdanie zadania:

Zadanie prosím nahrajte na github / gitlab / bitbucket a pošlite nám link

## Riešenie

- ikonky som stiahla z [icomoon](https://icomoon.io/app/#/select)

### sass compiler

- [sass](https://sass-lang.com/install) som skompilovala pomocou prikazu:

```
sass --watch ./scss/base.scss:./style.css
```

## Úroveň 2

Ak si zvládol úroveň 1 a myslíš si, že máš na viac, môžeš skúsiť aj úroveň 2. Použi podklady vytvorené v 1. úrovni na vytvorenie single page frontend aplikácie.

Potrebné podklady:

- Podklady z Úroveň 1

Použité technológie a požiadavky:

- Použi UI knižnicu React alebo Angular (najnovšie stable verzie)
- Implementuj router
- Komponenty navrhni logicky bez zbytočného opakovania sa a s možnosťou ich znovupoužitia
- Môžeš skúsiť použiť aj webpack (voliteľné)

## Riešenie

Na tvorbu single page aplikácie som použila `create-react-app`, inicializovala som to pomocou príkazu:

```
npx create-react-app level-2 --template typescript
```

Vrámci tohto príkazu sa mi nastavil projekt v `Typescripte`.
Na štylovanie som použila `style-componnets`, ktorý som inicializovala pomocou príkazu:

```
npm install --save styled-components
```

Na podporu Typescritu pre styled-componnets som použila príkaz:

```
npm install @types/styled-components
```

Na vyresetovanie default štylov som použila npm balíček `styled-reset`, príkaz:

```
npm i styled-reset
```

Nastavila som si `ThemeProvider` pre svoje globalne [premenné](./level-2/src/styles/index.tsx) a štyly, zároveň som deklarovala Typescript v priečinku [typings](./level-2/src/typings/styled-components.d.ts)

V editore VSCode som si nastavila validátor [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

Nainštalovala som si baliček [react-route-dom](https://www.npmjs.com/package/react-router-dom), ktorý mi umožňuje routoanie web aplikácie.
