<?php


    namespace app\modules\admin\controllers;


    use app\modules\admin\models\Mail;
    use yii\web\Controller;

    class AppAdminController extends Controller
    {
        public function beforeAction($action)
        {
            $this->view->params['mails'] = Mail::find()->where(['status'=> 0])->count();
            $mails = $this->view->params['mails'];

            return parent::beforeAction($action); // TODO: Change the autogenerated stub
        }
    }