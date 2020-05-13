<?php

    use yii\helpers\Url;

?>
<div class="wrap row padded-inner-top padded-sides sm-padded-zero-top">

    <div class="section--main_menu row grid-inline padded">

        <div class="lg-grid-9 sm-grid-12">

            <div class="grid-row xs-hidden">

                <ul class="menu menu--main menu--main_lvl_1 menu--horizontal menu--one_line js-menu--main">

					<li class="menu-node menu-node--main_lvl_1">

						<a href="<?= Url::to(['blog/index']) ?>"
						   class="menu-link <?php if ( $this->context->id == 'blog' ) echo "menu-link--current" ?>">
							F.A.Q.
						</a>

					</li>

					<li class="menu-node menu-node--main_lvl_1">

						<a href="<?= Url::to(['shop/index']) ?>"
						   class="menu-link <?php if ( $this->context->id == 'shop' ) echo "menu-link--current" ?>">
							О магазине
						</a>

					</li>

					<li class="menu-node menu-node--main_lvl_1">

						<a href="<?= Url::to(['contact/index']) ?>"
						   class="menu-link <?php if ( $this->context->id == 'contact' ) echo "menu-link--current" ?>">
							Контакты
						</a>

					</li>

					<li class="menu-node menu-node--main_lvl_1">

						<a href="<?= Url::to(['delivery/index']) ?>"
						   class="menu-link  <?php if ( $this->context->id == 'delivery' ) echo "menu-link--current" ?>">
							Доставка и оплата
						</a>

					</li>

					<li class="menu-node menu-node--main_lvl_1">

						<a href="<?= Url::to(['home/index']) ?>"
						   class="menu-link  <?php if ( $this->context->id == 'home' ) echo "menu-link--current" ?>">
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
