<?php

    namespace app\modules\admin\models;

    use yii\base\Model;
    use yii\data\ActiveDataProvider;
    use app\modules\admin\models\Product;

    /**
     * ProductSearch represents the model behind the search form of `app\modules\admin\models\Product`.
     */
    class ProductSearch extends Product
    {
        /**
         * {@inheritdoc}
         */
        public function rules()
        {
            return [
                [['id', 'category_id', 'article', 'availability', 'sale', 'discount', 'hits'], 'integer'],
                [['title', 'material', 'production', 'engine_type', 'engine_size', 'equipment', 'applies', 'image_1',
                  'image_2', 'image_3', 'image_4', 'description', 'keywords', 'content'], 'safe'],
                [['price'], 'number'],
            ];
        }

        /**
         * {@inheritdoc}
         */
        public function scenarios()
        {
            // bypass scenarios() implementation in the parent class
            return Model::scenarios();
        }

        /**
         * Creates data provider instance with search query applied
         *
         * @param array $params
         *
         * @return ActiveDataProvider
         */
        public function search($params)
        {
            $query = Product::find();

            // add conditions that should always apply here

            $dataProvider = new ActiveDataProvider([
                'query'      => $query,
                'pagination' => [
                    'pageSize' => 5,
                ]
            ]);

            $this->load($params);

            if ( !$this->validate() ) {
                // uncomment the following line if you do not want to return any records when validation fails
                // $query->where('0=1');
                return $dataProvider;
            }

            // grid filtering conditions
            $query->andFilterWhere([
                'id'           => $this->id,
                'category_id'  => $this->category_id,
                'article'      => $this->article,
                'price'        => $this->price,
                'availability' => $this->availability,
                'sale'         => $this->sale,
                'discount'     => $this->discount,
                'hits'         => $this->hits,
            ]);

            $query->andFilterWhere(['like', 'title', $this->title])
                  ->andFilterWhere(['like', 'material', $this->material])
                  ->andFilterWhere(['like', 'production', $this->production])
                  ->andFilterWhere(['like', 'engine_type', $this->engine_type])
                  ->andFilterWhere(['like', 'engine_size', $this->engine_size])
                  ->andFilterWhere(['like', 'equipment', $this->equipment])
                  ->andFilterWhere(['like', 'applies', $this->applies])
                  ->andFilterWhere(['like', 'image_1', $this->image_1])
                  ->andFilterWhere(['like', 'image_2', $this->image_2])
                  ->andFilterWhere(['like', 'image_3', $this->image_3])
                  ->andFilterWhere(['like', 'image_4', $this->image_4])
                  ->andFilterWhere(['like', 'description', $this->description])
                  ->andFilterWhere(['like', 'keywords', $this->keywords])
                  ->andFilterWhere(['like', 'content', $this->content]);

            return $dataProvider;
        }
    }
