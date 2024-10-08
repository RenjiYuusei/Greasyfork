// ==UserScript==
// @name Dark STV
// @namespace sangtacviet
// @version 4.0.10
// @description Dark Mode For SangTacViet
// @author @Undefined & @Yuusei
// @license GPL-3.0
// @icon https://sangtacviet.vip/favicon.png
// @match *://sangtacviet.vip/*
// @match *://sangtacviet.vip/user/*
// @grant GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    const css = ` :root {
            --bg-item: #1d1d1d;
            --bg-dark-darker: #101010;
            --bg-dark: #121212;
            --bg-darker: #1d1d1d;
            --color: #e0e0e0;
            --bg-secondary: #7f8c8d;
            --primary-red: #ff5733;
        }

        .bg-light {
            background-color: var(--bg-dark) !important;
        }

        .bg-dark {
            background-color: var(--bg-dark) !important;
        }

        .t-gray {
            color: var(--color) !important;
        }

        a {
            color: var(--color) !important;
        }

        button {
            color: var(--color) !important;
        }

        textarea,
        input,
        select {
            background-color: var(--bg-darker) !important;
            border: 1px solid var(--bg-dark) !important;
            color: var(--color) !important;
        }

        button,
        textarea,
        input,
        select {
            outline: none !important;
            box-shadow: none !important;
        }

        ::-webkit-scrollbar {
            width: 5px;
        }

        ::-webkit-scrollbar-track {
            background-color: var(--bg-darker) !important;
        }

        ::-webkit-scrollbar-thumb {
            background-color: var(--bg-secondary) !important;
        }

        #tm-bot-nav::-webkit-scrollbar {
            height: 2px !important;
        }

        body {
            font-family: nunito !important;
            color: var(--color) !important;
        }

        #full {
            background-color: var(--bg-dark) !important;
        }

        #tm-top-nav {
            background-color: var(--bg-dark) !important;
        }

        #tm-top-nav .container,
        #tm-top-nav a {
            color: var(--color) !important;
        }

        #logo-stv {
            color: var(--color) !important;
            font-weight: bold !important;
            font-size: 50px !important;
            padding-left: 15px !important;
            font-style: italic !important;
        }

        #notifmarker {
            color: var(--color) !important;
        }

        #tm-user-avatar {
            box-shadow: none !important;
        }

        input#id {
            border-radius: 10px !important;
        }

        input#id::placeholder {
            color: var(--color) !important;
        }

        input#id:focus {
            background-color: var(--bg-darker) !important;
            border-radius: 10px !important;
        }

        #searchbox {
            display: none !important;
        }

        #tm-btn-rescan,
        #tm-btn-goto {
            color: var(--color) !important;
        }

        #tm-bot-nav {
            background-color: transparent !important;
            box-shadow: none !important;
        }

        #naviga a {
            color: var(--color) !important;
        }

        #inner > div[data-nosnippet].container {
            border-left: 4px solid var(--primary-red) !important;
            color: var(--color) !important;
            background-color: var(--bg-darker) !important;
            border-radius: 0 10px 10px 0 !important;
        }

        .tusachsearcher {
            border: 1px solid var(--bg-darker) !important;
            background-color: var(--bg-darker) !important;
        }

        #tusach {
            border: 1px solid var(--bg-darker) !important;
        }

        .roundblock {
            background-color: var(--bg-darker) !important;
        }

        .roundblock .title {
            color: var(--color) !important;
        }

        .roundblock .btngroup .btn {
            background-color: var(--bg-dark) !important;
        }

        .d-md-block:has(> div > #totrans) {
            display: flex !important;
            max-height: 100% !important;
        }

        div:has(> #totrans) {
            flex-grow: 1 !important;
            padding-bottom: 8px !important;
            flex-wrap: nowrap !important;
        }

        #totrans {
            margin-right: 1px !important;
        }

        #menunavigator2 {
            background-color: var(--bg-dark-darker) !important;
            box-shadow: none !important;
        }

        #menunavigator2 a {
            color: var(--color) !important;
            padding: 0 6px !important;
        }

        #menunavigator2 ul span {
            margin: 0 !important;
        }

        #menunavigator2 li:hover {
            background-color: var(--bg-dark) !important;
        }

        #inner .tmc-home-section {
            background: var(--bg-darker) !important;
            margin-top: 20px !important;
            border-radius: 16px;
            color: var(--color) !important;
        }

        #inner .cap {
            color: var(--color) !important;
            font-family: nunito !important;
        }

        .bookthumb {
            border: 2px solid transparent !important;
        }

        #tm-credit-section {
            background-color: var(--bg-dark) !important;
        }

        #btnshowns {
            background: #00000080 !important;
        }

        .fa-cogs.fas {
            color: #ffffff80 !important;
        }

        .modal-content {
            background-color: var(--bg-darker) !important;
        }

        .modal-header {
            border-bottom: 1px solid var(--bg-dark) !important;
        }

        .modal-footer {
            border-top: 1px solid var(--bg-dark) !important;
        }

        .noti {
            border: 1px solid var(--bg-dark) !important;
        }

        #tm-credit-section {
            height: 100px !important;
        }

        #tm-credit-text {
            display: none !important;
        }

        #userpage .anh-bia {
            background: none !important;
        }

        #userpage .user-home {
            background: var(--bg-darker) !important;
        }

        #userpage .user-info-text {
            color: var(--color) !important;
        }

        .user-sign-text.nip {
            background-color: var(--bg-dark-darker) !important;
        }

        #userpage .user-stat .stat-title {
            color: var(--color) !important;
            font-weight: bold;
        }

        #userpage .stat-row span:first-child {
            color: #a5a5a5 !important;
        }

        #userpage .stat-row span:nth-child(2) {
            color: var(--color) !important;
            font-weight: bold;
        }

        #userpage button {
            background-color: var(--bg-darker) !important;
            color: var(--color) !important;
        }

        #ctxoverlay .contextmenu {
            background-color: var(--bg-darker) !important;
            color: var(--color) !important;
        }

        #userpage .tab-nav .tab-item.active {
            background-color: var(--bg-dark-darker) !important;
            color: var(--color) !important;
        }

        #userpage .tab-nav {
            border: none !important;
        }

        #userpage #commentportion {
            background-color: var(--bg-dark-darker) !important;
            color: var(--color) !important;
        }

        #commentportion .sec-bot {
            color: var(--color) !important;
        }

        #commentportion .sec-top {
            background-color: var(--bg-darker) !important;
            color: var(--color) !important;
        }

        #commentportion button {
            border: 1px solid #454545 !important;
        }

        .progress:has(.progress-bar.progress-bar-striped.bg-success) {
            background-color: var(--bg-dark-darker) !important;
        }

        .progress-bar.progress-bar-striped.bg-success {
            background-color: #4936ff !important;
            color: var(--color) !important;
        }

        .progress-bar.progress-bar-striped.bg-success + span {
            color: var(--color) !important;
        }

        .itemname {
            color: #a096ff !important;
        }

        #nhunger-page {
            background-color: var(--bg-dark-darker) !important;
        }

        #item-page {
            background-color: var(--bg-dark-darker) !important;
        }

        #item-page ul li {
            color: #a5a5a5 !important;
        }

        .window {
            font-family: nunito !important;

            color: var(--color) !important;
        }

        .window .head {
            background-color: var(--bg-darker) !important;
        }

        .window .body {
            background-color: var(--bg-darker) !important;
        }

        .window button.red {
            background: #832020 !important;
            border: none !important;
        }

        .window button.green {
            background: #49832e !important;
            border: none !important;
        }

        .window button {
            background: var(--bg-dark-darker) !important;
            border: none !important;
        }

        #friendlist-page {
            background-color: var(--bg-dark-darker) !important;
        }

        #friendlist-page .friend {
            border-bottom: 1px solid var(--bg-darker) !important;
        }

        #friendlist-page .friend:hover {
            background-color: var(--bg-darker) !important;
        }

        #friendlist-page .friend img {
            border: none !important;
        }

        .chat-box {
            height: 460px !important;
        }

        .chat-msg .chat-msg-content {
            background-color: var(--bg-dark-darker) !important;
        }

        .chat-input-text {
            background-color: var(--bg-dark-darker) !important;
        }

        .container {
            text-align: center;
            background-color: var(--bg-dark);
            padding: 10px;
            margin-bottom: 10px;
        }

        .container a {
            color: var(--color) !important;
            text-decoration: none;
            padding: 5px 10px;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        .container a:hover {
            background-color: var(--bg-darker);
        }

        .contentbox {
            background-color: var(--bg-darker) !important;
            color: var(--color) !important;
            padding: 24px;
            font-size: 18px;
            font-family: Arial, sans-serif;
            margin-top: 20px;
            border-radius: 5px;
        }

        .contentbox span {
            color: #bb86fc !important;
            font-size: 12px;
        }

        i {
            cursor: pointer;
        }

        .contentbox[style*="background-color"] {
            background-color: var(--bg-darker) !important;
        }

        #show-per-book {

            background-color: var(--bg-darker) !important;
            color: var(--color) !important;
            border: none !important;

        }

        #show-per-book:hover {
            background-color: var(--bg-dark) !important;
        }

        .container .form-control {
            background-color: var(--bg-darker) !important;
            color: var(--color) !important;
            border: 1px solid var(--bg-dark) !important;
        }

        .container .btn-info {
            background-color: var(--bg-darker) !important;
            color: var(--color) !important;
            border: none !important;
        }

        .container .btn-info:hover {
            background-color: var(--bg-darker) !important;
            color: var(--color) !important;
        }

        #cmtwd {
            background-color: var(--bg-dark-darker) !important;
            color: var(--color) !important;
            padding: 10px;
            border-radius: 5px;
        }

        #cmtwd .btn-secondary {
            background-color: var(--bg-darker) !important;
            color: var(--color) !important;
            border: none !important;
        }

        #cmtwd .btn-secondary:hover {
            background-color: var(--bg-dark) !important;
        }

        #replycmtwd {
            background-color: var(--bg-dark-darker) !important;
            padding: 10px;
            border-radius: 5px;
        }

        #replycmtwd input {
            background-color: var(--bg-darker) !important;
            color: var(--color) !important;
            border: 1px solid var(--bg-dark) !important;
        }

        #replycmtwd button {
            background-color: var(--bg-darker) !important;
            color: var(--color) !important;
            border: none !important;
        }

        #replycmtwd button:hover {
            background-color: var(--bg-dark) !important;
        }

        #full > #inner {

            background-color: var(--bg-dark) !important;

            color: var(--color) !important;

        }

        #inner > .container > #commentportion,

        .container > #commentportion > .w-100,
        .container > #commentportion > center {
            background-color: var(--bg-dark-darker) !important;
            color: var(--color) !important;
            font-size: 1rem;

            padding: 10px;

            margin: 0;

            border: none !important;
            border-radius: 5px;

        }

        #full > #inner > .tm-reader-top-nav {
            background-color: var(--bg-darker) !important;
            color: var(--color) !important;
            padding: 6px 0px;
            font-weight: 500;
        }

        #namewdf > #toolbar,
        #namewdf > #namewdc > #namewd,
        #namewdc > #upnamewd > center {
            background-color: var(--bg-darker) !important;
            color: var(--color) !important;
        }

        #namewdf > .row {
            background-color: var(--bg-dark-darker) !important;
            color: var(--color) !important;
            padding: 10px;
            border-radius: 5px;
        }

        .input-group.mb-3.mt-3 > .input-group-prepend > .input-group-text.select-title,
        .page-link,
        #minc,
        #sort,
        #type,
        #category,
        #bookstatus,
        #tag,
        .blk-arr,
        .container.bg-light,
        .far.fa-wand-magic,
        .btn.btn-outline-info,
        #searchbutton,
        #hidehentai,
        #allowinfinite,
        .nb.cap.col-xl-1.col-lg-2.col-md-3.col-sm-4.col-4.booksearch,
        .searchtag,
        #tm-p-search-top {
            background-color: var(--bg-darker) !important;
            color: var(--color) !important;
            border-color: var(--bg-dark) !important;

        }

        .input-group-append > .input-group-text.select-title > .far.fa-wand-magic {
            color: var(--color) !important;
            background-color: var(--bg-darker) !important;
        }

        .page-link:hover {
            background-color: var(--bg-dark) !important;
        }

        #minc,
        #sort,
        #type,
        #category,
        #bookstatus,
        #tag {
            padding: 6px 12px;

            margin: 6px 0;

            width: auto;

            height: auto;

        }

        form > .blk-arr > div {
            color: var(--color) !important;
            background-color: var(--bg-darker) !important;
            border: 1px solid var(--bg-dark) !important;

        }

        .btn.btn-light {
            color: var(--color) !important;
            background-color: var(--bg-darker) !important;
            border-color: var(--bg-dark) !important;
        }

        .btn.btn-light:hover {
            background-color: var(--bg-dark) !important;

        }

        #full > #inner > .container,
        #inner > .container > b,
        .section > span > .info-mark,
        .container > .section > span,
        .section {

            color: var(--color) !important;
            background-color: var(--bg-darker) !important;
            border-color: var(--bg-dark) !important;
        }

        #full > #inner > .container {
            padding: 10px; margin-bottom: 10px; border-radius: 10px;
        }

        #inner > .container > b {
            font-size: 22px; margin: 10px;
        }

        .section > .switch > .slider.round {
            border-radius: 34px;
        }

        .section > span > .info-mark {
            border-radius: 50%; border: 1px solid var(--bg-secondary);
        }

        .section {

            color: var(--color) !important;
            background-color: var(--bg-darker) !important;

            border: 1px solid var(--bg-dark);

            padding: 0px 0px 0px 12px;
            margin: 4px 0px 0px;
            border-radius: 6px;

            font-size: 16px;
            font-weight: 400;
            top: auto;
            right: auto;
            bottom: auto;
            left: auto;
            width: 394px;
            height: 38px;

        }

        #totranslate,
        #maincontent {
            background-color: var(--bg-darker) !important;
            color: var(--color) !important;
        }

        .btn.btn-primary {
            background-color: #4936ff !important;

            border-color: #4936ff !important;
            color: var(--color) !important;
        }

        #book-sumary {
            background-color: var(--bg-darker) !important;
            color: var(--color) !important;
        }

        #commentportion,
        .flex > .sec > div,
        .sec > div {
            background-color: var(--bg-dark-darker) !important;
            color: var(--color) !important;
            font-size: 1rem;

            padding: 10px;

            margin: 0;

        }

        .fas.fa-sync-alt,
        .fas.fa-chevron-down,
        .fas.fa-eye,
        .fas.fa-book-reader,
        .fas.fa-bookmark,
        .fas.fa-comment-dots,
        .fas.fa-star,
        .fas.fa-share,
        .blk-body,
        .blk-top.ib-100,
        .rd-tag,
        .ib-100,
        .hover-darken.ib-100,
        .blk-bot.p-2 {
            background-color: var(--bg-darker) !important;
            color: var(--color) !important;
        }

        #lastupdatetime {
            color: var(--color) !important;
        }

        .listchapitem.chapreaded {
            background-color: var(--bg-darker) !important;
            color: var(--color) !important;

        }

        .listchapitem.chapreaded:hover {
            background-color: var(--bg-dark);

        }

        .row.justify-content-md-left {
            color: var(--color) !important;
            background-color: transparent !important;

        }

        .btn.btn-outline-secondary.w-100 {
            color: var(--color);
            background-color: var(--bg-darker);
            border: 1px solid var(--bg-dark);
        }

        .btn.btn-outline-secondary.w-100:hover {
            background-color: var(--bg-dark);
        }

        .btn.t-gray {
            color: var(--color);
            background-color: transparent;
            border: 1px solid transparent;
        }

        .blk-top.card-header {
            color: var(--color);
            background-color: var(--bg-darker);
            border-radius: 5px 5px 0 0;

        }

        .blk-bot {
            color: var(--color);
            background-color: var(--bg-darker);
        }

        .expandable {
            color: var(--color);
            background-color: transparent;

            max-height: 360px;

        }

        .container.p-0 {
            color: var(--color);
            background-color: var(--bg-dark);

            border: none;

            border-radius: 10px;
            padding: 10px;

            margin-bottom: 10px;
        }

        #bookpagebtn,
        #otherpagebtn,
        #personpagebtn,
        #commentpagebtn {
            color: var(--color) !important;

            background-color: var(--bg-darker) !important;

            border: none !important;

            padding: 6px 12px !important;

            border-radius: 4px !important;

        }

        #bookpagebtn.active,

        #otherpagebtn.active,
        #personpagebtn.active,
        #commentpagebtn.active {
            background-color: var(--bg-dark) !important;

        }

        .listchapitem {
            background-color: var(--bg-darker) !important;
            color: var(--color) !important;
        }

        .listchapitem:hover {
            background-color: var(--bg-dark) !important;
        }

        .container.p-0 > a > div,
        a > .actor > div,
        #tabdiv,
        #btag,
        #tabbar,
        #c-huyenhuyen,
        #c-sangtac,
        #c-cauluong,
        #c-vongdu,
        #c-tayhuyen,
        #c-linhdi,
        #c-ngontinh,
        #c-dongnhan,
        #c-haitac,
        #c-daula,
        #c-naruto,
        #c-nhithunguyen,
        #c-khoahoc,
        #c-thanhao,
        #c-lichsu,
        #c-lightnovel,
        #c-truyenhai,
        #c-linhkhikhoiphuc,
        #c-dothi,
        #c-khoahuyen,
        #c-groupchat,
        #c-daomo,
        #c-giaitri,
        #c-lamruong,
        #c-honghoang,
        #c-bienthan,
        #c-tienglong,
        #c-vangioivideo,
        #c-phanphai,
        #c-tienhiep,
        #c-daiduong,
        #c-huyenhuyen2,
        #c-haucung,
        #d-huyenhuyen >a,
        #d-sangtad >a,
        #d-dauluong >a,
        #d-vongdu >a,
        #d-tayhuyen >a,
        #d-linhdi >a,
        #d-ngontinh >a,
        #d-dongnhan >a,
        #d-haitac >a,
        #d-cauluong >a,
        #d-daula >a,
        #d-naruto >a,
        #d-nhithunguyen >a,
        #d-khoahod >a,
        #d-thanhao >a,
        #d-lidhsu >a,
        #d-lightnovel >a,
        #d-truyenhai >a,
        #d-linhkhikhoiphud >a,
        #d-dothi >a,
        #d-khoahuyen >a,
        #d-groupdhat >a,
        #d-daomo >a,
        #d-giaitri >a,
        #d-lamruong >a,
        #d-honghoang >a,
        #d-bienthan >a,
        #d-tienglong >a,
        #d-vangioivideo >a,
        #d-phanphai >a,
        #d-tienhiep >a,
        #d-daiduong >a,
        #d-huyenhuyen2 >a,
        #d-haudung >a {
            color: var(--color) !important;
            background-color: var(--bg-darker) !important;
            border-color: var(--bg-dark) !important;
        }

        .item {
            color: var(--color) !important;
            background-color: var(--bg-darker) !important;
            border: 2px solid var(--bg-secondary) !important;
            font-size: 12px;
            font-weight: 400;
            font-family: nunito !important;
            padding: 5px 10px;
            margin: 0px 5px 0px 0px;
            border-radius: 4px;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            width: 32px;
            height: 32px;

        }

        .item:hover {
            background-color: var(--bg-dark) !important;
            border: 2px solid #ff5733 !important;
        }

        .col-md-4 > .blk.shadow > .blk-top.t-20 {
            color: var(--color);
            background-color: var(--bg-darker);
            font-family: nunito;
        }

        .col-md-4 > .btn-grid-3 > a {
            color: var(--color);
            background-color: var(--bg-darker);
            border: 1px solid var(--bg-dark);
            font-family: nunito;
            transition: background-color 0.3s ease;
        }

        .col-md-4 > .btn-grid-3 > a:hover {
            background-color: var(--bg-dark);
        }

        .blk-top.card-header {
            color: var(--color);
            background-color: var(--bg-darker);
            font-family: nunito;
            border-radius: 5px 5px 0 0;
        }

        .blk-content {
            color: var(--color);
            background-color: var(--bg-darker);
            font-size: 14px;
            font-weight: 400;
            font-family: nunito;
            padding: 8px;
            margin: 0px;
            border: none;
            border-radius: 5px 5px 0px 0px;
        }

        .blk.shadow > .blk-content {
            color: var(--color) !important;
            background-color: var(--bg-darker) !important;
        }

        `;

    GM_addStyle(css);
    document.querySelector('#tm-nav-search-logo').parentElement.innerHTML = `<span id='logo-stv' >STV</span>`;
    })();
