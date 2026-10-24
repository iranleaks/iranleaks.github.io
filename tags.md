---
layout: default
title: برچسب‌ها
permalink: /tags/
description: فهرست برچسب‌های وبلاگ ایران‌لیکس
---

<section class="archive-page">
  <header class="archive-header">
    <p class="archive-label">آرشیو</p>
    <h1>برچسب‌ها</h1>
    <p>نوشته‌ها را بر اساس برچسب مرور کنید.</p>
  </header>

  <div class="taxonomy-list">
    {% assign sorted_tags = site.tags | sort %}

    {% for tag in sorted_tags %}
      <a class="taxonomy-card"
         href="{{ '/tags/' | append: tag[0] | slugify | append: '/' | relative_url }}">
        <span>#{{ tag[0] }}</span>
        <small>{{ tag[1].size }} نوشته</small>
      </a>
    {% else %}
      <p>هنوز برچسبی ساخته نشده است.</p>
    {% endfor %}
  </div>
</section>
