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

export { htmlFor1, htmlFor2 };
