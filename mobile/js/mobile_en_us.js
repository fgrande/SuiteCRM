var RES_YES_LABEL="Yes",
RES_NO_LABEL="No",
RES_UNAVAILABLE="Get QuickCRM Mobile Pro for more options",
RES_WRONG_PASWD='Wrong username or password',
RES_REQUIRED_MSG='Required field',
RES_INV_DATE_MSG='Invalid date format (mm/dd/yyyy)',
RES_INV_DATETIME_MSG='Invalid date format (mm/dd/yyyy hh:mm)',
RES_UNDEFINED_FIELD='Undefined field:',
RES_INVALID_EMAIL_MSG='Invalid Email',
RES_ACCESS_DENIED_MSG='Access Denied',
RES_LOGIN_MESSAGE="Enter your username and password, then click login",
RES_LOGIN_TITLE="Login",
RES_LOGOUT_LABEL="Logout",
RES_HOME_LABEL="Home",
RES_NO_MORE_RECORDS="No records",
RES_USERNAME_LABEL="Username:",
RES_PASSWORD_LABEL="Password:",
RES_OVERVIEW_LABEL="Details",
RES_MORE_INFORMATION_LABEL="More information",
RES_OTHER_LABEL="Other",
RES_NAME_LABEL="Name:",
RES_NO_DATA="No Data",
RES_OPT_CALL_MEET="Calls and Meetings",
RES_OPT_FROM="# days before (0 for no limit):",
RES_OPT_TO="# days after (0 for no limit):",
RES_DURATION_LABEL="Duration",
RES_ADDRESS_LABEL="Address:",
RES_DETAILS_LABEL="",
RES_DO_NOT_CALL="*NOTE: Do not call this contact.",
RES_RELATED_TO_LABEL="Related to",
RES_LOGGED_CALL="Call placed from mobile device",
RES_SEARCH_LABEL="Search",
RES_LOG_CALLS="Log Calls";
// Version 1.1
var RES_MORE_OPTIONS="More Options", 
RES_OPTIONS="Options",
RES_CALENDAR="Calendar",
RES_MISSED="Late",
RES_TODAY="Today",
RES_7DAYS="7 Days";
// V1.3
var RES_SEARCH_FROM="From",
RES_SEARCH_TO="To";
// V1.5
var RES_OPT_GENERAL="General",
RES_ROWS_PER_PAGE="Rows Per Page";
// V2.0
var RES_SHOWLABELS='Labels';
var RES_TOOLBAR='Toolbar:';
var RES_AVAILABLE_NEXT_LOGIN='Some options will be effective at next login.<br>Do you want to reconnect now?';
var RES_ALLMODULES ='All Modules';
// V2.1
var RES_REMEMBER_ME='Remember Me',
 RES_EDIT_ATTACH='Add or update Attachment',
 RES_DEL_ATTACH='Remove Attachment';
// V2.2
var RES_SORTORDER='Sort Order';
// V2.4
var RES_CLEAR='Clear';
var RES_HIDEEMPTY='Hide when empty';
var RES_SUBPANELS='Subpanels';
var RES_FILTEROLD='Filter Old Data';
var RES_MINDATE='Minimum Date';
// V2.6
var RES_ALERTS='Alerts',
	RES_UPDATED="Assignments and updates",
	RES_ICON='Icon';
// V3.0
var RES_MOBILE='Mobile',
	RES_ADV_OPTIONS="Advanced Options",
	RES_NONE="None",
	RES_MY_ITEMS="My items",
	RES_RELATED="Related",
	RES_GO_ONLINE='Go Online',
	RES_GO_OFFLINE='Go Offline',
	RES_SYNC='Sync',
	RES_OFFLINE_ERR_CANCEL='Cannot connect to SugarCRM.\nIgnore changes and return online';

// DATE FORMAT
var regDate = new RegExp('^([0-9]|[0][0-9]|[1][0,1,2])/([0-9]|[0,1,2][0-9]|[3][0,1])/([0-9]{4})$',"");
var regDateTime = new RegExp('^([0-9]|[0][0-9]|[1][0,1,2])/([0-9]|[0,1,2][0-9]|[3][0,1])/([0-9]{4}) ([0-9]|[0-2][0-9]):([0-6][0-9])$',"");
var regMonth="$1";
var regDay="$2";
var AMPM=true;

// ADDRESS FORMAT
var Addresses_Template= '$street<br/>$city, $state $postalcode<br/>$country';
