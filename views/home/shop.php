<?php

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
        <p>Наш коллектив - это команда молодых профессионалов, постоянно изучающая потребности наших клиентов.<br>- В своей работе мы стараемся максимально учитывать Ваши запросы, обеспечивая высокий уровень сервиса и оптимальный набор услуг.<br>- На сегодняшний день мы предлагаем покупателям полный ассортимент уникальных тюнинг аксессуаров для авто из США по уникальным ценам.</p>
    </div>


</div>

