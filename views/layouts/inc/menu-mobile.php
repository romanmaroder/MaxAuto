<?php

    use yii\helpers\Url;

?>
<?php $menu = $this->params['menu'] ?>
<div class="panel panel--menu js-panel--menu">

    <div class="panel_block">
        <h3 class="panel_block-title">
            Главное меню
        </h3>

        <div class="panel_block-content">

            <ul class="menu menu--main menu--mobile_panel menu--vertical">
                <?php foreach ($menu as $item): ?>

                <li class="menu-node">
                    <a href="<?= Url::to(["home/{$item->action}"]) ?>"
                       class="menu-link">
                        <?= $item->title ?>
                    </a>
                </li>
                <?php endforeach; ?>

            </ul>

        </div>
    </div>

</div>
