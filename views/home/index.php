<?php

    use yii\helpers\Url;
    use yii\helpers\Html;

?>
<div class="index row lg-grid-12 md-grid-12 sm-grid-12 xs-grid-12 padded-inner-sides">

	<div class="slider slider--index sm-hidden xs-hidden">
		<div class="slider-container owl-carousel js-slider--index">
            <?php if ( !empty($slides) ): ?>

                <?php foreach ( $slides as $slide ): ?>

                    <?php $text = "
						<p class='lg-grid-6 md-grid-6 sm-grid-6 xs-grid-6 padded-inner-sides'> 
						<img class='owl-lazy' src='{$slide->image_1}' alt='' style='width:300px; margin:0 auto;' data-src='$slide->image_1'>
						</p>
						<p class='lg-grid-6 md-grid-6 sm-grid-6 xs-grid-6 padded-inner-sides'>
							<span class='slide-index slide-title'>$slide->title</span>
							<span class='slide-index slide-subtitle'>Артикул: $slide->article</span>
							<span class='slide-index slide-sale'>Акция! -$slide->sale%</span>
							<span class='slide-index slide-price'>$slide->price руб.</span>
							</p>"; ?>

                    <?= Html::a($text, ['product/view', 'id' => $slide->id], ['class' => 'slider-image _owl-lazy']) ?>

                <?php endforeach; ?>

            <?php else: ?>

                <?php if ( !empty($slidesDefault) ): ?>

                    <?php foreach ( $slidesDefault as $item ): ?>

                        <?php $textDefault = "<img class='owl-lazy' style='max-height: 360px; width: auto; margin: 0 auto;'
						 data-src=' $item->image'
						 alt=''/>"; ?>
                        <?= Html::a($textDefault, ['/'], ['class'    => 'slider-image _owl-lazy',
                                                          'data-src' => $item->image]) ?>
                    <?php endforeach; ?>

                <?php else: ?>

                    <?php $textDefault = "<img class='owl-lazy' style='max-height: 360px; width: auto; margin: 0 auto;'
						 data-src='/images/default/no-image.png'
						 alt=''/>"; ?>
                    <?= Html::a($textDefault, ['/'], ['class'    => 'slider-image _owl-lazy',
                                                      'data-src' => '/images/default/no-image.png']) ?>
                <?php endif; ?>

            <?php endif; ?>
		</div>
	</div>

	<div class="tabs tabs--index">

		<ul class="tabs-controls tabs-controls--horizontal">
            <?php foreach ( $categories as $id => $category ) : ?>

				<li class="tabs-node mc-grid-12
					<?php if ( $id == $category->title ) echo "tabs-node--active" ?>">
                    <?= $category->title ?>
				</li>
            <?php endforeach; ?>

		</ul>


		<div id="frontpage" class="tabs-content tabs-content--active">

			<div class="collection-product_list grid-row-inner grid-inline">
                <?php if ( !empty($products) ): ?>
                    <?php foreach ( $products as $product ): ?>

						<div class="lg-grid-3 md-grid-4 xs-grid-6 mc-grid-12
									padded-inner">
							<div class="product_preview">
                                <?php if ( $product->sale ) : ?>
									<div class="product_preview-status product_preview-status--sale">
                                        <?= $product->discount ?>%
									</div>
                                <?php endif; ?>
								<div class="product_preview-preview ">
									<a href="<?= Url::to(['product/view', 'id' => $product->id]) ?>"
									   class="product_preview-image image-square"
									   title="<?= $product->title ?>">

                                        <?= Html::img("@web/{$product->image_1}", ['title' => $product->title]) ?>
									</a>
								</div>

								<form action="home/index" class="product_preview-form row">

									<div class="product_preview-prices prices lg-grid-12">
										<div class="prices-current">
                                            <?= $product->price ?> руб
										</div>
									</div>

									<input type="hidden" name="product_title" value="<?= $product->title ?>">
									<input type="hidden" name="product_article" value="<?= $product->article ?>">


									<button class="product-quick_checkout product_preview-button button button--buy lg-grid-12 js-buy"
											title="<?= $product->title ?>">
										Быстрый заказ
									</button>
								</form>

								<div class="product_preview-title">
									<a href="<?= Url::to(['product/view', 'id' => $product->id]) ?>"
									   class="product_preview-link"
									   title="<?= $product->title ?>">
                                        <?= $product->title ?>
									</a>
								</div>
							</div>

						</div>
                    <?php endforeach; ?>
                <?php else: ?>
					<div class="lg-grid-3 md-grid-4 xs-grid-6 mc-grid-12 padded-inner">
						В этой категории еще нет товаров
					</div>
                <?php endif; ?>
			</div>


			<!--	Pagination-->
			<div class="row">
				<div class="xs-grid-12 lg-fr xs-center">

					<div class="sm-center xs-center">
                        <?= \yii\widgets\LinkPager::widget(['pagination'           => $pages,
                                                            'nextPageLabel'        => '<i class="fa fa-angle-right"></i>',
                                                            'prevPageLabel'        => '<i class="fa fa-angle-left"></i>',
                                                            'nextPageCssClass'     => 'pagination-node pagination-node--link',
                                                            'prevPageCssClass'     => 'pagination-node pagination-node--link',
                                                            'options'              => [
                                                                'class' => 'pagination pagination--horizontal',
                                                            ],
                                                            'linkContainerOptions' => [
                                                                'class' => 'pagination-page',
                                                            ],
                                                            'linkOptions'          => [
                                                                'class' => 'pagination-node pagination-node--link'
                                                            ]
                        ]) ?>
					</div>

				</div>
			</div>

		</div>

		<div id="hits" class="tabs-content">

			<div class="collection-product_list grid-row-inner grid-inline">
                <?php if ( !empty($hits) ): ?>
                    <?php foreach ( $hits as $hit ): ?>
						<div class="lg-grid-3 md-grid-4 xs-grid-6 mc-grid-12
									padded-inner">
							<div class="product_preview">
                                <?php if ( $hit->sale ) : ?>
									<div class="product_preview-status product_preview-status--sale">
                                        <?= $hit->discount ?>%
									</div>
                                <?php endif; ?>
								<div class="product_preview-preview ">
									<a href="<?= Url::to(['product/view', 'id' => $hit->id]) ?>"
									   class="product_preview-image image-square"
									   title="<?= $hit->title ?>">
                                        <?= Html::img("@web/products/{$hit->image_1}", ['title' => $hit->title]) ?>
									</a>
								</div>

								<form action="/cart_items" class="product_preview-form row">

									<div class="product_preview-prices prices lg-grid-12">
										<div class="prices-current">
                                            <?= $hit->price ?> руб
										</div>
									</div>

									<input type="hidden" name="variant_id" value="85226247">


									<p class="product-quick_checkout product_preview-button button button--buy lg-grid-12 js-buy"
									   data-quick-checkout="" title="<?= $hit->title ?>">
										Быстрый заказ
									</p>

								</form>

								<div class="product_preview-title">
									<a href="<?= Url::to(['product/view', 'id' => $hit->id]) ?>"
									   class="product_preview-link"
									   title="<?= $hit->title ?>">
                                        <?= $hit->title ?>
									</a>
								</div>
							</div>

						</div>
                    <?php endforeach; ?>
                <?php else: ?>
					<div class="lg-grid-3 md-grid-4 xs-grid-6 mc-grid-12 padded-inner">
						В этой категории еще нет товаров
					</div>
                <?php endif; ?>
			</div>

			<div class="padded-top right">
				<a href="<?= Url::to(['category/view', 'id' => 2]) ?>" class="button mc-grid-12">
					Все товары
				</a>
			</div>

		</div>

		<div id="popular" class="tabs-content">

			<div class="collection-product_list grid-row-inner grid-inline">
                <?php if ( !empty($offers) ): ?>

                    <?php foreach ( $offers as $offer ): ?>
						<div class="lg-grid-3 md-grid-4 xs-grid-6 mc-grid-12
									padded-inner">
							<div class="product_preview">
                                <?php if ( $offer->sale ) : ?>
									<div class="product_preview-status product_preview-status--sale">
                                        <?= $offer->discount ?>%
									</div>
                                <?php endif; ?>
								<div class="product_preview-preview ">
									<a href="<?= Url::to(['product/view', 'id' => $offer->id]) ?>"
									   class="product_preview-image image-square"
									   title="<?= $offer->title ?>">
                                        <?= Html::img("@web/products/{$offer->image_1}", ['title' => $offer->title]) ?>
									</a>
								</div>

								<form action="/cart_items" class="product_preview-form row">

									<div class="product_preview-prices prices lg-grid-12">
										<div class="prices-current">
                                            <?= $offer->price ?> руб
										</div>
									</div>

									<input type="hidden" name="variant_id" value="85226247">

									<p class="product-quick_checkout product_preview-button button button--buy lg-grid-12 js-buy"
									   data-quick-checkout="" title="<?= $offer->title ?>">
										Быстрый заказ
									</p>

								</form>

								<div class="product_preview-title">
									<a href="<?= Url::to(['product/view', 'id' => $offer->id]) ?>"
									   class="product_preview-link"
									   title="<?= $offer->title ?>">
                                        <?= $offer->title ?>
									</a>
								</div>
							</div>

						</div>
                    <?php endforeach; ?>
                <?php else: ?>
					<div class="lg-grid-3 md-grid-4 xs-grid-6 mc-grid-12 padded-inner">
						В этой категории еще нет товаров
					</div>
                <?php endif; ?>
			</div>

			<div class="padded-top right">
				<a href="<?= Url::to(['category/view', 'id' => 3]) ?>" class="button mc-grid-12">
					Все товары
				</a>
			</div>
		</div>


		<div class="index-content">

			<h1 class="index-title content-title">Главная страница</h1>

			<div class="page-content editor">
				<p>Добро пожаловать в интернет-магазин замечательных товаров!</p>
				<p>Мы с радостью принимаем и обслуживаем заказы 7 дней в неделю с 10 до 18 по московскому
					времени.
					Доставка возможна как по Москве, так и в регионы.</p>
				<p>Сделайте заказ через сайт и мы Вам перезвоним для согласования времени доставки заказа.</p>
				<p><em><br/></em></p>
				<p><em>Каталог наполнен несколькими товарами для демонстрации возможностей платформы <a
								href="http://www.insales.ru">InSales</a>. Изменить структуру, удалить
						демонстрационные
						товары и </em><em>добавить свои вы можете в разделе </em><em>Товары -&gt; Каталог на
						сайте.</em>
				</p>
				<p><em>Для перехода в административный раздел (бэк-офис) интернет-магазина нажмите на ссылку <a
								href="/admin/login">Вход с паролем</a> внизу страницы.<br/></em></p>
				<p><em>Отредактировать эту страницу Вы можете в разделе Сайт-&gt;Меню и страницы. Сменить дизайн
						магазина Вы можете в разделе Сайт -&gt; Дизайн</em></p>
			</div>
		</div>

	</div>

</div>
