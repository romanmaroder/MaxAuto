<?php

    use yii\helpers\Html;
    use yii\grid\GridView;

    /* @var $this yii\web\View */
    /* @var $dataProvider yii\data\ActiveDataProvider */

    $this->title = 'Посты';
    $this->params['breadcrumbs'][] = $this->title;
?>


<div class="row">

	<div class="col-md-12">
		<div class="box">
			<div class="box-header with-border">
                <?= Html::a('Добавить статью', ['create'], ['class' => 'btn btn-success']) ?>
			</div>
			<div class="box-body">
				<div class="blog-index">

                    <?= GridView::widget([
                        'dataProvider' => $dataProvider,
                        'columns'      => [
                            //['class' => 'yii\grid\SerialColumn'],
                            'title',
                            'image',
                            'content:ntext',
                            ['attribute' => 'status',
                             'value'     => function ($data) {
                                 return $data->status ? "<span class='text-green'>Опубликовано</span>" : "<span class='text-red'>Неопубликовано</span>";
                             },
                             'format'    => 'html'],
                            [
                                'attribute' => 'created_at',
                                'format'    => ['datetime', 'php:d M / Y / H:i'],
                            ],
                            [
                                'attribute' => 'updated_at',
                                'format'    => ['datetime', 'php:d M / Y / H:i'],
                            ],

                            ['class' => 'yii\grid\ActionColumn'],
                        ],
                    ]); ?>


				</div>
			</div>

		</div>
	</div>

</div>


