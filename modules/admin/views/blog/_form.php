<?php

    use yii\helpers\Html;
    use yii\widgets\ActiveForm;
    use mihaildev\ckeditor\CKEditor;
    use mihaildev\elfinder\ElFinder;
    use kartik\file\FileInput;

    mihaildev\elfinder\Assets::noConflict($this);

    /* @var $this yii\web\View */
    /* @var $model app\modules\admin\models\Blog */
    /* @var $form yii\widgets\ActiveForm */
?>

<div class="blog-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'title')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'file')->widget(FileInput::class, [
        'options' => ['accept' => 'image/*'],
        'pluginOptions' => [
            'showCaption' => false,
            'showUpload' => false,
        ]

    ]); ?>

    <?= $form->field($model, 'content')->widget(CKEditor::class, [
        'editorOptions' => ElFinder::ckeditorOptions('elfinder', ['preset' => 'standart','inline' => false])
        ]); ?>

    <?= $form->field($model, 'status')->dropDownList(['Неопубликовано', 'Опубликовать']) ?>

	<div class="form-group">
        <?= Html::submitButton('Сохранить', ['class' => 'btn btn-success']) ?>
	</div>

    <?php ActiveForm::end(); ?>

</div>
