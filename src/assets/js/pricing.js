const toggle = document.querySelector("#pricing-387 .cs-toggle");
const monthlyItems = Array.from(document.querySelectorAll(".cs-monthly-only"));
        const option1 = document.querySelector("#pricing .cs-toggle-group #cs-option1-387");
        const option2 = document.querySelector("#pricing .cs-toggle-group #cs-option2-387");
        const optionGroup = Array.from(document.querySelectorAll('.cs-option-group'));


        toggle.addEventListener('click', (e) => { 
            for (const item of optionGroup) {
                item.classList.toggle("option2-active");
            }
            for (const item of monthlyItems) {
                item.classList.toggle("cs-disabled");
            }
            toggle.classList.toggle("active");
        });

        option1.addEventListener('click', (e) => { 
            for (const item of optionGroup) {
                item.classList.remove("option2-active");
            }
            for (const item of monthlyItems) {
                item.classList.remove("cs-disabled");
            }
            toggle.classList.remove("active");
            monthlyItems.classList.remove("cs-disabled");
        });

        option2.addEventListener('click', (e) => { 
            for (const item of optionGroup) {
                item.classList.add("option2-active");
            }
            for (const item of monthlyItems) {
                item.classList.toggle("cs-disabled");
            }
            toggle.classList.add("active");
            monthlyItems.classList.add("cs-disabled");
        });