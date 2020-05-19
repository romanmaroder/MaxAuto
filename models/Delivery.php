<?php


    namespace app\models;


    use yii\db\ActiveRecord;

    class Delivery extends ActiveRecord
    {
        public static function tableName()
        {
            return 'delivery';
        }
    }