# Wedding Invite Landing

## Scripts

- `npm i`
- `npm run dev`

## EmailJS для анкеты RSVP

1. Создайте файл `.env.local` на основе `.env.example`.
2. Заполните:
   - `VITE_EMAILJS_SERVICE_ID` (у вас: `service_4dtjz3h`)
   - `VITE_EMAILJS_TEMPLATE_ID` (у вас: `template_79onwfn`)
   - `VITE_EMAILJS_PUBLIC_KEY`
3. Перезапустите dev-сервер.

Готовый шаблон письма:

- `/Users/ignat.yaskevich/Development/igant&leila/docs/emailjs-template.md`

Поля, которые отправляются в EmailJS (`template_params`):

- `full_name` / `fullName`
- `attendance`
- `alcohol_preferences` / `alcoholPreferences`
- `transfer`
- `submitted_at` / `submittedAt`

## Где менять тексты

Все контентные данные вынесены в конфиг:

- `/Users/ignat.yaskevich/Development/igant&leila/src/shared/config/wedding.ts`

Что можно менять:

- `coupleNames`, `heroSubtitle`, `heroNote`
- `eventDate`, `startTime`, `eventFormat`
- `venueName`, `venueAddress`, `mapUrl`, `rsvpUrl`
- `dresscodeText`, `dresscodePalette`
- `schedule`, `wishes`, `faq`, `contacts`
- `photos` (опционально)
- `heroMedia` (опционально: `image` или `video` для главного экрана)
- `backgroundCarousel` (опционально: плавная смена фоновых фото на первом экране)
- `backgrounds` (фоновые изображения страницы и Hero)
- `sections` (id секций для якорей)
- `nav` (тексты и порядок пунктов навигации)
- `labels` (все UI-лейблы и подписи)

Если вы меняете количество пунктов в `schedule`, `wishes`, `faq`, `contacts` — верстка автоматически адаптируется.

Важно: `nav[].id` должен совпадать с `sections` — это обеспечивает корректные якоря.

## Где лежат фоновые изображения

По умолчанию используются SVG-заглушки:

- `/Users/ignat.yaskevich/Development/igant&leila/src/shared/assets/hero-bg.svg`
- `/Users/ignat.yaskevich/Development/igant&leila/src/shared/assets/page-bg.svg`

Можно заменить их на свои фото (jpg/png/webp), либо положить новые файлы и обновить импорты в `/Users/ignat.yaskevich/Development/igant&leila/src/shared/config/wedding.ts`.

## Структура FSD

- `src/app` — инициализация и стили
- `src/pages` — страницы
- `src/widgets` — секции лендинга
- `src/features` — интерактивные функции
- `src/entities` — типы и модель инвайта
- `src/shared` — ui-kit, lib, assets, config
# dayX
