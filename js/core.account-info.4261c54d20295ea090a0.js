(window.webpackJsonp=window.webpackJsonp||[]).push([["account-info"],{743:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n.n(c),i=n(7),o=n.n(i),r=n(0),s=n(91),l=n(6),u=n(2),_=n(4),p=n(21),d=n(30),m=n(11),g=n(254),h=function(e){var t=e.currency;return e.is_virtual?r.createElement(u.Localize,{i18n_default_text:"Demo"}):t?Object(_.getCurrencyName)(t):r.createElement(u.Localize,{i18n_default_text:"No currency assigned"})},b=function(e){var t=e.account_type;return r.createElement("div",null,Object(_.getMT5AccountDisplay)(t))},f=function(e){var t=e.account_type,n=e.balance,c=e.currency,i=e.currency_icon,o=e.display_type,s=e.has_balance,p=e.is_eu,d=e.is_disabled,m=e.is_virtual,g=e.loginid,f=e.onClickAccount,y=e.selected_loginid,v=r.useMemo((function(){return g.startsWith("MX")||g.startsWith("MLT")?Object(u.localize)("Synthetic"):g.startsWith("MF")?Object(u.localize)("Financial"):""}),[g]);if(d&&!c)return null;var w=c?i:"IcCurrencyUnknown";return r.createElement(r.Fragment,null,r.createElement("div",{id:"dt_".concat(g),className:a()("acc-switcher__account",{"acc-switcher__account--selected":g===y,"acc-switcher__account--disabled":d}),onClick:d?void 0:f},r.createElement("span",{className:"acc-switcher__id"},r.createElement(l.Icon,{icon:m?"IcCurrencyVirtual":w,className:"acc-switcher__id-icon",size:24}),r.createElement("span",null,"currency"===o?r.createElement(h,{is_virtual:m,currency:c,is_eu:p,market_type:v}):r.createElement(b,{account_type:t}),r.createElement("div",{className:"acc-switcher__loginid-text"},g)),s&&r.createElement("span",{className:"acc-switcher__balance"},c&&r.createElement(l.Money,{currency:Object(_.getCurrencyDisplayCode)(c),amount:Object(_.formatMoney)(c,n,!0),should_format:!1,show_currency:!0})))))},y=function(e){var t=e.children,n=e.header,c=e.is_visible,a=e.toggleVisibility;return r.createElement(l.ContentExpander,{className:"acc-switcher",title:n,is_expanded:c,onToggle:a,is_title_spaced:!0},t)};y.propTypes={children:o.a.node,header:o.a.oneOfType([o.a.object,o.a.string]),is_visible:o.a.bool,toggleVisibility:o.a.func};var v=y;function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t,n,c,a,i,o){try{var r=e[i](o),s=r.value}catch(e){return void n(e)}r.done?t(s):Promise.resolve(s).then(c,a)}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],c=!0,a=!1,i=void 0;try{for(var o,r=e[Symbol.iterator]();!(c=(o=r.next()).done)&&(n.push(o.value),!t||n.length!==t);c=!0);}catch(e){a=!0,i=e}finally{try{c||null==r.return||r.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}function j(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=N(e);if(t){var a=N(this).constructor;n=Reflect.construct(c,arguments,a)}else n=c.apply(this,arguments);return D(this,n)}}function D(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(p,e);var t,n,c,i,o,s=O(p);function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=s.call(this,e)).toggleVisibility=function(e){var n,c,a;t.setState((n={},c="is_".concat(e,"_visible"),a=!t.state["is_".concat(e,"_visible")],c in n?Object.defineProperty(n,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[c]=a,n))},t.setWrapperRef=function(e){t.wrapper_ref=e},t.updateAccountTabIndex=function(e){t.setState({active_tab_index:e})},t.handleClickOutside=function(e){var n=!e.target.classList.contains("acc-info");t.wrapper_ref&&!t.wrapper_ref.contains(e.target)&&t.props.is_visible&&n&&t.closeAccountsDialog()},t.handleLogout=function(){t.closeAccountsDialog(),t.props.is_positions_drawer_on&&t.props.togglePositionsDrawer(),t.props.logoutClient().then((function(){t.props.routeBackInApp(t.props.history)}))},t.closeAccountsDialog=function(){t.props.toggleAccountsDialog(!1)},t.redirectToMt5=function(e){t.closeAccountsDialog(),t.props.history.push("".concat(_.routes.mt5,"#").concat(e))},t.openMt5RealAccount=function(e){var n="synthetic"===e?t.props.has_malta_account:t.props.has_maltainvest_account;t.props.is_eu&&!n?(t.closeAccountsDialog(),t.props.openAccountNeededModal("synthetic"===e?t.props.standpoint.gaming_company:t.props.standpoint.financial_company,"synthetic"===e?Object(u.localize)("Deriv Synthetic"):Object(u.localize)("Deriv Financial"),"synthetic"===e?Object(u.localize)("DMT5 Synthetic"):Object(u.localize)("DMT5 Financial"))):(sessionStorage.setItem("open_mt5_account_type","real.".concat(e)),t.redirectToMt5Real())},t.redirectToMt5Real=function(){!t.props.is_logged_in||t.props.is_mt5_allowed?t.redirectToMt5("real"):window.open(Object(_.urlFor)("user/metatrader",{legacy:!0}))},t.onListEnter=function(){return t.setState({has_autohide:!1})},t.onListLeave=function(){return t.setState({has_autohide:!0})},t.openMt5DemoAccount=function(e){sessionStorage.setItem("open_mt5_account_type","demo.".concat(e)),t.redirectToMt5Demo()},t.redirectToMt5Demo=function(){t.redirectToMt5("demo")},t.setAccountCurrency=function(){t.closeAccountsDialog(),t.props.toggleSetCurrencyModal()},t.showAccountTypesModal=function(){t.closeAccountsDialog(),t.props.toggleAccountTypesModal(!0)},t.isDemo=function(e){return/^demo/.test(e.group)},t.isReal=function(e){return!t.isDemo(e)},t.getRemainingAccounts=function(e){var n=[{account_types:["svg","malta"],icon:"Synthetic",title:Object(u.localize)("Synthetic"),type:"synthetic",api_key:"mt_gaming_company.financial"},{account_types:["vanuatu","svg_standard","svg_financial","maltainvest_financial"],icon:"Financial",title:Object(u.localize)("Financial"),type:"financial",api_key:"mt_financial_company.financial"},{account_types:["labuan"],icon:"Financial STP",title:Object(u.localize)("Financial STP"),type:"financial_stp",api_key:"mt_financial_company.financial_stp"}];return e.forEach((function(e){var t=e.split(/[demo|real]_/)[1],c=n.findIndex((function(e){return e.account_types.indexOf(t)>-1}));n.splice(c,1)})),n.filter((function(e){var n,c,a=A(e.api_key.split("."),2),i=a[0],o=a[1];return!!(null===(n=t.props.landing_companies)||void 0===n||null===(c=n[i])||void 0===c?void 0:c[o])}))},t.state={active_tab_index:!e.is_virtual||e.should_show_real_accounts_list?0:1,is_demo_deriv_visible:!0,is_demo_dmt5_visible:!0,is_real_deriv_visible:!0,is_real_dmt5_visible:!0,has_autohide:!0},t}return t=p,(n=[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside),this.props.updateMt5LoginList()}},{key:"componentWillUnmount",value:function(){this.props.toggleShouldShowRealAccountsList(!1),document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"doSwitch",value:(i=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.closeAccountsDialog(),this.props.account_loginid!==t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,this.props.switchAccount(t);case 5:case"end":return e.stop()}}),e,this)})),o=function(){var e=this,t=arguments;return new Promise((function(n,c){var a=i.apply(e,t);function o(e){E(a,n,c,o,r,"next",e)}function r(e){E(a,n,c,o,r,"throw",e)}o(void 0)}))},function(e){return o.apply(this,arguments)})},{key:"render",value:function(){var e,t=this;if(!this.props.is_logged_in)return!1;var n=this.props.is_mt5_allowed?Object(u.localize)("Total assets in your Deriv and DMT5 demo accounts."):Object(u.localize)("Total assets in your Deriv demo accounts."),c=this.props.is_mt5_allowed?Object(u.localize)("Total assets in your Deriv and DMT5 real accounts."):Object(u.localize)("Total assets in your Deriv real accounts."),i=this.is_real_account_tab?c:n,o=r.createElement("div",{className:"acc-switcher__list-wrapper"},r.createElement(v,{header:Object(u.localize)("Deriv Accounts"),is_visible:this.state.is_demo_deriv_visible,toggleVisibility:function(){t.toggleVisibility("demo_deriv")}},r.createElement("div",{className:"acc-switcher__accounts"},this.sorted_account_list.filter((function(e){return e.is_virtual})).map((function(e){return r.createElement(f,{key:e.loginid,balance:t.props.accounts[e.loginid].balance,currency:t.props.accounts[e.loginid].currency,currency_icon:"IcCurrency-".concat(e.icon),display_type:"currency",has_balance:"balance"in t.props.accounts[e.loginid],is_disabled:e.is_disabled,is_virtual:e.is_virtual,loginid:e.loginid,onClickAccount:e.is_disabled?void 0:t.doSwitch.bind(t,e.loginid),selected_loginid:t.props.account_loginid})})))),this.props.is_mt5_allowed&&r.createElement(r.Fragment,null,r.createElement("div",{className:"acc-switcher__separator acc-switcher__separator--no-padding"}),r.createElement(v,{header:Object(u.localize)("DMT5 Accounts"),is_visible:this.state.is_demo_dmt5_visible,toggleVisibility:function(){t.toggleVisibility("demo_dmt5")}},this.props.is_loading_mt5?r.createElement("div",{className:"acc-switcher__accounts--is-loading"},r.createElement(g.b,{speed:3})):r.createElement(r.Fragment,null,!!this.demo_mt5.length&&r.createElement("div",{className:"acc-switcher__accounts"},this.demo_mt5.map((function(e){return r.createElement(f,{key:e.login,account_type:e.group,balance:e.balance,currency:e.currency,currency_icon:"IcMt5-".concat(Object(_.getMT5Account)(e.group)),has_balance:"balance"in e,loginid:e.display_login,onClickAccount:t.redirectToMt5Demo})}))),this.remaining_demo_mt5.map((function(e){return r.createElement("div",{key:e.title,className:"acc-switcher__new-account"},r.createElement(l.Icon,{icon:"IcMt5-".concat(e.icon),size:24}),r.createElement("span",{className:"acc-switcher__new-account-text"},e.title),r.createElement(l.Button,{onClick:function(){return t.openMt5DemoAccount(e.type)},className:"acc-switcher__new-account-btn",secondary:!0,small:!0},Object(u.localize)("Add")))})))))),s=r.createElement("div",{className:"acc-switcher__list-wrapper",onMouseEnter:this.onListEnter,onMouseLeave:this.onListLeave},r.createElement(r.Fragment,null,r.createElement(v,{header:Object(u.localize)("Deriv Accounts"),is_visible:this.state.is_real_deriv_visible,toggleVisibility:function(){t.toggleVisibility("real_deriv")}},r.createElement("div",{className:"acc-switcher__accounts"},this.sorted_account_list.filter((function(e){return!e.is_virtual})).map((function(e){return r.createElement(f,{key:e.loginid,balance:t.props.accounts[e.loginid].balance,currency:t.props.accounts[e.loginid].currency,currency_icon:"IcCurrency-".concat(e.icon),display_type:"currency",has_balance:"balance"in t.props.accounts[e.loginid],is_disabled:e.is_disabled,is_virtual:e.is_virtual,is_eu:t.props.is_eu,loginid:e.loginid,onClickAccount:e.is_disabled?void 0:t.doSwitch.bind(t,e.loginid),selected_loginid:t.props.account_loginid})}))),this.remaining_real_accounts.map((function(e,n){return r.createElement("div",{key:n,className:"acc-switcher__new-account"},r.createElement(l.Icon,{icon:"IcDeriv",size:24}),r.createElement("span",{className:"acc-switcher__new-account-text"},Object(d.b)(e)),r.createElement(l.Button,{onClick:function(){return t.props.openRealAccountSignup(e)},className:"acc-switcher__new-account-btn",secondary:!0,small:!0},Object(u.localize)("Add")))})),!this.can_upgrade&&this.can_open_multi&&r.createElement(l.Button,{className:"acc-switcher__btn",secondary:!0,onClick:this.has_set_currency?function(){return t.props.openRealAccountSignup("manage")}:this.setAccountCurrency},this.props.has_fiat&&0===(null===(e=this.props.available_crypto_currencies)||void 0===e?void 0:e.length)?Object(u.localize)("Manage account"):Object(u.localize)("Add or manage account")))),this.props.is_mt5_allowed&&r.createElement(r.Fragment,null,r.createElement("div",{className:"acc-switcher__separator acc-switcher__separator--no-padding"}),r.createElement(v,{header:Object(u.localize)("DMT5 Accounts"),is_visible:this.state.is_real_dmt5_visible,toggleVisibility:function(){t.toggleVisibility("real_dmt5")}},this.props.is_loading_mt5?r.createElement("div",{className:"acc-switcher__accounts--is-loading"},r.createElement(g.b,{speed:3})):r.createElement(r.Fragment,null,!!this.real_mt5.length&&r.createElement("div",{className:"acc-switcher__accounts"},this.real_mt5.map((function(e){return r.createElement(f,{key:e.login,account_type:e.group,balance:e.balance,currency:e.currency,currency_icon:"IcMt5-".concat(Object(_.getMT5Account)(e.group)),has_balance:"balance"in e,loginid:e.display_login,onClickAccount:t.redirectToMt5Real})}))),this.remaining_real_mt5.map((function(e){return r.createElement("div",{key:e.title,className:a()("acc-switcher__new-account",{"acc-switcher__new-account--disabled":t.props.mt5_login_list_error})},r.createElement(l.Icon,{icon:"IcMt5-".concat(e.icon),size:24}),r.createElement("span",{className:"acc-switcher__new-account-text"},e.title),r.createElement(l.Button,{onClick:function(){return t.openMt5RealAccount(e.type)},className:"acc-switcher__new-account-btn",secondary:!0,small:!0,is_disabled:!t.props.is_eu&&!t.props.has_any_real_account||"financial_stp"===e.type&&t.props.is_pending_authentication||!!t.props.mt5_login_list_error},Object(u.localize)("Add")))}))))));return r.createElement("div",{className:"acc-switcher__list",ref:this.setWrapperRef},r.createElement(l.Tabs,{active_index:this.state.active_tab_index,className:"acc-switcher__list-tabs",onTabItemClick:this.updateAccountTabIndex,top:!0},r.createElement("div",{label:Object(u.localize)("Real")},r.createElement(l.DesktopWrapper,null,r.createElement(l.ThemedScrollbars,{height:"354px"},s)),r.createElement(l.MobileWrapper,null,r.createElement(l.Div100vhContainer,{className:"acc-switcher__list-container",max_autoheight_offset:"234px"},s))),r.createElement("div",{label:Object(u.localize)("Demo")},r.createElement(l.DesktopWrapper,null,r.createElement(l.ThemedScrollbars,{height:"354px"},o)),r.createElement(l.MobileWrapper,null,r.createElement(l.Div100vhContainer,{className:"acc-switcher__list-container",max_autoheight_offset:"234px"},o)))),r.createElement("div",{className:a()("acc-switcher__separator",{"acc-switcher__separator--auto-margin":this.props.is_mobile})}),r.createElement("div",{className:"acc-switcher__total"},r.createElement("span",null,r.createElement(u.Localize,{i18n_default_text:"Total assets"})),r.createElement("span",{className:"acc-switcher__balance"},r.createElement(l.Money,{currency:this.is_real_account_tab?this.props.obj_total_balance.currency:"USD",amount:Object(_.formatMoney)(this.is_real_account_tab?this.props.obj_total_balance.currency:"USD",this.is_real_account_tab?this.total_real_assets:this.total_demo_assets,!0),show_currency:!0,should_format:!1}))),r.createElement("div",{className:"acc-switcher__total-subtitle"},r.createElement("span",null,i)),r.createElement("div",{className:"acc-switcher__separator"}),r.createElement("div",{className:"acc-switcher__footer"},this.props.is_uk&&this.props.has_any_real_account&&r.createElement(l.Button,{className:"acc-switcher__compare",type:"button",has_effect:!0,onClick:this.showAccountTypesModal,text:Object(u.localize)("Compare"),secondary:!0}),r.createElement("div",{id:"dt_logout_button",className:"acc-switcher__logout"},r.createElement("span",{className:"acc-switcher__logout-text",onClick:this.handleLogout},Object(u.localize)("Log out")),r.createElement(l.Icon,{icon:"IcLogout",className:"acc-switcher__logout-icon drawer__icon",onClick:this.handleLogout}))))}},{key:"is_real_account_tab",get:function(){return 0===this.state.active_tab_index}},{key:"sorted_account_list",get:function(){var e=this;return this.props.account_list.slice().sort((function(t,n){var c=e.props.accounts[t.loginid].currency,a=e.props.accounts[n.loginid].currency,i=Object(_.isCryptocurrency)(c),o=Object(_.isCryptocurrency)(a),r=!i,s=!o;return t.is_virtual||n.is_virtual?t.is_virtual?1:-1:i&&o||r&&s?c<a?-1:1:r&&o?-1:1}))}},{key:"sorted_mt5_list",get:function(){return this.props.mt5_login_list.slice().sort((function(e,t){return/demo/.test(e.group)&&!/demo/.test(t.group)?1:/demo/.test(t.group)&&!/demo/.test(e.group)||/svg$/.test(e.group)?-1:/vanuatu|svg_(standard|financial)/.test(e.group)?/svg$/.test(t.group)?1:-1:1}))}},{key:"demo_mt5",get:function(){return this.sorted_mt5_list.filter(this.isDemo)}},{key:"remaining_demo_mt5",get:function(){var e=this,t=Object.keys(this.demo_mt5).map((function(t){return e.demo_mt5[t].group}));return this.getRemainingAccounts(t)}},{key:"real_mt5",get:function(){return this.sorted_mt5_list.filter(this.isReal)}},{key:"remaining_real_mt5",get:function(){var e=this,t=Object.keys(this.real_mt5).map((function(t){return e.real_mt5[t].group}));return this.getRemainingAccounts(t)}},{key:"remaining_real_accounts",get:function(){return this.can_open_multi?[]:this.props.upgradeable_landing_companies}},{key:"has_set_currency",get:function(){return this.props.account_list.filter((function(e){return!e.is_virtual})).some((function(e){return"Real"!==e.title}))}},{key:"can_upgrade",get:function(){return!(!this.props.is_virtual||!this.props.can_upgrade_to)}},{key:"can_open_multi",get:function(){return!this.props.is_eu&&(this.props.available_crypto_currencies.length<1&&!this.props.has_fiat||!this.props.is_virtual)}},{key:"total_demo_assets",get:function(){var e=this.props.account_list.find((function(e){return e.is_virtual})).loginid,t=this.props.accounts[e]?this.props.accounts[e].balance:0,n=this.props.mt5_login_list.filter((function(e){return/^demo/.test(e.group)})).reduce((function(e,t){return e.balance+=t.balance,e}),{balance:0});return Array.isArray(this.props.mt5_login_list)?n.balance+t:t}},{key:"total_real_assets",get:function(){return this.props.obj_total_balance.amount_real+this.props.obj_total_balance.amount_mt5}}])&&j(t.prototype,n),c&&j(t,c),p}(r.Component);C.propTypes={available_crypto_currencies:o.a.array,account_list:o.a.array,account_loginid:o.a.string,accounts:o.a.object,can_change_fiat_currency:o.a.bool,can_upgrade_to:o.a.string,has_fiat:o.a.bool,has_any_real_account:o.a.bool,is_eu:o.a.bool,is_loading_mt5:o.a.bool,is_logged_in:o.a.bool,is_mt5_allowed:o.a.bool,is_pending_authentication:o.a.bool,is_positions_drawer_on:o.a.bool,is_uk:o.a.bool,is_virtual:o.a.bool,is_visible:o.a.bool,logoutClient:o.a.func,mt5_login_list:o.a.array,obj_total_balance:o.a.object,openRealAccountSignup:o.a.func,switchAccount:o.a.func,toggleAccountsDialog:o.a.func,toggleAccountTypesModal:o.a.func,togglePositionsDrawer:o.a.func,toggleSetCurrencyModal:o.a.func,updateMt5LoginList:o.a.func};var S=Object(p.withRouter)(Object(m.b)((function(e){var t=e.client,n=e.common,c=e.ui;return{available_crypto_currencies:t.available_crypto_currencies,account_loginid:t.loginid,accounts:t.accounts,can_change_fiat_currency:t.can_change_fiat_currency,account_list:t.account_list,can_upgrade_to:t.can_upgrade_to,is_eu:t.is_eu,is_loading_mt5:t.is_populating_mt5_account_list,is_logged_in:t.is_logged_in,is_mt5_allowed:t.is_mt5_allowed,is_pending_authentication:t.is_pending_authentication,is_uk:t.is_uk,is_virtual:t.is_virtual,has_fiat:t.has_fiat,has_any_real_account:t.has_any_real_account,mt5_login_list:t.mt5_login_list,mt5_login_list_error:t.mt5_login_list_error,obj_total_balance:t.obj_total_balance,switchAccount:t.switchAccount,has_malta_account:t.has_malta_account,has_maltainvest_account:t.has_maltainvest_account,openAccountNeededModal:c.openAccountNeededModal,logoutClient:t.logout,landing_companies:t.landing_companies,upgradeable_landing_companies:t.upgradeable_landing_companies,updateMt5LoginList:t.updateMt5LoginList,routeBackInApp:n.routeBackInApp,standpoint:t.standpoint,is_positions_drawer_on:c.is_positions_drawer_on,openRealAccountSignup:c.openRealAccountSignup,toggleAccountsDialog:c.toggleAccountsDialog,toggleAccountTypesModal:c.toggleAccountTypesModal,togglePositionsDrawer:c.togglePositionsDrawer,toggleSetCurrencyModal:c.toggleSetCurrencyModal,should_show_real_accounts_list:c.should_show_real_accounts_list,toggleShouldShowRealAccountsList:c.toggleShouldShowRealAccountsList}}))(C)),T=function(e){var t=e.disableApp,n=e.enableApp,c=e.is_visible,i=e.is_upgrade_enabled,o=e.toggle;return r.createElement(l.Modal,{id:"dt_account_switcher_modal",className:"accounts-switcher",enableApp:n,is_open:c,is_vertical_top:!0,disableApp:t,has_close_icon:!1,toggleModal:o,height:"auto",width:"calc(100vw - 32px)"},r.createElement(l.Div100vhContainer,{className:a()("acc-switcher__wrapper","acc-switcher__wrapper--is-mobile"),max_autoheight_offset:"48px"},r.createElement(S,{is_mobile:!0,is_visible:!0,toggle:o,is_upgrade_enabled:i})))};T.propTypes={children:o.a.any,onClose:o.a.func,title:o.a.string,visible:o.a.bool,wrapperClassName:o.a.string};var x=T,z=function(e){var t=e.is_disabled,n=e.disabled_message,c=e.children;return t&&n?r.createElement(l.Popover,{alignment:"bottom",message:n,zIndex:99999},c):r.createElement(r.Fragment,null,c)},I=function(e){var t=e.is_virtual,n=e.currency;return r.createElement(l.Icon,{icon:"IcCurrency-".concat(t?"virtual":n||"Unknown"),className:"acc-info__id-icon acc-info__id-icon--".concat(t?"virtual":n),size:24})},L=function(e){var t=e.acc_switcher_disabled_message,n=e.balance,c=e.currency,i=e.disableApp,o=e.enableApp,p=e.is_dialog_on,d=e.is_virtual,m=e.toggleDialog,g=e.is_disabled,h=c.toLowerCase();return r.createElement("div",{className:"acc-info__wrapper"},r.createElement("div",{className:"acc-info__separator"}),r.createElement(z,{is_disabled:g,disabled_message:t},r.createElement("div",{className:a()("acc-info",{"acc-info--show":p,"acc-info--is-virtual":d,"acc-info--is-disabled":g}),onClick:g?void 0:function(){return m()}},r.createElement("span",{className:"acc-info__id"},r.createElement(l.DesktopWrapper,null,r.createElement(I,{is_virtual:d,currency:h})),r.createElement(l.MobileWrapper,null,(d||c)&&r.createElement(I,{is_virtual:d,currency:h}))),(void 0!==n||!c)&&r.createElement("p",{className:a()("acc-info__balance",{"acc-info__balance--no-currency":!c&&!d})},!c&&r.createElement(u.Localize,{i18n_default_text:"No currency assigned"}),n," ",Object(_.getCurrencyDisplayCode)(c)),g?r.createElement(l.Icon,{icon:"IcLock"}):r.createElement(l.Icon,{icon:"IcChevronDownBold",className:"acc-info__select-arrow"}))),r.createElement(l.MobileWrapper,null,r.createElement(x,{is_visible:p,disableApp:i,enableApp:o,toggle:m})),r.createElement(l.DesktopWrapper,null,r.createElement(s.CSSTransition,{in:p,timeout:200,classNames:{enter:"acc-switcher__wrapper--enter",enterDone:"acc-switcher__wrapper--enter-done",exit:"acc-switcher__wrapper--exit"},unmountOnExit:!0},r.createElement("div",{className:"acc-switcher__wrapper"},r.createElement(S,{is_visible:p,toggle:m})))))};L.propTypes={acc_switcher_disabled_message:o.a.string,account_type:o.a.string,balance:o.a.string,currency:o.a.string,is_dialog_on:o.a.bool,is_disabled:o.a.bool,is_virtual:o.a.bool,loginid:o.a.string,toggleDialog:o.a.func};t.default=L}}]);
//# sourceMappingURL=core.account-info.4261c54d20295ea090a0.js.map