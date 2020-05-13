<?php


    namespace app\controllers;


    class DeliveryController extends AppController
    {
//        public $layout = 'maxautoinner';

        public function actionIndex()
        {
            return $this->render('index');
        }
    }