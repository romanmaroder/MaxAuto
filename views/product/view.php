<?php

    use yii\helpers\Url;
    use yii\helpers\Html;

?>
<div class="product row lg-grid-12 md-grid-12 sm-grid-12 xs-grid-12 padded-inner-sides">

	<div class="row">

		<div class="breadcrumbs">

			<a href="<?= Url::home() ?>" class="breadcrumbs-page breadcrumbs-page--home">
				<i class="fa fa-home"></i>
			</a>

			<span class="breadcrumbs-pipe">
    					<i class="fa fa-angle-right"></i>
  					</span>

			<span class="breadcrumbs-page"><?= $product->title ?></span>

		</div>

	</div>


	<h1 class="product-title content-title"><?= $product->title ?></h1>

	<div class="lg-grid-6 xs-grid-12 padded-inner-bottom lg-padded-right sm-padded-zero-right">

		<div class="product-gallery gallery">

			<div class="gallery-large_image sm-hidden xs-hidden">
				<a href="<?= Url::to(["@web/products/{$product->image_1}"]) ?>" alt="<?= $product->title ?>" id="MagicZoom"
				   class="MagicZoom"
				   data-options="hint:always;
				   textHoverZoomHint: Наведите для увеличения;
				    textClickZoomHint: Нажмите для увеличения;
				    textExpandHint: Полноэкранный просмотр;"
					<figure class="mz-figure mz-hover-zoom mz-ready">
                        <?= Html::img("@web/products/{$product->image_1}", ['style' => 'max-width: 480px; max-height: 480px;']) ?>

						<div class="mz-lens"
							 style="top: 0px; transform: translate(-10000px, -10000px); width: 384px; height: 384px;">

                            <?= Html::img("@web/products/{$product->image_1}", ['style' => 'position: absolute; top: 0px; left: 0px; width: 480px; height: 480px; transform: translate(-97px, -1px);']) ?>

						</div>
						<div class="mz-hint mz-hint-hidden"></div>
					</figure>
				</a>
			</div>

			<div class="slider slider--gallery">
				<ul class="gallery-preview_list gallery-preview_list--horizontal slider-container owl-carousel js-slider--gallery owl-loaded owl-drag">

					<li class="gallery-preview">

						<a href="<?= Url::to(["@web/products/{$product->image_1}"]) ?>"
						   class="gallery-image gallery-image--current image-square mz-thumb-selected mz-thumb"
						   alt="" title="" data-zoom-id="MagicZoom"

						   data-image="<?= Url::to(["@web/products/{$product->image_1}"]) ?>">

                            <?= Html::img("@web/products/{$product->image_1}", ['class' => 'sm-hidden xs-hidden']) ?>
							<?= Html::img("@web/products/{$product->image_1}", ['class' => 'js-product_gallery-preview_image lg-hidden md-hidden']) ?>

						</a>
					</li>

					<li class="gallery-preview">

						<a href="<?= Url::to(["@web/products/{$product->image_2}"]) ?>"
						   class="gallery-image gallery-image--current image-square mz-thumb-selected mz-thumb"
						   alt="" title="" data-zoom-id="MagicZoom"
						   data-image="<?= Url::to(["@web/products/{$product->image_2}"]) ?>">

                            <?= Html::img("@web/products/{$product->image_2}", ['class' => 'sm-hidden xs-hidden']) ?>
                            <?= Html::img("@web/products/{$product->image_2}", ['class' => 'js-product_gallery-preview_image lg-hidden md-hidden']) ?>

						</a>
					</li>

					<li class="gallery-preview">

						<a href="<?= Url::to(["@web/products/{$product->image_3}"]) ?>"
						   class="gallery-image gallery-image--current image-square mz-thumb-selected mz-thumb"
						   alt="" title="" data-zoom-id="MagicZoom"
						   data-image="<?= Url::to(["@web/products/{$product->image_3}"]) ?>">

                            <?= Html::img("@web/products/{$product->image_3}", ['class' => 'sm-hidden xs-hidden']) ?>
                            <?= Html::img("@web/products/{$product->image_3}", ['class' => 'js-product_gallery-preview_image lg-hidden md-hidden']) ?>

						</a>
					</li>

					<li class="gallery-preview">

						<a href="<?= Url::to(["@web/products/{$product->image_4}"]) ?>"
						   class="gallery-image gallery-image--current image-square mz-thumb-selected mz-thumb"
						   alt="" title="" data-zoom-id="MagicZoom"
						   data-image="<?= Url::to(["@web/products/{$product->image_4}"]) ?>">

                            <?= Html::img("@web/products/{$product->image_4}", ['class' => 'sm-hidden xs-hidden']) ?>
                            <?= Html::img("@web/products/{$product->image_4}", ['class' => 'js-product_gallery-preview_image lg-hidden md-hidden']) ?>

						</a>
					</li>

					<div class="owl-nav disabled">
						<button type="button" role="presentation" class="owl-prev"><i class="fa fa-angle-left"></i>
						</button>
						<button type="button" role="presentation" class="owl-next"><i class="fa fa-angle-right"></i>
						</button>
					</div>
					<div class="owl-dots disabled">
						<button role="button" class="owl-dot active"><span></span></button>
					</div>
				</ul>
			</div>
		</div>

	</div>


	<div class="product-info lg-grid-6 xs-grid-12 lg-padded-left sm-padded-zero-left padded-inner-bottom">

		<div class="product-presence">
			<h3 class="product-presence_field js-product-presence">
				<span class="product-presence_field-price">Цена: </span><?= $product->price ?> ₽.
			</h3>
		</div>

	</div>

	<div class="tabs lg-grid-6 xs-grid-12 lg-padded-left sm-padded-left padded-inner-bottom">
		<ul class="tabs-controls tabs-controls--horizontal">

			<li class="tabs-node tabs-node--active mc-grid-12" data-params="target: '#description'">
				Описание
			</li>


			<li class="tabs-node mc-grid-12" data-params="target: '#characteristics'">
				Характеристики
			</li>

			<li class="tabs-node mc-grid-12" data-params="target: '#characteristics'">
				Заказать
			</li>

		</ul>

		<!--Описание-->

		<div id="description" class="tabs-content tabs-content--active">

			<table class="product-properties lg-grid-12">
				<tbody>
				<tr>

					<td class="property-title lg-grid-3  xs-grid-4 mc-grid-12  padded-right padded-bottom mc-padded-zero-right mc-padded-top">
						Наличие:
					</td>

                    <?php if ( !empty($product->availability) ): ?>
						<td class="property-values lg-grid-9 xs-grid-8 mc-grid-12 padded-left padded-bottom mc-padded-zero-left">
							<span> <?= $product->availability ?></span>
						</td>
                    <?php else: ?>
						<td class="property-values lg-grid-9 xs-grid-8 mc-grid-12 padded-left padded-bottom mc-padded-zero-left">
							-
						</td>
                    <?php endif; ?>
				</tr>

				<tr>

					<td class="property-title lg-grid-3  xs-grid-4 mc-grid-12  padded-right padded-bottom mc-padded-zero-right mc-padded-top">
						Тип двигателя:
					</td>

                    <?php if ( !empty($product->engine_type) ): ?>
						<td class="property-values lg-grid-9 xs-grid-8 mc-grid-12 padded-left padded-bottom mc-padded-zero-left">
							<span> - <?= $product->engine_type ?></span>
						</td>
                    <?php else: ?>
						<td class="property-values lg-grid-9 xs-grid-8 mc-grid-12 padded-left padded-bottom mc-padded-zero-left">
							-
						</td>
                    <?php endif; ?>
				</tr>

				<tr>
					<td class="property-title lg-grid-3  xs-grid-4 mc-grid-12 padded-right padded-bottom mc-padded-zero-right mc-padded-top">
						Объем:
					</td>
                    <?php if ( !empty($product->engine_size) ): ?>
						<td class="property-values lg-grid-9 xs-grid-8 mc-grid-12 padded-left padded-bottom mc-padded-zero-left">
							<span> -<?= $product->engine_size ?></span>
						</td>
                    <?php else: ?>
						<td class="property-values lg-grid-9 xs-grid-8 mc-grid-12 padded-left padded-bottom mc-padded-zero-left">
							-
						</td>
                    <?php endif; ?>
				</tr>

				<tr>
					<td class="property-title lg-grid-3  xs-grid-4 mc-grid-12 padded-right padded-bottom mc-padded-zero-right mc-padded-top">
						Комплектация:
					</td>
                    <?php if ( $product->equipment ) : ?>
						<td class="property-values lg-grid-9 xs-grid-8 mc-grid-12 padded-left padded-bottom mc-padded-zero-left">
                            <?= $product->equipment ?>
						</td>
                    <?php else: ?>
						<td class="property-values lg-grid-9 xs-grid-8 mc-grid-12 padded-left padded-bottom mc-padded-zero-left">
							Уточните у менеджера
						</td>
                    <?php endif; ?>
				</tr>

				<tr>
					<td class="property-title lg-grid-3  xs-grid-4 mc-grid-12 padded-right padded-bottom mc-padded-zero-right mc-padded-top">
						Подходит:
					</td>
                    <?php if ( $product->applies ) : ?>
						<td class="property-values lg-grid-9 xs-grid-8 mc-grid-12 padded-left padded-bottom mc-padded-zero-left">
                            <?= $product->applies ?>
						</td>
                    <?php else: ?>
						<td class="property-values lg-grid-9 xs-grid-8 mc-grid-12 padded-left padded-bottom mc-padded-zero-left">
							Уточните у менеджера
						</td>
                    <?php endif; ?>
				</tr>

				</tbody>
			</table>

		</div>

		<!--Характеристики-->
		<div id="characteristics" class="tabs-content row">

			<table class="product-properties lg-grid-12">
				<tbody>
				<tr>

					<td class="property-title lg-grid-3  xs-grid-4 mc-grid-12  padded-right padded-bottom mc-padded-zero-right mc-padded-top">
						Артикул:
					</td>

                    <?php if ( !empty($product->article) ): ?>
						<td class="property-values lg-grid-9 xs-grid-8 mc-grid-12 padded-left padded-bottom mc-padded-zero-left">
                            <?= $product->article ?>
						</td>
                    <?php else: ?>
						<td class="property-values lg-grid-9 xs-grid-8 mc-grid-12 padded-left padded-bottom mc-padded-zero-left">
							Уточните у менеджера
						</td>
                    <?php endif; ?>
				</tr>

				<tr>
					<td class="property-title lg-grid-3  xs-grid-4 mc-grid-12 padded-right padded-bottom mc-padded-zero-right mc-padded-top">
						Материал:
					</td>
                    <?php if ( !empty($product->material) ): ?>
						<td class="property-values lg-grid-9 xs-grid-8 mc-grid-12 padded-left padded-bottom mc-padded-zero-left">
                            <?= $product->material ?>
						</td>
                    <?php else: ?>
						<td class="property-values lg-grid-9 xs-grid-8 mc-grid-12 padded-left padded-bottom mc-padded-zero-left">
							-
						</td>
                    <?php endif; ?>
				</tr>

				<tr>
					<td class="property-title lg-grid-3  xs-grid-4 mc-grid-12 padded-right padded-bottom mc-padded-zero-right mc-padded-top">
						Производитель:
					</td>
                    <?php if ( $product->production ) : ?>
						<td class="property-values lg-grid-9 xs-grid-8 mc-grid-12 padded-left padded-bottom mc-padded-zero-left">
                            <?= $product->production ?>
						</td>
                    <?php else: ?>
						<td class="property-values lg-grid-9 xs-grid-8 mc-grid-12 padded-left padded-bottom mc-padded-zero-left">
							Уточните у менеджера
						</td>
                    <?php endif; ?>
				</tr>

				</tbody>
			</table>
		</div>

		<!--Заказ-->
		<div id="characteristics" class="tabs-content row">
			<p>Данный товар Вы можете заказать по телефонам:</p>
			<br>
			<p>
			<span>
				<i class="fa fa-phone" aria-hidden="true"></i>
 			</span>
				<a href="tel:+38(066)1963651">+3 8(066)-196-36-51</a>
			</p>
			<br>
			<p>
				<span>
					<i class="fa fa-phone" aria-hidden="true"></i>
 				</span>
				<a href="tel:+38(071)3632460">+38(071)-363-24-60</a>
			</p>
			<br>
			<p>Или заполнив контактную форму</p>


			<p class="product-quick_checkout product-buy button button--buy_invert button--large mc-grid-12 inline-middle" data-title="<?= $product->title ?>" data-article="<?= $product->article ?>" title="<?= $product->title ?>">
				Быстрый заказ
			</p>


		</div>
	</div>

	<div class="lg-grid-12">


		<div class="slider slider--product">

			<div class="slider-title">

				Не забудьте купить

			</div>

			<div class="slider-container owl-carousel js-slider--products owl-loaded owl-drag">
                <?php foreach ( $products as $product ): ?>

					<div class="padded">
						<div class="product_preview">

							<div class="product_preview-preview ">

								<a href="<?= Url::to(['product/view','id'=>$product->id]) ?>"
								   class="product_preview-image image-square"
								title="<?= $product->title ?>">
									<?= Html::img("@web/products/{$product->image_1}",['title'=>$product->title,'alt'=>$product->title]) ?>

								</a>
							</div>


							<form action="/cart_items" data-params="product_id: 54029344;"
								  class="product_preview-form row">

								<div class="product_preview-prices prices lg-grid-12">
									<div class="prices-current">
                                        <?= $product->price ?>&nbsp;руб
									</div>
								</div>


								<a href="<?= Url::to(['product/view', 'id' => $product->id]) ?>" class="product_preview-button button button--buy lg-grid-12" title="<?= $product->title ?>">
									Подробнее
								</a>

							</form>

							<div class="product_preview-title">
								<a href="<?= Url::to(['product/view','id'=>$product->id]) ?>"
								   class="product_preview-link"
								   title="<?= $product->title ?>">
                                    <?= $product->title ?>
								</a>
							</div>
						</div>
					</div>

                <?php endforeach; ?>

			</div>
		</div>
	</div>
</div>
