function Validator(options) {
    var selectorRules = {};
    function validate(elementInput, rule) {
        var errorElement = elementInput.parentElement.querySelector(
            options.errorMessage,
        );
        var errorMessage = rule.test(elementInput.value);
        var rules = selectorRules[rule.selector];
        for (var i = 0; i < rules.length; i++) {
            errorMessage = rules[i](elementInput.value);
            if (errorMessage) break;
        }
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            elementInput.parentElement.classList.add("invalid");
        } else {
            errorElement.innerText = "";
            elementInput.parentElement.classList.remove("invalid");
        }
        return !errorMessage;
    }
    var formElement = document.querySelector(options.form);
    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();
            var isFormValid = true;
            options.rules.forEach((rule) => {
                var elementInput = formElement.querySelector(rule.selector);
                var isValid = validate(elementInput, rule);
                if (isValid) {
                    isFormValid = false;
                }
                if (isFormValid) {
                    console.log("cos loi");
                } else {
                    console.log("khong");
                }
            });
        };
        options.rules.forEach((rule) => {
            var elementInput = formElement.querySelector(rule.selector);
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }
            elementInput.onblur = function () {
                validate(elementInput, rule);
            };
            elementInput.oninput = function () {
                var errorElement = elementInput.parentElement.querySelector(
                    options.errorMessage,
                );
                errorElement.value = "";
                elementInput.parentElement.classList.remove("invalid");
            };
        });
    }
}
Validator.isRequired = function (selector, message) {
    return {
        selector,
        test(value) {
            return value.trim()
                ? undefined
                : message || `Truong nay khong duoc bo trong`;
        },
    };
};
Validator.isEmail = function (selector, message) {
    return {
        selector,
        test(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value)
                ? undefined
                : message || "Truong nay phai la email";
        },
    };
};
Validator.minLength = function (selector, min, message) {
    return {
        selector,
        min,
        test(value) {
            return value.length >= min
                ? undefined
                : message || `Mat khau phai lon hon ${min} ki tu`;
        },
    };
};
Validator.isConfirmed = function (selector, valuePassword, message) {
    return {
        selector,
        test(value) {
            return value === valuePassword()
                ? undefined
                : message || "Truong nay khong hop le";
        },
    };
};

export { Validator };
