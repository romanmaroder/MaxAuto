<?php


    namespace app\controllers;


    use app\models\Blog;
    use app\models\Category;
    use app\models\Product;
    use yii\data\Pagination;

    class HomeController extends AppController
    {


        public function actionIndex($id = 1)
        {
            $categories = Category::find()->all();

            $hits = Product::find()->where(['hits' => 1])->limit(4)->all();
            $offers = Product::find()->where(['sale' => 1])->limit(4)->all();

            $category = Category::findOne($id);
            $this->setMeta(\Yii::$app->name, $category->keywords, $category->description);

            $query = Product::find();
            $pages = new Pagination(['totalCount'    => $query->count(), 'pageSize' => 8, 'forcePageParam' => false,
                                     'pageSizeParam' => false]);
            $products = $query->offset($pages->offset)->limit($pages->limit)->all();

            return $this->render('index', compact('categories', 'products', 'hits', 'offers', 'pages'));

        }

        public function actionDelivery()
        {
            $this->setMeta('Доставка и оплата');
            return $this->render('delivery');
        }

        public function actionContact()
        {
            $this->setMeta('Контакты');
            return $this->render('contact');
        }

        public function actionShop()
        {
            $this->setMeta('О магазине');

            return $this->render('shop');
        }

        public function actionBlog()
        {
            $this->setMeta('Блог');

            $this->view->params['news'] = Blog::find()->all();
            $this->view->params['lastNews'] = Blog::find()->orderBy('id desc')->limit(3)->all();
            $news = $this->view->params['news'];
            $lastNews = $this->view->params['lastNews'];

            return $this->render('blog', compact('news','lastNews'));
        }

    }