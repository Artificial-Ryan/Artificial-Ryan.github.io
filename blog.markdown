---
layout: page
title: Blog
permalink: /blog/
---

# My Blog Posts

{% for post in site.posts %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt }}</p>
  <p><small>{{ post.date | date_to_string }}</small></p>
{% endfor %}