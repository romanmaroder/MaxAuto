<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\modules\admin\models\Blog */

$this->title = $model->title;
$this->params['breadcrumbs'][] = ['label' => 'Пост', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>

<div class="row">

	<div class="col-md-12">
		<div class="box">
			<div class="box-header with-border">

                <?= Html::a('Редактировать', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
                <?= Html::a('Удалить', ['delete', 'id' => $model->id], [
                    'class' => 'btn btn-danger',
                    'data' => [
                        'confirm' => 'Are you sure you want to delete this item?',
                        'method' => 'post',
                    ],
                ]) ?>
			</div>
			<div class="box-body">
				<div class="blog-view">

                    <?= DetailView::widget([
                        'model' => $model,
                        'attributes' => [
                            //'id',
                            'title',
                            'image',
                            //'content:ntext',
                            [
                                'attribute'=>'content',
                                'format'=>'raw',
                            ],
                            //'created_at',
                            [
                                'attribute' => 'created_at',
                                'format'    => ['datetime', 'php:d M / Y / H:i '],
                            ],
                            [
                                'attribute' => 'updated_at',
                                'format'    => ['datetime', 'php:d M / Y / H:i'],
                            ],
							[
									'attribute'=>'status',
									'value'=> $model->status ? "<span class='text-green'>Опубликовано</span>" : "<span class='text-red'>Не опубликована</span>",
									'format'=>'html',
							]
                        ],
                    ]) ?>

				</div>

			</div>
		</div>
	</div>

</div>




