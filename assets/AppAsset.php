<?php
    /**
     * @link http://www.yiiframework.com/
     * @copyright Copyright (c) 2008 Yii Software LLC
     * @license http://www.yiiframework.com/license/
     */

    namespace app\assets;

    use yii\web\AssetBundle;

    /**
     * Main application asset bundle.
     *
     * @author Qiang Xue <qiang.xue@gmail.com>
     * @since 2.0
     */
    class AppAsset extends AssetBundle
    {
        public $basePath = '@webroot';
        public $baseUrl = '@web';
        public $css = [
            'css/template.css',
            'libs/owlcarousel/owl.carousel.min.css',
            'libs/owlcarousel/owl.theme.default.min.css',
            'libs/fa-viber-master/fa-viber.css',
            '//stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
            '//fonts.googleapis.com/css?family=Roboto:400,300,500,500italic,400italic,300italic&subset=latin,cyrillic',
        ];
        public $js = [
            'js/modernizr.js',
            '//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js',
            '//cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
            'libs/owlcarousel/owl.carousel.min.js',
            'js/template.js',
            'js/main.js'
        ];
        public $depends = [
            'yii\web\YiiAsset',

        ];
    }
