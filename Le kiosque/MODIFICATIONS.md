# 📝 Guide des Modifications Courantes

Ce document explique comment effectuer les modifications les plus courantes sur le site.

## 🎨 Modifier les Couleurs

Les couleurs se trouvent au début du CSS (lignes 50-55) :

```css
:root {
    --primary-red: #E63946;      /* Rouge principal */
    --primary-yellow: #FFD60A;   /* Jaune principal */
    --dark: #1a1a1a;             /* Texte noir */
    --light: #f8f9fa;            /* Fond clair */
    --accent-orange: #FF8500;    /* Orange accent */
}
```

**Pour changer une couleur :**
1. Trouvez la ligne correspondante
2. Remplacez le code couleur (ex: `#E63946` par `#FF0000` pour un rouge vif)
3. Sauvegardez et rafraîchissez la page

## 💰 Modifier les Prix

### Prix des Menus (Section Menus Promotionnels)

Cherchez la section avec `class="menu-price"` :

```html
<div class="menu-price">5€</div>
```

Changez simplement le chiffre entre les balises.

### Prix des Pizzas

Cherchez les lignes avec `class="product-price"` :

```html
<div class="product-price">9€</div>
```

## 📞 Modifier les Informations de Contact

### Adresse
Cherchez (ligne ~440) :
```html
<p>Le Kiosque<br>Chelles 77500<br>Seine-et-Marne</p>
```

### Téléphone
Cherchez (ligne ~450) :
```html
<p><a href="tel:+33XXXXXXXXX">01 XX XX XX XX</a></p>
```
Remplacez les X par votre numéro réel.

### Horaires
Cherchez (ligne ~460) :
```html
<p>Lundi - Dimanche<br>11h00 - 14h30<br>18h00 - 22h30</p>
```

## 🍕 Ajouter ou Retirer une Pizza

### Ajouter une pizza :

Copiez ce bloc et modifiez le contenu :
```html
<div class="pizza-item">
    <div class="pizza-name">NOM DE LA PIZZA</div>
    <div class="pizza-description">Description des ingrédients</div>
    <div class="product-price">XX€</div>
</div>
```

### Retirer une pizza :

Supprimez tout le bloc `<div class="pizza-item">...</div>` correspondant.

## 🥗 Modifier les Salades

Même principe que les pizzas, cherchez la section `id="salades"` et modifiez les blocs d'items.

## 📸 Ajouter des Images

### Ajouter une image de fond au Hero :

Dans la section `.hero` du CSS, ajoutez :
```css
.hero {
    background-image: url('images/votre-image.jpg');
    background-size: cover;
    background-position: center;
}
```

### Ajouter des images de pizzas :

1. Créez un dossier `images/` dans votre repository
2. Uploadez vos images
3. Dans chaque pizza-item, ajoutez :
```html
<div class="pizza-item">
    <img src="images/margherita.jpg" alt="Pizza Margherita" style="width:100%; border-radius:10px; margin-bottom:10px;">
    <div class="pizza-name">MARGHERITA</div>
    ...
</div>
```

## 🔍 Modifier les Mots-clés SEO

Dans le `<head>` du HTML, cherchez :
```html
<meta name="keywords" content="pizzeria Chelles, pizza Chelles...">
```

Ajoutez vos propres mots-clés séparés par des virgules.

## 📱 Ajouter un Bouton WhatsApp

Après la section contact, ajoutez :
```html
<a href="https://wa.me/33XXXXXXXXX" 
   style="position:fixed; bottom:20px; right:20px; background:#25D366; 
          color:white; padding:15px 20px; border-radius:50px; 
          text-decoration:none; font-weight:bold; box-shadow:0 5px 15px rgba(0,0,0,0.3);">
    📱 WhatsApp
</a>
```

Remplacez `33XXXXXXXXX` par votre numéro (format international, sans le +).

## 🎯 Ajouter Google Analytics

Avant la balise `</head>`, ajoutez :
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Remplacez `G-XXXXXXXXXX` par votre ID Google Analytics.

## 🗺️ Ajouter Google Maps

Dans la section contact, ajoutez :
```html
<div style="margin-top: 40px;">
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..." 
        width="100%" 
        height="400" 
        style="border:0; border-radius:15px;" 
        allowfullscreen="" 
        loading="lazy">
    </iframe>
</div>
```

Pour obtenir le code iframe :
1. Allez sur Google Maps
2. Recherchez votre adresse
3. Cliquez sur "Partager" > "Intégrer une carte"
4. Copiez le code iframe

## 🎨 Changer la Police de Caractères

Dans le CSS, cherchez :
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

Remplacez par une police Google Fonts :

1. Ajoutez dans le `<head>` :
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

2. Dans le CSS, changez :
```css
font-family: 'Poppins', sans-serif;
```

## 🔄 Modifications Fréquentes - Checklist

- [ ] Prix mis à jour
- [ ] Téléphone correct
- [ ] Adresse complète
- [ ] Horaires à jour
- [ ] Menu à jour (nouvelles pizzas, salades, etc.)
- [ ] Images ajoutées
- [ ] Liens sociaux actifs
- [ ] Testez sur mobile !

## 💡 Conseils

1. **Testez toujours** vos modifications localement avant de les mettre en ligne
2. **Sauvegardez** une copie de l'original avant de modifier
3. **Utilisez Ctrl+F** pour trouver rapidement ce que vous cherchez
4. **Demandez de l'aide** si vous n'êtes pas sûr d'une modification

---

**Besoin d'aide ?** Contactez votre développeur web ou consultez la documentation HTML/CSS en ligne.
