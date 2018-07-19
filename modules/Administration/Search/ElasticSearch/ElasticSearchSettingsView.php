<?php
/**
 * SugarCRM Community Edition is a customer relationship management program developed by
 * SugarCRM, Inc. Copyright (C) 2004-2013 SugarCRM Inc.
 *
 * SuiteCRM is an extension to SugarCRM Community Edition developed by SalesAgility Ltd.
 * Copyright (C) 2011 - 2018 SalesAgility Ltd.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SUGARCRM, SUGARCRM DISCLAIMS THE WARRANTY
 * OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along with
 * this program; if not, see http://www.gnu.org/licenses or write to the Free
 * Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA.
 *
 * You can contact SugarCRM, Inc. headquarters at 10050 North Wolfe Road,
 * SW2-130, Cupertino, CA 95014, USA. or at email address contact@sugarcrm.com.
 *
 * The interactive user interfaces in modified source and object code versions
 * of this program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU Affero General Public License version 3.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License version 3,
 * these Appropriate Legal Notices must retain the display of the "Powered by
 * SugarCRM" logo and "Supercharged by SuiteCRM" logo. If the display of the logos is not
 * reasonably feasible for technical reasons, the Appropriate Legal Notices must
 * display the words "Powered by SugarCRM" and "Supercharged by SuiteCRM".
 */

/**
 * Created by PhpStorm.
 * User: viocolano
 * Date: 18/07/18
 * Time: 15:04
 */
class ElasticSearchSettingsView
{
    /** @var Sugar_Smarty */
    public $ss;
    /** @var array Associative array with the configuration as loaded from the configuration file */
    private $elasticSearchConfig;

    /**
     * ElasticSearchSettingsView constructor.
     * @param $elasticSearchConfig
     */
    public function __construct($elasticSearchConfig)
    {
        $this->elasticSearchConfig = $elasticSearchConfig;
        $this->ss = new Sugar_Smarty();
    }

    public function display()
    {
        global $mod_strings;
        global $app_list_strings;
        global $app_strings;

        $errors = array();
        $buttons = $this->getButtons($app_strings, $mod_strings);
        $this->ss->assign('MOD', $mod_strings);
        $this->ss->assign('APP', $app_strings);
        $this->ss->assign('APP_LIST', $app_list_strings);
        $this->ss->assign('LANGUAGES', get_languages());
        $this->ss->assign("JAVASCRIPT", get_set_focus_js());
        $this->ss->assign('config', $this->elasticSearchConfig);
        $this->ss->assign('error', $errors);
        $this->ss->assign("BUTTONS", $buttons);

        $this->ss->display('modules/Administration/Search/ElasticSearch/ElasticSearchSettingsTemplate.tpl');
    }

    /**
     * @param $app_strings
     * @param $mod_strings
     * @return string
     */
    private function getButtons($app_strings, $mod_strings)
    {
        return <<<EOQ
    <input title="{$app_strings['LBL_SAVE_BUTTON_TITLE']}"
        accessKey="{$app_strings['LBL_SAVE_BUTTON_KEY']}"
        class="button primary"
        type="submit"
        name="save"
        onclick="return check_form('ConfigureSettings');"
        value="{$app_strings['LBL_SAVE_BUTTON_LABEL']}" >&nbsp;
    <input title="{$mod_strings['LBL_CANCEL_BUTTON_TITLE']}" 
        onclick="document.location.href='index.php?module=Administration&action=index'"
        class="button"
        type="button"
        name="cancel"
        value="{$app_strings['LBL_CANCEL_BUTTON_LABEL']}" >
EOQ;
    }

}