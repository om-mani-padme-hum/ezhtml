const ezhtml = require('./index');
const fs = require('fs');

const html = new ezhtml.HTML();
const head = new ezhtml.Head();

html.append(head);
head.append(new ezhtml.Title().text('My Example Page'));
head.append(new ezhtml.Style().text('p.myClass { font-weight: bold; font-family: Arial, helvetica, sans-serif; }'));
            
const body = new ezhtml.Body();

html.append(body);

const div1 = new ezhtml.Div().style('width: 100%; text-align: center;');

body.append(div1);

const h2 = new ezhtml.H2({
  style: 'color: blue;'
});

div1.append(h2.text('My Example Page'));

const div2 = new ezhtml.Div().style('position: relative; width: 50%; left: 25%; text-align: center;');

body.append(div2);

div2.append(new ezhtml.Abbreviation().text('Abbrev. St.'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Address().text('123 Foo Rd'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Anchor().href('http://www.google.com').text('Google Search'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Article().text('Article'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Aside().text('Aside'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Base().href('http://www.google.com'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.BidirectionalIsolation().text('إيان :Bi-directional isolation'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.BidirectionalOverride().dir('ltr').text('Bi-directional override: إيان'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Blockquote().text('Blockquote -- Four score and twenty years ago...'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Bold().text('Bold text'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Button().type('button').text('Click me'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Caption().text('Caption text'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Citation().text('Citation text'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Code().text('Code text'));
div2.append(new ezhtml.LineBreak());

const datalist = new ezhtml.DataList();

datalist.append(new ezhtml.Option().value('1').text('Data 1'));
datalist.append(new ezhtml.Option().value('2').text('Data 2'));
datalist.append(new ezhtml.Option().value('3').text('Data 3'));

div2.append(datalist);
div2.append(new ezhtml.LineBreak());

const definitionList = new ezhtml.DefinitionList();

definitionList.append(new ezhtml.DefinitionTerm().text('doohickey'));
definitionList.append(new ezhtml.DefinitionDescription().text('the thing next to the thingamabob'));

div2.append(definitionList);
div2.append(new ezhtml.LineBreak());

div2.append(new ezhtml.Paragraph().addClass('myClass').text('This is my example paragraph in bold Arial font.'));

fs.writeFileSync('example.html', html.render());
