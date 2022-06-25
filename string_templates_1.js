// Template literals (template strings) are literals delimited with backtick (`) characters, allowing for multi-line strings, for string interpolation with embedded expressions, and for special constructs called tagged templates.

let user = 'Chandler';

let greet = `Welcome 'single' "double" ${user} to ES2015
             This is the second line
                Third and so            on.

`;

console.log(greet);
