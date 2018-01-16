function add_dollar() {
    console.log("add_dollar()");
    localStorage.setItem('tips_total', parseInt(localStorage.getItem('tips_total'), 10) + 1);

    var tips = JSON.parse(localStorage.getItem('tips'));
    tips.push([1, new Date()]);
    localStorage.setItem('tips', JSON.stringify(tips));
    render_jar();
}

function initialize_jar() {
    if (!localStorage.getItem('tips_total')) {
        localStorage.setItem('tips_total', 0);
    }
    if (!localStorage.getItem('tips')) {
        localStorage.setItem('tips', '[]');
    }
}

function render_jar() {
    var total = window.localStorage.getItem('tips_total');
    document.getElementById('tipjar').innerHTML = "$" + total;
}

function reset_jar() {
    localStorage.setItem('tips_total', 0);
    render_jar();
    window.location = "./pledge";
}
