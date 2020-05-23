<?php

    use app\assets\AdminAsset;
    use app\widgets\Alert;
    use yii\helpers\Html;
    use yii\widgets\Breadcrumbs;
    use yii\helpers\Url;

    AdminAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="<?= Yii::$app->language ?>">
<head>
	<base href="/adminlte/">
	<meta charset="<?= Yii::$app->charset ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <?php $this->registerCsrfMetaTags() ?>
	<title><?= Html::encode($this->title) ?></title>
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <?php $this->head() ?>
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>

<body class="hold-transition skin-blue sidebar-mini">
<?php $this->beginBody() ?>
<div class="wrapper">

	<!-- Main Header -->
	<header class="main-header">

		<!-- Logo -->
		<a href="<?= \yii\helpers\Url::home() ?>" class="logo" target="_blank">
			<!-- mini logo for sidebar mini 50x50 pixels -->
			<span class="logo-mini"><i class="glyphicon glyphicon-home"></i></span>
			<!-- logo for regular state and mobile devices -->
			<span class="logo-lg">На сайт</span>
		</a>

		<!-- Header Navbar -->
		<nav class="navbar navbar-static-top" role="navigation">
			<!-- Sidebar toggle button-->
			<a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
				<span class="sr-only">Toggle navigation</span>
			</a>
			<!-- Navbar Right Menu -->
            <?php $mails = $this->params['mails'];
                $countMails = count($mails) ?>
			<div class="navbar-custom-menu">
				<ul class="nav navbar-nav">
					<li class="dropdown messages-menu">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							<i class="fa fa-envelope-o"></i>
							<span class="label label-success"><?= $countMails ?></span>
						</a>
						<ul class="dropdown-menu">
							<li class="header" style="text-align: center">У Вас <?php echo $countMails;
                                    if ( $countMails >= 2 || empty($countMails) ) {
                                        echo ' сообщений';
                                    } else {
                                        echo ' сообщение';
                                    } ?>

								<ul class="menu">
                                    <?php foreach ( $mails as $mail ): ?>
										<li><!-- start message -->
                                            <?php $block = "<div class='pull-left'>
											<img src='dist/img/avatar5.png' class='img-circle' alt='User Image' >
										</div>
										<h4>
											$mail->name 
										</h4>
										<p> $mail->message </p>"; ?>
                                            <?= Html::a($block, ['mail/view', 'id' => $mail->id]) ?>
										</li>
										<!-- end message -->
                                    <?php endforeach; ?>

								</ul>

							</li>
							<li class="footer"><a href="<?= Url::to(['mail/index']) ?>">Посмотреть</a></li>
						</ul>
					</li>

					<!-- User Account Menu -->
					<li class="dropdown user user-menu">
						<!-- Menu Toggle Button -->
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							<!-- The user image in the navbar-->
                            <?= Html::img("dist/img/" . Yii::$app->user->identity->avatar, ['class' => 'user-image',
                                                                                            'alt'   => 'User Image']) ?>

							<!-- hidden-xs hides the username on small devices so only the image appears. -->
							<span class="hidden-xs"><?= Yii::$app->user->identity->username ?></span>
						</a>
						<ul class="dropdown-menu">
							<!-- The user image in the menu -->
							<li class="user-header">
                                <?= Html::img("dist/img/" . Yii::$app->user->identity->avatar, ['class' => 'img-circle',
                                                                                                'alt'   => 'User Image']) ?>

							</li>

							<!-- Menu Footer-->
							<li class="user-footer">

								<div class="pull-right">
									<a href="<?= \yii\helpers\Url::to(['auth/logout']) ?>"
									   class="btn btn-default btn-flat">Выйти</a>
								</div>
							</li>
						</ul>
					</li>
					<!-- Control Sidebar Toggle Button -->
					<!--<li>
						<a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
					</li>-->
				</ul>
			</div>
		</nav>
	</header>
	<!-- Left side column. contains the logo and sidebar -->

    <?= $this->render('/layouts/inc/sidebar') ?>

	<!-- Content Wrapper. Contains page content -->
	<div class="content-wrapper">
		<!-- Content Header (Page header) -->
		<section class="content-header">
			<h1>
                <?= $this->title ?>

			</h1>

            <?= Breadcrumbs::widget([
                'tag'          => 'ol',
                'homeLink'     => ['label' => '<i class="fa fa-dashboard"></i>Главная', 'url' => '/admin/'],
                'links'        => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
                'encodeLabels' => false,
            ]); ?>

            <?= Alert::widget() ?>
		</section>

		<!-- Main content -->
		<section class="content container-fluid">

            <?= $content ?>

		</section>
		<!-- /.content -->
	</div>
	<!-- /.content-wrapper -->

	<!-- Main Footer -->
	<footer class="main-footer">
		<!-- To the right -->
		<div class="pull-right hidden-xs">
			Anything you want
		</div>
		<!-- Default to the left -->
		<strong>Copyright &copy; 2020 <a href="<?= \yii\helpers\Url::home() ?>">MAX-авто</a>.</strong> All rights reserved.
	</footer>

<!-- ./wrapper -->

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
