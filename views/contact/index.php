<?php

    use yii\helpers\Url;

?>
<?= $this->render('//layouts/inc/sidebar') ?>

<div class="page row lg-grid-9 md-grid-9 sm-grid-12 xs-grid-12 padded-inner-sides">

    <div class="row">
        <div class="breadcrumbs">

            <a href="<?= Url::home() ?>"
               class="breadcrumbs-page breadcrumbs-page--home">
                <i class="fa fa-home"></i>
            </a>

            <span class="breadcrumbs-pipe">
    			<i class="fa fa-angle-right"></i>
  			</span>

            <span class="breadcrumbs-page">Контакты</span>

        </div>

    </div>


    <h1 class="page-title content-title">Контакты</h1>



    <div class="page-content editor">
		<span>Контактные телефоны: </span>
        <p class="tel"><a href="tel:+38(066)1963651">+3 8(066)-196-36-51</a></p>
        <p class="tel"><a href="tel:+38(071)3632460">+38(071)-363-24-60</a></p>
    </div>
	<br>
	<div class="page-content editor">
		<p>Адрес: г.Донецк, Красногвардейский проспект, Покровский р-к, магазин №96.
		<p class="text">График работы <span>c 10:00 до 19:00.</span></p>
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d543.9056072946345!2d37.86586602922123!3d48.011116598700866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e091d98d4438eb%3A0x820ff11cdf72145c!2z0LHQvtC60YHRiyDQv9C-0LrRgNC-0LLRgdC60L7Qs9C-INGA0YvQvdC60LAsINCa0YDQsNGB0L3QvtCz0LLQsNGA0LTQtdC50YHQutC40Lkg0L_RgNC-0YHQvy4sINCU0L7QvdC10YbQuiwg0JTQvtC90LXRhtC60LDRjyDQvtCx0LvQsNGB0YLRjCwgODMwMDA!5e1!3m2!1sru!2sua!4v1589399597184!5m2!1sru!2sua" width="100%" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
	</div>


</div>