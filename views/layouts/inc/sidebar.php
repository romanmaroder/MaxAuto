<?php
use app\models\Blog;

?>
<div class="lg-grid-3 md-grid-3 sm-hidden xs-hidden padded-inner-sides lg-fr md-fr center">

    <div class="sidebar">

<?php $lastNews = $this->params['lastNews'] ?>

        <?php if (!empty($lastNews)): ?>
            <div class="sidebar_block">
                <div class="sidebar_block-title">
                    Последние вопросы
                </div>
                <div class="sidebar_block-content-news">
                    <?php foreach ( $lastNews as $post ): ?>

                        <div class="article_preview article_preview--list">
                            <a href="<?= \yii\helpers\Url::to(['blog/view','id'=> $post->id]) ?>" class="article_preview-title">
                                <?= $post->title ?>
                            </a>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

        <?php endif; ?>


        <div class="sidebar_block">
            <div class="sidebar_block-title">Группа ВКонтакте</div>
            <div class="sidebar_block-content editor">
                <p>
                    <?php $this->registerJsFile('https://vk.com/js/api/openapi.js?168',['position' => yii\web\View::POS_HEAD,]) ?>
                </p>
                <!-- VK Widget -->
                <div id="vk_groups"></div>
                <p>
                    <?php
                        $vk_widjet = <<<JS
VK.Widgets.Group("vk_groups", {
                            mode: 0,
                            width: "220",
                            height: "400",
                            color1: 'FFFFFF',
                            color2: '2A7A35',
                            color3: '429E1A'
                        }, 51608770);
JS;
                        $this->registerJs($vk_widjet, $position = yii\web\View::POS_READY, $key = null);
                    ?>

                </p>
            </div>
        </div>
   <div class="sidebar_block">
            <div class="sidebar_block-title">Мессенджеры</div>
            <div class="sidebar_block-content editor">

                <a href="https://t.me/">
                    <i class="fa fa-telegram fa-2x" aria-hidden="true"></i>
                </a>
                <a href="https://wapp.click/79+380661963651">
                    <i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
                </a>
                <a href="https://viber.click/79380661963651">
                    <i class="fa fa-viber fa-2x" aria-hidden="true"></i>
                </a>
                <!--<a href="#"><i class="fa fa-vk fa-2x" aria-hidden="true"></i></a>-->
            </div>
        </div>
    </div>
</div>
