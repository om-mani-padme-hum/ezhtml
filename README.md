# EZ HTML v1.2.2

This Node.js module is designed to be a simple API for programatically rendering HTML 5
web pages.  It outputs clean, formatted code, making it easy to troubleshoot errors and verify
the rendered output.  This module will not directly be a time saving 'shorthand' for HTML, but 
rather it provides the library of objects that will allow you to programatically write your own
functionalized web site design logic that will save you loads of time writing your own style of
web sites.  This module was originally developed as the foundation for 
[Strapped](https://github.com/om-mani-padme-hum/strapped) which seeks to provide a short-hand
JavaScript implementation of Bootstrap 4 web design.

* [Installation](#installation)
* [Current Status](#current-status)
* [Basic Example](#basic-example)
* [Included Example.js](#included-examplejs)
* [Example Output](#example-output)
* [Usage](#usage)
* [Method Signatures Common to All Elements](#method-signatures-common-to-all-elements)
* [Method Signatures Common to All Container Elements](#method-signatures-common-to-all-container-elements)
* [Elements](#elements)
* [Contributing](#contributing)
* [License](#license)

## Installation

`npm install --save ezhtml`

## Current Status

Fully functional, and code base now reduced by over 65% due to conversion to 
[EZ Objects](https://github.com/om-mani-padme-hum/ezobjects).  All HTML 5 elements and 
attributes have been implemented except those noted below.  There are no known bugs currently, 
but if found they can be reported by opening an issue against the GitHub repository or by
initiating a pull request with the fix.

**Note:** Screen reader support is not currently within the scope of this library,
but could be added fairly easily if needed.  Same thing with ruby annotations.

## Basic Example

```javascript
const express = require('express');
const ezhtml = require('ezhtml');

/** Create express app */
const app = express();

/** Create express path for root of web server '/' */
app.get('/', (req, res, nex) => {
  /** Create new HTML element */                           
  const html = new ezhtml.HTML();
             
  const body = new ezhtml.Body();
                                 
  html.append(body);
                                 
  body.append(new ezhtml.H2().text('My Example EZHTML Page'));
  body.append(new ezhtml.Paragraph().addClass('my-class').text('This is the first paragraph of my page.'));
                                                               
  res.send(html.render());
});

app.listen(8080);
```

## Included Example.js

```javascript
const ezhtml = require('ezhtml');
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
```

## Example Output

```html
<html>
  <head>
    <title>
      My Example Page
    </title>
    <style>
      p.myClass { font-weight: bold; font-family: Arial, helvetica, sans-serif; }
    </style>
    <script src='https://code.jquery.com/jquery-3.3.1.js'>
    </script>
  </head>
  <body>
    <div style='width: 100%; text-align: center;'>
      <h2 style='color: blue;'>
        My Example Page
      </h2>
    </div>
    <div style='position: relative; width: 50%; left: 25%; text-align: center;'>
      <abbr>
        Abbrev. St.
      </abbr>
      <br>
      <address>
        123 Foo Rd
      </address>
      <br>
      <a href='http://www.google.com' hreflang='en' target='_new'>
        Google Search
      </a>
      <br>
      <article>
        Article
      </article>
      <br>
      <aside>
        Aside
      </aside>
      <br>
      <base href='./'>
      <br>
      <bdi>
        إيان :Bi-directional isolation
      </bdi>
      <br>
      <bdo dir='ltr'>
        Bi-directional override: إيان
      </bdo>
      <br>
      <blockquote>
        Blockquote -- Four score and twenty years ago...
      </blockquote>
      <br>
      <b>
        Bold text
      </b>
      <br>
      <button type='button'>
        Click me
      </button>
      <br>
      <caption>
        Caption text
      </caption>
      <br>
      <cite>
        Citation text
      </cite>
      <br>
      <code>
        Code text
      </code>
      <br>
      <datalist>
        <option value=1>
          Data 1
        </option>
        <option value=2>
          Data 2
        </option>
        <option value=3>
          Data 3
        </option>
      </datalist>
      <br>
      <dl>
        <dt>
          doohickey
        </dt>
        <dd>
          the thing next to the thingamabob
        </dd>
      </dl>
      <br>
      <del cite='v1.0.0' datetime='2018-06-24T17:37:05.713-06:00'>
        Deleted text
      </del>
      <br>
      <details open>
        There are some details...
      </details>
      <br>
      <dialog open>
        This is a dialog box...
      </dialog>
      <br>
      <br>
      <br>
      <br>
      <form>
        <fieldset>
          <legend>
            Some inputs in a group:
          </legend>
          Name:
          <input name='name' placeholder='Enter name' type='text'>
        </fieldset>
      </form>
      <br>
      <figure>
        <img height=100 src='./example.png' width=100>
        <figcaption>
          FigCaption: Computer generated PNG
        </figcaption>
      </figure>
      <br>
      <hr>
      <br>
      <ins cite='v1.0.0' datetime='2018-06-24T17:47:3u.022-06:00'>
        Inserted text
      </ins>
      <br>
      <i>
        Italic text
      </i>
      <br>
      <kbd>
        Keyboard text
      </kbd>
      <br>
      <label>
        Label text
      </label>
      <br>
      <ol>
        <li>
          Ordered List Item One
        </li>
        <li>
          Ordered List Item Two
        </li>
        <li>
          Ordered List Item Three
        </li>
      </ol>
      <br>
      <ul>
        <li>
          Unordered List Item One
        </li>
        <li>
          Unordered List Item Two
        </li>
        <li>
          Unordered List Item Three
        </li>
      </ul>
      <br>
      <main>
        Main text
      </main>
      <br>
      <menu>
        <menuitem>
          Menu Item One
        </menuitem>
        <menuitem>
          Menu Item Two
        </menuitem>
        <menuitem>
          Menu Item Three
        </menuitem>
      </menu>
      <br>
      <meter high=180 low=25 max=250 optimum=85 value=73>
      </meter>
      <br>
      <nav>
        Nav text
        <a href='http://www.nodejs.org'>
          Node JS
        </a>
      </nav>
      <br>
      <noscript>
        NoScript text (only visible if JavaScript is disabled)
      </noscript>
      <br>
      <select name='mySelect'>
        <optgroup label='Primary Options'>
          <option value=1>
            Primary Option 1
          </option>
          <option value=2>
            Primary Option 2
          </option>
          <option value=3>
            Primary Option 3
          </option>
        </optgroup>
        <optgroup label='Secondary Options'>
          <option value=1>
            Secondary Option 1
          </option>
          <option value=2>
            Secondary Option 2
          </option>
          <option value=3>
            Secondary Option 3
          </option>
        </optgroup>
      </select>
      <br>
      <output for='mySelect'>
      <br>
      <p class='myClass'>
        This is my example paragraph in bold Arial font.
      </p>
      <picture>
        <img height=100 src='./example.png' width=100>
      </picture>
      <br>
      <pre>Label text</pre>
      <br>
      <progress max=100 value=79>
      </progress>
      <br>
      <q>
        Quoted text
      </q>
      <br>
      <script>
      $( document ).ready(() => {
        alert(`This alert is part of a script created using a server side JavaScript function, it requires jQuery though!`);
      });
      </script>
      <section>
        Section text
      </section>
      <br>
      <small>
        Small text
      </small>
      <br>
      <span>
        A span containing some text
      </span>
      <br>
      <s>
        Strikethrough text
      </s>
      <br>
      <strong>
        Strong text
      </strong>
      <br>
      <sub>
        Subscript text
      </sub>
      <br>
      <summary>
        Summary text
      </summary>
      <br>
      <sup>
        Superscript text
      </sup>
      <br>
      <table>
        <thead>
          <tr>
            <th>
              Header 1
            </th>
            <th>
              Header 2
            </th>
            <th>
              Header 3
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Row 1 Col 1 Data
            </td>
            <td>
              Row 1 Col 2 Data
            </td>
            <td>
              Row 1 Col 3 Data
            </td>
          </tr>
          <tr>
            <td>
              Row 2 Col 1 Data
            </td>
            <td>
              Row 2 Col 2 Data
            </td>
            <td>
              Row 2 Col 3 Data
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              Footer 1
            </td>
            <td>
              Footer 2
            </td>
            <td>
              Footer 3
            </td>
          </tr>
        </tfoot>
      </table>
      <br>
      <template>
        <h2>
          My Template
        </h2>
      </template>
      <br>
      <textarea name='myTextArea'>Text area input</textarea>
      <br>
      <time datetime='2018-06-24T17:47:3u.022-06:00'>
      </time>
      <br>
      <u>
        Underline text
      </u>
      <br>
      <var>
        Variable text
      </var>
      <br>
      This is some text and it will have a word break opportunity in the middle
      <wbr>
        of
      </wbr>
      it, though who knows how it will come out on your browser.
      <br>
    </div>
  </body>
</html>
```

## Usage

Each HTML 5 element is represented by an ES6 class and is accessible as a property of this
module.  Each class has getter/setter methods corresponding to the various attributes
defined for the element in the HTML 5 standard.  In addition, custom attributes can be
set and retrieved using the `attr(name)` getter and `attr(name, value)` setter.  Elements 
that are 'containers', i.e. they have an open and close tag, also have append() and prepend() 
methods you can use to add other child elements.  Every element has addClass() and
removeClass() methods which make the controlling of CSS and DOM selection easy.  A full list
of elements and their HTML 5 properties is shown below:

## Method Signatures Common to All Elements

### Element.addClass(list)

* **Parameter:** list - `string`
* **Description:** Add the class, or space delimeted list of classes, in `list` to the element.

### Element.attr(name)

* **Parameter:** name - `string`
* **Description:** Get the value of the attribute named `name`.

### Element.attr(name, value)

* **Parameter:** name - `string`
* **Parameter:** value - `string`|`number`|`boolean`
* **Description:** Set the the attribute named `name` to `value`.

### Element.removeClass(class)

* **Description:** class - `string`
* **Description:** Remove any class named `class` from the element.

### Element.parent()

* **Description:** Get the parent element of this element (or `null` if none exists).

### Element.render(\[indent])

* **Parameter:** indent - `number` - (optional) Defaults to zero
* **Description:** Get the rendered HTML of this element and all of its children, prepending
all lines with optional `indent` number of spaces.

### Element.tag()

* **Description:** Get the HTML tag of this element.

## Method Signatures Common to All Container Elements 

This includes all elements that have closing tags, e.g. `</element>`.

### ContainerElement.append(element)

* **Parameter:** element - `mixed` Any valid EZ HTML element
* **Description:** Append `element` to the end of this element's array of children.

### ContainerElement.prepend(element)

* **Parameter:** element - `mixed` Any valid EZ HTML element
* **Description:** Prepend `element` to the beginning of this element's array of children.

### ContainerElement.text(content)

* **Parameter:** content - `string`
* **Description:** A shortcut method for appending plain text `content` to the end of this element's 
children array.  This is a shortcut for append(new ezhtml.Text().text(content)).

## Elements

Below are the element classes included in the library along with each of their attributes that will 
each have a getter of the form property(), and a setter of the form property(value).

### new ezhtml.Abbreviation()
* None

### new ezhtml.Address()
* None

### new ezhtml.Anchor()
* **download** - `string`
* **href** - `string`
* **hreflang** - `string`
* **media** - `string`
* **rel** - `string`
* **target** - `string`
* **type** - `string`

### new ezhtml.Area()
* **alt** - `string`
* **coords** - `string`
* **download** - `string`
* **href** - `string`
* **hreflang** - `string`
* **media** - `string`
* **shape** - `string`
* **target** - `string`
* **type** - `string`

### new ezhtml.Article()
* None

### new ezhtml.Aside()
* None

### new ezhtml.Audio()
* **autoplay** - `boolean`
* **controls** - `boolean`
* **loop** - `boolean`
* **muted** - `boolean`
* **preload** - `string`
* **src** `string`

### new ezhtml.Base()
* **href** - `string`
* **target** - `string`

### new ezhtml.BidirectionalIsolation()
* None

### new ezhtml.BidirectionalOverride()
* **dir** - `string` - Can be `ltr` or `rtl`

### new ezhtml.Blockquote()
* None

### new ezhtml.Body()
* None

### new ezhtml.Bold()
* None

### new ezhtml.Button()
* **autofocus** - `boolean`
* **disabled** - `boolean`
* **form** - `string`
* **formaction** - `string`
* **formenctype** - `string`
* **formmethod** - `string`
* **formnovalidate** - `boolean`
* **formtarget** - `string`
* **name** - `string`
* **type** - `string`
* **value** - `string`

### new ezhtml.Canvas()
* **height** - `number`
* **width** - `number`

### new ezhtml.Caption()
* None

### new ezhtml.Citation()
* None

### new ezhtml.Code()
* None

### new ezhtml.ColumnGroup()
* **span** - `number`

### new ezhtml.Column()
* **span** - `number`

### new ezhtml.DataList()
* None

### new ezhtml.DefinitionDescription()
* None

### new ezhtml.DefinitionList()
* None

### new ezhtml.DefinitionTerm()
* None

### new ezhtml.Definition()
* None

### new ezhtml.Deleted()
* **cite** - `string`
* **datetime** - `string`

### new ezhtml.Details()
* **open** - `boolean`

### new ezhtml.Dialog()
* **open** - `boolean`

### new ezhtml.Div()
* None

### new ezhtml.Embed()
* **height** - `number`
* **src** - `string`
* **type** - `string`
* **width** - `number`

### new ezhtml.Emphasized()
* None

### new ezhtml.FieldSet()
* **disabled** - `boolean`
* **form** - `string`
* **name** - `string`

### new ezhtml.FigureCaption()
* None

### new ezhtml.Figure()
* None

### new ezhtml.Footer()
* None

### new ezhtml.Form()
* **acceptCharset** - `string`
* **action** - `string`
* **autocomplete** - `string`
* **enctype** - `string`
* **method** - `string`
* **name** - `string`
* **novalidate** - `boolean`
* **target** - `string`

### new ezhtml.Head()
* None

### new ezhtml.Header()
* None

### new ezhtml.HeadingGroup()
* None

### new ezhtml.H1()
* None

### new ezhtml.H2()
* None

### new ezhtml.H3()
* None

### new ezhtml.H4()
* None

### new ezhtml.H5()
* None

### new ezhtml.H6()
* None

### new ezhtml.HorizontalRule()
* None

### new ezhtml.HTML()
* None

### new ezhtml.Image()
* **alt** - `string`
* **crossorigin** - `string`
* **height** - `number`
* **ismap** - `boolean`
* **longdesc** - `string`
* **sizes** - `string`
* **src** - `string`
* **srcset** - `string`
* **usemap** - `string`
* **width** - `number`

### new ezhtml.Input()
* **accept** - `string`
* **alt** - `string`
* **autocomplete** - `string`
* **autofocus** - `boolean`
* **checked** - `boolean`
* **dirname** - `string`
* **disabled** - `boolean`
* **form** - `string`
* **formaction** - `string`
* **formenctype** - `string`
* **formmethod** - `string`
* **formnovalidate** - `boolean`
* **formtarget** - `string`
* **height** - `string`
* **list** - `string`
* **max** - `string`
* **maxlength** - `string`
* **min** - `string`
* **multiple** - `boolean`
* **name** - `string`
* **pattern** - `string`
* **placeholder** - `string`
* **readonly** - `boolean`
* **required** - `boolean`
* **size** - `number`
* **src** - `string`
* **step** - `string`
* **type** - `string` - Defaults to `text`
* **value** - `string`
* **width** - `string`

### new ezhtml.Inserted()
* **cite** - `string`
* **datetime** - `string`
    
### new ezhtml.Italic()
* None

### new ezhtml.Keyboard()
* None

### new ezhtml.Label()
* **for** - `string`
* **form** - `string`
    
### new ezhtml.Legend()
* None

### new ezhtml.LineBreak()
* None

### new ezhtml.Link()
* **crossorigin** - `string`
* **href** - `string`
* **hreflang** - `string`
* **media** - `string`
* **rel** - `string`
* **sizes** - `string`
* **type** - `string`
    
### new ezhtml.ListItem()
* **value** - `number`
    
### new ezhtml.Main()
* None

### new ezhtml.Map()
* **name** - `string`
    
### new ezhtml.Mark()
* None
    
### new ezhtml.MenuItem()
* **checked** - `boolean`
* **command** - `string`
* **default** - `boolean`
* **disabled** - `boolean`
* **icon** - `string`
* **label** - `string`
* **radiogroup** - `string`
* **type** - `string`
    
### new ezhtml.Menu()
* **label** - `string`
* **type** - `string`
    
### new ezhtml.Meta()
* **charset** - `string`
* **content** - `string`
* **http-equiv** - `string`
* **name** - `string`
    
### new ezhtml.Meter()
* **form** - `string`
* **high** - `number`
* **low** - `number`
* **max** - `number`
* **min** - `number`
* **optimum** - `number`
* **value** - `number`
    
### new ezhtml.MultimediaObject()
* **data** - `string`
* **form** - `string`
* **height** - `number`
* **name** - `string`
* **type** - `string`
* **usemap** - `boolean`
* **width** - `number`
    
### new ezhtml.Nav()
* None

### new ezhtml.NoScript()
* None

### new ezhtml.OptionGroup()
* **disabled** - `boolean`
* **label** - `string`
    
### new ezhtml.Option()
* **disabled** - `boolean`
* **label** - `string`
* **selected** - `boolean`
* **value** - `string`
    
### new ezhtml.OrderedList()
* **start** - `number`
* **reversed** - `boolean`
* **type** - `string`
    
### new ezhtml.Output()
* **for** - `string`
* **form** - `string`
* **name** - `string`
    
### new ezhtml.Paragraph()
* None

### new ezhtml.Param()
* **name** - `string`
* **value** - `string`
    
### new ezhtml.Picture()
* None

### new ezhtml.PreformattedText()
* None

### new ezhtml.Progress()
* **max** - `number`
* **value** - `number`
    
### new ezhtml.Quotation()
* **cite** - `string`
    
### new ezhtml.Sample()
* None

### new ezhtml.Script()
* **async** - `boolean`
* **charset** - `string`
* **defer** - `boolean`
* **src** - `string`
* **type** - `string`
    
### new ezhtml.Section()
* None

### new ezhtml.Select()
* **autofocus** - `boolean`
* **disabled** - `boolean`
* **form** - `string`
* **multiple** - `boolean`
* **name** - `string`
* **required** - `boolean`
* **size** - `string`
    
### new ezhtml.Small()
* None

### new ezhtml.Source()
* **media** - `string`
* **sizes** - `string`
* **src** - `string`
* **srcset** - `string`
* **type** - `string`

### new ezhtml.Span()
* None

### new ezhtml.Strikethrough()
* None

### new ezhtml.Strong()
* None

### new ezhtml.Style()
* **media** - `string`
* **scoped** - `boolean`
* **type** - `string`
    
### new ezhtml.Subscript()
* None

### new ezhtml.Summary()
* None

### new ezhtml.Superscript()
* None

### new ezhtml.SVG()
* **height** - `number`
* **width** - `number`
    
### new ezhtml.TableBody()
* None

### new ezhtml.TableData()
* **colspan** - `number`
* **headers** - `string`
* **rowspan** - `number`

### new ezhtml.TableFooter()
* None

### new ezhtml.TableHead()
* None

### new ezhtml.TableHeader()
* **abbr** - `string`
* **colspan** - `number`
* **headers** - `string`
* **rowspan** - `number`
* **scope** - `string`
* **sorted** - `string`

### new ezhtml.TableRow()
* None

### new ezhtml.Table()
* None

### new ezhtml.Template()
* None

### new ezhtml.TextArea()
* **autofocus** - `boolean`
* **cols** - `number`
* **dirname** - `string`
* **disabled** - `boolean`
* **form** - `string`
* **maxlength** - `number`
* **name** - `string`
* **placeholder** - `string`
* **readonly** - `boolean`
* **required** - `boolean`
* **rows** - `number`
* **wrap** - `string`
    
### new ezhtml.Text()
* **text** - `string`

### new ezhtml.Time()
* **datetime** - `string`
    
### new ezhtml.Title()
* None

### new ezhtml.Track()
* **default** - `boolean`
* **kind** - `string`
* **sizes** - `string`
* **src** - `string`
* **srclang** - `string`
    
### new ezhtml.Underline()
* None

### new ezhtml.UnorderedList()
* None

### new ezhtml.Variable()
* None

### new ezhtml.Video()
* **autoplay** - `boolean`
* **controls** - `boolean`
* **height** - `number`
* **loop** - `boolean`
* **muted** - `boolean`
* **poster** - `string`
* **preload** - `string`
* **src** - `string`
* **width** - `number`
    
### new ezhtml.WordBreakOpportunity()
* None

## Contributing

Please open an issue on the GitHub repository if you find any broken functionality or other bugs/errors.  Feature requests
will also be accepted, but are not guaranteed to be implemented.

## License

MIT
