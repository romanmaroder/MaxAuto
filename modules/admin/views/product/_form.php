<?php

    use yii\helpers\Html;
    use yii\widgets\ActiveForm;
    use mihaildev\ckeditor\CKEditor;
    use mihaildev\elfinder\ElFinder;
    use kartik\file\FileInput;

    mihaildev\elfinder\Assets::noConflict($this);

    /* @var $this yii\web\View */
    /* @var $model app\modules\admin\models\Product */
    /* @var $form yii\widgets\ActiveForm */
?>

<div class="product-form">

    <?php $form = ActiveForm::begin(['options' => ['enctype' => 'multipart/form-data']]); ?>

    <?= $form->field($model, 'title')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'category_id')->dropDownList(['1' => 'Товар', '2' => 'Хиты продаж', '3' => 'Акции']) ?>

    <?= $form->field($model, 'availability')->dropDownList(['Есть в наличии', 'Нет в наличии']) ?>

    <?= $form->field($model, 'hits')->dropDownList(['Нет', 'Да']) ?>

    <?= $form->field($model, 'sale')->dropDownList(['Нет', 'Да']) ?>

    <?= $form->field($model, 'discount')->textInput() ?>

    <?= $form->field($model, 'price')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'article')->textInput() ?>

    <?= $form->field($model, 'material')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'production')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'engine_type')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'engine_size')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'equipment')->widget(CKEditor::class, [
        'editorOptions' => ElFinder::ckeditorOptions('elfinder',['preset' => 'basic','height'=>'auto']),
    ]); ?>

    <?= $form->field($model, 'applies')->widget(CKEditor::class, [
        'editorOptions' => ElFinder::ckeditorOptions('elfinder',['preset' => 'basic','height'=>'auto']),
    ]); ?>

	<?= $form->field($model, 'file_1')->widget(FileInput::class, [
        'options' => ['accept' => 'image/*'],
        'pluginOptions' => [
            'showCaption' => false,
            'showUpload' => false,
        ]

    ]); ?>

    <?= $form->field($model, 'file_2')->widget(FileInput::class, [
        'options' => ['accept' => 'image/*'],
		'pluginOptions' => [
            'showCaption' => false,
            'showUpload' => false,
        ]

    ]); ?>

    <?= $form->field($model, 'file_3')->widget(FileInput::class, [
        'options' => ['accept' => 'image/*'],
		'pluginOptions' => [
            'showCaption' => false,
            'showUpload' => false,
        ]

    ]); ?>
    <?= $form->field($model, 'file_4')->widget(FileInput::class, [
        'options' => ['accept' => 'image/*'],
		'pluginOptions' => [
            'showCaption' => false,
            'showUpload' => false,
        ]

    ]); ?>

    <?= $form->field($model, 'description')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'keywords')->textInput(['maxlength' => true]) ?>


    <?= $form->field($model, 'content')->widget(CKEditor::class, [
        'editorOptions' => ElFinder::ckeditorOptions('elfinder',['preset' => 'basic','height'=>'auto']),
    ]); ?>

	<div class="form-group">
        <?= Html::submitButton('Сохранить', ['class' => 'btn btn-success']) ?>
	</div>

    <?php ActiveForm::end(); ?>

</div>
