---
layout: default
title: Contact Long Haul
---

<div id="contact">
  <h1 class="pageTitle">Contact Me</h1>
  <div class="contactContent">
    <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible.</p>
    <p>If you need code review or consulting services, please note that I charge $100 US per hour with a minimum of 1 hour.</p>
  </div>
  <form action="http://formspree.io/{{ site.social.email }}" method="post" id="contact-form">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" class="full-width"><br>
    <label for="email">Email Address</label>
    <input type="email" id="email" name="_replyto" class="full-width"><br>
    <label for="message">Message</label>
    <textarea name="message" id="message" cols="30" rows="10" class="full-width"></textarea><br>
    <input type="submit" id="form-submit-button" value="Send" class="button">
  </form>
</div>
