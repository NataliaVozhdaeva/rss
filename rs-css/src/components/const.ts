export const answers: string[] = [
    'cat',
    '.gray',
    '*',
    'cushion, .ginger .ginger, cushion',
    'cat.gray',
    'cushion cat cushion > cat',
];

export const tasks: object[] = [
    {
        title: 'Tag selector',
        rules: 'The first and simplest selector - is selector by tag. It takes all elements by tag-name.',
        examples:
            'Rules below selector <span class="selector">div</span> will apply to all &lt;div&gt; on your page, <span class="selector">p</span> to all &lt;p&gt; and etc.',
    },
    {
        title: 'Class selector',
        rules:
            'It had better to not use selector by tag. You can create meanfull class-name for your element and use it. Class selector also takes all elements by the same class-name.',
        examples:
            'Rules below selector <span class="selector">.my-class</span> will apply to all elements &lt;el class="my-class"&gt; on your page.',
    },
    {
        title: 'All-purpose selector',
        rules:
            'Sometimes you might need to get all elements on your page. There is a special selector, which will help.',
        examples: 'Rules below selector <span class="selector">*</span> will apply to all elements on your page.',
    },
    {
        title: 'Combine rules',
        rules:
            'There are a lot of selectors. You can look up the onformation on Internet. And moreover, you can use them simultaniously! For example, for using the one rule for two (or more) elemens. Just write your selectors with a comma. And please, use a whitespace for readabitity.',
        examples:
            'Rules below selector <span class="selector">.my-class, pillow</span> will apply to elements &lt;el class="my-class"&gt; and &lt;pillow&gt; in your page.',
    },
    {
        title: 'Combine selectors',
        rules:
            'As well as you combine rules, you can combine selectors - for specifying your choise. For example, to choose the menu-item, where your user is, you can write selector for element, which have not only its own specifiyd class-name, but also class="active". Just write your selectors with a dot - attention! - without a whitespace.',
        examples:
            'Rules below selector <span class="selector">cat.my-class</span> will apply to elements whith tag-name &lt;cat&gt; and class-name "my-class" &lt;el class="my-class"&gt; in your page.',
    },
    {
        title: 'Continue combining selectors',
        rules:
            'Do you remember notion - to choose element, which has two selectors in the same time you should write this selectors without whitespase? The reason is - with whitespace it will be another selector, which will work for element inside. Almost the same way you can use ">" between selectors. The difference is that whitespace point to any child (despite the nesting), but ">" can work with just direct descendants.',
        examples:
            'Rules below selector <span class="selector">pillow .my-class</span> will apply to elements whith &lt;el class="my-class"&gt; inside the &lt;pillow&gt; (as well as pillow > .my-class). Remember about whitespace! It\'s not necessary with additional symbols, but good for readability.',
    },
];

export const codes: object[] = [
    {
        code:
            '<div class="tag">&lt;cat /&gt;</div><div class="tag">&lt;cat /&gt;</div><div class="tag">&lt;cushion /&gt;</div>',
    },
    {
        code:
            '<div class="tag">&lt;cat class="ginger" /&gt;</div> <div class="tag">&lt;cat class="black"/&gt;</div><div class="tag">&lt;cat class="gray"/&gt;</div>',
    },
    {
        code:
            '<div class="tag">&lt;cat /&gt;</div><div class="tag">&lt;cushion /&gt;</div><div class="tag">&lt;cushion class="cushion" /&gt;</div>',
    },
    {
        code:
            '<div class="tag">&lt;cat class="ginger" /&gt;</div><div class="tag">&lt;cushion/&gt;</div><div class="tag">&lt;cat class="gray"/&gt;</div>',
    },
    {
        code:
            '<div class="tag">&lt;cat class="ginger" /&gt;</div><div class="tag">&lt;cushion class="gray"/&gt;</div><div class="tag">&lt;cat class="gray"/&gt;</div>',
    },
    {
        code:
            // `<div class="tag">&lt;cushion&gt;</div> <div class="tag inside">\u00A0\u00A0\u00A0\u00A0&lt;cat /&gt;</div><div class="tag">&lt;/cushion&gt;</div><div class="tag">&lt;cushion&gt;</div><div class="tag">&lt;/cushion&gt;</div><div class="tag">&lt;cat class="gray"/&gt;</div>`,
            `<div class="tag">
                &lt;cushion&gt;
                    <div class="tag inside">\u00A0\u00A0\u00A0\u00A0&lt;cat /&gt;</div>
                &lt; /cushion&gt;
            </div>     
            
            <div class="tag">&lt;cushion&gt;&lt;/cushion&gt;</div>
            <div class="tag">&lt;cat class="gray"/&gt;</div>`,
    },
];

export const layouts: object[] = [
    {
        title: 'Choose cats!',
        code:
            '<div class="el"><img class="cat active" src="./assets/img/ginger.png" alt="" width="auto" height="200px"></div><div class="el"><img class="cat active" src="./assets/img/black.png" alt="" width="auto" height="200px"></div><div class="el"><img class="cat" src="./assets/img/cushion.png" alt="" width="auto" height="200px"></div>',
    },
    {
        title: 'Choose the one gray cat!',
        code:
            '<div class="game-container"><div class="el"><img class="cat" src="./assets/img/ginger.png" alt="" width="auto" height="200px"></div><div class="el"><img class="cat" src="./assets/img/black.png" alt="" width="auto" height="200px"></div><div class="el"><img class="cat active" src="./assets/img/gray.png" alt="" width="auto" height="200px"></div></div>',
    },
    {
        title: 'Choose all elements!',
        code:
            '<div class="game-container"><div class="el"><img class="cat active" src="./assets/img/ginger.png" alt="" width="auto" height="200px"></div><div class="el"><img class="cat active" src="./assets/img/cushion.png" alt="" width="auto" height="200px"></div><div class="el"><img class="cat active" src="./assets/img/cushion.png" alt="" width="auto" height="200px"></div></div>',
    },
    {
        title: 'Choose a ginger cat and a cushion!!',
        code:
            ' <div class="game-container"><div class="el"><img class="cat active" src="./assets/img/ginger.png" alt="" width="auto" height="200px"></div><div class="el"><img class="cat active" src="./assets/img/cushion.png" alt="" width="auto" height="200px"></div><div class="el"><img class="cat" src="./assets/img/gray.png" alt="" width="auto" height="200px"></div></div>',
    },
    {
        title: 'Choose a cat with green eyes!',
        code:
            '<div class="game-container"><div class="el"><img class="cat" src="./assets/img/ginger.png" alt="" width="auto" height="200px"></div><div class="el"><img class="cat" src="./assets/img/cushion.png" alt="" width="auto" height="200px"></div><div class="el"><img class="cat active" src="./assets/img/gray.png" alt="" width="auto" height="200px"></div></div>',
    },
    {
        title: 'Choose a cat on a cushion!',
        code:
            '<div class="game-container"><div class="el out"> <div class="el in"><img class="cat active" src="./assets/img/ginger.png" alt="" width="auto" height="200px"></div> <img class="cat" src="./assets/img/cushion.png" alt="" width="auto" height="200px"></div><div class="el"><img class="cat" src="./assets/img/cushion.png" alt="" width="auto" height="200px"></div><div class="el"><img class="cat" src="./assets/img/gray.png" alt="" width="auto" height="200px"></div></div>',
    },
];
