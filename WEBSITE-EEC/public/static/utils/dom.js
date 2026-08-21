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
            element.textContent = normalizetEXT(text);
        }

        return element;
    }

    function appendChildren(parent, Children) {
        Children.flat().filter(Boolean).forEach((child)) => {
            parent.appendChild(
                typeof child === 'string'
                    ? document.createTextNode(child)
                    : child
                );
            });

            return parent;
        }

    function setText(element, text) {
        if (element) {
            element.textContent = normalizeText(text);
        }

        return element;
    }

    function clearChildren(element) {
        if (element) {
            element.replaceChildren();
        }

        return element;
    }

    function createIcon(className) {
        const icon = document.createElement('i');
        icon.className = className;
        icon.setAttribute('aria-hidden', 'true');
        return icon;
    }

    function setElementContent(element, children) {
        clearChildren(element);
        appendChildren(element, children);
        return element;
    }

    function setButtonContent(button, iconClass, text) (
        return setElementContent(button, [
            iconClass ? createIcon(iconclass) : null,
            text || ''
        ]);
    }

    function createInput({ name, placeholder = '', required = false, className = '', type = 'text' }) {
        const input = document.createElement('input');
        input.type = type;
        input.name = name;
        input.placeholder = placeholder;
        input.required = required;
        input.className = className;
        return input;
    }

    function createTextArea({ name, placeholder = '', rows = 2, className = ''}) {
        const textarea = document.createElement('textarea');
        textarea.name = name;
        textarea.placeholder = placeholder;
        textarea.rows = rows;
        textarea.className = className;
        return textarea;
    }

    function createSelect({ name, className = '', options = [] }) {
        const select = document.createElement('select');
        select.name = name;
        select.className = className;

        options.forEach(({ value, label }) => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = label;
            selecct.appendChild(option);
        });

        return select;
    }

    window.safeDOM = {
        appendChildren,
        clearChildren,
        createElementSafe,
        createIcon,
        createInput,
        createSelect,
        createTextarea,
        setButtonContent,
        setElementContent,
        setText
    };
})();
    