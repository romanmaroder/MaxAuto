<?php

    use yii\helpers\Html;
    use yii\grid\GridView;

    /* @var $this yii\web\View */
    /* @var $searchModel app\modules\admin\models\ProductSearch */
    /* @var $dataProvider yii\data\ActiveDataProvider */

    $this->title = 'Список товаров';
    $this->params['breadcrumbs'][] = $this->title;
?>

<div class="row">

	<div class="col-md-12">
		<div class="box">
			<div class="box-header with-border">
                <?= Html::a('Добавить товар', ['create'], ['class' => 'btn btn-success']) ?>
                <?php // echo $this->render('_search', ['model' => $searchModel]); ?>
			</div>
			<div class="box-body">
                <?= GridView::widget([
                    'dataProvider' => $dataProvider,
                    'filterModel'  => $searchModel,
                    'columns'      => [
//            ['class' => 'yii\grid\SerialColumn'],

'id',
[
    'attribute' => 'category_id',
    'value'     => function ($data) {
        return $data->category->title;
    }
],
'title',
[
    'attribute' => 'hits',
    'value'     => function ($data) {
        return $data->hits ? 'Хит продаж' : '-';
    }
],
[
    'attribute' => 'sale',
    'value'     => function ($data) {
        return $data->sale ? 'Акция' : '-';
    }
],

//'article',
//'material',
//'production',
//'engine_type',
//'engine_size',
//'equipment:ntext',
//'applies:ntext',
'discount',
'price',

//			'availability',
[
    'attribute' => 'availability',
    'value'     => function ($data) {
        return $data->availability ? 'Есть в наличии' : 'Нет в наличии';
    }
],


//'image_1',
//'image_2',
//'image_3',
//'image_4',
//'description',
//'keywords',
//'content:ntext',

['class' => 'yii\grid\ActionColumn'],
                    ],
                ]); ?>
			</div>
		</div>
	</div>

</div>






