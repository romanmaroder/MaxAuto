<?php

    use yii\helpers\Url;

?>

<?php $menu = $this->params['menu'] ?>
<div class="wrap row padded-inner-top padded-sides sm-padded-zero-top">

    <div class="section--main_menu row grid-inline padded">

        <div class="lg-grid-9 sm-grid-12">

            <div class="grid-row xs-hidden">

                <ul class="menu menu--main menu--main_lvl_1 menu--horizontal menu--one_line js-menu--main">

                    <?php foreach ($menu as $item): ?>

                    <li class="menu-node menu-node--main_lvl_1">

                        <a href="<?= Url::to(["home/{$item->action}"]) ?>"
                           class="menu-link <?php if ( $this->context->id == 'blog' ) echo "menu-link--current" ?>">
                            <?= $item->title ?>

                        </a>

                    </li>

                    <?php  endforeach;?>

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

