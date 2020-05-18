<?php


    namespace app\components;


    use app\models\ContactForm;
    use Yii;
    use yii\base\Widget;
    use yii\helpers\Html;

    class ModalWidget extends Widget
    {
        public function run()
        {
            $model = new ContactForm();

            if ( Yii::$app->request->isPjax ) {
                if ( $model->load(\Yii::$app->request->post()) && $model->validate() ) {
                    if ( !$model->save() ) {
                        \Yii::$app->session->setFlash('error', 'Ошибка оформления заказа');
                    } else {
                        $answer = true;

                        \Yii::$app->mailer->compose('user', ['model' => $model])
                                          ->setFrom([\Yii::$app->params['senderEmail'] => \Yii::$app->params['senderName']])
                                          ->setTo([$model->email])
                                          ->setSubject('MAX-Авто')
                                          ->send();

                        \Yii::$app->mailer->compose('list', ['model' => $model])
                                          ->setFrom([\Yii::$app->params['senderEmail'] => \Yii::$app->params['senderName']])
                                          ->setTo([\Yii::$app->params['adminEmail']])
                                          ->setSubject('Заказ с MAX-Авто')
                                          ->send();

                        return $this->render('modalWidget', compact('model', 'answer'));
                    }

                }

            }
            return $this->render('modalWidget', compact('model'));
        }
    }