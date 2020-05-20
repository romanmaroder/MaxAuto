<?php

    $params = require __DIR__ . '/params.php';
    $db = require __DIR__ . '/db.php';

    $config = [
        'id'           => 'basic',
        'basePath'     => dirname(__DIR__),
        'bootstrap'    => ['log'],
        'defaultRoute' => 'home/index',
        'language'     => 'ru-Ru',
        'name'         => 'MAX-Авто',
        'layout'       => 'maxauto',
        'aliases'      => [
            '@bower' => '@vendor/bower-asset',
            '@npm'   => '@vendor/npm-asset',
        ],
        'modules'      => [
            'admin' => [
                'class'        => 'app\modules\admin\Module',
                'layout'       => 'admin',
                'defaultRoute' => 'main/index',
            ],
        ],
        'components'   => [
            'formatter'    => [
                'dateFormat' => 'php:d M Y ',
                'datetimeFormat' => 'php:d M / Y ',
            ],
            //            'assetManager' => [
            //                'bundles' => [
            //                    'yii\web\JqueryAsset' => [
            //                        'sourcePath' => null,   // не опубликовывать комплект
            //                        'js'         => [
            //                            '//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js',
            //                        ]
            //                    ],
            //                ],
            //            ],
            'request'      => [
                // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
                'cookieValidationKey' => 'MkpZA1kzxOMKv32aXJCjM0bV5TMGrAPd',
                'baseUrl'             => '',
            ],
            'cache'        => [
                'class' => 'yii\caching\FileCache',
            ],
            'user'         => [
                'identityClass'   => 'app\models\User',
                'loginUrl'        => '/admin/auth/login',
                'enableAutoLogin' => true,
            ],
            'errorHandler' => [
                'errorAction' => 'site/error',
            ],
            'mailer'       => [
                'class'            => 'yii\swiftmailer\Mailer',
                // send all mails to a file by default. You have to set
                // 'useFileTransport' to false and configure a transport
                // for the mailer to send real emails.
                'useFileTransport' => false,
                'transport'        => [
                    'class'         => 'Swift_SmtpTransport',
                    'host'          => 'smtp.yandex.ru',
                    'username'      => 'roma12041985@yandex.ru',
                    'password'      => '12APR1985',
                    'port'          => '587', // 465
                    'encryption'    => 'tls', // tls
                    'streamOptions' => [
                        'ssl' => [
                            'verify_peer'      => false,
                            'verify_peer_name' => false
                        ]
                    ]
                ],
            ],
            'log'          => [
                'traceLevel' => YII_DEBUG ? 3 : 0,
                'targets'    => [
                    [
                        'class'  => 'yii\log\FileTarget',
                        'levels' => ['error', 'warning'],
                    ],
                ],
            ],
            'db'           => $db,

            'urlManager' => [
                'enablePrettyUrl'     => true,
                'showScriptName'      => false,
                'enableStrictParsing' => false,
                'rules'               => [
                    'home/<page:\d+>'    => 'home/index',
                    'home/blog/<id:\d+>' => 'blog/view',
                    'product/<id:\d+>'   => 'product/view',
                    'category/<id:\d+>'  => 'category/view',
                    'search'             => 'category/search',
                ],
            ],

        ],
        'controllerMap' => [
            'elfinder' => [
                'class' => 'mihaildev\elfinder\PathController',
                'access' => ['@'],
                'root' => [
                    'path' => 'uploads/files',
                    'name' => 'Files'
                ],
            ]
        ],
        'params'       => $params,
    ];

    if ( YII_ENV_DEV ) {
        // configuration adjustments for 'dev' environment
        $config['bootstrap'][] = 'debug';
        $config['modules']['debug'] = [
            'class' => 'yii\debug\Module',
            // uncomment the following to add your IP if you are not connecting from localhost.
            //'allowedIPs' => ['127.0.0.1', '::1'],
        ];

        $config['bootstrap'][] = 'gii';
        $config['modules']['gii'] = [
            'class' => 'yii\gii\Module',
            // uncomment the following to add your IP if you are not connecting from localhost.
            //'allowedIPs' => ['127.0.0.1', '::1'],
        ];
    }

    return $config;
