<?php
use yii\helpers\Url;
$this->title ='Статистика';
$this->params['breadcrumbs'][]= $this->title;

?>



<div class="row">
    <div class="col-lg-3 col-xs-6">
        <!-- small box -->
        <div class="small-box bg-aqua">
            <div class="inner">
                <h3><?= $products ?></h3>

                <p>Товаров</p>
            </div>
            <div class="icon">
                <i class="ion ion-bag"></i>
            </div>
            <a href="<?= Url::to(['product/index']) ?>" class="small-box-footer">К списку товаров <i class="fa fa-arrow-circle-right"></i></a>
        </div>
    </div>

	<div class="col-lg-3 col-xs-6">
		<!-- small box -->
		<div class="small-box bg-green">
			<div class="inner">
				<h3><?= $blogs ?></h3>

				<p><?php if ($blogs >= 2 && $blogs <10 || empty($blogs) ) {echo ' Поста'; }else {echo ' Постов';}?></p>
			</div>
			<div class="icon">
				<i class="fa fa-newspaper-o"></i>
			</div>
			<a href="<?= Url::to(['blog/index']) ?>" class="small-box-footer">К списку постов <i class="fa fa-arrow-circle-right"></i>
			</a>
		</div>
	</div>

	<?php $mails = $this->params['mails'] ?>
	<div class="col-lg-3 col-xs-6">
		<!-- small box -->
		<div class="small-box bg-yellow">
			<div class="inner">
				<h3><?= $mails ?></h3>

				<p>E-mail клиентов</p>
			</div>
			<div class="icon">
				<i class="ion ion-person-add"></i>
			</div>
			<a href="<?= Url::to(['mail/index']) ?>" class="small-box-footer">
				К списку писем <i class="fa fa-arrow-circle-right"></i>
			</a>
		</div>
	</div>


</div>


<div class="row">
	<div class="col-lg-6 col-xs-6">
	<div class="box box-primary">

		<div class="box-header with-border">
			<h3 class="box-title">Контактная информация</h3>

			<div class="box-tools pull-right">
				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
				</button>
				<!--<button type="button" class="btn btn-box-tool" data-widget="remove" disabled><i class="fa fa-times"></i></button>-->
			</div>
		</div>
		<!-- /.box-header -->
		<div class="box-body" style="">
			<ul class="products-list product-list-in-box">
				<li class="item">
					<div class="product-info" style="margin-left: 0">
						<a href="<?= Url::to(['info/index']) ?>" class="product-title">Контакты
							</a>
						<span class="product-description">
                          Телефоны, email, адрес, время работы
                        </span>
					</div>
				</li>
				<!-- /.item -->
				<li class="item">
					<div class="product-info" style="margin-left: 0">
						<a href="<?= Url::to(['delivery/index']) ?>" class="product-title">Доставка и оплата
						</a>
						<span class="product-description">
                          Раздел "Доставка и оплата"
                        </span>
					</div>
				</li>
				<!-- /.item -->
				<li class="item">
					<div class="product-info" style="margin-left: 0">
						<a href="<?= Url::to(['shop/index']) ?>" class="product-title">О магазине
						</a>
						<span class="product-description">
                          Раздел "О магазине"
                        </span>
					</div>
				</li>
				<!-- /.item -->
			</ul>
		</div>
		<!-- /.box-body -->
		<!--<div class="box-footer text-center" style="">
			<a href="javascript:void(0)" class="uppercase">View All Products</a>
		</div>-->
		<!-- /.box-footer -->
	</div>
	</div>
</div>



