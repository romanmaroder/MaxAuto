<?php


    namespace app\models;


    use Yii;
    use yii\db\ActiveRecord;

    class ContactForm extends ActiveRecord
    {
        public static function tableName()
        {
            return 'mail';
        }

        public function rules()
        {
            return [
                [['name', 'email', 'message','phone'], 'required'],
                ['phone', 'number'],
                ['email', 'email'],
            ];
        }

        public function attributeLabels()
        {
            return [
                'name'    => 'Ф.И.О',
                'email'   => 'E-mail',
                'message' => 'Сообщение',
                'phone' => 'Контактный телефон',
            ];
        }

    }