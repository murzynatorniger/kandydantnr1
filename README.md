# 🇵🇱 Kampania Wyborcza - Mateusz Talar 2026

Nowoczesna, responsywna strona internetowa kampanii wyborczej fikcyjnego kandydata **Mateusza Talara**. Projekt zawiera pełny system logowania z panelem szefa kampanii.

## 📋 Zawartość Projektu

### Sekcje Główne

1. **Hero Section** - Spektakularna strona główna z hasłem wyborczym i zdjęciem kandydata
2. **O Kandydacie** - Krótka biografia z animowanymi statystykami
3. **Program Wyborczy** - 6 kart programu z ikonami (gospodarka, edukacja, zdrowie, technologia, bezpieczeństwo, środowisko)
4. **Sondaże** - Interaktywny wykres Chart.js pokazujący trend poparcia
5. **Galeria** - Zdjęcia kampanii z efektami hover
6. **Kontakt** - Formularz kontaktowy i informacje
7. **Panel Logowania** - System autentyfikacji z dashboardem

### Panel Szefa Kampanii (Dashboard)

Po zalogowaniu (demo: `admin` / `admin`):
- 📊 Statystyki w tiempo rzeczywistym (poparcie, zwolennicy, darowizny, wydarzenia)
- 📈 Wykresy interaktywne (trend poparcia, rozkład regionalny)
- 👥 Lista kluczowych członków kampanii
- 📅 Log aktywności
- 🎨 Dark mode design

## 🎨 Funkcje Design

### Kolory
- **Granat** (#001a4d) - Kolor główny
- **Czerwony** (#dc3545) - Kolor akcentu
- **Białość** (#ffffff) - Tło

### Animacje CSS
- ✨ Fade-in efekty przy ładowaniu
- 🎯 Hover effects na przyciskach i kartach
- 📱 Smooth scroll między sekcjami
- 🔄 Parallax effect na hero sekcji
- 📊 Animacja liczników w sekcji "O mnie"
- 🎬 Float animation na zdjęciu kandydata

### Responsywność
- ✅ Desktop (pełna szerokość)
- ✅ Tablet (768px - optimized layout)
- ✅ Mobile (480px - compressed layout)
- 📱 Hamburger menu na urządzeniach mobilnych

## 🚀 Technologie

### HTML5
- Semantic markup
- Meta tagi responsywności
- Integracja Font Awesome i Google Fonts

### CSS3
- CSS Grid i Flexbox
- CSS Custom Properties (zmienne)
- Keyframe animations
- Media queries
- Box shadows i transformacje

### JavaScript (Vanilla)
- **Chart.js** - Interaktywne wykresy
- **Intersection Observer API** - Animacje na scroll
- Smooth scroll
- Modal system
- Event handling

### CDN
```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&family=Playfair+Display:wght@700&display=swap">

<!-- Font Awesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

## 📁 Struktura Plików

```
kampania_talara/
├── index.html          # Strona główna
├── styles.css          # Wszystkie style i animacje
├── script.js           # Logika JavaScript
└── README.md           # Ta dokumentacja
```

## 🔐 Dane Logowania (Demo)

```
Nazwa użytkownika: admin
Hasło:             admin
```

## 💻 Jak Uruchomić

### Opcja 1: Otwórz plik lokalnie
1. Pobierz wszystkie pliki do jednego folderu
2. Otwórz `index.html` w przeglądarce
3. Gotowe! 🎉

### Opcja 2: Serwer lokalny (Python)
```bash
cd kampania_talara
python -m http.server 8000
```
Następnie odwiedź: `http://localhost:8000`

### Opcja 3: Serwer lokalny (Node.js)
```bash
npx http-server
```

## 🎯 Funkcjonalności

### Strona Główna
- [x] Sticky navbar z logo i menu
- [x] Hero section z parallax effect
- [x] Smooth scroll między sekcjami
- [x] Responsywny hamburger menu
- [x] Sticky navbar na scroll

### Zawartość
- [x] Animowane sekcje
- [x] Karty programu z ikonami
- [x] Interaktywne wykresy sondażowe
- [x] Galeria ze zdjęciami
- [x] Formularz kontaktowy
- [x] Social media linki

### Panel Logowania
- [x] Modal logowania
- [x] Walidacja danych
- [x] Demo konto (admin/admin)
- [x] Secure przechowywanie (frontend demo)

### Dashboard
- [x] Statystyki kampanii
- [x] Wykresy interaktywne
- [x] Dark mode
- [x] Lista członków
- [x] Log aktywności
- [x] Responsive design

## 🎨 Dostosowywanie

### Zmiana Kolorów
Edytuj zmienne CSS w `styles.css`:
```css
:root {
    --color-primary: #001a4d;      /* Zmień na inny kolor */
    --color-secondary: #dc3545;    /* Zmień akcent */
    --color-accent: #0066cc;       /* Zmień niebieski */
}
```

### Zmiana Tekstu
Edytuj bezpośrednio w `index.html`:
- Hasło wyborcze (hero section)
- Postulaty programu (program section)
- Informacje kontaktowe

### Zmiana Zdjęć
Zastąp linki Unsplash na swoje zdjęcia:
```html
<!-- Zmień to: -->
<img src="https://images.unsplash.com/photo-...?w=400&h=500&fit=crop" alt="Mateusz Talar">

<!-- Na twoje zdjęcie: -->
<img src="path/to/your/image.jpg" alt="Mateusz Talar">
```

## 📊 Wykresy Chart.js

### Główny Wykres Sondażowy
```javascript
{
    type: 'line',
    data: {
        labels: ['Maj', 'Czerwiec', ...],
        datasets: [
            {
                label: 'Mateusz Talar',
                data: [28, 32, 38, ...],
                borderColor: '#001a4d',
                ...
            }
        ]
    }
}
```

### Dostosowanie Danych
Zmień wartości w tablicach `data` dla każdego `dataset`

## 🔍 Optymalizacja SEO

Dodaj metaDescription:
```html
<meta name="description" content="Mateusz Talar - kandydat na Premiera. Nowa przyszłość zaczyna się dziś. Program wyborczy: gospodarka, edukacja, zdrowie, technologia.">
<meta name="keywords" content="mateusz talar, kandydat, wybory, polska">
```

## ♿ Dostępność

- Semantic HTML
- ARIA labels (można dodać)
- Kontrast kolorów powyżej standardu WCAG
- Responsywne rozmiary tekstu

## 🐛 Znane Ograniczenia

- Dane logowania są przechowywane w frontend (demo tylko)
- Zdjęcia pobierane z Unsplash (wymaga internetu)
- Wykresy są mockowane (demo dane)
- Formularz nie wysyła danych na serwer

## 🚀 Możliwe Rozszerzenia

- [ ] Backend z rzeczywistą bazą danych
- [ ] Real-time statystyki
- [ ] Newsletter subscription
- [ ] Social media integration
- [ ] Email notifications
- [ ] Analytics dashboard
- [ ] Multi-language support
- [ ] PWA support
- [ ] Donation system
- [ ] Live chat

## 📝 Licencja

To jest projekt edukacyjny/szablonowy. Używaj swobodnie!

## 👨‍💻 Autor

Stworzono jako nowoczesny szablon kampanii wyborczej 2026.

---

**Wskazówka:** Otwórz konsolę przeglądarki (F12) aby zobaczyć easter egg! 🎉

**Demo Login:** admin / admin

Powodzenia w kampanii! 🚀
