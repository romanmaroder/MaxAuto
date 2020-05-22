<?php


    namespace app\models;


    use yii\db\ActiveRecord;

    class Banner extends ActiveRecord
    {
        public static function tableName()
        {
            return 'banner';
        }
    }