<?php


    namespace app\controllers;


    use app\models\ContactForm;
    use app\models\Feedback;
    use Yii;

    class FeedbackController extends AppController
    {
        public function actionIndex()
        {
            $this->view->title= 'Обратная связь';

            $model = new ContactForm();

            if ( Yii::$app->request->isPjax ) {

                if ( $model->load(\Yii::$app->request->post()) && $model->validate() ) {

                    if ( !$model->save() ) {
                        \Yii::$app->session->setFlash('error', 'Ошибка оформления сообщения');
                    } else {

                        $answer = true;

                        \Yii::$app->mailer->compose('list', ['model' => $model])
                                          ->setFrom([\Yii::$app->params['senderEmail'] => \Yii::$app->params['senderName']])
                                          ->setTo([\Yii::$app->params['adminEmail']])
                                          ->setSubject('Обратная связь MAX-Авто')
                                          ->send();
                       return $this->render('index', compact('model', 'answer'));
                    }

                }
            }

            return $this->render('index',compact('model'));
        }

    }