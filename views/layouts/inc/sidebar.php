<div class="lg-grid-3 md-grid-3 sm-hidden xs-hidden padded-inner-sides lg-fr md-fr center">

    <div class="sidebar">
<?php $news = $this->params['news'] ?>
        <?php if (!empty($news)): ?>
            <div class="sidebar_block">
                <div class="sidebar_block-title">
                    Новые статьи
                </div>
                <div class="sidebar_block-content-news">
                    <?php foreach ( $news as $post ): ?>

                        <div class="article_preview article_preview--list">
                            <a href="<?= \yii\helpers\Url::to(['blog/view','ud'=> $post->id]) ?>" class="article_preview-title">
                                <?= $post->title ?> магазина
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
                    <script src="//vk.com/js/api/openapi.js?121" type="text/javascript"></script>
                </p>
                <!-- VK Widget -->
                <div id="vk_groups"></div>
                <p>
                    <script type="text/javascript">// <![CDATA[
                        VK.Widgets.Group("vk_groups", {
                            mode: 0,
                            width: "220",
                            height: "400",
                            color1: 'FFFFFF',
                            color2: '2A7A35',
                            color3: '429E1A'
                        }, 15902899);
                        // ]]></script>
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
