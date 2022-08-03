# React-Native + TypeScript + iOS

Guida per configurare un progetto React-Native con TypeScript e avviarlo su iOS (2022-07-22).
Il progetto verrà inizialmente configurato con *JavaScript* e successivamente sarà abilitato *TypeScript* (fonte: <https://reactnative.dev/docs/typescript>)

## Creazione progetto

Questo è il comando per creare il progetto. Alla data attuale è necessario selezionare la versione 0.68.2 di *react-native*. La configurazione con TypeScript verrà eseguita nel passaggio successivo. 

```sh
npx react-native init <nome-progetto> --version 0.68.2
```

## Installazione TypeScript

Spostarsi nella cartella del progetto appena creato ed eseguire il seguente comando per installare *TypeScript*:

```sh
cd <nome-progetto>

npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
```

## Configurazione TypeScript

Una volta installato il pacchetto, creare il file di configurazione per *TypeScript* denominato *tsconfig.json* nella cartella root del progetto. Il contenuto sarà il seguente:

```json
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react-native",
    "lib": ["es2017"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}
```

A questo punto creare, sempre nella cartella root, un file, denominato *jest.config.js*, per permettere a *Jest* di utilizzare *TypeScript*:

```js
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
```

## Da JavaScript a TypeScript

Il file *App.js* (o *App.jsx*) deve essere rinominato *App.ts* (o *App.tsx*). Tutti i componenti che verranno creati dovranno avere la stessa estensione (*.ts* o *.tsx*).

NOTA: per evitare di riscontrare problemi durante la build del progetto, mantenere il file index.js in formato *JavaScript*.

## Verifica

Ora il progetto può essere avviato su iOS tramite il seguente comando:

```sh
npm run ios
```

NOTA: Il file *App.tsx* è ancora in formato *JavaScript*, quindi è necessario apportare le dovute modifiche al file per utilizzarlo in formato TypeScript.
