<div id="footer">
<table class="footer1" width="100%">
<tr>
<td>&copy; Vanavani Vidyalaya Matriculation School, Salem, 2013-2014</td>
</tr>
</table> 
</div>
<script>
	Event.observe(document, 'click', respondToClick);
  
	// Callback function to handle the event.
	function respondToClick(event) {
	  var element = event.element();
	  var tagName = element.tagName;
	  var name = element.readAttribute("src");
	  if (tagName == 'IMG') {
	    name = name.replace("_medium.jpg", "");
	    name = name.replace("_medium.JPG", "");	    
	  	window.location.href = "photo_detail.php?filename=" + name;
	  }
	}
</script>
