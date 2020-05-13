<?php


    namespace app\controllers;


    class ContactController extends AppController
    {
        public function actionIndex()
        {
            return $this->render('index');
        }
    }