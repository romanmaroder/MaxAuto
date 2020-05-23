<?php

    use yii\widgets\ActiveForm;
    use yii\widgets\Pjax;
    use yii\helpers\Html;
    use yii\helpers\Url;

?>
<?= $this->render('//layouts/inc/sidebar') ?>
<div class="page row lg-grid-9 md-grid-9 sm-grid-12 xs-grid-12 padded-inner-sides">

	<div class="row">
		<div class="breadcrumbs">
			<a href="<?= Url::home() ?>" class="breadcrumbs-page breadcrumbs-page--home">
				<i class="fa fa-home"></i>
			</a>
			<span class="breadcrumbs-pipe">
    			<i class="fa fa-angle-right"></i>
  			</span>
			<span class="breadcrumbs-page"><?= $this->title ?></span>
		</div>
	</div>

	<h1 class="page-title content-title"><?= $this->title ?></h1>

	<div class="page-content editor">

        <?php Pjax::begin() ?>
        <?php $form = ActiveForm::begin([
            'id'          => 'feedback_form',
            'options'     => [
                'data-pjax' => true,
            ],
            'fieldConfig' => [
                'template'     => " <p class='input input--required style='line-height: 1.8;'>{label}\n\n{input}\n{hint}\n{error}\n</p>",
                'labelOptions' => ['class' => 'input-label'],
                'inputOptions' => ['class' => 'input-field'],
                'errorOptions' => ['class' => 'help-block', 'style' => 'color:red;']
            ],
        ]) ?>
		<table border="0">
			<tbody>
			<tr>
				<td>
                    <?php if ( $answer ): ?>
						<div id="thanks" style="color:green;">Сообщение успешно отправлено</div>
                    <?php endif; ?>
                    <?= $form->field($model, 'message')->textarea(['id'    => 'feedback_content', 'cols' => 50,
                                                                   'rows'  => 8, 'style' => 'resize:vertical;',
                                                                   'value' => '']) ?>
                    <?= $form->field($model, 'email')->input('email', ['id' => 'feedback_from', 'value' => '']) ?>
                    <?= $form->field($model, 'phone')->hiddenInput(['value' => 0])->label(false) ?>
                    <?= $form->field($model, 'name')->hiddenInput(['value' => 'user'])->label(false) ?>
					<p class="notice notice--info">Ответ поступит на указанный e-mail.</p>
					<p>
                        <?= Html::submitButton('Отправить сообщение', ['class' => 'button button--action mc-grid-12 button--buy_invert',
                                                                       'id'    => 'feedback_commit']) ?>

					</p>
				</td>
			</tr>
			</tbody>
		</table>


        <?php ActiveForm::end() ?>
        <?php Pjax::end() ?>
	</div>


</div>
