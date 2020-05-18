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
//'category_id',
'title',
//'article',
//'material',
//'production',
//'engine_type',
//'engine_size',
//'equipment:ntext',
//'applies:ntext',
'price',
'availability',
'sale',
'discount',
'hits',
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
			<!--<div class="box-footer clearfix">
				<ul class="pagination pagination-sm no-margin pull-right">
					<li><a href="#">«</a></li>
					<li><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">»</a></li>
				</ul>
			</div>-->
		</div>
	</div>

</div>






