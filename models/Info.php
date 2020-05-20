<?php


    namespace app\models;


    use yii\db\ActiveRecord;

    class Info extends ActiveRecord
    {
        public static function tableName()
        {
            return 'info';
        }

    }