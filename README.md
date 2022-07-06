# Integração entre Unity e React JS

# O projeto 

Este projeto é uma demonstração de como integrar um projeto Unity em webGL com o React JS. 
# A biblioteca

Através da biblioteca react web gl conseguimos integrar um projeto Unity feito em WebGL com o React JS.

Neste projeto usei o seguinte comando:

```shell
npm install react-unity-webgl@8.x
```

A versão da Unity minha é ``` 2021.2.2```

# Configurações


## Passo 1 - Dentro da Unity

- Vá em File -> Build Settings e em Platform mude para WebGL.

- Dentro de *Build Settings*  vá em *Player Settings*  e  na seção *Publishing Settings* é necessário alterar o formato de compressão (*Compression Format*) para ```Gzip```

 - Depois vá em *Descompression Fallback* e marque a caixa ao lado se não estiver marcada ainda.

 - Em *Build Settings* clique em Build para gerar os arquivos de build.

## Passo 2 - No React JS 

- Crie o projeto React normalmente

- Dentro da pasta public crie uma pasta com o nome que você quiser. Neste projeto o nome da pasta é buildUnity

- Quando os arquivos da Unity são gerados, você vai ver que a pasta é o nome do projeto que você deu na hora de criar um projeto Unity. Depois lá dentro tem uma pasta chamada build. Copie ou corte todos os arquivos de lá e cole dentro da pasta buildUnity que foi criada dentro da pasta public no seu projeto React.

- O código com a configuração feita para iniciar o projeto Unity dentro do projeto react está dentro de src/App.jsx neste repositório github.







