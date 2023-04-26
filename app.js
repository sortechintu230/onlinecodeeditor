function run() {
    var htmlCode = document.getElementById("html-code");
    var cssCode = document.getElementById("css-code");
    var jsCode = document.getElementById("js-code");
    var output = document.getElementById("output");
    output.contentDocument.body.innerHTML = htmlCode.value;
    output.contentDocument.head.innerHTML = "<style>" + cssCode.value + "</style>";
    output.contentWindow.eval(jsCode.value);
}