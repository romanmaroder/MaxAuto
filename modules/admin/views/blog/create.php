<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\modules\admin\models\Blog */

$this->title = 'Добавить пост';
$this->params['breadcrumbs'][] = ['label' => 'Посты', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>


<div class="row">

	<div class="col-md-12">
		<div class="box">

			<div class="box-body">
				<div class="blog-create">

					<h1><?= Html::encode($this->title) ?></h1>

                    <?= $this->render('_form', [
                        'model' => $model,
                    ]) ?>

				</div>

			</div>
		</div>
	</div>

</div>

