<div>Canvas Appcode goes here</div>

<form id="canvas-app-form" method="POST">
    <input type="hidden" name="action" id="action" value="save" />
  	<input type="hidden" name="signed_request" id="signed_request" value="<?php echo $canvas->get_signed_request(); ?>"/>


  </form>
