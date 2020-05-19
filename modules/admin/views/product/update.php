<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\modules\admin\models\Product */

$this->title = 'Редактировать товар с артикулем: ' . $model->article;
$this->params['breadcrumbs'][] = ['label' => 'Товар', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->article, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Редактировать';
?>


<div class="row">

	<div class="col-md-12">
		<div class="box">

			<div class="box-body">
				<div class="product-update">

                    <?= $this->render('_form', [
                        'model' => $model,
                    ]) ?>

				</div>
			</div>

		</div>
	</div>

</div>




