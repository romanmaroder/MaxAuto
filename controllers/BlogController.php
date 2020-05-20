<?php


    namespace app\controllers;


    use app\models\Blog;
    use yii\web\NotFoundHttpException;

    class BlogController extends AppController
    {

        public function actionView($id)
        {
            $article = Blog::findOne($id);
            $this->setMeta($article->title);

            $article->created_at;
            \Yii::$app->formatter->asDate( $article->created_at, 'php:F, Y');
            if ($article  == null){

                throw new NotFoundHttpException('Такого поста нет');
            }

            return $this->render('view',compact('article'));
        }
    }