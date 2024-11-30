const fs = require('fs');

test('El archivo HTML debe contener "Hola Mundo"', () => {
    const html = fs.readFileSync('./index.html', 'utf8');
    expect(html).toMatch(/<h1>Hola Mundo<\/h1>/);
});
