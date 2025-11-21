# 🚀 Guide : Mettre votre site sur GitHub

## Étape 1 : Créer un compte GitHub

1. Allez sur [github.com](https://github.com)
2. Cliquez sur "Sign up" (S'inscrire)
3. Créez votre compte avec un email et mot de passe

## Étape 2 : Créer un nouveau repository

1. Une fois connecté, cliquez sur le bouton **"+"** en haut à droite
2. Sélectionnez **"New repository"**
3. Remplissez les informations :
   - **Repository name** : `le-kiosque-chelles` (ou le nom de votre choix)
   - **Description** : "Site vitrine pour la pizzeria Le Kiosque à Chelles"
   - Sélectionnez **Public** (pour que le site soit accessible)
   - ✅ Cochez **"Add a README file"** (décochez si vous uploadez le README fourni)
4. Cliquez sur **"Create repository"**

## Étape 3 : Uploader vos fichiers

### Méthode 1 : Via l'interface web (Plus simple)

1. Sur la page de votre repository, cliquez sur **"Add file"**
2. Sélectionnez **"Upload files"**
3. Glissez-déposez ces fichiers :
   - `le-kiosque-chelles.html`
   - `README.md`
   - `.gitignore`
4. Ajoutez un message de commit : "Premier commit - Site Le Kiosque"
5. Cliquez sur **"Commit changes"**

### Méthode 2 : Via Git (Pour les utilisateurs avancés)

```bash
# Initialisez Git dans votre dossier
git init

# Ajoutez tous les fichiers
git add .

# Créez votre premier commit
git commit -m "Premier commit - Site Le Kiosque"

# Liez votre repository local au repository GitHub
git remote add origin https://github.com/votre-nom/le-kiosque-chelles.git

# Envoyez vos fichiers sur GitHub
git push -u origin main
```

## Étape 4 : Activer GitHub Pages

1. Sur votre repository, allez dans **"Settings"** (Paramètres)
2. Dans le menu de gauche, cliquez sur **"Pages"**
3. Dans la section **"Source"** :
   - Sélectionnez **"Deploy from a branch"**
   - Branch : **main**
   - Folder : **/ (root)**
4. Cliquez sur **"Save"**
5. ⏳ Attendez 2-3 minutes que GitHub déploie votre site

## Étape 5 : Accéder à votre site

Votre site sera disponible à l'adresse :
```
https://votre-nom-utilisateur.github.io/le-kiosque-chelles/le-kiosque-chelles.html
```

**Note :** Renommez le fichier en `index.html` pour avoir une URL plus courte :
```
https://votre-nom-utilisateur.github.io/le-kiosque-chelles/
```

## 📤 Partager le lien avec votre client

1. Copiez l'URL de votre site GitHub Pages
2. Envoyez-la à votre client par email ou message
3. Votre client pourra voir le site et vous faire ses retours

## 🔄 Mettre à jour le site après modifications

### Via l'interface web :
1. Cliquez sur le fichier à modifier
2. Cliquez sur l'icône **crayon** (Edit)
3. Faites vos modifications
4. Cliquez sur **"Commit changes"**
5. Le site se mettra à jour automatiquement en 2-3 minutes

### Via Git :
```bash
# Après avoir modifié vos fichiers localement
git add .
git commit -m "Description de vos modifications"
git push
```

## 🎨 Renommer le fichier HTML en index.html

Pour une URL plus propre, renommez `le-kiosque-chelles.html` en `index.html` :

1. Dans votre repository GitHub, cliquez sur le fichier
2. Cliquez sur l'icône **crayon** (Edit)
3. Dans le nom du fichier en haut, changez le nom en `index.html`
4. Commit changes

Votre site sera maintenant accessible à :
```
https://votre-nom.github.io/le-kiosque-chelles/
```

## ✅ Checklist avant de partager avec le client

- [ ] Tous les fichiers sont uploadés sur GitHub
- [ ] GitHub Pages est activé
- [ ] Le site s'affiche correctement en ligne
- [ ] Vous avez testé le site sur mobile
- [ ] Le lien est fonctionnel

## 💡 Astuces

- **Personnalisation du nom de domaine** : Vous pouvez acheter un nom de domaine (ex: lekiosque-chelles.fr) et le lier à GitHub Pages
- **Modifications en direct** : Chaque modification sur GitHub met à jour automatiquement le site
- **Collaboration** : Vous pouvez donner accès à d'autres personnes pour qu'elles modifient le site

## 🆘 Besoin d'aide ?

- Documentation GitHub Pages : [docs.github.com](https://docs.github.com/pages)
- Tutoriel vidéo : Recherchez "GitHub Pages tutorial" sur YouTube

---

**Votre site sera en ligne et accessible 24/7 gratuitement !** 🎉
