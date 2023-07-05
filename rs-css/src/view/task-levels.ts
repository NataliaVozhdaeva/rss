function taskFor1(): string {
    return `<h2>Tag selector</h2>
  <p class="rules">
    The first and simplest selector - is selector by tag. It takes all elements by tag-name.</p> 
  <h3>Examples</h3>
  <p>
    Rules below selector <span class="selector">div</span> will apply to all &lt;div&gt; in your page, <span class="selector">p</span> to all &lt;p&gt; and etc.
  </p>`;
}

function taskFor2(): string {
    return `<h2>Class selector</h2>
  <p class="rules">
    It had better to not use selector by tag. You can create meanfull class-nae for your element and use it. Class selector also takes all elements by the same class-name.</p> 
  <h3>Examples</h3>
  <p>
    Rules below selector <span class="selector">.my-class</span> will apply to all &lt;div class="my-class"&gt; in your page.
  </p>`;
}

export { taskFor1, taskFor2 };
