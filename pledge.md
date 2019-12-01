---
title: "Pledge | youguys.club | Join the club"
share_button_text: 'I pledge to donate to charity whenever I say "you guys!"'
---
<script type="text/javascript" src="{{ '/assets/js/youguys.js?v=' | append: site.github.build_revision | relative_url }}"></script>
# Add to the tip jar

Add a dollar whenever you accidentally say _you guys_.

<a onclick="add_dollar()" class="btn whitehuge">Add a dollar</a>

## Your tip jar currently contains:

<p id="tipjar">$0</p>

<div id="donate"> <!-- style="display: none;">-->

<a href="./donate" class="btn whitehuge">Empty jar and donate</a>
</div>

This number is saved in your browser. (Sorry, we don't have a database.)

<script type="text/javascript">
initialize_jar();
render_jar();
</script>
