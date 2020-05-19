<?php

namespace app\modules\admin\models;

use Yii;

/**
 * This is the model class for table "product".
 *
 * @property int $id
 * @property int|null $category_id
 * @property string $title
 * @property int|null $article
 * @property string|null $material
 * @property string|null $production
 * @property string|null $engine_type
 * @property string|null $engine_size
 * @property string|null $equipment
 * @property string|null $applies
 * @property float $price
 * @property int|null $availability
 * @property int|null $sale
 * @property int $discount
 * @property int|null $hits
 * @property string|null $image_1
 * @property string|null $image_2
 * @property string|null $image_3
 * @property string|null $image_4
 * @property string|null $description
 * @property string|null $keywords
 * @property string|null $content
 */
class Product extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'product';
    }

    public function getCategory()
    {
        return $this->hasOne(Category::class,['id'=>'category_id']);
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['category_id', 'article', 'availability', 'sale', 'discount', 'hits'], 'integer'],
            [['title', 'price'], 'required'],
            [['equipment', 'applies', 'content'], 'string'],
            [['price'], 'number'],
            [['title', 'material', 'production', 'engine_type', 'engine_size', 'image_1', 'image_2', 'image_3', 'image_4', 'description', 'keywords'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'category_id' => 'Категория',
            'title' => 'Наименование',
            'article' => 'Артикул',
            'material' => 'Материал',
            'production' => 'Производство',
            'engine_type' => 'Тип двигателя',
            'engine_size' => 'Объём двигателя',
            'equipment' => 'Комплектация',
            'applies' => 'Применяемость',
            'price' => 'Цена',
            'availability' => 'Доступность',
            'sale' => 'Акция',
            'discount' => 'Скидка',
            'hits' => 'Хиты продажи',
            'image_1' => 'Картинка 1',
            'image_2' => 'Картинка 2',
            'image_3' => 'Картинка 3',
            'image_4' => 'Картинка 4',
            'description' => 'Описание',
            'keywords' => 'Ключевые слова',
            'content' => 'Контент',
        ];
    }
}
