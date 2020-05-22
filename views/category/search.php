<?php

    use yii\helpers\Html;
    use yii\helpers\Url;

?>

<div class="collection row lg-grid-12 md-grid-12 sm-grid-12 xs-grid-12 padded-inner-sides">

    <div class="row">

        <div class="breadcrumbs">

            <a href="<?= Url::home() ?>" class="breadcrumbs-page breadcrumbs-page--home">
                <i class="fa fa-home"></i>
            </a>

            <span class="breadcrumbs-pipe">
                        <i class="fa fa-angle-right"></i>
                    </span>

            <span class="breadcrumbs-page">Поиск</span>

        </div>

    </div>

    <h1 class="collection-title content-title">
        <?= $category->title ?>
    </h1>

    <div class="collection-description--top grid-row padded-inner-bottom">
		<h3>Поиск: <i><?= \yii\helpers\Html::encode($q) ?></i></h3>
	</div>
    <?php if ( !empty($products) ): ?>
    <div class="collection-products_list grid-inline grid-row-inner">

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

                    <form action="/cart_items" class="product_preview-form row">

                        <div class="product_preview-prices prices lg-grid-12">
                            <div class="prices-current">
                                <?= $product->price ?> руб
                            </div>
                        </div>

                        <input type="hidden" name="variant_id" value="85226247">

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

    </div>
    <?php else: ?>
		<div class="lg-grid-3 md-grid-4 xs-grid-6 mc-grid-12
									padded-inner">
			<h6 style="text-align: center">По запросу ничего не найдено</h6>
		</div>
    <?php endif; ?>

    <!--	Pagination-->
    <div class="row">
        <div class="xs-grid-12 lg-fr xs-center">

            <div class="sm-center xs-center">
                <?= \yii\widgets\LinkPager::widget(['pagination' => $pages,
                                                    'nextPageLabel' => '<i class="fa fa-angle-right"></i>',
                                                    'prevPageLabel' => '<i class="fa fa-angle-left"></i>',
                                                    'nextPageCssClass' => 'pagination-node pagination-node--link',
                                                    'prevPageCssClass' => 'pagination-node pagination-node--link',
                                                    'options'    => [
                                                        'class' => 'pagination pagination--horizontal',

                                                    ],
                                                    'linkContainerOptions'=>[
                                                        'class'=>'pagination-page',
                                                    ],
                                                    'linkOptions'=>[
                                                        'class'=>'pagination-node pagination-node--link'
                                                    ]
                ]) ?>
            </div>

        </div>
    </div>

</div>
