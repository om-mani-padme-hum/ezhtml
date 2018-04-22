# EZHTML v0.2.3

This Node.js module is designed to be a simple API for programatically rendering HTML 5
web pages.  Outputs clean, formatted code, making it easy to troubleshoot errors.

## Current Status

Fully functional.  All HTML 5 elements and attributes have been implemented except 
those noted below.  Many elements have been tested, but others haven't.  No known bugs
currently, but bugs can be reported by opening an issue against the repository or 
initiating a pull request with the fix.

**Note:** Screen reader support is not currently within the scope of this library,
but could be added fairly easily if needed.  Same thing with ruby annotations.

## Usage Example

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
                                 
  body.append(new ezhtml.Heading().rank(2).text('My Example EZHTML Page'));
  body.append(new ezhtml.Paragraph().addClass('my-class').text('This is the first paragraph of my page.));
                                                               
  res.send(html.render());
});

app.listen(8080);
```

## Todo

* Add remaining global attributes to element per HTML 5 standard
