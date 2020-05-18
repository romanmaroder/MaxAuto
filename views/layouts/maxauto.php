<?php

    use app\assets\AppAsset;
    use yii\helpers\Html;
    use yii\helpers\Url;
    use app\components\ModalWidget;

    AppAsset::register($this);
?>
<?php $this->beginPage() ?>

	<!DOCTYPE html>
	<html lang="<?= Yii::$app->language ?>">

	<head>
		<meta charset="<?= Yii::$app->charset ?>">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php $this->registerCsrfMetaTags() ?>
		<title><?= Html::encode($this->title) ?></title>
        <?php $this->head() ?>
		<meta name="robots" content="index,follow"/>
		<meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE"/>

		<!--[if IE]>
		<script src="https://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
		<!--[if lt IE 9]>
		<script src="https://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
		<![endif]-->

		<meta property="og:title" content="MAX-Авто"/>
		<meta property="og:image" content=""/>
		<meta property="og:type" content="website"/>
		<meta property="og:url" content=""/>



	</head>

	<body class="adaptive">
    <?php $this->beginBody() ?>
	<section class="section--content">
		<header>
			<div class="section--top_panel sm-grid-12 xs-grid-12 lg-hidden md-hidden right">
<!--				Mobile-menu-->
				<div class="wrap row padded-vertical padded-inner-sides">
					<div class="lg-hidden lg-grid-9 sm-grid-8 xs-grid-2">

						<div class="top_menu">

							<ul class="menu menu--top menu--horizontal lg-hidden md-hidden">
								<li class="menu-node menu-node--top">
									<button type="button" class="menu-link menu-toggler js-panel-link is-active"
											data-params="target: '.js-panel--menu'">
										<i class="fa fa-bars"></i>
									</button>
								</li>
							</ul>
						</div>
					</div>

					<div class="sm-grid-4 xs-grid-10 lg-hidden md-hidden right">

						<form action="<?= Url::to(['category/search']) ?>" method="GET" class="search_widget search_widget--top_line ">
							<input type="text" name="q" class="search_widget-field" value="" placeholder="Поиск"/>

							<button class="search_widget-submit button--invert" type="submit">
								<i class="fa fa-search"></i>
							</button>
						</form>

					</div>

					<div class="sm-grid-2 mc-grid-3 fr right sm-hidden xs-hidden">

					</div>
				</div>
			</div>

			<div class="section--header header">

				<div class="wrap row padded-inner">

					<div class="grid-inline grid-inline-middle">

						<div class="lg-grid-9 sm-grid-12 sm-center grid-inline grid-inline-middle sm-padded-inner-bottom">
							<div class="mc-grid-12 xs-padded-inner-bottom">
								<a href="<?= \yii\helpers\Url::home() ?>" class="logo">

                                    <?= Html::img('@web/img/logo.svg', ['class' => 'logo', 'alt' => 'MAX-Авто']) ?>
								</a>
							</div>

							<div class="lg-grid-6 mc-grid-12 left mc-center lg-padded-inner-left mc-padded-zero xs-hidden">

								<div class="editor lg-left mc-center">
									<p><a href="https://goo.gl/maps/7Yp6P1c5RL3jYM94A" target="_blank">
									<p>Покровский р-к,магазин №96</p>
									Донецк, Красногвардейский проспект</a>
									</p>
								</div>
							</div>
						</div>

						<div class="lg-grid-3 sm-grid-12 lg-right sm-center">

							<div class="contacts editor">
								<p>
									<span>
										<i class="fa fa-phone" aria-hidden="true"></i>
 									</span>
									<a href="tel:+38(066)1963651">+3 8(066)-196-36-51</a>
								</p>
								<p>
									<span>
										<i class="fa fa-phone" aria-hidden="true"></i>
 									</span>
									<a href="tel:+38(071)3632460">+38(071)-363-24-60</a>
								</p>
								<p class="text">
									<i class="fa fa-clock-o" aria-hidden="true"></i>
									c 10:00 до 19:00
								</p>
							</div>

						</div>

					</div>
				</div>

                <?= $this->render('//layouts/inc/menu') ?>


			</div>

		</header>
		<div class="content-container wrap row">

            <?= $content ?>

		</div>
	</section>

	<footer>
		<div class="section--footer_menus padded-inner-vertical">
			<div class="wrap row">

				<div class="footer_block footer_hr lg-grid-4 sm-grid-4 xs-grid-12 mc-grid-12 padded-inner sm-center">
					<ul class="footer_block-content menu menu--footer menu--vertical">

						<li class="menu-node menu-node--footer">
							<a href="/page/blog.html" class="menu-link">
								F.A.Q.
							</a>
						</li>
						<li class="menu-node menu-node--footer">
							<a href="/page/dostavka-i-oplata.html"
							   class="menu-link">
								Доставка и оплата
							</a>
						</li>

						<li class="menu-node menu-node--footer">
							<a href="/page/feedback.html" class="menu-link">
								Обратная связь
							</a>
						</li>

					</ul>
				</div>


				<div class="footer_block footer_hr lg-grid-4 sm-grid-4 xs-grid-12 mc-grid-12 padded-inner center sm-center mc-center">
					<div class="footer_block-content contacts editor">

						<div class="footer_sidebar_block-title">Мы в соцсетях</div>
						<div class="footer_sidebar_block--link">

							<a href="https://t.me/" class="footer_menu-link ">
								<i class="fa fa-telegram fa-2x" aria-hidden="true"></i>
							</a>
							<a href="https://viber.click/79380661963651" class="footer_menu-link">
								<i class="fa fa-viber fa-2x" aria-hidden="true"></i>
							</a>
							<a href="https://wapp.click/79+380661963651" class="footer_menu-link">
								<i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
							</a>
							<a href="#" class="footer_menu-link">
								<svg enable-background="new 0 0 50 50" id="vk" version="1.1" viewBox="0 0 50 50" xml:space="preserve" width="32px" height="32px" fill="#fff"
									 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M26,34c1,0,1-1.4,1-2c0-1,1-2,2-2s2.7,1.7,4,3c1,1,1,1,2,1s3,0,3,0s2-0.1,2-2c0-0.6-0.7-1.7-3-4  c-2-2-3-1,0-5c1.8-2.5,3.2-4.7,3-5.3c-0.2-0.6-5.3-1.6-6-0.7c-2,3-2.4,3.7-3,5c-1,2-1.1,3-2,3c-0.9,0-1-1.9-1-3c0-3.3,0.5-5.6-1-6  c0,0-2,0-3,0c-1.6,0-3,1-3,1s-1.2,1-1,1c0.3,0,2-0.4,2,1c0,1,0,2,0,2s0,4-1,4c-1,0-3-4-5-7c-0.8-1.2-1-1-2-1c-1.1,0-2,0-3,0  c-1,0-1.1,0.6-1,1c2,5,3.4,8.1,7.2,12.1c3.5,3.6,5.8,3.8,7.8,3.9C25.5,34,25,34,26,34z"
	/>
									<path d="M25,1C11.7,1,1,11.7,1,25s10.7,24,24,24s24-10.7,24-24S38.3,1,25,1z M25,44C14.5,44,6,35.5,6,25S14.5,6,25,6  s19,8.5,19,19S35.5,44,25,44z"
									/></svg>
							</a>
						</div>
					</div>

				</div>

				<div class="footer_block lg-grid-4 sm-grid-4 xs-grid-12 mc-grid-12 lg-fr md-fr padded-inner sm-center right mc-center">
					<div class="footer_block-content contacts editor">

						<ul class="footer_block-content menu menu--footer menu--vertical">

							<li class="menu-node menu-node--footer">
								<span><i class="fa fa-phone" aria-hidden="true"></i>

 </span>
								<a href="tel:+38(066)1963651" class="footer_menu-link">+3 8(066)-196-36-51</a>
							</li>
							<li class="menu-node menu-node--footer">
								<span><i class="fa fa-phone" aria-hidden="true"></i>
</span>
								<a href="tel:+38(071)3632460" class="footer_menu-link">+38(071)-363-24-60</a>
							</li>

							<li class="menu-node menu-node--footer">
								<span><i class="fa fa-envelope-o" aria-hidden="true"></i>
 </span>
								<a href="mailto:max_auto@bk.ru" class="footer_menu-link">max_auto@bk.ru</a>
							</li>

						</ul>

					</div>

					<!--				<div class="footer_block-content-->
					<!--                    lg-hidden md-hidden">-->
					<!--				</div>-->
				</div>
			</div>
		</div>

		<button class="button button--scroll_top js-scrollTop fa fa-angle-up sm-hidden xs-hidden"
				type="button"></button>

	</footer>
	<!--	Мобильное меню-->
    <?= $this->render('//layouts/inc/menu-mobile') ?>


	<!--Форма-->
    <?= ModalWidget::widget([]) ?>

    <?php $this->endBody() ?>
	</body>
	</html>
<?php $this->endPage() ?>