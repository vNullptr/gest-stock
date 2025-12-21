# 📦 Système de Gestion de Stock

Application web (MVP) pour la gestion d'inventaire multi-magasins avec suivi des commandes et gestion du personnel.

## 🛠️ Stack Technique

- **Backend**: Django + Django REST Framework
- **Frontend**: React.js + Axios + Tailwind CSS
- **Base de données**: MySQL 8.0

## ✨ Fonctionnalités

### Dashboard
Vue d'ensemble des métriques clés de l'inventaire avec statistiques en temps réel et indicateurs de performance.

### Gestion des Produits
- Consultation de l'inventaire complet
- Ajout de nouveaux produits
- Modification des informations produits (nom, prix, quantité, etc.)
- Suivi des niveaux de stock

### Gestion du Personnel
- Ajout et modification des employés
- Attribution de rôles (Manager, Vendeur, Gestionnaire de stock, etc.)
- Assignation du personnel aux magasins spécifiques

### Gestion des Magasins
- Vue détaillée de chaque magasin
- Consultation du stock par magasin
- Visualisation de l'équipe assignée à chaque point de vente

### Gestion des Commandes
- Création de nouvelles commandes
- Suivi de l'état des commandes (En attente, En cours, Livrée, Annulée)

## 🚀 Installation et Configuration

### Prérequis
- Node.js (v16 ou supérieur)
- Python 3.8+
- MySQL 8.0 Server

### 1. Configuration de la Base de Données

#### Installation de MySQL 8.0
Installez MySQL Server 8.0 sur votre machine.

#### Création de la base de données
```sql
CREATE DATABASE django_stock_db;
CREATE USER 'stockuser'@'localhost' IDENTIFIED BY 'testpassword';
GRANT ALL PRIVILEGES ON django_stock_db.* TO 'stockuser'@'localhost';
FLUSH PRIVILEGES;
```
Remplacez 'testpassword', 'stockuser' par ceux que vous souhaitez utiliser

### 2. Configuration du Backend

#### Création de l'environnement virtuel
```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate
```

#### Installation des dépendances
```bash
pip install -r requirements.txt
```

#### Configuration de Django
Dans `settings.py`, configurez la connexion à la base de données :

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.mysql",
        "NAME": "django_stock_db",
        "USER": "stockuser",
        "PASSWORD": "testpassword",
        "HOST": "localhost",
        "PORT": "3306",
    }
}
```

#### Configuration CORS
**Important** : Pour permettre la communication entre le frontend et le backend, configurez CORS dans `settings.py` :

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost",
]
```

#### Migrations et démarrage
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

Le backend sera accessible sur `http://localhost:8000` normalement.

### 3. Configuration du Frontend

```bash
cd frontend
npm install
npm run dev
```

Le frontend sera accessible sur `http://localhost:5173`

## ⚠️ Notes Importantes

### Synchronisation Frontend-Backend
**Le frontend et le backend doivent être sur le même domaine (localhost) pour fonctionner correctement.** Assurez-vous que :
- Le backend tourne sur `http://localhost:8000`
- Le frontend tourne sur `http://localhost:5173`
- La configuration CORS dans `settings.py` autorise l'origine du frontend

### Ports par défaut
- Backend Django : `8000`
- Frontend React : `5173`
- MySQL : `3306`

## 📝 Utilisation

1. Démarrez le serveur MySQL
2. Lancez le backend Django (`python manage.py runserver`)
3. Lancez le frontend React (`npm run dev`)
4. Accédez à l'application via `http://localhost:5173`
5. Connectez-vous avec le compte superuser créé précédemment

## 🔐 Sécurité

Pour la production, pensez à :
- Modifier les identifiants de la base de données
- Configurer les variables d'environnement
- Désactiver le mode DEBUG dans Django
- Configurer CORS avec les domaines de production