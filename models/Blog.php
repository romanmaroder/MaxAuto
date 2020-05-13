<?php


    namespace app\models;


    use yii\behaviors\TimestampBehavior;
    use yii\db\ActiveRecord;
    use yii\db\Expression;

    class Blog extends ActiveRecord
    {
        public static function tableName()
        {
            return 'blog';
        }

        public function behaviors()
        {
            return [
                [
                    'class'      => TimestampBehavior::class,
                    'attributes' => [
                        ActiveRecord::EVENT_BEFORE_INSERT => ['created_at'],
                        // если вместо метки времени UNIX используется datetime:
                        'value'=> new Expression('NOW()'),
                    ],
                ]
            ];
        }

    }