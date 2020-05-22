<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\modules\admin\models\ProductSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="product-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?/*= $form->field($model, 'id') */?>

    <?/*= $form->field($model, 'category_id') */?>

    <?= $form->field($model, 'title') ?>

    <?= $form->field($model, 'article') ?>

    <?/*= $form->field($model, 'material') */?>

    <?php // echo $form->field($model, 'production') ?>

    <?php // echo $form->field($model, 'engine_type') ?>

    <?php // echo $form->field($model, 'engine_size') ?>

    <?php // echo $form->field($model, 'equipment') ?>

    <?php // echo $form->field($model, 'applies') ?>

    <?php // echo $form->field($model, 'price') ?>

    <?php // echo $form->field($model, 'availability') ?>

    <?php // echo $form->field($model, 'sale') ?>

    <?php // echo $form->field($model, 'discount') ?>

    <?php // echo $form->field($model, 'hits') ?>

    <?php // echo $form->field($model, 'image_1') ?>

    <?php // echo $form->field($model, 'image_2') ?>

    <?php // echo $form->field($model, 'image_3') ?>

    <?php // echo $form->field($model, 'image_4') ?>

    <?php // echo $form->field($model, 'description') ?>

    <?php // echo $form->field($model, 'keywords') ?>

    <?php // echo $form->field($model, 'content') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
