            parent.appendChild(
(function () {
    function normalize(text) {
        return text === undefined || text === null ? '' : String(text);
    }
   
    function createElementSafe(tag, text = '', className = '') {
        const element = document.createElement(tag);

        if (className) {
            element.className = className;
        }

        if (text !== undefined && text !== null && text !== '') {
            element.textContent = normalize
        }
    }
    })
            )