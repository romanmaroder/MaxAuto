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

            <span class="breadcrumbs-page">Доставка и оплата</span>

        </div>

    </div>

    <h1 class="page-title content-title">Доставка и оплата</h1>

    <div class="page-content editor">
        <p><strong>Наличный расчёт</strong></p>
        <p>Вы можете оплатить заказ наличными курьеру при его получении или в пункте самовывоза. <br>При получении товара обязательно проверьте комплектацию заказа, наличие гарантийного талона и чека.</p>
        <p><strong>Безналичный расчёт</strong></p>
        <p>После оформления заказа будет сформирован счёт на оплату, который Вы можете распечатать и оплатить. Денежные средства поступят на наш счёт в течение 2-3 рабочих дней после оплаты заказа. <br>Оплата заказов клиентами - юридическими лицами возможна только по безналичному расчёту. <br>Все необходимые для бухгалтерии документы (оригинал счёта на оплату, счёт-фактура, накладная) выдаются вместе с заказом при получении.</p>
    </div>


</div>
