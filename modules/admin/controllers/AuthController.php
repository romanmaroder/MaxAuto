<?php


    namespace app\modules\admin\controllers;


    use app\models\LoginForm;
    use Yii;
    use yii\web\Response;

    class AuthController extends AppAdminController
    {
        public $layout ='auth';


        /**
         * Login action.
         *
         * @return Response|string
         */
        public function actionLogin()
        {
            if ( !Yii::$app->user->isGuest ) {
                return $this->redirect('/admin');
            }

            $model = new LoginForm();
            if ( $model->load(Yii::$app->request->post()) && $model->login() ) {
                return $this->redirect('/admin');
//                return $this->goBack();
            }

            $model->password = '';
            return $this->render('login', [
                'model' => $model,
            ]);
        }

        /**
         * Logout action.
         *
         * @return Response
         */
        public function actionLogout()
        {
            Yii::$app->user->logout();

            return $this->redirect('/admin');

//            return $this->goHome();
        }
    }