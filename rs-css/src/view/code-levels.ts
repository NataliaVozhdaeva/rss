function htmlFor1(): string {
    return `<div class="tag">&lt;cat /&gt;</div>
                <div class="tag">&lt;cat /&gt;</div>
                <div class="tag">&lt;cat /&gt;</div`;
}

function htmlFor2(): string {
    return `<div class="tag">&lt;cat class="ginger" /&gt;</div>
              <div class="tag">&lt;cat class="black"/&gt;</div>
              <div class="tag">&lt;cat class="gray"/&gt;</div>`;
}

function htmlFor3(): string {
    return `<div class="tag">&lt;cat class="ginger" /&gt;</div>
              <div class="tag">&lt;cushion/&gt;</div>
              <div class="tag">&lt;cat class="gray"/&gt;</div>`;
}

function htmlFor4(): string {
    return `<div class="tag">&lt;cat class="ginger" /&gt;</div>
              <div class="tag">&lt;cushion/&gt;</div>
              <div class="tag">&lt;cat class="gray"/&gt;</div>`;
}

function htmlFor5(): string {
    return `<div class="tag">&lt;cushion&gt;</div>
    <div class="tag inside">\u00A0\u00A0&lt;cat /&gt;</div>
    <div class="tag">&lt;/cushion&gt;</div>
    <div class="tag">&lt;cushion&gt;</div>
    <div class="tag">&lt;/cushion&gt;</div>
    <div class="tag">&lt;cat class="gray"/&gt;</div>`;
}

export { htmlFor1, htmlFor2, htmlFor3, htmlFor4, htmlFor5 };
