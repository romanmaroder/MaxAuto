<?php


    namespace app\controllers;


    use app\models\Product;
    use yii\web\NotFoundHttpException;

    class ProductController extends AppController
    {
        public function actionView($id)
        {
            $product = Product::findOne($id);

            $products = Product::find()->orderBy('RAND()')->limit(8)->all();

            if (empty ($product)) {
                 throw new NotFoundHttpException('Нет такого товара');
            }

            switch ($product->availability) {
                case 1:
                    $product->availability = 'Есть в наличие';
                    break;
                case 2:
                    $product->availability = 'Нет в наличие';
                    break;
                default:
                    $product->availability = 'Под заказ';
            }

            $this->setMeta("{$product->title} ::" . \Yii::$app->name, $product->keywords, $product->description);
            
            
            return $this->render('view', compact('product','products'));
        }
    }