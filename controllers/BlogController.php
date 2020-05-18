<?php


    namespace app\controllers;


    use app\models\Blog;

    class BlogController extends AppController
    {

        public function actionView($id)
        {

            $article = Blog::findOne($id);

            $this->setMeta($article->title);

            return $this->render('view',compact('article'));
        }
    }