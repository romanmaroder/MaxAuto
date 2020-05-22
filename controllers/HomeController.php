<?php


    namespace app\controllers;


    use app\models\Banner;
    use app\models\Blog;
    use app\models\Category;
    use app\models\Delivery;
    use app\models\Product;
    use app\models\Shop;
    use yii\data\Pagination;

    class HomeController extends AppController
    {


        public function actionIndex($id = 1)
        {
            $categories = Category::find()->all();

            $hits = Product::find()->where(['hits' => 1])->limit(4)->all();
            $offers = Product::find()->where(['sale' => 1])->limit(4)->all();

            $slides = Product::find()->where(['banner'=>1])->all();
            $slidesDefault = Banner::find()->all();

            $category = Category::findOne($id);
            $this->setMeta(\Yii::$app->name, $category->keywords, $category->description);

            $query = Product::find();
            $pages = new Pagination(['totalCount'    => $query->count(), 'pageSize' => 12, 'forcePageParam' => false,
                                     'pageSizeParam' => false]);
            $products = $query->offset($pages->offset)->limit($pages->limit)->all();

            return $this->render('index', compact('categories', 'products', 'hits', 'offers', 'pages','slides','slidesDefault'));

        }

        public function actionDelivery()
        {
            $this->setMeta('Доставка и оплата');

            $text = Delivery::find()->where(['status'=>1])->all();

            return $this->render('delivery',compact('text'));
        }

        public function actionContact()
        {
            $this->setMeta('Контакты');
            return $this->render('contact');
        }

        public function actionShop()
        {
            $this->setMeta('О магазине');

            $text = Shop::find()->where(['status'=>1])->all();

            return $this->render('shop',compact('text'));
        }

        public function actionBlog()
        {
            $this->setMeta('Блог');

            $this->view->params['news'] = Blog::find()->where(['status'=>1])->all();
            $news = $this->view->params['news'];

            $this->view->params['lastNews'] = Blog::find()->orderBy('id desc')->where(['status'=>1])->limit(3)->all();
            $lastNews = $this->view->params['lastNews'];

            return $this->render('blog', compact('news','lastNews'));
        }

    }