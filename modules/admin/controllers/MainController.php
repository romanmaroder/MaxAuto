<?php


    namespace app\modules\admin\controllers;


    use app\modules\admin\models\Blog;
    use app\modules\admin\models\Mail;
    use app\modules\admin\models\Product;

    class MainController extends AppAdminController
    {
        public function actionIndex()
        {
            $products = Product::find()->count();
            $blogs = Blog::find()->count();

            $this->view->params['mails'] = Mail::find()->count();
            $mails = $this->view->params['mails'];
            
            return $this->render('index',compact('products','mails','blogs'));
        }
    }