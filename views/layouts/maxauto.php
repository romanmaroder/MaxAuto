<?php

    use app\assets\AppAsset;
    use yii\helpers\Html;

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
				<div class="wrap row padded-vertical padded-inner-sides">
					<div class="lg-hidden lg-grid-9 sm-grid-8 xs-grid-2">

						<div class="top_menu">
							<ul class="menu menu--top menu--horizontal menu--one_line sm-hidden xs-hidden js-menu--top">
								<li class="menu-node menu-node--top">
									<a href="/blogs/blog" class="menu-link">
										Статьи
									</a>
								</li>

								<li class="menu-node menu-node--top">
									<a href="/page/delivery"
									   class="menu-link">
										Доставка
									</a>
								</li>

								<li class="menu-node menu-node--top">
									<a href="/page/feedback"
									   class="menu-link">
										Обратная связь
									</a>
								</li>
							</ul>

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

						<form action="/search" method="get" class="search_widget search_widget--top_line ">
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
								<p><a href="tel:+38(066)1963651">+3 8(066)-196-36-51</a></p>
								<p><a href="tel:+38(071)3632460">+38(071)-363-24-60</a></p>
								<!--							<p><a href="mailto:max_auto@bk.ru" class="tel">max_auto@bk.ru</a></p>-->
								<p class="text">c 10:00 до 19:00</p>
							</div>

						</div>

					</div>
				</div>

				<div class="wrap row padded-inner-top padded-sides sm-padded-zero-top">

					<div class="section--main_menu row grid-inline padded">

						<div class="lg-grid-9 sm-grid-12">

							<div class="grid-row xs-hidden">

								<ul class="menu menu--main menu--main_lvl_1 menu--horizontal menu--one_line js-menu--main">

									<li class="menu-node menu-node--main_lvl_1">

										<a href="/page/blog.html" class="menu-link">
											F.A.Q.
										</a>

									</li>

									<li class="menu-node menu-node--main_lvl_1">

										<a href="/page/o-magazine.html" class="menu-link">
											О магазине
										</a>

									</li>

									<li class="menu-node menu-node--main_lvl_1">

										<a href="/page/kontakty.html" class="menu-link">
											Контакты
										</a>

									</li>

									<li class="menu-node menu-node--main_lvl_1">

										<a href="/page/dostavka-i-oplata.html" class="menu-link">
											Доставка и оплата
										</a>

									</li>

									<li class="menu-node menu-node--main_lvl_1 menu-node--current">

										<a href="/" class="menu-link menu-link--current">
											Каталог
										</a>

									</li>
								</ul>
							</div>

						</div>

						<div class="lg-grid-3 sm-hidden xs-hidden right">

							<form action="/search" method="get" class="search_widget search_widget--header ">

								<input type="text" name="q" class="search_widget-field js-ajax_search-input" value=""
									   placeholder="Поиск"/>

								<button type="submit" class="search_widget-submit button--invert">
									<i class="fa fa-search"></i>
								</button>

								<!--<div class="ajax_search-wrapper js-ajax_search-wrapper"></div>-->

							</form>

						</div>

					</div>

				</div>

			</div>

		</header>
		<div class="content-container wrap row">

            <?= $content ?>

		</div>
	</section>

	<footer>
		<div class="section--footer_menus
              padded-inner-vertical">
			<div class="wrap row">

				<div class="footer_block
                    lg-grid-4 sm-grid-6 mc-grid-12
                    padded-inner">
					<ul class="footer_block-content menu menu--footer menu--vertical">

						<li class="menu-node menu-node--footer">
							<a href="/page/delivery.html" class="menu-link">
								Доставка
							</a>
						</li>

						<li class="menu-node menu-node--footer">
							<a href="/page/feedback.html" class="menu-link">
								Обратная связь
							</a>
						</li>

					</ul>
				</div>

				<div class="footer_block lg-grid-4 sm-grid-6 mc-grid-12 center sm-right mc-center">
					<div class="footer_block-content">
					</div>
				</div>

				<div class="footer_block lg-grid-4 sm-grid-6 mc-grid-12 lg-fr md-fr padded-inner right mc-center">
					<div class="footer_block-content contacts editor">
						<p class="tel">+7 (495) 123 45 67</p>
						<p class="tel">sales@insales.ru</p>
						<p class="text">c 10:00 до 19:00</p>
					</div>

					<div class="footer_block-content
                    lg-hidden md-hidden">
					</div>
				</div>
			</div>
		</div>

		<button class="button button--scroll_top js-scrollTop fa fa-angle-up sm-hidden xs-hidden"
				type="button"></button>

	</footer>

	<div class="panel panel--menu js-panel--menu">

		<div class="panel_block">
			<h3 class="panel_block-title">
				Главное меню
			</h3>

			<div class="panel_block-content">

				<ul class="menu menu--main menu--mobile_panel menu--vertical">

					<li class="menu-node">
						<a href="/blogs/blog"
						   class="menu-link">
							Статьи
						</a>
					</li>

					<li class="menu-node">
						<a href="/page/o-magazine"
						   class="menu-link">
							О магазине
						</a>
					</li>

					<li class="menu-node">
						<a href="/page/kontakty"
						   class="menu-link">
							Контакты
						</a>
					</li>

					<li class="menu-node">
						<a href="/page/dostavka-i-oplata"
						   class="menu-link">
							Доставка и оплата
						</a>
					</li>

					<li class="menu-node menu-node--current">
						<a href="/"
						   class="menu-link menu-link--current">
							Каталог
						</a>
					</li>

				</ul>

			</div>
		</div>

		<div class="panel_block">
			<h3 class="panel_block-title">
				Каталог
			</h3>

			<div class="panel_block-content">


				<ul class="menu menu--collection menu--vertical menu--mobile_panel">

					<li class="menu-node menu-node--collection_lvl_1 js-menu-wrapper">

						<a href="/collection/vyhlopnaya-sistema-2"
						   class="menu-link">
							Выхлопная система
						</a>

					</li>

					<li class="menu-node menu-node--collection_lvl_1 js-menu-wrapper">

						<a href="/collection/tormoznye-diski-2"
						   class="menu-link">
							Тормозные диски
						</a>


						<span class="menu-marker menu-marker--parent menu-toggler button--toggler js-menu-toggler">
          <i class="fa fa-plus"></i>
        </span>

						<ul class="menu menu--vertical menu--collapse">

							<li class="menu-node menu-node--collection_lvl_2 js-menu-wrapper">


								<a href="/collection/kolodki-2"
								   class="menu-link menu-link">
									Колодки
								</a>


								<span class="menu-marker menu-marker--parent menu-toggler button--toggler js-menu-toggler">
                  <i class="fa fa-plus"></i>
                </span>
								<ul class="menu menu--vertical menu--collapse">

									<li class="menu-node menu-node--collection_lvl_3">
										<a href="/collection/tormoznye-kolodki-2"
										   class="menu-link menu-link">
											Тормозные колодки
										</a>
									</li>
								</ul>
							</li>
						</ul>

					</li>

					<li class="menu-node menu-node--collection_lvl_1 js-menu-wrapper"
					>


						<a href="/collection/stseplenie-2"
						   class="menu-link
                "
						>
							Сцепление
						</a>


					</li>

					<li class="menu-node menu-node--collection_lvl_1 js-menu-wrapper"
					>


						<a href="/collection/dvigatel-2"
						   class="menu-link
                "
						>
							Двигатель
						</a>


						<span class="menu-marker menu-marker--parent menu-toggler
                    button--toggler
                    js-menu-toggler">
          <i class="fa
                    fa-plus"
		  ></i>
        </span>

						<ul class="menu menu--vertical
                  menu--collapse"
						>

							<li class="menu-node menu-node--collection_lvl_2

                      js-menu-wrapper"
							>


								<a href="/collection/porshni-2"
								   class="menu-link menu-link
                        "
								>
									Поршни
								</a>


							</li>

							<li class="menu-node menu-node--collection_lvl_2

                      js-menu-wrapper"
							>


								<a href="/collection/shatuny-2"
								   class="menu-link menu-link
                        "
								>
									Шатуны
								</a>


							</li>

							<li class="menu-node menu-node--collection_lvl_2

                      js-menu-wrapper"
							>


								<a href="/collection/klapany-2"
								   class="menu-link menu-link
                        "
								>
									Клапаны
								</a>


							</li>

						</ul>

					</li>

					<li class="menu-node menu-node--collection_lvl_1 js-menu-wrapper"
					>


						<a href="/collection/podacha-topliva-2"
						   class="menu-link
                "
						>
							Подача топлива
						</a>


					</li>

					<li class="menu-node menu-node--collection_lvl_1 js-menu-wrapper"
					>


						<a href="/collection/datchiki-2"
						   class="menu-link
                "
						>
							Датчики
						</a>


					</li>

					<li class="menu-node menu-node--collection_lvl_1 js-menu-wrapper"
					>


						<a href="/collection/filtry-2"
						   class="menu-link
                "
						>
							Фильтры
						</a>


					</li>

				</ul>

			</div>
		</div>

		<div class="panel_block">
			<h3 class="panel_block-title">
				Полезные ссылки
			</h3>

			<div class="panel_block-content">
				<ul class="menu menu--vertical menu--mobile_panel">

					<li class="menu-node">
						<a href="/blogs/blog"
						   class="menu-link">
							Статьи
						</a>
					</li>

					<li class="menu-node">
						<a href="/page/delivery.html"
						   class="menu-link"
						>
							Доставка
						</a>
					</li>

					<li class="menu-node ">
						<a href="/page/feedback.html"
						   class="menu-link">
							Обратная связь
						</a>
					</li>

					<li class="menu-node">
						<a href="/page/delivery.html" class="menu-link">
							Доставка
						</a>
					</li>

					<li class="menu-node">
						<a href="/page/feedback.html" class="menu-link">
							Обратная связь
						</a>
					</li>

				</ul>
			</div>
		</div>
	</div>

    <?php $this->endBody() ?>
	</body>
	</html>
<?php $this->endPage() ?>