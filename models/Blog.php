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
    }