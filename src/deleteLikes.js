const dots = 'div[aria-label="Weitere Optionen"]';
const menu = 'div[role="menu"]';
const down = (element, level) => 0 === level ? element : down(element.firstChild, level - 1);

const click = async (element) => {
    element.click();
    await new Promise((resolve) => setTimeout(() => {
        down(document.querySelector(menu), 7).click();
        resolve();
    }, 800));
};

let retry = 5;
(async function main() {
    let dot;
    while (dot = document.querySelector(dots)) {
        await click(dot);
        retry = 0;
    }
    if (retry++ < 5) {
        setTimeout(main, 2000);
    }
})();
