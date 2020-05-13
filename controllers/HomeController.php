<?php


    namespace app\controllers;


    use app\models\Category;
    use app\models\Product;
    use yii\data\Pagination;

    class HomeController extends AppController
    {

        public function actionIndex($id = 1)
        {
            $categories = Category::find()->all();
            $hits = Product::find()->where(['hits' => 1])->limit(8)->all();
            $offers = Product::find()->where(['sale' => 1])->limit(8)->all();

            $category = Category::findOne($id); $this->setMeta("{$category->title} ::" . \Yii::$app->name, $category->keywords, $category->description);

            $query = Product::find();
            $pages = new Pagination(['totalCount'    => $query->count(), 'pageSize' => 8, 'forcePageParam' => false,
                                     'pageSizeParam' => false]);
            $products = $query->offset($pages->offset)->limit($pages->limit)->all();
            return $this->render('index', compact('categories', 'products', 'hits', 'offers','pages'));
        }
    }