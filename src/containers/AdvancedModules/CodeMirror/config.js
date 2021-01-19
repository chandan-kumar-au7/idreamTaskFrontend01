const switchOptions = [
  {
    id: 'lineNumbers',
    title: 'Line Numbers',
    trueValue: true,
    falseValue: false,
    value: true,
  },
  {
    id: 'readOnly',
    title: 'Read Only',
    trueValue: false,
    falseValue: true,
    value: true,
  },
];
const selectOptions = [
  {
    id: 'tabSize',
    title: 'Tab Size',
    options: ['2', '4', '6', '8'],
    value: 2,
  },
  {
    id: 'mode',
    title: 'Language',
    options: ['javascript', 'xml', 'markdown', 'php', 'python', 'ruby'],
    value: 'javascript',
  },
  {
    id: 'theme',
    title: 'Select themes',
    options: [
      'default',
      'zenburn',
      'solarized',
      'rubyblue',
      'paraiso-dark',
      'midnight',
      'material',
      'hopscotch',
      'twilight',
    ],
    value: 'zenburn',
  },
];

const defaultValues = {
  basic: `const component = {
    name: 'Mateadmin',
    author: 'RedQ Team',
    website: 'https://mate.redq.io/'
};`,
  javascript: `const component = {
    name: 'Mateadmin',
    author: 'RedQ Team',
    website: 'https://mate.redq.io/'
};`,
  markdown: `# Mateadmin
###This is a RedQ Team production
[have a look](https://mate.redq.io/)
  `,
  xml: `<mate>
    <to>Tove</to>
    <name>Mateadmin</name>
    <author>RedQ Team</author>
    <website>mate.redq.io</website>
</mate>`,
  php: `<html>
 <head>
  <title> v</title>
 </head>
 <body>
 <h1>https://mate.redq.io/</h1>
 <p>This is a RedQ Team production</p>
 <a href="https://mate.redq.io/">visit ou site</a>
 </body>
</html>
`,
  python: `
print("Mateadmin")
print("This is a RedQ Team production")
print("visit us https://mate.redq.io ")
`,
  ruby: `rint "Mateadmin"
print "This is a RedQ Team production"
print "visit us https://mate.redq.io "
`,
};

export { switchOptions, selectOptions, defaultValues };
