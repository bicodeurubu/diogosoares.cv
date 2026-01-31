# Design System: Diogo Soares Portfolio

## 1. Visual Theme & Atmosphere

### Conceito: "Minimalismo Elegante com Calor Cultural"
Design light mode sofisticado com tipografia expressiva e paleta quente. O visual combina a elegância de fontes serifadas com tons de coral/terracotta que transmitem cultura, humanidade e experiência.

**Atmosfera:** Acolhedor, profissional, cultural, focado em experiência e produto.

| Aspecto | Descrição |
|---------|-----------|
| **Tema** | Light mode (warm cream background) |
| **Tipografia** | Playfair Display (títulos) + Inter (corpo) |
| **Cores** | Coral/Terracotta como acento principal |
| **Cards** | Sombras sutis, bordas quentes |
| **Hero** | Tipografia elegante, layout balanceado |

---

## 2. Color Palette & Roles

### Paleta (Light Mode - Culture-Focused)

| Nome Semântico | Hex Code | Papel Funcional |
|----------------|----------|-----------------|
| **Surface Principal** | `#FDFBF7` | Fundo principal - warm white |
| **Surface Elevada** | `#FFFFFF` | Cards, componentes elevados |
| **Surface Sutil** | `#F5F1EB` | Seções alternadas, headers |
| **Texto Principal** | `#2D2A26` | Títulos, headings |
| **Texto Secundário** | `#5C5650` | Corpo de texto |
| **Texto Muted** | `#8A847D` | Labels, metadados |
| **Acento Coral** | `#E07A5F` | CTAs, links, indicadores |
| **Acento Hover** | `#C96A51` | Estado hover |
| **Borda** | `#E8E2D9` | Bordas e separadores |

---

## 3. Typography Rules

| Elemento | Fonte | Peso | Observação |
|----------|-------|------|------------|
| **Display/Hero** | Playfair Display | 500-600 | Elegante, editorial |
| **Títulos de Seção** | Playfair Display | 500 | Consistência visual |
| **Corpo** | Inter | 400 | Legibilidade máxima |
| **Labels** | Inter | 600 | Uppercase, tracking wide |
| **Mono** | JetBrains Mono | 400 | Datas, códigos |

### Google Fonts Import
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:wght@400;500;600;700&display=swap');
```

---

## 4. Component Stylings

### Botões
| Tipo | Estilo |
|------|--------|
| **Primário** | Texto escuro em fundo claro, rounded-full |
| **Secundário** | Borda quente, hover coral |
| **Acento** | Background coral, texto claro |

### Cards de Projeto
- Background branco (#FFFFFF)
- Borda sutil (#E8E2D9)
- Sombra suave
- Hover: borda coral, sombra expanded

### Profile Photo
- Ring coral (ring-accent/40)
- Sombra glow sutil

---

## 5. Animations & Micro-interactions

- **Scroll Reveal:** Fade suave (fadeIn 0.5s)
- **Hover em Cards:** Sombra e borda expandidas
- **Links:** Underline animado coral
- **Transições:** 300ms ease

---

## 6. Accessibility

- Contraste mínimo 4.5:1 para texto
- Focus states visíveis
- Selection com tom de acento
- `prefers-reduced-motion` respeitado
