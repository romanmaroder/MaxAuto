<?php

    use yii\helpers\Url;

?>
<?= $this->render('//layouts/inc/sidebar') ?>
<?php $info= $this->params['info'] ?>
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


<?php if (!empty($text)): ?>
    <div class="page-content editor">
		<?php foreach ($text as $item): ?>
        <p><?= $item->content ?></p>
		<?php endforeach; ?>
    </div>
<?php else: ?>
	<div class="page-content editor">
			<p>Информацию о магазине Вы можете узнать у менеджера.</p>
			<p>Телефоны для справок: </p>
			<div class="contacts editor">
				<p>
				<span>
					<i class="fa fa-phone" aria-hidden="true"></i>
 				</span>
					<a href="tel:<?= $info->phone_1 ?>"><?= $info->phone_1 ?></a>
				</p>
				<p>
					<span>
						<i class="fa fa-phone" aria-hidden="true"></i>
					</span>
					<a href="tel:<?= $info->phone_2 ?>"><?= $info->phone_2 ?></a>
				</p>
			</div>
	</div>
<?php endif; ?>
</div>

