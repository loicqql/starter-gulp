window.addEventListener('DOMContentLoaded', () => {
    const onEvent = (selectorCss, event, functionCallback) => {document.querySelectorAll(selectorCss).forEach(el => {el.addEventListener(event, function() {functionCallback(this)})})};

    

})