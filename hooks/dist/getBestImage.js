"use strict";
exports.__esModule = true;
var react_1 = require("react");
function useResponsiveImage(imageName) {
    var _a = react_1.useState(''), responsiveImage = _a[0], setResponsiveImage = _a[1];
    react_1.useEffect(function () {
        // Função para verificar o tamanho da tela e selecionar a imagem correspondente
        function handleResponsiveImage() {
            var mediaQueries = [
                { size: 1, query: '(max-width: 320px)' },
                { size: 2, query: '(max-width: 480px)' },
                { size: 3, query: '(max-width: 768px)' },
                { size: 4, query: '(max-width: 1024px)' },
            ];
            var selectedImage = imageName + ".jpg"; // Imagem padrão
            // Loop pelas media queries e seleciona a primeira que corresponde ao tamanho da tela
            for (var _i = 0, mediaQueries_1 = mediaQueries; _i < mediaQueries_1.length; _i++) {
                var mq = mediaQueries_1[_i];
                if (window.matchMedia(mq.query).matches) {
                    selectedImage = imageName + "@" + mq.size + "x.jpg";
                    break; // Paramos no primeiro correspondente encontrado
                }
            }
            setResponsiveImage(selectedImage);
        }
        // Adiciona um listener para verificar o tamanho da tela quando a janela é redimensionada
        window.addEventListener('resize', handleResponsiveImage);
        // Chama a função uma vez para definir a imagem inicial com base no tamanho atual da tela
        handleResponsiveImage();
        // Remove o listener quando o componente é desmontado
        return function () {
            window.removeEventListener('resize', handleResponsiveImage);
        };
    }, [imageName]);
    return responsiveImage;
}
exports["default"] = useResponsiveImage;
