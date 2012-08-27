# Labeled - a jQuery Selection Extension

Select form fields and other interactive elements like &lt;a> by visual descriptors like &lt;label> or placeholder attributes. Labeled is a jQuery content filter and can be used like :labeled('Login') or input:labeled('email-address').

## Examples

### Links

HTML:

	<a>Anchor Text Node</a>

Find a:

	$(':labeled(Anchor Text Node)')
	// or
	$('a:labeled(Anchor Text Node)')

### Buttons

HTML:

	<input type="submit" value="Click me">
	<!-- or -->
	<button>Click me</button>

Find input:

	$(':labeled(Click me)')

### Labeled Form Fields

HTML:

	<label for="id">Text Input Label Text Node</label>
	<input type="text" id="id">

Find input:

	$(':labeled(Text Input Label Text Node)')