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
    It had better to not use selector by tag. You can create meanfull class-name for your element and use it. Class selector also takes all elements by the same class-name.</p> 
  <h3>Examples</h3>
  <p>
    Rules below selector <span class="selector">.my-class</span> will apply to all elements &lt;el class="my-class"&gt; in your page.
  </p>`;
}

function taskFor3(): string {
    return `<h2>Combine rules</h2>
<p class="rules">
There are a lot of selectors. You can look up the onformation on Internet. And moreover, you can use them simultaniously!
For example, for using the one rule for two (or more) elemens. Just write your selectors with a comma. And please, use a whitespace for readabitity.</p> 
<h3>Examples</h3>
<p>
  Rules below selector <span class="selector">.my-class, pillow</span> will apply to elements &lt;el class="my-class"&gt; and &lt;pillow&gt; in your page.
</p>`;
}

function taskFor4(): string {
    return `<h2>Combine selectors</h2>
<p class="rules">
As well as you combine rules, you can combine selectors - for specifying your choise. For example, to choose the menu-item, where your user is,
you can write selector for element, which have not only its own specifiyd class-name, but also class="active".
Just write your selectors with a dot - attention! - without a whitespace.</p> 
<h3>Examples</h3>
<p>
Rules below selector <span class="selector">cat.my-class</span> will apply to elements whith tag-name &lt;cat&gt; and class-name "my-class" &lt;el class="my-class"&gt; in your page.
</p>`;
}

function taskFor5(): string {
    return `<h2>Continue combining selectors</h2>
<p class="rules">
Do you remember notion - to choose element, which has two selectors in the same time you should write this selectors without whitespase?
The reason is - with whitespace it will be another selector, which will work for element inside.
Almost the same way you can use ">" between selectors. The difference is that whitespace point to any child (despite the nesting), but ">" can work with just direct descendants.
<h3>Examples</h3>
<p>
Rules below selector <span class="selector">pillow .my-class</span> will apply to elements whith &lt;el class="my-class"&gt; inside the &lt;pillow&gt; (as well as pillow > .my-class).
Remember about whitespace! It's not necessary with additional symbols, but good for readability.
</p>`;
}

export { taskFor1, taskFor2, taskFor3, taskFor4, taskFor5 };
