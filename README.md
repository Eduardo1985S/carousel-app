# Aplicativo de Carrossel Mobile

Aplicativo mobile desenvolvido em **React Native** e **Expo** que exibe um carrossel de imagens com autoplay, indicadores de página e navegação para tela de detalhes.

## ✨ Funcionalidades

- Carrossel horizontal com **autoplay** configurável
- Indicadores visuais de página (dots) para mostrar a posição atual
- Suporte a imagens locais via `require(...)`
- Tela de detalhes para cada slide, com título, subtítulo e descrição
- Layout responsivo que se adapta à largura da tela
- Navegação simples usando **expo-router**

## 🚀 Tecnologias

- React Native
- Expo
- expo-router
- react-native-safe-area-context
- react-native-gesture-handler

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/carousel-app.git
cd carousel-app

# Instale as dependências
npm install
# ou
yarn install

# Execute no emulador/dispositivo
expo start
```

## 🏗️ Estrutura de Pastas

```
carousel-app/
├── assets/                # Imagens e ícones
│   └── images/
│       ├── slide1.jpg
│       ├── slide2.jpg
│       └── slide3.jpg
├── app/                   # Rotas do expo-router
│   ├── _layout.js         # Configuração de navegação
│   ├── index.js           # Tela Home com o carrossel
│   └── details.js         # Tela de detalhes do slide
├── components/
│   └── Carousel.js        # Componente de carrossel
├── package.json
└── README.md
```

## ⚙️ Uso

1. Ajuste os dados do carrossel em `app/index.js`:
    
    ```jsx
    const carouselData = [
      { id: '1', title: 'Título 1', subtitle: 'Subtítulo', image: require('../assets/images/slide1.jpg') },
      // ... mais slides
    ];
    ```
    
2. No componente `Carousel`, use a prop `autoplayDelay` (ms) para definir o intervalo:
    
    ```jsx
    <Carousel data={carouselData} autoplayDelay={4000} />
    ```
    
3. Personalize estilos em `components/Carousel.js` ou crie seu próprio tema.

## 🔧 Customização

- **Imagens remotas**: Se quiser usar URLs, ajuste o `renderItem` para usar `{ uri: item.image }` em vez de `item.image`.
- **Animações**: Integre o `react-native-reanimated` para efeitos personalizados.
- **Controles manuais**: Adicione botões de próximo/anterior sobrepostos ao carrossel.