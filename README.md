jquery-labeled
==============

Select form fields and other interactive elements like &lt;a> by visual descriptors like &lt;label> or placeholder attributes. Labeled is a jQuery content filter and can be used like :labeled('Login') or input:labeled('email-address').

Examples
--------

Find <a>Anchor Text Node</a>:

	$(':labeled(Anchor Text Node)')
	// or
	$('a:labeled(Anchor Text Node)')

Find <input type="submit" value="Input Value">

	$(':labeled(Input Value)')

Find <input>:

	<label for="id">Text Input Label Text Node</label>
	<input type="text" id="id">

	$(':labeled(Text Input Label Text Node)')