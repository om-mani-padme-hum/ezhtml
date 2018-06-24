const ezhtml = require('./index');
const fs = require('fs');

const html = new ezhtml.HTML();
const head = new ezhtml.Head();

html.append(head);
head.append(new ezhtml.Title().text('My Example Page'));
head.append(new ezhtml.Style().text('p.myClass { font-weight: bold; font-family: Arial, helvetica, sans-serif; }'));
head.append(new ezhtml.Script().src('https://code.jquery.com/jquery-3.3.1.js'));
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
div2.append(new ezhtml.Anchor().hreflang('en').target('_new').href('http://www.google.com').text('Google Search'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Article().text('Article'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Aside().text('Aside'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Base().href('./'));
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

datalist.append(new ezhtml.Option().value(1).text('Data 1'));
datalist.append(new ezhtml.Option().value(2).text('Data 2'));
datalist.append(new ezhtml.Option().value(3).text('Data 3'));

div2.append(datalist);
div2.append(new ezhtml.LineBreak());

const definitionList = new ezhtml.DefinitionList();

definitionList.append(new ezhtml.DefinitionTerm().text('doohickey'));
definitionList.append(new ezhtml.DefinitionDescription().text('the thing next to the thingamabob'));

div2.append(definitionList);
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Deleted().cite('v1.0.0').datetime('2018-06-24T17:37:05.713-06:00').text('Deleted text'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Details().open(true).text('There are some details...'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Dialog().open(true).text('This is a dialog box...'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.LineBreak());

const form = new ezhtml.Form();

div2.append(form);

const fieldset = new ezhtml.FieldSet();

form.append(fieldset);

fieldset.append(new ezhtml.Legend().text('Some inputs in a group:'));
fieldset.append(new ezhtml.Text().text('Name:'));
fieldset.append(new ezhtml.Input().type('text').name('name').placeholder('Enter name'));
div2.append(new ezhtml.LineBreak());

const figure = new ezhtml.Figure();

div2.append(figure);
figure.append(new ezhtml.Image().width(100).height(100).src('./example.png'));
figure.append(new ezhtml.FigureCaption().text('FigCaption: Computer generated PNG'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.HorizontalRule());
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Inserted().cite('v1.0.0').datetime('2018-06-24T17:47:3u.022-06:00').text('Inserted text'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Italic().text('Italic text'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Keyboard().text('Keyboard text'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Label().text('Label text'));
div2.append(new ezhtml.LineBreak());

const orderedList = new ezhtml.OrderedList();

div2.append(orderedList);

orderedList.append(new ezhtml.ListItem().text('Ordered List Item One'));
orderedList.append(new ezhtml.ListItem().text('Ordered List Item Two'));
orderedList.append(new ezhtml.ListItem().text('Ordered List Item Three'));

div2.append(new ezhtml.LineBreak());

const unorderedList = new ezhtml.UnorderedList();

div2.append(unorderedList);

unorderedList.append(new ezhtml.ListItem().text('Unordered List Item One'));
unorderedList.append(new ezhtml.ListItem().text('Unordered List Item Two'));
unorderedList.append(new ezhtml.ListItem().text('Unordered List Item Three'));

div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Main().text('Main text'));
div2.append(new ezhtml.LineBreak());

const menu = new ezhtml.Menu();

div2.append(menu);

menu.append(new ezhtml.MenuItem().text('Menu Item One'));
menu.append(new ezhtml.MenuItem().text('Menu Item Two'));
menu.append(new ezhtml.MenuItem().text('Menu Item Three'));

div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Meter().min(0).max(250).low(25).high(180).optimum(85).value(73));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Nav().text('Nav text').append(new ezhtml.Anchor().href('http://www.nodejs.org').text('Node JS')));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.NoScript().text('NoScript text (only visible if JavaScript is disabled)'));
div2.append(new ezhtml.LineBreak());

const select = new ezhtml.Select().name('mySelect');

div2.append(select);

const optionGroup1 = new ezhtml.OptionGroup().label('Primary Options');

select.append(optionGroup1);

optionGroup1.append(new ezhtml.Option().value(1).text('Primary Option 1'));
optionGroup1.append(new ezhtml.Option().value(2).text('Primary Option 2'));
optionGroup1.append(new ezhtml.Option().value(3).text('Primary Option 3'));

const optionGroup2 = new ezhtml.OptionGroup().label('Secondary Options');

select.append(optionGroup2);

optionGroup2.append(new ezhtml.Option().value(1).text('Secondary Option 1'));
optionGroup2.append(new ezhtml.Option().value(2).text('Secondary Option 2'));
optionGroup2.append(new ezhtml.Option().value(3).text('Secondary Option 3'));

div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Output().for('mySelect'));
div2.append(new ezhtml.LineBreak());

div2.append(new ezhtml.Paragraph().addClass('myClass').text('This is my example paragraph in bold Arial font.'));

const picture = new ezhtml.Picture();

div2.append(picture);
picture.append(new ezhtml.Image().width(100).height(100).src('./example.png'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.PreformattedText().text('Label text'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Progress().max(100).value(79));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Quotation().text('Quoted text'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Script().append(() => {
  alert(`This alert is part of a script created using a server side JavaScript function, it requires jQuery though!`);
}));
div2.append(new ezhtml.Section().text('Section text'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Small().text('Small text'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Span().text('A span containing some text'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Strikethrough().text('Strikethrough text'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Strong().text('Strong text'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Subscript().text('Subscript text'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Summary().text('Summary text'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Superscript().text('Superscript text'));
div2.append(new ezhtml.LineBreak());

const table = new ezhtml.Table();

div2.append(table);

const tableHead = new ezhtml.TableHead();

table.append(tableHead);

const tableHeadRow = new ezhtml.TableRow();

tableHead.append(tableHeadRow);

tableHeadRow.append(new ezhtml.TableHeader().text('Header 1'));
tableHeadRow.append(new ezhtml.TableHeader().text('Header 2'));
tableHeadRow.append(new ezhtml.TableHeader().text('Header 3'));

const tableBody = new ezhtml.TableBody();

table.append(tableBody);

const tableBodyRow1 = new ezhtml.TableRow();

tableBody.append(tableBodyRow1);

tableBodyRow1.append(new ezhtml.TableData().text('Row 1 Col 1 Data'));
tableBodyRow1.append(new ezhtml.TableData().text('Row 1 Col 2 Data'));
tableBodyRow1.append(new ezhtml.TableData().text('Row 1 Col 3 Data'));

const tableBodyRow2 = new ezhtml.TableRow();

tableBody.append(tableBodyRow2);

tableBodyRow2.append(new ezhtml.TableData().text('Row 2 Col 1 Data'));
tableBodyRow2.append(new ezhtml.TableData().text('Row 2 Col 2 Data'));
tableBodyRow2.append(new ezhtml.TableData().text('Row 2 Col 3 Data'));

const tableFooter = new ezhtml.TableFooter();

table.append(tableFooter);

const tableFooterRow = new ezhtml.TableRow();

tableFooter.append(tableFooterRow);

tableFooterRow.append(new ezhtml.TableData().text('Footer 1'));
tableFooterRow.append(new ezhtml.TableData().text('Footer 2'));
tableFooterRow.append(new ezhtml.TableData().text('Footer 3'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Template().append(new ezhtml.H2().text('My Template')));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.TextArea().name('myTextArea').text('Text area input'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Time().datetime('2018-06-24T17:47:3u.022-06:00'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Underline().text('Underline text'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Variable().text('Variable text'));
div2.append(new ezhtml.LineBreak());
div2.append(new ezhtml.Text().text('This is some text and it will have a word break opportunity in the middle'));
div2.append(new ezhtml.WordBreakOpportunity().text('of'));
div2.append(new ezhtml.Text().text('it, though who knows how it will come out on your browser.'));
div2.append(new ezhtml.LineBreak());

fs.writeFileSync('example.html', html.render());
