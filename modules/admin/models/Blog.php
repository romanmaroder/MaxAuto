<?php

namespace app\modules\admin\models;

use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;
use yii\db\Expression;

/**
 * This is the model class for table "blog".
 *
 * @property int $id
 * @property string|null $title
 * @property string $image
 * @property string|null $content
 * @property string $created_at
 * @property string $updated_at
 */
class Blog extends ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'blog';
    }

    public function behaviors()
    {
        return [
            [
                'class' => TimestampBehavior::class,
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_INSERT => ['created_at', 'updated_at'],
                    ActiveRecord::EVENT_BEFORE_UPDATE => ['updated_at'],
                ],
                // если вместо метки времени UNIX используется datetime:
                'value' => new Expression('NOW()'),
            ],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['content'], 'string'],
//            [['created_at','updated_at'], 'required'],
            [['status'], 'number'],
            [['created_at', 'updated_at'], 'safe'],
            [['title', 'image'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Заголовок',
            'image' => 'Картинка заголовка',
            'content' => 'Контент',
            'created_at' => 'Создано',
            'updated_at' => 'Обновлено',
            'status' => 'Статус',
        ];
    }


}
