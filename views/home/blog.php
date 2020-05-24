<?php

use yii\helpers\Url;
use yii\helpers\Html;
use app\models\Blog;

?>


<?= $this->render('//layouts/inc/sidebar') ?>
<?php if($this->beginCache('aside-widget', [
    'duration' => 3600, //(default = 0)
    'dependency' => [
        'class' => 'yii\caching\DbDependency',
        'sql' => 'SELECT MAX(updated_at) FROM ' . Blog::tableName(),
    ],])): ?>
<div class="blog row lg-grid-9 md-grid-9 sm-grid-12 xs-grid-12 padded-inner-sides">
    <div class="row">
        <div class="breadcrumbs">

            <a href="<?= Url::home() ?>" class="breadcrumbs-page breadcrumbs-page--home">
                <i class="fa fa-home"></i>
            </a>

            <span class="breadcrumbs-pipe">
    					<i class="fa fa-angle-right"></i>
  					</span>

            <span class="breadcrumbs-page"><?= $this->title ?></span>
        </div>
    </div>

    <h1 class="blog-title content-title">
        Часто задаваемые вопросы
    </h1>

    <div class="blog-article_list">

        <?php if (!empty($news)): ?>
        <?php foreach ($news

        as $post): ?>
        <div class="lg-grid-12">
            <div class="article_preview article_preview--blog">
                <div class="row">

                    <div class="article_preview-image_wrapper xs-hidden fl padded-right padded-bottom">
                        <a href="<?= Url::to(['blog/view', 'id' => $post->id]) ?>"
                           class="article_preview-image padded-right padded-bottom">

                            <?php if (!empty($post->image)) : ?>
                                <?= Html::img("@web/{$post->image}", ['title' => $post->title, 'style' => 'max-width:250px;']) ?>
                            <?php else: ?>
                                <?= Html::img("@web/images/default/no-image.png", ['title' => $post->title]) ?>
                            <?php endif; ?>

                        </a>
                    </div>

                    <h2 class="article_preview-title">
                        <a href="<?= Url::to(['blog/view', 'id' => $post->id]) ?>" title="Третья новость магазина">
                            <?= $post->title ?>
                        </a>
                    </h2>

                    <div class="article_preview-note article-note">
                        Опубликовано: <?= \Yii::$app->formatter->asDate($post->created_at); ?>
                    </div>

                    <div class="article_preview-content article-content editor">
                        <p><?= $post->title ?></p>
                    </div>

                    <div class="article_preview-details article-details">
                        <a href="<?= Url::to(['blog/view', 'id' => $post->id]) ?>"
                           class="article_preview-read_more button">
                            Читать далее
                        </a>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
            <?php else: ?>
                <div class="lg-grid-12">
                    Нет новостей
                </div>
            <?php endif; ?>
        </div>

    </div>
</div>
    <?php $this->endCache(); endif; ?>