var RES_LANGUAGE='fr_FR',RES_YES_LABEL="Oui",RES_NO_LABEL="Non",RES_UNAVAILABLE="Plus d'options disponibles avec QuickCRM Mobile Pro.",
RES_REQUIRED_MSG='Champ obligatoire',
RES_WRONG_PASWD="Nom d'utilisateur ou mot de passe incorrect",
RES_INV_DATE_MSG='format de date invalide (jj/mm/aaaa)',
RES_INV_DATETIME_MSG='format de date invalide (jj/mm/aaaa hh:mm)',
RES_UNDEFINED_FIELD='Champ inexistant:',
RES_INVALID_EMAIL_MSG='Email incorrect',
RES_ACCESS_DENIED_MSG='Accès interdit',
RES_LOGIN_MESSAGE="Entrez votre nom et votre mot de passe, puis cliquez sur Connexion",
RES_LOGIN_TITLE="Connexion",
RES_LOGOUT_LABEL="D&eacute;connexion",
RES_HOME_LABEL="Accueil",
RES_NO_MORE_RECORDS="Pas d'enregistrement",
RES_USERNAME_LABEL="Utilisateur:",
RES_PASSWORD_LABEL="Mot de passe:";
var RES_OVERVIEW_LABEL="D&eacute;tails",
RES_DETAILS_LABEL="",
RES_MORE_INFORMATION_LABEL="Informations suppl&eacute;mentaires",
RES_OTHER_LABEL="Autre";
var RES_NAME_LABEL="Nom:",
RES_ADDRESS_LABEL="Adresse:",
RES_NO_DATA="Aucun",
RES_OPT_CALL_MEET="Appels et Rendez-vous",
RES_OPT_FROM="Jours précédents (0 pour aucune limite):",
RES_OPT_TO="Jours suivants (0 pour aucune limite):",
RES_NEW="Nouveau",
RES_DURATION_LABEL="Dur&eacute;e",
RES_DO_NOT_CALL="*NOTE: Ce contact ne doit pas etre appel&eacute;.",
RES_RELATED_TO_LABEL="Reli&eacute; &agrave;",
RES_LOGGED_CALL="Appel depuis le tel. mobile",
RES_SEARCH_LABEL="Recherche",
RES_LOG_CALLS="Créer les appels";
var RES_MORE_OPTIONS="Autres Options", // Version 1.1
RES_OPTIONS="Options",
RES_CALENDAR="Calendrier",
RES_MISSED="Retard",
RES_TODAY="Aujourd'hui",
RES_7DAYS="7 jours";
// V1.3
var RES_SEARCH_FROM="De",
RES_SEARCH_TO="A";
// V1.5
var RES_OPT_GENERAL="General",
RES_ROWS_PER_PAGE="Eléments par page";
// V2.0
var RES_SHOWLABELS='Textes';
var RES_TOOLBAR='Barre d\'outils:';
var RES_AVAILABLE_NEXT_LOGIN='Certaines options seront effectives à la prochaine connexion.<br>Voulez-vous vous reconnecter maintenant?';
var RES_ALLMODULES ='Tous les modules';
// V2.1
var RES_REMEMBER_ME='Rester connecté',
 RES_EDIT_ATTACH='Ajouter ou modifier le fichier joint',
 RES_DEL_ATTACH='Supprimer le fichier joint';
// V2.2
var RES_SORTORDER='Ordre de tri';
// V2.4
var RES_CLEAR='Vider';
var RES_HIDEEMPTY='Masquer vides';
var RES_SUBPANELS='Sous-onglets';
var RES_FILTEROLD='Filtre des anciennes données';
var RES_MINDATE='Date Minimum';
// V2.6
var RES_ALERTS='Alertes';
var RES_UPDATED="Affectations et modifications";
var RES_ICON='Icône';
// V3.0
var RES_MOBILE='Mobile',
	RES_ADV_OPTIONS="Options",
	RES_NONE="Aucun",
	RES_MY_ITEMS="Mes éléments",
	RES_RELATED="Reliés",
	RES_GO_ONLINE='Online',
	RES_GO_OFFLINE='Offline',
	RES_SYNC='Synchroniser',
	RES_OFFLINE_ERR_CANCEL='Connexion impossible à SugarCRM.\nIgnorer les modifications et retourner en ligne';

// DATE FORMAT
var regDate = new RegExp('^([0-9]|[0,1,2][0-9]|[3][0,1])/([0-9]|[0][0-9]|[1][0,1,2])/([0-9]{4})$',"");
var regDateTime = new RegExp('^([0-9]|[0,1,2][0-9]|[3][0,1])/([0-9]|[0][0-9]|[1][0,1,2])/([0-9]{4}) ([0-9]|[0-2][0-9]):([0-6][0-9])$',"");
var regMonth="$2";
var regDay="$1";
var AMPM=false;

// ADDRESS FORMAT
var Addresses_Template= '$street<br/>$postalcode $city<br/>$country';

	
