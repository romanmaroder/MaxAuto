<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\modules\admin\models\Product */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="product-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'title')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'category_id')->dropDownList(['1'=>'Товар','2'=>'Хиты продаж','3'=>'Акции'])?>

    <?= $form->field($model, 'availability')->dropDownList(['Есть в наличии','Нет в наличии']) ?>

    <?= $form->field($model, 'hits')->dropDownList(['Нет','Да']) ?>

    <?= $form->field($model, 'sale')->dropDownList(['Нет','Да'])?>

    <?= $form->field($model, 'discount')->textInput() ?>

    <?= $form->field($model, 'price')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'article')->textInput() ?>

    <?= $form->field($model, 'material')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'production')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'engine_type')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'engine_size')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'equipment')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'applies')->textarea(['rows' => 6]) ?>



    <?= $form->field($model, 'image_1')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'image_2')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'image_3')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'image_4')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'description')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'keywords')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'content')->textarea(['rows' => 6]) ?>

    <div class="form-group">
        <?= Html::submitButton('Сохранить', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
