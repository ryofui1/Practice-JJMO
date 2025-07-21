console.log("Hello,World")

function createElement(message = "ワールド") {
    const template = `<p>
        hello ${message}
    </p>`
    return template
}

const message = createElement("world")

const contents = document.getElementsByClassName("contents")[0]
contents.innerHTML = message