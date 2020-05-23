<?php

    use yii\helpers\Html;
    use yii\widgets\DetailView;

    /* @var $this yii\web\View */
    /* @var $model app\modules\admin\models\Product */

    $this->title = $model->title;
    $this->params['breadcrumbs'][] = ['label' => 'Товар', 'url' => ['index']];
    $this->params['breadcrumbs'][] = $model->article;
    \yii\web\YiiAsset::register($this);
?>


<div class="row">
	<div class="col-md-12">
		<div class="box">
			<div class="box-header with-border">
                <?= Html::a('Редактировать', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
                <?= Html::a('Удалить', ['delete', 'id' => $model->id], [
                    'class' => 'btn btn-danger',
                    'data'  => [
                        'confirm' => 'Вы уверены,что хотите удалить этот товар?',
                        'method'  => 'post',
                    ],
                ]) ?>
			</div>
			<div class="box-body">
				<div class="product-view">

                    <?= DetailView::widget([
                        'model'      => $model,
                        'attributes' => [
                            'id',
                            'title',
                            [
                                'attribute' => 'category_id',
                                'value'     => $model->category->title,

                            ],

                            [
                                'attribute' => 'sale',
                                'value'     => $model->sale ? 'Акция' : '-',

                            ],

                            [
                                'attribute' => 'discount',
                                'value'     => $model->discount ? "{$model->discount} %" : '-',

                            ],
                            'price',
                            [
                                'attribute' => 'hits',
                                'value'     => $model->hits ? 'Хит продаж' : '-',

                            ],
                            'article',
                            'material',
                            'production',
                            'engine_type',
                            'engine_size',
                            [
                                'attribute' => 'equipment',
                                'format'    => 'html',
                            ],
                            [
                                'attribute' => 'applies',
                                'format'    => 'html',
                            ],

                            [
                                'attribute' => 'availability',
                                'value'     => $model->availability ? 'Есть в наличии' : 'Нет в наличии',

                            ],

                            [
                                'attribute' => 'image_1',
                                'value'     => "/{$model->image_1}",
                                'format'    => ['image', ['width' => '100']]
                            ],
                            [
                                'attribute' => 'image_2',
                                'value'     => "/{$model->image_2}",
                                'format'    => ['image', ['width' => '100']]
                            ],
                            [
                                'attribute' => 'image_3',
                                'value'     => "/{$model->image_3}",
                                'format'    => ['image', ['width' => '100']]
                            ],
                            [
                                'attribute' => 'image_4',
                                'value'     => "/{$model->image_4}",
                                'format'    => ['image', ['width' => '100']]
                            ],
                            [
                                'attribute' => 'banner',
                                'value'     => $model->banner ? "<span class='text-green'>Добавлено</span>" : "<span class='text-yellow'>Нет</span>",
                                'format'    => 'html'
                            ],
                            'description',
                            'keywords',
                            [
                                'attribute' => 'content',
                                'format'    => 'raw',
                            ],
                        ],
                    ]) ?>

				</div>
			</div>
		</div>
	</div>
</div>






