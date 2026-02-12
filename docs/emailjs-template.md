# EmailJS Template (RSVP)

Используй этот шаблон при создании `Email Template` в EmailJS.

## Subject

```text
Contact Us: {{title}} | RSVP: {{full_name}} — {{attendance}}
```

## Content (HTML)

```html
<div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #2e2b27;">
  <h2 style="margin: 0 0 16px;">Новая анкета RSVP</h2>

  <p style="margin: 0 0 8px;"><b>Имя и фамилия:</b> {{full_name}}</p>
  <p style="margin: 0 0 8px;"><b>Присутствие:</b> {{attendance}}</p>
  <p style="margin: 0 0 8px;"><b>Алкоголь:</b> {{alcohol_preferences}}</p>
  <p style="margin: 0 0 8px;"><b>Трансфер:</b> {{transfer}}</p>
  <p style="margin: 0 0 8px;"><b>Отправлено:</b> {{submitted_at}}</p>

  <hr style="margin: 20px 0; border: 0; border-top: 1px solid #e7e1da;" />
  <p style="margin: 0; font-size: 12px; color: #7b756e;">
    Отправлено с сайта-приглашения
  </p>
</div>
```

## Template variables

```text
title
full_name
attendance
alcohol_preferences
transfer
submitted_at
```
