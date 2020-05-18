<?php

namespace app\modules\admin\models;

use Yii;

/**
 * This is the model class for table "information".
 *
 * @property int $id
 * @property int|null $phone_1
 * @property int|null $phone_2
 * @property string|null $email
 * @property string|null $address
 * @property string|null $work_time
 * @property string|null $delivery
 * @property string|null $shop
 */
class Information extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'information';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['phone_1', 'phone_2'], 'integer'],
            [['delivery', 'shop'], 'string'],
            [['email', 'address', 'work_time'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'phone_1' => 'Phone 1',
            'phone_2' => 'Phone 2',
            'email' => 'Email',
            'address' => 'Address',
            'work_time' => 'Work Time',
            'delivery' => 'Delivery',
            'shop' => 'Shop',
        ];
    }
}
